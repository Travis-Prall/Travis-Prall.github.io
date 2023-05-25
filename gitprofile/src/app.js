import { useEffect } from "react";
import { MainNav as Navbar } from "./components";
import { Footer, Home } from "./components";
import ReactGA from "react-ga4";
import "./app.scss";

const App = () => {
  const TRACKING_ID = process.env.REACT_APP_GOOGLE_GA_TRACKING_ID;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    ReactGA.initialize(TRACKING_ID, { debug: true });
    console.log("This is a development build");
  } else {
    ReactGA.initialize(TRACKING_ID, { standardImplementation: true });
  }
  useEffect(() => {
    ReactGA.send("pageview");
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
