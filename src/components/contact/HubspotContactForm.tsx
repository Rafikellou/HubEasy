'use client';

import { useEffect } from 'react';

// Extend the Window interface to include hbspt
interface CustomWindow extends Window {
  hbspt?: {
    forms: {
      create: (options: {
        region: string;
        portalId: string;
        formId: string;
        target: string;
      }) => void;
    };
  };
}

declare const window: CustomWindow;

const HubspotContactForm = () => {
  useEffect(() => {
    const container = document.querySelector('#hubspot-form-container');
    if (!container) return;

    const createForm = () => {
      if (window.hbspt) {
        // Ensure container is empty before creating a new form
        if (container.children.length === 0) {
          window.hbspt.forms.create({
            region: 'eu1',
            portalId: '146755132',
            formId: '0784a082-fcfc-4577-b041-65c29a1a4aeb',
            target: '#hubspot-form-container',
          });
        }
      }
    };

    const script = document.createElement('script');
    script.src = 'https://js-eu1.hsforms.net/forms/embed/v2.js';
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;

    script.onload = createForm;

    document.body.appendChild(script);

    return () => {
      // On unmount, clean up the script and the form container
      document.body.removeChild(script);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div id="hubspot-form-container"></div>;
};

export default HubspotContactForm;
