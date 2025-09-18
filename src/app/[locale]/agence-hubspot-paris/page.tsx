import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/animated-section';
import HubspotContactForm from '@/components/contact/HubspotContactForm';
import { CheckCircle, Rocket, BarChart2, Zap, Users, Shield, Award, HelpCircle, MapPin, Building } from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Agence HubSpot Paris | Intégrateur HubSpot Paris | HubEasy',
  description: 'Agence HubSpot certifiée à Paris. Intégrateur HubSpot expert pour entreprises parisiennes. Partenaire officiel avec expertise intégration, migration et optimisation HubSpot pour PME/ETI B2B.',
  keywords: 'agence HubSpot Paris, intégrateur HubSpot Paris, agence HubSpot 75, HubSpot Paris, intégration HubSpot Paris, migration HubSpot Paris, PME Paris, ETI Paris, B2B Paris',
  openGraph: {
    title: 'Agence HubSpot Paris | Intégrateur HubSpot Paris | HubEasy',
    description: 'Agence HubSpot certifiée à Paris. Intégrateur HubSpot expert pour entreprises parisiennes avec expertise intégration, migration et optimisation HubSpot.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence HubSpot Paris | Intégrateur HubSpot Paris | HubEasy',
    description: 'Agence HubSpot certifiée à Paris. Intégrateur HubSpot expert pour entreprises parisiennes avec expertise intégration, migration et optimisation HubSpot.',
  },
  alternates: {
    canonical: '/agence-hubspot-paris',
  },
};

export default async function AgenceHubSpotParisPage({ params }: { params: { locale: string }}) {
  const t = await getTranslations({ locale: params.locale, namespace: 'AgencyHubSpot' });

  // Contenu adapté selon la langue
  const content = {
    fr: {
      heroTitle: "Agence HubSpot Paris",
      heroSubtitle: "Intégrateur HubSpot expert pour entreprises parisiennes. Partenaire officiel avec expertise intégration, migration et optimisation HubSpot pour PME/ETI B2B.",
      cta1: "Demander un devis",
      cta2: "Voir nos tarifs",
      sectionTitle: "HubEasy à Paris",
      sectionSubtitle: "Votre agence HubSpot de proximité dans la capitale",
      advantagesTitle: "Pourquoi Choisir une Agence HubSpot à Paris ?",
      advantagesSubtitle: "Notre proximité géographique et notre connaissance du marché parisien font la différence",
      sectorsTitle: "Secteurs d'Activité à Paris",
      sectorsSubtitle: "Notre expertise HubSpot couvre les principaux secteurs d'activité parisiens",
      faqTitle: "Questions Fréquentes - HubSpot Paris",
      faqSubtitle: "Réponses aux questions spécifiques aux entreprises parisiennes",
      finalTitle: "Votre Agence HubSpot à Paris",
      finalSubtitle: "Contactez notre équipe parisienne pour discuter de votre projet HubSpot",
      parisAdvantages: [
        {
          title: "Proximité Géographique",
          description: "Basés à Paris, nous comprenons parfaitement l'écosystème business parisien et les enjeux spécifiques des entreprises de la région parisienne.",
          features: [
            "Rencontres en présentiel possibles",
            "Connaissance du marché parisien",
            "Réseau local d'entreprises",
            "Support réactif et personnalisé"
          ]
        },
        {
          title: "Expertise Secteurs Parisiens",
          description: "Notre expertise couvre les secteurs clés de Paris : tech, finance, conseil, luxe, e-commerce et startups.",
          features: [
            "Secteur tech et startups",
            "Finance et assurance",
            "Conseil et services",
            "Luxe et retail",
            "E-commerce et marketplace"
          ]
        }
      ],
      parisStats: [
        { metric: "Paris", label: "Siège social" },
        { metric: "100%", label: "Clients satisfaits" },
        { metric: "Expert", label: "Certifications HubSpot" },
        { metric: "Support", label: "Local et réactif" }
      ]
    },
    en: {
      heroTitle: "HubSpot Agency Paris",
      heroSubtitle: "HubSpot integrator expert for Parisian companies. Official partner with expertise in HubSpot integration, migration and optimization for B2B SMEs/ETIs.",
      cta1: "Request a quote",
      cta2: "View our pricing",
      sectionTitle: "HubEasy in Paris",
      sectionSubtitle: "Your local HubSpot agency in the capital",
      advantagesTitle: "Why Choose a HubSpot Agency in Paris?",
      advantagesSubtitle: "Our geographical proximity and knowledge of the Parisian market make the difference",
      sectorsTitle: "Business Sectors in Paris",
      sectorsSubtitle: "Our HubSpot expertise covers the main business sectors in Paris",
      faqTitle: "Frequently Asked Questions - HubSpot Paris",
      faqSubtitle: "Answers to questions specific to Parisian companies",
      finalTitle: "Your HubSpot Agency in Paris",
      finalSubtitle: "Contact our Parisian team to discuss your HubSpot project",
      parisAdvantages: [
        {
          title: "Geographical Proximity",
          description: "Based in Paris, we perfectly understand the Parisian business ecosystem and the specific challenges of companies in the Paris region.",
          features: [
            "Face-to-face meetings possible",
            "Knowledge of the Parisian market",
            "Local business network",
            "Responsive and personalized support"
          ]
        },
        {
          title: "Parisian Sectors Expertise",
          description: "Our expertise covers the key sectors of Paris: tech, finance, consulting, luxury, e-commerce and startups.",
          features: [
            "Tech and startups sector",
            "Finance and insurance",
            "Consulting and services",
            "Luxury and retail",
            "E-commerce and marketplace"
          ]
        }
      ],
      parisStats: [
        { metric: "Paris", label: "Headquarters" },
        { metric: "100%", label: "Satisfied clients" },
        { metric: "Expert", label: "HubSpot certifications" },
        { metric: "Support", label: "Local and responsive" }
      ]
    }
  };

  const currentContent = content[params.locale as keyof typeof content] || content.fr;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'HubEasy - Agence HubSpot Paris',
    description: 'Agence HubSpot certifiée à Paris. Intégrateur HubSpot expert pour entreprises parisiennes avec expertise intégration, migration et optimisation HubSpot.',
    url: 'https://hubeasy.fr/agence-hubspot-paris',
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
        latitude: 48.8566,
        longitude: 2.3522
      },
      geoRadius: '50000'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Paris'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Île-de-France'
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
          name: 'Intégration HubSpot Paris',
          description: 'Services d\'intégration HubSpot pour entreprises parisiennes'
        },
        areaServed: 'Paris'
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
            alt="Agence HubSpot Paris - Équipe d'experts HubSpot dans un bureau parisien moderne pour intégration CRM et marketing automation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-6">
              {currentContent.heroTitle.includes('HubSpot') ? (
                <>
                  {currentContent.heroTitle.split('HubSpot')[0]} <span className="text-red-500">HubSpot</span> {currentContent.heroTitle.split('HubSpot')[1]}
                </>
              ) : (
                currentContent.heroTitle
              )}
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto">
              {currentContent.heroSubtitle}
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200} className="mt-10">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={`/${params.locale}/contact`}>
                <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-10 py-5 rounded-full text-lg transition-all duration-500 hover:scale-105">
                  {currentContent.cta1}
                </Button>
              </Link>
              <Link href={`/${params.locale}/tarifs`}>
                <Button variant="outline" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 font-light px-10 py-5 rounded-full text-lg transition-all duration-300">
                  {currentContent.cta2}
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">{currentContent.sectionTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto font-light">
              {currentContent.sectionSubtitle}
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-8">
            {currentContent.parisStats.map((stat, i) => (
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

      {/* Avantages Paris */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">{currentContent.advantagesTitle}</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light">
              {currentContent.advantagesSubtitle}
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12">
            {currentContent.parisAdvantages.map((advantage, idx) => (
              <AnimatedSection key={advantage.title} animation="fade-up" delay={idx * 100}>
                <div className="bg-gray-50 rounded-2xl p-8 h-full border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="mr-3 p-2 bg-red-50 rounded-xl">
                      {idx === 0 ? <MapPin className="w-6 h-6 text-red-500"/> : <Building className="w-6 h-6 text-red-500"/>}
                    </div>
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

      {/* Secteurs d'activité Paris */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">{currentContent.sectorsTitle}</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light">
              {currentContent.sectorsSubtitle}
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Tech & Startups", desc: "Accompagnement des startups et scale-ups parisiennes dans leur croissance", icon: <Rocket className="w-6 h-6 text-red-500"/> },
              { title: "Finance & Assurance", desc: "Solutions HubSpot pour les acteurs financiers et assurances", icon: <Shield className="w-6 h-6 text-red-500"/> },
              { title: "Conseil & Services", desc: "Optimisation des processus pour cabinets de conseil et services", icon: <Users className="w-6 h-6 text-red-500"/> },
              { title: "Luxe & Retail", desc: "Stratégies HubSpot pour marques de luxe et retail", icon: <Award className="w-6 h-6 text-red-500"/> },
              { title: "E-commerce", desc: "Intégrations e-commerce et marketplaces pour retailers parisiens", icon: <Zap className="w-6 h-6 text-red-500"/> },
              { title: "Immobilier", desc: "Solutions CRM pour promoteurs et agents immobiliers", icon: <Building className="w-6 h-6 text-red-500"/> },
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

      {/* FAQ Paris */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">{currentContent.faqTitle}</h2>
            <p className="mt-6 text-lg text-gray-600 font-light">{currentContent.faqSubtitle}</p>
          </AnimatedSection>

          <div className="mt-10 divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden bg-white">
            {[
              {
                q: "Proposez-vous des rendez-vous en présentiel à Paris ?",
                a: "Oui, nous sommes basés à Paris (17ème arrondissement) et proposons des rendez-vous en présentiel pour nos clients parisiens. Nous pouvons également nous déplacer dans vos locaux si nécessaire."
              },
              {
                q: "Quels sont les secteurs d'activité que vous connaissez le mieux à Paris ?",
                a: "Nous avons une expertise particulière dans les secteurs tech/startups, finance, conseil, luxe, e-commerce et immobilier. Notre connaissance du marché parisien nous permet d'adapter nos solutions HubSpot à vos spécificités sectorielles."
              },
              {
                q: "Comment adaptez-vous HubSpot aux entreprises parisiennes ?",
                a: "Nous adaptons HubSpot aux spécificités du marché parisien : intégration avec les outils français (ERP, e-commerce), conformité RGPD, gestion des équipes multiculturelles et optimisation pour les cycles de vente B2B parisiens."
              },
              {
                q: "Proposez-vous des tarifs préférentiels pour les startups parisiennes ?",
                a: "Nous proposons des packages adaptés aux startups parisiennes avec des tarifs préférentiels et des modalités de paiement flexibles. Contactez-nous pour discuter de vos besoins spécifiques."
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">{currentContent.finalTitle}</h2>
            <p className="mt-6 text-lg text-gray-600 font-light">
              {currentContent.finalSubtitle}
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