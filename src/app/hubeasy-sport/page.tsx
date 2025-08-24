import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Trophy, 
  Users, 
  TrendingUp, 
  Zap, 
  Target, 
  BarChart3, 
  CreditCard, 
  ShoppingBag, 
  Building2, 
  Share2,
  Eye,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Heart,
  Calendar,
  Mail,
  Phone
} from 'lucide-react';

const dataSourcesData = [
  {
    icon: CreditCard,
    title: 'Billetterie',
    description: 'Historique d\'achats, préférences de placement, fréquence de venue',
    metrics: ['Revenus par fan', 'Taux de fidélité', 'Prédiction d\'achat'],
    color: 'blue'
  },
  {
    icon: ShoppingBag,
    title: 'Merchandising',
    description: 'Achats de produits dérivés, tailles préférées, catégories favorites',
    metrics: ['Panier moyen', 'Produits populaires', 'Saisonnalité'],
    color: 'green'
  },
  {
    icon: Building2,
    title: 'Prospection B2B',
    description: 'Interactions avec sponsors, partenaires commerciaux, entreprises locales',
    metrics: ['Pipeline sponsors', 'Valeur partenariats', 'Conversion leads'],
    color: 'purple'
  },
  {
    icon: Share2,
    title: 'Réseaux sociaux',
    description: 'Engagement, partages, commentaires, mentions du club',
    metrics: ['Reach organique', 'Taux d\'engagement', 'Sentiment fans'],
    color: 'orange'
  }
];

const benefits = [
  {
    icon: Target,
    title: 'Vision 360° du fan',
    description: 'Chaque supporter devient un profil unifié avec son historique complet d\'interactions avec le club.',
    details: [
      'Profil complet consolidé automatiquement',
      'Historique d\'achats et d\'engagements',
      'Préférences et comportements analysés'
    ]
  },
  {
    icon: Sparkles,
    title: 'Personnalisation automatique',
    description: 'Propositions ciblées selon le profil : abonnements, merchandising, expériences VIP.',
    details: [
      'Recommandations produits intelligentes',
      'Offres personnalisées automatiques',
      'Communications adaptées au profil'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Croissance des revenus',
    description: 'Augmentation du panier moyen et de la fidélité grâce à une approche data-driven.',
    details: [
      'Optimisation des prix dynamique',
      'Cross-selling et up-selling automatisés',
      'Prédiction de la valeur vie client'
    ]
  },
  {
    icon: Heart,
    title: 'Fidélisation renforcée',
    description: 'Création d\'une relation privilégiée avec chaque fan grâce à des interactions pertinentes.',
    details: [
      'Programmes de fidélité personnalisés',
      'Communications au bon moment',
      'Expériences fan sur-mesure'
    ]
  }
];

const automationExamples = [
  {
    trigger: 'Fan achète un maillot',
    action: 'Proposition automatique d\'accessoires assortis + invitation match suivant',
    result: '+35% de ventes complémentaires'
  },
  {
    trigger: 'Supporter manque 3 matchs consécutifs',
    action: 'Campagne de réengagement avec offre spéciale',
    result: '+60% de retour en tribune'
  },
  {
    trigger: 'Entreprise locale visite le site',
    action: 'Séquence email automatique avec dossier sponsoring personnalisé',
    result: '+40% de réponses qualifiées'
  },
  {
    trigger: 'Fan très engagé sur réseaux sociaux',
    action: 'Invitation expérience VIP et programme ambassadeur',
    result: '+200% d\'engagement organique'
  }
];

const implementationSteps = [
  {
    step: '1',
    title: 'Audit de l\'écosystème data',
    description: 'Analyse de vos systèmes actuels et identification des sources de données',
    duration: '2 semaines',
    icon: Eye
  },
  {
    step: '2', 
    title: 'Intégration et unification',
    description: 'Connexion de tous vos outils dans HubSpot avec synchronisation automatique',
    duration: '4-6 semaines',
    icon: Zap
  },
  {
    step: '3',
    title: 'Automatisations intelligentes',
    description: 'Mise en place des workflows et scénarios de personnalisation',
    duration: '3-4 semaines', 
    icon: Target
  },
  {
    step: '4',
    title: 'Formation et optimisation',
    description: 'Formation de vos équipes et optimisation continue des performances',
    duration: 'En continu',
    icon: TrendingUp
  }
];

export default function HubEasySportPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hubeasy-sport-hero.jpg"
            alt="Équipe sportive célébrant une victoire"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-green-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center text-white">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center justify-center mb-8">
              <Trophy className="w-12 h-12 text-yellow-400 mr-4" />
              <h1 className="text-5xl md:text-7xl font-thin tracking-tight">
                HubEasy <span className="text-yellow-400 font-light">Sport</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Transformez chaque supporter en opportunité de croissance grâce à l'unification intelligente de vos données fan
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white font-light text-lg px-12 py-4 h-auto rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-500 hover:scale-105"
                >
                  Découvrir HubEasy Sport
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-white/20 backdrop-blur-md text-white border border-white/50 hover:bg-white hover:text-blue-900 font-light text-lg px-12 py-4 h-auto rounded-full transition-all duration-500 hover:scale-105"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Planifier un RDV
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Problématique */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-6">
              Le défi des clubs sportifs modernes
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Vos données fan sont éparpillées dans plusieurs systèmes. Impossible d'avoir une vision claire de chaque supporter pour maximiser sa valeur et son engagement.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataSourcesData.map((source, index) => (
              <AnimatedSection key={source.title} animation="fade-up" delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg p-6 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-${source.color}-100 rounded-xl mb-4`}>
                    <source.icon className={`w-6 h-6 text-${source.color}-600`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{source.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{source.description}</p>
                  <div className="space-y-1">
                    {source.metrics.map((metric, idx) => (
                      <div key={idx} className={`text-xs text-${source.color}-600 bg-${source.color}-50 px-2 py-1 rounded-full inline-block mr-1 mb-1`}>
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-right">
              <h2 className="text-base font-semibold leading-7 text-blue-600">La solution HubEasy Sport</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Une plateforme unique pour tous vos fans
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Nous unifions toutes vos données dans HubSpot pour créer un profil 360° de chaque supporter et automatiser vos opportunités de croissance.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Consolidation automatique des données fan',
                  'Segmentation intelligente par comportement',
                  'Automatisations personnalisées pour chaque profil',
                  'Dashboards en temps réel pour piloter votre croissance'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-500 rounded-3xl blur-xl opacity-30"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                  <div className="text-center mb-6">
                    <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900">Profil Fan Unifié</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium">Matchs assistés</span>
                      <span className="text-sm font-bold text-blue-600">23 cette saison</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium">Achats merchandising</span>
                      <span className="text-sm font-bold text-green-600">847€ total</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm font-medium">Engagement social</span>
                      <span className="text-sm font-bold text-orange-600">Très actif</span>
                    </div>
                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center text-yellow-800">
                        <Sparkles className="w-4 h-4 mr-2" />
                        <span className="text-xs font-medium">Recommandation automatique</span>
                      </div>
                      <p className="text-xs text-yellow-700 mt-1">Abonnement VIP + Maillot collector</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-6">
              Comment votre club gagne à unifier ses données
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Découvrez les avantages concrets d'une approche data-driven pour maximiser l'engagement et les revenus de vos supporters
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} animation="fade-up" delay={index * 150}>
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 mr-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl">
                        <benefit.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {benefit.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Exemples d'automatisations */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-6">
              Automatisations intelligentes en action
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Exemples concrets de scénarios automatisés qui transforment chaque interaction fan en opportunité de croissance
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {automationExamples.map((example, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 rounded-full p-2 mr-3">
                      <Zap className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">Déclencheur</h4>
                      <p className="text-sm text-gray-600">{example.trigger}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <div className="bg-green-100 rounded-full p-2 mr-3">
                      <Target className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">Action automatique</h4>
                      <p className="text-sm text-gray-600">{example.action}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-yellow-100 rounded-full p-2 mr-3">
                      <BarChart3 className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">Résultat mesurable</h4>
                      <p className="text-sm font-bold text-green-600">{example.result}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Notre expertise */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-thin mb-6">
              Pourquoi HubEasy Sport ?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Notre maîtrise technique d'intégration de systèmes HubSpot couplée à notre expérience en Marketing & Sales, tout ça boosté par notre connaissance de l'industrie du sport, nous met dans une position privilégiée pour accompagner les clubs de sports professionnels et semi-professionnels.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Expertise technique HubSpot',
                description: 'Maîtrise complète des intégrations complexes et des automatisations avancées pour l\'écosystème sportif'
              },
              {
                icon: TrendingUp,
                title: 'Expérience Marketing & Sales',
                description: 'Compréhension profonde des enjeux de conversion, fidélisation et croissance des revenus'
              },
              {
                icon: Trophy,
                title: 'Connaissance du sport business',
                description: 'Expertise spécifique des modèles économiques et des défis particuliers des organisations sportives'
              }
            ].map((expertise, index) => (
              <AnimatedSection key={expertise.title} animation="fade-up" delay={index * 150}>
                <div className="text-center p-8 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <expertise.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{expertise.title}</h3>
                  <p className="text-gray-300">{expertise.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Processus d'implémentation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-6">
              Comment nous procédons
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Un processus éprouvé en 4 étapes pour transformer votre gestion des données fan
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationSteps.map((step, index) => (
              <AnimatedSection key={step.step} animation="fade-up" delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-2">
                      Étape {step.step}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                  <div className="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                    {step.duration}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-green-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-thin mb-6">
              Prêt à transformer vos données fan en or ?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Découvrez comment HubEasy Sport peut révolutionner votre approche des supporters et maximiser vos revenus grâce à l'intelligence des données.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white font-light text-lg px-12 py-4 h-auto rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-500 hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Demander une démonstration
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-white/20 backdrop-blur-md text-white border border-white/50 hover:bg-white hover:text-blue-900 font-light text-lg px-12 py-4 h-auto rounded-full transition-all duration-500 hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Parler à un expert
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}