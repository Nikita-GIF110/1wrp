import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import type { SignInFormFields } from "entities/auth";
import { useAuth } from "entities/auth";
import type { OnSubmitForm } from "entities/utils";

const initialValues: Partial<SignInFormFields> = {
  rememberMe: true,
};

export const useAuthLayout = () => {
  const navigate = useNavigate();
  const signInForm = useDisclosure();
  const signIn = useAuth((state) => state.signIn);

  const onSubmit: OnSubmitForm<SignInFormFields> = async (fields) => {
    try {
      await signIn(fields);
      signInForm.onClose();
    } catch (error) {
      console.log(error);
      signInForm.onClose();
    }
  };

  const onAuth = () => {
    navigate("/personal-area");
    signInForm.onClose();
  };

  return {
    onSubmit,
    onAuth,
    signInFormState: signInForm,
    initialValues,
  };
};
