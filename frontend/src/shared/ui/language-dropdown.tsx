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
import type { SelectOption } from "entities/utils";
import Arrow from "assets/icons/arrow-dropdown.svg?react";
import RuFlag from "assets/icons/flag-rus.svg?react";
import EnFlag from "assets/icons/flag-eng.svg?react";
import { colors } from "shared/config/colors";

const defaultoption = {
  label: "RU",
  value: "ru",
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
  const menuId = useId();
  const [selectedLanguage, setSelectedLanguage] = useState(defaultoption);

  const handelChangeLanguage =
    (selectedOption: typeof selectedLanguage) => () => {
      if (typeof onChage === "function") {
        onChage(selectedOption);
      }
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
        {selectedLanguage.label}
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
                  as={language.value === "ru" ? RuFlag : EnFlag}
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
