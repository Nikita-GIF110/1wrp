import { useSearchParams } from "react-router-dom";
import { useNews as useNewsModel } from "entities/news";

const tags = [
  { label: "все", value: "all" },
  { label: "важные", value: "important" },
  { label: "обновления", value: "updates" },
];

export const useNewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const activeTag = searchParams.get("tag");

  const getNews = useNewsModel((state) => state.getNews);
  const news = useNewsModel((state) => state.items);
  const isLoading = useNewsModel((state) => state.isLoading);

  const newsBlockItems = news.slice(0, 5);
  const newsList = news.slice(5);

  const params = {
    page: page ? parseInt(page, 10) : 1,
    activeTag: activeTag || "all",
  };

  const onSelectFilter = (tag: string) => {
    searchParams.set("tag", tag);
    setSearchParams(searchParams);
  };

  const onChangePage = (page: number) => {
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  };

  return {
    tags,
    onSelectFilter,
    getNews,
    onChangePage,
    params,
    newsBlockItems,
    newsList,
    isLoading,
  };
};
