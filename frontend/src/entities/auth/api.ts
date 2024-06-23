// import type { AxiosRequestConfig } from "axios";
// import { instance } from "shared/api";
import type { SignInFormFields } from "./entities";

// const URI = "auth";

export const auth = {
  signIn: async (
    fields: SignInFormFields
    // config?: AxiosRequestConfig<string>
  ) => {
    // const response = await instance().post<string>(URI, fields, config);
    // return response.data;
    console.log(fields);
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
  },
};
