import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://hubeasy.fr'),
  title: {
    default: 'HubEasy - Agence HubSpot | Intégrateur & Partenaire HubSpot Certifié',
    template: '%s | HubEasy - Agence HubSpot Certifiée'
  },
  description: 'Agence HubSpot certifiée et partenaire officiel. Expertise en intégration, migration et optimisation HubSpot pour PME/ETI B2B. Implémentations rapides et mesurables.',
  keywords: [
    'agence HubSpot',
    'intégrateur HubSpot', 
    'partenaire HubSpot',
    'intégration HubSpot',
    'migration HubSpot',
    'CRM HubSpot',
    'marketing automation HubSpot',
    'PME',
    'ETI',
    'B2B',
    'certification HubSpot'
  ],
  authors: [{ name: 'HubEasy' }],
  creator: 'HubEasy',
  publisher: 'HubEasy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://hubeasy.fr',
    siteName: 'HubEasy',
    title: 'HubEasy - Agence HubSpot | Intégrateur & Partenaire HubSpot Certifié',
    description: 'Agence HubSpot certifiée et partenaire officiel. Expertise en intégration, migration et optimisation HubSpot pour PME/ETI B2B.',
    images: [
      {
        url: '/images/logo-hubeasy.png',
        width: 1200,
        height: 630,
        alt: 'HubEasy - Agence HubSpot Certifiée',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HubEasy - Agence HubSpot | Intégrateur & Partenaire HubSpot Certifié',
    description: 'Agence HubSpot certifiée et partenaire officiel. Expertise en intégration, migration et optimisation HubSpot pour PME/ETI B2B.',
    images: ['/images/logo-hubeasy.png'],
    creator: '@hubeasy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://hubeasy.fr',
    languages: {
      'fr-FR': 'https://hubeasy.fr/fr',
      'en-US': 'https://hubeasy.fr/en',
    },
  },
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  canonical,
  openGraph,
  twitter,
}: {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  openGraph?: Partial<Metadata['openGraph']>
  twitter?: Partial<Metadata['twitter']>
}): Metadata {
  return {
    ...defaultMetadata,
    title,
    description,
    keywords: [...(Array.isArray(defaultMetadata.keywords) ? defaultMetadata.keywords : [defaultMetadata.keywords!]), ...keywords],
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      ...openGraph,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
      ...twitter,
    },
    alternates: {
      canonical: canonical ? `https://hubeasy.fr${canonical}` : defaultMetadata.alternates?.canonical,
    },
  }
}

