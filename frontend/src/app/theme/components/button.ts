import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { colors } from "shared/config/colors";

const buttonStyles = {
  textAlign: "center",
  fontFamily: "Halvar Engschrift",
  fontWeight: 700,
  lineHeight: "80%",
  textTransform: "uppercase",
  height: "auto",
};

export const Button = defineStyleConfig({
  variants: {
    large: defineStyle({
      ...buttonStyles,
      color: colors.black,
      borderRadius: "md",

      _hover: {
        backgroundColor: colors.acidic.secondary,
      },
      _active: {
        backgroundColor: colors.gray.secondary,
      },
    }),

    medium: defineStyle({
      ...buttonStyles,
      color: colors.black,
      borderRadius: "md",

      _hover: {
        backgroundColor: colors.acidic.secondary,
      },
      _active: {
        backgroundColor: colors.gray.secondary,
      },
    }),

    mediumDark: defineStyle({
      ...buttonStyles,
      color: "rgba(255, 255, 255, 0.4)",
      backgroundColor: colors.black,
      borderRadius: "6px",
    }),

    smallRoundedPrimary: defineStyle({
      ...buttonStyles,
      fontFamily: "Halvar Breitschrift",
      borderRadius: "base",
      backgroundColor: colors.acidic.primary,

      _before: {
        content: "''",
        display: "block",
        width: "50%",
        height: "10px",
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "inherit",
        transition: "top 0.1s ease-in",
      },
      _after: {
        content: "''",
        display: "block",
        width: "50%",
        height: "10px",
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "inherit",
        transition: "bottom 0.1s ease-in",
      },

      _hover: {
        _before: {
          top: "-5px",
        },
        _after: {
          bottom: "-5px",
        },
      },
    }),

    smallRoundedLight: defineStyle({
      ...buttonStyles,
      fontFamily: "Halvar Breitschrift",
      borderRadius: "base",
      backgroundColor: colors.white,
      // transition: "",

      _before: {
        content: "''",
        display: "block",
        width: "50%",
        height: "10px",
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "inherit",
        transition: "top 0.1s ease-in",
      },
      _after: {
        content: "''",
        display: "block",
        width: "50%",
        height: "10px",
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "inherit",
        transition: "bottom 0.1s ease-in",
      },

      _hover: {
        _before: {
          top: "-5px",
        },
        _after: {
          bottom: "-5px",
        },
      },
      _active: {
        color: "rgba(0, 0, 0, 0.6)",
      },
    }),
    roundedLight: defineStyle({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: colors.black,
      padding: "12px",
      borderRadius: "100%",
      backgroundColor: colors.white,
      minHeight: "48px",
      minWidth: "48px",

      _hover: {
        backgroundColor: colors.blue.primary,
      },
      _active: {
        backgroundColor: "#ffffff",
      },
    }),

    ghost: defineStyle({
      backgroundColor: colors.transparent,

      _hover: {
        backgroundColor: colors.transparent,
      },

      _active: {
        backgroundColor: colors.transparent,
      },
    }),
  },
  sizes: {
    md: {
      fontSize: "32px",
      padding: "22px 28px",
    },
    lg: {
      fontSize: "42px",
      padding: "28px 32px",
    },
    sm: {
      fontSize: "14px",
      padding: "16px 26px",
    },
  },
});
