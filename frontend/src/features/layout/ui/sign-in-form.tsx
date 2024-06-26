import { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Field, withTypes } from "react-final-form";
import type { InputProps, CheckboxProps } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Input,
  FormControl,
  FormLabel,
  Button,
  Checkbox,
  FormHelperText,
  Link,
} from "@chakra-ui/react";
import type { SignInFormFields } from "entities/auth";
import type { OnSubmitForm, ValidateForm } from "entities/utils";
import { colors } from "shared/config/colors";
import ThinArrowIcon from "assets/images/home/thin-arrow-icon.svg?react";
import CheckIcon from "assets/icons/check-icon.svg?react";
import CloseIcon from "assets/icons/close-icon.svg?react";

interface SignInFormProps {
  onSubmit: OnSubmitForm<SignInFormFields>;
  validate: ValidateForm<SignInFormFields>;
  initialValues: Partial<SignInFormFields>;
}

interface FormInputProps extends InputProps {
  name: string;
  label: string;
}

interface FormCheckboxProps extends CheckboxProps {
  name: string;
  label: string;
}

const FormInput = ({
  name,
  label,
  placeholder,
  ...otherInputProps
}: FormInputProps) => (
  <Field name={name}>
    {({ input, meta }) => (
      <FormControl marginBottom="16px">
        <FormLabel
          color={colors.black}
          fontWeight={500}
          fontSize="16px"
          lineHeight="100%"
          letterSpacing="-0.64px"
          textTransform="uppercase"
          marginBottom="6px"
          opacity={0.6}
        >
          {label}
        </FormLabel>
        <Input
          {...input}
          {...otherInputProps}
          variant="landingMedium"
          placeholder={placeholder}
        />
        {meta.touched && meta.error && (
          <FormHelperText>{meta.error}</FormHelperText>
        )}
      </FormControl>
    )}
  </Field>
);

const FormCheckbox = ({
  name,
  label,
  ...otherInputProps
}: FormCheckboxProps) => {
  return (
    <Field name={name} type="checkbox">
      {({ input }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isHover, setIsHover] = useState<boolean>(false);
        const isChecked = input.checked;

        return (
          <FormControl width="auto">
            <Checkbox
              variant="landingMedium"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              defaultChecked={isChecked}
              icon={
                isChecked ? (
                  <Box
                    as={CheckIcon}
                    color={isChecked ? colors.white : colors.black}
                    opacity={isHover ? 0.7 : 1}
                    transition="opacity 0.2s ease-in"
                  />
                ) : (
                  <Box
                    as={isHover ? CheckIcon : CloseIcon}
                    color={isChecked || isHover ? colors.white : colors.black}
                    opacity={0.2}
                    transition="opacity 0.2s ease-in"
                  />
                )
              }
              {...input}
              {...otherInputProps}
            >
              {label}
            </Checkbox>
          </FormControl>
        );
      }}
    </Field>
  );
};

const { Form } = withTypes<SignInFormFields>();

export const SignInForm = ({
  onSubmit,
  validate,
}: SignInFormProps) => (
  <Flex flexDirection="column">
    <Box
      fontSize="28px"
      fontWeight={700}
      lineHeight="100%"
      letterSpacing="-0.56px"
      textTransform="uppercase"
      color={colors.black}
      marginBottom="32px"
      paddingRight={{ base: "50px", md: 0 }}
    >
      Личный кабинет
    </Box>

    {/*  initialValues={initialValues} */}
    <Form onSubmit={onSubmit} validate={validate}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormInput name="login" placeholder="Ваш логин" label="login" />
          <FormInput
            name="password"
            label="password"
            type="password"
            placeholder="• • • • • • • • • •"
            autoComplete="new-password"
          />

          <Flex
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ md: "center" }}
            margin="32px 0"
            rowGap="32px"
          >
            <FormCheckbox name="rememberMe" label="Запомнить меня" />

            <Link
              as={ReactRouterLink}
              to="/"
              color={colors.blue.primary}
              fontSize="14px"
              fontWeight={800}
              lineHeight="100%"
              whiteSpace="nowrap"
            >
              Забыл пароль?
            </Link>
          </Flex>

          <Button
            variant="medium"
            size="md"
            type="submit"
            width="100%"
            justifyContent={{ base: "space-between", xl: "center" }}
            columnGap="19px"
          >
            Войти
            <Box as={ThinArrowIcon} width="26px" height="26px" />
          </Button>
        </form>
      )}
    </Form>
  </Flex>
);
