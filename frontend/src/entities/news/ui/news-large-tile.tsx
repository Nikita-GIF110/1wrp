import { Link as ReactRouterLink } from "react-router-dom";
import type { BoxProps } from "@chakra-ui/react";
import LazyLoad from "react-lazyload";
import { Badge, Box, Link, Stack } from "@chakra-ui/react";
import ArrowUp from "assets/icons/arrow-up.svg?react";
import { colors } from "shared/config/colors";
import { useTranslate } from "shared/lib/useTranslate";

interface NewsLargeTileProps extends Omit<BoxProps, "id"> {
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

export const NewsLargeTile = ({
  id,
  isNew,
  header,
  subHeader,
  to,
  image,
  ...boxProps
}: NewsLargeTileProps) => {
  const translate = useTranslate();

  return (
    <Box
      id={id}
      display="flex"
      flexDirection="column"
      padding="44px"
      justifyContent="space-between"
      alignItems="flex-start"
      borderRadius="md"
      overflow="hidden"
      title={image.title}
      backgroundColor={colors.blue.primary}
      position="relative"
      _after={{
        content: "''",
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        opacity: 0.4,
        transform: "translateY(100%)",
        transition: "transform 0.2s ease-in-out",
        transformOrigin: "bottom",
        pointerEvents: "none",
        background:
          "linear-gradient(180deg, rgba(26, 26, 26, 0.00) 0%, rgba(26, 26, 26, 0.08) 19%, #1A1A1A 100%)",
      }}
      _hover={{
        ".hover-target-image": {
          transform: "scale(1.1)",
        },
        _after: {
          transform: "translateY(0)",
        },
      }}
      {...boxProps}
    >
      {isNew && (
        <Stack direction="row" gap="6px" position="relative">
          <Badge variant="boxy">News</Badge>
          <Badge variant="boxyDark">{translate("news_item.date")}</Badge>
        </Stack>
      )}

      <LazyLoad once offset={100}>
        <Box
          as="img"
          className="hover-target-image"
          src={image.src}
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          objectFit="cover"
          pointerEvents="none"
          transition="transform 0.3s ease-in-out"
        />
      </LazyLoad>

      <Box
        color={colors.white}
        marginRight="220px"
        position="relative"
        zIndex={2}
      >
        <Box
          fontSize="44px"
          fontWeight={900}
          lineHeight="80%"
          letterSpacing="-1px"
          color={colors.white}
        >
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {translate(header as any)}
        </Box>

        <Box
          fontSize="20px"
          fontWeight={500}
          lineHeight="130%"
          letterSpacing="-1px"
          marginTop="10px"
          marginRight="10px"
        >
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {translate(subHeader as any)}
        </Box>
      </Box>

      <Link
        as={ReactRouterLink}
        preventScrollReset={false}
        to={to}
        variant="medium"
        gap="16px"
        size="md"
        zIndex={2}
      >
        {translate("news_item.learn_more_button_text")}
        <Box as={ArrowUp} width="26px" height="26px" />
      </Link>
    </Box>
  );
};
