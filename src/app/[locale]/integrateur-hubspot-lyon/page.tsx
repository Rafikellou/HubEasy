import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/animated-section';
import HubspotContactForm from '@/components/contact/HubspotContactForm';
import { CheckCircle, Rocket, BarChart2, Zap, Users, Shield, Award, HelpCircle, MapPin, Building, Factory } from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Intégrateur HubSpot Lyon | Expert HubSpot Lyon | HubEasy',
  description: 'Intégrateur HubSpot certifié à Lyon. Expert HubSpot pour entreprises lyonnaises. Partenaire officiel avec expertise technique en intégration, migration et optimisation HubSpot pour PME/ETI B2B.',
  keywords: 'intégrateur HubSpot Lyon, expert HubSpot Lyon, HubSpot Lyon, intégration HubSpot Lyon, migration HubSpot Lyon, PME Lyon, ETI Lyon, B2B Lyon, industrie Lyon',
  openGraph: {
    title: 'Intégrateur HubSpot Lyon | Expert HubSpot Lyon | HubEasy',
    description: 'Intégrateur HubSpot certifié à Lyon. Expert HubSpot pour entreprises lyonnaises avec expertise technique en intégration, migration et optimisation HubSpot.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intégrateur HubSpot Lyon | Expert HubSpot Lyon | HubEasy',
    description: 'Intégrateur HubSpot certifié à Lyon. Expert HubSpot pour entreprises lyonnaises avec expertise technique en intégration, migration et optimisation HubSpot.',
  },
  alternates: {
    canonical: 'https://hubeasy.fr/fr/integrateur-hubspot-lyon',
  },
};

export default async function IntegrateurHubSpotLyonPage({ params }: { params: { locale: string }}) {
  const t = await getTranslations({ locale: params.locale, namespace: 'AgencyHubSpot' });

  const lyonAdvantages = [
    {
      title: "Expertise Secteurs Industriels",
      description: "Notre expertise HubSpot s'étend aux secteurs clés de Lyon : industrie, chimie, textile, logistique et technologies.",
      icon: <Factory className="w-6 h-6 text-red-500"/>,
      features: [
        "Industrie manufacturière",
        "Chimie et pharmacie",
        "Textile et mode",
        "Logistique et transport",
        "Technologies et innovation"
      ]
    },
    {
      title: "Support Régional",
      description: "Nous comprenons les enjeux spécifiques des entreprises lyonnaises et proposons un accompagnement adapté au tissu économique local.",
      icon: <MapPin className="w-6 h-6 text-red-500"/>,
      features: [
        "Connaissance du marché lyonnais",
        "Réseau d'entreprises locales",
        "Support technique réactif",
        "Formations sur site possibles"
      ]
    }
  ];

  const lyonStats = [
    { metric: "Lyon", label: "Zone d'intervention" },
    { metric: "100%", label: "Clients satisfaits" },
    { metric: "Expert", label: "Certifications HubSpot" },
    { metric: "Support", label: "Technique prioritaire" }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'HubEasy - Intégrateur HubSpot Lyon',
    description: 'Intégrateur HubSpot certifié à Lyon. Expert HubSpot pour entreprises lyonnaises avec expertise technique en intégration, migration et optimisation HubSpot.',
    url: 'https://hubeasy.fr/integrateur-hubspot-lyon',
    logo: 'https://hubeasy.fr/images/logo-hubeasy.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6 Rue d\'Armaillé',
      addressLocality: 'Paris',
      postalCode: '75017',
      addressCountry: 'FR'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33-1-XX-XX-XX-XX',
      contactType: 'customer service',
      email: 'contact@hubeasy.fr',
      availableLanguage: 'French'
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 45.7640,
        longitude: 4.8357
      },
      geoRadius: '100000'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Lyon'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Auvergne-Rhône-Alpes'
      }
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'HubSpot Partner Certification',
        credentialCategory: 'certification'
      }
    ],
    offers: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Intégration HubSpot Lyon',
          description: 'Services d\'intégration HubSpot pour entreprises lyonnaises'
        },
        areaServed: 'Lyon'
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-photo-hubeasy.jpg"
            alt="Intégrateur HubSpot Lyon - Expert technique HubSpot dans un environnement professionnel lyonnais pour intégrations CRM complexes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-6">
              Intégrateur <span className="text-red-500">HubSpot</span> Lyon
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto">
              Expert HubSpot pour entreprises lyonnaises. Partenaire officiel avec expertise technique en intégration, migration et optimisation HubSpot pour PME/ETI B2B.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200} className="mt-10">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={`/${params.locale}/contact`}>
                <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-10 py-5 rounded-full text-lg transition-all duration-500 hover:scale-105">
                  Demander un devis
                </Button>
              </Link>
              <Link href={`/${params.locale}/tarifs`}>
                <Button variant="outline" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 font-light px-10 py-5 rounded-full text-lg transition-all duration-300">
                  Voir nos tarifs
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">HubEasy à Lyon</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto font-light">
              Votre intégrateur HubSpot de référence dans la région lyonnaise
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-8">
            {lyonStats.map((stat, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 120}>
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-100">
                  <div className="text-4xl font-light text-gray-900">{stat.metric}</div>
                  <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Lyon */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Pourquoi Choisir un Intégrateur HubSpot à Lyon ?</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Notre expertise technique et notre connaissance du marché lyonnais font la différence
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12">
            {lyonAdvantages.map((advantage, idx) => (
              <AnimatedSection key={advantage.title} animation="fade-up" delay={idx * 100}>
                <div className="bg-gray-50 rounded-2xl p-8 h-full border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="mr-3 p-2 bg-red-50 rounded-xl">{advantage.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">{advantage.title}</h3>
                  </div>
                  <p className="text-gray-600 font-light mb-6">{advantage.description}</p>
                  <ul className="space-y-2">
                    {advantage.features.map((feature) => (
                      <li key={feature} className="flex items-start text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="font-light text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs d'activité Lyon */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Secteurs d'Activité à Lyon</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Notre expertise HubSpot couvre les principaux secteurs d'activité lyonnais
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Industrie & Manufacturing", desc: "Solutions HubSpot pour l'industrie manufacturière et l'automobile", icon: <Factory className="w-6 h-6 text-red-500"/> },
              { title: "Chimie & Pharmacie", desc: "Intégrations spécialisées pour l'industrie chimique et pharmaceutique", icon: <Shield className="w-6 h-6 text-red-500"/> },
              { title: "Textile & Mode", desc: "Stratégies HubSpot pour l'industrie textile et de la mode", icon: <Award className="w-6 h-6 text-red-500"/> },
              { title: "Logistique & Transport", desc: "Optimisation des processus logistiques avec HubSpot", icon: <Rocket className="w-6 h-6 text-red-500"/> },
              { title: "Technologies & Innovation", desc: "Accompagnement des entreprises tech et innovantes", icon: <Zap className="w-6 h-6 text-red-500"/> },
              { title: "Services B2B", desc: "Solutions pour cabinets de conseil et services professionnels", icon: <Users className="w-6 h-6 text-red-500"/> },
            ].map((sector, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 80}>
                <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                  <div className="flex items-center mb-4">
                    <div className="mr-3 p-2 bg-red-50 rounded-xl">{sector.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">{sector.title}</h3>
                  </div>
                  <p className="text-gray-600 font-light">{sector.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Lyon */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Questions Fréquentes - HubSpot Lyon</h2>
            <p className="mt-6 text-lg text-gray-600 font-light">Réponses aux questions spécifiques aux entreprises lyonnaises</p>
          </AnimatedSection>

          <div className="mt-10 divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden bg-white">
            {[
              {
                q: "Proposez-vous des déplacements à Lyon pour les formations ?",
                a: "Oui, nous proposons des formations sur site à Lyon et dans la région Auvergne-Rhône-Alpes. Nous nous adaptons à vos contraintes géographiques et organisons des sessions de formation directement dans vos locaux."
              },
              {
                q: "Quels sont les secteurs industriels que vous connaissez le mieux à Lyon ?",
                a: "Nous avons une expertise particulière dans l'industrie manufacturière, la chimie, le textile, la logistique et les technologies. Notre connaissance du tissu industriel lyonnais nous permet d'adapter HubSpot à vos processus métier spécifiques."
              },
              {
                q: "Comment adaptez-vous HubSpot aux entreprises industrielles lyonnaises ?",
                a: "Nous adaptons HubSpot aux spécificités industrielles : intégration avec les ERP industriels, gestion des cycles de vente B2B complexes, automatisation des processus de prospection et suivi des projets industriels."
              },
              {
                q: "Proposez-vous des intégrations avec des ERP français ?",
                a: "Oui, nous maîtrisons l'intégration HubSpot avec les principaux ERP français (Sage, Cegid, Dolibarr, Odoo) et les solutions industrielles spécialisées. Nous adaptons les intégrations à vos besoins métier spécifiques."
              }
            ].map((f, i) => (
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

      {/* CTA Finale */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Votre Intégrateur HubSpot à Lyon</h2>
            <p className="mt-6 text-lg text-gray-600 font-light">
              Contactez notre équipe pour discuter de votre projet d'intégration HubSpot
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="mt-10">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href={`/${params.locale}/agence-hubspot`}>
                  <Button variant="outline" className="border-2 border-gray-300 text-gray-600 hover:bg-gray-100 font-light px-8 py-3 rounded-full text-lg transition-all duration-300">
                    Découvrir notre agence HubSpot
                  </Button>
                </Link>
                <Link href={`/${params.locale}/integrateur-hubspot`}>
                  <Button variant="outline" className="border-2 border-gray-300 text-gray-600 hover:bg-gray-100 font-light px-8 py-3 rounded-full text-lg transition-all duration-300">
                    Nos services d'intégration
                  </Button>
                </Link>
              </div>
              <HubspotContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
