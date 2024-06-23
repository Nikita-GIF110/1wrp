import type { TextareaProps as ChakraTextareaProps } from "@chakra-ui/react";
import {
  Textarea as ChakraTextarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

interface TextareaProps extends ChakraTextareaProps {
  label?: string;
  helperText?: string;
  gutterBottom?: boolean;
}

export const Textarea = ({
  label,
  helperText,
  isInvalid,
  gutterBottom = true,
  placeholder,
  ...textareaProps
}: TextareaProps) => {
  const HelperTextComponent = isInvalid ? FormErrorMessage : FormHelperText;

  return (
    <FormControl isInvalid={isInvalid} marginBottom={gutterBottom ? 3 : 0}>
      {label && <FormLabel>{label}</FormLabel>}

      <ChakraTextarea placeholder={placeholder || label} {...textareaProps} />

      {isInvalid && <HelperTextComponent>{helperText}</HelperTextComponent>}
    </FormControl>
  );
};
