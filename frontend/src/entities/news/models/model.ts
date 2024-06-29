import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { news } from "./api";
import type { Store, Actions } from "./entities";

export const useNews = create<Store & Actions>()(
  immer((set) => ({
    // News list
    items: [],
    listHasError: false,
    listIsLoading: true,
    getNewsList: async (filterparams) => {
      try {
        const items = await news.getNewsList(filterparams);
        set({ items });
      } catch (error) {
        set({ listHasError: true });
      } finally {
        set({ listIsLoading: false });
      }
    },

    // News
    news: null,
    newsHasError: false,
    newsIsLoading: true,
    getNews: async (newsId) => {
      try {
        const newsItem = await news.getNews(newsId);

        set({ news: newsItem });
      } catch (error) {
        set({ newsHasError: true });
      } finally {
        set({ newsIsLoading: false });
      }
    },
  }))
);
