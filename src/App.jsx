import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Profile/Login";
import { AuthProvider, AuthContext } from "./components/Context/AuthContext";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <AuthContext.Consumer>
              {({ user }) => (user ? <Home /> : <Navigate to="login" />)}
            </AuthContext.Consumer>
          ),
        },
        {
          path: "login",
          element: (
            <AuthContext.Consumer>
              {({ user }) => (!user ? <Login /> : <Navigate to="/" />)}
            </AuthContext.Consumer>
          ),
        },
        {
          path: "contact",
          element: (
            <AuthContext.Consumer>
              {({ user }) => (user ? <Contact /> : <Navigate to="/login" />)}
            </AuthContext.Consumer>
          ),
        },
        {
          path: "about",
          element: (
            <AuthContext.Consumer>
              {({ user }) => (user ? <About /> : <Navigate to="/about" />)}
            </AuthContext.Consumer>
          ),
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}

export default App;