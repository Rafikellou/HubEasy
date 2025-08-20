import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Database, Zap, Globe, CheckCircle, Clock, Target } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';

export default function CasClients() {
  const caseStudies = [
    {
      id: 'industrie-odoo-hubspot',
      company: 'PME industrielle',
      sector: 'Industrie',
      challenge: 'Intégration Odoo ↔ HubSpot',
      title: 'Devis & factures synchronisés entre Odoo et HubSpot',
      description: "Avant: commerciaux et administration sur deux systèmes. Problème: double saisie et erreurs. Solution: connecteur Odoo ↔ HubSpot + automatisation devis/factures.",
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      results: [
        { metric: '-70%', label: 'Double saisie', icon: <Database className="w-5 h-5" /> },
        { metric: 'Focus vente', label: 'Équipes recentrées', icon: <Target className="w-5 h-5" /> }
      ],
      solutions: [
        'Connecteur HubSpot ↔ Odoo',
        'Automatisation devis et factures',
        'Alignement des objets & propriétés',
        'Tests bout-en-bout et formation'
      ],
      testimonial: {
        quote: "Nous avons éliminé la double saisie et gagné en fiabilité.",
        author: 'Direction commerciale',
        role: 'Industrie'
      },
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 'conseil-dolibarr-hubspot',
      company: 'Cabinet de conseil',
      sector: 'Conseil',
      challenge: 'Intégration Dolibarr ↔ HubSpot',
      title: 'Pipeline aligné avec la facturation Dolibarr',
      description: "Avant: CRM HubSpot d’un côté, facturation Dolibarr de l’autre. Problème: non-alignement → pertes de temps. Solution: synchronisation HubSpot ↔ Dolibarr + automatisation factures.",
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2400&auto=format&fit=crop',
      results: [
        { metric: 'Sans erreur', label: 'Facturation', icon: <CheckCircle className="w-5 h-5" /> },
        { metric: 'Fluide', label: 'Reporting', icon: <TrendingUp className="w-5 h-5" /> }
      ],
      solutions: [
        'Synchronisation HubSpot ↔ Dolibarr',
        'Automatisation des factures par étape',
        'Alignement pipeline ↔ comptabilité',
        'Reporting unifié'
      ],
      testimonial: {
        quote: "La facturation est devenue fiable et le reporting est fluide.",
        author: 'Associé',
        role: 'Cabinet de conseil'
      },
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'saas-salesforce-hubspot',
      company: 'Editeur SaaS',
      sector: 'SaaS',
      challenge: 'Intégration Salesforce ↔ HubSpot',
      title: 'Unifier marketing et ventes pour booster l’upsell',
      description: "Avant: marketing sur HubSpot, sales sur Salesforce. Problème: données éclatées, upsell difficile. Solution: intégration bidirectionnelle + automatisation MRR.",
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2400&auto=format&fit=crop',
      results: [
        { metric: '+25%', label: 'Upsell en 9 mois', icon: <TrendingUp className="w-5 h-5" /> },
        { metric: '360°', label: 'Vue client', icon: <Target className="w-5 h-5" /> }
      ],
      solutions: [
        'Connecteur Salesforce ↔ HubSpot',
        'Synchronisation contacts/entreprises/deals',
        'Automatisations MRR et handoffs',
        'Dashboards croisés Sales/Marketing'
      ],
      testimonial: {
        quote: "L’upsell a enfin décollé grâce à une donnée unifiée.",
        author: 'VP Sales',
        role: 'SaaS B2B'
      },
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ecommerce-shopify-hubspot',
      company: 'E-commerce',
      sector: 'E-commerce',
      challenge: 'Intégration Shopify ↔ HubSpot',
      title: 'Relances panier et campagnes ciblées automatisées',
      description: "Avant: bases non reliées (Shopify vs HubSpot). Problème: pas de relance panier, campagnes génériques. Solution: intégration Shopify ↔ HubSpot + workflows.",
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      results: [
        { metric: '+18%', label: 'CA via campagnes ciblées', icon: <TrendingUp className="w-5 h-5" /> },
        { metric: 'Workflows', label: 'Relance panier', icon: <Zap className="w-5 h-5" /> }
      ],
      solutions: [
        'Intégration Shopify ↔ HubSpot',
        'Workflows d’abandon de panier',
        'Segmentation et ciblage avancés',
        'Tableaux de bord performance'
      ],
      testimonial: {
        quote: "Les campagnes ciblées ont augmenté notre CA de manière mesurable.",
        author: 'Directeur e-commerce',
        role: 'Retail'
      },
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-photo-hubeasy.jpg"
            alt="Client satisfait, succès projet HubSpot"
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
