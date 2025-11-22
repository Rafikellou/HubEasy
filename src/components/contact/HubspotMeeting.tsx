'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Calendar, ExternalLink, X } from 'lucide-react';

const HubspotMeeting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const meetingUrl = 'https://meetings-eu1.hubspot.com/rafik-kellou';

  const openInNewTab = () => {
    window.open(meetingUrl, '_blank', 'noopener,noreferrer');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* CTA Button */}
      <div className="flex flex-col gap-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
        >
          <Calendar className="w-5 h-5" />
          Réserver un créneau
        </button>
        
        <button
          onClick={openInNewTab}
          className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-gray-300"
        >
          <ExternalLink className="w-4 h-4" />
          Ouvrir dans un nouvel onglet
        </button>
      </div>

      {/* Full-screen Modal via Portal */}
      {isModalOpen && typeof window !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-2 md:p-4">
          <div className="bg-white rounded-2xl w-full h-full max-w-6xl max-h-[95vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-3 md:p-4 border-b border-gray-200 flex-shrink-0">
              <div className="flex items-center gap-2 md:gap-3">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Réserver un rendez-vous
                </h3>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <button
                  onClick={openInNewTab}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Ouvrir dans un nouvel onglet"
                >
                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
                </button>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Fermer"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Content - iframe full height */}
            <div className="flex-1 relative overflow-hidden">
              <iframe
                src={`${meetingUrl}?embed=true`}
                className="absolute inset-0 w-full h-full border-0"
                title="Réserver un rendez-vous"
                loading="lazy"
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default HubspotMeeting;
