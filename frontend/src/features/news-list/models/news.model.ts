import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useNews as useNewsModel } from "entities/news";
import { useTranslate } from "shared/lib/useTranslate";
import { useI18N } from "shared/lib/useI18n";

export const useNewsPage = () => {
  const { lang } = useI18N()
  const translate = useTranslate()
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const activeTag = searchParams.get("tag");

  const getNews = useNewsModel((state) => state.getNewsList);
  const news = useNewsModel((state) => state.items);
  const listIsLoading = useNewsModel((state) => state.listIsLoading);

  const newsBlockItems = news.slice(0, 5);
  const newsList = news.slice(5);

  const tags = useMemo(() => ([
    { label: translate("news_list.filter_tag_all"), value: "all" },
    { label: translate("news_list.filter_tag_important"), value: "important" },
    { label: translate("news_list.filter_tag_updates"), value: "updates" },
  ]), [lang])

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
    isLoading: listIsLoading,
  };
};
