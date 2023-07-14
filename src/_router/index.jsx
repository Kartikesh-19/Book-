import { Outlet, createBrowserRouter } from "react-router-dom";
import BookFinderApp from "../components/Pages";
import BookDetails from "../components/Pages/Details";
import FavoritesList from "../components/Pages/favorites";

const _router = createBrowserRouter([
  {
    path: "/",
    element: <BookFinderApp />,
  },
  {
    path: "/book/:id",
    element: <BookDetails />,
  },
  {
    path: "favorites",
    element: <FavoritesList />,
  },
]);

export default _router;
