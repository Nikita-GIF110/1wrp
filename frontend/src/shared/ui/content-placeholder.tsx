import type { SkeletonProps } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/react";
import { colors } from "shared/config/colors";

interface ContentPlaceholderProps
  extends Omit<SkeletonProps, "startColor" | "endColor"> {}

export const ContentPlaceholder = ({ height, ...otherProps }: ContentPlaceholderProps) => (
  <Skeleton
    height={height}
    startColor={colors.black}
    endColor={colors.blue.primary}
    borderRadius="md"
    {...otherProps}
  />
);
