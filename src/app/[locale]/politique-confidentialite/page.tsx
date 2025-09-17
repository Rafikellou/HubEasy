import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Shield, Eye, Lock, Users } from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export default async function PolitiqueConfidentialitePage({ params }: { params: { locale: string }}) {
  const t = await getTranslations({ locale: params.locale, namespace: 'PrivacyPolicy' });

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
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-red-600 mr-3" />
              <h1 className="text-4xl md:text-5xl font-thin text-gray-900">
                {t('title')}
              </h1>
            </div>
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
            
            {/* Introduction */}
            <div className="mb-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-start">
                <Eye className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('intro_title')}</h3>
                  <p className="text-gray-700">
                    {t('intro_content')}
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              
              {/* Responsable du traitement */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('section1_title')}</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p><strong>{t('section1_company')}</strong></p>
                  <p>{t('section1_address')}</p>
                  <p><strong>{t('section1_dpo')}:</strong> {t('section1_dpo_email')}</p>
                </div>
              </div>

              {/* Données collectées */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('section2_title')}</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3">{t('section2_identification_title')}</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• {t('section2_identification_item1')}</li>
                      <li>• {t('section2_identification_item2')}</li>
                      <li>• {t('section2_identification_item3')}</li>
                      <li>• {t('section2_identification_item4')}</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-3">{t('section2_technical_title')}</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• {t('section2_technical_item1')}</li>
                      <li>• {t('section2_technical_item2')}</li>
                      <li>• {t('section2_technical_item3')}</li>
                      <li>• {t('section2_technical_item4')}</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  {t('section2_content')}
                </p>
              </div>

              {/* Finalités */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('section3_title')}</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-red-50 rounded-lg border border-red-200">
                    <Users className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-1">{t('section3_service_title')}</h4>
                      <p className="text-sm text-red-700">{t('section3_service_desc')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <Shield className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-1">{t('section3_communication_title')}</h4>
                      <p className="text-sm text-purple-700">{t('section3_communication_desc')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <Eye className="w-5 h-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-1">{t('section3_improvement_title')}</h4>
                      <p className="text-sm text-yellow-700">{t('section3_improvement_desc')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Base légale */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('section4_title')}</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>{t('section4_contract')}:</strong> {t('section4_contract_desc')}</li>
                    <li><strong>{t('section4_legitimate')}:</strong> {t('section4_legitimate_desc')}</li>
                    <li><strong>{t('section4_consent')}:</strong> {t('section4_consent_desc')}</li>
                    <li><strong>{t('section4_legal')}:</strong> {t('section4_legal_desc')}</li>
                  </ul>
                </div>
              </div>

              {/* Partage des données */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('section5_title')}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('section5_content')}
                </p>
                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>{t('section5_service_providers')}:</strong> {t('section5_service_providers_desc')}</li>
                    <li>• <strong>{t('section5_legal_obligations')}:</strong> {t('section5_legal_obligations_desc')}</li>
                    <li>• <strong>{t('section5_rights_protection')}:</strong> {t('section5_rights_protection_desc')}</li>
                  </ul>
                </div>
              </div>

              {/* Conservation */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('section6_title')}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-blue-800 mb-3">{t('section6_active_clients')}</h4>
                    <p className="text-sm text-blue-700">{t('section6_active_clients_desc')}</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-green-800 mb-3">{t('section6_prospects')}</h4>
                    <p className="text-sm text-green-700">{t('section6_prospects_desc')}</p>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-yellow-800 mb-3">{t('section6_navigation')}</h4>
                    <p className="text-sm text-yellow-700">{t('section6_navigation_desc')}</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-purple-800 mb-3">{t('section6_legal_obligations')}</h4>
                    <p className="text-sm text-purple-700">{t('section6_legal_obligations_desc')}</p>
                  </div>
                </div>
              </div>

              {/* Droits */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('section7_title')}</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('section7_content')}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('section7_right_access')}</h4>
                    <p className="text-sm text-gray-600">{t('section7_right_access_desc')}</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('section7_right_rectification')}</h4>
                    <p className="text-sm text-gray-600">{t('section7_right_rectification_desc')}</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('section7_right_erasure')}</h4>
                    <p className="text-sm text-gray-600">{t('section7_right_erasure_desc')}</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('section7_right_portability')}</h4>
                    <p className="text-sm text-gray-600">{t('section7_right_portability_desc')}</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('section7_right_opposition')}</h4>
                    <p className="text-sm text-gray-600">{t('section7_right_opposition_desc')}</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('section7_right_limitation')}</h4>
                    <p className="text-sm text-gray-600">{t('section7_right_limitation_desc')}</p>
                  </div>
                </div>
                <div className="mt-6 p-6 bg-red-50 rounded-xl border border-red-200">
                  <p className="text-red-800">
                    <strong>{t('section7_how_to_exercise')}:</strong> {t('section7_how_to_exercise_desc')}
                  </p>
                </div>
              </div>

              {/* Sécurité */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('section8_title')}</h2>
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <div className="flex items-start">
                    <Lock className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-3">{t('section8_protection_measures')}</h4>
                      <ul className="text-green-700 space-y-2">
                        <li>• {t('section8_measure1')}</li>
                        <li>• {t('section8_measure2')}</li>
                        <li>• {t('section8_measure3')}</li>
                        <li>• {t('section8_measure4')}</li>
                        <li>• {t('section8_measure5')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('section9_title')}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('section9_content')}
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('section9_essential')}</h4>
                    <p className="text-sm text-gray-600">{t('section9_essential_desc')}</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">{t('section9_analytical')}</h4>
                    <p className="text-sm text-blue-600">{t('section9_analytical_desc')}</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">{t('section9_marketing')}</h4>
                    <p className="text-sm text-purple-600">{t('section9_marketing_desc')}</p>
                  </div>
                </div>
              </div>

              {/* Transferts internationaux */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('section10_title')}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('section10_content')}
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• {t('section10_measure1')}</li>
                  <li>• {t('section10_measure2')}</li>
                  <li>• {t('section10_measure3')}</li>
                </ul>
              </div>

              {/* Contact et réclamations */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('section11_title')}</h2>
                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                  <p className="text-red-800 mb-4">
                    <strong>{t('section11_questions')}:</strong>
                  </p>
                  <ul className="text-red-700 space-y-1">
                    <li>{t('section11_email')}: {t('section11_dpo_email')}</li>
                    <li>{t('section11_mail')}: {t('section11_mail_address')}</li>
                  </ul>
                  <p className="text-red-800 mt-4">
                    <strong>{t('section11_complaint_right')}:</strong> {t('section11_complaint_right_desc')}
                  </p>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`mailto:${t('section11_dpo_email')}`}>
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
                >
                  {t('cta_button1')}
                </Button>
              </Link>
              <Link href={`/${params.locale}/contact`}>
                <Button 
                  variant="outline"
                  className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
                >
                  {t('cta_button2')}
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

