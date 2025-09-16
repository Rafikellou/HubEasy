import {getRequestConfig} from 'next-intl/server';
import {headers} from 'next/headers';
import {locales, defaultLocale, type Locale} from '../src/i18n/config';

export default getRequestConfig(async ({requestLocale, locale}) => {
  let candidate = (requestLocale ?? locale) as string | undefined;
  if (!candidate) {
    try {
      const h = headers();
      const url = h.get('x-middleware-request-url') || h.get('referer') || '';
      if (url) {
        const parsed = new URL(url);
        const match = parsed.pathname.match(/^\/(fr|en)(?=\/|$)/);
        if (match) candidate = match[1];
      }
    } catch {}
  }
  const isSupported = candidate && (locales as readonly string[]).includes(candidate);
  const resolvedLocale: Locale = (isSupported ? candidate : defaultLocale) as Locale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../src/messages/${resolvedLocale}.json`)).default
  };
});
