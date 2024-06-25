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

const FormInput = ({ name, ...otherInputProps }: FormInputProps) => (
  <Field name={name}>
    {({ input, meta }) => {
      console.log(meta.touched);
      console.log(meta.error);

      return (
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
            Login
          </FormLabel>
          <Input {...input} {...otherInputProps} variant="landingMedium" />
          {meta.touched && meta.error && (
            <FormHelperText>{meta.error}</FormHelperText>
          )}
        </FormControl>
      );
    }}
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
        <FormControl marginBottom="32px" marginTop="32px">
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
  <Flex justifyContent="flex-end" flexDirection="column">
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
            autoComplete="new-password"
          />

          <FormCheckbox name="rememberMe" label="Запомнить меня" />

          <Button variant="medium" size="md" type="submit">
            Войти
            <Box
              as={ThinArrowIcon}
              width="26px"
              height="26px"
              marginLeft="19px"
            />
          </Button>
        </form>
      )}
    </Form>
  </Flex>
);
