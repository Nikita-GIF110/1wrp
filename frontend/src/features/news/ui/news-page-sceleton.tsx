import { Stack } from "@chakra-ui/react";
import { ContentPlaceholder } from "shared/ui/content-placeholder";

export const NewsPageSceleton = () => (
  <>
    <ContentPlaceholder height="35px" marginBottom="20px" />

    <Stack spacing="6px" marginBottom="20px">
      <ContentPlaceholder height="33px" />
      <ContentPlaceholder height="33px" />
    </Stack>

    <ContentPlaceholder height="340px" marginBottom="20px" />

    <ContentPlaceholder height="35px" marginBottom="20px" />

    <ContentPlaceholder height="150px" marginBottom="20px" />

    <ContentPlaceholder height="35px" marginBottom="20px" />
    <ContentPlaceholder height="25px" marginBottom="20px" />
    <ContentPlaceholder height="15px" marginBottom="20px" />
  </>
);
