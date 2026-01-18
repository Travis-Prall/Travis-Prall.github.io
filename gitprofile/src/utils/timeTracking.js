import { logEvent } from "./analytics";
import { engagementTracker } from "./engagementScore";

export const initTimeTracking = () => {
  const startTime = Date.now();
  const milestones = [30, 60, 120, 300]; // seconds
  const reachedMilestones = new Set();

  const checkMilestones = () => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);

    milestones.forEach((milestone) => {
      if (elapsed >= milestone && !reachedMilestones.has(milestone)) {
        reachedMilestones.add(milestone);
        logEvent("Engagement", "time_on_site", `${milestone}_seconds`, milestone);
        engagementTracker.addAction(`time_${milestone}_seconds`);
      }
    });
  };

  const interval = setInterval(checkMilestones, 10000);

  const trackFinalTime = () => {
    const totalSeconds = Math.floor((Date.now() - startTime) / 1000);
    if (totalSeconds > 5) {
        logEvent("Engagement", "session_duration", "total_seconds", totalSeconds);
    }
  };

  window.addEventListener("beforeunload", trackFinalTime);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      trackFinalTime();
    }
  });

  return () => {
    clearInterval(interval);
    window.removeEventListener("beforeunload", trackFinalTime);
  };
};