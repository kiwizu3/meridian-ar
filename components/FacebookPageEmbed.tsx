'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    FB: any;
  }
}

const FacebookPageEmbed = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add fb-root
    if (!document.getElementById('fb-root')) {
      const fbRoot = document.createElement('div');
      fbRoot.id = 'fb-root';
      document.body.appendChild(fbRoot);
    }

    // Load SDK
    if (!document.getElementById('facebook-jssdk')) {
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src =
        'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v23.0';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);

      script.onload = () => {
        if (window.FB) {
          window.FB.XFBML.parse(containerRef.current);
        }
      };
    } else {
      if (window.FB) {
        window.FB.XFBML.parse(containerRef.current);
      }
    }
  }, []);

  return (
    <div className="w-full max-w-full overflow-hidden">
      <div ref={containerRef}>
        <div
          className="fb-page"
          data-href="https://web.facebook.com/LBSustainability1st"
          data-tabs="timeline"
          data-height="1300"
          data-small-header="true"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
          data-show-posts="true"
        >
          <blockquote
            cite="https://web.facebook.com/LBSustainability1st"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://web.facebook.com/LBSustainability1st">
              LB Finance PLC
            </a>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default FacebookPageEmbed;
