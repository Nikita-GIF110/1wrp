import { useState } from "react";
import type { SelectProps as ChakraSelectProps } from "@chakra-ui/react";
import {
  Select as ChakraSelect,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
} from "@chakra-ui/react";
import type { SelectOption } from "entities/utils";
import { colors } from "shared/config/colors";

interface SelectProps extends ChakraSelectProps {
  label?: string;
  helperText?: string;
  gutterBottom?: boolean;
  options: Array<SelectOption>;
}

const getBorderColor = (isFocused: boolean, isInvalid?: boolean) => {
  if (isFocused && !isInvalid) {
    return colors.black;
  }

  if (!isFocused && !isInvalid) {
    return colors.transparent;
  }

  if (isInvalid) {
    return "#E53E3E";
  }
};

export const Select = ({
  label,
  helperText,
  isInvalid,
  gutterBottom = true,
  placeholder,
  options = [],
  ...otherSelectProps
}: SelectProps) => {
  const [isFocused, setFocused] = useState<boolean>(false);
  const HelperTextComponent = isInvalid ? FormErrorMessage : FormHelperText;

  const onFocus = () => setFocused((prevValue) => !prevValue);
  const onBlur = () => setFocused((prevValue) => !prevValue);

  return (
    <FormControl marginBottom={gutterBottom ? 3 : 0} isInvalid={isInvalid}>
      <Box
        display="flex"
        alignItems="center"
        backgroundColor={colors.gray.primary}
        borderRadius="8px"
        padding="13px 20px"
        className="select"
        onBlur={onBlur}
        onFocus={onFocus}
        border={`1px solid ${getBorderColor(isFocused, isInvalid)}`}
        // border={`1px solid ${isFocused ? colors.black : "transparent"}`}
      >
        {label && (
          <FormLabel marginBottom={0} flexGrow={1} lineHeight="120%">
            {label}
          </FormLabel>
        )}

        <ChakraSelect
          placeholder={placeholder || label}
          flexShrink={1}
          width="auto"
          textAlign="right"
          display="flex"
          alignItems="center"
          _focusVisible={{
            borderColor: "transparent",
            boxShadow: "none",
          }}
          _hover={{
            borderColor: "transparent",
            boxShadow: "none",
          }}
          _invalid={{
            borderColor: "transparent",
            boxShadow: "none",
          }}
          {...otherSelectProps}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </ChakraSelect>
      </Box>
      {isInvalid && <HelperTextComponent>{helperText}</HelperTextComponent>}
    </FormControl>
  );
};
