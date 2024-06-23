import {
  Input as ChakraInput,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import type { InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  label?: string;
  helperText?: string;
  gutterBottom?: boolean;
}

export const Input = ({
  label,
  helperText,
  isInvalid,
  gutterBottom = true,
  placeholder,
  ...inputProps
}: InputProps) => {
  const HelperTextComponent = isInvalid ? FormErrorMessage : FormHelperText;

  return (
    <FormControl isInvalid={isInvalid} marginBottom={gutterBottom ? 3 : 0}>
      {label && <FormLabel>{label}</FormLabel>}

      <ChakraInput placeholder={placeholder || label} {...inputProps} />

      {isInvalid && <HelperTextComponent>{helperText}</HelperTextComponent>}
    </FormControl>
  );
};
