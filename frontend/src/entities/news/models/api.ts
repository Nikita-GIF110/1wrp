// import type { AxiosRequestConfig } from "axios";
// import { instance } from "shared/api";
// import type { NewsFilter } from "./entities";
import { NEWS_LIST } from "./mocks";

// const URI = "news";

export const news = {
  // params?: NewsFilter
  getNews: async () => {
    return NEWS_LIST;
  },
};
