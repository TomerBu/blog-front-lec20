import About from "./about/About";
import Login from "./Login";
import Posts from "./Posts";
import Register from "./Register";
import Root from "../layout/root/Root";
import { RouteObject } from "react-router-dom";
import Post from "./Post";
import PostIdError from "./error/PostIdError";
import ErrorPage from "./error/ErrorPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:id",
        element: <Post />,
        errorElement: <PostIdError/>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
];
