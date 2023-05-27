import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Planets from "./pages/planets";

const router = createBrowserRouter(
  [
    { path: "/", action: () => <div>Home</div> },
    { path: "/planets", element: <Planets /> },
  ]
)
export default function Router() {
  return <RouterProvider router={router} />
}
