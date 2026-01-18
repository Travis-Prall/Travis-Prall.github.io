import ReactGA from "react-ga4";

const TRACKING_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

export const initGA = () => {
  if (!TRACKING_ID) {
    console.warn("GA Tracking ID not configured");
    return;
  }

  const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

  ReactGA.initialize(TRACKING_ID, {
    gaOptions: {
      anonymizeIp: true,
      cookieFlags: "SameSite=None;Secure",
    },
    gtagOptions: {
      send_page_view: false, // Manual control for SPAs
      debug_mode: isDev,
    },
    testMode: isDev,
  });
};

export const logPageView = (path = window.location.pathname) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
    title: document.title,
  });
};

export const logEvent = (category, action, label, value) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
    transport: "beacon",
  });
};

// Portfolio-specific event tracking helpers
export const trackResumeDownload = (fileType = "pdf") => {
  logEvent("Resume", "download", fileType);
};

export const trackResumeView = (durationSeconds) => {
  logEvent("Resume", "view", "section_visible", durationSeconds);
};

export const trackSocialClick = (platform) => {
  logEvent("Social", "click", platform);
};

export const trackProjectView = (projectName, techStack) => {
  logEvent("Projects", "view", projectName);
  ReactGA.event("select_content", {
    content_type: "project",
    item_id: projectName,
    technology: techStack,
  });
};

export const trackEngagement = (milestone) => {
  logEvent("Engagement", "milestone", milestone);
};