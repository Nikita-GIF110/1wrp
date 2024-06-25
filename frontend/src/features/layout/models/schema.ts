import { object, string } from "yup";

export const SIGN_IN_SCHEMA = object({
  login: string().required("Поле обязательно"),
  password: string().required("Поле обязательно"),
});
