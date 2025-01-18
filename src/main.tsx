import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.tsx";
import Store from "./pages/Store.tsx";

function AppLayout() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <p>404 Page not found</p>,
    },
    {
      path: "/store",
      element: <Store />,
    },
  ]);

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppLayout />
  </StrictMode>,
);
