import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { news } from "./api";
import type { Store, Actions } from "./entities";

export const useNews = create<Store & Actions>()(
  immer((set) => ({
    items: [],
    hasError: false,
    isLoading: true,
    getNews: async (filterparams) => {
      set({ isLoading: true });

      try {
        const items = await news.getNews(filterparams);
        set({ items });
      } catch (error) {
        set({ hasError: true });
      } finally {
        set({ isLoading: false });
      }
    },
  }))
);
