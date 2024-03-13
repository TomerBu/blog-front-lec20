import About from "./about/About";
import Login from "./Login";
import Posts from "./Posts";
import Register from "./Register";
import Root from "../layout/root/Root";
import { RouteObject } from "react-router-dom";
import Post from "./Post";
import PostIdError from "./error/PostIdError";
import ErrorPage from "./error/ErrorPage";
import ProtectedRoute from "../components/ProtectedRoute";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Posts />
          </ProtectedRoute>
        ),
      },
      {
        path: "/posts",
        element: (
          <ProtectedRoute>
            <Posts />
          </ProtectedRoute>
        ),
      },
      {
        path: "/posts/:id",
        element: (
          <ProtectedRoute>
            <Post />
          </ProtectedRoute>
        ),
        errorElement: <PostIdError />,
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
