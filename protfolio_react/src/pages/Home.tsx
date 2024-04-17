import Intro from "./sections/Intro";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import NavigateBar from "../components/NavigateBar";

const Home = () => {
  return (
    <>
      <NavigateBar showAnchorLinks={true} />
      <Intro />
      <Skills />
      <Experience />
      <Projects />
    </>
  );
};

export default Home;
