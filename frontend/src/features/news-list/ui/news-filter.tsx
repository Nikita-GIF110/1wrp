import { Button } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SelectOption } from "entities/utils";
import { colors } from "shared/config/colors";

interface NewsFilterProps {
  tagFiltersList: Array<SelectOption>;
  activeTag: string;
  onSelectFilter: (selectedTag: string) => void;
}

export const NewsFilter = ({
  tagFiltersList,
  activeTag,
  onSelectFilter,
}: NewsFilterProps) => (
  <Swiper className="overflow-visible" spaceBetween={6} slidesPerView="auto">
    {tagFiltersList.map((tag) => {
      const isActive = tag.value === activeTag;

      return (
        <SwiperSlide key={tag.value} style={{ width: "auto" }}>
          <Button
            onClick={() => onSelectFilter(tag.value)}
            height="auto"
            padding="10px 16px"
            borderRadius="300px"
            fontSize="16px"
            fontWeight={700}
            textTransform="uppercase"
            lineHeight="82%"
            color={isActive ? colors.black : "rgba(238, 244, 248, 1)"}
            background={
              isActive
                ? colors.white
                : "linear-gradient(0deg, rgba(238, 244, 248, 0.20) 0%, rgba(238, 244, 248, 0.20) 100%), var(--Black, #0C0D11)"
            }
            _hover={{
              background: colors.blue.primary,
              color: colors.white,
            }}
            _active={{
              background: colors.gray.primary,
              color: "rgba(12, 13, 17, 0.6)",
            }}
          >
            {tag.label}
          </Button>
        </SwiperSlide>
      );
    })}
  </Swiper>
);
