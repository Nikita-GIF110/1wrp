import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Flex, Link } from "@chakra-ui/react";
import ArrowUp from "assets/icons/arrow-up.svg?react";
import newInStoreImage from "assets/images/home/new-in-store-image.png";
import { colors } from "shared/config/colors";
import { useMediaQuery } from "shared/lib/useMediaQuery";

interface NewInStoreProsp {
  image?: string;
  header: string;
  subHeader: string;
  linkHref: string;
}

const NewInStore = ({
  image = newInStoreImage,
  header,
  subHeader,
  linkHref,
}: NewInStoreProsp) => {
  const { isDesktop } = useMediaQuery();

  return (
    <Flex
      width="100%"
      background="linear-gradient(108deg, #1781FF 13.53%, #0052B3 91.46%)"
      padding={{ base: "32px 0 0 0", md: "32px 40px" }}
      borderRadius="md"
      overflow="hidden"
      position="relative"
      gap="24px"
      textAlign={{ base: "center", md: "left" }}
      alignItems={{ md: "center" }}
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row" }}
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
        maxWidth={{ base: "auto", md: "45%", xl: "auto" }}
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
        to={linkHref}
        gap="19px"
        variant="medium"
        position="relative"
        size="md"
        justifyContent="space-between"
        marginLeft={{ base: 0, md: "auto" }}
      >
        {isDesktop ? "открыть магазин" : "магазин"}
        <ArrowUp width={26} height={26} />
      </Link>
    </Flex>
  );
};

export default NewInStore;
