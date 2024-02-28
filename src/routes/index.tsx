import About from "./about/About";
import Login from "./Login";
import Posts from "./Posts";
import Error from "./error/Error";
import Register from "./Register";

export const routes = [
  {
    path: "/posts",
    element: <Posts />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
];
