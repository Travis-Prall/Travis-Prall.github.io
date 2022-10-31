import { useEffect } from "react";
import { MainNav as Navbar } from "./components";
import { Footer } from "./components";
import { Paths } from "./pages";
import ReactGA from "react-ga";
import "./app.scss";

const App = () => {
  const TRACKING_ID = process.env.REACT_APP_GOOGLE_UA_TRACKING_ID;
  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Paths />
      <Footer />
    </div>
  );
};

export default App;
