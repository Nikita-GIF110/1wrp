import { createStandaloneToast } from "@chakra-ui/react";
import type { UseToastOptions } from "@chakra-ui/react";

export const BASE_TOAST_CONFIG: UseToastOptions = {
  isClosable: true,
  position: "top-right",
};

export const { ToastContainer, toast } = createStandaloneToast();
