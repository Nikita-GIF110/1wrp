import { object, string } from "yup";

export const SCHEMA = object({
  username: string().required("required"),
  description: string().required("required"),
  select: string().required("required"),
});
