import AnimatedSection from '@/components/animated-section';
import HubspotContactForm from '@/components/contact/HubspotContactForm';
import HubspotMeeting from '@/components/contact/HubspotMeeting';
import {getTranslations} from 'next-intl/server';

export default async function ContactPage({ params }: { params: { locale: string }}) {
  const t = await getTranslations({ locale: params.locale, namespace: 'Contact' });
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative pt-24 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center">
            <h1 className="text-5xl md:text-7xl font-thin text-gray-900 mb-6 tracking-tight">
              {t('title_part1')}<span className="text-red-500">{t('title_part2')}</span>
            </h1>
            <p className="text-2xl font-light text-gray-600 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="space-y-12 py-12">
        <section>
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center gap-12">
            <AnimatedSection animation="fade-up" className="basis-1/2">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200/80 text-center">
                <h2 className="text-3xl font-thin text-gray-900 mb-2">{t('meeting_title')}</h2>
                <p className="text-gray-600 font-light mb-6 max-w-2xl mx-auto">{t('meeting_subtitle')}</p>
                <div className="overflow-hidden rounded-2xl">
                  <HubspotMeeting />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200} className="basis-1/2">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200/80 text-center">
                <h2 className="text-3xl font-thin text-gray-900 mb-2">{t('form_title')}</h2>
                <p className="text-gray-600 font-light mb-6">{t('form_subtitle')}</p>
                <HubspotContactForm />
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </main>
  );
}


