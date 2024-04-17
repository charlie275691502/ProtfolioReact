import profile from "../images/inferring-column-types-of-the-dataset.png";
import InferingColumnTypesOfDataset from "../pages/projects/InferingColumnTypesOfDataset copy";
import {
  SiDjango,
  SiGit,
  SiJavascript,
  SiPython,
  SiReact,
} from "react-icons/si";

export const ProjectDatas = [
  {
    title: "Inferring Column Types of Dataset",
    image: profile,
    skillIcons: (
      <>
        <SiGit className="icon" />
        <SiDjango className="icon" />
        <SiReact className="icon" />
        <SiPython className="icon" />
        <SiJavascript className="icon" />
      </>
    ),
    githubUrl: "https://github.com/charlie275691502/InferringDatasetWebsite",
    demoUrl: undefined,
    content: <InferingColumnTypesOfDataset />,
  },
];
