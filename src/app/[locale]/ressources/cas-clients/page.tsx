import React from 'react';
import { getTranslations } from 'next-intl/server';
import { locales } from '@/i18n/config';
import AnimatedSection from '@/components/animated-section';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RessourcesCasClients({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'ResourcesCasClients' });

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-6xl font-thin text-gray-900 mb-6 tracking-tight">
              <span className="text-red-500">{t('title_highlight')}</span> {t('title_rest')}
            </h1>
            <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-8">
                {t('coming_soon_title')}
              </h2>
              <p className="text-lg text-gray-600 font-light mb-8">
                {t('coming_soon_description')}
              </p>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 md:p-12">
                <p className="text-gray-700 font-light leading-relaxed">
                  {t('coming_soon_content')}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

