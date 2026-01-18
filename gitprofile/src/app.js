import { useEffect } from "react";
import { MainNav as Navbar, Footer, Home } from "./components";
import ReactGA from "react-ga4";
import "./app.scss";

const App = () => {
  const TRACKING_ID = process.env.REACT_APP_GOOGLE_GA_TRACKING_ID;

  useEffect(() => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      ReactGA.initialize(TRACKING_ID, {
        debug: true,
        testMode: true,
      });
      console.log("Analytics initialized in development mode");
    } else {
      ReactGA.initialize(TRACKING_ID);
    }
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, [TRACKING_ID]);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
