import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import { Button } from '@/components/ui/button';
import { getTranslations } from 'next-intl/server';
import { locales } from '@/i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RessourcesArticles({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'ResourcesArticles' });
  
  // Articles HubEasy
  const featuredArticle = {
    id: 1,
    slug: "integration-odoo-hubspot-guide-complet",
    title: t('featured_title'),
    excerpt: t('featured_excerpt'),
    author: t('author'),
    date: t('featured_date'),
    readTime: t('featured_readTime'),
    category: t('featured_category'),
    image: "/images/hero-photo-hubeasy.jpg",
    featured: true
  };

  const articles = [
    {
      id: 2,
      slug: "dolibarr-hubspot-erreurs-commerciaux",
      title: t('article1_title'),
      excerpt: t('article1_excerpt'),
      author: t('author'),
      date: t('article1_date'),
      readTime: t('article1_readTime'),
      category: t('article1_category'),
      image: "/images/hero-photo-hubeasy.jpg"
    },
    {
      id: 3,
      slug: "integration-odoo-hubspot-guide-complet",
      title: t('article2_title'),
      excerpt: t('article2_excerpt'),
      author: t('author'),
      date: t('article2_date'),
      readTime: t('article2_readTime'),
      category: t('article2_category'),
      image: "/images/hero-photo-hubeasy.jpg"
    },
    {
      id: 4,
      slug: "shopify-hubspot-panier-moyen",
      title: t('article3_title'),
      excerpt: t('article3_excerpt'),
      author: t('author'),
      date: t('article3_date'),
      readTime: t('article3_readTime'),
      category: t('article3_category'),
      image: "/images/hero-photo-hubeasy.jpg"
    },
    {
      id: 5,
      slug: "salesforce-hubspot-complement",
      title: t('article4_title'),
      excerpt: t('article4_excerpt'),
      author: t('author'),
      date: t('article4_date'),
      readTime: t('article4_readTime'),
      category: t('article4_category'),
      image: "/images/articles/salesforce-hubspot-v2.jpg"
    },
    {
      id: 6,
      slug: "zendesk-hubspot-tickets",
      title: t('article5_title'),
      excerpt: t('article5_excerpt'),
      author: t('author'),
      date: t('article5_date'),
      readTime: t('article5_readTime'),
      category: t('article5_category'),
      image: "/images/hero-photo-hubeasy.jpg"
    },
    {
      id: 7,
      slug: "crm-clubs-sportifs-donnees-fans",
      title: t('article6_title'),
      excerpt: t('article6_excerpt'),
      author: t('author'),
      date: t('article6_date'),
      readTime: t('article6_readTime'),
      category: t('article6_category'),
      image: "/images/articles/crm-sport-v2.jpg"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(params.locale === 'fr' ? 'fr-FR' : 'en-US', {
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
              <span className="text-red-500">{t('title_highlight')}</span> {t('title_rest')}
            </h1>
            <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto">
              {t('subtitle')}
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
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t('featured_badge')}
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
                    <Link href={`/${params.locale}/articles/${featuredArticle.slug}`}>
                      <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6">
                        <span className="flex items-center">
                          {t('read_article')}
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
              {t('latest_articles_title')}
            </h2>
            <p className="text-gray-600 font-light">
              {t('latest_articles_subtitle')}
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <AnimatedSection key={article.id} animation="fade-up" delay={index * 100}>
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(article.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 font-light mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-gray-600 font-light text-sm">{article.author}</span>
                      </div>
                      <Link href={`/${params.locale}/articles/${article.slug}`}>
                        <Button variant="outline" size="sm" className="rounded-full border-red-200 text-red-600 hover:bg-red-50">
                          {t('read_button')}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </article>
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
                {t('newsletter_title')}
              </h2>
              <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto">
                {t('newsletter_subtitle')}
              </p>
              <Link href={`/${params.locale}/contact`}>
                <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-8 py-3">
                  {t('newsletter_button')}
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

