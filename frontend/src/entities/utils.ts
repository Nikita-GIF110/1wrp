import type { FormApi, SubmissionErrors, ValidationErrors } from "final-form";

export type Nullable<T> = T | null;

export type SelectOption<Value = string, Label = string> = {
  value: Value;
  label: Label;
};

export interface Image {
  src: string;
  alt: string;
  title: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type First<T extends Array<any>> = T extends [] ? never : T[0];

export type OnSubmitForm<FormValues> = (
  values: FormValues,
  form: FormApi<FormValues, Partial<FormValues>>,
  callback?: (errors?: SubmissionErrors) => void
) => SubmissionErrors | Promise<SubmissionErrors> | void;

export type ValidateForm<FormValues> = (
  values: FormValues
) => ValidationErrors | Promise<ValidationErrors>;
