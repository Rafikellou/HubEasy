'use client';

import { Fragment, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Users, Cloud } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { UsersIcon, CloudIcon, NewspaperIcon } from '@heroicons/react/24/outline';

const resources = [
  { name: 'Cas client', href: '/cas-clients', icon: UsersIcon },
  { name: 'Focus Salesforce', href: '/salesforce', icon: CloudIcon },
  { name: 'Articles', href: '/articles', icon: NewspaperIcon },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAgencyOpen, setIsAgencyOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-hubeasy.png"
                alt="HubEasy Logo"
                width={120}
                height={32}
                priority
              />
            </Link>
            <span className="text-xs font-light text-gray-600 ml-2 hidden sm:block">Start smiling.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/integrations" className="text-gray-600 hover:text-red-500 transition-colors duration-300 font-light">Intégrations</Link>
            <Link href="/tarifs" className="text-gray-600 hover:text-red-500 transition-colors duration-300 font-light">Tarifs</Link>
            
            {/* Agency Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsAgencyOpen(true)}
              onMouseLeave={() => setIsAgencyOpen(false)}
            >
              <button className="flex items-center gap-x-1 text-gray-600 hover:text-red-500 transition-colors duration-300 font-light focus:outline-none">
                <span>L'agence</span>
                <ChevronDownIcon className={`h-5 w-5 transition-transform duration-200 ${isAgencyOpen ? 'transform rotate-180' : ''}`} aria-hidden="true" />
              </button>

              <Transition
                show={isAgencyOpen}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <div className="absolute -left-8 top-full z-10 mt-5 w-64 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                  <Link
                    href="/agence/notre-vocation"
                    className="group flex items-center gap-x-4 rounded-lg p-3 text-sm font-light leading-6 text-gray-700 hover:bg-gray-50 hover:text-red-500 transition-all duration-200"
                  >
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-red-50 transition-all duration-200">
                      <Users className="h-6 w-6 text-gray-600 group-hover:text-red-500 transition-all duration-200" aria-hidden="true" />
                    </div>
                    Notre vocation
                  </Link>
                  <Link
                    href="/agence-hubspot"
                    className="group flex items-center gap-x-4 rounded-lg p-3 text-sm font-light leading-6 text-gray-700 hover:bg-gray-50 hover:text-red-500 transition-all duration-200"
                  >
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-red-50 transition-all duration-200">
                      <Cloud className="h-6 w-6 text-gray-600 group-hover:text-red-500 transition-all duration-200" aria-hidden="true" />
                    </div>
                    Notre méthode
                  </Link>
                </div>
              </Transition>
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button className="flex items-center gap-x-1 text-gray-600 hover:text-red-500 transition-colors duration-300 font-light focus:outline-none">
                <span>Ressources</span>
                <ChevronDownIcon className={`h-5 w-5 transition-transform duration-200 ${isResourcesOpen ? 'transform rotate-180' : ''}`} aria-hidden="true" />
              </button>

              <Transition
                show={isResourcesOpen}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <div className="absolute -left-8 top-full z-10 mt-5 w-64 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                  {
                    resources.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group flex items-center gap-x-4 rounded-lg p-3 text-sm font-light leading-6 text-gray-700 hover:bg-gray-50 hover:text-red-500 transition-all duration-200"
                      >
                        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-red-50 transition-all duration-200">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-red-500 transition-all duration-200" aria-hidden="true" />
                        </div>
                        {item.name}
                      </Link>
                    ))
                  }
                </div>
              </Transition>
            </div>

            <Link href="/contact" className="px-4 py-1.5 rounded-full border border-red-500 text-red-600 hover:bg-red-50 transition-colors duration-300 font-medium">Contact</Link>
          </div>

          {/* Desktop CTA Button removed as requested */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-colors duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 border border-gray-200/50 shadow-lg">
            <Link href="/integrations" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Intégrations</Link>
            <Link href="/tarifs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Tarifs</Link>
            
            <div className="px-3 py-2 font-medium text-gray-700">L'agence</div>
            <div className="pl-4">
              <Link href="/agence/notre-vocation" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-red-500 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Notre vocation</Link>
              <Link href="/agence-hubspot" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-red-500 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Notre méthode</Link>
            </div>
            
            <div className="px-3 py-2 font-medium text-gray-700">Ressources</div>
            <div className="pl-4">
              {resources.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-red-500 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link href="/contact" className="block px-3 py-2 rounded-full border border-red-500 text-red-600 text-base font-medium hover:bg-red-50" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
          {/* Mobile CTA removed as requested */}
        </div>
      </nav>
    </header>
  );
}