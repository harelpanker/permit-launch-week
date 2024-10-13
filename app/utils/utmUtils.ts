import { NextRouter } from 'next/router';

interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export function getUtmParams(): UtmParams {
  if (typeof window === 'undefined') {
    return {};
  }

  const searchParams = new URLSearchParams(window.location.search);
  const utmParams: UtmParams = {};

  (['source', 'medium', 'campaign', 'term', 'content'] as const).forEach(
    (param) => {
      const value = searchParams.get(`utm_${param}`);
      if (value) {
        utmParams[`utm_${param}`] = value;
      }
    }
  );

  return utmParams;
}

export function setUtmParams(router: NextRouter): void {
  const currentUtmParams = getUtmParams();
  const newUtmParams = generateDynamicUtmParams();

  const mergedParams: UtmParams = { ...currentUtmParams, ...newUtmParams };
  const query = new URLSearchParams(
    mergedParams as Record<string, string>
  ).toString();

  router.push(`${router.pathname}?${query}`, undefined, { shallow: true });
}

function generateDynamicUtmParams(): UtmParams {
  // This is where you'd implement your logic for generating dynamic UTM parameters
  // For example, you might use the current time, user agent, or other factors
  return {
    utm_source: 'dynamic_source',
    utm_medium: 'dynamic_medium',
    utm_campaign: `campaign_${Date.now()}`,
  };
}
