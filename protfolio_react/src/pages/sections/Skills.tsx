import SkillProficiency, {
  SkillProficiencyLanguageDatas,
  SkillProficiencySoftwareDatas,
} from "../../components/SkillProficiency";
import "../../styles/Skills.css";

const Skills = () => {
  return (
    <>
      <div id="skills" className="skills-section bg-white">
        <div className="skills-container">
          <h3 className="skills-container-title">Languages</h3>
          {SkillProficiencyLanguageDatas.map((data) => (
            <SkillProficiency iconType={data.iconType} score={data.score} />
          ))}
        </div>
        <div className="skills-container">
          <h3 className="skills-container-title">Software</h3>
          {SkillProficiencySoftwareDatas.map((data) => (
            <SkillProficiency iconType={data.iconType} score={data.score} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
