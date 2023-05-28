import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Planets from "./pages/planets";
import PlanetId from "./pages/planets/id";

const router = createBrowserRouter(
  [
    { path: "/", element: <div>Home</div> },
    { path: "/planets", element: <Planets /> },
    { path: "/planets/:id", element: <PlanetId /> }
  ]
)
export default function Router() {
  return <RouterProvider router={router} />
}
