import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Profile/Login";
import { AuthProvider, AuthContext } from "./components/Context/AuthContext";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Favourites from "./pages/Favourites/Favourites";
import { FavoritesProvider } from "./components/FavoritesContext/FavoritesContext";
import { CartProvider } from "./components/Context/CartContext";

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
        {
          path: "favorites",
          element: (
            <AuthContext.Consumer>
              {({ user }) =>
                user ? <Favourites /> : <Navigate to="/favorites" />
              }
            </AuthContext.Consumer>
          ),
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <FavoritesProvider>
        <CartProvider>
          <RouterProvider router={routes} />
        </CartProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;