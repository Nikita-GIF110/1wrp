import type { BoxProps } from "@chakra-ui/react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { colors } from "shared/config/colors";

interface BreadcrumbsProps extends BoxProps {
  breadcrumbs: Array<{
    label: string;
    to: string;
  }>;
}

const Separator = () => (
  <Box
    color={colors.gray.primary}
    opacity={0.2}
    fontSize="12px"
    fontWeight={500}
    marginLeft="2px"
    marginRight="2px"
  >
    //
  </Box>
);

export const Breadcrumbs = ({
  breadcrumbs = [],
  ...otherProps
}: BreadcrumbsProps) => (
  <Box {...otherProps} position="relative">
    <Box
      position="absolute"
      top={0}
      left={0}
      opacity={0.1}
      backgroundColor={colors.gray.primary}
      width="100%"
      height="2px"
    />

    <Breadcrumb separator={<Separator />} padding="0 40px">
      {breadcrumbs.map((crumb, index) => {
        const isLast = breadcrumbs.length - 1 === index;

        return (
          <BreadcrumbItem
            key={crumb.label}
            isCurrentPage={isLast}
            color={colors.gray.primary}
            alignItems="center"
            fontSize="12px"
            fontWeight={500}
            textTransform="uppercase"
          >
            <BreadcrumbLink href={crumb.to} padding="12px 0">
              {crumb.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>

    <Box
      position="absolute"
      bottom={0}
      left={0}
      opacity={0.1}
      backgroundColor={colors.gray.primary}
      width="100%"
      height="2px"
    />
  </Box>
);
