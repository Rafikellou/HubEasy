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
    // Match all pathnames except for:
    // - API routes (/api/*)
    // - Next.js internals (_next/*)
    // - Vercel internals (_vercel/*)
    // - Static files (files with extensions)
    '/((?!api/|_next/|_vercel/|.*\\..*).*)',
    // Explicitly include root and locale paths
    '/',
    '/(fr|en)/:path*'
  ]
};
