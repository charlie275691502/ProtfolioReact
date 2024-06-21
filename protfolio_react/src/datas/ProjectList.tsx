import Icon, { IconType } from "../components/Icon";
import soul_star_thumbnail from "../assets/soul_star_thumbnail.png";
import generation_of_authority_thumbnail from "../assets/generation_of_authority_thumbnail.png";
import SoulStar from "../pages/projects/SoulStar";
import GenerationOfAuthority from "../pages/projects/GenerationOfAuthority";

export const ProjectDatas = [
  {
    title: "Soul Star",
    thumbnail: soul_star_thumbnail,
    images: [soul_star_thumbnail],
    darkThemeImageIndicator: false,
    skillIcons: (
      <>
        <Icon type={IconType.Git} />
        <Icon type={IconType.Unity} />
        <Icon type={IconType.Csharp} />
      </>
    ),
    githubUrl: "https://github.com/charlie275691502/Soul-Star",
    demoUrl: "https://charlie275691502.github.io/Soul-Star/",
    content: <SoulStar />,
  },
  {
    title: "Generation of Authority",
    thumbnail: generation_of_authority_thumbnail,
    images: [generation_of_authority_thumbnail],
    darkThemeImageIndicator: false,
    skillIcons: (
      <>
        <Icon type={IconType.Git} />
        <Icon type={IconType.Unity} />
        <Icon type={IconType.Csharp} />
      </>
    ),
    githubUrl: "https://github.com/charlie275691502/GOA",
    demoUrl: undefined,
    content: <GenerationOfAuthority />,
  },
];
