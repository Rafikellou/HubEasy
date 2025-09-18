import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/animated-section';
import HubspotContactForm from '@/components/contact/HubspotContactForm';
import { CheckCircle, Rocket, BarChart2, Zap, Users, Shield, Award, HelpCircle, Star, Globe } from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Partenaire HubSpot Officiel | Agence Certifiée HubSpot | HubEasy',
  description: 'Partenaire HubSpot officiel et agence certifiée. Accès privilégié aux ressources HubSpot, support technique direct et expertise reconnue pour vos projets d\'intégration.',
  keywords: 'partenaire HubSpot, agence HubSpot certifiée, partenaire officiel HubSpot, certification HubSpot, intégrateur HubSpot, PME, ETI, B2B',
  openGraph: {
    title: 'Partenaire HubSpot Officiel | Agence Certifiée HubSpot | HubEasy',
    description: 'Partenaire HubSpot officiel et agence certifiée. Accès privilégié aux ressources HubSpot et expertise reconnue.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partenaire HubSpot Officiel | Agence Certifiée HubSpot | HubEasy',
    description: 'Partenaire HubSpot officiel et agence certifiée. Accès privilégié aux ressources HubSpot et expertise reconnue.',
  },
  alternates: {
    canonical: '/partenaire-hubspot',
  },
};

export default async function PartenaireHubSpotPage({ params }: { params: { locale: string }}) {
  const t = await getTranslations({ locale: params.locale, namespace: 'AgencyHubSpot' });

  const partnerBenefits = [
    {
      title: "Accès Privilégié aux Ressources",
      description: "Accès direct aux équipes HubSpot, documentation technique avancée et formations exclusives",
      icon: <Star className="w-6 h-6 text-red-500"/>,
      features: [
        "Support technique direct HubSpot",
        "Documentation technique avancée",
        "Formations exclusives partenaires",
        "Accès aux nouvelles fonctionnalités en avant-première"
      ]
    },
    {
      title: "Certifications Officielles",
      description: "Toutes les certifications HubSpot nécessaires pour garantir la qualité de nos services",
      icon: <Award className="w-6 h-6 text-red-500"/>,
      features: [
        "Certification HubSpot Partner",
        "Certification Sales Software",
        "Certification Marketing Software",
        "Certification Service Software"
      ]
    },
    {
      title: "Support Technique Direct",
      description: "Escalade directe vers les équipes HubSpot en cas de problème technique complexe",
      icon: <Shield className="w-6 h-6 text-red-500"/>,
      features: [
        "Support technique prioritaire",
        "Escalade directe vers HubSpot",
        "Résolution rapide des problèmes",
        "Accompagnement technique continu"
      ]
    }
  ];

  const partnerStats = [
    { metric: "5+", label: "Années d'expérience HubSpot" },
    { metric: "50+", label: "Projets HubSpot réalisés" },
    { metric: "100%", label: "Clients satisfaits" },
    { metric: "24h", label: "Temps de réponse moyen" }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HubEasy - Partenaire HubSpot Officiel',
    description: 'Partenaire HubSpot officiel et agence certifiée spécialisée dans l\'intégration et l\'optimisation HubSpot.',
    url: 'https://hubeasy.fr/partenaire-hubspot',
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
      email: 'contact@hubeasy.fr'
    },
    memberOf: {
      '@type': 'Organization',
      name: 'HubSpot Partner Program'
    },
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
    serviceType: 'HubSpot Integration Services',
    areaServed: 'France'
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-photo-hubeasy.jpg"
            alt="Partenaire HubSpot officiel et agence certifiée"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-6">
              Partenaire <span className="text-red-500">HubSpot</span> Officiel
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto">
              Agence HubSpot certifiée avec accès privilégié aux ressources HubSpot et expertise reconnue pour vos projets d'intégration
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200} className="mt-10">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={`/${params.locale}/contact`}>
                <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-10 py-5 rounded-full text-lg transition-all duration-500 hover:scale-105">
                  Devenir client
                </Button>
              </Link>
              <Link href={`/${params.locale}/agence-hubspot`}>
                <Button variant="outline" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 font-light px-10 py-5 rounded-full text-lg transition-all duration-300">
                  Découvrir notre agence
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
              En tant que partenaire HubSpot officiel, nous avons développé une expertise reconnue
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-8">
            {partnerStats.map((stat, i) => (
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

      {/* Avantages Partenaire */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Avantages d'un Partenaire HubSpot Officiel</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Notre statut de partenaire HubSpot officiel vous garantit des avantages exclusifs
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, idx) => (
              <AnimatedSection key={benefit.title} animation="fade-up" delay={idx * 100}>
                <div className="bg-gray-50 rounded-2xl p-8 h-full border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="mr-3 p-2 bg-red-50 rounded-xl">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600 font-light mb-6">{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.features.map((feature) => (
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Pourquoi Choisir HubEasy comme Partenaire HubSpot ?</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Notre expertise technique et notre statut de partenaire HubSpot officiel font la différence
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { title: "Expertise Technique", desc: "Maîtrise complète de l'écosystème HubSpot et des intégrations complexes", icon: <Rocket className="w-6 h-6 text-red-500"/> },
              { title: "Support Prioritaire", desc: "Accès direct aux équipes HubSpot pour résoudre rapidement vos problèmes", icon: <Shield className="w-6 h-6 text-red-500"/> },
              { title: "Formations Exclusives", desc: "Accès aux formations partenaires et aux nouvelles fonctionnalités", icon: <Zap className="w-6 h-6 text-red-500"/> },
              { title: "Déploiements Rapides", desc: "Time-to-value réduit grâce à notre méthodologie éprouvée", icon: <Users className="w-6 h-6 text-red-500"/> },
              { title: "Accompagnement Continu", desc: "Support post-intégration pour optimiser vos performances", icon: <BarChart2 className="w-6 h-6 text-red-500"/> },
              { title: "ROI Garanti", desc: "Suivi des KPIs et optimisation continue de vos résultats", icon: <Award className="w-6 h-6 text-red-500"/> },
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Travaillez avec un Partenaire HubSpot Officiel</h2>
            <p className="mt-6 text-lg text-gray-600 font-light">
              Contactez notre équipe de partenaires HubSpot certifiés pour discuter de votre projet
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="mt-10">
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

