import type { ReactNode } from "react";
import type { ContainerProps as ChakraContainerProps } from "@chakra-ui/react";
import { Container as ChakraContainer } from "@chakra-ui/react";
import { useMediaQuery } from "shared/lib/useMediaQuery";

interface ContainerProps extends ChakraContainerProps {
  children: ReactNode;
}

const getContainerSize = (isTable: boolean, isDesktop: boolean): string => {
  if (isDesktop) return "container.xl";
  if (isTable) return "container.md";
  return "full";
};

export const Container = ({
  children,
  ...otherContainerProps
}: ContainerProps) => {
  const { isTablet, isDesktop } = useMediaQuery();

  return (
    <ChakraContainer
      padding="0 20px"
      flexGrow={1}
      maxW={getContainerSize(isTablet, isDesktop)}
      {...otherContainerProps}
    >
      {children}
    </ChakraContainer>
  );
};
