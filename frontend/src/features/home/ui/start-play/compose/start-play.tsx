import { Box, Flex, Link } from "@chakra-ui/react";
import { useTranslate } from "shared/lib/useTranslate";
import SteamIcon from "assets/icons/steam.svg?react";
import EpicGamesIcon from "assets/icons/epic-games.svg?react";
import StepArrowIcon from "assets/images/home/step-arrow-icon.svg?react";
import { StartPlayHeader } from "../ui/start-play-header";
import { Step } from "../ui/step";
import { Separator } from "../ui/separator";

interface StartPlayProps {
  header: string;
  steamHref: string;
  epicGamesHref: string;
  downloadLauncherHref: string;
  chooseServerHref: string;
}

export const StartPlay = ({
  header,
  steamHref,
  epicGamesHref,
  downloadLauncherHref,
  chooseServerHref,
}: StartPlayProps) => {
  const translate = useTranslate();

  return (
    <Box>
      <StartPlayHeader header={header} marginBottom="66px" />

      <Flex alignItems="stretch">
        <Flex flexBasis="33.333%" alignItems="stretch">
          <Step
            stepIndex={translate("lending.step_one_title")}
            header={translate("lending.step_one_subtitle")}
            description={translate("lending.step_one_description")}
            footer={
              <>
                <Flex gap="8px" justifyContent="center">
                  <Link
                    href={steamHref}
                    target="_blank"
                    variant="smallRoundedLight"
                    size="sm"
                    gap="12px"
                  >
                    <SteamIcon width={20} height={20} />
                    steam
                  </Link>
                  <Link
                    href={epicGamesHref}
                    target="_blank"
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
            stepIndex={translate("lending.step_two_title")}
            header={translate("lending.step_two_subtitle")}
            description={translate("lending.step_two_description")}
            footer={
              <Link
                href={downloadLauncherHref}
                target="_blank"
                variant="smallRoundedPrimary"
                size="sm"
                paddingTop="21px"
                paddingBottom="21px"
              >
                {translate("lending.step_two_dwnload_launcher_button_texy")}
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
            stepIndex={translate("lending.step_three_title")}
            header={translate("lending.step_three_subtitle")}
            description={translate("lending.step_three_description")}
            footer={
              <Link
                href={chooseServerHref}
                variant="smallRoundedLight"
                size="sm"
                paddingTop="21px"
                paddingBottom="21px"
              >
                {translate("lending.step_two_select_server_button_texy")}
              </Link>
            }
          />
        </Flex>
      </Flex>
    </Box>
  );
};
