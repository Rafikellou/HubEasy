import AnimatedSection from '@/components/animated-section';
import HubspotContactForm from '@/components/contact/HubspotContactForm';
import HubspotMeeting from '@/components/contact/HubspotMeeting';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center">
            <h1 className="text-5xl md:text-7xl font-thin text-gray-900 mb-6 tracking-tight">
              Contactez-<span className="text-red-500">nous</span>
            </h1>
            <p className="text-2xl font-light text-gray-600 max-w-3xl mx-auto">
              Discutons de votre projet. Choisissez la méthode qui vous convient le mieux.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Sections */}
      <section className="py-16 space-y-16">
        {/* Meeting Scheduler */}
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200/50 text-center">
              <h2 className="text-3xl font-thin text-gray-900 mb-2">Bookez une visio avec Rafik</h2>
              <p className="text-gray-600 font-light mb-6 max-w-2xl mx-auto">L'un des co-fondateurs de HubEasy. Vous serez surpris par son niveau d'analyse ;)</p>
              <div className="overflow-hidden rounded-2xl">
                <HubspotMeeting />
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200/50 text-center">
              <h2 className="text-3xl font-thin text-gray-900 mb-2">Ou laissez-nous un message</h2>
              <p className="text-gray-600 font-light mb-6">Laissez-nous votre mail (au moins). Si vous rajoutez votre 06, c'est encore mieux ;)</p>
              <HubspotContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

