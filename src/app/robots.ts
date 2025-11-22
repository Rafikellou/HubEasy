import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/', '/_vercel/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/', '/_vercel/'],
      }
    ],
    sitemap: 'https://hubeasy.fr/sitemap.xml',
    host: 'https://hubeasy.fr',
  }
}



