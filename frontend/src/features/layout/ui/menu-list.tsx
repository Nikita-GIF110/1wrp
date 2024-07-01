import type { ReactNode } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Box, ListProps } from "@chakra-ui/react";
import { List, ListItem, Link } from "@chakra-ui/react";
import CrownIcon from "assets/icons/crown-icon.svg?react";
import { colors } from "shared/config/colors";
import { useTranslate } from "shared/i18n";

interface MenuListProps extends ListProps {
  list: Array<{
    to: string;
    label: string;
  }>;
}

interface MenuItemProps {
  to: string;
  children: ReactNode;
}

const MenuItem = ({ to, children }: MenuItemProps) => (
  <Link
    as={ReactRouterLink}
    to={to}
    padding={{ xl: "12px", "2xl": "12px 24px" }}
    fontSize="16px"
    textTransform="uppercase"
    fontWeight={500}
    lineHeight="80%"
    color={colors.white}
    display="inline-block"
  >
    {children}
  </Link>
);

export const MenuListDesktop = ({ list, ...otherListProps }: MenuListProps) => {
  const translate = useTranslate();

  return (
    <List
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      {...otherListProps}
    >
      {list.map((link, index) => (
        <ListItem
          key={link.label}
          position="relative"
          _before={{
            content: "''",
            position: "absolute",
            top: "-1000%",
            left: "50%",
            display: "inline-block",
            backgroundColor: colors.white,
            borderRadius: "4px",
            transform: "translateX(-50%) rotate(-45deg)",
            width: "16px",
            height: "16px",
            transition: "top 0.3s",
          }}
          _after={{
            content: "''",
            position: "absolute",
            bottom: "-5px",
            left: "50%",
            transform: "translateX(-50%) scale(0)",
            display: "block",
            height: "2px",
            width: "100%",
            backgroundColor: colors.white,
            transition: "transform 0.3s",
          }}
          _hover={{
            _before: {
              top: "-130%",
            },
            _after: {
              transform: "translateX(-50%) scale(1)",
            },
          }}
        >
          <MenuItem to={link.to}>
            {translate(link.label)}

            {list.length - 1 === index && (
              <Box
                as={CrownIcon}
                width="14px"
                height="14px"
                position="absolute"
                transform="rotate(25deg)"
                right="13px"
                top="-2px"
              ></Box>
            )}
          </MenuItem>
        </ListItem>
      ))}
    </List>
  );
};

export const MenuListMobile = ({ list, ...otherListProps }: MenuListProps) => {
  const translate = useTranslate();

  return (
    <List {...otherListProps}>
      {list.map((item) => (
        <ListItem
          as={ReactRouterLink}
          to={item.to}
          key={item.label}
          padding="18px 32px"
          color={colors.white}
          display="block"
          _hover={{
            color: colors.acidic.primary,
          }}
        >
          {translate(item.label)}
        </ListItem>
      ))}
    </List>
  );
};
