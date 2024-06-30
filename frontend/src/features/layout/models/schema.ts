import { object, string } from "yup";

export const SIGN_IN_SCHEMA = object({
  login: string().required("lending.auth_field_helper_text"),
  password: string().required("lending.auth_field_helper_text"),
});
