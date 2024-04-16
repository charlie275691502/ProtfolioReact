import { Component } from "react";
import profile from "../images/profile.jpg";
import slugify from "@sindresorhus/slugify";
import Home from "../pages/Home";

export const ProjectList = [
  {
    title: "ABC",
    image: profile,
    component: <Home />,
  },
];
