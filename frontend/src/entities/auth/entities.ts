import type { Nullable } from "entities/utils";

export interface UserEntity {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface SignInFormFields {
  login: string;
  password: string;
}

export interface Store {
  token: Nullable<string>;
  isAuthorized: boolean;
  user: Nullable<UserEntity>;
}

export type Actions = {
  signIn: (fields: SignInFormFields) => Promise<void>;
  logOut: () => void;
  checkUser: () => void;
};
