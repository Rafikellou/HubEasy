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
    id: 2,
    slug: "agence-hubspot-france-guide-2025",
    title: "Agence HubSpot France : Guide Complet 2025 pour Choisir la Meilleure",
    excerpt: "Découvrez comment choisir la meilleure agence HubSpot en France. Critères de sélection, tarifs, certifications et bonnes pratiques pour votre projet HubSpot en 2025.",
    author: "Équipe HubEasy",
    date: "2025-01-15",
    readTime: "8 min",
    category: "Agence HubSpot",
    image: "/images/hero-photo-hubeasy.jpg",
    searchTerm: "hubspot agency france",
    content: `
      <article class="article-content">
        <section>
          <h2 class="article-section-title">Pourquoi choisir une agence HubSpot en France ?</h2>
          <p class="article-paragraph">Avec plus de 100 000 entreprises utilisant HubSpot dans le monde, choisir la bonne agence HubSpot en France devient crucial pour réussir votre transformation digitale.</p>
          
          <p class="article-paragraph">Une agence HubSpot certifiée vous accompagne dans :</p>
          
          <ul class="article-list">
            <li class="article-list-item">L'implémentation et la configuration de HubSpot</li>
            <li class="article-list-item">La migration depuis votre ancien CRM</li>
            <li class="article-list-item">La formation de vos équipes</li>
            <li class="article-list-item">L'optimisation continue de vos processus</li>
          </ul>
          
          <div class="article-callout article-callout-important">
            <p class="article-callout-content"><strong>👉 En 2025, 73% des entreprises qui réussissent avec HubSpot travaillent avec une agence certifiée.</strong></p>
          </div>
        </section>
        
        <section>
          <h2 class="article-section-title">Les critères essentiels pour choisir votre agence HubSpot</h2>
          
          <div class="article-feature">
            <h3 class="article-feature-title">1. Certifications HubSpot officielles</h3>
            <p class="article-paragraph">Vérifiez que l'agence possède les certifications HubSpot officielles :</p>
            <ul class="article-list">
              <li class="article-list-item">HubSpot Partner Certification</li>
              <li class="article-list-item">HubSpot Solutions Partner</li>
              <li class="article-list-item">Certifications spécialisées (Marketing, Sales, Service)</li>
            </ul>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">2. Expérience sectorielle</h3>
            <p class="article-paragraph">Privilégiez une agence qui connaît votre secteur d'activité :</p>
            <ul class="article-list">
              <li class="article-list-item">B2B, B2C, E-commerce</li>
              <li class="article-list-item">PME, ETI, Grandes entreprises</li>
              <li class="article-list-item">Secteurs spécifiques (tech, finance, retail, etc.)</li>
            </ul>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">3. Références et cas clients</h3>
            <p class="article-paragraph">Demandez des références clients dans votre secteur avec des résultats concrets :</p>
            <ul class="article-list">
              <li class="article-list-item">ROI mesurable</li>
              <li class="article-list-item">Amélioration des performances</li>
              <li class="article-list-item">Témoignages clients</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 class="article-section-title">Tarifs des agences HubSpot en France</h2>
          <p class="article-paragraph">Les tarifs varient selon la complexité de votre projet et l'expérience de l'agence :</p>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Projets d'implémentation</h3>
            <ul class="article-list">
              <li class="article-list-item">Configuration basique : 5 000€ - 15 000€</li>
              <li class="article-list-item">Configuration avancée : 15 000€ - 35 000€</li>
              <li class="article-list-item">Configuration enterprise : 35 000€ - 75 000€</li>
            </ul>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Services récurrents</h3>
            <ul class="article-list">
              <li class="article-list-item">Support mensuel : 1 500€ - 5 000€/mois</li>
              <li class="article-list-item">Formation équipes : 2 000€ - 8 000€</li>
              <li class="article-list-item">Optimisation continue : 3 000€ - 10 000€/mois</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 class="article-section-title">Les erreurs à éviter lors du choix</h2>
          
          <ul class="article-list">
            <li class="article-list-item">Choisir uniquement sur le prix : une agence moins chère peut coûter plus cher à long terme</li>
            <li class="article-list-item">Négliger la formation : vos équipes doivent être autonomes</li>
            <li class="article-list-item">Oublier le support post-implémentation : HubSpot nécessite un accompagnement continu</li>
            <li class="article-list-item">Ne pas vérifier les certifications : assurez-vous de l'expertise réelle</li>
          </ul>
        </section>
        
        <section>
          <h2 class="article-section-title">Questions à poser à votre agence HubSpot</h2>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Questions techniques</h3>
            <ul class="article-list">
              <li class="article-list-item">Quelles intégrations avez-vous déjà réalisées ?</li>
              <li class="article-list-item">Comment gérez-vous la migration des données ?</li>
              <li class="article-list-item">Quelle est votre méthodologie d'implémentation ?</li>
            </ul>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Questions commerciales</h3>
            <ul class="article-list">
              <li class="article-list-item">Pouvez-vous me fournir des références dans mon secteur ?</li>
              <li class="article-list-item">Quel est votre processus de formation ?</li>
              <li class="article-list-item">Quel support proposez-vous après l'implémentation ?</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 class="article-section-title">Conclusion</h2>
          <p class="article-paragraph">Choisir la bonne agence HubSpot en France est un investissement stratégique qui déterminera le succès de votre projet.</p>
          
          <p class="article-paragraph">Les critères clés à retenir :</p>
          
          <ul class="article-list">
            <li class="article-list-item">Certifications HubSpot officielles</li>
            <li class="article-list-item">Expérience dans votre secteur</li>
            <li class="article-list-item">Références clients solides</li>
            <li class="article-list-item">Support et formation inclus</li>
          </ul>
          
          <div class="article-callout article-callout-important">
            <p class="article-callout-content"><strong>👉 Une agence HubSpot certifiée vous fait gagner en moyenne 6 mois sur votre projet et améliore vos chances de succès de 40%.</strong></p>
          </div>
        </section>
      </article>
    `
  },
  {
    id: 3,
    slug: "integrateur-hubspot-choisir-partenaire",
    title: "Intégrateur HubSpot : Comment Choisir le Bon Partenaire en 2025",
    excerpt: "Guide complet pour choisir le meilleur intégrateur HubSpot. Certifications, expérience, tarifs et critères de sélection pour réussir votre projet HubSpot.",
    author: "Équipe HubEasy",
    date: "2025-01-10",
    readTime: "7 min",
    category: "Intégrateur HubSpot",
    image: "/images/hero-photo-hubeasy.jpg",
    searchTerm: "hubspot integrator partner",
    content: `
      <article class="article-content">
        <section>
          <h2 class="article-section-title">Qu'est-ce qu'un intégrateur HubSpot ?</h2>
          <p class="article-paragraph">Un intégrateur HubSpot est un partenaire technique certifié qui vous accompagne dans l'implémentation, la configuration et l'optimisation de votre plateforme HubSpot.</p>
          
          <p class="article-paragraph">Ses missions principales :</p>
          
          <ul class="article-list">
            <li class="article-list-item">Configuration technique de HubSpot</li>
            <li class="article-list-item">Intégration avec vos outils existants</li>
            <li class="article-list-item">Migration des données depuis votre ancien CRM</li>
            <li class="article-list-item">Formation et support technique</li>
          </ul>
          
          <div class="article-callout article-callout-important">
            <p class="article-callout-content"><strong>👉 Un bon intégrateur HubSpot peut réduire votre temps d'implémentation de 60% et améliorer votre ROI de 35%.</strong></p>
          </div>
        </section>
        
        <section>
          <h2 class="article-section-title">Critères de sélection d'un intégrateur HubSpot</h2>
          
          <div class="article-feature">
            <h3 class="article-feature-title">1. Certifications HubSpot officielles</h3>
            <p class="article-paragraph">Vérifiez les certifications officielles :</p>
            <ul class="article-list">
              <li class="article-list-item">HubSpot Partner Certification</li>
              <li class="article-list-item">HubSpot Solutions Partner</li>
              <li class="article-list-item">Certifications techniques spécialisées</li>
            </ul>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">2. Expérience technique</h3>
            <p class="article-paragraph">Recherchez une expertise dans :</p>
            <ul class="article-list">
              <li class="article-list-item">Intégrations API complexes</li>
              <li class="article-list-item">Migration de données volumineuses</li>
              <li class="article-list-item">Automatisation avancée</li>
              <li class="article-list-item">Personnalisation HubSpot</li>
            </ul>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">3. Références clients</h3>
            <p class="article-paragraph">Demandez des cas clients similaires avec :</p>
            <ul class="article-list">
              <li class="article-list-item">Taille d'entreprise comparable</li>
              <li class="article-list-item">Secteur d'activité similaire</li>
              <li class="article-list-item">Défis techniques identiques</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 class="article-section-title">Types d'intégrateurs HubSpot</h2>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Intégrateur généraliste</h3>
            <p class="article-paragraph">Propose des services complets : implémentation, formation, support. Idéal pour les PME qui veulent un accompagnement global.</p>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Intégrateur spécialisé</h3>
            <p class="article-paragraph">Expert dans un domaine spécifique (e-commerce, B2B, marketing automation). Parfait pour des besoins techniques complexes.</p>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Intégrateur sectoriel</h3>
            <p class="article-paragraph">Connaît parfaitement votre secteur d'activité. Recommandé pour des industries avec des processus métier spécifiques.</p>
          </div>
        </section>
        
        <section>
          <h2 class="article-section-title">Tarifs des intégrateurs HubSpot</h2>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Projets d'intégration</h3>
            <ul class="article-list">
              <li class="article-list-item">Intégration simple : 3 000€ - 8 000€</li>
              <li class="article-list-item">Intégration complexe : 8 000€ - 25 000€</li>
              <li class="article-list-item">Intégration enterprise : 25 000€ - 50 000€</li>
            </ul>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Services récurrents</h3>
            <ul class="article-list">
              <li class="article-list-item">Support technique : 1 000€ - 3 000€/mois</li>
              <li class="article-list-item">Maintenance : 500€ - 1 500€/mois</li>
              <li class="article-list-item">Évolutions : 2 000€ - 8 000€/projet</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 class="article-section-title">Questions essentielles à poser</h2>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Questions techniques</h3>
            <ul class="article-list">
              <li class="article-list-item">Quelles intégrations avez-vous déjà réalisées ?</li>
              <li class="article-list-item">Comment gérez-vous la sécurité des données ?</li>
              <li class="article-list-item">Quelle est votre méthodologie de test ?</li>
              <li class="article-list-item">Proposez-vous une garantie sur vos intégrations ?</li>
            </ul>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Questions commerciales</h3>
            <ul class="article-list">
              <li class="article-list-item">Quel est votre délai de réponse moyen ?</li>
              <li class="article-list-item">Proposez-vous un support post-intégration ?</li>
              <li class="article-list-item">Comment gérez-vous les évolutions futures ?</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 class="article-section-title">Conclusion</h2>
          <p class="article-paragraph">Choisir le bon intégrateur HubSpot est crucial pour la réussite de votre projet. Privilégiez l'expertise technique, les certifications officielles et les références clients solides.</p>
          
          <div class="article-callout article-callout-important">
            <p class="article-callout-content"><strong>👉 Un intégrateur HubSpot expérimenté vous fait économiser en moyenne 40% sur votre projet et réduit les risques techniques de 70%.</strong></p>
          </div>
        </section>
      </article>
    `
  },
  {
    id: 4,
    slug: "migration-hubspot-guide-pratique",
    title: "Migration HubSpot : Guide Pratique Sans Perte de Données",
    excerpt: "Comment migrer vers HubSpot sans perdre vos données ? Guide étape par étape pour une migration réussie depuis votre ancien CRM vers HubSpot.",
    author: "Équipe HubEasy",
    date: "2025-01-05",
    readTime: "9 min",
    category: "Migration HubSpot",
    image: "/images/hero-photo-hubeasy.jpg",
    searchTerm: "hubspot migration guide",
    content: `
      <article class="article-content">
        <section>
          <h2 class="article-section-title">Pourquoi migrer vers HubSpot ?</h2>
          <p class="article-paragraph">La migration vers HubSpot est souvent motivée par le besoin d'une plateforme unifiée qui combine CRM, marketing automation et service client.</p>
          
          <p class="article-paragraph">Les avantages d'une migration HubSpot :</p>
          
          <ul class="article-list">
            <li class="article-list-item">Unification des données clients</li>
            <li class="article-list-item">Automatisation marketing avancée</li>
            <li class="article-list-item">Meilleure visibilité sur le parcours client</li>
            <li class="article-list-item">Interface utilisateur intuitive</li>
          </ul>
          
          <div class="article-callout article-callout-important">
            <p class="article-callout-content"><strong>👉 85% des entreprises qui migrent vers HubSpot voient une amélioration de leur ROI marketing dans les 6 premiers mois.</strong></p>
          </div>
        </section>
        
        <section>
          <h2 class="article-section-title">Étapes de migration HubSpot</h2>
          
          <div class="article-feature">
            <h3 class="article-feature-title">1. Audit de vos données existantes</h3>
            <p class="article-paragraph">Avant toute migration :</p>
            <ul class="article-list">
              <li class="article-list-item">Inventairez toutes vos données clients</li>
              <li class="article-list-item">Identifiez les doublons et données obsolètes</li>
              <li class="article-list-item">Définissez les champs essentiels à migrer</li>
              <li class="article-list-item">Nettoyez vos données avant migration</li>
            </ul>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">2. Configuration HubSpot</h3>
            <p class="article-paragraph">Préparez votre environnement HubSpot :</p>
            <ul class="article-list">
              <li class="article-list-item">Créez les propriétés personnalisées</li>
              <li class="article-list-item">Configurez les pipelines de vente</li>
              <li class="article-list-item">Définissez les segments clients</li>
              <li class="article-list-item">Paramétrez les workflows</li>
            </ul>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">3. Migration des données</h3>
            <p class="article-paragraph">Transférez vos données :</p>
            <ul class="article-list">
              <li class="article-list-item">Exportez depuis votre ancien CRM</li>
              <li class="article-list-item">Transformez les données au bon format</li>
              <li class="article-list-item">Importez par petits lots</li>
              <li class="article-list-item">Vérifiez l'intégrité des données</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 class="article-section-title">Outils de migration HubSpot</h2>
          
          <div class="article-feature">
            <h3 class="article-feature-title">HubSpot Import Tool</h3>
            <p class="article-paragraph">Outil natif HubSpot pour importer des contacts, entreprises et deals. Idéal pour des migrations simples avec moins de 10 000 enregistrements.</p>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">HubSpot API</h3>
            <p class="article-paragraph">Pour des migrations complexes avec des données volumineuses ou des transformations spécifiques. Nécessite des compétences techniques.</p>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Outils tiers spécialisés</h3>
            <p class="article-paragraph">Solutions comme Zapier, Integromat ou des intégrateurs spécialisés pour des migrations complexes entre systèmes.</p>
          </div>
        </section>
        
        <section>
          <h2 class="article-section-title">Erreurs à éviter lors de la migration</h2>
          
          <ul class="article-list">
            <li class="article-list-item">Migrer sans nettoyer les données : vous importez vos problèmes</li>
            <li class="article-list-item">Migrer tout d'un coup : risqué pour les gros volumes</li>
            <li class="article-list-item">Négliger la formation des équipes : adoption difficile</li>
            <li class="article-list-item">Oublier les intégrations : perte de connectivité</li>
            <li class="article-list-item">Pas de plan de rollback : impossible de revenir en arrière</li>
          </ul>
        </section>
        
        <section>
          <h2 class="article-section-title">Bonnes pratiques de migration</h2>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Planification</h3>
            <ul class="article-list">
              <li class="article-list-item">Définissez un calendrier réaliste</li>
              <li class="article-list-item">Prévoyez une période de test</li>
              <li class="article-list-item">Communiquez avec vos équipes</li>
              <li class="article-list-item">Préparez un plan de contingence</li>
            </ul>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Exécution</h3>
            <ul class="article-list">
              <li class="article-list-item">Migrez par petits lots</li>
              <li class="article-list-item">Testez chaque étape</li>
              <li class="article-list-item">Documentez les transformations</li>
              <li class="article-list-item">Formez vos équipes progressivement</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 class="article-section-title">Post-migration : optimisation</h2>
          <p class="article-paragraph">Après la migration, optimisez votre utilisation de HubSpot :</p>
          
          <ul class="article-list">
            <li class="article-list-item">Analysez les performances</li>
            <li class="article-list-item">Optimisez les workflows</li>
            <li class="article-list-item">Formez vos équipes aux nouvelles fonctionnalités</li>
            <li class="article-list-item">Planifiez les intégrations futures</li>
          </ul>
        </section>
        
        <section>
          <h2 class="article-section-title">Conclusion</h2>
          <p class="article-paragraph">Une migration HubSpot réussie nécessite une planification minutieuse, des données propres et une formation appropriée des équipes.</p>
          
          <div class="article-callout article-callout-important">
            <p class="article-callout-content"><strong>👉 Une migration bien préparée réduit les risques de 80% et améliore l'adoption de 60%.</strong></p>
          </div>
        </section>
      </article>
    `
  },
  {
    id: 9,
    slug: "formation-hubspot-par-ou-commencer",
    title: "Formation HubSpot : Par où Commencer ? Guide 2025",
    excerpt: "Découvrez les meilleures formations HubSpot disponibles en France. Certifications officielles, cours en ligne et conseils pour maîtriser HubSpot rapidement.",
    author: "Équipe HubEasy",
    date: "2025-01-01",
    readTime: "6 min",
    category: "Formation HubSpot",
    image: "/images/hero-photo-hubeasy.jpg",
    searchTerm: "hubspot training certification",
    content: `
      <article class="article-content">
        <section>
          <h2 class="article-section-title">Pourquoi se former à HubSpot ?</h2>
          <p class="article-paragraph">HubSpot est devenu un standard dans le marketing automation et le CRM. Maîtriser cette plateforme est essentiel pour :</p>
          
          <ul class="article-list">
            <li class="article-list-item">Améliorer vos performances marketing</li>
            <li class="article-list-item">Automatiser vos processus de vente</li>
            <li class="article-list-item">Optimiser l'expérience client</li>
            <li class="article-list-item">Développer votre carrière</li>
          </ul>
          
          <div class="article-callout article-callout-important">
            <p class="article-callout-content"><strong>👉 Les professionnels certifiés HubSpot gagnent en moyenne 25% de plus que leurs pairs non certifiés.</strong></p>
          </div>
        </section>
        
        <section>
          <h2 class="article-section-title">Types de formations HubSpot</h2>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Formations officielles HubSpot</h3>
            <p class="article-paragraph">HubSpot Academy propose des formations gratuites :</p>
            <ul class="article-list">
              <li class="article-list-item">HubSpot Marketing Software Certification</li>
              <li class="article-list-item">HubSpot Sales Software Certification</li>
              <li class="article-list-item">HubSpot Service Software Certification</li>
              <li class="article-list-item">Content Marketing Certification</li>
            </ul>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Formations en présentiel</h3>
            <p class="article-paragraph">Formations dispensées par des partenaires certifiés :</p>
            <ul class="article-list">
              <li class="article-list-item">Formations personnalisées</li>
              <li class="article-list-item">Ateliers pratiques</li>
              <li class="article-list-item">Accompagnement individuel</li>
              <li class="article-list-item">Formations sectorielles</li>
            </ul>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Formations en ligne</h3>
            <p class="article-paragraph">Plateformes spécialisées :</p>
            <ul class="article-list">
              <li class="article-list-item">Cours structurés</li>
              <li class="article-list-item">Exercices pratiques</li>
              <li class="article-list-item">Communauté d'apprentissage</li>
              <li class="article-list-item">Certifications reconnues</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 class="article-section-title">Par où commencer votre formation ?</h2>
          
          <div class="article-feature">
            <h3 class="article-feature-title">1. Évaluez votre niveau</h3>
            <p class="article-paragraph">Déterminez votre niveau actuel :</p>
            <ul class="article-list">
              <li class="article-list-item">Débutant : aucune expérience HubSpot</li>
              <li class="article-list-item">Intermédiaire : utilisation basique</li>
              <li class="article-list-item">Avancé : utilisation régulière</li>
              <li class="article-list-item">Expert : configuration et intégrations</li>
            </ul>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">2. Définissez vos objectifs</h3>
            <p class="article-paragraph">Clarifiez ce que vous voulez apprendre :</p>
            <ul class="article-list">
              <li class="article-list-item">Marketing automation</li>
              <li class="article-list-item">Gestion des ventes</li>
              <li class="article-list-item">Service client</li>
              <li class="article-list-item">Reporting et analytics</li>
            </ul>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">3. Choisissez votre parcours</h3>
            <p class="article-paragraph">Sélectionnez la formation adaptée :</p>
            <ul class="article-list">
              <li class="article-list-item">Formation générale ou spécialisée</li>
              <li class="article-list-item">En ligne ou en présentiel</li>
              <li class="article-list-item">Individuelle ou en groupe</li>
              <li class="article-list-item">Certifiante ou pratique</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 class="article-section-title">Meilleures pratiques d'apprentissage</h2>
          
          <ul class="article-list">
            <li class="article-list-item">Pratiquez régulièrement sur un compte de test</li>
            <li class="article-list-item">Rejoignez la communauté HubSpot</li>
            <li class="article-list-item">Suivez les webinaires HubSpot</li>
            <li class="article-list-item">Participez aux événements HubSpot</li>
            <li class="article-list-item">Mettez en pratique sur des projets réels</li>
          </ul>
        </section>
        
        <section>
          <h2 class="article-section-title">Certifications HubSpot recommandées</h2>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Pour les marketeurs</h3>
            <ul class="article-list">
              <li class="article-list-item">HubSpot Marketing Software Certification</li>
              <li class="article-list-item">Content Marketing Certification</li>
              <li class="article-list-item">Email Marketing Certification</li>
            </ul>
          </div>
          
          <div class="article-feature">
            <h3 class="article-feature-title">Pour les commerciaux</h3>
            <ul class="article-list">
              <li class="article-list-item">HubSpot Sales Software Certification</li>
              <li class="article-list-item">Sales Enablement Certification</li>
              <li class="article-list-item">Inbound Sales Certification</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 class="article-section-title">Conclusion</h2>
          <p class="article-paragraph">La formation HubSpot est un investissement dans votre carrière et l'efficacité de votre entreprise. Commencez par évaluer votre niveau et définir vos objectifs.</p>
          
          <div class="article-callout article-callout-important">
            <p class="article-callout-content"><strong>👉 Les entreprises avec des équipes certifiées HubSpot voient une amélioration de 40% de leurs performances marketing.</strong></p>
          </div>
        </section>
      </article>
    `
  },
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
                alt={`Article HubSpot : ${article.title} - Guide complet intégration CRM et marketing automation`}
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

