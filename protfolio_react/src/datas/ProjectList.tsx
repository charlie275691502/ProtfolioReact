import { FaGithub } from "react-icons/fa";
import profile from "../images/inferring-column-types-of-the-dataset.png";
import InferingColumnTypesOfDataset from "../pages/projects/InferingColumnTypesOfDataset copy";

export const ProjectList = [
  {
    title: "Inferring Column Types of Dataset",
    image: profile,
    skillIcons: (
      <>
        <FaGithub className="icon" />
        <FaGithub className="icon" />
      </>
    ),
    githubUrl: "https://github.com/charlie275691502/InferringDatasetWebsite",
    demoUrl: undefined,
    content: <InferingColumnTypesOfDataset />,
  },
];
