import { useState, useCallback, useTransition } from "react";
import { Header, About } from ".";
import { Resume } from "../resume";

export const Home = () => {
  const [pageMode, setPageMode] = useState("Artist");
  const [isPending, startTransition] = useTransition();

  const handleSetPageMode = useCallback((mode) => {
    startTransition(() => {
      setPageMode(mode);
    });
  }, []);

  return (
    <div style={{ opacity: isPending ? 0.7 : 1, transition: 'opacity 0.2s' }}>
      <Header pageMode={pageMode} setPageMode={handleSetPageMode} />
      <About />
      <Resume pageMode={pageMode} />
    </div>
  );
};
