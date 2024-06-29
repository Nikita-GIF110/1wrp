import { Flex, Button } from "@chakra-ui/react";
import { colors } from "shared/config/colors";
import { createPagination } from "features/news-list/lib/create-pagination";
import { useMediaQuery } from "shared/lib/useMediaQuery";

interface PaginationProps {
  onChangePage: (page: number) => void;
  totalPageCount: number;
  currentPage: number;
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
