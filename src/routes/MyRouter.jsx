import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../Layout";
import ErrorPage from "../pages/ErrorPage";
import DashBoard from "../pages/DashBoard";
import ListedBooks from "../pages/ListedBooks";
import BookDetail from "../components/BookDetail";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/books/:bookId",
        element: <BookDetail></BookDetail>,
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "listedbooks",
        element: <ListedBooks></ListedBooks>,
      },
    ],
  },
]);
