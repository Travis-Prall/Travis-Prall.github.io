import { Header } from "../components";
import { About } from "../components";
import { Resume } from "../resume";
import { useState } from "react";

export const Home = () => {
  const [pageMode, setPageMode] = useState("Artist");

  return (
    <>
      <Header pageMode={pageMode} setPageMode={setPageMode} />
      <About />
      <Resume pageMode={pageMode} />
    </>
  );
};
