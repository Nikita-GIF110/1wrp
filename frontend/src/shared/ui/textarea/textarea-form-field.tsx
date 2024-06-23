import type { ComponentProps } from "react";
import { Field } from "react-final-form";
import { Textarea } from "./textarea";

interface InputFormFieldProps
  extends Omit<
    ComponentProps<typeof Textarea>,
    "value" | "onChange" | "onBlur" | "onFocus"
  > {
  name: string;
}

export const TextareaFormField = ({
  name,
  ...otherInputProps
}: InputFormFieldProps) => (
  <Field name={name}>
    {({ input, meta }) => (
      <Textarea
        {...input}
        {...otherInputProps}
        helperText={meta.error}
        isInvalid={meta.touched && (meta.error || meta.submitError)}
      />
    )}
  </Field>
);
