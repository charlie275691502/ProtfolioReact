import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import NavigateBar from "./pages/NavigateBar";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <NavigateBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
