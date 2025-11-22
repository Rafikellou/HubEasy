import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export default async function MentionsLegalesPage({ params }: { params: { locale: string }}) {
  const t = await getTranslations({ locale: params.locale, namespace: 'LegalMentions' });

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <Link href={`/${params.locale}`} className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('back_to_home')}
            </Link>
            <h1 className="text-4xl md:text-5xl font-thin text-gray-900 mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-gray-600">
              {t('subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="prose prose-lg max-w-none">
              
              {/* Éditeur du site */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('section1_title')}</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p><strong>{t('section1_company_name')}:</strong> {t('section1_company_value')}</p>
                  <p><strong>{t('section1_legal_form')}:</strong> {t('section1_legal_form_value')}</p>
                  <p><strong>{t('section1_capital')}:</strong> {t('section1_capital_value')}</p>
                  <p><strong>{t('section1_siret')}:</strong> {t('section1_siret_value')}</p>
                  <p><strong>{t('section1_rcs')}:</strong> {t('section1_rcs_value')}</p>
                  <p><strong>{t('section1_vat')}:</strong> {t('section1_vat_value')}</p>
                  <p><strong>{t('section1_address')}:</strong><br />
                  {t('section1_address_value')}</p>

                  <p><strong>{t('section1_director')}:</strong> {t('section1_director_value')}</p>
                </div>
              </div>

              {/* Hébergement */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('section2_title')}</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p><strong>{t('section2_host')}:</strong> {t('section2_host_value')}</p>
                  <p><strong>{t('section2_address')}:</strong> {t('section2_address_value')}</p>
                  <p><strong>{t('section2_website')}:</strong> <a href="https://vercel.com" className="text-red-600 hover:text-red-700">vercel.com</a></p>
                </div>
              </div>

              {/* Propriété intellectuelle */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('section3_title')}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('section3_content1')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('section3_content2')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('section3_content3')}
                </p>
              </div>

              {/* Responsabilité */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('section4_title')}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('section4_content1')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('section4_content2')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('section4_content3')}
                </p>
              </div>

              {/* Liens hypertextes */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('section5_title')}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('section5_content1')}
                </p>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('section6_title')}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('section6_content1')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('section6_content2')}
                </p>
              </div>

              {/* Droit applicable */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('section7_title')}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('section7_content1')}
                </p>
              </div>

              {/* Contact */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('section8_title')}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('section8_content1')}
                </p>
                <div className="bg-red-50 p-6 rounded-xl">
                  <p><strong>{t('section8_mail')}:</strong><br />
                  {t('section8_mail_value')}</p>
                </div>
              </div>

              <div className="text-sm text-gray-500 border-t border-gray-200 pt-6">
                <p>{t('last_update')}: {new Date().toLocaleDateString(params.locale === 'fr' ? 'fr-FR' : 'en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('cta_title')}
            </h2>
            <p className="text-gray-600 mb-8">
              {t('cta_subtitle')}
            </p>
            <Link href={`/${params.locale}/contact`}>
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                {t('cta_button')}
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

