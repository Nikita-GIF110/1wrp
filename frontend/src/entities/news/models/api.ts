// import type { AxiosRequestConfig } from "axios";
// import { instance } from "shared/api";
import type { NewsFilter } from "./entities";
import { NEWS_LIST } from "./mocks";

// const URI = "news";

export const news = {
  getNews: async (params?: NewsFilter) => {
    console.log(params);
    return NEWS_LIST;
  },
};
