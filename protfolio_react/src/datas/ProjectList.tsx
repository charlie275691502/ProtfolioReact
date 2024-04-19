import Icon, { IconType } from "../components/Icon";
import inferring_column_types_of_the_dataset_image from "../images/inferring_column_types_of_dataset.png";
import web_crawler_for_commodity_exchange from "../images/web_crawler_for_commodity_exchange.png";
import WebCrawlerForCommodityExchange from "../pages/projects/WebCrawlerForCommodityExchange";
import InferingColumnTypesOfDataset from "../pages/projects/WebCrawlerForCommodityExchange";

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
    image: web_crawler_for_commodity_exchange,
    skillIcons: (
      <>
        <Icon type={IconType.Git} />
        <Icon type={IconType.Python} />
        <Icon type={IconType.Discord} />
      </>
    ),
    githubUrl: "https://github.com/charlie275691502/PRUN_CommodityPriceCrawler",
    demoUrl: undefined,
    content: <WebCrawlerForCommodityExchange />,
  },
];
