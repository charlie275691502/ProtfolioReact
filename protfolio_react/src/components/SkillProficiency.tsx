import Icon, { IconType } from "./Icon";
import "../styles/Skills.css";

export const SkillProficiencyLanguageDatas = [
  {
    iconType: IconType.Csharp,
    score: 80,
  },
  {
    iconType: IconType.Python,
    score: 70,
  },
  {
    iconType: IconType.Javascript,
    score: 50,
  },
  {
    iconType: IconType.Cplusplus,
    score: 40,
  },
  {
    iconType: IconType.Java,
    score: 40,
  },
  {
    iconType: IconType.Html5,
    score: 30,
  },
];

export const SkillProficiencySoftwareDatas = [
  {
    iconType: IconType.Unity,
    score: 80,
  },
  {
    iconType: IconType.Git,
    score: 80,
  },
  {
    iconType: IconType.Googlesheets,
    score: 80,
  },
  {
    iconType: IconType.Django,
    score: 70,
  },
  {
    iconType: IconType.React,
    score: 60,
  },
  {
    iconType: IconType.Docker,
    score: 50,
  },
  {
    iconType: IconType.Postgresql,
    score: 40,
  },
];

interface Props {
  iconType: IconType;
  score: number;
}

const SkillProficiency = ({ iconType, score }: Props) => {
  return (
    <div className="skills-container-skill-container">
      <Icon type={iconType} placement="left" />
      <div className="skills-container-skill-bar">
        <div
          className="skills-container-skill-level"
          style={{ width: `${score}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillProficiency;
