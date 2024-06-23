import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Heading, Flex, Text, Link } from "@chakra-ui/react";
import videoPlaceholder from "assets/images/home/video-placeholder.png";
import introImage from "assets/images/home/home-intro.png";
import BottomRightDecor from "assets/images/home/intro-decor-svg.svg?react";
import ArrowUp from "assets/icons/arrow-up.svg?react";
import { colors } from "shared/config/colors";
import { useMediaQuery } from "shared/lib/useMediaQuery";

const BottomLeftDecor = () => (
  <Flex alignItems="flex-end">
    <Box
      width="63px"
      height="63px"
      borderBottom="8px"
      borderLeft="8px"
      borderColor={colors.white}
    />

    <Box
      fontSize="38px"
      fontWeight={700}
      textTransform="uppercase"
      lineHeight="80%"
      color={colors.white}
      marginLeft="35px"
      fontFamily="Halvar Engschrift"
    >
      GTA V Project
    </Box>
  </Flex>
);

const PlayersOnlineCount = ({ count }: { count: number }) => (
  <Flex gap="12px" alignItems="center">
    <Box
      fontSize="27px"
      fontWeight={500}
      textTransform="uppercase"
      lineHeight="98%"
      color={colors.white}
      fontFamily="Halvar Engschrift"
    >
      Сейчас
      <br />
      играют
    </Box>

    <Box fontSize="67px" color={colors.acidic.primary} fontWeight={900}>
      {count}
    </Box>
  </Flex>
);

const getStyleForRoot = (
  isMobile: boolean,
  isTablet: boolean,
  isDesktop: boolean
) => {
  if (isDesktop) {
    return {
      height: "930px",
      padding: "60px",
    };
  }

  if (isTablet) {
    return {
      height: "830px",
      padding: "47px 45px 65px 45px",
    };
  }

  if (isMobile) {
    return {
      height: "502px",
      padding: "0",
    };
  }
};
const getStyleForMainHeader = (
  isMobile: boolean,
  isTablet: boolean,
  isDesktop: boolean
) => {
  if (isDesktop) {
    return {
      fontSize: "100px",
      maxWidth: "1010px",
    };
  }

  if (isTablet) {
    return {
      fontSize: "52px",
      maxWidth: "525px",
    };
  }

  if (isMobile) {
    return {
      fontSize: "32px",
      maxWidth: "100%",
    };
  }
};
const getStyleForSubHeader = (
  isMobile: boolean,
  isTablet: boolean,
  isDesktop: boolean
) => {
  if (isDesktop) {
    return {
      fontSize: "24px",
      letterSpacing: "0.96px",
    };
  }

  if (isTablet) {
    return {
      fontSize: "16px",
      letterSpacing: "0.64px",
    };
  }

  if (isMobile) {
    return {
      fontSize: "12px",
      letterSpacing: "0.48px",
    };
  }
};

export const Intro = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQuery();

  return (
    <Flex
      backgroundImage={videoPlaceholder}
      backgroundSize="contain"
      backgroundPosition="bottom center"
      alignItems="flex-end"
      position="relative"
      overflow="hidden"
      {...getStyleForRoot(isMobile, isTablet, isDesktop)}
    >
      {isDesktop && (
        <Flex
          position="absolute"
          width="100%"
          height="100%"
          bottom={0}
          left={0}
          alignItems="flex-end"
          justifyContent="space-between"
          padding="60px"
        >
          <BottomLeftDecor />
          <BottomRightDecor />
        </Flex>
      )}

      <Box
        as="img"
        src={introImage}
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        objectFit="cover"
        objectPosition="center"
        pointerEvents="none"
      />

      <Flex
        flexDirection="column"
        position="relative"
        textAlign="center"
        gap="50px"
        maxWidth="1010px"
        margin="0 auto"
        flexGrow={1}
      >
        <Flex flexDirection="column" gap="20px">
          <Heading
            as="h1"
            textTransform="uppercase"
            fontWeight={900}
            color={colors.white}
            margin="0 auto"
            lineHeight="80%"
            {...getStyleForMainHeader(isMobile, isTablet, isDesktop)}
          >
            место, где
            <br />
            все возможно
          </Heading>

          <Text
            fontWeight={900}
            textTransform="uppercase"
            color={colors.white}
            {...getStyleForSubHeader(isMobile, isTablet, isDesktop)}
          >
            Ваша история, ваш выбор, ваша игра
          </Text>
        </Flex>

        <Flex alignItems="center" justifyContent="center" columnGap="43px">
          <Link
            as={ReactRouterLink}
            to="/"
            display="flex"
            alignItems="center"
            gap="19px"
            variant="large"
            size="lg"
          >
            {isDesktop ? "Начать игру" : "Регистрация"}

            <ArrowUp width={28} height={28} />
          </Link>

          <PlayersOnlineCount count={7420} />
        </Flex>
      </Flex>
    </Flex>
  );
};
