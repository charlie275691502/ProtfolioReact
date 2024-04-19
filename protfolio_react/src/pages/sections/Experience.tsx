import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool, MdWork } from "react-icons/md";
import { ExperienceList, ExperienceType } from "../../datas/ExperienceList";
import "../../styles/Experience.css";

const ExperienceTypeProperties = [
  {
    type: ExperienceType.Education,
    icon: <MdSchool />,
    iconStyle: {
      background: "#39918C",
      color: "white",
    },
    titleStyle: {
      color: "#39918C",
      fontWeight: "bold",
    },
  },
  {
    type: ExperienceType.Work,
    icon: <MdWork />,
    iconStyle: {
      background: "#964B00",
      color: "white",
    },
    titleStyle: {
      color: "#964B00",
      fontWeight: "bold",
    },
  },
];

const GetExperienceTypeProperty = (type: ExperienceType) => {
  return (
    ExperienceTypeProperties.find(
      (experienceTypeProperty) => experienceTypeProperty.type == type
    ) || ExperienceTypeProperties[0]
  );
};

const Experience = () => {
  return (
    <>
      <div id="experience" className="experience-container">
        <VerticalTimeline lineColor="#212529">
          {ExperienceList.map((experience) => {
            var property = GetExperienceTypeProperty(experience.type);
            return (
              <VerticalTimelineElement
                date={experience.date}
                iconStyle={property.iconStyle}
                icon={property.icon}
              >
                <h3
                  className="vertical-timeline-element-title"
                  style={property.titleStyle}
                >
                  {experience.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {experience.subTitle}
                </h5>
                <ul>
                  {experience.bulletPoints.map((bulletPoint) => (
                    <li>{bulletPoint}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
