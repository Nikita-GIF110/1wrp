import type { ReactNode } from "react";
import type { ContainerProps as ChakraContainerProps } from "@chakra-ui/react";
import { Container as ChakraContainer } from "@chakra-ui/react";

interface ContainerProps extends ChakraContainerProps {
  children: ReactNode;
}

export const Container = ({
  children,
  ...otherContainerProps
}: ContainerProps) => (
  <ChakraContainer
    flexGrow={1}
    maxWidth={{ base: "fill", xl: "container.xl" }}
    padding={{ base: "0 8px", md: "0 20px" }}
    {...otherContainerProps}
  >
    {children}
  </ChakraContainer>
);
