import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { myRouter } from "./routes/MyRouter";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={myRouter} />
    <ToastContainer></ToastContainer>
  </StrictMode>
);
