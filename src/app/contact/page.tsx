import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Mail, Phone, MapPin, Calendar, MessageCircle, FileText, Clock, CheckCircle, Target } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import ProjectBot from '@/components/contact/ProjectBot';

export default function Contact() {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Décrire votre projet avec notre bot',
      description: 'Notre assistant IA vous pose les bonnes questions pour comprendre vos besoins et transmet automatiquement votre demande à notre équipe.',
      action: 'Commencer la discussion',
      highlight: 'Recommandé',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Formulaire de contact',
      description: 'Remplissez notre formulaire détaillé pour nous expliquer votre projet. Nous vous recontactons sous 24h.',
      action: 'Remplir le formulaire',
      highlight: 'Classique',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Rendez-vous avec Rafik Kellou',
      description: 'Réservez directement un créneau avec Rafik Kellou, cofondateur et expert HubSpot, pour discuter de votre projet.',
      action: 'Réserver un créneau',
      highlight: 'Direct',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <ProjectBot />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center">
            <h1 className="text-5xl md:text-7xl font-thin text-gray-900 mb-6 tracking-tight">
              Parlons de votre <span className="text-red-500">projet</span>
            </h1>
            <p className="text-2xl font-light text-gray-600 max-w-3xl mx-auto mb-12">
              Trois façons simples de nous contacter et démarrer votre transformation HubSpot
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {contactMethods.map((method, index) => (
              <AnimatedSection 
                key={index} 
                animation="bounce-in" 
                delay={index * 200 + 300}
                duration={1000}
                className="group"
              >
                <div className="bg-gray-50 rounded-3xl p-8 h-full flex flex-col transition-all duration-500 hover:bg-white hover:shadow-2xl hover:scale-105 cursor-pointer relative overflow-hidden">
                  {/* Highlight Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${method.gradient} text-white`}>
                    {method.highlight}
                  </div>
                  
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${method.gradient} text-white mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    {method.icon}
                  </div>
                  
                  <h3 className="text-2xl font-light text-gray-900 mb-4">{method.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-8 flex-grow">{method.description}</p>
                  
                  <Button className={`w-full bg-gradient-to-r ${method.gradient} hover:opacity-90 text-white font-light py-4 rounded-full transition-all duration-500 hover:scale-105 shadow-lg`}>
                    {method.action}
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 bg-gray-50" id="formulaire">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
              Formulaire de <span className="text-red-500">contact</span>
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto">
              Décrivez-nous votre projet en détail. Nous vous recontactons sous 24h.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="scale-up" delay={300}>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <AnimatedSection animation="fade-up" delay={400}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-red-500 focus:outline-none transition-colors duration-300 font-light"
                        placeholder="Jean Dupont"
                      />
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fade-up" delay={500}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email professionnel *</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-red-500 focus:outline-none transition-colors duration-300 font-light"
                        placeholder="jean.dupont@entreprise.com"
                      />
                    </div>
                  </AnimatedSection>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <AnimatedSection animation="fade-up" delay={600}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise *</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-red-500 focus:outline-none transition-colors duration-300 font-light"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fade-up" delay={700}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                      <input 
                        type="tel" 
                        className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-red-500 focus:outline-none transition-colors duration-300 font-light"
                        placeholder="+33 1 23 45 67 89"
                      />
                    </div>
                  </AnimatedSection>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <AnimatedSection animation="fade-up" delay={800}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CRM actuel</label>
                      <select className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-red-500 focus:outline-none transition-colors duration-300 font-light bg-white">
                        <option value="">Sélectionnez votre CRM</option>
                        <option value="salesforce">Salesforce</option>
                        <option value="hubspot">HubSpot</option>
                        <option value="pipedrive">Pipedrive</option>
                        <option value="zoho">Zoho</option>
                        <option value="autre">Autre</option>
                        <option value="aucun">Aucun CRM</option>
                      </select>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fade-up" delay={900}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Type de projet</label>
                      <select className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-red-500 focus:outline-none transition-colors duration-300 font-light bg-white">
                        <option value="">Sélectionnez le type</option>
                        <option value="migration">Migration complète</option>
                        <option value="integration">Intégration hybride</option>
                        <option value="nouveau">Nouveau déploiement</option>
                        <option value="optimisation">Optimisation existante</option>
                        <option value="formation">Formation équipes</option>
                      </select>
                    </div>
                  </AnimatedSection>
                </div>

                <AnimatedSection animation="fade-up" delay={1000}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Décrivez votre projet *</label>
                    <textarea 
                      required
                      rows={6}
                      className="w-full px-6 py-4 rounded-3xl border border-gray-200 focus:border-red-500 focus:outline-none transition-colors duration-300 font-light resize-none"
                      placeholder="Décrivez vos objectifs, défis actuels, timeline souhaitée, budget approximatif..."
                    ></textarea>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-up" delay={1100}>
                  <div className="text-center">
                    <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-12 py-6 rounded-full text-lg transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-orange-500/25 relative overflow-hidden group">
                      <span className="relative z-10">Envoyer ma demande</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </Button>
                    <p className="text-sm text-gray-500 mt-4">
                      Nous vous recontactons sous 24h
                    </p>
                  </div>
                </AnimatedSection>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-32 bg-white" id="booking">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-right">
              <div className="relative">
                <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
                    alt="Rafik Kellou, cofondateur HubEasy"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-light mb-1">Rafik Kellou</h3>
                    <p className="text-lg font-light opacity-90">Cofondateur & Expert HubSpot</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left" delay={200}>
              <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-8 tracking-tight">
                Rendez-vous avec
                <br />
                <span className="text-red-500">Rafik Kellou</span>
              </h2>
              <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                Discutez directement avec Rafik, cofondateur de HubEasy et expert reconnu en intégrations HubSpot. Un échange de 30 minutes pour analyser vos besoins et vous proposer la meilleure approche.
              </p>
              
              <div className="space-y-6 mb-8">
                {[
                  { icon: <Clock className="w-5 h-5" />, text: 'Appel de 30 minutes' },
                  { icon: <CheckCircle className="w-5 h-5" />, text: 'Audit gratuit de votre situation' },
                  { icon: <Target className="w-5 h-5" />, text: 'Recommandations personnalisées' },
                  { icon: <FileText className="w-5 h-5" />, text: 'Proposition détaillée sous 48h' }
                ].map((item, index) => (
                  <AnimatedSection key={index} animation="fade-up" delay={400 + index * 100}>
                    <div className="flex items-center text-gray-700">
                      <div className="text-red-500 mr-3">{item.icon}</div>
                      <span className="font-light">{item.text}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
              
              <AnimatedSection animation="fade-up" delay={800}>
                <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-light px-8 py-4 rounded-full transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-orange-500/25 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Réserver un créneau
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Button>
                <p className="text-sm text-gray-500 mt-3">
                  Créneaux disponibles du lundi au vendredi, 9h-18h
                </p>
              </AnimatedSection>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
              Autres moyens de <span className="text-red-500">contact</span>
            </h2>
            <p className="text-xl font-light text-gray-600">
              Vous préférez nous contacter directement ? Voici nos coordonnées.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                title: 'Email',
                info: 'contact@hubeasy.fr',
                subtitle: 'Réponse sous 4h en moyenne'
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: 'Téléphone',
                info: '+33 1 23 45 67 89',
                subtitle: 'Du lundi au vendredi, 9h-18h'
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: 'Adresse',
                info: 'Paris, France',
                subtitle: 'Interventions partout en France'
              }
            ].map((contact, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={300 + index * 150}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white mb-4">
                    {contact.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-gray-900 font-light mb-1">{contact.info}</p>
                  <p className="text-sm text-gray-500">{contact.subtitle}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
              Questions <span className="text-red-500">fréquentes</span>
            </h2>
          </AnimatedSection>
          
          <div className="space-y-6">
            {[
              {
                question: "Combien de temps prend une intégration HubSpot ?",
                answer: "Selon la complexité, entre 2 semaines (configuration simple) et 3 mois (migration complète avec formations). Nous établissons un planning précis dès l'audit initial."
              },
              {
                question: "Proposez-vous un audit gratuit ?",
                answer: "Oui ! Nous offrons un audit gratuit de 30 minutes avec Rafik Kellou pour analyser votre situation et vous proposer les meilleures recommandations."
              },
              {
                question: "Travaillez-vous avec des entreprises de toute taille ?",
                answer: "Nous nous spécialisons dans les PME et ETI (20 à 500 employés) ayant des besoins d'intégration sophistiqués. Notre expertise s'adapte à votre échelle."
              },
              {
                question: "Que se passe-t-il après la mise en place ?",
                answer: "Nous proposons un support continu, des formations régulières et des optimisations basées sur vos données d'usage. Votre succès est notre priorité."
              }
            ].map((faq, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={200 + index * 100}>
                <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
