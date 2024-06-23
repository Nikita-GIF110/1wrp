import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Flex, Link } from "@chakra-ui/react";
import ArrowUp from "assets/icons/arrow-up.svg?react";
import { colors } from "shared/config/colors";
import { useMediaQuery } from "shared/lib/useMediaQuery";

interface NewInStoreProsp {
  image: string;
  header: string;
  subHeader: string;
}

export const NewInStore = ({ image, header, subHeader }: NewInStoreProsp) => {
  const { isDesktop } = useMediaQuery();

  return (
    <Flex
      width="100%"
      background="linear-gradient(108deg, #1781FF 13.53%, #0052B3 91.46%)"
      padding="32px 40px"
      borderRadius="md"
      overflow="hidden"
      alignItems="center"
      position="relative"
      justifyContent="space-between"
      columnGap="24px"
    >
      {isDesktop && (
        <Box
          as="img"
          src={image}
          position="absolute"
          top={0}
          right={0}
          pointerEvents="none"
        />
      )}

      <Box
        fontFamily="Halvar Engschrift"
        fontSize="56px"
        fontWeight={700}
        textTransform="uppercase"
        lineHeight="82%"
        color={colors.white}
        maxWidth={isDesktop ? "auto" : "45%"}
      >
        {header}
      </Box>

      {isDesktop && (
        <Box
          fontSize="16px"
          fontWeight={500}
          lineHeight="130%"
          letterSpacing="-0.5px"
          color={colors.white}
          maxWidth="286px"
          position="relative"
          flexGrow={1}
        >
          {subHeader}
        </Box>
      )}

      <Link
        as={ReactRouterLink}
        to="/"
        gap="19px"
        variant="medium"
        position="relative"
        size="md"
        marginLeft={isDesktop ? "auto" : 0}
      >
        открыть магазин
        <ArrowUp width={26} height={26} />
      </Link>
    </Flex>
  );
};
