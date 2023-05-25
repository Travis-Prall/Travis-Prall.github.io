import { Header } from ".";
import { About } from ".";
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
