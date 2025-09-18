import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/animated-section';
import HubspotContactForm from '@/components/contact/HubspotContactForm';
import { CheckCircle, Rocket, BarChart2, Zap, Users, Shield, Award, HelpCircle } from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Agence HubSpot France | Intégrateur & Expert HubSpot Certifié | HubEasy',
  description: 'Agence HubSpot certifiée en France. Intégrateur HubSpot expert pour PME/ETI B2B. Partenaire officiel avec expertise intégration, migration et optimisation HubSpot.',
  keywords: 'agence HubSpot France, intégrateur HubSpot Paris, expert HubSpot certifié, partenaire HubSpot officiel, consultant HubSpot B2B, agence HubSpot, intégration HubSpot, migration HubSpot, implémentation HubSpot, PME, ETI, B2B, HubSpot France',
  openGraph: {
    title: 'Agence HubSpot France | Intégrateur & Expert HubSpot Certifié | HubEasy',
    description: 'Agence HubSpot certifiée en France. Intégrateur HubSpot expert pour PME/ETI B2B. Partenaire officiel avec expertise reconnue.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence HubSpot France | Intégrateur & Expert HubSpot Certifié | HubEasy',
    description: 'Agence HubSpot certifiée en France. Intégrateur HubSpot expert pour PME/ETI B2B. Partenaire officiel avec expertise reconnue.',
  },
  alternates: {
    canonical: '/agence-hubspot',
  },
};

export default async function NotreMethodePage({ params }: { params: { locale: string }}) {
  const t = await getTranslations({ locale: params.locale, namespace: 'AgencyHubSpot' });

  const faqs = [
    {
      q: t('faq1_q'),
      a: t('faq1_a'),
    },
    {
      q: t('faq2_q'),
      a: t('faq2_a'),
    },
    {
      q: t('faq3_q'),
      a: t('faq3_a'),
    },
    {
      q: t('faq4_q'),
      a: t('faq4_a'),
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'HubEasy - Agence HubSpot France',
    description: 'Agence HubSpot certifiée et partenaire officiel spécialisée dans l\'intégration, migration et optimisation HubSpot pour PME/ETI B2B en France.',
    url: 'https://hubeasy.fr/agence-hubspot',
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
    sameAs: [
      'https://www.linkedin.com/company/hubeasy',
      'https://twitter.com/hubeasy'
    ],
    serviceType: 'HubSpot Integration Services',
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
          name: 'Intégration HubSpot',
          description: 'Implémentation complète de HubSpot avec paramétrage des hubs Marketing, Sales et Service pour PME/ETI B2B'
        },
        areaServed: 'France'
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Migration HubSpot',
          description: 'Migration sécurisée de vos données vers HubSpot avec préservation de l\'historique et conformité RGPD'
        },
        areaServed: 'France'
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Intégrations & Connecteurs',
          description: 'Connexion HubSpot avec ERP, e-commerce, outils de support et autres applications métier'
        },
        areaServed: 'France'
      }
    ]
  };

  const faqJsonLd = {
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
            alt={t('hero_alt')}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-6">
              {t('hero_title')} <span className="text-red-500">{t('hero_title_highlight')}</span>
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto">
              {t('hero_subtitle')}
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200} className="mt-10">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={`/${params.locale}/contact`}>
                <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-10 py-5 rounded-full text-lg transition-all duration-500 hover:scale-105">
                  {t('hero_cta1')}
                </Button>
              </Link>
              <Link href={`/${params.locale}/tarifs`}>
                <Button variant="outline" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 font-light px-10 py-5 rounded-full text-lg transition-all duration-300">
                  {t('hero_cta2')}
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">{t('why_title')}</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto font-light">
              {t('why_subtitle')}
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { title: t('benefit1_title'), desc: t('benefit1_desc'), icon: <Rocket className="w-6 h-6 text-red-500"/> },
              { title: t('benefit2_title'), desc: t('benefit2_desc'), icon: <Zap className="w-6 h-6 text-red-500"/> },
              { title: t('benefit3_title'), desc: t('benefit3_desc'), icon: <BarChart2 className="w-6 h-6 text-red-500"/> },
              { title: t('benefit4_title'), desc: t('benefit4_desc'), icon: <Users className="w-6 h-6 text-red-500"/> },
              { title: t('benefit5_title'), desc: t('benefit5_desc'), icon: <Shield className="w-6 h-6 text-red-500"/> },
              { title: t('benefit6_title'), desc: t('benefit6_desc'), icon: <Award className="w-6 h-6 text-red-500"/> },
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">{t('services_title')}</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light">{t('services_subtitle')}</p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t('service1_title'),
                points: [
                  t('service1_point1'),
                  t('service1_point2'),
                  t('service1_point3'),
                ],
              },
              {
                title: t('service2_title'),
                points: [
                  t('service2_point1'),
                  t('service2_point2'),
                  t('service2_point3'),
                ],
              },
              {
                title: t('service3_title'),
                points: [
                  t('service3_point1'),
                  t('service3_point2'),
                  t('service3_point3'),
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${params.locale}/integrations`}>
                <Button variant="outline" className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-light px-8 py-3 rounded-full text-lg transition-all duration-300">
                  {t('services_cta')}
                </Button>
              </Link>
              <Link href={`/${params.locale}/integrateur-hubspot`}>
                <Button variant="outline" className="border-2 border-gray-300 text-gray-600 hover:bg-gray-100 font-light px-8 py-3 rounded-full text-lg transition-all duration-300">
                  Découvrir nos services d'intégration
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Méthodologie */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-right">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">{t('method_title')}</h2>
              <p className="mt-6 text-lg text-gray-600 font-light">
                {t('method_subtitle')}
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  t('method_step1'),
                  t('method_step2'),
                  t('method_step3'),
                  t('method_step4'),
                  t('method_step5'),
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
                    alt={t('method_img_alt')}
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">{t('results_title')}</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light">
              {t('results_subtitle')}
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: t('result1_metric'), label: t('result1_label') },
              { metric: t('result2_metric'), label: t('result2_label') },
              { metric: t('result3_metric'), label: t('result3_label') },
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
            <Link href={`/${params.locale}/cas-clients`}>
              <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-10 py-5 rounded-full text-lg transition-all duration-300">
                {t('results_cta')}
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ SEO */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">{t('faq_title')}</h2>
            <p className="mt-6 text-lg text-gray-600 font-light">{t('faq_subtitle')}</p>
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">{t('final_title')}</h2>
            <p className="mt-6 text-lg text-gray-600 font-light">{t('final_subtitle')}</p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="mt-10">
              <HubspotContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* JSON-LD for Organization */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* JSON-LD for FAQ */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Section SEO Enrichie - Pourquoi Choisir une Agence HubSpot en France */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Pourquoi Choisir une Agence HubSpot en France ?</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light">
              En tant qu'agence HubSpot certifiée en France, nous comprenons les spécificités du marché français et les besoins des entreprises B2B locales.
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection animation="slide-right">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expertise Locale et Connaissance du Marché</h3>
                <p className="text-gray-600 font-light mb-4">
                  Notre équipe d'intégrateurs HubSpot basée en France maîtrise les enjeux spécifiques des PME et ETI françaises. 
                  Nous comprenons vos processus métier, vos contraintes réglementaires (RGPD, CNIL) et vos besoins en termes de 
                  marketing automation adapté au marché français.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">Conformité RGPD et réglementations françaises</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">Support en français et horaires français</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">Connaissance des outils et intégrations locales</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={200}>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Partenaire HubSpot Officiel avec Accès Privilégié</h3>
                <p className="text-gray-600 font-light mb-4">
                  En tant que partenaire HubSpot officiel en France, nous bénéficions d'un accès direct aux équipes HubSpot, 
                  aux nouvelles fonctionnalités en avant-première et à un support technique prioritaire. 
                  Cela nous permet de vous offrir les meilleures pratiques et les solutions les plus récentes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">Support technique HubSpot prioritaire</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">Formations exclusives partenaires</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">Accès aux nouvelles fonctionnalités</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section FAQ SEO Spécifique */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Questions Fréquentes sur les Agences HubSpot en France</h2>
            <p className="mt-6 text-lg text-gray-600 font-light">Réponses aux questions les plus courantes sur le choix d'une agence HubSpot certifiée</p>
          </AnimatedSection>

          <div className="mt-10 divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden bg-white">
            {[
              {
                q: "Quelle est la différence entre une agence HubSpot et un intégrateur HubSpot ?",
                a: "Une agence HubSpot offre une approche globale incluant stratégie, implémentation et accompagnement, tandis qu'un intégrateur HubSpot se concentre sur l'aspect technique. HubEasy combine les deux approches pour vous offrir une solution complète."
              },
              {
                q: "Pourquoi choisir une agence HubSpot française plutôt qu'une agence internationale ?",
                a: "Une agence HubSpot française comprend mieux vos enjeux locaux, respecte les réglementations françaises (RGPD), offre un support en français et connaît les spécificités du marché B2B français."
              },
              {
                q: "Combien coûte l'intégration HubSpot par une agence certifiée ?",
                a: "Le coût varie selon la complexité de votre projet. Nos tarifs d'intégration HubSpot sont transparents et adaptés aux PME/ETI. Contactez-nous pour un devis personnalisé basé sur vos besoins spécifiques."
              },
              {
                q: "Quelle est la durée moyenne d'un projet d'intégration HubSpot ?",
                a: "La durée dépend de la complexité de votre projet. Une intégration HubSpot standard prend 4-8 semaines, tandis qu'une migration complexe peut nécessiter 8-12 semaines. Nous privilégions des déploiements rapides et mesurables."
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

