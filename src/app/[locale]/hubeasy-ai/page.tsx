import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, Share2, Mail, Bot, TrendingUp, Clock, Users, 
  Target, BarChart3, CheckCircle, ArrowRight, Zap,
  Brain, MessageSquare, Filter, Calendar, Globe,
  DollarSign, Timer, Star, ChevronDown
} from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export default async function HubEasyAIPage({ params }: { params: { locale: string }}) {
  const t = await getTranslations({ locale: params.locale, namespace: 'HubEasyAI' });

  const aiAgents = [
    {
      name: 'Lucie',
      role: t('lucie_role'),
      description: t('lucie_description'),
      photo: '/lucie-photo.png',
      icon: Search,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      capabilities: [
        {
          title: t('lucie_cap1_title'),
          description: t('lucie_cap1_desc'),
          value: t('lucie_cap1_value')
        },
        {
          title: t('lucie_cap2_title'),
          description: t('lucie_cap2_desc'),
          value: t('lucie_cap2_value')
        },
        {
          title: t('lucie_cap3_title'),
          description: t('lucie_cap3_desc'),
          value: t('lucie_cap3_value')
        },
        {
          title: t('lucie_cap4_title'),
          description: t('lucie_cap4_desc'),
          value: t('lucie_cap4_value')
        }
      ],
      metrics: [
        { label: t('lucie_metric1_label'), value: t('lucie_metric1_value'), icon: Clock },
        { label: t('lucie_metric2_label'), value: t('lucie_metric2_value'), icon: Users },
        { label: t('lucie_metric3_label'), value: t('lucie_metric3_value'), icon: TrendingUp },
        { label: t('lucie_metric4_label'), value: t('lucie_metric4_value'), icon: DollarSign }
      ]
    },
    {
      name: 'Théo',
      role: t('theo_role'),
      description: t('theo_description'),
      photo: '/theo-photo.png',
      icon: Share2,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      capabilities: [
        {
          title: t('theo_cap1_title'),
          description: t('theo_cap1_desc'),
          value: t('theo_cap1_value')
        },
        {
          title: t('theo_cap2_title'),
          description: t('theo_cap2_desc'),
          value: t('theo_cap2_value')
        },
        {
          title: t('theo_cap3_title'),
          description: t('theo_cap3_desc'),
          value: t('theo_cap3_value')
        },
        {
          title: t('theo_cap4_title'),
          description: t('theo_cap4_desc'),
          value: t('theo_cap4_value')
        }
      ],
      metrics: [
        { label: t('theo_metric1_label'), value: t('theo_metric1_value'), icon: MessageSquare },
        { label: t('theo_metric2_label'), value: t('theo_metric2_value'), icon: Star },
        { label: t('theo_metric3_label'), value: t('theo_metric3_value'), icon: Target },
        { label: t('theo_metric4_label'), value: t('theo_metric4_value'), icon: BarChart3 }
      ]
    },
    {
      name: 'Anna',
      role: t('anna_role'),
      description: t('anna_description'),
      photo: '/anna-photo.png',
      icon: Mail,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      capabilities: [
        {
          title: t('anna_cap1_title'),
          description: t('anna_cap1_desc'),
          value: t('anna_cap1_value')
        },
        {
          title: t('anna_cap2_title'),
          description: t('anna_cap2_desc'),
          value: t('anna_cap2_value')
        },
        {
          title: t('anna_cap3_title'),
          description: t('anna_cap3_desc'),
          value: t('anna_cap3_value')
        },
        {
          title: t('anna_cap4_title'),
          description: t('anna_cap4_desc'),
          value: t('anna_cap4_value')
        }
      ],
      metrics: [
        { label: t('anna_metric1_label'), value: t('anna_metric1_value'), icon: Mail },
        { label: t('anna_metric2_label'), value: t('anna_metric2_value'), icon: Bot },
        { label: t('anna_metric3_label'), value: t('anna_metric3_value'), icon: Timer },
        { label: t('anna_metric4_label'), value: t('anna_metric4_value'), icon: Target }
      ]
    }
  ];

  const aiPricing = {
    Lucie: { installation: t('lucie_price_install'), abonnement: t('lucie_price_monthly') },
    Théo: { installation: t('theo_price_install'), abonnement: t('theo_price_monthly') },
    Anna: { installation: t('anna_price_install'), abonnement: t('anna_price_monthly') }
  };

  const benefits = [
    {
      icon: Clock,
      title: t('benefit1_title'),
      description: t('benefit1_desc')
    },
    {
      icon: TrendingUp,
      title: t('benefit2_title'),
      description: t('benefit2_desc')
    },
    {
      icon: Users,
      title: t('benefit3_title'),
      description: t('benefit3_desc')
    },
    {
      icon: DollarSign,
      title: t('benefit4_title'),
      description: t('benefit4_desc')
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl mr-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <span className="text-blue-300 font-medium">{t('hero_badge')}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-thin mb-6 leading-tight">
                {t('hero_title')}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{t('hero_title_highlight')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                {t('hero_subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#agents">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    {t('hero_cta1')}
                  </Button>
                </Link>
                <Link href={`/${params.locale}/contact`}>
                  <Button 
                    size="lg"
                    variant="ghost"
                    className="bg-transparent border-2 border-white/50 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg transition-all duration-300"
                  >
                    {t('hero_cta2')}
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={200}>
              <div className="relative">
                <div className="grid grid-cols-3 gap-4">
                  {aiAgents.map((agent, index) => (
                    <div key={agent.name} className="text-center group">
                      <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:scale-110">
                        <Image
                          src={agent.photo}
                          alt={`${agent.name} - ${agent.role}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-sm font-semibold text-white">{agent.name}</h3>
                      <p className="text-xs text-gray-300">{agent.role.split(' ')[0]}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                    <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-white font-medium">{t('hero_availability')}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('benefits_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('benefits_subtitle')}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Agents Section */}
      <section id="agents" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('agents_title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('agents_subtitle')}
            </p>
          </AnimatedSection>

          <div className="space-y-24">
            {aiAgents.map((agent, index) => (
              <AnimatedSection key={agent.name} animation="fade-up" delay={index * 200}>
                <div className={`relative p-8 md:p-12 rounded-3xl ${agent.bgColor} ${agent.borderColor} border-2`}>
                  
                  {/* Agent Header */}
                  <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    <div className="lg:col-span-1 text-center lg:text-left">
                      <div className="relative w-32 h-32 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6">
                        <Image
                          src={agent.photo}
                          alt={`${agent.name} - ${agent.role}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{agent.name}</h3>
                      <p className="text-lg font-medium text-gray-700 mb-4">{agent.role}</p>
                      <p className="text-gray-600">{agent.description}</p>
                    </div>

                    <div className="lg:col-span-2">
                      {/* Metrics */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {agent.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="bg-white p-4 rounded-xl text-center shadow-md">
                            <metric.icon className="w-6 h-6 text-gray-500 mx-auto mb-2" />
                            <div className="text-xl font-bold text-gray-900">{metric.value}</div>
                            <div className="text-sm text-gray-600">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Capabilities */}
                      <div className="grid md:grid-cols-2 gap-6">
                        {agent.capabilities.map((capability, capIndex) => (
                          <div key={capIndex} className="bg-white p-6 rounded-xl shadow-md">
                            <h4 className="font-semibold text-gray-900 mb-2">{capability.title}</h4>
                            <p className="text-gray-600 text-sm mb-3">{capability.description}</p>
                            <div className="inline-flex items-center text-green-600 font-medium text-sm">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              {capability.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('pricing_title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('pricing_subtitle')}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {aiAgents.map((agent, index) => (
              <AnimatedSection key={agent.name} animation="fade-up" delay={index * 120} className="h-full">
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow h-full flex flex-col">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <Image
                      src={agent.photo}
                      alt={`${agent.name} - ${agent.role}`}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{agent.name}</h3>
                  <p className="text-sm font-medium text-blue-600 mb-4">{agent.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">{agent.description}</p>

                  <div className="mt-4 pt-6 border-t border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">{t('pricing_install_label')}</span>
                      <span className="font-semibold text-red-600">
                        {agent.name === 'Lucie' && aiPricing.Lucie.installation}
                        {agent.name === 'Théo' && aiPricing.Théo.installation}
                        {agent.name === 'Anna' && aiPricing.Anna.installation}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{t('pricing_monthly_label')}</span>
                      <span className="font-semibold text-red-600">
                        {agent.name === 'Lucie' && aiPricing.Lucie.abonnement}
                        {agent.name === 'Théo' && aiPricing.Théo.abonnement}
                        {agent.name === 'Anna' && aiPricing.Anna.abonnement}
                      </span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4">
                    <Link href={`/${params.locale}/contact`}>
                      <Button className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                        {t('pricing_cta')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={400} className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              {t('pricing_details')}
            </p>
            <Link href={`/${params.locale}/tarifs`}>
              <Button variant="outline" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white rounded-full px-8 py-3">
                {t('pricing_view_all')}
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('how_it_works_title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('how_it_works_subtitle')}
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: t('step1_title'),
                description: t('step1_desc'),
                duration: t('step1_duration'),
                icon: Search
              },
              {
                step: '02', 
                title: t('step2_title'),
                description: t('step2_desc'),
                duration: t('step2_duration'),
                icon: Zap
              },
              {
                step: '03',
                title: t('step3_title'),
                description: t('step3_desc'),
                duration: t('step3_duration'),
                icon: TrendingUp
              }
            ].map((step, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-300 mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="inline-flex items-center text-blue-600 font-medium">
                    <Clock className="w-4 h-4 mr-2" />
                    {step.duration}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('final_title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('final_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${params.locale}/contact`}>
                <Button 
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  {t('final_cta1')}
                </Button>
              </Link>
              <Link href={`/${params.locale}/tarifs`}>
                <Button 
                  size="lg"
                  variant="ghost"
                  className="bg-transparent border-2 border-white/70 text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-full text-lg transition-all duration-300"
                >
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

