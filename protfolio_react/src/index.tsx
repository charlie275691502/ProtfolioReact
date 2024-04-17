import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/Common.css";
import "./styles/Icons.css";
import "./styles/Footer.css";
import "./styles/Intro.css";
import "./styles/Skills.css";
import "./styles/Projects.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "react-vertical-timeline-component/style.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
