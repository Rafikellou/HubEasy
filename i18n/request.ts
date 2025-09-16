import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale, type Locale} from '../src/i18n/config';

export default getRequestConfig(async ({locale}) => {
  const resolvedLocale: Locale = (locales as readonly string[]).includes(locale as string)
    ? (locale as Locale)
    : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../src/messages/${resolvedLocale}.json`)).default
  };
});
