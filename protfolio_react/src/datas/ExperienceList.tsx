export enum ExperienceType {
  Education,
  Work,
}

export const ExperienceList = [
  {
    type: ExperienceType.Education,
    date: "Feb 2024 - Nov 2025",
    title: "Master of Artificial Intelligence",
    subTitle: "University of Technology Sydney",
    bulletPoints: ["Data Analysis, Software Development, Machine Learning."],
  },
  {
    type: ExperienceType.Work,
    date: "Apr 2020 - Jan 2024",
    title: "Client Software Engineer",
    subTitle: "Rayark Games, Taiwan",
    bulletPoints: [
      "Unity, C#, Design Patterns, Build Pipelines, Agile development.",
      "Demonstrated effective time management by developing multiple game features.",
      "Practised effective team skills with people from different professions.",
      "Constructed problem-solving skills through identifying issues from Unity Dashboard.",
      "Improved app efficiency and user experience by refactoring legacy code.",
    ],
  },
  {
    type: ExperienceType.Work,
    date: "Apr 2018 - Jan 2019",
    title: "Software Quality Assurance Internship",
    subTitle: "Rayark Games, Taiwan",
    bulletPoints: [
      "Excel, Google Spreadsheet, Teamwork.",
      "Built testing tools to summarise likelihood of cheating from given players, increasing efficiency by 2 times.",
      "Practised team communication skills with development and customer service teams.",
      "Provided a high standard of quality assurance for products.",
      "Cultivated patience and carefulness through repeated testing work.",
    ],
  },
  {
    type: ExperienceType.Education,
    date: "Sep 2015 - Jun 2019",
    title: "Bachelor of Computer Science",
    subTitle: "National Taiwan University",
    bulletPoints: [
      "Developed video game projects in NTU Game Design & Research Club.",
      "Devised visual tools for self-driving car projects at Cyber-Physical Systems Lab.",
    ],
  },
];
