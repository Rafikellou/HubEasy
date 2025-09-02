import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, CheckCircle, Zap, Shield, TrendingUp, Database, Settings, Rocket, Calendar, Building, ShoppingCart, Users } from 'lucide-react';
import { ArrowPathIcon, CurrencyDollarIcon, ServerStackIcon, UserIcon, BanknotesIcon, PresentationChartLineIcon, LockOpenIcon } from '@heroicons/react/24/outline';
import HubspotContactForm from '@/components/contact/HubspotContactForm';
import AnimatedSection from '@/components/animated-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Apple Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Modern Office */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-photo-hubeasy.jpg"
            alt="Équipe professionnelle en réunion dans un bureau moderne avec espaces vitrés"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin tracking-tight mb-8 leading-none">
            HubSpot.
            <br />
            <span className="text-red-500 font-extralight">Simplifié.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
            Nous intégrons HubSpot pour vous facilter la vie.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light text-lg px-12 py-4 h-auto rounded-full border-0 shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">Contacter</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white/20 backdrop-blur-md text-white border border-white/50 hover:bg-white hover:text-black font-light text-lg px-6 sm:px-8 md:px-12 py-4 h-auto rounded-full transition-all duration-500 hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Planifier RDV
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

      {/* Unify Data Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-base font-semibold leading-7 text-red-600">Unifiez vos données</h2>
            <p className="mt-2 text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-gray-900">Une seule plateforme.</p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">Ventes, marketing, support : tout en un. Tout fluide.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Ce que nous intégrons</h2>
            <p className="mt-4 text-lg text-gray-600">Des intégrations fluides avec tous vos outils préférés</p>
          </AnimatedSection>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[ 
              { 
                title: 'ERP', 
                gradient: 'from-blue-500 to-cyan-500',
                iconBg: 'bg-blue-100',
                iconColor: 'text-blue-600',
                systems: [
                  { name: '', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/odoo.svg' },
                  { name: 'Microsoft Dynamics', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/dynamics365.svg' },
                  { name: '', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/sage.svg' }
                ]
              },
              { 
                title: 'E-commerce', 
                gradient: 'from-green-500 to-emerald-500',
                iconBg: 'bg-green-100',
                iconColor: 'text-green-600',
                systems: [
                  { name: 'Shopify', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/shopify.svg' },
                  { name: 'WooCommerce', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/woocommerce.svg' },
                  { name: 'PrestaShop', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/prestashop.svg' }
                ]
              },
              { 
                title: 'Support', 
                gradient: 'from-purple-500 to-pink-500',
                iconBg: 'bg-purple-100',
                iconColor: 'text-purple-600',
                systems: [
                  { name: 'Zendesk', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/zendesk.svg' },
                  { name: 'Freshdesk', logo: '/freshdesk-logo.png' },
                  { name: 'Slack', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/slack.svg' }
                ]
              },
              { 
                title: 'Communication', 
                gradient: 'from-orange-500 to-red-500',
                iconBg: 'bg-orange-100',
                iconColor: 'text-orange-600',
                systems: [
                  { name: 'Outlook', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/microsoftoutlook.svg' },
                  { name: 'Gmail', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/gmail.svg' },
                  { name: '', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/zoom.svg' }
                ]
              },
              { 
                title: 'Marketing & Events', 
                gradient: 'from-indigo-500 to-purple-500',
                iconBg: 'bg-indigo-100',
                iconColor: 'text-indigo-600',
                systems: [
                  { name: '', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/typeform.svg' },
                  { name: 'Eventbrite', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/eventbrite.svg' },
                  { name: 'WebinarJam', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/github.svg' }
                ]
              },
              { 
                title: 'Finance', 
                gradient: 'from-yellow-500 to-orange-500',
                iconBg: 'bg-yellow-100',
                iconColor: 'text-yellow-600',
                systems: [
                  { name: 'QuickBooks', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/quickbooks.svg' },
                  { name: 'Cegid', logo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tidal.svg' },
                  { name: '', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/sage.svg' }
                ]
              },
            ].map((category, index) => (
              <AnimatedSection key={category.title} animation="fade-up" delay={index * 100}>
                <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${category.iconBg} rounded-xl mb-3`}>
                      <div className={`w-6 h-6 bg-gradient-to-r ${category.gradient} rounded`}></div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-3 lg:gap-4">
                    {category.systems.map((system, systemIndex) => (
                      <div key={system.name || systemIndex} className="flex items-center justify-center p-3 lg:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-gray-100 hover:to-gray-200 transition-all duration-300 group">
                        <div className={`flex items-center ${system.name ? 'space-x-3' : 'justify-center'}`}>
                          <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Image
                              src={system.logo}
                              alt={`${system.name || 'Integration'} logo`}
                              width={32}
                              height={32}
                              className="object-contain"
                            />
                          </div>
                          {system.name && (
                            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{system.name}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection animation="fade-up" delay={600} className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <p className="text-2xl font-light text-gray-800 mb-8">👉 Vos outils parlent enfin entre eux.</p>
              <Link href="/integrations">
                <Button 
                  variant="outline" 
                  className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-light px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Voir toutes nos intégrations
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stress-free Migration Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-right">
              <h2 className="text-base font-semibold leading-7 text-red-600">Migration sans stress</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Pas besoin d’être expert technique.</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">Nous gérons la complexité pour vous. Vous démarrez HubSpot sans douleur.</p>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="relative group">
                <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
                    alt="Femme souriante dans un bureau moderne"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Migration en cours</span>
                        <span className="text-sm font-bold text-red-500">87%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: '87%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Client Cases Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Cas clients</h2>
          </AnimatedSection>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              { title: 'Groupe Septeo', description: 'Legaltech — données unifiées Salesforce ↔ HubSpot. +45% MQL.', icon: <Building size={32}/> },
              { title: 'Boutique e-commerce', description: 'Shopify ↔ HubSpot. +22% conversion panier.', icon: <ShoppingCart size={32}/> },
              { title: 'Plateforme EdTech', description: 'LMS connecté, scoring & nurture. +55% conv. démo → vente.', icon: <Users size={32}/> },
            ].map((clientCase, index) => (
              <AnimatedSection key={clientCase.title} animation="fade-up" delay={index * 100}>
                <div className="bg-white p-8 rounded-3xl shadow-xl h-full text-center group hover:bg-red-500 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-red-500 group-hover:text-white transition-colors duration-300 mb-4">
                    {clientCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-gray-900 group-hover:text-white transition-colors duration-300">{clientCase.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 group-hover:text-red-100 transition-colors duration-300 line-clamp-2">{clientCase.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection animation="fade-up" delay={300} className="text-center mt-16">
            <Link href="/cas-clients">
              <Button 
                variant="outline" 
                className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-light px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                Voir plus de cas clients
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-24 sm:py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Nos points forts</h2>
          </AnimatedSection>
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Aller jusqu'au bout du bout", description: "Pour que les users HubSpot trouvent l'outil simple et vraiment utile." },
              { title: "Notre compréhension business", description: "En Marketing & Sales, couplée à notre savoir-faire technique." },
              { title: "Notre agilité", description: "Pour livrer des projets ultra fluides." },
            ].map((strength, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-gray-800 p-8 rounded-2xl shadow-lg h-full">
                  <div className="flex justify-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <CheckCircle className="w-7 h-7 text-red-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{strength.title}</h3>
                  <p className="text-gray-400">{strength.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={400} className="mt-16 text-center">
            <Link href="/services">
              <Button 
                variant="outline" 
                className="border-2 border-red-500 text-red-500 bg-white hover:bg-red-500 hover:text-white font-light px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                En savoir plus sur nos services
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Nos tarifs</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">Des packs simples, sans surprise. Pas d’heures facturées, pas de coûts cachés. Toujours basés sur le résultat.</p>
            <div className="mt-10">
              <Link href="/tarifs">
                <Button 
                  className="bg-red-600 text-white hover:bg-red-700 font-light px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
                >
                  Voir nos offres
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 sm:py-48 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1554672408-730436b60dde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
            alt="Bureau moderne en arrière-plan"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Prêt à simplifier HubSpot ?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">Vous venez d’acheter HubSpot ? Assurez-vous qu’il fonctionne simplement.</p>
            <div className="mt-10">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light text-lg px-12 py-4 h-auto rounded-full transition-all duration-500 hover:scale-105"
                >
                  Planifier un appel
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Contact</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">Parlez-nous de votre projet. Nous revenons vers vous sous 24h.</p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="mt-10">
              <HubspotContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
