import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/animated-section';
import Image from 'next/image';
import Link from 'next/link';
import { Ticket, ShoppingBag, Users, ArrowRight } from 'lucide-react';

export default function HubEasySport() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
            alt="Stade de football avec supporters"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight">HubEasy Sport</h1>
            <p className="mt-6 text-xl md:text-2xl font-light opacity-90">
              L’expertise HubSpot dédiée aux clubs, ligues et événements sportifs.
            </p>
            <div className="mt-10 flex justify-center">
              <Link href="/contact">
                <Button className="bg-red-500 hover:bg-red-600 text-white font-light px-10 py-6 rounded-full text-lg flex items-center gap-2">
                  Planifier un appel
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Visual strip */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 mt-8 md:mt-10 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative h-44 md:h-56 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Action de football intense"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-44 md:h-56 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Match de basketball professionnel"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-44 md:h-56 rounded-2xl overflow-hidden shadow-md hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Joueur de tennis en action"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Qui sommes-nous ? */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 tracking-tight">
              Qui sommes-nous ?
            </h2>
          </AnimatedSection>
          <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
            <AnimatedSection animation="slide-right">
              <div>
                <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed">
                  HubEasy Sport est une division de l’agence HubEasy.
                </p>
                <p className="mt-4 text-lg md:text-xl font-light text-gray-700 leading-relaxed">
                  Notre spécialité : aider les acteurs du sport à mieux utiliser HubSpot et à transformer leur
                  base fan en moteur de croissance.
                </p>
                <ul className="mt-6 space-y-3 text-gray-700">
                  <li className="flex items-center gap-3"><span className="inline-block w-2 h-2 rounded-full bg-red-500" /> Clubs professionnels</li>
                  <li className="flex items-center gap-3"><span className="inline-block w-2 h-2 rounded-full bg-red-500" /> Ligues & fédérations</li>
                  <li className="flex items-center gap-3"><span className="inline-block w-2 h-2 rounded-full bg-red-500" /> Événements sportifs</li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={100}>
              <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                  alt="Supporters passionnés dans un stade"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vos enjeux dans le sport */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 tracking-tight">
              Vos enjeux dans le sport
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedSection animation="fade-up">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
                <div className="relative h-24 rounded-xl overflow-hidden mb-4">
                  <Image src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=70" alt="Billetterie stade" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-3 text-red-500 mb-3">
                  <Ticket className="w-6 h-6" />
                  <h3 className="text-lg font-medium text-gray-900">Billetterie</h3>
                </div>
                <p className="text-gray-600 text-sm">Données dispersées, peu exploitées</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
                <div className="relative h-24 rounded-xl overflow-hidden mb-4">
                  <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=70" alt="Boutique de sport" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-3 text-red-500 mb-3">
                  <ShoppingBag className="w-6 h-6" />
                  <h3 className="text-lg font-medium text-gray-900">Merchandising</h3>
                </div>
                <p className="text-gray-600 text-sm">Ventes séparées, pas de suivi fan global</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
                <div className="relative h-24 rounded-xl overflow-hidden mb-4">
                  <Image src="https://images.unsplash.com/photo-1569517282132-25d22f4573a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=70" alt="Partenaires et sponsors" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-3 text-red-500 mb-3">
                  <Users className="w-6 h-6" />
                  <h3 className="text-lg font-medium text-gray-900">Sponsoring B2B</h3>
                </div>
                <p className="text-gray-600 text-sm">Prospection difficile, reporting incomplet</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-up" delay={300}>
            <p className="mt-10 text-center text-gray-700 font-light">
              Résultat : des opportunités de revenus perdues chaque jour.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Notre approche */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 tracking-tight">Notre approche</h2>
            <p className="mt-6 text-lg md:text-xl font-light text-gray-700 leading-relaxed">
              Nous unifions vos données fans et sponsors dans HubSpot.<br />
              Vos process deviennent simples et automatiques :
            </p>
          </AnimatedSection>

          <div className="mt-10 flex flex-col md:flex-row items-stretch md:items-center justify-center gap-6">
            <AnimatedSection animation="fade-up">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 w-full md:w-80 text-center">
                <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">1</div>
                <h3 className="text-base font-medium text-gray-900">Billetterie connectée</h3>
              </div>
            </AnimatedSection>
            <div className="hidden md:flex text-gray-300">→</div>
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 w-full md:w-80 text-center">
                <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">2</div>
                <h3 className="text-base font-medium text-gray-900">Merchandising intégré</h3>
              </div>
            </AnimatedSection>
            <div className="hidden md:flex text-gray-300">→</div>
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 w-full md:w-80 text-center">
                <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">3</div>
                <h3 className="text-base font-medium text-gray-900">Pipeline sponsors en temps réel</h3>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-up" delay={300}>
            <p className="mt-8 text-center text-gray-700 font-light">
              👉 Vous augmentez la valeur de chaque fan et optimisez vos revenus B2B.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Cas client */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 tracking-tight">Cas client</h2>
            <p className="mt-4 text-gray-600 text-sm">(fictif mais crédible)</p>
          </AnimatedSection>

          <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
            <AnimatedSection animation="slide-right">
              <div className="space-y-4 text-gray-700 font-light text-lg">
                <p>
                  Un club professionnel a centralisé ses données : billetterie, boutique en ligne, sponsoring.
                </p>
                <p>
                  Grâce à HubEasy Sport, il a mis en place des scénarios automatiques :
                </p>
                <ul className="list-disc pl-6 text-base text-gray-700">
                  <li>Relance après achat de billet</li>
                  <li>Cross-sell merchandising ciblé</li>
                  <li>Suivi sponsors unifié</li>
                </ul>
                <p>
                  Résultat : <span className="text-gray-900 font-normal">+15% de revenu moyen par fan</span>,
                  dans le digital comme dans l’enceinte sportive.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={100}>
              <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                  alt="Analyse de données sportives"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 bg-black text-white text-center">
        <AnimatedSection animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-thin mb-6">Vos fans attendent plus qu’un match.</h2>
          <p className="text-xl font-light opacity-90 mb-10">
            Donnez-leur une expérience simple et personnalisée.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-black hover:bg-white/90 font-light px-10 py-6 rounded-full text-lg">
              Planifier un appel
            </Button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
