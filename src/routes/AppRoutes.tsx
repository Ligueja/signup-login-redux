import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Signup } from "../pages/signup";
import { Login } from "../pages/login";
import { DefaultLayout } from "../configs/layout/DefaultLayout";
import { Loged } from "../pages/loged";

const appRouter = createBrowserRouter([
  {
    path: "/loged",
    element: <Loged />,
  },
  {
    path: "/login",
    element: (
      <DefaultLayout>
        <Login />
      </DefaultLayout>
    ),
  },
  {
    path: "/",
    element: (
      <DefaultLayout>
        <Signup />
      </DefaultLayout>
    ),
  },
]);

export function AppRouter() {
  return <RouterProvider router={appRouter} />;
}
