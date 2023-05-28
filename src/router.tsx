import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Planets from "./pages/planets";
import PlanetId from "./pages/planets/id";
import Characters from "./pages/characters";

const router = createBrowserRouter(
  [
    { path: "/", element: <div>Home</div> },
    { path: "/planets", element: <Planets /> },
    { path: "/planets/:id", element: <PlanetId /> },
    { path: "/characters", element: <Characters /> },
  ]
)
export default function Router() {
  return <RouterProvider router={router} />
}
