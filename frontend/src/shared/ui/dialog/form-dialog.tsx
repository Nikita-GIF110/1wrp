import type { ComponentProps, ReactNode } from "react";
import type { FormRenderProps as FinalFormRenderProps } from "react-final-form";
import { withTypes } from "react-final-form";
import type { OnSubmitForm, ValidateForm } from "entities/utils";
import { Dialog } from "./dialog";

interface FromDialogProps<InitialValues>
  extends Omit<ComponentProps<typeof Dialog>, "children"> {
  initialValues?: InitialValues;
  onSubmit: OnSubmitForm<InitialValues>;
  validate?: ValidateForm<InitialValues>;
  children: (
    props: Omit<
      FinalFormRenderProps<InitialValues, Partial<InitialValues>>,
      "handleSubmit"
    >
  ) => ReactNode;
}

export const FormDialog = <InitialValues extends Record<string, unknown>>({
  initialValues,
  validate,
  onSubmit,
  children,
  ...dialogProps
}: FromDialogProps<InitialValues>) => {
  const { Form } = withTypes<InitialValues>();

  return (
    <Form onSubmit={onSubmit} initialValues={initialValues} validate={validate}>
      {({ handleSubmit, ...otherFormProps }) => (
        <Dialog {...dialogProps}>
          <form onSubmit={handleSubmit}>{children(otherFormProps)}</form>
        </Dialog>
      )}
    </Form>
  );
};
