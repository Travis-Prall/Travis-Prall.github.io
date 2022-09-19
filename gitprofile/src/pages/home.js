import { Header } from "../components";
import { About } from "../components";
import { Resume } from "../components";

export const Home = (resumeData) => (
  <>
    <Header resumeData={resumeData} />
    <About {...resumeData} />
    <Resume resumeData={resumeData} />
  </>
);
