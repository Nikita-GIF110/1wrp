import type { ButtonProps } from "@chakra-ui/react";
import { Box, Flex, Button } from "@chakra-ui/react";
import OneWin from "assets/icons/auth-with-1w.svg?react";
import Discord from "assets/icons/auth-with-discord.svg?react";
import Vk from "assets/icons/auth-with-vk.svg?react";
import Telegram from "assets/icons/auth-with-telegram.svg?react";
import Google from "assets/icons/auth-with-google.svg?react";
import { colors } from "shared/config/colors";

interface AuthWithSocialNetworkProps {
    onAuth: (networkId: string) => void
}

const Item = ({ children, ...otherProps }: ButtonProps) => (
  <Button
    justifyContent="center"
    alignItems="center"
    flex="1 1 auto"
    borderRadius="4px"
    backgroundColor="#D1DAE0"
    color={colors.black}
    height={{ base: "52px", xl: "66px" }}
    padding="8px 12px"
    transition="background-color 0.2s ease-in"
    _hover={{
      backgroundColor: "#fff",
      ".hover-traget-icon": {
        opacity: 0.6,
      },
    }}
    _active={{
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      ".hover-traget-icon": {
        opacity: 0.4,
      },
    }}
    {...otherProps}
  >
    {children}
  </Button>
);

export const AuthWithSocialNetwork = ({ onAuth }: AuthWithSocialNetworkProps) => (
  <Flex gap="4px">
    <Item onClick={() => onAuth("google")}>
      <Box
        as={Google}
        width="42px"
        height="42px"
        opacity={0.4}
        className="hover-traget-icon"
        transition="opacity 0.2s ease-in"
      />
    </Item>

    <Item onClick={() => onAuth("vk")}>
      <Box
        as={Vk}
        width="42px"
        height="42px"
        opacity={0.4}
        className="hover-traget-icon"
        transition="opacity 0.2s ease-in"
      />
    </Item>

    <Item onClick={() => onAuth("1win")}>
      <Box
        as={OneWin}
        width="42px"
        height="42px"
        opacity={0.4}
        className="hover-traget-icon"
        transition="opacity 0.2s ease-in"
      />
    </Item>

    <Item onClick={() => onAuth("discord")}>
      <Box
        as={Discord}
        width="42px"
        height="42px"
        opacity={0.4}
        className="hover-traget-icon"
        transition="opacity 0.2s ease-in"
      />
    </Item>

    <Item onClick={() => onAuth("telegram")}>
      <Box
        as={Telegram}
        width="42px"
        height="42px"
        opacity={0.4}
        className="hover-traget-icon"
        transition="opacity 0.2s ease-in"
      />
    </Item>
  </Flex>
);
