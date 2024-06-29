import type { Nullable } from "entities/utils";

export interface NewsEntity {
  id: number;
  isNew: boolean;
  header: string;
  subHeader: string;
  to: string;
  image: {
    src: string;
    alt: string;
    title: string;
  };
}

export interface NewsFilter
  extends Partial<{
    page?: number;
    perPage: number;
  }> {}

export interface Store {
  items: Array<NewsEntity>;
  listHasError: boolean;
  listIsLoading: boolean;

  news: Nullable<NewsEntity>;
  newsHasError: boolean;
  newsIsLoading: boolean;
}

export interface Actions {
  getNewsList: (params?: NewsFilter) => void;
  getNews: (newsId: string) => void;
}
