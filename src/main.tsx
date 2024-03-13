import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { routes } from "./routes";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthContextProvider } from "./contexts/AuthContext";

const router = createBrowserRouter(routes);

const div = document.getElementById("root")!;

ReactDOM.createRoot(div).render(
  <>
    <AuthContextProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthContextProvider>
  </>
);
