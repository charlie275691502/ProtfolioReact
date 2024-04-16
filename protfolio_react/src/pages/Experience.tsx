import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "../components/SchoolIcon";
import JobIcon from "../components/JobIcon";

const Experience = () => {
  return (
    <>
      <div style={{ background: "#f0f0f0" }}>
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Feb 2024 - Nov 2025"
            iconStyle={{
              background: "#212529",
              color: "white",
            }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Master of Artificial Intelligence
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Technology Sydney
            </h4>
            <ul>
              <li>Data Analysis, Software Development, Machine Learning.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2020 - Jan 2024"
            iconStyle={{
              background: "#212529",
              color: "white",
            }}
            icon={<JobIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Client Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Rayark Games, Taiwan
            </h4>
            <ul>
              <li>
                Unity, C#, Design Patterns, Build Pipelines, Agile development.
              </li>
              <li>
                Demonstrated effective time management by developing multiple
                game features.
              </li>
              <li>
                Practised effective team skills with people from different
                professions.
              </li>
              <li>
                Constructed problem-solving skills through identifying issues
                from Unity Dashboard.
              </li>
              <li>
                Improved app efficiency and user experience by refactoring
                legacy code.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2018 - Jan 2019"
            iconStyle={{
              background: "#212529",
              color: "white",
            }}
            icon={<JobIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Quality Assurance Internship
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Rayark Games, Taiwan
            </h4>
            <ul>
              <li>Excel, Google Spreadsheet, Teamwork.</li>
              <li>
                Built testing tools to summarise likelihood of cheating from
                given players, increasing efficiency by 2 times.
              </li>
              <li>
                Practised team communication skills with development and
                customer service teams.
              </li>
              <li>
                Provided a high standard of quality assurance for products.
              </li>
              <li>
                Cultivated patience and carefulness through repeated testing
                work.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2015 - Jun 2019"
            iconStyle={{
              background: "#212529",
              color: "white",
            }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              National Taiwan University
            </h4>
            <ul>
              <li>C/C++/C#, DSA, Image Processing, Math.</li>
              <li>
                Developed video game projects in NTU Game Design & Research
                Club.
              </li>
              <li>
                Devised visual tools for self-driving car projects at
                Cyber-Physical Systems Lab.
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
