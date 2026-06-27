import { useEffect, useRef } from "react";
import { initGA, logPageView } from "../utils/analytics";
import { initClarity, tagSessionByReferrer } from "../utils/clarity";
import { trackReferrerOnLoad } from "../utils/referrerTracking";
import { initTimeTracking } from "../utils/timeTracking";
import { engagementTracker } from "../utils/engagementScore";

/**
 * Custom hook to initialize all analytics and tracking services
 * Uses a ref to ensure initialization runs exactly once
 */
export const useAnalytics = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const initializeTracking = async () => {
      // 1. Initialize GA4 first
      initGA();

      // 2. Log initial page view
      logPageView();

      // 3. Initialize Clarity (will tag with referrer data)
      initClarity();
      tagSessionByReferrer();

      // 4. Analyze and track referrer
      const referrerData = trackReferrerOnLoad();
      if (import.meta.env.NODE_ENV === "development") {
        console.log("Visitor source:", referrerData);
      }

      // 5. Start time tracking
      initTimeTracking();

      // 6. Record initial engagement
      engagementTracker.addAction("page_view");
    };

    initializeTracking();
  }, []);
};
