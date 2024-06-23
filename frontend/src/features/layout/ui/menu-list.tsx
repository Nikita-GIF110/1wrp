import type { ReactNode } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Box, ListProps } from "@chakra-ui/react";
import { List, ListItem, Link } from "@chakra-ui/react";
import { CrownIcon } from "assets/icons/crown-icon";
import { colors } from "shared/config/colors";

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
    padding="12px 24px"
    fontSize="16px"
    textTransform="uppercase"
    fontWeight={500}
    lineHeight="80%"
    color={colors.white}
  >
    {children}
  </Link>
);

export const MenuListDesktop = ({ list, ...otherListProps }: MenuListProps) => (
  <List display="flex" alignItems="center" {...otherListProps}>
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
            top: "-225%",
          },
          _after: {
            transform: "translateX(-50%) scale(1)",
          },
        }}
      >
        <MenuItem to={link.to}>
          {link.label}

          {list.length - 1 === index && (
            <Box
              width="20px"
              height="20px"
              position="absolute"
              transform="rotate(5deg)"
              right="8px"
              top="-15px"
            >
              <CrownIcon />
            </Box>
          )}
        </MenuItem>
      </ListItem>
    ))}
  </List>
);

export const MenuListMobile = ({ list, ...otherListProps }: MenuListProps) => (
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
        {item.label}
      </ListItem>
    ))}
  </List>
);
