import { Flex, Spinner } from "@chakra-ui/react";

export const PageLoader = () => (
  <Flex
    position="absolute"
    top="50%"
    left="50%"
    transform="translate(-50%, -50%)"
    justifyContent="center"
    alignItems="center"
    flexGrow={1}
    width="100%"
    height="100%"
    className="sdsdsds"
  >
    <Spinner size="xl" />
  </Flex>
);
