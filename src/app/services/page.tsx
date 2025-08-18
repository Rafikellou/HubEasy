import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Database, Users, Zap, TrendingUp, Globe, CheckCircle, Settings, Workflow, FileText } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';

export default function Services() {
  const services = [
    {
      id: 'integrations',
      title: 'Intégrations ERP & Facturation',
      description: 'Connectez HubSpot à vos outils essentiels pour une synchronisation parfaite des données.',
      icon: <Database className="w-8 h-8" />,
      features: [
        'Intégration avec les ERP populaires (SAP, Oracle, Microsoft Dynamics)',
        'Synchronisation des logiciels de facturation (QuickBooks, Sage, Cegid)',
        'Connecteurs API personnalisés',
        'Synchronisation bidirectionnelle en temps réel',
        'Mapping automatique des champs',
        'Gestion des erreurs et monitoring'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'migration',
      title: 'Migration de Données',
      description: 'Transférez vos données critiques vers HubSpot sans perte ni interruption.',
      icon: <Workflow className="w-8 h-8" />,
      features: [
        'Migration complète des emails et historiques',
        'Transfert sécurisé des contacts et entreprises',
        'Préservation des relations et propriétés personnalisées',
        'Validation et nettoyage des données',
        'Tests de migration en environnement sandbox',
        'Formation post-migration'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'onboarding',
      title: 'Onboarding & Formation',
      description: 'Accompagnement complet de vos équipes pour une adoption réussie.',
      icon: <Users className="w-8 h-8" />,
      features: [
        'Sessions de formation personnalisées par équipe',
        'Création de processus et workflows adaptés',
        'Documentation et guides utilisateur',
        'Support technique dédié pendant 3 mois',
        'Certification des utilisateurs avancés',
        'Suivi des KPIs d\'adoption'
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'revops',
      title: 'RevOps & Optimisation',
      description: 'Optimisez vos processus de revenus avec des stratégies RevOps éprouvées.',
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        'Audit complet de vos processus de vente',
        'Optimisation du funnel de conversion',
        'Automatisation des tâches répétitives',
        'Tableaux de bord et reporting avancés',
        'Alignement Marketing-Ventes-Service Client',
        'Stratégies de lead scoring et nurturing'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 'cms',
      title: 'CMS & Site Web',
      description: 'Créez des sites web performants directement dans l\'écosystème HubSpot.',
      icon: <Globe className="w-8 h-8" />,
      features: [
        'Développement de sites web sur HubSpot CMS',
        'Templates responsives et optimisés SEO',
        'Intégration native avec les outils marketing',
        'Pages de destination haute conversion',
        'Optimisation des performances et vitesse',
        'Maintenance et mises à jour continues'
      ],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center">
            <h1 className="text-5xl md:text-7xl font-thin text-gray-900 mb-6 tracking-tight">
              Nos <span className="text-red-500">Services</span>
            </h1>
            <p className="text-2xl font-light text-gray-600 max-w-3xl mx-auto mb-12">
              Des solutions complètes pour transformer votre écosystème HubSpot
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <AnimatedSection 
                  animation={index % 2 === 0 ? "slide-right" : "slide-left"}
                  className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} text-white mb-8`}>
                    {service.icon}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
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
                    <Button className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-light px-8 py-4 rounded-full transition-all duration-500 hover:scale-105 shadow-lg relative overflow-hidden group`}>
                      <span className="relative z-10 flex items-center">
                        En savoir plus
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
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20`}></div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-5xl md:text-6xl font-thin text-gray-900 mb-8 tracking-tight">
              Prêt à <span className="text-red-500">commencer</span> ?
            </h2>
            <p className="text-xl font-light text-gray-600 mb-12 max-w-2xl mx-auto">
              Discutons de vos besoins et créons ensemble la solution HubSpot parfaite pour votre entreprise.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-12 py-6 rounded-full text-lg transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-orange-500/25 relative overflow-hidden group">
                <span className="relative z-10">Planifier un appel</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-red-500 text-red-500 hover:bg-gradient-to-r hover:from-red-500 hover:via-red-600 hover:to-pink-500 hover:text-white hover:border-transparent font-light px-12 py-6 rounded-full text-lg transition-all duration-500 hover:scale-105"
              >
                Voir nos tarifs
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
