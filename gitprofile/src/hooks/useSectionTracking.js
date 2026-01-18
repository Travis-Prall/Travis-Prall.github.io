import { useEffect, useRef } from "react";
import { logEvent } from "../utils/analytics";

export const useSectionTracking = (sectionName) => {
  const ref = useRef(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            hasTracked.current = true;
            logEvent("Section", "view", sectionName);

            const enterTime = Date.now();
            const exitObserver = new IntersectionObserver(
              (exitEntries) => {
                if (!exitEntries[0].isIntersecting) {
                  const timeSpent = Math.floor((Date.now() - enterTime) / 1000);
                  if (timeSpent > 5) {
                    logEvent("Section", "engaged", sectionName, timeSpent);
                  }
                  exitObserver.disconnect();
                }
              },
              { threshold: 0 }
            );
            exitObserver.observe(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, [sectionName]);

  return ref;
};