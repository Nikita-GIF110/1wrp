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
  hasError: boolean;
  isLoading: boolean;
}

export interface Actions {
  getNews: (params?: NewsFilter) => void;
}
