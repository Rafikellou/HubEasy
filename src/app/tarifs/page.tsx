import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Compass, Zap, BarChart, LifeBuoy, ArrowRight, Search, Share2, Mail, Bot, Users, Settings } from 'lucide-react';
import { Fragment } from 'react';

const processSteps = [
  {
    step: '1',
    title: 'Audit',
    price: '1 500 euros HT',
    description: 'On clarifie besoins, données et priorités.',
    icon: Compass,
  },
  {
    step: '2',
    title: 'Intégration',
    price: 'à partir de 3 900 euros HT',
    description: 'On met en place selon votre niveau (standard, intermédiaire, avancée).',
    icon: Zap,
  },
  {
    step: '3',
    title: 'Support & optimisation',
    price: 'à partir de 490 euros par mois',
    description: 'On fait durer la valeur et on améliore en continu.',
    icon: LifeBuoy,
  },
];

const integrationTiers = [
  {
    name: 'Intégration standard',
    price: '3 900 € HT',
    features: [
      'Mise en place essentielle (pipelines, propriétés, imports)',
      'Automatisations clés (assignation, notifications)',
      'Formation de base des équipes',
    ],
    idealFor: 'Faible complexité, mise en route rapide et efficace.',
    icon: Zap,
    cta: { label: 'Lancer une intégration standard', href: '/contact' },
  },
  {
    name: 'Intégration intermédiaire',
    price: '6 500 € HT',
    features: [
      'Plus d\'automatisations et de propriétés personnalisées',
      'Rapports avancés & dashboards adaptés',
      'Intégrations légères avec outils tiers',
    ],
    idealFor: 'Besoins plus riches, plusieurs équipes impliquées.',
    icon: BarChart,
    cta: { label: 'Parler de mon intégration', href: '/contact' },
  },
  {
    name: 'Intégration avancée',
    price: 'Sur Devis',
    features: [
      'Connexions poussées (ERP, facturation…) via Make/Zapier',
      'Automatisations sur‑mesure & dataflows complexes',
      'Gouvernance, sécurité, accompagnement au changement',
    ],
    idealFor: 'Écosystème outillé, process complexes, scalabilité.',
    icon: BarChart,
    cta: { label: 'Discuter d\'un besoin complexe', href: '/contact' },
  },
];

const supportFeatures = [
  'Optimisations de vue, de séquences, de wfs',
  'Correction de potentiels bugs',
  'Améliorations de rapports',
];

const aiAgents = [
  {
    name: 'Lucie',
    role: 'Business développeur',
    description: 'Scrape internet et vient enrichir tous les matins votre HubSpot avec des leads qualifiés',
    icon: Search,
    photo: '/lucie-photo.png',
  },
  {
    name: 'Théo',
    role: 'Community Manager',
    description: 'Vient publier à fréquence optimisée des contenus sur vos réseaux pour remonter dans les recherches Google',
    icon: Share2,
    photo: '/theo-photo.png',
  },
  {
    name: 'Anna',
    role: 'Secrétaire intelligente',
    description: 'Vient filtrer analyser vos mails. Peut-même répondre à votre place dans certains cas bien définis',
    icon: Mail,
    photo: '/anna-photo.png',
  },
];

const aiPricing = {
  lucie: { installation: '790 euros', abonnement: '129 euros/mois' },
  theo: { installation: '590 euros', abonnement: '99 euros/mois' },
  anna: { installation: '390 euros', abonnement: '79 euros/mois' }
};

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

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900">Comment ça se passe ?</h2>
            <p className="mt-2 text-base md:text-lg font-normal text-gray-500">3 étapes simples</p>
          </AnimatedSection>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-32 left-16 right-16 h-0.5 bg-gray-200"></div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <AnimatedSection key={step.step} animation="fade-up" delay={index * 150}>
                  <div className="relative">
                    <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-6">
                        <step.icon className="w-8 h-8 text-red-500" />
                      </div>
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-sm font-medium rounded-full mb-2">
                          Étape {step.step}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-lg font-semibold text-red-600 mb-3">{step.price}</p>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900">Nos 3 niveaux d'intégrations</h2>
            <p className="mt-2 text-base md:text-lg font-normal text-gray-500">Votre besoin rentre forcément dans une des 3 cases</p>
          </AnimatedSection>
          
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
                  <ul className="space-y-2 mb-5 text-gray-700 flex-grow">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-600 text-sm italic mb-6">{tier.idealFor}</p>
                  {tier.cta && (
                    <div className="mt-auto">
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
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-6">
              Pourquoi avoir inclus du support ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Comme nous voulons vous rendre la vie facile, nous allons au bout du bout des paramétrages et évolutions
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <LifeBuoy className="w-10 h-10 text-red-500 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Support & Optimisation Continue</h3>
                  <p className="text-lg font-semibold text-red-600">À partir de 490 euros par mois</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                {supportFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 text-center">
                  <strong>Flexibilité totale :</strong> Vous êtes libre de prendre uniquement 1 mois ou plusieurs selon vos besoins.
                </p>
              </div>
              
              <div className="mt-8 text-center">
                <Link href="/contact">
                  <Button className="rounded-full bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                    En savoir plus sur le support
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-6">
              Option Agent IA
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Nous proposons actuellement 3 agents IA qui fonctionnent vraiment et qui boostent votre business
            </p>
            
            {/* AI Pricing section has been removed as individual pricing is now displayed with each agent */}
            
            {/* No engagement information displayed */}
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {aiAgents.map((agent, index) => (
              <AnimatedSection key={agent.name} animation="fade-up" delay={index * 150}>
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <Image
                      src={agent.photo}
                      alt={`${agent.name} - ${agent.role}`}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{agent.name}</h3>
                  <p className="text-sm font-medium text-blue-600 mb-4">{agent.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{agent.description}</p>
                  
                  {/* Individual pricing information */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Installation</span>
                        <span className="font-semibold text-red-600">
                          {agent.name === 'Lucie' && aiPricing.lucie.installation}
                          {agent.name === 'Théo' && aiPricing.theo.installation}
                          {agent.name === 'Anna' && aiPricing.anna.installation}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Abonnement</span>
                        <span className="font-semibold text-red-600">
                          {agent.name === 'Lucie' && aiPricing.lucie.abonnement}
                          {agent.name === 'Théo' && aiPricing.theo.abonnement}
                          {agent.name === 'Anna' && aiPricing.anna.abonnement}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection animation="fade-up" delay={500} className="text-center mt-12">
            <Link href="/hubeasy-ai">
              <Button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 text-lg">
                Découvrir nos agents IA
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-6">
              Vous venez d'investir dans HubSpot.
              <br />
              Assurez-vous qu'il devienne le cockpit simple et fluide de vos ventes.
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