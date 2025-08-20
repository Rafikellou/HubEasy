'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Zap, Briefcase, ShoppingCart, LifeBuoy, Mail, BarChart2, BookOpen } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import Image from 'next/image';

const integrations = [
  {
    category: 'ERP & Facturation',
    icon: <Briefcase className="w-8 h-8 text-red-500" />,
    apps: [{ name: 'Odoo', highlight: true }, { name: 'Dolibarr', highlight: true }, { name: 'Sage', highlight: false }],
    description: 'Synchronisez devis, factures et clients. Zéro double saisie.',
    specificities: 'Synchronisation bidirectionnelle des données financières',
    benefits: [
      'Fin de la double saisie entre ERP et CRM',
      'Suivi en temps réel du cycle de vente',
      'Automatisation des relances clients'
    ]
  },
  {
    category: 'E-commerce',
    icon: <ShoppingCart className="w-8 h-8 text-red-500" />,
    apps: [{ name: 'Shopify', highlight: true }, { name: 'WooCommerce', highlight: true }, { name: 'PrestaShop', highlight: false }],
    description: 'Connectez vos ventes en ligne à HubSpot. Vos clients arrivent prêts pour le nurturing.',
    specificities: 'Intégration native avec les principales plateformes e-commerce',
    benefits: [
      'Clients e-commerce automatiquement dans HubSpot',
      'Segmentation basée sur l’historique d’achat',
      'Campagnes de réactivation personnalisées'
    ]
  },
  {
    category: 'Support & Collaboration',
    icon: <LifeBuoy className="w-8 h-8 text-red-500" />,
    apps: [{ name: 'Zendesk', highlight: true }, { name: 'Freshdesk', highlight: false }, { name: 'Slack', highlight: true }],
    description: 'Centralisez vos tickets et échanges. Tout est visible dans HubSpot.',
    specificities: 'Vision 360° du parcours client incluant le support',
    benefits: [
      'Historique complet client-support dans HubSpot',
      'Escalade automatique vers les équipes sales',
      'Mesure de la satisfaction client unifiée'
    ]
  },
  {
    category: 'Communication & Email',
    icon: <Mail className="w-8 h-8 text-red-500" />,
    apps: [{ name: 'Outlook', highlight: true }, { name: 'Gmail', highlight: true }, { name: 'Zoom', highlight: false }],
    description: 'Emails et rendez-vous intégrés. Vos commerciaux gagnent du temps.',
    specificities: 'Synchronisation native avec les outils de communication',
    benefits: [
      'Échanges emails automatiquement logés',
      'Planification de rendez-vous simplifiée',
      'Suivi des interactions en temps réel'
    ]
  },
  {
    category: 'Marketing & Events',
    icon: <BarChart2 className="w-8 h-8 text-red-500" />,
    apps: [{ name: 'Typeform', highlight: true }, { name: 'Eventbrite', highlight: false }, { name: 'WebinarJam', highlight: false }],
    description: 'Chaque formulaire ou inscription devient un lead qualifié.',
    specificities: 'Capture et qualification automatique des leads marketing',
    benefits: [
      'Leads qualifiés automatiquement dans HubSpot',
      'Attribution marketing précise par canal',
      'Workflows de nurturing déclenchés instantanément'
    ]
  },
  {
    category: 'Comptabilité & Gestion financière',
    icon: <BookOpen className="w-8 h-8 text-red-500" />,
    apps: [{ name: 'QuickBooks', highlight: true }, { name: 'Cegid', highlight: false }, { name: 'Sage 100', highlight: false }],
    description: 'Vos ventes HubSpot s’alignent directement avec vos finances.',
    specificities: 'Alignement parfait entre prévisions sales et réalité financière',
    benefits: [
      'Prévisions de revenus fiables et actualisées',
      'Suivi de performance commerciale en temps réel',
      'Reporting financier enrichi des données CRM'
    ]
  },
];

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Apple Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Modern Office */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/integration-photo.jpg"
            alt="Intégrations HubSpot"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-thin tracking-tight mb-8 leading-none">
            Intégrations
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Toutes les applications du marché interconnectées. <span className="text-red-500">HubSpot Boosté.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light text-lg px-12 py-4 h-auto rounded-full border-0 shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">Discutons de vos intégrations</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white/20 backdrop-blur-md text-white border border-white/50 hover:bg-white hover:text-black font-light text-lg px-12 py-4 h-auto rounded-full transition-all duration-500 hover:scale-105"
              >
                Planifier un appel
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {/* First Row */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrations.slice(0, 3).map((integration, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="bg-white rounded-3xl p-8 h-full flex flex-col hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 relative">
                    {/* Decorative element */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-red-400 to-orange-400 rounded-full opacity-20"></div>
                    
                    <div className="flex items-center mb-6">
                      <div className="mr-4 p-3 bg-red-50 rounded-2xl">{integration.icon}</div>
                      <h3 className="text-2xl font-medium text-gray-900">{integration.category}</h3>
                    </div>
                    
                    <p className="text-gray-600 font-light mb-4">{integration.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-2 uppercase tracking-wide">Spécificités</h4>
                      <p className="text-sm text-gray-600 font-light">{integration.specificities}</p>
                    </div>
                    
                    <div className="mb-6 flex-grow">
                      <h4 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">Bénéfices</h4>
                      <ul className="space-y-2">
                        {integration.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="font-light">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">Références du marché</h4>
                      <div className="flex flex-wrap gap-2">
                        {integration.apps.map(app => (
                          <span 
                            key={app.name} 
                            className={`text-sm font-medium px-3 py-1.5 rounded-full transition-colors ${
                              app.highlight 
                                ? 'bg-red-500 text-white shadow-md' 
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {app.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            
            {/* Visual Separator */}
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-red-300"></div>
                <div className="w-3 h-3 bg-red-400 rounded-full opacity-60"></div>
                <div className="w-24 h-px bg-gradient-to-r from-red-300 to-red-300"></div>
                <div className="w-3 h-3 bg-orange-400 rounded-full opacity-60"></div>
                <div className="w-12 h-px bg-gradient-to-r from-red-300 to-transparent"></div>
              </div>
            </div>
            
            {/* Second Row */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrations.slice(3, 6).map((integration, index) => (
                <AnimatedSection key={index + 3} animation="fade-up" delay={(index + 3) * 100}>
                  <div className="bg-white rounded-3xl p-8 h-full flex flex-col hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 relative">
                    {/* Decorative element */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"></div>
                    
                    <div className="flex items-center mb-6">
                      <div className="mr-4 p-3 bg-red-50 rounded-2xl">{integration.icon}</div>
                      <h3 className="text-2xl font-medium text-gray-900">{integration.category}</h3>
                    </div>
                    
                    <p className="text-gray-600 font-light mb-4">{integration.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-2 uppercase tracking-wide">Spécificités</h4>
                      <p className="text-sm text-gray-600 font-light">{integration.specificities}</p>
                    </div>
                    
                    <div className="mb-6 flex-grow">
                      <h4 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">Bénéfices</h4>
                      <ul className="space-y-2">
                        {integration.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="font-light">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">Références du marché</h4>
                      <div className="flex flex-wrap gap-2">
                        {integration.apps.map(app => (
                          <span 
                            key={app.name} 
                            className={`text-sm font-medium px-3 py-1.5 rounded-full transition-colors ${
                              app.highlight 
                                ? 'bg-red-500 text-white shadow-md' 
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {app.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
              Prêt à connecter vos outils ?
            </h2>
            <p className="text-xl font-light text-gray-600 mb-8 max-w-2xl mx-auto">
              Avec HubEasy, vos applications et HubSpot travaillent enfin ensemble. Discutons de votre projet.
            </p>
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light text-lg px-12 py-4 h-auto rounded-full border-0 shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
              >
                Planifier un appel
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
