import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Shield, Eye, Lock, Users } from 'lucide-react';

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-red-600 mr-3" />
              <h1 className="text-4xl md:text-5xl font-thin text-gray-900">
                Politique de confidentialité
              </h1>
            </div>
            <p className="text-lg text-gray-600">
              Comment nous protégeons et utilisons vos données personnelles
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            
            {/* Introduction */}
            <div className="mb-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-start">
                <Eye className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparence totale</h3>
                  <p className="text-gray-700">
                    Chez HubEasy, nous nous engageons à protéger votre vie privée et à traiter vos données personnelles avec le plus grand respect. Cette politique vous explique clairement comment nous collectons, utilisons et protégeons vos informations.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              
              {/* Responsable du traitement */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">1. Responsable du traitement des données</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p><strong>HubEasy</strong></p>
                  <p>6 Rue d'Armaillé, 75017 Paris, France</p>
                  <p><strong>Délégué à la protection des données :</strong> dpo@hubeasy.fr</p>
                </div>
              </div>

              {/* Données collectées */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">2. Données personnelles collectées</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3">Données d'identification</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Nom et prénom</li>
                      <li>• Adresse email</li>
                      <li>• Numéro de téléphone</li>
                      <li>• Entreprise et fonction</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-3">Données techniques</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Adresse IP</li>
                      <li>• Type de navigateur</li>
                      <li>• Pages visitées</li>
                      <li>• Durée de visite</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  Nous ne collectons que les données strictement nécessaires à nos services et avec votre consentement explicite.
                </p>
              </div>

              {/* Finalités */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">3. Finalités du traitement</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-red-50 rounded-lg border border-red-200">
                    <Users className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-1">Gestion des services</h4>
                      <p className="text-sm text-red-700">Fourniture de nos services d'intégration HubSpot, support client, facturation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <Shield className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-1">Communication</h4>
                      <p className="text-sm text-purple-700">Réponse aux demandes, newsletters, informations sur nos services</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <Eye className="w-5 h-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-1">Amélioration</h4>
                      <p className="text-sm text-yellow-700">Analyse du site web, amélioration de l'expérience utilisateur</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Base légale */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">4. Base légale du traitement</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Exécution du contrat :</strong> Fourniture de nos services d'intégration HubSpot</li>
                    <li><strong>Intérêt légitime :</strong> Amélioration de nos services, sécurité du site</li>
                    <li><strong>Consentement :</strong> Newsletter, cookies non essentiels</li>
                    <li><strong>Obligation légale :</strong> Conservation des factures, déclarations fiscales</li>
                  </ul>
                </div>
              </div>

              {/* Partage des données */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">5. Partage des données</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Vos données personnelles ne sont jamais vendues à des tiers. Nous pouvons les partager uniquement dans les cas suivants :
                </p>
                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Prestataires de services :</strong> HubSpot (CRM), hébergement (Vercel), analytics</li>
                    <li>• <strong>Obligations légales :</strong> Autorités compétentes sur demande judiciaire</li>
                    <li>• <strong>Protection des droits :</strong> En cas de violation de nos conditions d'utilisation</li>
                  </ul>
                </div>
              </div>

              {/* Conservation */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">6. Durée de conservation</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-blue-800 mb-3">Clients actifs</h4>
                    <p className="text-sm text-blue-700">Pendant toute la durée de la relation contractuelle + 3 ans</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-green-800 mb-3">Prospects</h4>
                    <p className="text-sm text-green-700">3 ans à compter du dernier contact ou retrait du consentement</p>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-yellow-800 mb-3">Données de navigation</h4>
                    <p className="text-sm text-yellow-700">13 mois maximum pour les cookies</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-purple-800 mb-3">Obligations légales</h4>
                    <p className="text-sm text-purple-700">Selon les durées légales (factures : 10 ans)</p>
                  </div>
                </div>
              </div>

              {/* Droits */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">7. Vos droits</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Droit d'accès</h4>
                    <p className="text-sm text-gray-600">Connaître les données que nous détenons sur vous</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Droit de rectification</h4>
                    <p className="text-sm text-gray-600">Corriger des données inexactes ou incomplètes</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Droit à l'effacement</h4>
                    <p className="text-sm text-gray-600">Supprimer vos données sous certaines conditions</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Droit de portabilité</h4>
                    <p className="text-sm text-gray-600">Récupérer vos données dans un format lisible</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Droit d'opposition</h4>
                    <p className="text-sm text-gray-600">Vous opposer au traitement pour motifs légitimes</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Droit de limitation</h4>
                    <p className="text-sm text-gray-600">Limiter le traitement de vos données</p>
                  </div>
                </div>
                <div className="mt-6 p-6 bg-red-50 rounded-xl border border-red-200">
                  <p className="text-red-800">
                    <strong>Comment exercer vos droits :</strong> Envoyez un email à <a href="mailto:dpo@hubeasy.fr" className="underline">dpo@hubeasy.fr</a> avec une pièce d'identité. Nous répondons sous 1 mois maximum.
                  </p>
                </div>
              </div>

              {/* Sécurité */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">8. Sécurité des données</h2>
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <div className="flex items-start">
                    <Lock className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-3">Mesures de protection</h4>
                      <ul className="text-green-700 space-y-2">
                        <li>• Chiffrement SSL/TLS pour tous les échanges</li>
                        <li>• Hébergement sécurisé chez Vercel (certifié SOC 2)</li>
                        <li>• Accès aux données limité aux personnes autorisées</li>
                        <li>• Sauvegardes régulières et sécurisées</li>
                        <li>• Formation de nos équipes à la protection des données</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">9. Cookies et traceurs</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez gérer vos préférences à tout moment.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Cookies essentiels</h4>
                    <p className="text-sm text-gray-600">Nécessaires au fonctionnement du site</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Cookies analytiques</h4>
                    <p className="text-sm text-blue-600">Mesure d'audience anonymisée</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Cookies marketing</h4>
                    <p className="text-sm text-purple-600">Personnalisation des contenus</p>
                  </div>
                </div>
              </div>

              {/* Transferts internationaux */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">10. Transferts internationaux</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Certaines de nos données peuvent être transférées vers des pays hors UE (notamment vers HubSpot aux États-Unis). Ces transferts sont encadrés par :
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Décisions d'adéquation de la Commission européenne</li>
                  <li>• Clauses contractuelles types approuvées par l'UE</li>
                  <li>• Certifications reconnues (Privacy Shield, etc.)</li>
                </ul>
              </div>

              {/* Contact et réclamations */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">11. Contact et réclamations</h2>
                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                  <p className="text-red-800 mb-4">
                    <strong>Pour toute question sur cette politique :</strong>
                  </p>
                  <ul className="text-red-700 space-y-1">
                    <li>Email : dpo@hubeasy.fr</li>
                    <li>Courrier : HubEasy SARL - DPO, 6 Rue d'Armaillé, 75017 Paris</li>
                  </ul>
                  <p className="text-red-800 mt-4">
                    <strong>Droit de réclamation :</strong> Vous pouvez introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" className="underline">www.cnil.fr</a>).
                  </p>
                </div>
              </div>

              <div className="text-sm text-gray-500 border-t border-gray-200 pt-6">
                <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Des questions sur vos données ?
            </h2>
            <p className="text-gray-600 mb-8">
              Notre équipe est à votre disposition pour répondre à toutes vos questions sur la protection de vos données.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:dpo@hubeasy.fr">
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
                >
                  Contacter notre DPO
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline"
                  className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
                >
                  Contact général
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}