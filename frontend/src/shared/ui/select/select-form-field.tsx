import type { ComponentProps } from "react";
import { Field } from "react-final-form";
import { Select } from "./select";

interface SelectFormFieldProps
  extends Omit<
    ComponentProps<typeof Select>,
    "value" | "onChange" | "onBlur" | "onFocus"
  > {
  name: string;
}

export const SelectFormField = ({
  name,
  ...otherSelectProps
}: SelectFormFieldProps) => (
  <Field name={name}>
    {({ input, meta }) => (
      <Select
        {...input}
        {...otherSelectProps}
        helperText={meta.error}
        isInvalid={meta.touched && (meta.error || meta.submitError)}
      />
    )}
  </Field>
);
