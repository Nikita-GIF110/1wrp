import { Box, Heading, Flex, Text, Link } from "@chakra-ui/react";
import LazyLoad from "react-lazyload";
import videoPlaceholder from "assets/images/home/video-placeholder.png";
import video from "assets/videos/intro-video.mp4";
import introImageDesktop from "assets/images/home/home-intro.png";
import introImageMobile from "assets/images/home/home-intro-mobile.png";
import BottomRightDecor from "assets/images/home/intro-decor-svg.svg?react";
import ArrowUp from "assets/icons/arrow-up.svg?react";
import { colors } from "shared/config/colors";
import { useMediaQuery } from "shared/lib/useMediaQuery";
import { BottomLeftDecor } from "../ui/bottom-left-decor";
import { useTranslate } from "shared/lib/useTranslate";
import { useI18N } from "shared/lib/useI18n";

interface IntroProps {
  linkHref: string;
}

export const Intro = ({ linkHref }: IntroProps) => {
  const { isDesktop } = useMediaQuery();
  const translate = useTranslate();
  const { lang } = useI18N();

  const isRu = lang === "ru";

  return (
    <Flex
      alignItems="flex-end"
      position="relative"
      overflow="hidden"
      height={{ base: "430px", md: "830px", xl: "930px" }}
      padding={{ base: "12px", md: "47px 45px 65px 45px", xl: "64px" }}
      marginTop={{ base: "72px", md: 0 }}
    >
      <Box
        as="video"
        autoPlay
        preload="auto"
        loop
        muted
        poster={videoPlaceholder}
        position="absolute"
        objectFit="cover"
        top={0}
        left={0}
        width="100%"
        height="100%"
      >
        <source src={video} type="video/mp4" />
      </Box>

      {/* Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        backgroundColor="#0C6AD9"
        opacity={0.6}
      />

      <LazyLoad once>
        <Box
          as="img"
          src={introImageMobile}
          alt="Главное изображение"
          srcSet={`${introImageMobile} 768w, ${introImageDesktop} 1440w`}
          sizes="(max-width: 767px) 768px, 1440px"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          objectFit="cover"
          objectPosition="center"
          pointerEvents="none"
        />
      </LazyLoad>

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

      <Flex
        flexDirection="column"
        position="relative"
        textAlign="center"
        gap={{ base: "8px", md: "50px", xl: "56px" }}
        maxWidth="1010px"
        width="100%"
        margin="0 auto"
        flexGrow={1}
      >
        <Flex flexDirection="column" gap={{ base: "8px", xl: "20px" }}>
          <Heading
            as="h1"
            textTransform="uppercase"
            fontWeight={900}
            color={colors.white}
            margin="0 auto"
            lineHeight="80%"
            fontSize={{ base: "32px", md: "52px", xl: "100px" }}
            maxWidth={{ base: "100%", md: "525px", xl: "1010px" }}
          >
            {translate("lending.intro_top_title")}
            <br />
            {translate("lending.intro_bottom_title")}
          </Heading>

          <Text
            fontWeight={900}
            textTransform="uppercase"
            color={colors.white}
            fontSize={{ base: "12px", md: "16px", xl: "24px" }}
            letterSpacing={{ base: "0.48px", md: "0.64px", xl: "0.96px" }}
          >
            {translate("lending.intro_subtitle")}
          </Text>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="center"
          columnGap="43px"
          rowGap="16px"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Link
            href={linkHref}
            display="flex"
            alignItems="center"
            gap="19px"
            variant={{ base: "medium", md: "large" }}
            size={{ base: "md", md: "lg" }}
            order={{ base: 2, md: 1 }}
          >
            {translate("lending.intro_button_text")}
            {/* {isDesktop ? "Начать игру" : "Регистрация"} */}

            <ArrowUp width={28} height={28} />
          </Link>

          <Box order={{ base: 1, md: 2 }}>
            <Flex gap="12px" alignItems="center">
              <Box
                fontSize={{ base: "16px", md: "27px" }}
                fontWeight={500}
                textTransform="uppercase"
                lineHeight="98%"
                color={colors.white}
                fontFamily="Halvar Engschrift"
                maxWidth={{ base: isRu ? "47" : "85px", md: isRu ? "80px" : "150px" }}
              >
                {translate("lending.intro_players_online")}
              </Box>

              <Box
                fontSize={{ base: "40px", md: "67px" }}
                color={colors.acidic.primary}
                fontWeight={900}
                lineHeight="80%"
              >
                7420
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
