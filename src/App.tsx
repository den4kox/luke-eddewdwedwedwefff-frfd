import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Search } from "./pages/search";
import { Details } from "./pages/details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
    errorElement: <Search />
  },
  {
    path: "/:type/:id",
    element: <Details />
  }
]);
export default function App() {
  return <RouterProvider router={router} />;
}
