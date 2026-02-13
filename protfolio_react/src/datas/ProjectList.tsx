import Icon, { IconType } from "../components/Icon";
import cultivation_simulator_thumbnail from "../assets/cultivation_simulator_thumbnail.png";
import cultivation_simulator_1 from "../assets/cultivation_simulator_1.png";
import cultivation_simulator_2 from "../assets/cultivation_simulator_2.png";
import cultivation_simulator_3 from "../assets/cultivation_simulator_3.png";
import cultivation_simulator_4 from "../assets/cultivation_simulator_4.png";
import cultivation_simulator_5 from "../assets/cultivation_simulator_5.png";




import soul_star_thumbnail from "../assets/soul_star_thumbnail.png";
import soul_star_cutscene from "../assets/soul_star_cutscene.png";
import soul_star_open from "../assets/soul_star_open.png";

import cat_fight_thumbnail from "../assets/cat_fight_thumbnail.png";
import cat_fight_deck from "../assets/cat_fight_deck.png";
import cat_fight_reward from "../assets/cat_fight_reward.png";
import cat_fight_stage_2 from "../assets/cat_fight_stage_2.png";
import cat_fight_stage_3 from "../assets/cat_fight_stage_3.png";

import generation_of_authority_thumbnail from "../assets/generation_of_authority_thumbnail.png";
import SoulStar from "../pages/projects/SoulStar";
import GenerationOfAuthority from "../pages/projects/GenerationOfAuthority";
import CatFight from "../pages/projects/CatFight";
import CultivationSimulator from "../pages/projects/CultivationSimulator";

export const ProjectDatas = [
  {
    title: "Cultivation Simulator",
    thumbnail: cultivation_simulator_thumbnail,
    images: [cultivation_simulator_thumbnail, cultivation_simulator_1, cultivation_simulator_2, cultivation_simulator_3, cultivation_simulator_4, cultivation_simulator_5],
    darkThemeImageIndicator: false,
    skillIcons: (
      <>
        <Icon type={IconType.Git} />
        <Icon type={IconType.Unity} />
        <Icon type={IconType.Csharp} />
        <Icon type={IconType.Rust} />
      </>
    ),
    content: <CultivationSimulator />,
  },
  {
    title: "Soul Star",
    thumbnail: soul_star_thumbnail,
    images: [soul_star_thumbnail, soul_star_cutscene, soul_star_open],
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
    title: "Cat Fight",
    thumbnail: cat_fight_thumbnail,
    images: [cat_fight_thumbnail, cat_fight_deck, cat_fight_reward, cat_fight_stage_2, cat_fight_stage_3],
    darkThemeImageIndicator: false,
    skillIcons: (
      <>
        <Icon type={IconType.Git} />
        <Icon type={IconType.Unity} />
        <Icon type={IconType.Csharp} />
      </>
    ),
    githubUrl: "https://github.com/charlie275691502/CatFIght",
    demoUrl: "https://charlie275691502.github.io/CatFIght/",
    content: <CatFight />,
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
