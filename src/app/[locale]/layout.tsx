import {ReactNode} from 'react';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getLocale} from 'next-intl/server';
import Header from '@/components/navigation/Header';
import Footer from '@/components/Footer';

export default async function LocaleLayout({children}: {children: ReactNode}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
