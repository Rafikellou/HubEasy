import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Trophy, 
  Users, 
  TrendingUp, 
  Zap, 
  Target, 
  BarChart3, 
  CreditCard, 
  ShoppingBag, 
  Building2, 
  Share2,
  Eye,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Heart,
  Calendar,
  Mail,
  Phone
} from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export default async function HubEasySportPage({ params }: { params: { locale: string }}) {
  const t = await getTranslations({ locale: params.locale, namespace: 'HubEasySport' });

  const dataSourcesData = [
    {
      icon: CreditCard,
      title: t('data_source1_title'),
      description: t('data_source1_desc'),
      metrics: [t('data_source1_metric1'), t('data_source1_metric2'), t('data_source1_metric3')],
      color: 'blue'
    },
    {
      icon: ShoppingBag,
      title: t('data_source2_title'),
      description: t('data_source2_desc'),
      metrics: [t('data_source2_metric1'), t('data_source2_metric2'), t('data_source2_metric3')],
      color: 'green'
    },
    {
      icon: Building2,
      title: t('data_source3_title'),
      description: t('data_source3_desc'),
      metrics: [t('data_source3_metric1'), t('data_source3_metric2'), t('data_source3_metric3')],
      color: 'purple'
    },
    {
      icon: Share2,
      title: t('data_source4_title'),
      description: t('data_source4_desc'),
      metrics: [t('data_source4_metric1'), t('data_source4_metric2'), t('data_source4_metric3')],
      color: 'orange'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: t('benefit1_title'),
      description: t('benefit1_desc'),
      details: [
        t('benefit1_detail1'),
        t('benefit1_detail2'),
        t('benefit1_detail3')
      ]
    },
    {
      icon: Sparkles,
      title: t('benefit2_title'),
      description: t('benefit2_desc'),
      details: [
        t('benefit2_detail1'),
        t('benefit2_detail2'),
        t('benefit2_detail3')
      ]
    },
    {
      icon: TrendingUp,
      title: t('benefit3_title'),
      description: t('benefit3_desc'),
      details: [
        t('benefit3_detail1'),
        t('benefit3_detail2'),
        t('benefit3_detail3')
      ]
    },
    {
      icon: Heart,
      title: t('benefit4_title'),
      description: t('benefit4_desc'),
      details: [
        t('benefit4_detail1'),
        t('benefit4_detail2'),
        t('benefit4_detail3')
      ]
    }
  ];

  const automationExamples = [
    {
      trigger: t('automation1_trigger'),
      action: t('automation1_action'),
      result: t('automation1_result')
    },
    {
      trigger: t('automation2_trigger'),
      action: t('automation2_action'),
      result: t('automation2_result')
    },
    {
      trigger: t('automation3_trigger'),
      action: t('automation3_action'),
      result: t('automation3_result')
    },
    {
      trigger: t('automation4_trigger'),
      action: t('automation4_action'),
      result: t('automation4_result')
    }
  ];

  const implementationSteps = [
    {
      step: '1',
      title: t('step1_title'),
      description: t('step1_desc'),
      duration: t('step1_duration'),
      icon: Eye
    },
    {
      step: '2', 
      title: t('step2_title'),
      description: t('step2_desc'),
      duration: t('step2_duration'),
      icon: Zap
    },
    {
      step: '3',
      title: t('step3_title'),
      description: t('step3_desc'),
      duration: t('step3_duration'), 
      icon: Target
    },
    {
      step: '4',
      title: t('step4_title'),
      description: t('step4_desc'),
      duration: t('step4_duration'),
      icon: TrendingUp
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hubeasy-sport-hero.jpg"
            alt={t('hero_img_alt')}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-green-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center text-white">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center justify-center mb-8">
              <Trophy className="w-12 h-12 text-yellow-400 mr-4" />
              <h1 className="text-5xl md:text-7xl font-thin tracking-tight">
                HubEasy <span className="text-yellow-400 font-light">{t('hero_title_highlight')}</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-4xl mx-auto leading-relaxed">
              {t('hero_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Link href={`/${params.locale}/contact`}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white font-light text-lg px-12 py-4 h-auto rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-500 hover:scale-105"
                >
                  {t('hero_cta1')}
                </Button>
              </Link>
              <Link href={`/${params.locale}/contact`}>
                <Button 
                  size="lg" 
                  className="bg-white/20 backdrop-blur-md text-white border border-white/50 hover:bg-white hover:text-blue-900 font-light text-lg px-12 py-4 h-auto rounded-full transition-all duration-500 hover:scale-105"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  {t('hero_cta2')}
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Problématique */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-6">
              {t('problem_title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('problem_subtitle')}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataSourcesData.map((source, index) => (
              <AnimatedSection key={source.title} animation="fade-up" delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg p-6 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-${source.color}-100 rounded-xl mb-4`}>
                    <source.icon className={`w-6 h-6 text-${source.color}-600`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{source.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{source.description}</p>
                  <div className="space-y-1">
                    {source.metrics.map((metric, idx) => (
                      <div key={idx} className={`text-xs text-${source.color}-600 bg-${source.color}-50 px-2 py-1 rounded-full inline-block mr-1 mb-1`}>
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-right">
              <h2 className="text-base font-semibold leading-7 text-blue-600">{t('solution_badge')}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {t('solution_title')}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {t('solution_subtitle')}
              </p>
              <div className="mt-8 space-y-4">
                {[
                  t('solution_feature1'),
                  t('solution_feature2'),
                  t('solution_feature3'),
                  t('solution_feature4')
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-500 rounded-3xl blur-xl opacity-30"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                  <div className="text-center mb-6">
                    <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900">{t('demo_title')}</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium">{t('demo_metric1_label')}</span>
                      <span className="text-sm font-bold text-blue-600">{t('demo_metric1_value')}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium">{t('demo_metric2_label')}</span>
                      <span className="text-sm font-bold text-green-600">{t('demo_metric2_value')}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm font-medium">{t('demo_metric3_label')}</span>
                      <span className="text-sm font-bold text-orange-600">{t('demo_metric3_value')}</span>
                    </div>
                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center text-yellow-800">
                        <Sparkles className="w-4 h-4 mr-2" />
                        <span className="text-xs font-medium">{t('demo_recommendation_label')}</span>
                      </div>
                      <p className="text-xs text-yellow-700 mt-1">{t('demo_recommendation_value')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-6">
              {t('benefits_title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('benefits_subtitle')}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} animation="fade-up" delay={index * 150}>
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 mr-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl">
                        <benefit.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {benefit.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Exemples d'automatisations */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-6">
              {t('automations_title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('automations_subtitle')}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {automationExamples.map((example, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 rounded-full p-2 mr-3">
                      <Zap className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{t('automation_trigger_label')}</h4>
                      <p className="text-sm text-gray-600">{example.trigger}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <div className="bg-green-100 rounded-full p-2 mr-3">
                      <Target className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{t('automation_action_label')}</h4>
                      <p className="text-sm text-gray-600">{example.action}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-yellow-100 rounded-full p-2 mr-3">
                      <BarChart3 className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{t('automation_result_label')}</h4>
                      <p className="text-sm font-bold text-green-600">{example.result}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Notre expertise */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-thin mb-6">
              {t('expertise_title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              {t('expertise_subtitle')}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: t('expertise1_title'),
                description: t('expertise1_desc')
              },
              {
                icon: TrendingUp,
                title: t('expertise2_title'),
                description: t('expertise2_desc')
              },
              {
                icon: Trophy,
                title: t('expertise3_title'),
                description: t('expertise3_desc')
              }
            ].map((expertise, index) => (
              <AnimatedSection key={expertise.title} animation="fade-up" delay={index * 150}>
                <div className="text-center p-8 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <expertise.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{expertise.title}</h3>
                  <p className="text-gray-300">{expertise.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Processus d'implémentation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-6">
              {t('process_title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('process_subtitle')}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationSteps.map((step, index) => (
              <AnimatedSection key={step.step} animation="fade-up" delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-2">
                      {t('step_label')} {step.step}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                  <div className="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                    {step.duration}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-green-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-thin mb-6">
              {t('final_title')}
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              {t('final_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={`/${params.locale}/contact`}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white font-light text-lg px-12 py-4 h-auto rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-500 hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {t('final_cta1')}
                </Button>
              </Link>
              <Link href={`/${params.locale}/contact`}>
                <Button 
                  size="lg" 
                  className="bg-white/20 backdrop-blur-md text-white border border-white/50 hover:bg-white hover:text-blue-900 font-light text-lg px-12 py-4 h-auto rounded-full transition-all duration-500 hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t('final_cta2')}
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

