import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/animated-section';
import HubspotContactForm from '@/components/contact/HubspotContactForm';
import { CheckCircle, Rocket, BarChart2, Zap, Users, Shield, Award, HelpCircle, Brain, Target } from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Expert HubSpot France | Consultant & Spécialiste HubSpot Certifié | HubEasy',
  description: 'Expert HubSpot certifié en France. Consultant spécialisé en stratégie HubSpot, optimisation et accompagnement pour PME/ETI B2B. Expertise reconnue et résultats mesurables.',
  keywords: 'expert HubSpot France, consultant HubSpot Paris, spécialiste HubSpot certifié, expert HubSpot, consultant HubSpot B2B, stratégie HubSpot, optimisation HubSpot, PME, ETI, B2B, HubSpot France',
  openGraph: {
    title: 'Expert HubSpot France | Consultant & Spécialiste HubSpot Certifié | HubEasy',
    description: 'Expert HubSpot certifié en France. Consultant spécialisé en stratégie HubSpot, optimisation et accompagnement pour PME/ETI B2B.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert HubSpot France | Consultant & Spécialiste HubSpot Certifié | HubEasy',
    description: 'Expert HubSpot certifié en France. Consultant spécialisé en stratégie HubSpot, optimisation et accompagnement pour PME/ETI B2B.',
  },
  alternates: {
    canonical: 'https://hubeasy.fr/fr/expert-hubspot',
  },
};

export default async function ExpertHubSpotPage({ params }: { params: { locale: string }}) {
  const t = await getTranslations({ locale: params.locale, namespace: 'AgencyHubSpot' });

  const expertServices = [
    {
      title: "Stratégie HubSpot",
      description: "Définition de votre stratégie HubSpot adaptée à vos objectifs business et à votre secteur d'activité",
      icon: <Target className="w-6 h-6 text-red-500"/>,
      features: [
        "Audit de votre écosystème marketing et commercial",
        "Définition des objectifs et KPIs HubSpot",
        "Roadmap d'implémentation personnalisée",
        "Plan d'adoption et de formation des équipes"
      ]
    },
    {
      title: "Optimisation HubSpot",
      description: "Amélioration continue de vos performances HubSpot pour maximiser votre ROI",
      icon: <Brain className="w-6 h-6 text-red-500"/>,
      features: [
        "Audit des performances et identification des axes d'amélioration",
        "Optimisation des workflows et automatisations",
        "Amélioration des taux de conversion",
        "Optimisation des campagnes marketing"
      ]
    },
    {
      title: "Accompagnement Stratégique",
      description: "Coaching et accompagnement de vos équipes pour une adoption réussie de HubSpot",
      icon: <Users className="w-6 h-6 text-red-500"/>,
      features: [
        "Formation des équipes aux bonnes pratiques",
        "Coaching des responsables marketing et commercial",
        "Mise en place de processus optimisés",
        "Suivi et optimisation continue"
      ]
    }
  ];

  const expertStats = [
    { metric: "100%", label: "Clients satisfaits" },
    { metric: "Expert", label: "Certifications HubSpot" },
    { metric: "Stratégie", label: "Approche personnalisée" },
    { metric: "ROI", label: "Résultats mesurables" }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'HubEasy - Expert HubSpot France',
    description: 'Expert HubSpot certifié et consultant spécialisé en stratégie HubSpot, optimisation et accompagnement pour PME/ETI B2B.',
    url: 'https://hubeasy.fr/expert-hubspot',
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
    serviceType: 'HubSpot Consulting Services',
    areaServed: [
      {
        '@type': 'Country',
        name: 'France'
      },
      {
        '@type': 'City',
        name: 'Paris'
      }
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'HubSpot Partner Certification',
        credentialCategory: 'certification'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'HubSpot Sales Software Certification',
        credentialCategory: 'certification'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'HubSpot Marketing Software Certification',
        credentialCategory: 'certification'
      }
    ],
    offers: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Consulting HubSpot',
          description: 'Stratégie HubSpot personnalisée et accompagnement pour PME/ETI B2B'
        },
        areaServed: 'France'
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Optimisation HubSpot',
          description: 'Amélioration continue des performances et optimisation du ROI HubSpot'
        },
        areaServed: 'France'
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
            alt="Expert HubSpot France - Consultant HubSpot certifié et spécialisé dans l'intégration CRM et marketing automation pour entreprises B2B"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-6">
              Expert <span className="text-red-500">HubSpot</span> Certifié
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto">
              Consultant HubSpot spécialisé en stratégie, optimisation et accompagnement pour PME/ETI B2B en France
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Notre Expertise en Chiffres</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto font-light">
              En tant qu'expert HubSpot certifié, nous avons développé une expertise reconnue
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-8">
            {expertStats.map((stat, i) => (
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

      {/* Services Expert */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Nos Services d'Expert HubSpot</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Expertise stratégique complète pour optimiser votre utilisation de HubSpot
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertServices.map((service, idx) => (
              <AnimatedSection key={service.title} animation="fade-up" delay={idx * 100}>
                <div className="bg-gray-50 rounded-2xl p-8 h-full border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="mr-3 p-2 bg-red-50 rounded-xl">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 font-light mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
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

      {/* Pourquoi nous choisir */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Pourquoi Choisir HubEasy comme Expert HubSpot ?</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Notre expertise stratégique et notre approche personnalisée font la différence
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { title: "Expertise Stratégique", desc: "Vision globale de votre écosystème marketing et commercial", icon: <Brain className="w-6 h-6 text-red-500"/> },
              { title: "Approche Personnalisée", desc: "Solutions adaptées à votre secteur et vos objectifs spécifiques", icon: <Target className="w-6 h-6 text-red-500"/> },
              { title: "Résultats Mesurables", desc: "Suivi des KPIs et optimisation continue de vos performances", icon: <BarChart2 className="w-6 h-6 text-red-500"/> },
              { title: "Accompagnement Continu", desc: "Coaching et formation de vos équipes pour une adoption réussie", icon: <Users className="w-6 h-6 text-red-500"/> },
              { title: "Certifications Officielles", desc: "Expertise certifiée par HubSpot et formation continue", icon: <Award className="w-6 h-6 text-red-500"/> },
              { title: "ROI Garanti", desc: "Optimisation continue pour maximiser votre retour sur investissement", icon: <Zap className="w-6 h-6 text-red-500"/> },
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

      {/* CTA Finale */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Besoin d'un Expert HubSpot ?</h2>
            <p className="mt-6 text-lg text-gray-600 font-light">
              Contactez notre équipe d'experts HubSpot certifiés pour discuter de votre stratégie
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
