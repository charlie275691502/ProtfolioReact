import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { ProjectDatas } from "./datas/ProjectList";
import slugify from "@sindresorhus/slugify";
import BaseProjectPage from "./pages/projects/BaseProjectPage";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {ProjectDatas.map((project) => {
          return (
            <Route
              path={"/projects/" + slugify(project.title)}
              element={
                <BaseProjectPage
                  title={project.title}
                  image={project.image}
                  skillIcons={project.skillIcons}
                  githubUrl={project.githubUrl}
                  demoUrl={project.demoUrl}
                  content={project.content}
                />
              }
            ></Route>
          );
        })}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
