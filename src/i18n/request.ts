import {getRequestConfig} from 'next-intl/server';
import {defaultLocale, locales, type Locale} from './config';

export default getRequestConfig(async ({locale}) => {
  const resolvedLocale: Locale = (locales as readonly string[]).includes(locale as string)
    ? (locale as Locale)
    : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default
  };
});
