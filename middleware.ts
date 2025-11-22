import createMiddleware from 'next-intl/middleware';
// Inline to avoid potential Edge import resolution issues on Vercel
const locales = ['fr', 'en'] as const;
const defaultLocale = 'fr' as const;

export default createMiddleware({
  locales: Array.from(locales),
  defaultLocale,
  localePrefix: 'as-needed'
});

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
