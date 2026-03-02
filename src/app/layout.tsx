import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { getLocale } from 'next-intl/server';
import GoogleTagManager from '@/components/GoogleTagManager';
import { ChatbotProvider } from '@/context/ChatbotContext';
import { ChatLayoutWrapper } from '@/components/chatbot/ChatLayoutWrapper';
// import { LukeChatbot } from '@/components/chatbot/LukeChatbot';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'HubEasy - Agence HubSpot | Intégrateur & Partenaire HubSpot Certifié',
  description: 'Agence HubSpot certifiée spécialisée dans l\'intégration, migration et optimisation HubSpot pour PME/ETI B2B. Partenaire HubSpot officiel avec expertise technique.',
  keywords: 'agence HubSpot, intégrateur HubSpot, partenaire HubSpot, intégration HubSpot, migration HubSpot, CRM HubSpot, marketing automation HubSpot, PME, ETI, B2B, certification HubSpot',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'HubEasy - Agence HubSpot | Intégrateur & Partenaire HubSpot Certifié',
    description: 'Agence HubSpot certifiée spécialisée dans l\'intégration, migration et optimisation HubSpot pour PME/ETI B2B.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HubEasy - Agence HubSpot | Intégrateur & Partenaire HubSpot Certifié',
    description: 'Agence HubSpot certifiée spécialisée dans l\'intégration, migration et optimisation HubSpot pour PME/ETI B2B.',
  },
  alternates: {
    canonical: 'https://hubeasy.fr',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <GoogleTagManager gtmId="GTM-MLNZQTVV" />
        <script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/146755132.js"></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ChatbotProvider>
            <ChatLayoutWrapper>
              {children}
            </ChatLayoutWrapper>
            {/* <LukeChatbot /> */}
          </ChatbotProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

