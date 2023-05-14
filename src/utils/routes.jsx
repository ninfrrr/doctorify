import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "@/views/pages/error";
import HomePage from "@/views/pages/home";
import LoginPage from "@/views/pages/doctor/login";
import SignUpPage from "@/views/pages/doctor/signup";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);

export default routes;
