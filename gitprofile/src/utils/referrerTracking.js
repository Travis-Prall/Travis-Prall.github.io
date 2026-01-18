import { logEvent } from "./analytics";

export const REFERRER_CATEGORIES = {
  PROFESSIONAL: ["linkedin.com", "indeed.com", "glassdoor.com", "lever.co", "greenhouse.io"],
  DEVELOPER: ["github.com", "stackoverflow.com", "dev.to", "medium.com"],
  SEARCH: ["google.com", "bing.com", "duckduckgo.com"],
  SOCIAL: ["twitter.com", "x.com", "facebook.com"],
};

export const analyzeReferrer = () => {
  const referrer = document.referrer;
  const urlParams = new URLSearchParams(window.location.search);

  const referrerData = {
    raw_referrer: referrer,
    utm_source: urlParams.get("utm_source"),
    utm_medium: urlParams.get("utm_medium"),
    utm_campaign: urlParams.get("utm_campaign"),
    utm_content: urlParams.get("utm_content"),
    category: "direct",
    is_recruiter_likely: false,
  };

  // Categorize referrer
  for (const [category, domains] of Object.entries(REFERRER_CATEGORIES)) {
    if (domains.some((domain) => referrer.includes(domain))) {
      referrerData.category = category.toLowerCase();
      break;
    }
  }

  // Flag likely recruiter visits
  if (
    (referrer && (referrer.includes("linkedin") ||
    referrer.includes("indeed") ||
    referrer.includes("lever") ||
    referrer.includes("greenhouse"))) ||
    urlParams.get("utm_medium") === "application"
  ) {
    referrerData.is_recruiter_likely = true;
  }

  return referrerData;
};

export const trackReferrerOnLoad = () => {
  const data = analyzeReferrer();

  // Store for session
  sessionStorage.setItem("visitor_source", JSON.stringify(data));

  // Send to GA4 as user properties
  if (window.gtag) {
    window.gtag("set", "user_properties", {
      traffic_source: data.utm_source || data.category,
      is_recruiter: data.is_recruiter_likely,
    });
  }

  // Log as event
  logEvent("Acquisition", "page_entry", data.utm_source || data.category);

  return data;
};