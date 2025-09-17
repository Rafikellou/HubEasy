import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';
import { CheckCircle, Zap, Users, Heart } from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Notre Vocation | HubEasy',
  description: 'Découvrez la mission et les valeurs de HubEasy, agence spécialisée dans l\'intégration HubSpot pour les PME/ETI B2B.',
  alternates: {
    canonical: '/agence/notre-vocation',
  },
};

export default async function NotreVocationPage({ params }: { params: { locale: string }}) {
  const t = await getTranslations({ locale: params.locale, namespace: 'AgencyVocation' });

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden">
         <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
            alt={t('hero_img_alt')}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-white">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight">
              {t('hero_title')} <span className="font-light text-red-500">{t('hero_title_highlight')}</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">{t('mission_title')}</h2>
            <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed">
              {t('mission_subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-4 tracking-tight">{t('founders_title')} <span className="text-red-500">{t('founders_title_highlight')}</span></h2>
            <p className="text-gray-600 font-light">{t('founders_subtitle')}</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Rafik card */}
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="flex items-center gap-6 mb-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-md">
                    <Image src="/images/rafik-photo.jpg" alt={t('rafik_alt')} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-gray-900">{t('rafik_name')}</h3>
                    <p className="text-red-500 font-medium">{t('rafik_role')}</p>
                  </div>
                </div>
                <ul className="space-y-3 font-light text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" /><span>{t('rafik_exp1')}</span></li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" /><span>{t('rafik_exp2')}</span></li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" /><span>{t('rafik_exp3')}</span></li>
                </ul>
              </div>
            </AnimatedSection>

            {/* David card */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="flex items-center gap-6 mb-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-md">
                    <Image src="/images/david-photo.jpg" alt={t('david_alt')} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-gray-900">{t('david_name')}</h3>
                    <p className="text-red-500 font-medium">{t('david_role')}</p>
                  </div>
                </div>
                <ul className="space-y-3 font-light text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" /><span>{t('david_exp1')}</span></li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" /><span>{t('david_exp2')}</span></li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" /><span>{t('david_exp3')}</span></li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <AnimatedSection animation="fade-up" className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-4 tracking-tight">{t('approach_title')}</h2>
           </AnimatedSection>
           <div className="grid md:grid-cols-3 gap-8">
                <AnimatedSection animation="fade-up" delay={100}>
                    <div className="bg-gray-50 p-8 rounded-3xl text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Zap className="w-12 h-12 text-red-500 mx-auto mb-6"/>
                        <h3 className="text-2xl font-light text-gray-900 mb-4">{t('approach1_title')}</h3>
                        <p className="text-gray-600 font-light">{t('approach1_desc')}</p>
                    </div>
                </AnimatedSection>
                <AnimatedSection animation="fade-up" delay={200}>
                    <div className="bg-gray-50 p-8 rounded-3xl text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Users className="w-12 h-12 text-red-500 mx-auto mb-6"/>
                        <h3 className="text-2xl font-light text-gray-900 mb-4">{t('approach2_title')}</h3>
                        <p className="text-gray-600 font-light">{t('approach2_desc')}</p>
                    </div>
                </AnimatedSection>
                <AnimatedSection animation="fade-up" delay={300}>
                    <div className="bg-gray-50 p-8 rounded-3xl text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Heart className="w-12 h-12 text-red-500 mx-auto mb-6"/>
                        <h3 className="text-2xl font-light text-gray-900 mb-4">{t('approach3_title')}</h3>
                        <p className="text-gray-600 font-light">{t('approach3_desc')}</p>
                    </div>
                </AnimatedSection>
           </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="relative py-24 md:py-32 bg-black text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
            <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
                alt={t('summary_img_alt')}
                fill
                className="object-cover"
            />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
            <AnimatedSection animation="fade-up">
                <h2 className="text-4xl md:text-5xl font-thin mb-6 tracking-tight">{t('summary_title')}</h2>
                <p className="text-2xl md:text-3xl font-light leading-relaxed">
                    {t('summary_subtitle')}
                </p>
            </AnimatedSection>
        </div>
      </section>

    </main>
  );
}

