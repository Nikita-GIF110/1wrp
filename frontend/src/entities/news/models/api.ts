/* eslint-disable @typescript-eslint/no-unused-vars */
// import type { AxiosRequestConfig } from "axios";
// import { instance } from "shared/api";
import type { NewsFilter } from "./entities";
import { NEWS_LIST, NEWS } from "./mocks";

// const URI = "news";

export const news = {
  getNewsList: async (_params?: NewsFilter) => {
    return NEWS_LIST;
  },
  getNews: async (_newsId: string) => {
    return NEWS;
  },
};
