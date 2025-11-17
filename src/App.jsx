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