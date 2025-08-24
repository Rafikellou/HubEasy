import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, Share2, Mail, Bot, TrendingUp, Clock, Users, 
  Target, BarChart3, CheckCircle, ArrowRight, Zap,
  Brain, MessageSquare, Filter, Calendar, Globe,
  DollarSign, Timer, Star, ChevronDown
} from 'lucide-react';

const aiAgents = [
  {
    name: 'Lucie',
    role: 'Agent BDR (Business Developer)',
    description: 'Votre prospectrice automatisée qui enrichit votre pipeline de leads qualifiés',
    photo: '/lucie-photo.png',
    icon: Search,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    capabilities: [
      {
        title: 'Recherche intelligente de prospects',
        description: 'Scrape et analyse Internet pour identifier des prospects correspondant à votre ICP (Ideal Customer Profile)',
        value: 'Trouve 50-100 nouveaux prospects qualifiés par semaine'
      },
      {
        title: 'Enrichissement automatique des données',
        description: 'Complète automatiquement les fiches contacts dans HubSpot avec informations entreprise, secteur, taille, etc.',
        value: 'Économise 15h/semaine de recherche manuelle'
      },
      {
        title: 'Scoring et qualification',
        description: 'Évalue et note chaque prospect selon vos critères personnalisés',
        value: 'Augmente le taux de conversion de 35%'
      },
      {
        title: 'Veille concurrentielle',
        description: 'Surveille les mentions de vos concurrents pour identifier des opportunités',
        value: 'Détecte 20+ opportunités de switch par mois'
      }
    ],
    metrics: [
      { label: 'Temps économisé', value: '15h/semaine', icon: Clock },
      { label: 'Nouveaux leads', value: '+200/mois', icon: Users },
      { label: 'Taux de conversion', value: '+35%', icon: TrendingUp },
      { label: 'ROI moyen', value: '400%', icon: DollarSign }
    ]
  },
  {
    name: 'Théo',
    role: 'Community Manager IA',
    description: 'Votre expert en contenu qui booste votre visibilité et génère des leads organiques',
    photo: '/theo-photo.png',
    icon: Share2,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    capabilities: [
      {
        title: 'Création de contenu optimisé SEO',
        description: 'Génère automatiquement des posts LinkedIn, articles de blog et contenus réseaux sociaux',
        value: 'Produit 20 contenus optimisés par semaine'
      },
      {
        title: 'Publication programmée intelligente',
        description: 'Analyse les meilleurs moments pour publier selon votre audience et planifie automatiquement',
        value: 'Augmente l\'engagement de 60%'
      },
      {
        title: 'Optimisation pour les recherches Google',
        description: 'Utilise les mots-clés stratégiques pour améliorer votre référencement naturel',
        value: 'Améliore le ranking Google de 3 positions en moyenne'
      },
      {
        title: 'Génération de leads organiques',
        description: 'Attire naturellement des prospects grâce à du contenu de valeur',
        value: 'Génère 30-50 leads qualifiés par mois'
      }
    ],
    metrics: [
      { label: 'Contenus/semaine', value: '20 posts', icon: MessageSquare },
      { label: 'Engagement', value: '+60%', icon: Star },
      { label: 'Leads organiques', value: '40/mois', icon: Target },
      { label: 'ROI contenu', value: '300%', icon: BarChart3 }
    ]
  },
  {
    name: 'Anna',
    role: 'Secrétaire Intelligente',
    description: 'Votre assistante virtuelle qui filtre, analyse et répond à vos emails automatiquement',
    photo: '/anna-photo.png',
    icon: Mail,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    capabilities: [
      {
        title: 'Tri intelligent des emails',
        description: 'Filtre automatiquement les emails importants, spam, et classe par priorité',
        value: 'Traite 200+ emails par jour automatiquement'
      },
      {
        title: 'Réponses automatisées contextuelles',
        description: 'Répond automatiquement aux emails récurrents avec des réponses personnalisées',
        value: 'Répond à 70% des emails automatiquement'
      },
      {
        title: 'Planification intelligente',
        description: 'Gère votre calendrier et propose automatiquement des créneaux pour les RDV',
        value: 'Économise 10h/semaine de gestion administrative'
      },
      {
        title: 'Extraction d\'informations',
        description: 'Extrait les informations importantes des emails et les intègre dans HubSpot',
        value: 'Capture 100% des leads entrants automatiquement'
      }
    ],
    metrics: [
      { label: 'Emails traités', value: '200+/jour', icon: Mail },
      { label: 'Réponses auto', value: '70%', icon: Bot },
      { label: 'Temps économisé', value: '10h/semaine', icon: Timer },
      { label: 'Leads capturés', value: '100%', icon: Target }
    ]
  }
];

const pricingPlans = [
  { agents: '1 agent', price: '390€/mois', description: 'Idéal pour commencer avec un agent spécialisé' },
  { agents: '2 agents', price: '590€/mois', description: 'Combinaison optimale pour croissance', popular: true },
  { agents: '3 agents', price: '690€/mois', description: 'Solution complète pour automatisation totale' }
];

const benefits = [
  {
    icon: Clock,
    title: '25h économisées par semaine',
    description: 'Temps libéré pour vous concentrer sur la stratégie et les ventes'
  },
  {
    icon: TrendingUp,
    title: '+40% de croissance du CA',
    description: 'Augmentation moyenne du chiffre d\'affaires grâce à l\'automatisation'
  },
  {
    icon: Users,
    title: '+300 leads qualifiés/mois',
    description: 'Pipeline enrichi automatiquement avec des prospects de qualité'
  },
  {
    icon: DollarSign,
    title: 'ROI de 350% en moyenne',
    description: 'Retour sur investissement prouvé sur nos déploiements clients'
  }
];

export default function HubEasyAIPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl mr-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <span className="text-blue-300 font-medium">HubEasy AI</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-thin mb-6 leading-tight">
                Votre équipe IA
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">dédiée</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Lucie, Théo et Anna travaillent 24h/24 pour développer votre business. 
                Découvrez comment nos agents IA révolutionnent la prospection, le marketing et la gestion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#agents">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Découvrir nos agents
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg transition-all duration-300"
                  >
                    Demander une démo
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={200}>
              <div className="relative">
                <div className="grid grid-cols-3 gap-4">
                  {aiAgents.map((agent, index) => (
                    <div key={agent.name} className="text-center group">
                      <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:scale-110">
                        <Image
                          src={agent.photo}
                          alt={`${agent.name} - ${agent.role}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-sm font-semibold text-white">{agent.name}</h3>
                      <p className="text-xs text-gray-300">{agent.role.split(' ')[0]}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                    <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-white font-medium">Disponibles 24h/24, 7j/7</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Des résultats mesurables dès le premier mois
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nos agents IA génèrent un impact immédiat et quantifiable sur votre business
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Agents Section */}
      <section id="agents" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Rencontrez votre équipe IA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trois agents spécialisés qui révolutionnent votre façon de travailler
            </p>
          </AnimatedSection>

          <div className="space-y-24">
            {aiAgents.map((agent, index) => (
              <AnimatedSection key={agent.name} animation="fade-up" delay={index * 200}>
                <div className={`relative p-8 md:p-12 rounded-3xl ${agent.bgColor} ${agent.borderColor} border-2`}>
                  
                  {/* Agent Header */}
                  <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    <div className="lg:col-span-1 text-center lg:text-left">
                      <div className="relative w-32 h-32 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6">
                        <Image
                          src={agent.photo}
                          alt={`${agent.name} - ${agent.role}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{agent.name}</h3>
                      <p className="text-lg font-medium text-gray-700 mb-4">{agent.role}</p>
                      <p className="text-gray-600">{agent.description}</p>
                    </div>

                    <div className="lg:col-span-2">
                      {/* Metrics */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {agent.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="bg-white p-4 rounded-xl text-center shadow-md">
                            <metric.icon className="w-6 h-6 text-gray-500 mx-auto mb-2" />
                            <div className="text-xl font-bold text-gray-900">{metric.value}</div>
                            <div className="text-sm text-gray-600">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Capabilities */}
                      <div className="grid md:grid-cols-2 gap-6">
                        {agent.capabilities.map((capability, capIndex) => (
                          <div key={capIndex} className="bg-white p-6 rounded-xl shadow-md">
                            <h4 className="font-semibold text-gray-900 mb-2">{capability.title}</h4>
                            <p className="text-gray-600 text-sm mb-3">{capability.description}</p>
                            <div className="inline-flex items-center text-green-600 font-medium text-sm">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              {capability.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tarifs transparents
            </h2>
            <p className="text-xl text-gray-600">
              Choisissez le nombre d'agents selon vos besoins
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className={`relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Le plus populaire
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.agents}</h3>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{plan.price}</div>
                    <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                    <Link href="/contact">
                      <Button 
                        className={`w-full rounded-full py-3 transition-all duration-300 ${
                          plan.popular 
                            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                            : 'bg-gray-900 hover:bg-gray-800 text-white'
                        }`}
                      >
                        Choisir cette offre
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={400} className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Tous nos tarifs incluent la configuration, la formation et le support technique
            </p>
            <Link href="/tarifs">
              <Button variant="outline" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white rounded-full px-8 py-3">
                Voir tous les détails tarifaires
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comment ça fonctionne ?
            </h2>
            <p className="text-xl text-gray-600">
              De l'audit à la mise en production en 3 étapes simples
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Audit & Configuration',
                description: 'Nous analysons vos besoins et configurons les agents selon vos processus métier',
                duration: '1 semaine',
                icon: Search
              },
              {
                step: '02', 
                title: 'Déploiement & Formation',
                description: 'Mise en production des agents et formation de vos équipes à leur utilisation',
                duration: '1 semaine',
                icon: Zap
              },
              {
                step: '03',
                title: 'Optimisation Continue',
                description: 'Suivi des performances et optimisation continue pour maximiser les résultats',
                duration: 'En continu',
                icon: TrendingUp
              }
            ].map((step, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-300 mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="inline-flex items-center text-blue-600 font-medium">
                    <Clock className="w-4 h-4 mr-2" />
                    {step.duration}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à automatiser votre croissance ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Rejoignez les 100+ entreprises qui font confiance à nos agents IA pour développer leur business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Demander une démo gratuite
                </Button>
              </Link>
              <Link href="/tarifs">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-full text-lg transition-all duration-300"
                >
                  Voir les tarifs
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}