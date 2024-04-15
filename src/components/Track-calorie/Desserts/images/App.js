import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Vitamin from "./components/Vitamin";
import VitaminA from "./components/VitaminA";
import VitaminB from "./components/VitaminB";
import VitaminC from "./components/VitaminC";
import VitaminD from "./components/VitaminD";
import VitaminE from "./components/VitaminE";
import VitaminK from "./components/VitaminK";
import Calories from "./components/Calories";
import "bootstrap/dist/css/bootstrap.min.css";
import Vegetables from "./components/Vegetables";
import Cart from "./components/Cart";
import { CartProvider } from "react-use-cart";
import Fruits from "./components/Fruits";

const AppLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Vitamin />,
      },
      {
        path: "/vitaminA",
        element: <VitaminA />,
      },
      {
        path: "/vitaminB",
        element: <VitaminB />,
      },
      {
        path: "/vitaminC",
        element: <VitaminC />,
      },
      {
        path: "/vitaminD",
        element: <VitaminD />,
      },
      {
        path: "/vitaminE",
        element: <VitaminE />,
      },
      {
        path: "/vitaminK",
        element: <VitaminK />,
      },
      {
        path: "/calories",
        element: <Calories />,
      },
      {
        path: "/vegetables",
        element: <Vegetables />,
      },
      {
        path: "/fruits",
        element: <Fruits />,
      },
      {
        path: "/cart",
        element: (
          <CartProvider>
            <Cart />
          </CartProvider>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
