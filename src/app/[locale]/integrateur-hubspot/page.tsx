import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/animated-section';
import HubspotContactForm from '@/components/contact/HubspotContactForm';
import { CheckCircle, Rocket, BarChart2, Zap, Users, Shield, Award, HelpCircle, Database, Workflow } from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Intégrateur HubSpot France | Expert Intégration & Migration HubSpot Certifié | HubEasy',
  description: 'Intégrateur HubSpot certifié en France. Expert technique en intégration, migration et optimisation HubSpot pour PME/ETI B2B. Partenaire officiel avec expertise reconnue.',
  keywords: 'intégrateur HubSpot France, intégrateur HubSpot Paris, expert HubSpot certifié, intégration HubSpot, migration HubSpot, partenaire HubSpot, certification HubSpot, expert HubSpot, implémentation HubSpot, PME, ETI, B2B, HubSpot France',
  openGraph: {
    title: 'Intégrateur HubSpot France | Expert Intégration & Migration HubSpot Certifié | HubEasy',
    description: 'Intégrateur HubSpot certifié en France. Expert technique en intégration, migration et optimisation HubSpot pour PME/ETI B2B.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intégrateur HubSpot France | Expert Intégration & Migration HubSpot Certifié | HubEasy',
    description: 'Intégrateur HubSpot certifié en France. Expert technique en intégration, migration et optimisation HubSpot pour PME/ETI B2B.',
  },
  alternates: {
    canonical: '/integrateur-hubspot',
  },
};

export default async function IntegrateurHubSpotPage({ params }: { params: { locale: string }}) {
  const t = await getTranslations({ locale: params.locale, namespace: 'AgencyHubSpot' });

  const services = [
    {
      title: "Intégration HubSpot Complète",
      description: "Implémentation complète de HubSpot avec paramétrage des hubs Marketing, Sales et Service",
      icon: <Database className="w-6 h-6 text-red-500"/>,
      features: [
        "Paramétrage des pipelines de vente",
        "Configuration des propriétés personnalisées",
        "Mise en place des automatisations",
        "Création des templates et workflows"
      ]
    },
    {
      title: "Migration vers HubSpot",
      description: "Migration sécurisée de vos données depuis votre CRM actuel vers HubSpot",
      icon: <Workflow className="w-6 h-6 text-red-500"/>,
      features: [
        "Migration des contacts et entreprises",
        "Transfert des opportunités et deals",
        "Préservation de l'historique email",
        "Mapping des données personnalisées"
      ]
    },
    {
      title: "Intégrations Techniques",
      description: "Connexion HubSpot avec vos outils existants (ERP, e-commerce, support)",
      icon: <Zap className="w-6 h-6 text-red-500"/>,
      features: [
        "Intégration ERP (Odoo, Dolibarr, Sage)",
        "Connexion e-commerce (Shopify, WooCommerce)",
        "Synchronisation outils de support",
        "API et connecteurs personnalisés"
      ]
    }
  ];

  const certifications = [
    "Certification HubSpot Partner",
    "Certification HubSpot Sales Software",
    "Certification HubSpot Marketing Software",
    "Certification HubSpot Service Software"
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'HubEasy - Intégrateur HubSpot',
    description: 'Intégrateur HubSpot certifié et partenaire officiel spécialisé dans l\'intégration, migration et optimisation HubSpot.',
    url: 'https://hubeasy.fr/integrateur-hubspot',
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
    serviceType: 'HubSpot Integration Services',
    areaServed: 'France',
    hasCredential: certifications.map(cert => ({
      '@type': 'EducationalOccupationalCredential',
      name: cert,
      credentialCategory: 'certification'
    })),
    offers: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Services d\'intégration HubSpot',
        description: 'Intégration complète, migration et optimisation HubSpot pour PME/ETI B2B'
      }
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-photo-hubeasy.jpg"
            alt="Intégrateur HubSpot certifié et partenaire officiel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-6">
              Intégrateur <span className="text-red-500">HubSpot</span> Certifié
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto">
              Partenaire HubSpot officiel avec expertise technique en intégration, migration et optimisation HubSpot pour PME/ETI B2B
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

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Certifications HubSpot</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto font-light">
              En tant qu'intégrateur HubSpot certifié, nous disposons de toutes les certifications nécessaires pour vous accompagner
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 80}>
                <div className="bg-white p-8 rounded-2xl shadow-lg h-full text-center">
                  <Award className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900">{cert}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Nos Services d'Intégration HubSpot</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Expertise technique complète pour tous vos besoins d'intégration HubSpot
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Pourquoi Choisir HubEasy comme Intégrateur HubSpot ?</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Notre expertise technique et notre statut de partenaire HubSpot officiel font la différence
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { title: "Expertise Technique", desc: "Maîtrise complète de l'écosystème HubSpot et des intégrations complexes", icon: <Rocket className="w-6 h-6 text-red-500"/> },
              { title: "Partenaire Officiel", desc: "Accès privilégié aux ressources HubSpot et support technique direct", icon: <Shield className="w-6 h-6 text-red-500"/> },
              { title: "Déploiements Rapides", desc: "Time-to-value réduit grâce à notre méthodologie éprouvée", icon: <Zap className="w-6 h-6 text-red-500"/> },
              { title: "Support Continu", desc: "Accompagnement post-intégration pour optimiser vos performances", icon: <Users className="w-6 h-6 text-red-500"/> },
              { title: "Formation Incluse", desc: "Formation de vos équipes pour une adoption réussie", icon: <BarChart2 className="w-6 h-6 text-red-500"/> },
              { title: "ROI Mesurable", desc: "Suivi des KPIs et optimisation continue de vos résultats", icon: <Award className="w-6 h-6 text-red-500"/> },
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Prêt à Intégrer HubSpot ?</h2>
            <p className="mt-6 text-lg text-gray-600 font-light">
              Contactez notre équipe d'intégrateurs HubSpot certifiés pour discuter de votre projet
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
                <Link href={`/${params.locale}/partenaire-hubspot`}>
                  <Button variant="outline" className="border-2 border-gray-300 text-gray-600 hover:bg-gray-100 font-light px-8 py-3 rounded-full text-lg transition-all duration-300">
                    En savoir plus sur notre statut de partenaire
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

      {/* Section SEO Enrichie - Expertise Technique Intégrateur HubSpot */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Expertise Technique d'Intégrateur HubSpot en France</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Notre équipe d'intégrateurs HubSpot certifiés maîtrise toutes les facettes techniques de l'écosystème HubSpot pour vous offrir des implémentations robustes et performantes.
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection animation="slide-right">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Maîtrise Technique Complète de HubSpot</h3>
                <p className="text-gray-600 font-light mb-4">
                  En tant qu'intégrateur HubSpot certifié, nous maîtrisons l'ensemble de l'écosystème HubSpot : 
                  Marketing Hub, Sales Hub, Service Hub, Operations Hub et CMS Hub. Notre expertise technique 
                  couvre les API, les intégrations complexes, les migrations de données et l'optimisation des performances.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">Certifications HubSpot officielles (Partner, Sales, Marketing, Service)</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">Maîtrise des API HubSpot et intégrations personnalisées</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">Expertise en migration de données complexes</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">Optimisation des workflows et automatisations</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={200}>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Intégrations Techniques Avancées</h3>
                <p className="text-gray-600 font-light mb-4">
                  Notre expertise d'intégrateur HubSpot nous permet de connecter HubSpot avec vos outils existants 
                  de manière sécurisée et performante. Nous développons des intégrations sur mesure et configurons 
                  des connecteurs pour optimiser vos processus métier.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">Intégrations ERP (Odoo, Dolibarr, Sage, SAP)</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">Connexions e-commerce (Shopify, WooCommerce, PrestaShop)</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">Synchronisation outils de support et ticketing</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-sm">Développement d'API et connecteurs personnalisés</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section FAQ SEO Spécifique Intégrateur */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Questions Fréquentes sur l'Intégration HubSpot</h2>
            <p className="mt-6 text-lg text-gray-600 font-light">Réponses aux questions techniques les plus courantes sur l'intégration HubSpot</p>
          </AnimatedSection>

          <div className="mt-10 divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden bg-white">
            {[
              {
                q: "Quelle est la différence entre un intégrateur HubSpot et un consultant HubSpot ?",
                a: "Un intégrateur HubSpot se concentre sur l'aspect technique : configuration, intégrations, migrations et optimisation. Un consultant HubSpot se concentre sur la stratégie et les processus métier. HubEasy combine les deux approches pour une solution complète."
              },
              {
                q: "Combien de temps prend une intégration HubSpot complète ?",
                a: "Une intégration HubSpot standard prend 4-6 semaines, incluant la configuration des hubs, les intégrations de base et la formation. Une intégration complexe avec migrations et intégrations personnalisées peut nécessiter 8-12 semaines."
              },
              {
                q: "Quels sont les prérequis techniques pour intégrer HubSpot ?",
                a: "Les prérequis incluent l'accès administrateur à vos outils existants, les données à migrer, les spécifications des intégrations souhaitées et l'identification des processus métier à automatiser. Nous vous accompagnons dans cette phase de préparation."
              },
              {
                q: "Comment garantissez-vous la sécurité des données lors de l'intégration ?",
                a: "Nous respectons les standards de sécurité HubSpot et les réglementations françaises (RGPD). Toutes nos intégrations utilisent des connexions sécurisées (HTTPS, API keys), et nous effectuons des tests de sécurité avant chaque déploiement."
              },
              {
                q: "Proposez-vous un support technique après l'intégration ?",
                a: "Oui, nous offrons un support technique continu incluant la maintenance des intégrations, l'optimisation des performances, la formation des équipes et l'évolution de votre configuration HubSpot selon vos besoins."
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

