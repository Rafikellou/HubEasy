import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Compass, Zap, BarChart, LifeBuoy, ArrowRight } from 'lucide-react';
import { Fragment } from 'react';

const integrationTiers = [
  {
    name: 'Intégration simple',
    price: 'À partir de 3 900 € HT',
    features: [
      'Mise en place essentielle (pipelines, propriétés, imports)',
      'Automatisations clés (assignation, notifications)',
      'Formation de base des équipes',
    ],
    idealFor: 'Faible complexité, mise en route rapide et efficace.',
    icon: Zap,
    cta: { label: 'Lancer une intégration simple', href: '/contact' },
  },
  {
    name: 'Intégration intermédiaire',
    price: 'À partir de 6 500 € HT',
    features: [
      'Plus d’automatisations et de propriétés personnalisées',
      'Rapports avancés & dashboards adaptés',
      'Intégrations légères avec outils tiers',
    ],
    idealFor: 'Besoins plus riches, plusieurs équipes impliquées.',
    icon: BarChart,
    cta: { label: 'Parler de mon intégration', href: '/contact' },
  },
  {
    name: 'Intégration évoluée',
    price: 'Sur devis',
    features: [
      'Connexions poussées (ERP, facturation…) via Make/Zapier',
      'Automatisations sur‑mesure & dataflows complexes',
      'Gouvernance, sécurité, accompagnement au changement',
    ],
    idealFor: 'Écosystème outillé, process complexes, scalabilité.',
    icon: BarChart,
    cta: { label: 'Discuter d’un besoin complexe', href: '/contact' },
  },
];

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/tarif-photo.jpg"
            alt="Tarifs HubEasy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl font-thin text-white mb-6 tracking-tight">
              Des offres <span className="text-red-500">sans surprise.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto">
              Vous savez exactement ce que vous achetez.
            </p>
          </AnimatedSection>
        </div>
      </section>


      {/* Flow: how projects run */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900">Comment ça se passe ?</h2>
            <p className="mt-2 text-base md:text-lg font-normal text-gray-500">3 temps simples</p>
          </AnimatedSection>
          <div className="mt-12">
            <div className="flex flex-col md:flex-row md:items-stretch md:justify-center md:gap-4">
              {[
                { title: 'Audit', icon: Compass, desc: 'On clarifie besoins, données et priorités.' },
                { title: 'Intégration', icon: Zap, desc: 'On met en place selon votre niveau (simple, intermédiaire, évoluée).' },
                { title: 'Support & optimisation', icon: LifeBuoy, desc: 'On fait durer la valeur et on améliore en continu.' },
              ].map((step, i, arr) => (
                <Fragment key={step.title}>
                  <AnimatedSection animation="fade-up" delay={i * 100}>
                    <div className="relative bg-gray-50 border border-gray-200 rounded-2xl p-6 h-full text-center mb-4 md:mb-0 md:min-w-[260px]">
                      <step.icon className="w-8 h-8 text-red-500 mx-auto" />
                      <h3 className="mt-3 text-lg font-medium text-gray-900">{step.title}</h3>
                      <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
                    </div>
                  </AnimatedSection>
                  {i < arr.length - 1 && (
                    <div className="hidden md:flex items-center mx-2">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audit card */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex items-center justify-between">
              <div className="flex items-center">
                <Compass className="w-8 h-8 text-red-500 mr-3" />
                <div>
                  <h3 className="text-xl font-medium text-gray-900">Audit de départ</h3>
                  <p className="text-sm text-gray-600">2 ateliers • cartographie • plan d’intégration</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-red-600 font-semibold">Dès 1 500 € HT</span>
                <Link href="/contact">
                  <Button className="rounded-full bg-red-600 hover:bg-red-700 text-white">Démarrer l’audit</Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Simplified Packs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {integrationTiers.map((tier, index) => (
              <AnimatedSection key={tier.name} animation="fade-up" delay={index * 120}>
                <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-8 h-full flex flex-col">
                  <div className="flex items-center mb-5">
                    <tier.icon className="w-8 h-8 text-red-500 mr-3" />
                    <div>
                      <h3 className="text-xl font-medium text-gray-900">{tier.name}</h3>
                      <p className="text-base font-semibold text-red-500">{tier.price}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-5 text-gray-700">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-600 text-sm italic">{tier.idealFor}</p>
                  {tier.cta && (
                    <div className="mt-6">
                      <Link href={tier.cta.href}>
                        <Button className="w-full rounded-full bg-red-600 hover:bg-red-700 text-white">
                          {tier.cta.label}
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Support banner */}
          <AnimatedSection animation="fade-up" delay={380} className="mt-10">
            <div className="flex flex-col md:flex-row items-center justify-between bg-white border border-gray-200 rounded-2xl p-6 gap-4">
              <div className="flex items-center">
                <LifeBuoy className="w-7 h-7 text-red-500 mr-3" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Support & Optimisation Continue</h3>
                  <p className="text-sm text-gray-600">À partir de 490 € HT / mois • Points mensuels, corrections bugs, évolutions de Hubspot, nouveaux rapports & workflows.</p>
                </div>
              </div>
              <Link href="/contact">
                <Button variant="outline" className="rounded-full border-2 border-red-500 text-red-600 hover:bg-red-500 hover:text-white">Parler support</Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-6">
              Vous venez d’investir dans HubSpot.
              <br />
              Assurez-vous qu’il devienne le cockpit simple et fluide de vos ventes.
            </h2>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light text-lg px-10 py-4 h-auto rounded-full shadow-lg hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105">
                Planifier un appel de 30 min
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
