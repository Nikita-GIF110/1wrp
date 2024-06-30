import { useState, useId } from "react";
import type { MenuProps } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from "@chakra-ui/react";
import Arrow from "assets/icons/arrow-dropdown.svg?react";
import RuFlag from "assets/icons/flag-rus.svg?react";
import EnFlag from "assets/icons/flag-eng.svg?react";
import { colors } from "shared/config/colors";
import { LANGUAGE_NAME, DEFAULT_LANGUAGE } from "shared/config/base";

interface LanguageDropdownProps extends Omit<MenuProps, "children"> {
  languages: Array<string>;
  onChage: (option: "ru" | "en") => void;
}

export const LanguageDropdown = ({
  languages = [],
  onChage,
  ...otherMenuProps
}: LanguageDropdownProps) => {
  const menuId = useId();
  const selectedLang = window.localStorage.getItem(LANGUAGE_NAME);

  const [selectedLanguage, setSelectedLanguage] = useState(
    selectedLang ?? DEFAULT_LANGUAGE
  );

  const handelChangeLanguage = (selectedOption: "ru" | "en") => () => {
    onChage(selectedOption);
    setSelectedLanguage(selectedOption);
  };

  return (
    <Menu flip boundary="scrollParent" placement="bottom" {...otherMenuProps}>
      <MenuButton
        as={Button}
        padding={0}
        variant="ghost"
        color={colors.white}
        rightIcon={<Box as={Arrow} width="14px" height="14px" />}
        iconSpacing="4px"
        fontSize="16px"
        fontWeight={500}
        textTransform="uppercase"
        lineHeight="80%"
        _hover={{
          color: colors.blue.primary,
        }}
        _active={{
          color: colors.blue.secondary,
        }}
      >
        {selectedLanguage}
      </MenuButton>

      <MenuList
        id={menuId}
        minWidth="auto"
        width="36px"
        padding="2px"
        borderRadius="4px"
      >
        <Box
          position="relative"
          _before={{
            content: "''",
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translate(-50%, calc(-52% - 2px)) rotate(45deg)",
            width: "10px",
            height: "10px",
            backgroundColor: colors.white,
            borderRadius: "2px",
            zIndex: -1,
            border: "none",
          }}
        >
          {languages.map((language, index) => {
            const isFirst = index === 0;
            const isLast = index === languages.length - 1;

            return (
              <MenuItem
                key={language}
                onClick={handelChangeLanguage(language as "ru" | "en")}
                padding="2px"
                justifyContent="center"
                borderTopRadius={isFirst ? "4px" : "0"}
                borderBottomRadius={isLast ? "4px" : "0"}
                backgroundColor={language === selectedLanguage ? "rgba(12, 13, 17, 0.40)" : "" }
                _hover={{
                  backgroundColor: "rgba(12, 13, 17, 0.40)",
                }}
              >
                <Box
                  as={language === "ru" ? RuFlag : EnFlag}
                  width="24px"
                  height="24px"
                  visibility="visible"
                />
              </MenuItem>
            );
          })}
        </Box>
      </MenuList>
    </Menu>
  );
};
