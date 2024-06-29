import { Flex, Button } from "@chakra-ui/react";
import { colors } from "shared/config/colors";
import { useMediaQuery } from "shared/lib/useMediaQuery";

interface PaginationProps {
  onChangePage: (page: number) => void;
  totalPageCount: number;
  currentPage: number;
}

function createPagination(
  currentPage: number,
  totalPages: number,
  visiblePages = 5
) {
  const pagination = [];

  // Добавляем первую страницу всегда
  pagination.push(1);

  // Рассчитываем начальную и конечную страницы
  let startPage = Math.max(2, currentPage - Math.floor(visiblePages / 2));
  let endPage = Math.min(
    totalPages - 1,
    currentPage + Math.floor(visiblePages / 2)
  );

  // Корректируем начальную и конечную страницы, если они выходят за границы
  if (currentPage <= Math.floor(visiblePages / 2)) {
    endPage = Math.min(totalPages - 1, visiblePages);
  }

  if (currentPage > totalPages - Math.floor(visiblePages / 2)) {
    startPage = Math.max(2, totalPages - visiblePages + 1);
  }

  // Добавляем точки перед начальной страницей, если она не рядом с первой страницей
  if (startPage > 2) {
    pagination.push("...");
  }

  // Добавляем страницы между первой и последней
  for (let i = startPage; i <= endPage; i++) {
    pagination.push(i);
  }

  // Добавляем точки после конечной страницы, если она не рядом с последней страницей
  if (endPage < totalPages - 1) {
    pagination.push("...");
  }

  // Добавляем последнюю страницу, если она больше 1
  if (totalPages > 1) {
    pagination.push(totalPages);
  }

  return pagination;
}

export const Pagination = ({
  onChangePage,
  totalPageCount,
  currentPage,
}: PaginationProps) => {
  const { isDesktop } = useMediaQuery();
  const visiblePages = isDesktop ? 5 : 2;
  const pages = createPagination(currentPage, totalPageCount, visiblePages);

  const onClick = (page: string | number) => () => {
    if (typeof page === "number") {
      onChangePage(page);
    }
  };

  return (
    <Flex display="inline-flex" gap="12px">
      {pages.map((page) => (
        <Button
          key={page}
          display="flex"
          alignItems="center"
          justifyContent="center"
          background={
            page === currentPage
              ? colors.blue.primary
              : "rgba(238, 244, 248, 0.10)"
          }
          color={colors.white}
          borderRadius="4px"
          fontSize={{ xl: "32px" }}
          fontWeight={900}
          lineHeight="80%"
          letterSpacing="-1px"
          padding="16px"
          _hover={{
            background: colors.blue.primary,
          }}
          _active={{
            background: colors.blue.primary,
            opacity: 0.8,
          }}
          onClick={onClick(page)}
        >
          {page}
        </Button>
      ))}
    </Flex>
  );
};
