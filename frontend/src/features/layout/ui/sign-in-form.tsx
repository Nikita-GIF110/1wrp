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
}: FormCheckboxProps) => (
  <Field name={name} type="checkbox">
    {({ input }) => {
      const isChecked = input.checked;

      return (
        <FormControl marginBottom="32px" marginTop="32px" width="auto">
          <Checkbox
            variant="landingMedium"
            defaultChecked={isChecked}
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

const { Form } = withTypes<SignInFormFields>();

export const SignInForm = ({
  onSubmit,
  validate,
  initialValues,
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
    >
      Личный кабинет
    </Box>

    <Form onSubmit={onSubmit} validate={validate} initialValues={initialValues}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormInput name="login" placeholder="Ваш логин" label="login" />
          <FormInput
            name="password"
            label="password"
            type="password"
            placeholder="Ваш пароль"
            autoComplete="new-password"
          />

          <Flex justifyContent="space-between" alignItems="center">
            <FormCheckbox name="rememberMe" label="Запомнить меня" />

            <Link
              as={ReactRouterLink}
              to="/"
              color={colors.blue.primary}
              fontSize="14px"
              fontWeight={800}
              lineHeight="100%"
            >
              Забыл пароль
            </Link>
          </Flex>

          <Button variant="medium" size="md" type="submit" width="100%">
            Войти
            <Box
              as={ThinArrowIcon}
              width="26px"
              height="26px"
              marginLeft="auto"
            />
          </Button>
        </form>
      )}
    </Form>
  </Flex>
);
