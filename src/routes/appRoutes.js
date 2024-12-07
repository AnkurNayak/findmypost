import { lazy } from "react";

const Layout = lazy(() => import("../pages/Layout"));
const HomePage = lazy(() => import("../pages/HomePage"));
const ReaderPage = lazy(() => import("../pages/ReaderPage"));
const SearchResults = lazy(() => import("../pages/SearchResults"));

export const appRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/:blogname", element: <ReaderPage /> },
      { path: "/search/:category/:text?", element: <SearchResults /> },
    ],
  },
];
