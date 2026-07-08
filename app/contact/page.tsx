import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact',
  description:
    'Contact Bevox to discuss AI automation, business systems, custom software, and operational workflows.',
};

export default function Contact() {
  return (
    <main className="pt-36">
      <section className="section">
        <div className="container grid lg:grid-cols-2 gap-10">
          <SectionTitle
            kicker="Contact"
            title="Tell us what is still manual."
            desc="Share the workflow, bottleneck, or system you want to improve. We will suggest the clearest path forward."
          />

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
