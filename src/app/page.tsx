import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, CheckCircle, Zap, Shield, TrendingUp, Database, Settings, Rocket } from 'lucide-react';
import { ArrowPathIcon, CurrencyDollarIcon, ServerStackIcon, UserIcon, BanknotesIcon, PresentationChartLineIcon, LockOpenIcon } from '@heroicons/react/24/outline';
import AnimatedSection from '@/components/animated-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Apple Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Modern Office */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Hero Photo Hub Easy.jpg"
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
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light text-lg px-12 py-4 h-auto rounded-full border-0 shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">Contacter</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
            <Button 
              size="lg" 
              className="bg-white/20 backdrop-blur-md text-white border border-white/50 hover:bg-white hover:text-black font-light text-lg px-12 py-4 h-auto rounded-full transition-all duration-500 hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2" />
              Voir la vidéo
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Intégrations Section - Clean Design */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-thin text-gray-900 mb-6 tracking-tight">
              Unifié.
            </h2>
            <p className="text-2xl font-light text-gray-600 max-w-3xl mx-auto">
              Toutes vos données. Une seule plateforme.
            </p>
          </AnimatedSection>
          
          {/* Large Feature Image */}
          <AnimatedSection animation="rotate-in" delay={300} duration={1200} className="mb-20">
            <div className="relative group cursor-pointer">
              <div className="relative h-96 md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
                  alt="Homme regardant un ordinateur portable avec des icônes numériques flottantes"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-light mb-2">Tableau de bord unifié</h3>
                  <p className="text-lg font-light opacity-90">Toutes vos données en un coup d'œil</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Integration Cards */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Salesforce', icon: <ArrowPathIcon className="w-10 h-10" /> },
              { name: 'Sage', icon: <CurrencyDollarIcon className="w-10 h-10" /> },
              { name: 'Microsoft Dynamics', icon: <ServerStackIcon className="w-10 h-10" /> },
              { name: 'ZoomInfo', icon: <UserIcon className="w-10 h-10" /> }
            ].map((app, index) => (
              <AnimatedSection 
                key={app.name} 
                animation="bounce-in" 
                delay={index * 150 + 600}
                duration={1000}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 h-48 flex flex-col justify-center items-center transition-all duration-500 hover:bg-red-500 hover:text-white hover:scale-105 hover:shadow-2xl cursor-pointer border border-gray-200 shadow-lg">
                  <div className="mb-4 text-gray-800 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    {app.icon}
                  </div>
                  <h3 className="text-xl font-light text-center text-gray-900 group-hover:text-white transition-colors duration-300">{app.name}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-right">
              <h2 className="text-5xl md:text-6xl font-thin text-gray-900 mb-8 tracking-tight">
                Migration.
                <br />
                <span className="text-red-500">Sans stress.</span>
              </h2>
              <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                Nous transformons votre migration en opportunité d'optimisation.
              </p>
              <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-8 py-4 rounded-full transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-orange-500/25 relative overflow-hidden group">
                <span className="relative z-10">Planifier ma migration</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="relative group">
                <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
                    alt="Visualisation abstraite de la synchronisation de données"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  {/* Migration progress overlay */}
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

      {/* Expertise Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="scale-up" className="relative group order-2 lg:order-1">
              <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
                  alt="Équipe d'experts"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200} className="order-1 lg:order-2">
              <h2 className="text-5xl md:text-6xl font-thin text-gray-900 mb-8 tracking-tight">
                Expertise.
                <br />
                <span className="text-red-500">Prouvée.</span>
              </h2>
              <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                Des processus RevOps optimisés par des années d'expérience.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  '+25 ans d\'expérience cumulés',
                  '100% de satisfaction client à ce jour',
                  'Disponible pour vous 24/7'
                ].map((stat, index) => (
                  <AnimatedSection key={index} animation="fade-up" delay={400 + index * 100}>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div>
                      <span className="text-lg font-light text-gray-700">{stat}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
              <AnimatedSection animation="fade-up" delay={700}>
                <Button variant="outline" className="border-2 border-red-500 text-red-500 hover:bg-gradient-to-r hover:from-red-500 hover:via-red-600 hover:to-pink-500 hover:text-white hover:border-transparent font-light px-8 py-4 rounded-full transition-all duration-500 hover:scale-105 relative overflow-hidden group">
                  <span className="relative z-10">Découvrir notre expertise</span>
                </Button>
              </AnimatedSection>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Transparence Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-5xl md:text-7xl font-thin text-gray-900 mb-6 tracking-tight">
              Transparent.
            </h2>
            <p className="text-2xl font-light text-gray-600 mb-20 max-w-3xl mx-auto">
              Devis sans surprise. Délais maitrisés
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { 
                title: 'Budget', 
                desc: 'Prix clairs et transparents',
                icon: <BanknotesIcon className="w-12 h-12 text-red-500" />,
                highlight: '0€ de surprise'
              },
              { 
                title: 'Impact', 
                desc: 'Résultats attendus',
                icon: <PresentationChartLineIcon className="w-12 h-12 text-red-500" />,
                highlight: 'ROI garanti'
              },
              { 
                title: 'Engagement', 
                desc: 'Flexibilité totale',
                icon: <LockOpenIcon className="w-12 h-12 text-red-500" />,
                highlight: 'Sans contrainte'
              },
            ].map((item, index) => (
              <AnimatedSection key={index} animation="bounce-in" delay={index * 200 + 300} duration={1200} className="group">
                <div className="bg-white rounded-3xl p-12 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
                  <div className="mb-6 flex justify-center transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 font-light mb-4">{item.desc}</p>
                  <div className="text-red-500 font-medium">{item.highlight}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          {/* Pricing showcase */}
          <AnimatedSection animation="scale-up" delay={600}>
            <div className="relative">
              <div className="bg-white rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer">
                <h3 className="text-3xl font-light text-gray-900 mb-8">Tarification simple</h3>
                <div className="text-6xl font-thin text-red-500 mb-4">450€</div>
                <p className="text-xl font-light text-gray-600">par jour d'intervention</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        {/* Background Image - Business Meeting */}
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
            <h2 className="text-5xl md:text-7xl font-thin mb-8 tracking-tight">
              Prêt à <span className="text-red-500">décoller</span> ?
            </h2>
            <p className="text-2xl font-light mb-12 max-w-2xl mx-auto opacity-90">
              Transformons votre vision en réalité HubSpot.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-12 py-6 rounded-full text-lg transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-orange-500/25 relative overflow-hidden group">
                <span className="relative z-10">Commencer maintenant</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black font-light px-12 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/10"
              >
                Planifier un appel
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-5xl md:text-6xl font-thin text-gray-900 mb-8 tracking-tight">
              Parlons-en.
            </h2>
            <p className="text-xl font-light text-gray-600 mb-12 max-w-2xl mx-auto">
              Un email suffit. Nous nous occupons du reste.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="scale-up" delay={200}>
            <div className="bg-gray-50 rounded-3xl p-12 shadow-lg hover:shadow-2xl transition-all duration-500">
              <form className="space-y-8">
                <AnimatedSection animation="fade-up" delay={400}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <input 
                      type="text" 
                      placeholder="Votre nom"
                      className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-red-500 focus:outline-none transition-colors duration-300 font-light"
                    />
                    <input 
                      type="email" 
                      placeholder="Votre email"
                      className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-red-500 focus:outline-none transition-colors duration-300 font-light"
                    />
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fade-up" delay={500}>
                  <input 
                    type="text" 
                    placeholder="Nom de votre entreprise"
                    className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-red-500 focus:outline-none transition-colors duration-300 font-light"
                  />
                </AnimatedSection>
                <AnimatedSection animation="fade-up" delay={600}>
                  <textarea 
                    placeholder="Décrivez votre projet..."
                    rows={6}
                    className="w-full px-6 py-4 rounded-3xl border border-gray-200 focus:border-red-500 focus:outline-none transition-colors duration-300 font-light resize-none"
                  ></textarea>
                </AnimatedSection>
                <AnimatedSection animation="fade-up" delay={700}>
                  <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-12 py-6 rounded-full text-lg transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-orange-500/25 relative overflow-hidden group">
                    <span className="relative z-10">Envoyer le message</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Button>
                </AnimatedSection>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
