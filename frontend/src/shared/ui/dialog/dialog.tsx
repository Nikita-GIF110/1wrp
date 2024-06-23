import type { ReactNode } from "react";
import type { ModalProps } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { CloseIcon } from "assets/icons/close-icon";

interface DialogProps extends ModalProps {
  withOverlay?: boolean;
  title?: ReactNode;
  children: ReactNode;
}

export const Dialog = ({
  isOpen,
  onClose,
  withOverlay = true,
  title,
  children,
  ...otherModalProps
}: DialogProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} {...otherModalProps}>
      {withOverlay && <ModalOverlay />}

      <ModalContent>
        {title && <ModalHeader>{title}</ModalHeader>}

        <ModalBody>{children}</ModalBody>

        <ModalCloseButton onClick={onClose}>
          <CloseIcon />
        </ModalCloseButton>
      </ModalContent>
    </Modal>
  );
};
