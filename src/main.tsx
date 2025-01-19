import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.tsx";
import Shop from "./pages/Shop.tsx";

function AppLayout() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <p>404 Page not found</p>,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
  ]);

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppLayout />
  </StrictMode>,
);
