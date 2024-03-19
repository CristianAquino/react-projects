"use client";
import { forwardRef } from "react";
import { Dialog } from "./styled-components";

export type ModalProps = {
  // types...
  children: React.ReactNode;
};

const Modal = forwardRef<any, ModalProps>(({ children }: ModalProps, ref) => {
  return (
    <Dialog ref={ref}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100%",
          gap: "1rem",
        }}
      >
        {children}
      </div>
    </Dialog>
  );
});

export default Modal;
