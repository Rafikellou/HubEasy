import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';
import { CheckCircle, Zap, Users, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Notre Vocation | HubEasy',
  description: 'Découvrez la mission et les valeurs de HubEasy, agence spécialisée dans l\'intégration HubSpot pour les PME/ETI B2B.',
  alternates: {
    canonical: '/agence/notre-vocation',
  },
};

export default function NotreVocationPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden">
         <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
            alt="Équipe travaillant ensemble"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-white">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight">
              L’intégration HubSpot <span className="font-light text-red-500">simplifiée.</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">Notre Mission</h2>
            <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed">
              Transformer HubSpot en un outil clair, fluide et connecté à vos systèmes. Pas de complexité, juste de l’efficacité.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-16 items-center">
          <AnimatedSection animation="fade-up" className="md:col-span-1 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/images/rafik-photo.jpg"
                alt="Rafik, fondateur de HubEasy"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200} className="md:col-span-2">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">Derrière <span className="text-red-500">HubEasy</span></h2>
            <p className="text-xl font-light text-gray-600 mb-8"><strong>Rafik, fondateur.</strong> Plus de 15 ans d’expérience :</p>
            <ul className="space-y-4 font-light text-gray-700">
                <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-red-500 mr-4 flex-shrink-0" />
                    <span className="text-lg">Marketing international (Coca-Cola, PMI)</span>
                </li>
                <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-red-500 mr-4 flex-shrink-0" />
                    <span className="text-lg">E-commerce (Shopify)</span>
                </li>
                <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-red-500 mr-4 flex-shrink-0" />
                    <span className="text-lg">Intégrations complexes HubSpot ↔ ERP ↔ Salesforce</span>
                </li>
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <AnimatedSection animation="fade-up" className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-4 tracking-tight">Notre Approche</h2>
           </AnimatedSection>
           <div className="grid md:grid-cols-3 gap-8">
                <AnimatedSection animation="fade-up" delay={100}>
                    <div className="bg-gray-50 p-8 rounded-3xl text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Zap className="w-12 h-12 text-red-500 mx-auto mb-6"/>
                        <h3 className="text-2xl font-light text-gray-900 mb-4">Solutions low-code</h3>
                        <p className="text-gray-600 font-light">Pour des résultats rapides et des coûts maitrisés.</p>
                    </div>
                </AnimatedSection>
                <AnimatedSection animation="fade-up" delay={200}>
                    <div className="bg-gray-50 p-8 rounded-3xl text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Users className="w-12 h-12 text-red-500 mx-auto mb-6"/>
                        <h3 className="text-2xl font-light text-gray-900 mb-4">Experts à la demande</h3>
                        <p className="text-gray-600 font-light">Les meilleures compétences, uniquement quand c'est nécessaire.</p>
                    </div>
                </AnimatedSection>
                <AnimatedSection animation="fade-up" delay={300}>
                    <div className="bg-gray-50 p-8 rounded-3xl text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Heart className="w-12 h-12 text-red-500 mx-auto mb-6"/>
                        <h3 className="text-2xl font-light text-gray-900 mb-4">Simplicité promise</h3>
                        <p className="text-gray-600 font-light">Notre seul objectif est de vous simplifier la vie.</p>
                    </div>
                </AnimatedSection>
           </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="relative py-24 md:py-32 bg-black text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
            <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
                alt="Business meeting background"
                fill
                className="object-cover"
            />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
            <AnimatedSection animation="fade-up">
                <h2 className="text-4xl md:text-5xl font-thin mb-6 tracking-tight">En résumé</h2>
                <p className="text-2xl md:text-3xl font-light leading-relaxed">
                    Vous vous concentrez sur vos ventes.<br/>Nous, on gère la mécanique.
                </p>
            </AnimatedSection>
        </div>
      </section>

    </main>
  );
}