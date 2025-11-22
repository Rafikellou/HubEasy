import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, User, Calendar, Tag, TrendingUp, Database, Zap } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import { getTranslations } from 'next-intl/server';
import { locales } from '@/i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Ressources({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'Resources' });
  
  const articles = [
    {
      id: 'chatgpt-hubspot-workflows',
      title: t('article1_title'),
      excerpt: t('article1_excerpt'),
      content: t('article1_content'),
      author: t('author'),
      date: t('article1_date'),
      readTime: t('article1_readTime'),
      category: t('article1_category'),
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      tags: [t('tag1'), t('tag2'), t('tag3'), t('tag4')],
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'privacy-first-marketing',
      title: t('article2_title'),
      excerpt: t('article2_excerpt'),
      content: t('article2_content'),
      author: t('author'),
      date: t('article2_date'),
      readTime: t('article2_readTime'),
      category: t('article2_category'),
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      tags: [t('tag5'), t('tag6'), t('tag7'), t('tag8')],
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'predictive-lead-scoring',
      title: t('article3_title'),
      excerpt: t('article3_excerpt'),
      content: t('article3_content'),
      author: t('author'),
      date: t('article3_date'),
      readTime: t('article3_readTime'),
      category: t('article3_category'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      tags: [t('tag9'), t('tag10'), t('tag11'), t('tag12')],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'real-time-personalization',
      title: t('article4_title'),
      excerpt: t('article4_excerpt'),
      content: t('article4_content'),
      author: t('author'),
      date: t('article4_date'),
      readTime: t('article4_readTime'),
      category: t('article4_category'),
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      tags: [t('tag13'), t('tag14'), t('tag15'), t('tag16')],
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 'data-clean-rooms',
      title: t('article5_title'),
      excerpt: t('article5_excerpt'),
      content: t('article5_content'),
      author: t('author'),
      date: t('article5_date'),
      readTime: t('article5_readTime'),
      category: t('article5_category'),
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      tags: [t('tag17'), t('tag18'), t('tag19'), t('tag20')],
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      id: 'voice-of-customer-ai',
      title: t('article6_title'),
      excerpt: t('article6_excerpt'),
      content: t('article6_content'),
      author: t('author'),
      date: t('article6_date'),
      readTime: t('article6_readTime'),
      category: t('article6_category'),
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      tags: [t('tag21'), t('tag22'), t('tag23'), t('tag24')],
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      id: 'doublons-data-marketing',
      title: t('article7_title'),
      excerpt: t('article7_excerpt'),
      content: t('article7_content'),
      author: t('author'),
      date: t('article7_date'),
      readTime: t('article7_readTime'),
      category: t('article7_category'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      tags: [t('tag25'), t('tag26'), t('tag27'), t('tag28')],
      gradient: 'from-red-500 to-pink-500'
    },
    {
      id: 'sage-hubspot-integration',
      title: t('article8_title'),
      excerpt: t('article8_excerpt'),
      content: t('article8_content'),
      author: t('author'),
      date: t('article8_date'),
      readTime: t('article8_readTime'),
      category: t('article8_category'),
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      tags: [t('tag29'), t('tag30'), t('tag31'), t('tag32')],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'salesforce-hubspot-marketing',
      title: t('article9_title'),
      excerpt: t('article9_excerpt'),
      content: t('article9_content'),
      author: t('author'),
      date: t('article9_date'),
      readTime: t('article9_readTime'),
      category: t('article9_category'),
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      tags: [t('tag33'), t('tag34'), t('tag35'), t('tag36')],
      gradient: 'from-blue-500 to-indigo-500'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center">
            <h1 className="text-5xl md:text-7xl font-thin text-gray-900 mb-6 tracking-tight">
              <span className="text-red-500">{t('title_highlight')}</span> {t('title_rest')}
            </h1>
            <p className="text-2xl font-light text-gray-600 max-w-3xl mx-auto mb-12">
              {t('subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {articles.map((article, index) => (
              <AnimatedSection 
                key={article.id} 
                animation="fade-up" 
                delay={index * 200}
                className="group"
              >
                <article className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${article.gradient} opacity-20`}></div>
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-gray-900`}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{article.date}</span>
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl font-light text-gray-900 mb-4 group-hover:text-red-500 transition-colors duration-300">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 font-light leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {article.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="text-sm text-gray-600">{article.author}</span>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        className="text-red-500 hover:text-red-600 font-light p-0 h-auto"
                      >
                        {t('read_article')}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white mb-8">
              <BookOpen className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
              {t('newsletter_title')} <span className="text-red-500">{t('newsletter_title_highlight')}</span>
            </h2>
            <p className="text-xl font-light text-gray-600 mb-12 max-w-2xl mx-auto">
              {t('newsletter_subtitle')}
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder={t('email_placeholder')}
                  className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:border-red-500 focus:outline-none transition-colors duration-300 font-light"
                />
                <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-8 py-4 rounded-full transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                  {t('subscribe_button')}
                </Button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                {t('no_spam')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-5xl md:text-6xl font-thin text-gray-900 mb-8 tracking-tight">
              {t('cta_title')}<span className="text-red-500">{t('cta_title_highlight')}</span> ?
            </h2>
            <p className="text-xl font-light text-gray-600 mb-12 max-w-2xl mx-auto">
              {t('cta_subtitle')}
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={`/${params.locale}/contact`}>
                <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-12 py-6 rounded-full text-lg transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                  {t('cta_button1')}
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-2 border-red-500 text-red-500 hover:bg-gradient-to-r hover:from-red-500 hover:via-red-600 hover:to-pink-500 hover:text-white hover:border-transparent font-light px-12 py-6 rounded-full text-lg transition-all duration-500 hover:scale-105"
              >
                {t('cta_button2')}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

