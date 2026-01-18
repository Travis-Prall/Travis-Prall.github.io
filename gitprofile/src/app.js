import { MainNav as Navbar, Footer, Home } from "./components";
import { useAnalytics } from "./hooks/useAnalytics";
import "./app.scss";

const App = () => {
  useAnalytics();

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
