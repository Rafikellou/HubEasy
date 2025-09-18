import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Compass, Zap, BarChart, LifeBuoy } from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export default async function TarifsPage({ params }: { params: { locale: string }}) {
  const t = await getTranslations({ locale: params.locale, namespace: 'Pricing' });

  const processSteps = [
    { step: '1', title: t('step1_title'), price: t('step1_price'), description: t('step1_desc'), icon: Compass },
    { step: '2', title: t('step2_title'), price: t('step2_price'), description: t('step2_desc'), icon: Zap },
    { step: '3', title: t('step3_title'), price: t('step3_price'), description: t('step3_desc'), icon: LifeBuoy },
  ];

  const integrationTiers = [
    { name: t('tier1_name'), price: t('tier1_price'), idealFor: t('tier1_ideal'), icon: Zap, cta: { label: t('tier1_cta'), href: `/${params.locale}/contact` }, features: [t('tier1_f1'), t('tier1_f2'), t('tier1_f3')]},
    { name: t('tier2_name'), price: t('tier2_price'), idealFor: t('tier2_ideal'), icon: BarChart, cta: { label: t('tier2_cta'), href: `/${params.locale}/contact` }, features: [t('tier2_f1'), t('tier2_f2'), t('tier2_f3')]},
    { name: t('tier3_name'), price: t('tier3_price'), idealFor: t('tier3_ideal'), icon: BarChart, cta: { label: t('tier3_cta'), href: `/${params.locale}/contact` }, features: [t('tier3_f1'), t('tier3_f2'), t('tier3_f3')]},
  ];

  const supportFeatures = [t('support_f1'), t('support_f2'), t('support_f3')];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="relative py-24 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/tarif-photo.jpg" alt={t('hero_alt')} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl font-thin text-white mb-6 tracking-tight">
              {t('hero_title_1')} <span className="text-red-500">{t('hero_title_2')}</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto">
              {t('hero_subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900">{t('process_title')}</h2>
            <p className="mt-2 text-base md:text-lg font-normal text-gray-500">{t('process_subtitle')}</p>
          </AnimatedSection>
          <div className="relative">
            <div className="hidden lg:block absolute top-32 left-16 right-16 h-0.5 bg-gray-200"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <AnimatedSection key={step.step} animation="fade-up" delay={index * 150}>
                  <div className="relative">
                    <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-6">
                        <step.icon className="w-8 h-8 text-red-500" />
                      </div>
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-sm font-medium rounded-full mb-2">
                          {t('step_label')} {step.step}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-lg font-semibold text-red-600 mb-3">{step.price}</p>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900">{t('tiers_title')}</h2>
            <p className="mt-2 text-base md:text-lg font-normal text-gray-500">{t('tiers_subtitle')}</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {integrationTiers.map((tier, index) => (
              <AnimatedSection key={tier.name} animation="fade-up" delay={index * 120}>
                <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-8 h-full flex flex-col">
                  <div className="flex items-center mb-5">
                    <tier.icon className="w-8 h-8 text-red-500 mr-3" />
                    <div>
                      <h3 className="text-xl font-medium text-gray-900">{tier.name}</h3>
                      <p className="text-base font-semibold text-red-500">{tier.price}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-5 text-gray-700 flex-grow">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-600 text-sm italic mb-6">{tier.idealFor}</p>
                  {tier.cta && (
                    <div className="mt-auto">
                      <Link href={tier.cta.href}>
                        <Button className="w-full rounded-full bg-red-600 hover:bg-red-700 text-white">
                          {tier.cta.label}
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-6">{t('support_title')}</h2>
            <p className="text-lg text-gray-600 mb-8">{t('support_subtitle')}</p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <LifeBuoy className="w-10 h-10 text-red-500 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{t('support_card_title')}</h3>
                  <p className="text-lg font-semibold text-red-600">{t('support_card_price')}</p>
                </div>
              </div>
              <ul className="space-y-4">
                {supportFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 text-center">
                  <strong>{t('support_flexibility')}</strong>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-6">{t('final_title')}</h2>
            <Link href={`/${params.locale}/contact`}>
              <Button size="lg" className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light text-lg px-10 py-4 h-auto rounded-full shadow-lg hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105">
                {t('final_cta')}
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}


