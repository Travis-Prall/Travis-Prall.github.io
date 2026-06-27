const CLARITY_PROJECT_ID = import.meta.env.VITE_CLARITY_PROJECT_ID;

export const initClarity = () => {
  if (!CLARITY_PROJECT_ID) return;
  
  // Per instructions: check dev mode.
  if (import.meta.env.NODE_ENV === "development") return;

  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", CLARITY_PROJECT_ID);
};

export const tagClaritySession = (key, value) => {
  if (window.clarity) {
    window.clarity("set", key, value);
  }
};

export const tagSessionByReferrer = () => {
  const referrer = document.referrer;
  if (!referrer) return;

  if (referrer.includes("linkedin")) {
    tagClaritySession("source", "linkedin");
  } else if (referrer.includes("github")) {
    tagClaritySession("source", "github");
  } else if (referrer.includes("google")) {
    tagClaritySession("source", "google_search");
  }
};