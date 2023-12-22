import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import NuevoCliente, {
  action as nuevoClienteAction,
} from "./pages/NuevoCliente";
import Index, { loader as clientesLoader } from "./pages/Index";
import ErrorBoundary from "./components/ErrorBoundary";
import EditarCliente from "./pages/EditarCliente";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader, //obtener datos
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: nuevoClienteAction, //procesar formulario
      },
      {
        path: "/clientes/:clientesId/editar",
        element: <EditarCliente />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
