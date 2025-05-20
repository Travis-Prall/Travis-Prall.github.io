import React, { useState, useCallback } from "react"; // Added React import for JSX and useCallback
import { Header, About } from "."; // Consolidate imports
import { Resume } from "../resume";

export const Home = () => {
  // It's good practice to provide a more descriptive initial state if possible,
  // or ensure "Artist" is a valid default that aligns with `KeywordButtons` initial activeKey.
  const [pageMode, setPageMode] = useState("Artist");

  // useCallback can be used for setPageMode if it's passed down to multiple deep children,
  // but for this depth, it might be premature optimization. However, it doesn't hurt.
  const handleSetPageMode = useCallback((mode) => {
    setPageMode(mode);
  }, []);

  return (
    // Using React.Fragment shorthand
    <>
      <Header pageMode={pageMode} setPageMode={handleSetPageMode} />
      <About />
      <Resume pageMode={pageMode} />
    </>
  );
};
