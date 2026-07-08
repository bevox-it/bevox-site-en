import Link from 'next/link';

export const metadata = {
  title: 'Thank You',
  description: 'Thank you for contacting Bevox.',
};

export default function ThankYou() {
  return (
    <main className="min-h-screen pt-36 flex items-center justify-center">
      <section className="section w-full">
        <div className="container max-w-3xl text-center">
          <div className="card rounded-3xl p-10 md:p-14">
            <p className="eyebrow mb-4">Message received</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
              Thank you.
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              We have received your inquiry and will get back to you soon.
            </p>
            <Link href="/" className="btn-primary rounded-xl px-6 py-3 font-semibold inline-flex">
              Go to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
