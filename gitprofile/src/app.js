import { useEffect } from "react";
import { MainNav as Navbar, Footer, Home } from "./components";
import { initGA, logPageView } from "./utils/analytics";
import { initClarity, tagSessionByReferrer } from "./utils/clarity";
import { trackReferrerOnLoad } from "./utils/referrerTracking";
import { initTimeTracking } from "./utils/timeTracking";
import { engagementTracker } from "./utils/engagementScore";
import "./app.scss";

const App = () => {
  useEffect(() => {
    // Initialize all tracking on app mount
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
      if (process.env.NODE_ENV === "development") {
        console.log("Visitor source:", referrerData);
      }

      // 5. Start time tracking
      initTimeTracking();

      // 6. Record initial engagement
      engagementTracker.addAction("page_view");
    };

    initializeTracking();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
