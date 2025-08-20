import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Users, Database, CheckCircle, Target, TrendingUp, Globe, Settings, Workflow, BarChart3 } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';

export default function Salesforce() {
  const advantages: any[] = [];

  const useCases: any[] = [];

  const stats: any[] = [];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/salesforce-photo.jpg"
            alt="Intégration Salesforce HubSpot"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-indigo-900/75 to-orange-900/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-6 leading-none">
              HubSpot & Salesforce
            </h1>
            <p className="text-xl md:text-2xl font-light mb-10 max-w-4xl mx-auto leading-relaxed opacity-90">
              L'intégration des deux leaders CRM, simplifiée.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light text-lg px-12 py-6 h-auto rounded-full border-0 shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105"
              >
                Planifier un appel
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Notre expertise */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full opacity-10"></div>
                <h2 className="text-4xl md:text-5xl font-thin text-gray-900 tracking-tight mb-6">Notre expertise</h2>
                <p className="text-xl font-light text-gray-700 mb-8 leading-relaxed">
                  Chez HubEasy, nous maîtrisons le connecteur HubSpot ↔ Salesforce.
                </p>
                <p className="text-lg font-light text-gray-600 mb-8">
                  Notre mission : que vos équipes marketing et sales travaillent enfin sur une donnée unifiée.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Certification officielle HubSpot & Salesforce</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                  alt="Équipe d'experts CRM"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pourquoi HubSpot & Salesforce */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 tracking-tight">Pourquoi HubSpot & Salesforce</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center h-full">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Marketing automation</h3>
                <p className="text-gray-600 font-light">sur HubSpot</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Database className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Sales et CRM complexe</h3>
                <p className="text-gray-600 font-light">sur Salesforce</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center h-full">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Alignement des deux mondes</h3>
                <p className="text-gray-600 font-light">données cohérentes, reporting fiable, meilleure performance</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Un partenariat unique */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                  alt="Partenariat CloudZ"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-10"></div>
                <h2 className="text-4xl md:text-5xl font-thin text-gray-900 tracking-tight mb-6">Un partenariat unique</h2>
                <p className="text-xl font-light text-gray-700 mb-6 leading-relaxed">
                  Nous ne sommes pas seuls.
                </p>
                <p className="text-lg font-light text-gray-600 mb-8">
                  HubEasy travaille main dans la main avec <span className="font-medium text-blue-600">CloudZ</span>, notre sister agency, spécialisée dans l'intégration technique Salesforce.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Sister agency spécialisée Salesforce</span>
                </div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Workflow className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Intégrations techniques avancées</span>
                </div>
                <Link href="https://cloudzlab.io" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-light px-8 py-4 rounded-full transition-all duration-500 hover:scale-105 shadow-lg">
                    <span className="flex items-center">
                      Découvrir CloudZ
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* CTA final */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-thin mb-6 tracking-tight">HubSpot et Salesforce peuvent travailler ensemble.</h2>
            <p className="text-xl font-light mb-10 max-w-2xl mx-auto opacity-90">Nous faisons en sorte que ce soit simple, fluide et rentable.</p>
            <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-12 py-6 rounded-full text-lg transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-orange-500/25">
              Planifier un appel
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
