import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/animated-section';
import HubspotContactForm from '@/components/contact/HubspotContactForm';
import { CheckCircle, Rocket, BarChart2, Zap, Users, Shield, Award, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Notre Méthode | HubEasy',
  description: 'Découvrez comment HubEasy accompagne les PME/ETI B2B dans leurs projets d\'intégration HubSpot.',
  alternates: {
    canonical: '/agence-hubspot',
  },
};

export default function NotreMethodePage() {
  const faqs = [
    {
      q: "Qu'est-ce qu'une agence HubSpot ?",
      a:
        "Une agence HubSpot accompagne la mise en place du CRM et des hubs (Marketing, Sales, Service), l'intégration avec vos outils et l'acculturation des équipes pour générer des résultats mesurables.",
    },
    {
      q: "Combien de temps dure une implémentation HubSpot ?",
      a:
        "Selon le périmètre, entre 3 et 8 semaines pour une implémentation standard (paramétrage, pipelines, automatisations, reporting, formation).",
    },
    {
      q: "Pouvez‑vous intégrer HubSpot avec mon ERP/e‑commerce ?",
      a:
        "Oui. Nous réalisons des intégrations Odoo, Dolibarr, Sage, Shopify, WooCommerce, PrestaShop, outils de support, email/calendrier, etc.",
    },
    {
      q: "Proposez‑vous la migration depuis un autre CRM ?",
      a:
        "Oui. Nous migrons depuis Salesforce, Pipedrive, Zoho, Monday, etc., avec nettoyage, mapping et reprise d'historique.",
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-photo-hubeasy.jpg"
            alt="Agence HubSpot pour PME/ETI B2B"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-6">
              Agence <span className="text-red-500">HubSpot</span>
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto">
              Implémentations, migrations et intégrations HubSpot. Simple, propre, mesurable.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200} className="mt-10">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-10 py-5 rounded-full text-lg transition-all duration-500 hover:scale-105">
                  Discuter de mon projet
                </Button>
              </Link>
              <Link href="/tarifs">
                <Button variant="outline" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 font-light px-10 py-5 rounded-full text-lg transition-all duration-300">
                  Voir les offres
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Preuves & bénéfices clés */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Pourquoi HubEasy ?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto font-light">
              Nous allons au bout du bout pour rendre HubSpot réellement utile à vos équipes. De A à Z : cadrage, exécution, adoption.
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { title: 'Déploiements rapides', desc: 'Time‑to‑value réduit. Nous livrons en itérations courtes.', icon: <Rocket className="w-6 h-6 text-red-500"/> },
              { title: 'Automatisations utiles', desc: 'Workflows marketing & sales qui économisent du temps.', icon: <Zap className="w-6 h-6 text-red-500"/> },
              { title: 'Reporting clair', desc: 'Tableaux de bord orientés décision.', icon: <BarChart2 className="w-6 h-6 text-red-500"/> },
              { title: 'Adoption des équipes', desc: 'Formation ciblée, documentation courte et actionnable.', icon: <Users className="w-6 h-6 text-red-500"/> },
              { title: 'Qualité & sécurité', desc: 'Propreté des objets/propriétés, droits, RGPD.', icon: <Shield className="w-6 h-6 text-red-500"/> },
              { title: 'Expérience B2B', desc: 'SaaS, Industrie, Conseil, Retail…', icon: <Award className="w-6 h-6 text-red-500"/> },
            ].map((b, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 80}>
                <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                  <div className="flex items-center mb-4">
                    <div className="mr-3 p-2 bg-red-50 rounded-xl">{b.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">{b.title}</h3>
                  </div>
                  <p className="text-gray-600 font-light">{b.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services HubSpot */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Nos services HubSpot</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light">Du setup à l’intégration complexe, en passant par la migration et la formation.</p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Implémentation HubSpot',
                points: [
                  'Paramétrage des hubs (Marketing, Sales, Service)',
                  'Pipelines, propriétés, devis/factures',
                  'Automatisations et templates',
                ],
              },
              {
                title: 'Migration vers HubSpot',
                points: [
                  'Reprise de données (contacts, entreprises, deals)',
                  'Nettoyage, mapping, tests',
                  'Change management & formation',
                ],
              },
              {
                title: 'Intégrations & Connecteurs',
                points: [
                  'ERP (Odoo, Dolibarr, Sage)',
                  'E‑commerce (Shopify, WooCommerce, PrestaShop)',
                  'Support, email, calendrier, finance',
                ],
              },
            ].map((card, idx) => (
              <AnimatedSection key={card.title} animation="fade-up" delay={idx * 100}>
                <div className="bg-gray-50 rounded-2xl p-8 h-full border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{card.title}</h3>
                  <ul className="space-y-2">
                    {card.points.map((p) => (
                      <li key={p} className="flex items-start text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="font-light text-sm">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={400} className="text-center mt-14">
            <Link href="/integrations">
              <Button variant="outline" className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-light px-8 py-3 rounded-full text-lg transition-all duration-300">
                Voir nos intégrations
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Méthodologie */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-right">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Méthode d’implémentation</h2>
              <p className="mt-6 text-lg text-gray-600 font-light">
                Une approche itérative et mesurable. Nous livrons de la valeur toutes les 1 à 2 semaines.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Cadrage & ateliers métiers',
                  'Design des objets, propriétés, pipelines',
                  'Automatisations & intégrations prioritaires',
                  'Tests bout‑en‑bout & recette avec vos équipes',
                  'Formation ciblée et documentation courte',
                ].map((step) => (
                  <li key={step} className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="relative group">
                <div className="relative h-80 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/integration-photo.jpg"
                    alt="Implémentation HubSpot structurée"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Cas clients en bref */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Résultats obtenus</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Exemples de gains constatés après intégration HubSpot.
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: '-70%', label: 'Double saisie (ERP ↔ HubSpot)' },
              { metric: '+25%', label: "Upsell en 9 mois (SaaS)" },
              { metric: '+18%', label: 'CA via campagnes ciblées (e‑commerce)' },
            ].map((item, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 120}>
                <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
                  <div className="text-4xl font-light text-gray-900">{item.metric}</div>
                  <div className="text-sm text-gray-600 mt-2">{item.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={400} className="text-center mt-12">
            <Link href="/cas-clients">
              <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-10 py-5 rounded-full text-lg transition-all duration-300">
                Voir les cas clients
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ SEO */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">FAQ – Agence HubSpot</h2>
            <p className="mt-6 text-lg text-gray-600 font-light">Réponses aux questions fréquentes sur l’accompagnement HubSpot.</p>
          </AnimatedSection>

          <div className="mt-10 divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden bg-white">
            {faqs.map((f, i) => (
              <AnimatedSection key={f.q} animation="fade-up" delay={i * 80}>
                <div className="p-6 md:p-8">
                  <div className="flex items-start">
                    <HelpCircle className="w-5 h-5 text-red-500 mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{f.q}</h3>
                      <p className="mt-2 text-gray-700 font-light">{f.a}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Finale + Formulaire */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Parlons de votre projet HubSpot</h2>
            <p className="mt-6 text-lg text-gray-600 font-light">Expliquez-nous votre contexte. Réponse sous 24h.</p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="mt-10">
              <HubspotContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* JSON-LD for FAQ */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
