import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import { Button } from '@/components/ui/button';
import { searchUnsplashImages } from '@/lib/unsplash';
import {getTranslations} from 'next-intl/server';

interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  searchTerm: string;
  featured?: boolean;
  unsplashImageId?: string;
}

const featuredArticle: Article = {
  id: 1,
  slug: 'integration-odoo-hubspot-guide-complet',
  title: "Pourquoi 50% des intégrations Odoo ↔ HubSpot dépassent les délais (et comment l'éviter)",
  excerpt: "Beaucoup de PME sous-estiment la complexité d'un projet HubSpot ↔ Odoo. Découvrez les erreurs fréquentes et les solutions simples pour tenir vos délais et vos budgets.",
  author: 'Équipe HubEasy',
  date: '2025-08-15',
  readTime: '7 min',
  category: 'Intégrations',
  image: '/images/hero-photo-hubeasy.jpg',
  featured: true,
  searchTerm: 'business integration software',
  unsplashImageId: undefined
};

const articles: Article[] = [
  {
    id: 2,
    slug: 'agence-hubspot-france-guide-2025',
    title: "Agence HubSpot France : Guide Complet 2025 pour Choisir la Meilleure",
    excerpt: "Découvrez comment choisir la meilleure agence HubSpot en France. Critères de sélection, tarifs, certifications et bonnes pratiques pour votre projet HubSpot en 2025.",
    author: 'Équipe HubEasy',
    date: '2025-01-15',
    readTime: '8 min',
    category: 'Agence HubSpot',
    image: '/images/hero-photo-hubeasy.jpg',
    searchTerm: 'hubspot agency france',
    unsplashImageId: undefined
  },
  {
    id: 3,
    slug: 'integrateur-hubspot-choisir-partenaire',
    title: "Intégrateur HubSpot : Comment Choisir le Bon Partenaire en 2025",
    excerpt: "Guide complet pour choisir le meilleur intégrateur HubSpot. Certifications, expérience, tarifs et critères de sélection pour réussir votre projet HubSpot.",
    author: 'Équipe HubEasy',
    date: '2025-01-10',
    readTime: '7 min',
    category: 'Intégrateur HubSpot',
    image: '/images/hero-photo-hubeasy.jpg',
    searchTerm: 'hubspot integrator partner',
    unsplashImageId: undefined
  },
  {
    id: 8,
    slug: 'dolibarr-hubspot-erreurs-commerciaux',
    title: "Intégration Dolibarr HubSpot – 3 erreurs fréquentes (et comment les éviter)",
    excerpt: "L'intégration Dolibarr peut vite tourner au casse-tête. On vous montre les pièges classiques (et comment les éviter) pour que vos commerciaux restent concentrés sur la vente.",
    author: 'Équipe HubEasy',
    date: '2025-07-10',
    readTime: '5 min',
    category: 'Intégrations',
    image: '/images/hero-photo-hubeasy.jpg',
    searchTerm: 'business software integration',
    unsplashImageId: undefined
  },
  {
    id: 4,
    slug: 'migration-hubspot-guide-pratique',
    title: "Migration HubSpot : Guide Pratique Sans Perte de Données",
    excerpt: "Comment migrer vers HubSpot sans perdre vos données ? Guide étape par étape pour une migration réussie depuis votre ancien CRM vers HubSpot.",
    author: 'Équipe HubEasy',
    date: '2025-01-05',
    readTime: '9 min',
    category: 'Migration HubSpot',
    image: '/images/hero-photo-hubeasy.jpg',
    searchTerm: 'hubspot migration guide',
    unsplashImageId: undefined
  },
  {
    id: 9,
    slug: 'formation-hubspot-par-ou-commencer',
    title: "Formation HubSpot : Par où Commencer ? Guide 2025",
    excerpt: "Découvrez les meilleures formations HubSpot disponibles en France. Certifications officielles, cours en ligne et conseils pour maîtriser HubSpot rapidement.",
    author: 'Équipe HubEasy',
    date: '2025-01-01',
    readTime: '6 min',
    category: 'Formation HubSpot',
    image: '/images/hero-photo-hubeasy.jpg',
    searchTerm: 'hubspot training certification',
    unsplashImageId: undefined
  },
  {
    id: 10,
    slug: 'shopify-hubspot-panier-moyen',
    title: "Intégration Shopify HubSpot – Le duo qui booste vos ventes et votre panier moyen",
    excerpt: "Découvrez comment connecter Shopify à HubSpot permet de mieux cibler vos clients et d'augmenter la valeur moyenne de vos paniers.",
    author: 'Équipe HubEasy',
    date: '2025-05-05',
    readTime: '6 min',
    category: 'E-commerce',
    image: '/images/hero-photo-hubeasy.jpg',
    searchTerm: 'shopify ecommerce storefront',
    unsplashImageId: undefined
  },
  {
    id: 5,
    slug: 'salesforce-hubspot-complement',
    title: "Salesforce et HubSpot – concurrents ou solutions complémentaires ?",
    excerpt: "Beaucoup d'entreprises utilisent Salesforce et HubSpot en parallèle. Faut-il choisir ou les faire cohabiter ? Découvrez pourquoi la synergie est souvent la meilleure option.",
    author: 'Équipe HubEasy',
    date: '2025-04-30',
    readTime: '8 min',
    category: 'CRM',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    searchTerm: 'salesforce crm dashboard',
    unsplashImageId: undefined
  },
  {
    id: 6,
    slug: 'zendesk-hubspot-tickets',
    title: "Intégration Zendesk HubSpot – comment centraliser vos données clients",
    excerpt: "Le support client est souvent éclaté entre plusieurs outils. Découvrez comment Zendesk et HubSpot peuvent travailler ensemble pour améliorer la réactivité et la satisfaction client.",
    author: 'Équipe HubEasy',
    date: '2025-03-25',
    readTime: '5 min',
    category: 'Support',
    image: '/images/hero-photo-hubeasy.jpg',
    searchTerm: 'customer support helpdesk',
    unsplashImageId: undefined
  },
  {
    id: 7,
    slug: 'crm-clubs-sportifs-donnees-fans',
    title: "CRM pour clubs sportifs – pourquoi vos données fans sont un trésor caché",
    excerpt: "Les clubs et ligues perdent souvent la valeur cachée de leur base fans. Apprenez comment un CRM comme HubSpot, bien intégré, peut transformer vos fans en véritables sources de revenus.",
    author: 'Équipe HubEasy',
    date: '2025-02-20',
    readTime: '6 min',
    category: 'Sport',
    image: '/images/hero-photo-hubeasy.jpg',
    searchTerm: 'sports stadium crowd fans',
    unsplashImageId: undefined
  }
];

export default async function BlogPage({ params }: { params: { locale: string }}) {
  const t = await getTranslations({ locale: params.locale, namespace: 'Blog' });

  const fetchUnsplashImages = async () => {
    const articleImagesMap = new Map();
    const imageIdsMap = new Map<number, string>();
    try {
      const featuredResult = await searchUnsplashImages(featuredArticle.searchTerm, 1, 1, {}, 'regular');
      if (featuredResult?.results?.length > 0) {
        const image = featuredResult.results[0];
        articleImagesMap.set(featuredArticle.id, image.imageUrl || image.urls.regular);
        imageIdsMap.set(featuredArticle.id, image.imageId || image.id);
      }
      const articleImagePromises = articles.map(async (article) => {
        const result = await searchUnsplashImages(article.searchTerm, 1, 1, {}, 'regular');
        if (result?.results?.length > 0) {
          const image = result.results[0];
          articleImagesMap.set(article.id, image.imageUrl || image.urls.regular);
          imageIdsMap.set(article.id, image.imageId || image.id);
        }
      });
      await Promise.all(articleImagePromises);
    } catch {}
    return { articleImagesMap, imageIdsMap };
  };

  const { articleImagesMap, imageIdsMap } = await fetchUnsplashImages();
  featuredArticle.unsplashImageId = imageIdsMap.get(featuredArticle.id) || undefined;
  articles.forEach(article => {
    article.unsplashImageId = imageIdsMap.get(article.id) || undefined;
  });

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat(params.locale, { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(dateString));
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-6xl font-thin text-gray-900 mb-6 tracking-tight">
              <span className="text-red-500">{t('hero_title_highlight')}</span> {t('hero_title_tail')}
            </h1>
            <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto">
              {t('hero_subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <Image src={articleImagesMap.get(featuredArticle.id) || featuredArticle.image} alt={featuredArticle.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">{t('featured_badge')}</span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">{featuredArticle.category}</span>
                    <div className="flex items-center text-gray-500 text-sm"><Calendar className="w-4 h-4 mr-1" />{formatDate(featuredArticle.date)}</div>
                    <div className="flex items-center text-gray-500 text-sm"><Clock className="w-4 h-4 mr-1" />{featuredArticle.readTime}</div>
                  </div>
                  <h2 className="text-3xl font-medium text-gray-900 mb-4">{featuredArticle.title}</h2>
                  <p className="text-gray-600 font-light mb-6 leading-relaxed">{featuredArticle.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center"><User className="w-5 h-5 text-gray-400 mr-2" /><span className="text-gray-600 font-light">{featuredArticle.author}</span></div>
                    <Link href={`/${params.locale}/articles/${featuredArticle.slug}${(featuredArticle.unsplashImageId || articleImagesMap.get(featuredArticle.id)) ? `?${[
                      featuredArticle.unsplashImageId ? `imageId=${featuredArticle.unsplashImageId}` : '',
                      articleImagesMap.get(featuredArticle.id) ? `imageUrl=${encodeURIComponent(articleImagesMap.get(featuredArticle.id))}` : ''
                    ].filter(Boolean).join('&')}` : ''}`}>
                      <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6">
                        <span className="flex items-center">{t('read_article')}<ArrowRight className="w-4 h-4 ml-2" /></span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-4">{t('latest_title')}</h2>
            <p className="text-gray-600 font-light">{t('latest_subtitle')}</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <AnimatedSection key={article.id} animation="fade-up" delay={index * 100}>
                <Link href={`/${params.locale}/articles/${article.slug}${(article.unsplashImageId || articleImagesMap.get(article.id)) ? `?${[
                  article.unsplashImageId ? `imageId=${article.unsplashImageId}` : '',
                  articleImagesMap.get(article.id) ? `imageUrl=${encodeURIComponent(articleImagesMap.get(article.id))}` : ''
                ].filter(Boolean).join('&')}` : ''}`} className="block h-full">
                  <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col">
                    <div className="relative h-48">
                      <Image src={articleImagesMap.get(article.id) || article.image} alt={article.title} fill className="object-cover" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex justify-between items-center mb-4">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{article.category}</span>
                        <div className="flex items-center text-gray-500 text-sm"><Clock className="mr-1 h-4 w-4" /><span>{article.readTime}</span></div>
                      </div>
                      <h3 className="font-bold text-lg mb-2 hover:text-red-600 transition-colors line-clamp-2">{article.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center"><User className="mr-2 h-4 w-4 text-gray-500" /><span className="text-sm text-gray-700">{article.author}</span></div>
                        <div className="text-gray-500 text-sm"><Calendar className="mr-1 h-4 w-4 inline" /><span>{formatDate(article.date)}</span></div>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-4">{t('newsletter_title')}</h2>
              <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto">{t('newsletter_subtitle')}</p>
              <Link href={`/${params.locale}/contact`}>
                <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-8 py-3">{t('newsletter_cta')}</Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}


