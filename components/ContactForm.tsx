'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const WEBHOOK_URL =
  'https://hook.eu1.make.com/23yivkzbah18pk6lm6hq3xg5urtj2g64';

export default function ContactForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => prev.filter((item) => item !== field));
  };

  const hasError = (field: string) => errors.includes(field);

  const inputClass = (field: string) =>
    `w-full rounded-xl bg-white/5 border px-4 py-3 outline-none transition ${
      hasError(field)
        ? 'border-violet-400 text-violet-200 placeholder:text-violet-400'
        : 'border-white/10 focus:border-violet-400'
    }`;

  const submitForm = async () => {
    const required = ['name', 'company', 'email', 'message'];
    const missing = required.filter(
      (field) => !form[field as keyof typeof form].trim()
    );

    if (missing.length) {
      setErrors(missing);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      router.push('/thank-you');
    } catch {
      setErrors(['submit']);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="card rounded-3xl p-8 space-y-4" noValidate>
      <input
        className={inputClass('name')}
        placeholder="Name"
        value={form.name}
        onChange={(e) => updateField('name', e.target.value)}
      />

      <input
        className={inputClass('company')}
        placeholder="Company"
        value={form.company}
        onChange={(e) => updateField('company', e.target.value)}
      />

      <input
        className={inputClass('email')}
        placeholder="Email"
        value={form.email}
        onChange={(e) => updateField('email', e.target.value)}
      />

      <input
        className={inputClass('phone')}
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => updateField('phone', e.target.value)}
      />

      <textarea
        className={`${inputClass('message')} min-h-40`}
        placeholder="What do you want to automate or build?"
        value={form.message}
        onChange={(e) => updateField('message', e.target.value)}
      />

      {errors.length > 0 && (
        <p className="text-sm text-violet-300">
          Please fill in the required fields.
        </p>
      )}

      {errors.includes('submit') && (
        <p className="text-sm text-violet-300">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="button"
        onClick={submitForm}
        disabled={isSubmitting}
        className="btn-primary rounded-xl px-5 py-3 font-semibold disabled:opacity-60"
      >
        {isSubmitting ? 'Submitting...' : 'Submit inquiry'}
      </button>
    </form>
  );
}
