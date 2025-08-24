import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">HubEasy</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Intégration HubSpot simplifiée pour PME et ETI. 
                Nous rendons HubSpot facile à utiliser au quotidien.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-400">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>42 Avenue des Champs-Élysées<br />75008 Paris, France</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <a href="tel:+33142868342" className="hover:text-white transition-colors">
                  +33 1 42 86 83 42
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <a href="mailto:contact@hubeasy.fr" className="hover:text-white transition-colors">
                  contact@hubeasy.fr
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Audit HubSpot
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Intégration & Migration
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Support & Optimisation
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Agents IA
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Intégrations
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Entreprise</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/a-propos" className="text-gray-400 hover:text-white transition-colors text-sm">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/agence-hubspot" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Agence HubSpot
                </Link>
              </li>
              <li>
                <Link href="/cas-clients" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cas clients
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/ressources" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Ressources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Specializations & Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Spécialisations</h4>
            <ul className="space-y-3 mb-8">
              <li>
                <Link href="/salesforce" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Salesforce
                </Link>
              </li>
              <li>
                <Link href="/hubeasy-sport" className="text-gray-400 hover:text-white transition-colors text-sm">
                  HubEasy Sport
                </Link>
              </li>
              <li>
                <Link href="/ressources/focus-salesforce" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Focus Salesforce
                </Link>
              </li>
            </ul>

            <h4 className="text-sm font-semibold text-gray-300 mb-3">Légal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/mentions-legales" className="text-gray-500 hover:text-gray-300 transition-colors text-xs">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="text-gray-500 hover:text-gray-300 transition-colors text-xs">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Social Links */}
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a 
                href="https://linkedin.com/company/hubeasy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn HubEasy"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@hubeasy.fr" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email HubEasy"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.hubspot.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
                aria-label="Partenaire HubSpot"
              >
                <span className="mr-1">Partenaire HubSpot</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Copyright & Legal Info */}
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-xs mb-1">
                © 2024 HubEasy SARL. Tous droits réservés.
              </p>
              <p className="text-gray-600 text-xs">
                SARL au capital de 10 000 € • SIRET: 123 456 789 00012 • Paris
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-500 text-xs italic">
              "Nous rendons HubSpot simple et efficace pour votre business"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}