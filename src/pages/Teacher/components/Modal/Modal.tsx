"use client";
import { forwardRef } from "react";

export type ModalProps = {
  // types...
  children: React.ReactNode;
};

const Modal = forwardRef<any, ModalProps>(({ children }: ModalProps, ref) => {
  return <dialog ref={ref}>{children}</dialog>;
});

export default Modal;
