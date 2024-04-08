"use client";
import { SEO } from "@app/components";
import { getCookie } from "@app/helpers";
import { Suspense, lazy, useEffect, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Modal, Navigation } from "..";
import { useTeacherStorage } from "../../store";
import { Title } from "../Profile/styled-components";
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
  const logout = useTeacherStorage((state) => state.logout);

  function handleOpenModal(element: any) {
    element.current.showModal();
  }

  function handleCloseModal(element: any) {
    element.current.close();
  }

  function handleLogout() {
    logout();
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
      <SEO
        title={"Home | Teacher"}
        description={
          "main page of the project for teachers created by CRdev where actions such as student registration, courses, grades and attendance will be carried out"
        }
      >
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/teacherIcon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/teacherIcon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/teacherIcon/favicon-16x16.png"
        />
        <link rel="manifest" href="/teacherIcon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/teacherIcon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
      </SEO>
      {!tk && (
        <>
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
        </>
      )}
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
