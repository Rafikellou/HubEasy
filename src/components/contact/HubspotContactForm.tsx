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
    const SCRIPT_ID = 'hubspot-form-v2-script';
    const FORM_CONTAINER_ID = 'hubspot-form-container';

    const container = document.getElementById(FORM_CONTAINER_ID);
    if (!container) return;

    const createForm = () => {
      if (window.hbspt && container.children.length === 0) {
        window.hbspt.forms.create({
          region: 'eu1',
          portalId: '146755132',
          formId: '0784a082-fcfc-4577-b041-65c29a1a4aeb',
          target: `#${FORM_CONTAINER_ID}`,
        });
      }
    };

    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.type = 'text/javascript';
      script.src = 'https://js-eu1.hsforms.net/forms/embed/v2.js';
      script.async = true;
      script.defer = true;
      script.addEventListener('load', createForm);
      document.body.appendChild(script);
    } else {
      createForm();
    }

    return () => {
      // In React StrictMode, components render twice in development.
      // On unmount, we clean the container to avoid duplicate forms.
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div id="hubspot-form-container"></div>;
};

export default HubspotContactForm;
