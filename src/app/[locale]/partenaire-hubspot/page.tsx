import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/animated-section';
import HubspotContactForm from '@/components/contact/HubspotContactForm';
import { CheckCircle, Rocket, BarChart2, Zap, Users, Shield, Award, HelpCircle, Star, Globe } from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Partenaire HubSpot Officiel France | Agence Certifiée HubSpot | HubEasy',
  description: 'Partenaire HubSpot officiel en France. Agence certifiée avec accès privilégié aux ressources HubSpot, support technique direct et expertise reconnue pour vos projets d\'intégration.',
  keywords: 'partenaire HubSpot France, partenaire HubSpot officiel, agence HubSpot certifiée, partenaire officiel HubSpot, certification HubSpot, intégrateur HubSpot, PME, ETI, B2B, HubSpot France',
  openGraph: {
    title: 'Partenaire HubSpot Officiel France | Agence Certifiée HubSpot | HubEasy',
    description: 'Partenaire HubSpot officiel en France. Agence certifiée avec accès privilégié aux ressources HubSpot et expertise reconnue.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partenaire HubSpot Officiel France | Agence Certifiée HubSpot | HubEasy',
    description: 'Partenaire HubSpot officiel en France. Agence certifiée avec accès privilégié aux ressources HubSpot et expertise reconnue.',
  },
  alternates: {
    canonical: 'https://hubeasy.fr/fr/partenaire-hubspot',
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
    { metric: "100%", label: "Clients satisfaits" },
    { metric: "24h", label: "Temps de réponse moyen" },
    { metric: "Expert", label: "Certifications HubSpot" },
    { metric: "Support", label: "Technique prioritaire" }
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href={`/${params.locale}/agence-hubspot`}>
                  <Button variant="outline" className="border-2 border-gray-300 text-gray-600 hover:bg-gray-100 font-light px-8 py-3 rounded-full text-lg transition-all duration-300">
                    Découvrir notre agence HubSpot
                  </Button>
                </Link>
                <Link href={`/${params.locale}/integrateur-hubspot`}>
                  <Button variant="outline" className="border-2 border-gray-300 text-gray-600 hover:bg-gray-100 font-light px-8 py-3 rounded-full text-lg transition-all duration-300">
                    Nos services d'intégration HubSpot
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

      {/* Section SEO Enrichie - Avantages Partenaire HubSpot Officiel */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Avantages d'un Partenaire HubSpot Officiel en France</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light">
              En tant que partenaire HubSpot officiel en France, nous bénéficions d'avantages exclusifs que nous transmettons directement à nos clients pour garantir le succès de leurs projets HubSpot.
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection animation="slide-right">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Accès Privilégié aux Ressources HubSpot</h3>
                <p className="text-gray-600 font-light mb-4">
                  Notre statut de partenaire HubSpot officiel nous donne accès à des ressources exclusives : 
                  documentation technique avancée, formations partenaires, nouvelles fonctionnalités en avant-première 
                  et support technique prioritaire directement auprès des équipes HubSpot.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">Documentation technique avancée et non publique</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">Formations exclusives réservées aux partenaires</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">Accès aux nouvelles fonctionnalités en bêta</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">Support technique HubSpot prioritaire</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={200}>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Certifications et Expertise Reconnue</h3>
                <p className="text-gray-600 font-light mb-4">
                  En tant que partenaire HubSpot officiel, nous maintenons toutes les certifications nécessaires 
                  et suivons une formation continue pour rester à la pointe des dernières évolutions de la plateforme. 
                  Cette expertise certifiée garantit la qualité de nos implémentations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">Certification HubSpot Partner officielle</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">Certifications Sales, Marketing et Service Hub</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">Formation continue obligatoire pour maintenir le statut</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">Accès aux meilleures pratiques HubSpot</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section FAQ SEO Spécifique Partenaire */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Questions Fréquentes sur les Partenaires HubSpot</h2>
            <p className="mt-6 text-lg text-gray-600 font-light">Réponses aux questions sur le statut de partenaire HubSpot officiel</p>
          </AnimatedSection>

          <div className="mt-10 divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden bg-white">
            {[
              {
                q: "Qu'est-ce qu'un partenaire HubSpot officiel ?",
                a: "Un partenaire HubSpot officiel est une agence certifiée par HubSpot qui a démontré son expertise technique et commerciale. Ce statut donne accès à des ressources exclusives, un support prioritaire et des avantages commerciaux pour mieux servir les clients."
              },
              {
                q: "Quels sont les avantages de travailler avec un partenaire HubSpot officiel ?",
                a: "Les avantages incluent l'accès à des ressources exclusives, un support technique prioritaire, des formations partenaires, l'accès aux nouvelles fonctionnalités en avant-première et une expertise certifiée par HubSpot."
              },
              {
                q: "Comment HubEasy a-t-elle obtenu le statut de partenaire HubSpot officiel ?",
                a: "Nous avons obtenu ce statut en démontrant notre expertise technique, en obtenant toutes les certifications HubSpot nécessaires, en réalisant de nombreux projets réussis et en maintenant des standards de qualité élevés dans nos implémentations."
              },
              {
                q: "Y a-t-il une différence de prix entre un partenaire officiel et un intégrateur non partenaire ?",
                a: "Les tarifs peuvent varier selon l'expertise et les services offerts. En tant que partenaire officiel, nous offrons une valeur ajoutée significative : accès aux ressources exclusives, support prioritaire et expertise certifiée, ce qui justifie notre positionnement tarifaire."
              },
              {
                q: "Le statut de partenaire HubSpot officiel est-il permanent ?",
                a: "Non, le statut de partenaire HubSpot officiel doit être maintenu en respectant des critères de performance, en suivant des formations continues et en maintenant des standards de qualité. Nous nous engageons à maintenir ce statut pour continuer à vous offrir les meilleurs services."
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
    </main>
  );
}

