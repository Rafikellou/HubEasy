import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './src/i18n/config';

export default createMiddleware({
  locales: Array.from(locales),
  defaultLocale,
  localePrefix: 'as-needed'
});

export const config = {
  matcher: [
    '/',
    '/(fr|en)/:path*'
  ]
};
