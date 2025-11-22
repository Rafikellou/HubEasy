import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/animated-section';
import HubspotContactForm from '@/components/contact/HubspotContactForm';
import { CheckCircle, Rocket, BarChart2, Zap, Users, Shield, Award, HelpCircle, MapPin, Building, Ship } from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Expert HubSpot Marseille | Consultant HubSpot Marseille | HubEasy',
  description: 'Expert HubSpot certifié à Marseille. Consultant HubSpot pour entreprises marseillaises. Spécialisé en stratégie HubSpot, optimisation et accompagnement pour PME/ETI B2B.',
  keywords: 'expert HubSpot Marseille, consultant HubSpot Marseille, HubSpot Marseille, stratégie HubSpot Marseille, optimisation HubSpot Marseille, PME Marseille, ETI Marseille, B2B Marseille',
  openGraph: {
    title: 'Expert HubSpot Marseille | Consultant HubSpot Marseille | HubEasy',
    description: 'Expert HubSpot certifié à Marseille. Consultant HubSpot pour entreprises marseillaises avec expertise en stratégie, optimisation et accompagnement HubSpot.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert HubSpot Marseille | Consultant HubSpot Marseille | HubEasy',
    description: 'Expert HubSpot certifié à Marseille. Consultant HubSpot pour entreprises marseillaises avec expertise en stratégie, optimisation et accompagnement HubSpot.',
  },
  alternates: {
    canonical: 'https://hubeasy.fr/fr/expert-hubspot-marseille',
  },
};

export default async function ExpertHubSpotMarseillePage({ params }: { params: { locale: string }}) {
  const t = await getTranslations({ locale: params.locale, namespace: 'AgencyHubSpot' });

  const marseilleAdvantages = [
    {
      title: "Expertise Secteurs Méditerranéens",
      description: "Notre expertise HubSpot couvre les secteurs clés de Marseille : logistique portuaire, tourisme, agroalimentaire, santé et technologies.",
      icon: <Ship className="w-6 h-6 text-red-500"/>,
      features: [
        "Logistique portuaire et maritime",
        "Tourisme et hôtellerie",
        "Agroalimentaire et viticulture",
        "Santé et biotechnologies",
        "Technologies et innovation"
      ]
    },
    {
      title: "Connaissance du Marché Local",
      description: "Nous comprenons les spécificités du marché marseillais et proposons des stratégies HubSpot adaptées aux entreprises de la région.",
      icon: <MapPin className="w-6 h-6 text-red-500"/>,
      features: [
        "Connaissance du tissu économique local",
        "Réseau d'entreprises marseillaises",
        "Stratégies adaptées au marché méditerranéen",
        "Support personnalisé et réactif"
      ]
    }
  ];

  const marseilleStats = [
    { metric: "Marseille", label: "Zone d'expertise" },
    { metric: "100%", label: "Clients satisfaits" },
    { metric: "Expert", label: "Certifications HubSpot" },
    { metric: "Stratégie", label: "Approche personnalisée" }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'HubEasy - Expert HubSpot Marseille',
    description: 'Expert HubSpot certifié à Marseille. Consultant HubSpot pour entreprises marseillaises avec expertise en stratégie, optimisation et accompagnement HubSpot.',
    url: 'https://hubeasy.fr/expert-hubspot-marseille',
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
        latitude: 43.2965,
        longitude: 5.3698
      },
      geoRadius: '100000'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Marseille'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Provence-Alpes-Côte d\'Azur'
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
          name: 'Consulting HubSpot Marseille',
          description: 'Services de consulting HubSpot pour entreprises marseillaises'
        },
        areaServed: 'Marseille'
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
            alt="Expert HubSpot Marseille - Consultant HubSpot spécialisé dans un bureau marseillais moderne pour optimisation CRM et marketing automation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-6">
              Expert <span className="text-red-500">HubSpot</span> Marseille
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto">
              Consultant HubSpot pour entreprises marseillaises. Spécialisé en stratégie HubSpot, optimisation et accompagnement pour PME/ETI B2B.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200} className="mt-10">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={`/${params.locale}/contact`}>
                <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-10 py-5 rounded-full text-lg transition-all duration-500 hover:scale-105">
                  Demander un audit gratuit
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">HubEasy à Marseille</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto font-light">
              Votre expert HubSpot de référence dans la région marseillaise
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-8">
            {marseilleStats.map((stat, i) => (
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

      {/* Avantages Marseille */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Pourquoi Choisir un Expert HubSpot à Marseille ?</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Notre expertise stratégique et notre connaissance du marché marseillais font la différence
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12">
            {marseilleAdvantages.map((advantage, idx) => (
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

      {/* Secteurs d'activité Marseille */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Secteurs d'Activité à Marseille</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Notre expertise HubSpot couvre les principaux secteurs d'activité marseillais
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Logistique Portuaire", desc: "Solutions HubSpot pour l'industrie portuaire et maritime", icon: <Ship className="w-6 h-6 text-red-500"/> },
              { title: "Tourisme & Hôtellerie", desc: "Stratégies HubSpot pour le secteur touristique et hôtelier", icon: <Award className="w-6 h-6 text-red-500"/> },
              { title: "Agroalimentaire", desc: "Intégrations spécialisées pour l'agroalimentaire et la viticulture", icon: <Shield className="w-6 h-6 text-red-500"/> },
              { title: "Santé & Biotech", desc: "Solutions HubSpot pour la santé et les biotechnologies", icon: <Users className="w-6 h-6 text-red-500"/> },
              { title: "Technologies", desc: "Accompagnement des entreprises tech et innovantes", icon: <Zap className="w-6 h-6 text-red-500"/> },
              { title: "Services B2B", desc: "Solutions pour cabinets de conseil et services professionnels", icon: <Building className="w-6 h-6 text-red-500"/> },
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

      {/* FAQ Marseille */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Questions Fréquentes - HubSpot Marseille</h2>
            <p className="mt-6 text-lg text-gray-600 font-light">Réponses aux questions spécifiques aux entreprises marseillaises</p>
          </AnimatedSection>

          <div className="mt-10 divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden bg-white">
            {[
              {
                q: "Proposez-vous des déplacements à Marseille pour les audits ?",
                a: "Oui, nous proposons des audits HubSpot sur site à Marseille et dans la région PACA. Nous nous déplaçons pour analyser votre écosystème marketing et commercial directement dans vos locaux."
              },
              {
                q: "Quels sont les secteurs marseillais que vous connaissez le mieux ?",
                a: "Nous avons une expertise particulière dans la logistique portuaire, le tourisme, l'agroalimentaire, la santé et les technologies. Notre connaissance du marché marseillais nous permet d'adapter nos stratégies HubSpot à vos spécificités sectorielles."
              },
              {
                q: "Comment adaptez-vous HubSpot aux entreprises marseillaises ?",
                a: "Nous adaptons HubSpot aux spécificités du marché marseillais : intégration avec les outils locaux, gestion des équipes multiculturelles, optimisation pour les cycles de vente méditerranéens et stratégies adaptées au contexte économique local."
              },
              {
                q: "Proposez-vous des formations sur site à Marseille ?",
                a: "Oui, nous organisons des formations HubSpot sur site à Marseille et dans la région. Nous adaptons nos formations à vos besoins spécifiques et à votre secteur d'activité."
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Votre Expert HubSpot à Marseille</h2>
            <p className="mt-6 text-lg text-gray-600 font-light">
              Contactez notre équipe pour discuter de votre stratégie HubSpot
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
                <Link href={`/${params.locale}/expert-hubspot`}>
                  <Button variant="outline" className="border-2 border-gray-300 text-gray-600 hover:bg-gray-100 font-light px-8 py-3 rounded-full text-lg transition-all duration-300">
                    Nos services d'expertise
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
