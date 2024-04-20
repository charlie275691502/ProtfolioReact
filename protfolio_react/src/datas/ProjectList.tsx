import Icon, { IconType } from "../components/Icon";
import inferring_column_types_of_the_dataset_image_thumbnail from "../assets/inferring_column_types_of_dataset_thumbnail.png";
import web_crawler_for_commodity_exchange_thumbnail from "../assets/web_crawler_for_commodity_exchange_thumbnail.png";
import discord_channel_junitor_thumbnail from "../assets/discord_channel_junitor_thumbnail.png";
import soul_star_thumbnail from "../assets/soul_star_thumbnail.png";
import generation_of_authority_thumbnail from "../assets/generation_of_authority_thumbnail.png";

import WebCrawlerForCommodityExchange from "../pages/projects/WebCrawlerForCommodityExchange";
import InferingColumnTypesOfDataset from "../pages/projects/InferingColumnTypesOfDataset";
import DiscordChannelJunitor from "../pages/projects/DiscordChannelJunitor";
import SoulStar from "../pages/projects/SoulStar";
import GenerationOfAuthority from "../pages/projects/GenerationOfAuthority";

export const ProjectDatas = [
  {
    title: "Inferring Column Types of Dataset",
    images: [inferring_column_types_of_the_dataset_image_thumbnail],
    skillIcons: (
      <>
        <Icon type={IconType.Git} />
        <Icon type={IconType.Django} />
        <Icon type={IconType.React} />
        <Icon type={IconType.Python} />
        <Icon type={IconType.Celery} />
        <Icon type={IconType.Javascript} />
      </>
    ),
    githubUrl: "https://github.com/charlie275691502/InferringDatasetWebsite",
    demoUrl: undefined,
    content: <InferingColumnTypesOfDataset />,
  },
  {
    title: "Web Crawler for Commodity Exchange",
    images: [web_crawler_for_commodity_exchange_thumbnail],
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
    images: [discord_channel_junitor_thumbnail],
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
    images: [soul_star_thumbnail],
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
    images: [generation_of_authority_thumbnail],
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
