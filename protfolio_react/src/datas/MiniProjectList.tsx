import Icon, { IconType } from "../components/Icon";
import knight_thumbnail from "../assets/knight_thumbnail.png";
import knight_enemy from "../assets/knight_enemy.png";
import inferring_column_types_of_the_dataset_image_thumbnail from "../assets/inferring_column_types_of_dataset_thumbnail.png";
import inferring_column_types_of_dataset_summary from "../assets/inferring_column_types_of_dataset_summary.png";
import web_crawler_for_commodity_exchange_thumbnail from "../assets/web_crawler_for_commodity_exchange_thumbnail.png";
import web_crawler_for_commodity_exchange_excel from "../assets/web_crawler_for_commodity_exchange_excel.png";
import discord_channel_junitor_thumbnail from "../assets/discord_channel_junitor_thumbnail.png";

import Knight from "../pages/projects/Knight";
import InferingColumnTypesOfDataset from "../pages/projects/InferingColumnTypesOfDataset";
import WebCrawlerForCommodityExchange from "../pages/projects/WebCrawlerForCommodityExchange";
import DiscordChannelJunitor from "../pages/projects/DiscordChannelJunitor";

export const MiniProjectDatas = [
  {
    title: "First Godot Project",
    thumbnail: knight_thumbnail,
    images: [knight_thumbnail, knight_enemy],
    darkThemeImageIndicator: false,
    skillIcons: (
      <>
        <Icon type={IconType.Git} />
        <Icon type={IconType.Godot} />
      </>
    ),
    githubUrl: "https://github.com/charlie275691502/Knight",
    demoUrl: "https://charlie275691502.github.io/Knight/",
    content: <Knight />,
  },
  {
    title: "Inferring Column Types of Dataset",
    thumbnail: inferring_column_types_of_the_dataset_image_thumbnail,
    images: [
      inferring_column_types_of_the_dataset_image_thumbnail,
      inferring_column_types_of_dataset_summary,
    ],
    darkThemeImageIndicator: true,
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
    thumbnail: web_crawler_for_commodity_exchange_thumbnail,
    images: [
      web_crawler_for_commodity_exchange_thumbnail,
      web_crawler_for_commodity_exchange_excel,
    ],
    darkThemeImageIndicator: false,
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
    thumbnail: discord_channel_junitor_thumbnail,
    images: [discord_channel_junitor_thumbnail],
    darkThemeImageIndicator: false,
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
];
