import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Flex, Link } from "@chakra-ui/react";
import SteamIcon from "assets/icons/steam.svg?react";
import EpicGamesIcon from "assets/icons/epic-games.svg?react";
import StepArrowIcon from "assets/images/home/step-arrow-icon.svg?react";
import { StartPlayHeader } from "../ui/start-play-header";
import { Step } from "../ui/step";
import { Separator } from "../ui/separator";

interface StartPlayProps {
  header: string;
}

export const StartPlay = ({ header }: StartPlayProps) => (
  <Box>
    <StartPlayHeader header={header} marginBottom="66px" />

    <Flex alignItems="stretch">
      <Flex flexBasis="33.333%" alignItems="stretch">
        <Step
          stepIndex="ШАГ 1"
          header="Купите и установите лицензионную GTA 5"
          description="Лицензионную GTA 5 можно купить в Steam, Epic Games или на других площадках цифровой дистрибуции."
          footer={
            <>
              <Flex gap="8px" justifyContent="center">
                <Link
                  as={ReactRouterLink}
                  variant="smallRoundedLight"
                  size="sm"
                  gap="12px"
                >
                  <SteamIcon width={20} height={20} />
                  steam
                </Link>
                <Link
                  as={ReactRouterLink}
                  variant="smallRoundedLight"
                  size="sm"
                  gap="12px"
                >
                  <EpicGamesIcon width={20} height={20} />
                  epic games
                </Link>
              </Flex>
            </>
          }
        />
      </Flex>

      <Box margin="0 50px" position="relative">
        <Separator height="100%" />
        <Box
          as={StepArrowIcon}
          position="absolute"
          top="50%"
          left="-36px"
          transform="translateY(-55%)"
        />
      </Box>

      <Flex flexBasis="33.333%" alignItems="stretch">
        <Step
          stepIndex="ШАГ 2"
          header="Установите 1wrp Multiplayer"
          description="Загрузите официальный лаунчер 1WRP. По окончании загрузки произведите установку лаунчера в место, не включающее файлы игры и без использования кириллических символов в пути."
          footer={
            <Link
              as={ReactRouterLink}
              variant="smallRoundedPrimary"
              size="sm"
              paddingTop="21px"
              paddingBottom="21px"
            >
              скачать лаунчер
            </Link>
          }
        />
      </Flex>

      <Box margin="0 50px" position="relative">
        <Separator height="100%" />
        <Box
          as={StepArrowIcon}
          position="absolute"
          top="50%"
          left="-42px"
          transform="translateY(-50%) rotate(-36deg)"
        />
      </Box>

      <Flex flexBasis="33.333%" alignItems="stretch">
        <Step
          stepIndex="ШАГ 3"
          header="Запустите лаунчер и подключайтесь"
          description="Запустите лаунчер и в открывшемся окне введите IP адрес выбранного сервера."
          footer={
            <Link
              as={ReactRouterLink}
              variant="smallRoundedLight"
              size="sm"
              paddingTop="21px"
              paddingBottom="21px"
            >
              выбрать сервер
            </Link>
          }
        />
      </Flex>
    </Flex>
  </Box>
);
