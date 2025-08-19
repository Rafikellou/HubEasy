'use client';

import { useEffect } from 'react';

const HubspotMeeting = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.type = 'text/javascript';
    script.async = true;

    // The HubSpot script is designed to be idempotent and can be re-run.
    // It will find all containers on the page and embed the meeting widget.
    // We add and remove it on each mount/unmount cycle to ensure it runs correctly in Strict Mode.
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts.
      document.body.removeChild(script);
      // Also, HubSpot's script might leave an iframe, so we clear our container.
      const container = document.querySelector('.meetings-iframe-container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      className="meetings-iframe-container h-[600px] w-full"
      data-src="https://meetings-eu1.hubspot.com/rafik-kellou?embed=true"
    ></div>
  );
};

export default HubspotMeeting;
