import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import { Button } from '@/components/ui/button';
import { getRandomUnsplashImage, getUnsplashImageById } from '@/lib/unsplash';
import { getTranslations } from 'next-intl/server';
import { locales } from '@/i18n/config';

interface ArticleWithId {
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
  content: string;
  unsplashImageId?: string;
}

// Article data - in a real app this would come from a CMS or database
const articles: ArticleWithId[] = [
  {
    id: 1,
    slug: "salesforce-hubspot-complement",
    title: "Salesforce et HubSpot – concurrents ou solutions complémentaires ?",
    excerpt: "Beaucoup d'entreprises utilisent Salesforce et HubSpot en parallèle. Faut-il choisir ou les faire cohabiter ? Découvrez pourquoi la synergie est souvent la meilleure option.",
    author: "Équipe HubEasy",
    date: "2025-04-30",
    readTime: "8 min",
    category: "CRM",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    searchTerm: "salesforce crm dashboard",
    content: `
      <article class="article-content">
        <section>
          <h2 class="article-section-title">Salesforce et HubSpot : deux géants du CRM</h2>
          <p class="article-paragraph">Le marché du CRM est dominé par plusieurs acteurs majeurs, dont Salesforce et HubSpot. Beaucoup d'entreprises s'interrogent :</p>
          
          <ul class="article-list">
            <li class="article-list-item">Faut-il choisir l'un ou l'autre ?</li>
            <li class="article-list-item">Ou bien est-il possible de les intégrer pour profiter du meilleur des deux mondes ?</li>
          </ul>
          
          <div class="article-callout article-callout-important">
            <p class="article-callout-content"><strong>👉 L'intégration Salesforce HubSpot peut être une vraie opportunité pour les entreprises qui souhaitent allier puissance, flexibilité et efficacité marketing.</strong></p>
          </div>
        </section>
        
        <section>
          <h2 class="article-section-title">Les forces de chaque solution</h2>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Salesforce : le CRM d'entreprise par excellence</h3>
            <ul class="article-list">
              <li class="article-list-item">Très complet, modulaire et personnalisable.</li>
              <li class="article-list-item">Idéal pour les grandes structures avec des processus complexes.</li>
              <li class="article-list-item">Puissante capacité de reporting et de gestion avancée des ventes.</li>
            </ul>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">HubSpot : la simplicité et la puissance marketing</h3>
            <ul class="article-list">
              <li class="article-list-item">Outil orienté inbound marketing, génération de leads et automatisation.</li>
              <li class="article-list-item">Interface intuitive, facile à déployer.</li>
              <li class="article-list-item">Excellente intégration native avec les canaux marketing (emails, réseaux sociaux, chat).</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 class="article-section-title">Intégration Salesforce HubSpot : un choix stratégique</h2>
          <p class="article-paragraph">Contrairement à ce que pensent beaucoup d'équipes, Salesforce et HubSpot ne sont pas forcément des concurrents.</p>
          <p class="article-paragraph">En réalité, leur intégration permet de bénéficier :</p>
          
          <div class="article-feature">
            <h3 class="article-feature-title">D'une synchronisation fluide des données</h3>
            <p class="article-paragraph">Les leads générés par HubSpot sont transférés automatiquement vers Salesforce pour un suivi commercial précis.</p>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">D'un pipeline de vente enrichi</h3>
            <p class="article-paragraph">Salesforce se concentre sur la gestion complexe des ventes, tandis que HubSpot alimente le pipeline grâce à ses outils marketing.</p>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">D'une vision unifiée du client</h3>
            <p class="article-paragraph">Marketing et sales partagent les mêmes données, ce qui réduit les frictions entre les équipes.</p>
          </div>
        </section>
        
        <section>
          <h2 class="article-section-title">Les erreurs à éviter lors d'un projet d'intégration Salesforce HubSpot</h2>
          
          <ul class="article-list">
            <li class="article-list-item">Négliger la gouvernance des données : sans règles claires, les doublons et incohérences s'accumulent.</li>
            <li class="article-list-item">Sous-estimer la complexité technique : Salesforce étant très flexible, une mauvaise configuration peut créer des blocages.</li>
            <li class="article-list-item">Limiter HubSpot au simple lead generation : exploitez aussi ses workflows automatisés pour nourrir vos prospects jusqu'à la conversion.</li>
          </ul>
        </section>
        
        <section>
          <h2 class="article-section-title">Bonnes pratiques pour une intégration réussie</h2>
          
          <ul class="article-list">
            <li class="article-list-item">Définir un mapping précis entre les champs Salesforce et HubSpot.</li>
            <li class="article-list-item">Mettre en place une stratégie de nurturing dans HubSpot pour qualifier les leads avant leur transfert vers Salesforce.</li>
            <li class="article-list-item">Former les équipes commerciales et marketing à travailler sur des données communes.</li>
            <li class="article-list-item">Utiliser des connecteurs certifiés ou un intégrateur spécialisé Salesforce HubSpot.</li>
          </ul>
        </section>
        
        <section>
          <h2 class="article-section-title">Conclusion</h2>
          <p class="article-paragraph">Plutôt que de voir Salesforce et HubSpot comme des concurrents, il est plus pertinent de les envisager comme des solutions complémentaires.</p>
          <p class="article-paragraph">Leur intégration permet aux entreprises de combiner :</p>
          
          <ul class="article-list">
            <li class="article-list-item">la puissance analytique et commerciale de Salesforce,</li>
            <li class="article-list-item">avec la force marketing et l'automatisation de HubSpot.</li>
          </ul>
          
          <div class="article-callout article-callout-important">
            <p class="article-callout-content"><strong>👉 L'intégration Salesforce HubSpot est donc une stratégie gagnante pour les organisations qui souhaitent aligner leurs équipes marketing et sales tout en optimisant leurs performances.</strong></p>
          </div>
        </section>
      </article>
    `
  },
  {
    id: 2,
    slug: "shopify-hubspot-panier-moyen",
    title: "Intégration Shopify HubSpot – Le duo qui booste vos ventes et votre panier moyen",
    excerpt: "Découvrez comment connecter Shopify à HubSpot permet de mieux cibler vos clients et d'augmenter la valeur moyenne de vos paniers.",
    author: "Équipe HubEasy",
    date: "2025-05-05",
    readTime: "6 min",
    category: "E-commerce",
    image: "/images/hero-photo-hubeasy.jpg",
    searchTerm: "shopify ecommerce storefront",
    content: `
      <article class="article-content">
        <section>
          <h2 class="article-section-title">Pourquoi connecter Shopify et HubSpot ?</h2>
          <p class="article-paragraph">L'intégration Shopify HubSpot est aujourd'hui l'un des meilleurs leviers pour les e-commerçants qui veulent :</p>
          
          <ul class="article-list">
            <li class="article-list-item">mieux comprendre leurs clients,</li>
            <li class="article-list-item">automatiser leurs campagnes marketing,</li>
            <li class="article-list-item">et augmenter leur chiffre d'affaires.</li>
          </ul>
          
          <p class="article-paragraph">Shopify est une des plateformes e-commerce les plus utilisées au monde. HubSpot, quant à lui, est un CRM et un outil marketing puissant qui permet de suivre les comportements d'achat et de personnaliser la relation client.</p>
          
          <div class="article-callout article-callout-important">
            <p class="article-callout-content"><strong>👉 Ensemble, ils forment un duo gagnant pour maximiser vos ventes.</strong></p>
          </div>
        </section>
        
        <section>
          <h2 class="article-section-title">Les avantages de l'intégration Shopify HubSpot</h2>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Synchronisation automatique des données clients</h3>
            <p class="article-paragraph">Chaque achat sur Shopify alimente automatiquement HubSpot : fiches clients, historique des commandes, préférences d'achat.</p>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Segmentation et marketing automatisé</h3>
            <p class="article-paragraph">Vous pouvez segmenter vos clients (fidèles, nouveaux, inactifs) et lancer des campagnes email personnalisées depuis HubSpot.</p>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Augmentation du panier moyen</h3>
            <p class="article-paragraph">Grâce aux emails automatisés (produits complémentaires, relance panier abandonné, offres spéciales), vous augmentez la valeur de chaque commande.</p>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Vision 360° sur vos performances</h3>
            <p class="article-paragraph">Vous suivez en temps réel les données clés : ventes, taux de conversion, ROI de vos campagnes marketing.</p>
          </div>
        </section>
        
        <section>
          <h2 class="article-section-title">Les erreurs à éviter lors d'une intégration Shopify HubSpot</h2>
          <p class="article-paragraph">Beaucoup de e-commerçants rencontrent des difficultés parce qu'ils négligent certains points :</p>
          
          <ul class="article-list">
            <li class="article-list-item">Ne pas nettoyer les données clients avant de les synchroniser. Résultat : doublons et mauvaises segmentations.</li>
            <li class="article-list-item">Sous-utiliser les automatisations HubSpot : se limiter à des emails basiques alors que HubSpot permet des scénarios avancés.</li>
            <li class="article-list-item">Limiter HubSpot au simple lead generation : exploitez aussi ses workflows automatisés pour nourrir vos prospects jusqu'à la conversion.</li>
          </ul>
        </section>
        
        <section>
          <h2 class="article-section-title">Bonnes pratiques pour une intégration réussie</h2>
          
          <ul class="article-list">
            <li class="article-list-item">Configurer un mapping clair entre les champs Shopify et HubSpot.</li>
            <li class="article-list-item">Créer des workflows automatisés : relance de paniers abandonnés, recommandations de produits, programmes de fidélité.</li>
            <li class="article-list-item">Analyser régulièrement les données pour ajuster vos campagnes et booster votre conversion.</li>
            <li class="article-list-item">Former vos équipes marketing à exploiter le CRM et ses outils d'automatisation.</li>
          </ul>
        </section>
        
        <section>
          <h2 class="article-section-title">Conclusion</h2>
          <p class="article-paragraph">L'intégration Shopify HubSpot est une solution incontournable pour les e-commerçants qui veulent améliorer leur efficacité marketing et augmenter leur panier moyen.</p>
          <p class="article-paragraph">En connectant votre boutique en ligne à votre CRM, vous profitez d'une meilleure connaissance client, d'automatisations puissantes et d'un suivi précis de vos performances.</p>
        </section>
      </article>
    `
  }
];

// This would normally be fetched from a database or CMS
const getArticleBySlug = (slug: string) => {
  return articles.find(article => article.slug === slug);
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const article = getArticleBySlug(params.slug);
  
  if (!article) {
    return {
      title: 'Article non trouvé',
      description: 'L\'article que vous recherchez n\'existe pas.',
    };
  }
  
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({
  params,
  searchParams
}: {
  params: { locale: string; slug: string };
  searchParams: { imageId?: string; imageUrl?: string };
}) {
  const t = await getTranslations({ locale: params.locale, namespace: 'Blog' });
  const article = getArticleBySlug(params.slug);
  
  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('article_not_found_title')}</h1>
          <p className="text-gray-600 mb-8">{t('article_not_found_description')}</p>
          <Link href={`/${params.locale}/articles`}>
            <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('back_to_articles')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  const imageId = searchParams.imageId || '';
  const imageParamUrl = searchParams.imageUrl || '';
  
  // Resolve the best image URL in priority order:
  // 1) Explicit imageUrl param from the listing page
  // 2) Unsplash image by ID via source.unsplash.com
  // 3) Article's own image fallback
  // 4) Unsplash featured by search term (no API key required)
  let imageUrl: string = '/images/hero-photo-hubeasy.jpg';
  if (imageParamUrl) {
    imageUrl = imageParamUrl;
  } else if (imageId) {
    imageUrl = `https://source.unsplash.com/${imageId}/1200x600`;
  } else if (article.image) {
    imageUrl = article.image;
  } else if (article.searchTerm) {
    imageUrl = `https://source.unsplash.com/featured/1200x600?${encodeURIComponent(article.searchTerm)}`;
  }
  
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
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <Link href={`/${params.locale}/articles`} className="inline-flex items-center text-red-600 hover:text-red-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('back_to_articles')}
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(article.date)}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                {article.readTime}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
              {article.title}
            </h1>
            <p className="text-xl font-light text-gray-600 max-w-3xl">
              {article.excerpt}
            </p>
            <div className="flex items-center mt-6">
              <User className="w-5 h-5 text-gray-400 mr-2" />
              <span className="text-gray-600 font-light">{article.author}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="relative h-96 rounded-3xl overflow-hidden mb-12">
              <Image
                src={imageUrl}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1200px"
                priority
              />
            </div>
            
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
                {article.title}
              </h1>
              <div className="flex items-center text-gray-600 mb-6">
                <User className="mr-2 h-5 w-5" />
                <span className="mr-4">{article.author}</span>
                <Calendar className="mr-2 h-5 w-5" />
                <span className="mr-4">{formatDate(article.date)}</span>
                <Clock className="mr-2 h-5 w-5" />
                <span>{article.readTime}</span>
              </div>
              <div className="inline-block bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full mb-8">
                {article.category}
              </div>
            </div>
            
            <div className="article-container" dangerouslySetInnerHTML={{ __html: article.content }} />
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-4">
                {t('newsletter_title')}
              </h2>
              <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto">
                {t('newsletter_description')}
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

