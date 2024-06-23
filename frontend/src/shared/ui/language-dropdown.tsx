import { useState } from "react";
import type { MenuProps } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from "@chakra-ui/react";
import type { SelectOption } from "entities/utils";
import Arrow from "assets/icons/arrow-dropdown.svg?react";
import RuFlag from "assets/icons/flag-rus.svg?react";
import EnFlag from "assets/icons/flag-eng.svg?react";
import { colors } from "shared/config/colors";

const defaultoption = {
  label: "RU",
  value: "ru",
};
const getLangIcon = (leng: string) => {
  if (leng === "ru") {
    return RuFlag;
  }
  return EnFlag;
};

interface LanguageDropdownProps extends Omit<MenuProps, "children"> {
  languages: Array<SelectOption>;
  onChage: (option: SelectOption) => void;
}

export const LanguageDropdown = ({
  languages = [],
  onChage,
  ...otherMenuProps
}: LanguageDropdownProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState(defaultoption);

  const handelChangeLanguage =
    (selectedOption: typeof selectedLanguage) => () => {
      if (typeof onChage === "function") {
        onChage(selectedOption);
      }
      setSelectedLanguage(selectedOption);
    };

  return (
    <Menu flip gutter={0} matchWidth placement="bottom" {...otherMenuProps}>
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
        {selectedLanguage.label}
      </MenuButton>

      <MenuList
        minWidth="auto"
        width="36px"
        padding="2px"
        borderRadius="4px"
        position="relative"
        _before={{
          content: "''",
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translate(-50%, -50%) rotate(45deg)",
          width: "10px",
          height: "10px",
          backgroundColor: colors.white,
          borderRadius: "2px",
          zIndex: -1
        }}
      >
        {languages.map((language, index) => {
          const isFirst = index === 0;
          const isLast = index === languages.length - 1;

          return (
            <MenuItem
              key={language.label}
              onClick={handelChangeLanguage(language)}
              padding="2px"
              justifyContent="center"
              borderTopRadius={isFirst ? "4px" : "0"}
              borderBottomRadius={isLast ? "4px" : "0"}
              _hover={{
                backgroundColor: "rgba(12, 13, 17, 0.40)",
              }}
            >
              <Box
                as={getLangIcon(language.value)}
                width="24px"
                height="24px"
              />
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
