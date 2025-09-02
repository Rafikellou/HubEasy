import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { AlertCircle, Wrench, BarChart3, Building, ShoppingCart, Users, TrendingUp, Zap } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';

export default function CasClients() {
  const caseStudies = [
    {
      id: 'septeo',
      company: 'Groupe Septeo',
      context: '+500 millions de CA, Legaltech en hyper croissance',
      challenge: 'Fragmentation des données clients entre plusieurs systèmes',
      solutions: [
        'Intégration complète Salesforce ↔ HubSpot',
        'Synchronisation unidirectionnelle des contacts et opportunités',
        'Automatisation des workflows de qualification',
        'Création de dashboards unifiés pour Sales & Marketing'
      ],
      results: [
        { value: '+45%', label: 'Taux de conversion leads qualifiés', icon: <TrendingUp className="w-5 h-5" /> },
        { value: '-60%', label: 'Temps de traitement des leads', icon: <Zap className="w-5 h-5" /> },
        { value: '360°', label: 'Vue client unifiée', icon: <Users className="w-5 h-5" /> }
      ]
    },
    {
      id: 'startup-ecommerce',
      company: 'Boutique e-commerce',
      context: 'Start-up en pleine croissance - Vente en ligne de produits premium',
      challenge: 'Abandon de panier élevé et manque de personnalisation',
      solutions: [
        'Intégration Shopify ↔ HubSpot',
        'Workflows d\'abandon de panier automatisés',
        'Segmentation avancée des clients',
        'Campagnes de remarketing dynamiques'
      ],
      results: [
        { value: '+22%', label: 'Taux de conversion panier', icon: <ShoppingCart className="w-5 h-5" /> },
        { value: '+35%', label: 'CA via campagnes ciblées', icon: <TrendingUp className="w-5 h-5" /> },
        { value: '4x', label: 'ROI sur remarketing', icon: <BarChart3 className="w-5 h-5" /> }
      ]
    },
    {
      id: 'entreprise-education',
      company: 'Plateforme EdTech',
      context: 'Entreprise d\'éducation - Formation en ligne pour professionnels',
      challenge: 'Difficulté à suivre et convertir les prospects chauds',
      solutions: [
        'Intégration avec leur LMS (Learning Management System)',
        'Automatisation des séquences d\'emailing éducatif',
        'Tracking des parcours d\'apprentissage dans HubSpot',
        'Scoring des leads basé sur l\'engagement'
      ],
      results: [
        { value: '+180%', label: 'Prospects qualifiés pour démo', icon: <Users className="w-5 h-5" /> },
        { value: '+55%', label: 'Taux de conversion démo → vente', icon: <TrendingUp className="w-5 h-5" /> },
        { value: '30%', label: 'Réduction du temps de vente', icon: <Zap className="w-5 h-5" /> }
      ]
    },
    {
      id: 'pme-industrie',
      company: 'Fabricant industriel',
      context: 'PME de 150 employés - Production de composants techniques',
      challenge: 'Processus de ventes manuels et non synchronisés',
      solutions: [
        'Intégration Odoo ↔ HubSpot',
        'Automatisation des devis et factures',
        'Synchronisation des contacts et opportunités',
        'Formation des équipes commerciales'
      ],
      results: [
        { value: '-75%', label: 'Saisie manuelle', icon: <Zap className="w-5 h-5" /> },
        { value: '+40%', label: 'Productivité commerciale', icon: <TrendingUp className="w-5 h-5" /> },
        { value: '100%', label: 'Fiabilité des données', icon: <BarChart3 className="w-5 h-5" /> }
      ]
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
             Nos Cas Clients
            </h1>
            <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto font-light opacity-90">
              Découvrez comment nous transformons les défis de nos clients en succès mesurables.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies Grid */}
      <main className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((caseStudy, index) => (
              <AnimatedSection 
                key={caseStudy.id} 
                animation="fade-up" 
                delay={index * 100}
              >
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg overflow-hidden">
                  {/* Client Header */}
                  <div className="mb-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {caseStudy.company}
                      </h2>
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-medium">
                        {caseStudy.context}
                      </div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-12">
                    {/* Challenge */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-100 text-red-600 mr-4">
                          <AlertCircle className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Problématique</h3>
                      </div>
                      <p className="text-gray-600 font-light text-lg leading-relaxed">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mr-4">
                          <Wrench className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Solution</h3>
                      </div>
                      <ul className="space-y-3">
                        {caseStudy.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            </div>
                            <span className="ml-3 text-gray-700 font-light">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-600 mr-4">
                          <BarChart3 className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Résultats</h3>
                      </div>
                      <div className="space-y-5">
                        {caseStudy.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              {result.icon}
                            </div>
                            <div className="ml-4">
                              <div className="text-3xl font-bold text-gray-900">{result.value}</div>
                              <div className="text-gray-600 font-light">{result.label}</div>
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
      </main>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
            alt="Réunion d'affaires moderne"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-thin mb-8 tracking-tight">
              Votre succès pourrait être le prochain
            </h2>
            <p className="text-xl font-light mb-12 max-w-2xl mx-auto opacity-90">
              Découvrez comment nous pouvons transformer vos défis HubSpot en opportunités de croissance.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-8 py-4 rounded-full text-lg transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-orange-500/25 relative overflow-hidden group">
                <span className="relative z-10">Découvrez comment nous pouvons vous aider</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}