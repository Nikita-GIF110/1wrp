import { Flex, Spinner } from "@chakra-ui/react";

export const PageLoader = () => (
  <Flex height="100%" justifyContent="center" alignItems="center">
    {/* <Flex
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
      width="100%"
      height="100%"
    >
      <Spinner size="xl" />
    </Flex> */}
    <Spinner size="xl" />
  </Flex>
);
