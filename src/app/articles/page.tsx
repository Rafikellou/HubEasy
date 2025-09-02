import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import { Button } from '@/components/ui/button';
import { searchUnsplashImages } from '@/lib/unsplash';

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

// Articles HubEasy
const featuredArticle: Article = {
  id: 1,
  slug: "integration-odoo-hubspot-guide-complet",
  title: "Pourquoi 50% des intégrations Odoo ↔ HubSpot dépassent les délais (et comment l'éviter)",
  excerpt: "Beaucoup de PME sous-estiment la complexité d'un projet HubSpot ↔ Odoo. Découvrez les erreurs fréquentes et les solutions simples pour tenir vos délais et vos budgets.",
  author: "Équipe HubEasy",
  date: "2025-08-15",
  readTime: "7 min",
  category: "Intégrations",
  image: "/images/hero-photo-hubeasy.jpg",
  featured: true,
  searchTerm: "business integration software",
  unsplashImageId: undefined
};

const articles: Article[] = [
  {
    id: 2,
    slug: "dolibarr-hubspot-erreurs-commerciaux",
    title: "Intégration Dolibarr HubSpot – 3 erreurs fréquentes (et comment les éviter)",
    excerpt: "L'intégration Dolibarr peut vite tourner au casse-tête. On vous montre les pièges classiques (et comment les éviter) pour que vos commerciaux restent concentrés sur la vente.",
    author: "Équipe HubEasy",
    date: "2025-07-10",
    readTime: "5 min",
    category: "Intégrations",
    image: "/images/hero-photo-hubeasy.jpg",
    searchTerm: "business software integration",
    unsplashImageId: undefined
  },
  {
    id: 3,
    slug: "integration-odoo-hubspot-guide-complet",
    title: "Intégration Odoo HubSpot – Guide complet pour réussir votre projet",
    excerpt: "Découvrez comment connecter Odoo et HubSpot pour automatiser votre prospection et améliorer votre gestion commerciale.",
    author: "Équipe HubEasy",
    date: "2025-06-20",
    readTime: "8 min",
    category: "Intégrations",
    image: "/images/hero-photo-hubeasy.jpg",
    searchTerm: "odoo hubspot integration",
    unsplashImageId: undefined
  },
  {
    id: 4,
    slug: "shopify-hubspot-panier-moyen",
    title: "Intégration Shopify HubSpot – Le duo qui booste vos ventes et votre panier moyen",
    excerpt: "E-commerce et CRM : un mariage explosif. Découvrez comment connecter Shopify à HubSpot permet de mieux cibler vos clients et d'augmenter la valeur moyenne de vos paniers.",
    author: "Équipe HubEasy",
    date: "2025-05-05",
    readTime: "6 min",
    category: "E-commerce",
    image: "/images/hero-photo-hubeasy.jpg",
    searchTerm: "shopify ecommerce storefront",
    unsplashImageId: undefined
  },
  {
    id: 5,
    slug: "salesforce-hubspot-complement",
    title: "Salesforce et HubSpot – concurrents ou solutions complémentaires ?",
    excerpt: "Beaucoup d'entreprises utilisent Salesforce et HubSpot en parallèle. Faut-il choisir ou les faire cohabiter ? On vous explique pourquoi la synergie est souvent la meilleure option.",
    author: "Équipe HubEasy",
    date: "2025-04-30",
    readTime: "8 min",
    category: "CRM",
    image: "/images/articles/salesforce-hubspot-v2.jpg",
    searchTerm: "salesforce crm dashboard",
    unsplashImageId: undefined
  },
  {
    id: 6,
    slug: "zendesk-hubspot-tickets",
    title: "Intégration Zendesk HubSpot – comment centraliser vos données clients",
    excerpt: "Le support client est souvent éclaté entre plusieurs outils. Découvrez comment Zendesk et HubSpot peuvent travailler ensemble pour améliorer la réactivité et la satisfaction client.",
    author: "Équipe HubEasy",
    date: "2025-03-25",
    readTime: "5 min",
    category: "Support",
    image: "/images/hero-photo-hubeasy.jpg",
    searchTerm: "customer support helpdesk",
    unsplashImageId: undefined
  },
  {
    id: 7,
    slug: "crm-clubs-sportifs-donnees-fans",
    title: "CRM pour clubs sportifs – pourquoi vos données fans sont un trésor caché",
    excerpt: "Les clubs et ligues perdent souvent la valeur cachée de leur base fans. Apprenez comment un CRM comme HubSpot, bien intégré, peut transformer vos fans en véritables sources de revenus.",
    author: "Équipe HubEasy",
    date: "2025-02-20",
    readTime: "6 min",
    category: "Sport",
    image: "/images/articles/crm-sport-v2.jpg",
    searchTerm: "sports stadium crowd fans",
    unsplashImageId: undefined
  }
];

const BlogPage = async () => {
  // Fetch Unsplash images for articles and store their IDs
  const fetchUnsplashImages = async () => {
    const articleImagesMap = new Map();
    const imageIdsMap = new Map<number, string>();
    
    try {
      // Fetch featured article image with proper size for both preview and detail pages
      const featuredResult = await searchUnsplashImages(featuredArticle.searchTerm, 1, 1, {}, 'regular');
      if (featuredResult?.results?.length > 0) {
        const image = featuredResult.results[0];
        articleImagesMap.set(featuredArticle.id, image.imageUrl || image.urls.regular);
        imageIdsMap.set(featuredArticle.id, image.imageId || image.id);
      }
      
      // Fetch article images in parallel with proper size
      const articleImagePromises = articles.map(async (article) => {
        const result = await searchUnsplashImages(article.searchTerm, 1, 1, {}, 'regular');
        if (result?.results?.length > 0) {
          const image = result.results[0];
          articleImagesMap.set(article.id, image.imageUrl || image.urls.regular);
          imageIdsMap.set(article.id, image.imageId || image.id);
        }
      });
      
      await Promise.all(articleImagePromises);
    } catch (error) {
      console.error('Error fetching Unsplash images:', error);
    }
    
    return { articleImagesMap, imageIdsMap };
  };
  
  const { articleImagesMap, imageIdsMap } = await fetchUnsplashImages();

  // Add unsplashImageId to the articles and featuredArticle
  featuredArticle.unsplashImageId = imageIdsMap.get(featuredArticle.id) || undefined;
  articles.forEach(article => {
    article.unsplashImageId = imageIdsMap.get(article.id) || undefined;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-6xl font-thin text-gray-900 mb-6 tracking-tight">
              <span className="text-red-500">Blog</span> HubEasy
            </h1>
            <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto">
              Découvrez nos conseils, guides et retours d'expérience sur HubSpot, les intégrations CRM et le marketing automation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={articleImagesMap.get(featuredArticle.id) || featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Article vedette
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredArticle.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(featuredArticle.date)}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                  <h2 className="text-3xl font-medium text-gray-900 mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-600 font-light mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="text-gray-600 font-light">{featuredArticle.author}</span>
                    </div>
                    <Link href={`/articles/${featuredArticle.slug}${(featuredArticle.unsplashImageId || articleImagesMap.get(featuredArticle.id)) ? `?${[
                      featuredArticle.unsplashImageId ? `imageId=${featuredArticle.unsplashImageId}` : '',
                      articleImagesMap.get(featuredArticle.id) ? `imageUrl=${encodeURIComponent(articleImagesMap.get(featuredArticle.id))}` : ''
                    ].filter(Boolean).join('&')}` : ''}`}>
                      <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6">
                        <span className="flex items-center">
                          Lire l'article
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-4">
              Derniers articles
            </h2>
            <p className="text-gray-600 font-light">Restez informé des dernières tendances et bonnes pratiques</p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <AnimatedSection key={article.id} animation="fade-up" delay={index * 100}>
                <Link href={`/articles/${article.slug}${(article.unsplashImageId || articleImagesMap.get(article.id)) ? `?${[
                  article.unsplashImageId ? `imageId=${article.unsplashImageId}` : '',
                  articleImagesMap.get(article.id) ? `imageUrl=${encodeURIComponent(articleImagesMap.get(article.id))}` : ''
                ].filter(Boolean).join('&')}` : ''}`} className="block h-full">
                  <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col">
                    <div className="relative h-48">
                      <Image
                        src={articleImagesMap.get(article.id) || article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex justify-between items-center mb-4">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {article.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="mr-1 h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <h3 className="font-bold text-lg mb-2 hover:text-red-600 transition-colors line-clamp-2">{article.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center">
                          <User className="mr-2 h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-700">{article.author}</span>
                        </div>
                        <div className="text-gray-500 text-sm">
                          <Calendar className="mr-1 h-4 w-4 inline" />
                          <span>{formatDate(article.date)}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-4">
                Restez informé
              </h2>
              <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto">
                Recevez nos derniers articles et conseils directement dans votre boîte mail.
              </p>
              <Link href="/contact">
                <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-8 py-3">
                  S'abonner à la newsletter
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
