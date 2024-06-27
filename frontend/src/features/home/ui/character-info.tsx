import { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Flex, Link, useDisclosure } from "@chakra-ui/react";
import Lightbox from "yet-another-react-lightbox";

import MaximizeIcon from "assets/images/home/maximize-icon.svg?react";
import { colors } from "shared/config/colors";

interface CharacterInfoProps {
  characterpreviewImage: {
    src: string;
    alt: string;
    title: string;
  };
  gradientBg: string;
  images: Array<{
    src: string;
    alt: string;
    title: string;
  }>;
}

const CharacterInfo = ({
  characterpreviewImage,
  gradientBg,
  images = [],
}: CharacterInfoProps) => {
  const lightboxState = useDisclosure();
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const previewImage = images[0];
  const lightBoxImages = images.slice(1);

  const onShowSlide = (slideIndex: number) => () => {
    setActiveSlideIndex(slideIndex);
    lightboxState.onOpen();
  };

  return (
    <>
      <Box>
        <Flex
          columnGap="20px"
          marginBottom="32px"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            background={gradientBg}
            width="160px"
            height="300px"
            borderRadius="8px"
            overflow="hidden"
            display={{ base: "none", md: "block" }}
          >
            <Box
              as="img"
              src={characterpreviewImage.src}
              alt={characterpreviewImage.alt}
              title={characterpreviewImage.title}
              objectFit="cover"
              width="100%"
              height="100%"
              pointerEvents="none"
            />
          </Box>

          <Box
            flexGrow={1}
            backgroundColor="#5B5B5B"
            borderRadius="8px"
            overflow="hidden"
            height="300px"
            backgroundImage={previewImage.src}
            backgroundPosition="center"
            backgroundSize="cover"
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
            fontWeight={500}
            opacity={0.6}
            fontFamily="Halvar Breitschrift"
          >
            {/* {description}
             */}
            Federal Investigation Bureau (FIB) - правительственная
            правоохранительная организация занимающаяся тяжкими и особо тяжкими
            преступлениями, а так же внутренней и внешней разведкой. На
            территории штата занимается, финансовыми преступлениями,
            преступлениями связанными с государственными служащими.
          </Box>
        </Box>

        <Flex gap="17px" marginBottom="32px">
          {lightBoxImages.map(({ src, title }, index) => (
            <Box
              key={src}
              position="relative"
              borderRadius="8px"
              overflow="hidden"
              backgroundColor="#5B5B5B"
              flex="1 1 calc(33.33% - 17px)"
              height="160px"
              color={colors.white}
              cursor="pointer"
              backgroundImage={src}
              backgroundPosition="center"
              backgroundSize="cover"
              title={title}
              _hover={{
                ".hover-target-icon": {
                  opacity: 1,
                },
              }}
              onClick={onShowSlide(index)}
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

        <Link
          as={ReactRouterLink}
          variant="medium"
          size="md"
          marginBottom="24px"
        >
          подробнее
        </Link>
      </Box>

      <Lightbox
        open={lightboxState.isOpen}
        close={lightboxState.onClose}
        slides={lightBoxImages}
        index={activeSlideIndex}
      />
    </>
  );
};

export default CharacterInfo
