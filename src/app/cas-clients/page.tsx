import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Database, Zap, Globe, CheckCircle, Clock, Target } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';

export default function CasClients() {
  const caseStudies = [
    {
      id: 'techcorp-migration',
      company: 'Start-up en croissance',
      sector: 'SaaS B2B',
      challenge: 'Migration CRM complexe',
      title: 'Migration de 50 000 contacts depuis Salesforce vers HubSpot',
      description: 'Une entreprise SaaS de 200 employés devait migrer son écosystème CRM complet tout en maintenant ses opérations commerciales.',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      results: [
        { metric: '50 000+', label: 'Contacts migrés', icon: <Users className="w-5 h-5" /> },
        { metric: '0%', label: 'Perte de données', icon: <Database className="w-5 h-5" /> },
        { metric: '2 semaines', label: 'Durée migration', icon: <Clock className="w-5 h-5" /> },
        { metric: '+35%', label: 'Productivité équipe', icon: <TrendingUp className="w-5 h-5" /> }
      ],
      solutions: [
        'Audit complet de l\'architecture Salesforce existante',
        'Mapping personnalisé des champs et propriétés',
        'Migration par phases avec tests en sandbox',
        'Formation intensive des équipes sales & marketing',
        'Automatisation des workflows de qualification'
      ],
      testimonial: {
        quote: "HubEasy a transformé notre migration en opportunité d'optimisation. Nos équipes sont plus productives que jamais.",
        author: "Marie D.",
        role: "Directrice des Opérations"
      },
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'retailplus-automation',
      company: 'Boutique en ligne spécialisée',
      sector: 'E-commerce',
      challenge: 'Automatisation marketing',
      title: 'Automatisation complète du parcours client e-commerce',
      description: 'Un retailer en ligne cherchait à automatiser ses campagnes marketing et améliorer le taux de conversion.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      results: [
        { metric: '+180%', label: 'Taux de conversion', icon: <Target className="w-5 h-5" /> },
        { metric: '15', label: 'Workflows automatisés', icon: <Zap className="w-5 h-5" /> },
        { metric: '-60%', label: 'Temps tâches manuelles', icon: <Clock className="w-5 h-5" /> },
        { metric: '+250%', label: 'ROI marketing', icon: <TrendingUp className="w-5 h-5" /> }
      ],
      solutions: [
        'Segmentation avancée des audiences clients',
        'Workflows d\'abandon de panier personnalisés',
        'Scoring automatique des leads qualifiés',
        'Intégration native avec Shopify et WooCommerce',
        'Tableaux de bord temps réel pour le suivi ROI'
      ],
      testimonial: {
        quote: "Nos campagnes marketing sont maintenant 100% automatisées. Le ROI a explosé !",
        author: "Thomas M.",
        role: "Directeur Marketing"
      },
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'manufact-revops',
      company: 'PME industrielle',
      sector: 'Industrie',
      challenge: 'Optimisation RevOps',
      title: 'Alignement Sales-Marketing pour un industriel de 500M€',
      description: 'Un groupe industriel devait aligner ses équipes commerciales et marketing pour optimiser son cycle de vente B2B complexe.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      results: [
        { metric: '-40%', label: 'Cycle de vente', icon: <Clock className="w-5 h-5" /> },
        { metric: '+85%', label: 'Leads qualifiés', icon: <Target className="w-5 h-5" /> },
        { metric: '95%', label: 'Adoption équipes', icon: <Users className="w-5 h-5" /> },
        { metric: '+120%', label: 'Pipeline value', icon: <TrendingUp className="w-5 h-5" /> }
      ],
      solutions: [
        'Redéfinition complète du processus de qualification',
        'Mise en place d\'un lead scoring sophistiqué',
        'Automatisation du handoff Marketing-Sales',
        'Dashboards unifiés pour toutes les équipes',
        'Formation RevOps pour les managers'
      ],
      testimonial: {
        quote: "Enfin une vision unifiée entre nos équipes ! Le processus est fluide et les résultats parlent d'eux-mêmes.",
        author: "Pierre L.",
        role: "VP Sales & Marketing"
      },
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 'fintech-integration',
      company: 'Société de services financiers',
      sector: 'Services financiers',
      challenge: 'Intégrations ERP complexes',
      title: 'Intégration HubSpot avec SAP pour une fintech en croissance',
      description: 'Une fintech en hypercroissance devait connecter HubSpot à son ERP SAP pour une vue client 360°.',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      results: [
        { metric: '100%', label: 'Sync temps réel', icon: <Zap className="w-5 h-5" /> },
        { metric: '360°', label: 'Vue client unifiée', icon: <Target className="w-5 h-5" /> },
        { metric: '+90%', label: 'Efficacité support', icon: <Users className="w-5 h-5" /> },
        { metric: '-70%', label: 'Erreurs manuelles', icon: <CheckCircle className="w-5 h-5" /> }
      ],
      solutions: [
        'Connecteurs API bidirectionnels SAP-HubSpot',
        'Synchronisation en temps réel des données client',
        'Mapping automatique des champs financiers',
        'Monitoring et alertes en cas d\'erreur',
        'Formation des équipes sur les nouveaux processus'
      ],
      testimonial: {
        quote: "L'intégration SAP-HubSpot nous a donné une vision client complète. Un game-changer pour notre croissance.",
        author: "Sophie C.",
        role: "COO"
      },
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'agency-cms',
      company: 'Agence de marketing',
      sector: 'Agence marketing',
      challenge: 'Refonte site web',
      title: 'Site web haute performance sur HubSpot CMS Hub',
      description: 'Une agence créative voulait refondre son site web pour générer plus de leads qualifiés.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      results: [
        { metric: '+300%', label: 'Leads générés', icon: <Target className="w-5 h-5" /> },
        { metric: '98/100', label: 'Score PageSpeed', icon: <Zap className="w-5 h-5" /> },
        { metric: '+150%', label: 'Temps sur site', icon: <Clock className="w-5 h-5" /> },
        { metric: '+200%', label: 'Conversions', icon: <TrendingUp className="w-5 h-5" /> }
      ],
      solutions: [
        'Design responsive optimisé pour la conversion',
        'Intégration native avec les outils HubSpot',
        'Pages de destination personnalisées par persona',
        'Optimisation SEO technique avancée',
        'A/B testing continu des éléments clés'
      ],
      testimonial: {
        quote: "Notre nouveau site génère 3x plus de leads qualifiés. HubSpot CMS est parfait pour notre stratégie inbound.",
        author: "Alex M.",
        role: "Directeur Général"
      },
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-client-success.jpg"
            alt="Poignée de main dans un bureau moderne"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight">
             Cas Clients
            </h1>
            <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto font-light opacity-90">
              Découvrez comment nous transformons les défis de nos clients en succès.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies Grid */}
      <main className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-32">
            {caseStudies.map((caseStudy, index) => (
              <div key={caseStudy.id} className="bg-white rounded-3xl p-8 md:p-12 shadow-lg overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <AnimatedSection 
                    animation={index % 2 === 0 ? "slide-right" : "slide-left"}
                    className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${caseStudy.gradient} text-white text-sm font-medium`}>
                          {caseStudy.sector}
                        </div>
                        <span className="text-gray-500 font-light">{caseStudy.challenge}</span>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-thin text-gray-900 tracking-tight">
                        {caseStudy.company}
                      </h2>
                      
                      <h3 className="text-xl md:text-2xl font-light text-red-500">
                        {caseStudy.title}
                      </h3>
                      
                      <p className="text-lg font-light text-gray-600 leading-relaxed">
                        {caseStudy.description}
                      </p>
                      
                      {/* Results Grid */}
                      <div className="grid grid-cols-2 gap-4 py-6">
                        {caseStudy.results.map((result, resultIndex) => (
                          <AnimatedSection 
                            key={resultIndex} 
                            animation="fade-up" 
                            delay={200 + resultIndex * 100}
                          >
                            <div className="bg-gray-100/50 rounded-2xl p-4 text-center">
                              <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r ${caseStudy.gradient} text-white mb-2`}>
                                {result.icon}
                              </div>
                              <div className="text-2xl font-light text-gray-900">{result.metric}</div>
                              <div className="text-sm text-gray-600">{result.label}</div>
                            </div>
                          </AnimatedSection>
                        ))}
                      </div>
                      
                      {/* Testimonial */}
                      <AnimatedSection animation="fade-up" delay={600}>
                        <div className="bg-gray-100/50 rounded-2xl p-6 border-l-4 border-red-500">
                          <p className="text-gray-700 font-light italic mb-4">
                            "{caseStudy.testimonial.quote}"
                          </p>
                          <div className="flex items-center">
                            <div>
                              <div className="font-medium text-gray-900">{caseStudy.testimonial.author}</div>
                              <div className="text-sm text-gray-600">{caseStudy.testimonial.role}</div>
                            </div>
                          </div>
                        </div>
                      </AnimatedSection>
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection 
                    animation={index % 2 === 0 ? "slide-left" : "slide-right"} 
                    delay={200}
                    className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
                  >
                    <div className="space-y-6">
                      <div className="relative group">
                        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                          <Image
                            src={caseStudy.image}
                            alt={caseStudy.company}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${caseStudy.gradient} opacity-20`}></div>
                        </div>
                      </div>
                      
                      {/* Solutions */}
                      <div className="bg-gray-100/50 rounded-2xl p-6">
                        <h4 className="text-lg font-medium text-gray-900 mb-4">Solutions mises en place</h4>
                        <div className="space-y-3">
                          {caseStudy.solutions.map((solution, solutionIndex) => (
                            <AnimatedSection 
                              key={solutionIndex} 
                              animation="fade-up" 
                              delay={400 + solutionIndex * 100}
                            >
                              <div className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 font-light text-sm">{solution}</span>
                              </div>
                            </AnimatedSection>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
            alt="Réunion d'affaires moderne"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-5xl md:text-6xl font-thin mb-8 tracking-tight">
              Prêt à discuter de votre projet ?
            </h2>
            <p className="text-xl font-light mb-12 max-w-2xl mx-auto opacity-90">
              Rejoignez nos clients satisfaits et transformez votre écosystème HubSpot dès aujourd'hui.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-12 py-6 rounded-full text-lg transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-orange-500/25 relative overflow-hidden group">
                  <span className="relative z-10">Discuter de mon projet</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black font-light px-12 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/10"
                >
                  Planifier RDV
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
