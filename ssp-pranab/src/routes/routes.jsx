import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Shops from "../pages/Shops";
import ShopDetails from "../components/ShopDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Shops />,
      },
      {
        path: "/shop/:id",
        element: <ShopDetails />,
      },
    ],
  },
]);

export default routes;
