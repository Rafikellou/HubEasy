import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, Users, Database, CheckCircle, Target, TrendingUp, Workflow, BarChart3 } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import {getTranslations} from 'next-intl/server';

export default async function Salesforce({ params }: { params: { locale: string }}) {
  const t = await getTranslations({ locale: params.locale, namespace: 'Salesforce' });

  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/salesforce-photo.jpg" alt={t('hero_alt')} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-indigo-900/75 to-orange-900/80"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-6 leading-none">{t('hero_title')}</h1>
            <p className="text-xl md:text-2xl font-light mb-10 max-w-4xl mx-auto leading-relaxed opacity-90">{t('hero_subtitle')}</p>
            <Link href={`/${params.locale}/contact`}>
              <Button size="lg" className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light text-lg px-12 py-6 h-auto rounded-full border-0 shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105">
                {t('hero_cta')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full opacity-10"></div>
                <h2 className="text-4xl md:text-5xl font-thin text-gray-900 tracking-tight mb-6">{t('expertise_title')}</h2>
                <p className="text-xl font-light text-gray-700 mb-8 leading-relaxed">{t('expertise_p1')}</p>
                <p className="text-lg font-light text-gray-600 mb-8">{t('expertise_p2')}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{t('expertise_badge')}</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
                <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" alt={t('expertise_img_alt')} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 tracking-tight">{t('why_title')}</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center h-full">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{t('why_card1_title')}</h3>
                <p className="text-gray-600 font-light">{t('why_card1_sub')}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Database className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{t('why_card2_title')}</h3>
                <p className="text-gray-600 font-light">{t('why_card2_sub')}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center h-full">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{t('why_card3_title')}</h3>
                <p className="text-gray-600 font-light">{t('why_card3_sub')}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
                <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" alt={t('partner_img_alt')} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-10"></div>
                <h2 className="text-4xl md:text-5xl font-thin text-gray-900 tracking-tight mb-6">{t('partner_title')}</h2>
                <p className="text-xl font-light text-gray-700 mb-6 leading-relaxed">{t('partner_p1')}</p>
                <p className="text-lg font-light text-gray-600 mb-8">{t('partner_p2')}</p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center"><Users className="w-6 h-6 text-purple-600" /></div>
                  <span className="text-gray-700 font-medium">{t('partner_badge1')}</span>
                </div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center"><Workflow className="w-6 h-6 text-blue-600" /></div>
                  <span className="text-gray-700 font-medium">{t('partner_badge2')}</span>
                </div>
                <Link href="https://cloudzlab.io" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-light px-8 py-4 rounded-full transition-all duration-500 hover:scale-105 shadow-lg">
                    <span className="flex items-center">
                      {t('partner_cta')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute inset-0" style={{}}></div></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-thin mb-6 tracking-tight">{t('final_title')}</h2>
            <p className="text-xl font-light mb-10 max-w-2xl mx-auto opacity-90">{t('final_subtitle')}</p>
            <Link href={`/${params.locale}/contact`}>
              <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-12 py-6 rounded-full text-lg transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                {t('final_cta')}
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}



