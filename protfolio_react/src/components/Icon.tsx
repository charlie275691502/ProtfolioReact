import {
  SiCelery,
  SiCplusplus,
  SiCsharp,
  SiDiscord,
  SiDjango,
  SiDocker,
  SiGit,
  SiGodotengine,
  SiGooglesheets,
  SiHtml5,
  SiJavascript,
  SiMicrosoftexcel,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSelenium,
  SiUnity,
} from "react-icons/si";
import { GrStatusUnknown } from "react-icons/gr";
import { FaJava } from "react-icons/fa";
import { Tooltip, Icon as IconBase } from "@mui/material";
import "../styles/Icon.css";

export enum IconType {
  Unknown,
  Csharp,
  Cplusplus,
  Python,
  Javascript,
  Java,
  Html5,
  Unity,
  Git,
  Docker,
  Postgresql,
  Django,
  React,
  Googlesheets,
  Microsoftexcel,
  Discord,
  Selenium,
  Celery,
  Godot,
}

const IconDatas = [
  {
    type: IconType.Unknown,
    title: "Unknown",
    component: <GrStatusUnknown className="technology-icon" />,
  },
  {
    type: IconType.Csharp,
    title: "C#",
    component: <SiCsharp className="technology-icon" />,
  },
  {
    type: IconType.Cplusplus,
    title: "C++",
    component: <SiCplusplus className="technology-icon" />,
  },
  {
    type: IconType.Python,
    title: "Python",
    component: <SiPython className="technology-icon" />,
  },
  {
    type: IconType.Javascript,
    title: "Javascript",
    component: <SiJavascript className="technology-icon" />,
  },
  {
    type: IconType.Java,
    title: "Java",
    component: <FaJava className="technology-icon" />,
  },
  {
    type: IconType.Html5,
    title: "Html5",
    component: <SiHtml5 className="technology-icon" />,
  },
  {
    type: IconType.Git,
    title: "Git",
    component: <SiGit className="technology-icon" />,
  },
  {
    type: IconType.Unity,
    title: "Unity",
    component: <SiUnity className="technology-icon" />,
  },
  {
    type: IconType.Docker,
    title: "Docker",
    component: <SiDocker className="technology-icon" />,
  },
  {
    type: IconType.Postgresql,
    title: "Postgresql",
    component: <SiPostgresql className="technology-icon" />,
  },
  {
    type: IconType.Django,
    title: "Django",
    component: <SiDjango className="technology-icon" />,
  },
  {
    type: IconType.React,
    title: "React",
    component: <SiReact className="technology-icon" />,
  },
  {
    type: IconType.Googlesheets,
    title: "Googlesheets",
    component: <SiGooglesheets className="technology-icon" />,
  },
  {
    type: IconType.Microsoftexcel,
    title: "Microsoftexcel",
    component: <SiMicrosoftexcel className="technology-icon" />,
  },
  {
    type: IconType.Discord,
    title: "Discord",
    component: <SiDiscord className="technology-icon" />,
  },
  {
    type: IconType.Selenium,
    title: "Selenium",
    component: <SiSelenium className="technology-icon" />,
  },
  {
    type: IconType.Celery,
    title: "Celery",
    component: <SiCelery className="technology-icon" />,
  },
  {
    type: IconType.Godot,
    title: "Godot",
    component: <SiGodotengine className="technology-icon" />,
  },
];

const GetIconData = (type: IconType) => {
  return IconDatas.find((iconData) => iconData.type === type) || IconDatas[0];
};

interface Props {
  type: IconType;
  placement?:
    | "bottom"
    | "bottom-end"
    | "bottom-start"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
  hoverable?: boolean;
}

const Icon = ({ type, placement = "bottom", hoverable = true }: Props) => {
  var iconData = GetIconData(type);
  return hoverable ? (
    <Tooltip title={iconData.title} placement={placement}>
      <IconBase className="technology-icon-padding">
        {iconData.component}
      </IconBase>
    </Tooltip>
  ) : (
    iconData.component
  );
};

export default Icon;
