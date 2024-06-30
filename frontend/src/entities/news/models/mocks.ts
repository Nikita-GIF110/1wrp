import news1 from "assets/images/home/news-image-1.webp";
import news2 from "assets/images/home/news-image-1.webp";
import news3 from "assets/images/home/news-image-3.webp";
import news4 from "assets/images/home/news-image-2.webp";
import detailNewsImage from "assets/images/news/detail-news.webp";

import type { NewsEntity } from "./entities";

export const NEWS_LIST: Array<NewsEntity> = [
  {
    id: 1,
    isNew: true,
    header: "news_item.updating_faction_system_title",
    subHeader: "news_item.updating_faction_system_subtitle",
    to: "/news/1",
    image: {
      src: news1,
      alt: "",
      title: "",
    },
  },
  {
    id: 2,
    isNew: true,
    header: "news_item.usual_news_title",
    subHeader: "news_item.usual_news_subtitle",
    to: "/news/2",
    image: {
      src: news2,
      alt: "",
      title: "",
    },
  },
  {
    id: 3,
    isNew: true,
    header: "news_item.usual_news_title",
    subHeader: "news_item.usual_news_subtitle",
    to: "/news/3",
    image: {
      src: news3,
      alt: "",
      title: "",
    },
  },
  {
    id: 4,
    isNew: true,
    header: "news_item.usual_news_title",
    subHeader: "news_item.usual_news_subtitle",
    to: "/news/4",
    image: {
      src: news4,
      alt: "",
      title: "",
    },
  },
  {
    id: 5,
    isNew: true,
    header: "news_item.usual_news_title",
    subHeader: "news_item.usual_news_subtitle",
    to: "/news/5",
    image: {
      src: news1,
      alt: "",
      title: "",
    },
  },
  {
    id: 6,
    isNew: true,
    header: "news_item.usual_news_title",
    subHeader: "news_item.usual_news_subtitle",
    to: "/news/6",
    image: {
      src: news3,
      alt: "",
      title: "",
    },
  },
  {
    id: 7,
    isNew: true,
    header: "news_item.usual_news_title",
    subHeader: "news_item.usual_news_subtitle",
    to: "/news/6",
    image: {
      src: news4,
      alt: "",
      title: "",
    },
  },
  {
    id: 8,
    isNew: true,
    header: "news_item.usual_news_title",
    subHeader: "news_item.usual_news_subtitle",
    to: "/news/6",
    image: {
      src: news2,
      alt: "",
      title: "",
    },
  },
  {
    id: 9,
    isNew: true,
    header: "news_item.usual_news_title",
    subHeader: "news_item.usual_news_subtitle",
    to: "/news/6",
    image: {
      src: news4,
      alt: "",
      title: "",
    },
  },
];

export const NEWS: NewsEntity = {
  id: 1,
  isNew: true,
  header: "news_item.updating_faction_system_title",
  subHeader: "Представляем вам обновленную систем фракция",
  to: "/news/1",
  image: {
    src: detailNewsImage,
    alt: "",
    title: "",
  },
};
