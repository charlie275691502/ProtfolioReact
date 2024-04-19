import Icon, { IconType } from "../components/Icon";
import inferring_column_types_of_the_dataset_image from "../images/inferring_column_types_of_dataset.png";
import web_crawler_for_commodity_exchange from "../images/web_crawler_for_commodity_exchange.png";
import discord_channel_junitor from "../images/discord_channel_junitor.png";
import soul_star from "../images/soul_star.png";
import generation_of_authority from "../images/generation_of_authority.png";

import WebCrawlerForCommodityExchange from "../pages/projects/WebCrawlerForCommodityExchange";
import InferingColumnTypesOfDataset from "../pages/projects/WebCrawlerForCommodityExchange";
import DiscordChannelJunitor from "../pages/projects/DiscordChannelJunitor";
import SoulStar from "../pages/projects/SoulStar";
import GenerationOfAuthority from "../pages/projects/GenerationOfAuthority";

export const ProjectDatas = [
  {
    title: "Inferring Column Types of Dataset",
    image: inferring_column_types_of_the_dataset_image,
    skillIcons: (
      <>
        <Icon type={IconType.Git} />
        <Icon type={IconType.Django} />
        <Icon type={IconType.React} />
        <Icon type={IconType.Python} />
        <Icon type={IconType.Javascript} />
      </>
    ),
    githubUrl: "https://github.com/charlie275691502/InferringDatasetWebsite",
    demoUrl: undefined,
    content: <InferingColumnTypesOfDataset />,
  },
  {
    title: "Web Crawler for Commodity Exchange",
    image: web_crawler_for_commodity_exchange,
    skillIcons: (
      <>
        <Icon type={IconType.Git} />
        <Icon type={IconType.Python} />
        <Icon type={IconType.Selenium} />
      </>
    ),
    githubUrl: "https://github.com/charlie275691502/PRUN_CommodityPriceCrawler",
    demoUrl: undefined,
    content: <WebCrawlerForCommodityExchange />,
  },
  {
    title: "Discord Channel Junitor",
    image: discord_channel_junitor,
    skillIcons: (
      <>
        <Icon type={IconType.Git} />
        <Icon type={IconType.Python} />
        <Icon type={IconType.Discord} />
      </>
    ),
    githubUrl: "https://github.com/charlie275691502/DiscordBot_Junitor",
    demoUrl: undefined,
    content: <DiscordChannelJunitor />,
  },
  {
    title: "Soul Star",
    image: soul_star,
    skillIcons: (
      <>
        <Icon type={IconType.Git} />
        <Icon type={IconType.Unity} />
        <Icon type={IconType.Csharp} />
      </>
    ),
    githubUrl: "https://github.com/charlie275691502/Soul-Star",
    demoUrl: undefined,
    content: <SoulStar />,
  },
  {
    title: "Generation of Authority",
    image: generation_of_authority,
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
