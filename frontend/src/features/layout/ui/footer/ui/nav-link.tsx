import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

interface NavLinkProps {
  children: ReactNode;
  to: string;
}

export const NavLink = ({ children, to }: NavLinkProps) => (
  <Box
    as={Link}
    to={to}
    display="block"
    opacity={0.5}
    transition="opacity 0.2s ease-in-out"
    _hover={{
      opacity: 1,
    }}
    aria-label="ссылка"
  >
    {children}
  </Box>
);
