import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import NavigateBar from "./components/NavigateBar";
import Footer from "./components/Footer";
import { ProjectList } from "./datas/ProjectList";
import slugify from "@sindresorhus/slugify";
import BaseProjectPage from "./pages/projects/BaseProjectPage";

function App() {
  return (
    <>
      <NavigateBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        {ProjectList.map((project) => {
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
