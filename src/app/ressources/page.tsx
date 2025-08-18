import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, User, Calendar, Tag, TrendingUp, Database, Zap } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';

export default function Ressources() {
  const articles = [
    {
      id: 'chatgpt-hubspot-workflows',
      title: 'ChatGPT et HubSpot : L\'automatisation conversationnelle révolutionnée',
      excerpt: 'Découvrez comment intégrer ChatGPT dans vos workflows HubSpot pour créer des expériences client personnalisées et automatisées.',
      content: `
        <h2>L'ère de l'automatisation conversationnelle</h2>
        <p>L'intégration de ChatGPT avec HubSpot marque un tournant dans l'automatisation marketing. Cette synergie permet de créer des interactions client plus naturelles et personnalisées à grande échelle.</p>
        
        <h3>Les nouvelles possibilités offertes</h3>
        <ul>
          <li><strong>Génération de contenu dynamique :</strong> Emails personnalisés en temps réel selon le profil client</li>
          <li><strong>Chatbots intelligents :</strong> Conversations naturelles avec compréhension contextuelle</li>
          <li><strong>Qualification automatique :</strong> Analyse des interactions pour scorer les prospects</li>
          <li><strong>Résumés automatiques :</strong> Synthèse des appels et réunions directement dans HubSpot</li>
        </ul>
        
        <h3>Cas d'usage concrets</h3>
        <p>Nos clients utilisent cette intégration pour :</p>
        <ul>
          <li>Générer des propositions commerciales personnalisées automatiquement</li>
          <li>Créer des séquences d'emails adaptatifs selon les réponses prospects</li>
          <li>Analyser le sentiment client dans les tickets de support</li>
          <li>Produire des rapports d'activité intelligents pour les managers</li>
        </ul>
        
        <h3>ROI et performances</h3>
        <p>Les entreprises observent :</p>
        <ul>
          <li><strong>+65% d'engagement</strong> sur les emails personnalisés IA</li>
          <li><strong>-40% de temps</strong> de création de contenu marketing</li>
          <li><strong>+80% de satisfaction</strong> sur les interactions chatbot</li>
          <li><strong>+120% de conversion</strong> sur les landing pages optimisées IA</li>
        </ul>
        
        <blockquote>
          "L'intégration ChatGPT-HubSpot nous a permis de personnaliser nos 10 000 emails mensuels en quelques clics. Le taux d'ouverture a bondi de 45%."
        </blockquote>
      `,
      author: 'Équipe HubEasy',
      date: '12 Janvier 2024',
      readTime: '7 min',
      category: 'IA Conversationnelle',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      tags: ['ChatGPT', 'IA Conversationnelle', 'Workflows', 'Personnalisation'],
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'privacy-first-marketing',
      title: 'Marketing Privacy-First : HubSpot à l\'ère post-cookies',
      excerpt: 'Comment adapter votre stratégie marketing HubSpot aux nouvelles réglementations sur la vie privée tout en maintenant l\'efficacité.',
      content: `
        <h2>La fin des cookies tiers : une opportunité</h2>
        <p>La disparition progressive des cookies tiers et le renforcement des réglementations RGPD transforment le marketing digital. HubSpot propose des solutions innovantes pour maintenir la performance tout en respectant la vie privée.</p>
        
        <h3>Les défis du marketing sans cookies</h3>
        <ul>
          <li><strong>Attribution difficile :</strong> Traçabilité limitée du parcours client</li>
          <li><strong>Ciblage restreint :</strong> Moins de données pour la personnalisation</li>
          <li><strong>Mesure complexe :</strong> ROI plus difficile à calculer</li>
          <li><strong>Conformité exigée :</strong> Respect strict des consentements</li>
        </ul>
        
        <h3>Solutions HubSpot pour le privacy-first</h3>
        <p>Notre approche combine :</p>
        <ul>
          <li><strong>First-party data :</strong> Collecte éthique via formulaires intelligents</li>
          <li><strong>Consent management :</strong> Gestion automatisée des préférences RGPD</li>
          <li><strong>Server-side tracking :</strong> Mesure précise sans cookies</li>
          <li><strong>IA prédictive :</strong> Modélisation comportementale avec données limitées</li>
        </ul>
        
        <h3>Stratégies gagnantes</h3>
        <p>Les entreprises performantes adoptent :</p>
        <ul>
          <li>Progressive profiling pour enrichir graduellement les données</li>
          <li>Value exchange : contenu premium contre informations</li>
          <li>Communautés et programmes de fidélité</li>
          <li>Attribution modeling basé sur l'IA</li>
        </ul>
        
        <h3>Résultats mesurés</h3>
        <ul>
          <li><strong>+90% de conformité RGPD</strong> avec nos configurations</li>
          <li><strong>+35% de first-party data</strong> collectée éthiquement</li>
          <li><strong>Maintien de 85%</strong> de la performance pré-cookies</li>
          <li><strong>+60% de confiance client</strong> grâce à la transparence</li>
        </ul>
        
        <blockquote>
          "Grâce à HubEasy, nous avons transformé les contraintes RGPD en avantage concurrentiel. Nos clients nous font plus confiance."
        </blockquote>
      `,
      author: 'Équipe HubEasy',
      date: '10 Janvier 2024',
      readTime: '9 min',
      category: 'Privacy & Compliance',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      tags: ['RGPD', 'Privacy-First', 'Cookies', 'Compliance'],
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'predictive-lead-scoring',
      title: 'Lead Scoring Prédictif : L\'IA qui révolutionne la qualification',
      excerpt: 'Comment l\'intelligence artificielle transforme le lead scoring traditionnel en système prédictif ultra-performant dans HubSpot.',
      content: `
        <h2>Au-delà du scoring traditionnel</h2>
        <p>Le lead scoring classique basé sur des règles statiques montre ses limites. L'IA prédictive de HubSpot, enrichie par nos algorithmes propriétaires, révolutionne la qualification des prospects.</p>
        
        <h3>Limites du scoring traditionnel</h3>
        <ul>
          <li><strong>Règles rigides :</strong> Incapacité à s'adapter aux changements comportementaux</li>
          <li><strong>Biais humains :</strong> Pondération subjective des critères</li>
          <li><strong>Données limitées :</strong> Utilisation partielle des signaux disponibles</li>
          <li><strong>Maintenance lourde :</strong> Ajustements manuels constants requis</li>
        </ul>
        
        <h3>L'approche IA prédictive</h3>
        <p>Notre solution analyse :</p>
        <ul>
          <li><strong>Signaux comportementaux :</strong> Navigation, engagement, timing des interactions</li>
          <li><strong>Données firmographiques :</strong> Secteur, taille, technologie utilisée</li>
          <li><strong>Patterns temporels :</strong> Saisonnalité et cycles d'achat</li>
          <li><strong>Signaux d'intention :</strong> Recherches, téléchargements, interactions sociales</li>
        </ul>
        
        <h3>Machine Learning en action</h3>
        <p>Les algorithmes apprennent continuellement de :</p>
        <ul>
          <li>Historique des conversions réussies</li>
          <li>Patterns des clients perdus</li>
          <li>Évolution des comportements sectoriels</li>
          <li>Feedback des équipes commerciales</li>
        </ul>
        
        <h3>Résultats exceptionnels</h3>
        <p>Nos clients observent :</p>
        <ul>
          <li><strong>+150% de précision</strong> vs scoring traditionnel</li>
          <li><strong>+85% de conversion</strong> sur les leads "hot" identifiés</li>
          <li><strong>-60% de temps perdu</strong> sur des prospects non qualifiés</li>
          <li><strong>+200% de ROI</strong> sur les actions commerciales</li>
        </ul>
        
        <h3>Implémentation technique</h3>
        <p>Notre processus inclut :</p>
        <ul>
          <li>Audit des données historiques et nettoyage</li>
          <li>Configuration des modèles ML personnalisés</li>
          <li>Intégration avec les workflows existants</li>
          <li>Formation des équipes et monitoring continu</li>
        </ul>
        
        <blockquote>
          "Le lead scoring IA nous a permis d'identifier 3x plus de prospects chauds. Notre équipe commerciale ne perd plus de temps sur des leads froids."
        </blockquote>
      `,
      author: 'Équipe HubEasy',
      date: '6 Janvier 2024',
      readTime: '11 min',
      category: 'IA Prédictive',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      tags: ['Lead Scoring', 'IA Prédictive', 'Machine Learning', 'Qualification'],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'real-time-personalization',
      title: 'Personnalisation Temps Réel : L\'expérience client réinventée',
      excerpt: 'Comment créer des expériences web ultra-personnalisées qui s\'adaptent en temps réel au comportement de chaque visiteur.',
      content: `
        <h2>L'ère de l'hyper-personnalisation</h2>
        <p>La personnalisation temps réel transforme chaque visite web en expérience unique. Grâce à l'IA de HubSpot et nos algorithmes propriétaires, chaque visiteur voit un contenu parfaitement adapté à son profil et ses intentions.</p>
        
        <h3>Au-delà de la personnalisation statique</h3>
        <ul>
          <li><strong>Adaptation instantanée :</strong> Contenu qui évolue selon le comportement en cours</li>
          <li><strong>Prédiction d'intention :</strong> Anticipation des besoins avant qu'ils soient exprimés</li>
          <li><strong>Contextualisation poussée :</strong> Prise en compte de l'historique complet</li>
          <li><strong>Optimisation continue :</strong> Apprentissage automatique des préférences</li>
        </ul>
        
        <h3>Technologies mises en œuvre</h3>
        <p>Notre stack technique combine :</p>
        <ul>
          <li><strong>Smart Content HubSpot :</strong> Règles de personnalisation avancées</li>
          <li><strong>APIs temps réel :</strong> Données comportementales instantanées</li>
          <li><strong>Machine Learning :</strong> Prédiction des préférences utilisateur</li>
          <li><strong>A/B testing automatique :</strong> Optimisation continue des variantes</li>
        </ul>
        
        <h3>Cas d'usage performants</h3>
        <p>Exemples d'implémentations réussies :</p>
        <ul>
          <li>E-commerce : Recommandations produits en temps réel</li>
          <li>SaaS : Démonstrations adaptées au secteur du visiteur</li>
          <li>Services : Études de cas pertinentes selon la problématique</li>
          <li>Formation : Parcours d'apprentissage personnalisés</li>
        </ul>
        
        <h3>Métriques d'impact</h3>
        <p>Résultats moyens observés :</p>
        <ul>
          <li><strong>+180% d'engagement</strong> sur les pages personnalisées</li>
          <li><strong>+95% de temps passé</strong> sur le site</li>
          <li><strong>+140% de conversion</strong> sur les CTA adaptés</li>
          <li><strong>+220% de leads qualifiés</strong> générés</li>
        </ul>
        
        <h3>Défis techniques résolus</h3>
        <p>Notre expertise permet de surmonter :</p>
        <ul>
          <li>Latence des APIs et cache intelligent</li>
          <li>Gestion des données RGPD en temps réel</li>
          <li>Scalabilité pour le trafic important</li>
          <li>Fallback gracieux en cas d'erreur</li>
        </ul>
        
        <blockquote>
          "La personnalisation temps réel a transformé notre site en conseiller virtuel. Chaque visiteur a l'impression d'une expérience sur-mesure."
        </blockquote>
      `,
      author: 'Équipe HubEasy',
      date: '4 Janvier 2024',
      readTime: '10 min',
      category: 'Personnalisation',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      tags: ['Personnalisation', 'Temps Réel', 'UX', 'Conversion'],
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 'data-clean-rooms',
      title: 'Data Clean Rooms : Collaboration sécurisée entre entreprises',
      excerpt: 'Découvrez comment les Data Clean Rooms révolutionnent le partage de données entre partenaires tout en préservant la confidentialité.',
      content: `
        <h2>La collaboration data sans compromis</h2>
        <p>Les Data Clean Rooms émergent comme la solution pour partager des insights entre entreprises partenaires sans exposer les données sensibles. Cette technologie révolutionne les partenariats B2B.</p>
        
        <h3>Qu'est-ce qu'une Data Clean Room ?</h3>
        <ul>
          <li><strong>Environnement sécurisé :</strong> Espace neutre pour analyser des données combinées</li>
          <li><strong>Confidentialité préservée :</strong> Aucune donnée brute n'est partagée</li>
          <li><strong>Insights agrégés :</strong> Seuls les résultats d'analyses sont accessibles</li>
          <li><strong>Contrôle granulaire :</strong> Permissions précises sur chaque dataset</li>
        </ul>
        
        <h3>Cas d'usage en B2B</h3>
        <p>Applications concrètes que nous implémentons :</p>
        <ul>
          <li><strong>Co-marketing :</strong> Campagnes communes sans partager les bases clients</li>
          <li><strong>Attribution cross-canal :</strong> Mesure d'impact sur plusieurs touchpoints</li>
          <li><strong>Lookalike audiences :</strong> Création de segments sans exposer les profils</li>
          <li><strong>Mesure d'efficacité :</strong> ROI des partenariats en temps réel</li>
        </ul>
        
        <h3>Intégration avec HubSpot</h3>
        <p>Notre solution connecte :</p>
        <ul>
          <li>APIs HubSpot pour l'extraction sécurisée des données</li>
          <li>Algorithmes de hachage pour l'anonymisation</li>
          <li>Moteurs d'analyse SQL dans l'environnement sécurisé</li>
          <li>Dashboards de résultats intégrés dans HubSpot</li>
        </ul>
        
        <h3>Avantages concurrentiels</h3>
        <p>Les entreprises utilisant les Data Clean Rooms observent :</p>
        <ul>
          <li><strong>+300% d'efficacité</strong> sur les campagnes partenaires</li>
          <li><strong>100% de conformité</strong> RGPD sur le partage de données</li>
          <li><strong>+150% de ROI</strong> sur les investissements co-marketing</li>
          <li><strong>-80% de temps</strong> pour analyser les performances croisées</li>
        </ul>
        
        <h3>Technologies sous-jacentes</h3>
        <p>Notre stack technique inclut :</p>
        <ul>
          <li>Chiffrement homomorphe pour les calculs sur données chiffrées</li>
          <li>Differential privacy pour l'anonymisation garantie</li>
          <li>Secure multi-party computation (SMPC)</li>
          <li>Audit trails complets pour la traçabilité</li>
        </ul>
        
        <blockquote>
          "Les Data Clean Rooms nous ont permis de collaborer avec nos partenaires distributeurs sans compromettre nos données clients. Les insights sont révolutionnaires."
        </blockquote>
      `,
      author: 'Équipe HubEasy',
      date: '2 Janvier 2024',
      readTime: '12 min',
      category: 'Data Collaboration',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      tags: ['Data Clean Rooms', 'Sécurité', 'Partenariats', 'Privacy'],
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      id: 'voice-of-customer-ai',
      title: 'Voice of Customer IA : Transformer le feedback en insights actionnables',
      excerpt: 'Comment l\'IA analyse automatiquement tous vos feedbacks clients pour identifier les opportunités d\'amélioration et d\'innovation.',
      content: `
        <h2>Écouter à l'échelle avec l'IA</h2>
        <p>L'analyse automatisée du Voice of Customer (VoC) transforme des milliers de feedbacks dispersés en insights stratégiques actionnables. L'IA permet enfin d'écouter tous vos clients simultanément.</p>
        
        <h3>Sources de données VoC</h3>
        <ul>
          <li><strong>Tickets support :</strong> Analyse automatique des problématiques récurrentes</li>
          <li><strong>Enquêtes NPS :</strong> Traitement des commentaires qualitatifs</li>
          <li><strong>Avis en ligne :</strong> Monitoring des plateformes externes</li>
          <li><strong>Réseaux sociaux :</strong> Sentiment analysis en temps réel</li>
          <li><strong>Appels commerciaux :</strong> Transcription et analyse des objections</li>
        </ul>
        
        <h3>Capacités IA déployées</h3>
        <p>Notre solution analyse :</p>
        <ul>
          <li><strong>Sentiment analysis :</strong> Détection automatique des émotions</li>
          <li><strong>Topic modeling :</strong> Identification des thèmes récurrents</li>
          <li><strong>Intent recognition :</strong> Compréhension des besoins sous-jacents</li>
          <li><strong>Trend detection :</strong> Évolution des préoccupations dans le temps</li>
        </ul>
        
        <h3>Insights automatisés</h3>
        <p>L'IA génère automatiquement :</p>
        <ul>
          <li>Rapports de satisfaction par segment client</li>
          <li>Alertes sur les problèmes émergents</li>
          <li>Recommandations d'amélioration produit</li>
          <li>Opportunités de nouvelles fonctionnalités</li>
          <li>Prédictions de churn basées sur le sentiment</li>
        </ul>
        
        <h3>Intégration HubSpot native</h3>
        <p>Tous les insights sont directement intégrés dans :</p>
        <ul>
          <li>Fiches contacts avec score de satisfaction</li>
          <li>Workflows automatiques de retention</li>
          <li>Dashboards exécutifs temps réel</li>
          <li>Alertes pour les équipes concernées</li>
        </ul>
        
        <h3>ROI et impact business</h3>
        <p>Nos clients mesurent :</p>
        <ul>
          <li><strong>+45% de rétention client</strong> grâce aux actions préventives</li>
          <li><strong>-60% de temps d'analyse</strong> des feedbacks</li>
          <li><strong>+80% de satisfaction</strong> suite aux améliorations identifiées</li>
          <li><strong>+120% d'innovation produit</strong> basée sur les insights clients</li>
        </ul>
        
        <h3>Cas d'usage sectoriels</h3>
        <p>Applications spécialisées :</p>
        <ul>
          <li><strong>SaaS :</strong> Priorisation roadmap produit basée sur le VoC</li>
          <li><strong>E-commerce :</strong> Optimisation UX selon les frictions identifiées</li>
          <li><strong>Services :</strong> Amélioration continue des processus client</li>
          <li><strong>Manufacturing :</strong> Innovation produit guidée par l'usage réel</li>
        </ul>
        
        <blockquote>
          "L'analyse IA de notre Voice of Customer nous a révélé des insights que nous n'aurions jamais découverts manuellement. Notre roadmap produit est maintenant 100% customer-centric."
        </blockquote>
      `,
      author: 'Équipe HubEasy',
      date: '30 Décembre 2023',
      readTime: '9 min',
      category: 'Voice of Customer',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      tags: ['Voice of Customer', 'Sentiment Analysis', 'Feedback', 'IA'],
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      id: 'doublons-data-marketing',
      title: 'Les doublons, la phobie du Data Marketing',
      excerpt: 'Comment l\'IA révolutionne la détection et la fusion des doublons dans vos bases de données CRM pour un marketing plus efficace.',
      content: `
        <h2>Le cauchemar des équipes marketing</h2>
        <p>Les doublons dans les bases de données représentent l'un des défis majeurs du marketing moderne. Selon une étude récente, 30% des bases de données B2B contiennent des doublons, impactant directement le ROI des campagnes.</p>
        
        <h3>L'impact des doublons sur vos performances</h3>
        <ul>
          <li><strong>Gaspillage budgétaire :</strong> Envoi de campagnes multiples au même prospect</li>
          <li><strong>Expérience client dégradée :</strong> Messages incohérents et répétitifs</li>
          <li><strong>Données faussées :</strong> Métriques et analyses erronées</li>
          <li><strong>Perte de confiance :</strong> Image de marque détériorée</li>
        </ul>
        
        <h3>Comment l'IA transforme la gestion des doublons</h3>
        <p>Les algorithmes d'intelligence artificielle modernes, intégrés dans HubSpot et Salesforce, permettent désormais :</p>
        <ul>
          <li><strong>Détection intelligente :</strong> Reconnaissance de doublons même avec des variations (Jean Dupont vs J. Dupont)</li>
          <li><strong>Fusion automatique :</strong> Consolidation des données en préservant l'historique</li>
          <li><strong>Prévention proactive :</strong> Blocage de la création de nouveaux doublons</li>
          <li><strong>Scoring de qualité :</strong> Évaluation continue de la propreté des données</li>
        </ul>
        
        <h3>Notre approche chez HubEasy</h3>
        <p>Nous mettons en place des processus automatisés qui combinent :</p>
        <ul>
          <li>Règles de déduplication personnalisées selon votre secteur</li>
          <li>Workflows d'enrichissement automatique des données</li>
          <li>Monitoring continu avec alertes en temps réel</li>
          <li>Formation des équipes aux bonnes pratiques</li>
        </ul>
        
        <blockquote>
          "Depuis l'implémentation de notre solution anti-doublons IA, nos clients ont vu leur taux de conversion email augmenter de 45% en moyenne."
        </blockquote>
      `,
      author: 'Équipe HubEasy',
      date: '15 Janvier 2024',
      readTime: '8 min',
      category: 'Data Management',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      tags: ['IA', 'Data Quality', 'Marketing Automation', 'CRM'],
      gradient: 'from-red-500 to-pink-500'
    },
    {
      id: 'sage-hubspot-integration',
      title: 'Sage et HubSpot, comment ça fonctionne ensemble ?',
      excerpt: 'Découvrez comment l\'intégration Sage-HubSpot révolutionne la gestion financière et commerciale avec l\'aide de l\'IA prédictive.',
      content: `
        <h2>L'alliance parfaite entre finance et commercial</h2>
        <p>L'intégration entre Sage (ERP) et HubSpot (CRM) représente un enjeu majeur pour les entreprises cherchant à unifier leurs processus financiers et commerciaux. Cette synergie, optimisée par l'IA, transforme la façon dont les équipes collaborent.</p>
        
        <h3>Les défis traditionnels</h3>
        <ul>
          <li><strong>Silos de données :</strong> Informations client dispersées entre systèmes</li>
          <li><strong>Ressaisie manuelle :</strong> Erreurs et perte de temps</li>
          <li><strong>Délais de facturation :</strong> Processus lents et inefficaces</li>
          <li><strong>Visibilité limitée :</strong> Manque de vue d'ensemble sur le cycle client</li>
        </ul>
        
        <h3>Notre solution d'intégration intelligente</h3>
        <p>Grâce à notre connecteur propriétaire et aux capacités IA, nous synchronisons :</p>
        <ul>
          <li><strong>Clients et prospects :</strong> Synchronisation bidirectionnelle en temps réel</li>
          <li><strong>Devis et factures :</strong> Génération automatique depuis HubSpot</li>
          <li><strong>Paiements :</strong> Mise à jour automatique du statut dans le CRM</li>
          <li><strong>Analytique prédictive :</strong> Prévision des encaissements et risques clients</li>
        </ul>
        
        <h3>L'IA au service de votre trésorerie</h3>
        <p>Les algorithmes d'apprentissage automatique analysent :</p>
        <ul>
          <li>Historique de paiement pour prédire les retards</li>
          <li>Comportement client pour optimiser les conditions commerciales</li>
          <li>Saisonnalité pour anticiper les besoins de trésorerie</li>
          <li>Risques de crédit pour sécuriser les ventes</li>
        </ul>
        
        <h3>Bénéfices mesurés chez nos clients</h3>
        <ul>
          <li><strong>-60% de temps</strong> sur la gestion administrative</li>
          <li><strong>+25% de cash-flow</strong> grâce à la prédiction IA</li>
          <li><strong>99.8% de précision</strong> dans la synchronisation des données</li>
          <li><strong>ROI de 300%</strong> dès la première année</li>
        </ul>
        
        <blockquote>
          "L'intégration Sage-HubSpot avec l'IA prédictive nous a permis de réduire nos DSO de 15 jours et d'améliorer notre relation client."
          <cite>- Directeur Financier, Groupe industriel</cite>
        </blockquote>
      `,
      author: 'Équipe HubEasy',
      date: '8 Janvier 2024',
      readTime: '10 min',
      category: 'Intégrations ERP',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      tags: ['Sage', 'ERP', 'Facturation', 'IA Prédictive'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'salesforce-hubspot-marketing',
      title: 'Pourquoi garder Salesforce et rajouter HubSpot Marketing Hub ?',
      excerpt: 'L\'architecture hybride Salesforce-HubSpot optimisée par l\'IA offre le meilleur des deux mondes pour vos équipes sales et marketing.',
      content: `
        <h2>Le meilleur des deux mondes</h2>
        <p>Beaucoup d'entreprises se demandent s'il faut migrer complètement de Salesforce vers HubSpot ou maintenir une architecture hybride. Notre expérience montre que la combinaison Salesforce (Sales) + HubSpot Marketing Hub, optimisée par l'IA, offre souvent les meilleurs résultats.</p>
        
        <h3>Pourquoi conserver Salesforce pour les ventes ?</h3>
        <ul>
          <li><strong>Processus complexes :</strong> Gestion avancée des cycles de vente B2B longs</li>
          <li><strong>Personnalisation poussée :</strong> Workflows métier spécifiques déjà configurés</li>
          <li><strong>Intégrations existantes :</strong> Écosystème d'applications connectées</li>
          <li><strong>Formation des équipes :</strong> Expertise Salesforce déjà acquise</li>
          <li><strong>Conformité :</strong> Certifications sectorielles (finance, santé...)</li>
        </ul>
        
        <h3>Pourquoi ajouter HubSpot Marketing Hub ?</h3>
        <ul>
          <li><strong>Facilité d'usage :</strong> Interface intuitive pour les marketeurs</li>
          <li><strong>Inbound marketing :</strong> Outils natifs de génération de leads</li>
          <li><strong>Automatisation intelligente :</strong> IA intégrée pour l'optimisation</li>
          <li><strong>Coût optimisé :</strong> Tarification plus accessible que Pardot</li>
          <li><strong>Innovation continue :</strong> Nouvelles fonctionnalités fréquentes</li>
        </ul>
        
        <h3>L'IA comme pont entre les deux systèmes</h3>
        <p>Notre solution d'intégration utilise l'intelligence artificielle pour :</p>
        <ul>
          <li><strong>Lead scoring unifié :</strong> Algorithmes cross-plateforme</li>
          <li><strong>Attribution marketing :</strong> Traçabilité complète du ROI</li>
          <li><strong>Prédiction de conversion :</strong> IA pour qualifier les prospects</li>
          <li><strong>Personnalisation dynamique :</strong> Contenu adapté selon le profil Salesforce</li>
        </ul>
        
        <h3>Architecture technique optimale</h3>
        <p>Notre approche technique garantit :</p>
        <ul>
          <li>Synchronisation bidirectionnelle en temps réel</li>
          <li>Mapping intelligent des champs avec IA</li>
          <li>Gestion des conflits automatisée</li>
          <li>Monitoring proactif des performances</li>
          <li>Backup et récupération automatiques</li>
        </ul>
        
        <h3>Résultats concrets</h3>
        <p>Nos clients en architecture hybride observent :</p>
        <ul>
          <li><strong>+40% de leads qualifiés</strong> grâce à HubSpot Marketing</li>
          <li><strong>-30% de cycle de vente</strong> avec l'IA prédictive</li>
          <li><strong>+60% d'adoption</strong> par les équipes marketing</li>
          <li><strong>ROI de 250%</strong> sur l'investissement HubSpot</li>
        </ul>
        
        <blockquote>
          "Garder Salesforce pour nos ventes complexes tout en ajoutant HubSpot Marketing nous a donné une agilité incroyable. L'IA fait le lien parfaitement."
          <cite>- VP Sales & Marketing, Scale-up FinTech</cite>
        </blockquote>
        
        <h3>Notre accompagnement</h3>
        <p>En tant qu'experts des deux plateformes, nous vous accompagnons pour :</p>
        <ul>
          <li>Audit de votre configuration Salesforce actuelle</li>
          <li>Design de l'architecture hybride optimale</li>
          <li>Implémentation avec tests en sandbox</li>
          <li>Formation des équipes sur les nouveaux processus</li>
          <li>Support continu et optimisations IA</li>
        </ul>
      `,
      author: 'Équipe HubEasy',
      date: '3 Janvier 2024',
      readTime: '12 min',
      category: 'Architecture Hybride',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
      tags: ['Salesforce', 'HubSpot', 'Marketing Hub', 'Architecture'],
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
              <span className="text-red-500">Ressources</span> & Guides
            </h1>
            <p className="text-2xl font-light text-gray-600 max-w-3xl mx-auto mb-12">
              Découvrez nos articles d'experts sur les intégrations HubSpot et l'IA
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
                        Lire l'article
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
              Restez <span className="text-red-500">informé</span>
            </h2>
            <p className="text-xl font-light text-gray-600 mb-12 max-w-2xl mx-auto">
              Recevez nos derniers articles et guides d'experts directement dans votre boîte mail.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Votre adresse email"
                  className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:border-red-500 focus:outline-none transition-colors duration-300 font-light"
                />
                <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-8 py-4 rounded-full transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                  S'abonner
                </Button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                Pas de spam, désabonnement en un clic.
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
              Besoin d'<span className="text-red-500">expertise</span> ?
            </h2>
            <p className="text-xl font-light text-gray-600 mb-12 max-w-2xl mx-auto">
              Nos experts sont là pour vous accompagner dans vos projets d'intégration HubSpot.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-12 py-6 rounded-full text-lg transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                Planifier un appel expert
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-red-500 text-red-500 hover:bg-gradient-to-r hover:from-red-500 hover:via-red-600 hover:to-pink-500 hover:text-white hover:border-transparent font-light px-12 py-6 rounded-full text-lg transition-all duration-500 hover:scale-105"
              >
                Télécharger nos guides
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
