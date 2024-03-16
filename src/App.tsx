import "@app/App.css";
import { Loading } from "@components/Loading";
import { RoutesWithNotFound } from "@guards/index";
import { PROYECTS_ROUTE } from "@routes/index";
import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route } from "react-router-dom";

const Teacher = lazy(() => import("@pages/Teacher/Teacher"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Toaster />
        <RoutesWithNotFound message="Proyect not found">
          <Route path={`${PROYECTS_ROUTE.TEACHER}/*`} element={<Teacher />} />
        </RoutesWithNotFound>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
