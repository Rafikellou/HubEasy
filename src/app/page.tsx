import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, CheckCircle, Zap, Shield, TrendingUp, Database, Settings, Rocket, Calendar } from 'lucide-react';
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
                className="bg-white/20 backdrop-blur-md text-white border border-white/50 hover:bg-white hover:text-black font-light text-lg px-12 py-4 h-auto rounded-full transition-all duration-500 hover:scale-105"
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
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-base font-semibold leading-7 text-red-600">Unifiez vos données</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Une seule plateforme.</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">Ventes, marketing, support : tout en un. Tout fluide.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Ce que nous intégrons</h2>
          </AnimatedSection>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { title: 'ERP', items: ['Odoo', 'Dolibarr', 'Sage'] },
              { title: 'E-commerce', items: ['Shopify', 'WooCommerce', 'PrestaShop'] },
              { title: 'Support', items: ['Zendesk', 'Freshdesk', 'Slack'] },
              { title: 'Communication', items: ['Outlook', 'Gmail', 'Zoom'] },
              { title: 'Marketing & Events', items: ['Typeform', 'Eventbrite', 'WebinarJam'] },
              { title: 'Finance', items: ['QuickBooks', 'Cegid', 'Sage 100'] },
            ].map((category, index) => (
              <AnimatedSection key={category.title} animation="fade-up" delay={index * 100}>
                <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    {category.items.map(item => (
                      <li key={item} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection animation="fade-up" delay={600} className="text-center mt-16">
            <p className="text-2xl font-light text-gray-800 mb-8">👉 Vos outils parlent enfin entre eux.</p>
            <Link href="/integrations">
              <Button 
                variant="outline" 
                className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-light px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                Voir toutes nos intégrations
              </Button>
            </Link>
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
              { title: 'Industrie', description: 'Intégration Odoo : 70% de saisie manuelle en moins.', icon: <TrendingUp size={32}/> },
              { title: 'Conseil', description: 'Intégration Dolibarr : Facturation automatisée et sans erreur.', icon: <Database size={32}/> },
              { title: 'SaaS', description: 'Intégration Dynamics : 25% d\'upsell additionnel en 9 mois.', icon: <Rocket size={32}/> },
            ].map((clientCase, index) => (
              <AnimatedSection key={clientCase.title} animation="fade-up" delay={index * 100}>
                <div className="bg-white p-8 rounded-3xl shadow-xl h-full text-center group hover:bg-red-500 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-red-500 group-hover:text-white transition-colors duration-300 mb-4">
                    {clientCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">{clientCase.title}</h3>
                  <p className="mt-4 text-gray-600 group-hover:text-red-100 transition-colors duration-300">{clientCase.description}</p>
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
