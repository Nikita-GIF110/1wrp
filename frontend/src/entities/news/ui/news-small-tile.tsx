import { Link } from "react-router-dom";
import type { BoxProps } from "@chakra-ui/react";
import { Badge, Box, Stack } from "@chakra-ui/react";
import LazyLoad from "react-lazyload";
import { colors } from "shared/config/colors";
import { useTranslate } from "shared/lib/useTranslate";

interface NewsSmallTileProps extends Omit<BoxProps, "id"> {
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

export const NewsSmallTile = ({
  id,
  isNew,
  header,
  subHeader,
  to,
  image,
  ...boxProps
}: NewsSmallTileProps) => {
  const translate = useTranslate();

  return (
    <Box
      id={id}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      as={Link}
      to={to}
      borderRadius="md"
      overflow="hidden"
      padding="22px"
      title={image.title}
      backgroundColor={colors.blue.primary}
      position="relative"
      minHeight="230px"
      sx={{
        ".hover-traget-text": {
          transition: "transform 0.2s ease-in-out",
        },
      }}
      _after={{
        content: "''",
        display: { base: "block", md: "none" },
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: colors.black,
        opacity: 0.45,
        zIndex: 1,
      }}
      _hover={{
        ".hover-target-image": {
          transform: "scale(1.1)",
        },

        ".hover-traget-text": {
          transform: "translateY(-20px)",
        },
      }}
      {...boxProps}
    >
      {isNew && (
        <Stack
          direction="row"
          gap="6px"
          position="relative"
          marginBottom="25px"
          zIndex={2}
        >
          <Badge variant="boxy">News</Badge>
          <Badge variant="boxyDark">{translate("news_item.date")}</Badge>
        </Stack>
      )}

      <LazyLoad once offset={100}>
        <Box
          as="img"
          src={image.src}
          pointerEvents="none"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          backgroundSize="cover"
          transition="transform 0.3s ease-in-out"
          className="hover-target-image"
        />
      </LazyLoad>

      <Box
        color={colors.white}
        position="relative"
        className="hover-traget-text"
        zIndex={2}
      >
        <Box
          fontSize="32px"
          fontWeight={900}
          lineHeight="80%"
          letterSpacing="-1px"
          color={colors.white}
        >
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {translate(header as any)}
        </Box>

        <Box
          fontSize="16px"
          fontWeight={500}
          lineHeight="130%"
          letterSpacing="-0.5px"
          marginTop={{ base: " 12px", md: "10px" }}
          marginRight={{ base: "5px", md: "10px" }}
          position="relative"
        >
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {translate(subHeader as any)}
        </Box>
      </Box>
    </Box>
  );
};
