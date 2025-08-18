import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Users, Database, CheckCircle, Target, TrendingUp, Globe, Settings } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';

export default function Salesforce() {
  const advantages = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Expertise Unique en France',
      description: 'L\'une des rares agences françaises maîtrisant parfaitement les deux écosystèmes Salesforce et HubSpot.',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Connecteur Natif Optimisé',
      description: 'Spécialistes du connecteur officiel HubSpot-Salesforce avec des configurations avancées sur mesure.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Partenariat Sister Agency',
      description: 'Collaboration avec notre agence partenaire spécialisée dans les intégrations Salesforce complexes.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Architecture Hybride',
      description: 'Conception d\'architectures hybrides optimales : Salesforce pour les ventes, HubSpot pour le marketing.',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const useCases = [
    {
      title: 'Salesforce Sales + HubSpot Marketing',
      description: 'Gardez Salesforce pour vos processus de vente complexes tout en bénéficiant de la puissance marketing de HubSpot.',
      features: [
        'Synchronisation bidirectionnelle des leads et contacts',
        'Attribution marketing précise dans Salesforce',
        'Workflows HubSpot déclenchés par les actions Salesforce',
        'Reporting unifié cross-plateforme'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80'
    },
    {
      title: 'Salesforce CRM + HubSpot Service Hub',
      description: 'Combinez la robustesse de Salesforce avec les outils de service client modernes de HubSpot.',
      features: [
        'Tickets de support synchronisés avec les opportunités',
        'Base de connaissances HubSpot intégrée',
        'Escalade automatique vers les équipes sales',
        'NPS et satisfaction client centralisés'
      ],
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80'
    },
    {
      title: 'Migration Progressive',
      description: 'Transition en douceur de Salesforce vers HubSpot ou mise en place d\'une architecture hybride.',
      features: [
        'Audit complet de votre instance Salesforce',
        'Plan de migration par phases sans interruption',
        'Formation des équipes sur les nouveaux processus',
        'Support post-migration pendant 6 mois'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80'
    }
  ];

  const stats = [
    { number: '50+', label: 'Intégrations Salesforce-HubSpot réalisées' },
    { number: '98%', label: 'Taux de réussite des synchronisations' },
    { number: '2-4 sem', label: 'Délai moyen d\'implémentation' },
    { number: '24/7', label: 'Monitoring et support technique' }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
            alt="Intégration Salesforce HubSpot"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-indigo-900/70 to-purple-900/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight mb-8 leading-none">
              Salesforce
              <br />
              <span className="text-orange-400 font-extralight">+ HubSpot</span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
              L'expertise unique en France pour connecter et optimiser vos deux écosystèmes CRM
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light text-lg px-12 py-4 h-auto rounded-full border-0 shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105"
              >
                Audit gratuit de votre setup
              </Button>
              <Button 
                size="lg" 
                className="bg-white/20 backdrop-blur-md text-white border border-white/50 hover:bg-white hover:text-gray-900 font-light text-lg px-12 py-4 h-auto rounded-full transition-all duration-500 hover:scale-105"
              >
                Voir nos intégrations
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin text-gray-900 mb-6 tracking-tight">
              Pourquoi <span className="text-red-500">HubEasy</span> ?
            </h2>
            <p className="text-2xl font-light text-gray-600 max-w-3xl mx-auto">
              La seule agence française maîtrisant parfaitement les deux univers
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <AnimatedSection 
                key={index} 
                animation="bounce-in" 
                delay={index * 150 + 300}
                duration={1000}
                className="group"
              >
                <div className="bg-gray-50 rounded-3xl p-8 h-full flex flex-col transition-all duration-500 hover:bg-white hover:shadow-2xl hover:scale-105 cursor-pointer">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${advantage.gradient} text-white mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-4">{advantage.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{advantage.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection 
                key={index} 
                animation="fade-up" 
                delay={index * 100 + 200}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-thin text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-light">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin text-gray-900 mb-6 tracking-tight">
              Cas d'<span className="text-red-500">Usage</span>
            </h2>
            <p className="text-2xl font-light text-gray-600 max-w-3xl mx-auto">
              Si vous avez choisi de garder Salesforce tout en optant pour HubSpot pour le Marketing et/ou le Service, nous sommes la bonne agence pour vous
            </p>
          </AnimatedSection>
          
          <div className="space-y-32">
            {useCases.map((useCase, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <AnimatedSection 
                  animation={index % 2 === 0 ? "slide-right" : "slide-left"}
                  className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                >
                  <h3 className="text-3xl md:text-4xl font-thin text-gray-900 mb-6 tracking-tight">
                    {useCase.title}
                  </h3>
                  <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {useCase.features.map((feature, featureIndex) => (
                      <AnimatedSection 
                        key={featureIndex} 
                        animation="fade-up" 
                        delay={200 + featureIndex * 100}
                      >
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 font-light">{feature}</span>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                  
                  <AnimatedSection animation="fade-up" delay={600}>
                    <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-light px-8 py-4 rounded-full transition-all duration-500 hover:scale-105 shadow-lg">
                      <span className="flex items-center">
                        Découvrir cette solution
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                    </Button>
                  </AnimatedSection>
                </AnimatedSection>
                
                <AnimatedSection 
                  animation={index % 2 === 0 ? "slide-left" : "slide-right"} 
                  delay={200}
                  className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
                >
                  <div className="relative group">
                    <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={useCase.image}
                        alt={useCase.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-right">
              <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-8 tracking-tight">
                Notre <span className="text-blue-500">Partenariat</span>
                <br />
                Sister Agency
              </h2>
              <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                Nous collaborons étroitement avec notre agence partenaire spécialisée dans les intégrations Salesforce complexes. Cette synergie nous permet d'offrir une expertise complète sur les deux plateformes.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Expertise Salesforce avancée (CPQ, Einstein, Pardot)',
                  'Intégrations complexes avec des systèmes tiers',
                  'Développement Apex et Lightning personnalisé',
                  'Support technique conjoint sur vos projets'
                ].map((item, index) => (
                  <AnimatedSection key={index} animation="fade-up" delay={200 + index * 100}>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                      <span className="text-lg font-light text-gray-700">{item}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
              <AnimatedSection animation="fade-up" delay={600}>
                <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-light px-8 py-4 rounded-full transition-all duration-500 hover:scale-105 shadow-lg">
                  En savoir plus sur notre partenariat
                </Button>
              </AnimatedSection>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="relative">
                <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
                    alt="Équipe partenaire Salesforce"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-5xl md:text-6xl font-thin mb-8 tracking-tight">
              Prêt pour l'<span className="text-orange-400">intégration</span> ?
            </h2>
            <p className="text-2xl font-light mb-12 max-w-2xl mx-auto opacity-90">
              Audit gratuit de votre configuration Salesforce et recommandations personnalisées pour l'intégration HubSpot.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-12 py-6 rounded-full text-lg transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                Demander un audit gratuit
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-900 font-light px-12 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/10"
              >
                Planifier un appel
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
