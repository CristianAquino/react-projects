"use client";
import { getCookie, setCookie } from "@app/helpers";
import { Suspense, lazy, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Outlet, useNavigate } from "react-router-dom";
import { Modal, Navigation, Title } from "..";
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
          <Title>Login</Title>
          <Login>
            <button
              onClick={() => handleCloseModal(modalLoginRef)}
              formMethod="dialog"
              type="reset"
            >
              cancel
            </button>
          </Login>
        </Suspense>
      </Modal>
      <Modal ref={modalRegisterRef}>
        <Suspense fallback={<p>Loading...</p>}>
          <Title>Register</Title>
          <Register>
            <button
              onClick={() => handleCloseModal(modalRegisterRef)}
              formMethod="dialog"
              type="button"
            >
              cancel
            </button>
          </Register>
        </Suspense>
      </Modal>
      <Navigation>
        <section>
          {tk ? (
            <button onClick={handleLogout}>logout</button>
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
        </section>
      </Navigation>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default LayoutTeacher;
