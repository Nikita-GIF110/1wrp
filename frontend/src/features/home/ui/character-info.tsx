import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Flex, Link } from "@chakra-ui/react";
import MaximizeIcon from "assets/images/home/maximize-icon.svg?react";
import { colors } from "shared/config/colors";

interface CharacterInfoProps {
  previewImage: {
    src: string;
    alt: string;
    title: string;
  };
  gradientBg: string;
  //   images: Array<{
  //     src: string;
  //     alt: string;
  //     title: string;
  //   }>;
  //   description: string;
  //   name: string;
}

export const CharacterInfo = ({
  previewImage,
  gradientBg,
}: CharacterInfoProps) => (
  <Box>
    <Flex columnGap="20px" marginBottom="32px">
      <Box
        background={gradientBg}
        width="160px"
        height="300px"
        borderRadius="8px"
        overflow="hidden"
      >
        <Box
          as="img"
          src={previewImage.src}
          alt={previewImage.alt}
          title={previewImage.title}
          maxWidth="100%"
          height="auto"
          pointerEvents="none"
        />
      </Box>

      <Box
        flexGrow={1}
        backgroundColor="#5B5B5B"
        borderRadius="8px"
        overflow="hidden"
      />
    </Flex>

    <Box marginBottom="32px">
      <Box
        fontSize="28px"
        lineHeight="100%"
        letterSpacing="-0.56px"
        textTransform="uppercase"
        fontWeight={700}
        marginBottom="10px"
      >
        {/* {name} */}
        Federal Investigation Bureau
      </Box>

      <Box
        fontSize="16px"
        lineHeight="130%"
        letterSpacing="-1px"
        textTransform="uppercase"
        fontWeight={500}
        opacity={0.6}
      >
        {/* {description}
         */}
        Federal Investigation Bureau (FIB) - правительственная
        правоохранительная организация занимающаяся тяжкими и особо тяжкими
        преступлениями, а так же внутренней и внешней разведкой. На территории
        штата занимается, финансовыми преступлениями, преступлениями связанными
        с государственными служащими.
      </Box>
    </Box>

    <Flex gap="17px" marginBottom="32px">
      {[0, 1, 2].map((item) => (
        <Box
          key={item}
          position="relative"
          borderRadius="8px"
          overflow="hidden"
          backgroundColor="#5B5B5B"
          flex="0 1 calc(33.33% - 17px)"
          height="160px"
          color={colors.white}
          cursor="pointer"
          _hover={{
            ".hover-target-icon": {
              opacity: 1,
            },
          }}
        >
          <Box
            as={MaximizeIcon}
            width="32px"
            height="32px"
            className="hover-target-icon"
            opacity={0}
            transition="opacity 0.2s ease-in-out"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          />
        </Box>
      ))}
    </Flex>

    <Link as={ReactRouterLink} variant="medium" size="md">
      подробнее
    </Link>
  </Box>
);
