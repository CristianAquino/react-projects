"use client";
import { getCookie, setCookie } from "@app/helpers";
import { Suspense, lazy, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Outlet, useNavigate } from "react-router-dom";
import { Modal } from "..";
import { Container, Content } from "./styled-components";

const Login = lazy(() => import("../Login/Login"));
const Register = lazy(() => import("../Register/Register"));

export type LayoutTeacherProps = {
  // types...
};

const LayoutTeacher = ({}: LayoutTeacherProps) => {
  const modalLoginRef = useRef<HTMLDialogElement>(null);
  const modalRegisterRef = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();
  const tk = getCookie({ key: "_token" });

  function handleOpenModal(element: any) {
    element.current.showModal();
  }

  function handleCloseModal(element: any) {
    element.current.close();
  }

  function handleLogout() {
    setCookie({ key: "_token", value: "", time: -1 });
    navigate("/teacher");
  }

  useEffect(() => {
    return () => {
      if (modalLoginRef.current) {
        handleCloseModal(modalLoginRef);
      } else if (modalRegisterRef.current) {
        handleCloseModal(modalRegisterRef);
      }
    };
  }, [tk]);

  return (
    <Container>
      {/* SEO */}
      <Helmet>
        <title>Home | Teacher</title>
        <meta
          name="description"
          content="main page of the project for teachers created by CRdev where actions such as student registration, courses, grades and attendance will be carried out"
        />
      </Helmet>
      <Modal ref={modalLoginRef}>
        <Suspense fallback={<p>Loading...</p>}>
          <Login />
        </Suspense>
        <button
          onClick={() => handleCloseModal(modalLoginRef)}
          formMethod="dialog"
        >
          close login modal
        </button>
      </Modal>
      <Modal ref={modalRegisterRef}>
        <Suspense fallback={<p>Loading...</p>}>
          <Register />
        </Suspense>
        <button
          onClick={() => handleCloseModal(modalRegisterRef)}
          formMethod="dialog"
        >
          close register modal
        </button>
      </Modal>
      <div>
        {tk ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <button onClick={() => handleOpenModal(modalLoginRef)}>
              login
            </button>
            <button onClick={() => handleOpenModal(modalRegisterRef)}>
              register
            </button>
          </>
        )}
      </div>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default LayoutTeacher;
