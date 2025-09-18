'use client';

import { useEffect, useId } from 'react';

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
  const uniqueId = useId();
  
  useEffect(() => {
    const SCRIPT_ID = 'hubspot-form-v2-script';
    const FORM_CONTAINER_ID = `hubspot-form-container-${uniqueId.replace(/:/g, '-')}`;

    const container = document.getElementById(FORM_CONTAINER_ID);
    if (!container) return;

    const createForm = () => {
      // Prevent race-condition duplicates: lock the container before calling HubSpot
      if (!(container instanceof HTMLElement)) return;
      if (container.getAttribute('data-hs-initialized') === 'true') return;
      container.setAttribute('data-hs-initialized', 'true');

      if (window.hbspt) {
        // Ensure a clean container (in case HMR left remnants)
        if (container.children.length > 0) {
          container.innerHTML = '';
        }
        window.hbspt.forms.create({
          region: 'eu1',
          portalId: '146755132',
          formId: '0784a082-fcfc-4577-b041-65c29a1a4aeb',
          target: `#${FORM_CONTAINER_ID}`,
        });
      } else {
        // If for any reason hbspt is not ready yet, release the lock
        container.removeAttribute('data-hs-initialized');
      }
    };

    // Add a small delay to prevent multiple initializations
    const timeoutId = setTimeout(() => {
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
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      // Clean up to avoid duplicates on remount or navigation
      if (container) {
        container.removeAttribute('data-hs-initialized');
        container.innerHTML = '';
      }
    };
  }, [uniqueId]);

  return <div id={`hubspot-form-container-${uniqueId.replace(/:/g, '-')}`}></div>;
};

export default HubspotContactForm;
