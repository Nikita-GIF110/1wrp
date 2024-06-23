import type { ComponentProps } from "react";
import { Field } from "react-final-form";
import { Input } from "./input";

interface InputFormFieldProps
  extends Omit<
    ComponentProps<typeof Input>,
    "value" | "onChange" | "onBlur" | "onFocus"
  > {
  name: string;
}

export const InputFormField = ({
  name,
  ...otherInputProps
}: InputFormFieldProps) => (
  <Field name={name}>
    {({ input, meta }) => (
      <Input
        {...input}
        {...otherInputProps}
        helperText={meta.error}
        isInvalid={meta.touched && (meta.error || meta.submitError)}
      />
    )}
  </Field>
);
