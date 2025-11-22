import {ReactNode} from 'react';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Header from '@/components/navigation/Header';
import Footer from '@/components/Footer';

export default async function LocaleLayout({children, params}: {children: ReactNode; params: { locale: string }} ) {
  const { locale } = params;
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }];
}
