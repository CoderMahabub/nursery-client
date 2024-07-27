import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Products from "../pages/Products/Products";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Payment from "../pages/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);

export default router;
