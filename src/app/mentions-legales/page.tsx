import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function MentionsLegalesPage() {
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
            <h1 className="text-4xl md:text-5xl font-thin text-gray-900 mb-4">
              Mentions légales
            </h1>
            <p className="text-lg text-gray-600">
              Informations légales concernant HubEasy SARL
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="prose prose-lg max-w-none">
              
              {/* Éditeur du site */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">1. Éditeur du site</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p><strong>Raison sociale :</strong> HubEasy SARL</p>
                  <p><strong>Forme juridique :</strong> Société à Responsabilité Limitée</p>
                  <p><strong>Capital social :</strong> 10 000 euros</p>
                  <p><strong>SIRET :</strong> 123 456 789 00012</p>
                  <p><strong>RCS :</strong> Paris B 123 456 789</p>
                  <p><strong>TVA intracommunautaire :</strong> FR 12 123456789</p>
                  <p><strong>Adresse du siège social :</strong><br />
                  42 Avenue des Champs-Élysées<br />
                  75008 Paris, France</p>
                  <p><strong>Téléphone :</strong> +33 1 42 86 83 42</p>
                  <p><strong>Email :</strong> contact@hubeasy.fr</p>
                  <p><strong>Directeur de la publication :</strong> [Nom du dirigeant]</p>
                </div>
              </div>

              {/* Hébergement */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">2. Hébergement</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                  <p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
                  <p><strong>Site web :</strong> <a href="https://vercel.com" className="text-red-600 hover:text-red-700">vercel.com</a></p>
                </div>
              </div>

              {/* Propriété intellectuelle */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">3. Propriété intellectuelle</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Les marques et logos figurant sur le site sont la propriété exclusive de HubEasy SARL, sauf mention contraire.
                </p>
              </div>

              {/* Responsabilité */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">4. Responsabilité</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à l'adresse contact@hubeasy.fr, en décrivant le problème de la manière la plus précise possible.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  HubEasy SARL ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées, soit de l'apparition d'un bug ou d'une incompatibilité.
                </p>
              </div>

              {/* Liens hypertextes */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">5. Liens hypertextes</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Des liens hypertextes peuvent être présents sur le site. L'utilisateur est informé qu'en cliquant sur ces liens, il sortira du site hubeasy.fr. Ce dernier n'a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
                </p>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">6. Cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le site hubeasy.fr peut-être amené à vous demander l'acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations. Certaines parties de ce site ne peuvent être fonctionnelles sans l'acceptation de cookies.
                </p>
              </div>

              {/* Droit applicable */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">7. Droit applicable et attribution de juridiction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tout litige en relation avec l'utilisation du site hubeasy.fr est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
                </p>
              </div>

              {/* Contact */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">8. Contact</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :
                </p>
                <div className="bg-red-50 p-6 rounded-xl">
                  <p><strong>Par email :</strong> contact@hubeasy.fr</p>
                  <p><strong>Par téléphone :</strong> +33 1 42 86 83 42</p>
                  <p><strong>Par courrier :</strong><br />
                  HubEasy SARL<br />
                  42 Avenue des Champs-Élysées<br />
                  75008 Paris, France</p>
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
              Des questions sur nos services ?
            </h2>
            <p className="text-gray-600 mb-8">
              Notre équipe est là pour vous accompagner dans votre projet HubSpot.
            </p>
            <Link href="/contact">
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                Nous contacter
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}