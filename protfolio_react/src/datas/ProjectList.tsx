import inferring_column_types_of_the_dataset_image from "../images/inferring_column_types_of_dataset.png";
import web_crawler_for_commodity_exchange from "../images/web_crawler_for_commodity_exchange.png";
import WebCrawlerForCommodityExchange from "../pages/projects/WebCrawlerForCommodityExchange";
import InferingColumnTypesOfDataset from "../pages/projects/WebCrawlerForCommodityExchange";
import {
  SiDjango,
  SiGit,
  SiJavascript,
  SiPython,
  SiReact,
  SiSelenium,
} from "react-icons/si";

export const ProjectDatas = [
  {
    title: "Inferring Column Types of Dataset",
    image: inferring_column_types_of_the_dataset_image,
    skillIcons: (
      <>
        <SiGit className="technology-icon" />
        <SiDjango className="technology-icon" />
        <SiReact className="technology-icon" />
        <SiPython className="technology-icon" />
        <SiJavascript className="technology-icon" />
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
        <SiGit className="technology-icon" />
        <SiPython className="technology-icon" />
        <SiSelenium className="technology-icon" />
      </>
    ),
    githubUrl: "https://github.com/charlie275691502/PRUN_CommodityPriceCrawler",
    demoUrl: undefined,
    content: <WebCrawlerForCommodityExchange />,
  },
];
