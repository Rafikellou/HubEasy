import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import { Button } from '@/components/ui/button';

// Articles HubEasy
const featuredArticle = {
  id: 1,
  slug: "integration-odoo-hubspot-guide-complet",
  title: "Pourquoi 50% des intégrations Odoo ↔ HubSpot dépassent les délais (et comment l'éviter)",
  excerpt: "Beaucoup de PME sous-estiment la complexité d'un projet HubSpot ↔ Odoo. Découvrez les erreurs fréquentes et les solutions simples pour tenir vos délais et vos budgets.",
  author: "Équipe HubEasy",
  date: "2024-08-15",
  readTime: "7 min",
  category: "Intégrations",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
  featured: true
};

const articles = [
  {
    id: 2,
    slug: "dolibarr-hubspot-erreurs-commerciaux",
    title: "Intégration Dolibarr HubSpot – 3 erreurs fréquentes (et comment les éviter)",
    excerpt: "L'intégration Dolibarr peut vite tourner au casse-tête. On vous montre les pièges classiques (et comment les éviter) pour que vos commerciaux restent concentrés sur la vente.",
    author: "Équipe HubEasy",
    date: "2024-08-10",
    readTime: "5 min",
    category: "Intégrations",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    slug: "integration-odoo-hubspot-guide-complet",
    title: "Intégration Odoo HubSpot – Guide complet pour réussir votre projet",
    excerpt: "Découvrez comment connecter Odoo et HubSpot pour automatiser votre prospection et améliorer votre gestion commerciale.",
    author: "Équipe HubEasy",
    date: "2024-08-20",
    readTime: "8 min",
    category: "Intégrations",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    slug: "shopify-hubspot-panier-moyen",
    title: "Intégration Shopify HubSpot – Le duo qui booste vos ventes et votre panier moyen",
    excerpt: "E-commerce et CRM : un mariage explosif. Découvrez comment connecter Shopify à HubSpot permet de mieux cibler vos clients et d'augmenter la valeur moyenne de vos paniers.",
    author: "Équipe HubEasy",
    date: "2024-08-05",
    readTime: "6 min",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    slug: "salesforce-hubspot-complement",
    title: "Salesforce et HubSpot – concurrents ou solutions complémentaires ?",
    excerpt: "Beaucoup d'entreprises utilisent Salesforce et HubSpot en parallèle. Faut-il choisir ou les faire cohabiter ? On vous explique pourquoi la synergie est souvent la meilleure option.",
    author: "Équipe HubEasy",
    date: "2024-07-30",
    readTime: "8 min",
    category: "CRM",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    slug: "zendesk-hubspot-tickets",
    title: "Intégration Zendesk HubSpot – comment centraliser vos données clients",
    excerpt: "Le support client est souvent éclaté entre plusieurs outils. Découvrez comment Zendesk et HubSpot peuvent travailler ensemble pour améliorer la réactivité et la satisfaction client.",
    author: "Équipe HubEasy",
    date: "2024-07-25",
    readTime: "5 min",
    category: "Support",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 7,
    slug: "crm-clubs-sportifs-donnees-fans",
    title: "CRM pour clubs sportifs – pourquoi vos données fans sont un trésor caché",
    excerpt: "Les clubs et ligues perdent souvent la valeur cachée de leur base fans. Apprenez comment un CRM comme HubSpot, bien intégré, peut transformer vos fans en véritables sources de revenus.",
    author: "Équipe HubEasy",
    date: "2024-07-20",
    readTime: "6 min",
    category: "Sport",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&auto=format&fit=crop&q=60"
  }
];

const BlogPage = () => {
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
                    src={featuredArticle.image}
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
                    <Link href={`/articles/${featuredArticle.slug}`}>
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
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-4">Derniers articles</h2>
            <p className="text-gray-600 font-light">Restez informé des dernières tendances et bonnes pratiques</p>
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
                      <Link href={`/articles/${article.slug}`}>
                        <Button variant="outline" size="sm" className="rounded-full border-red-200 text-red-600 hover:bg-red-50">
                          Lire
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
