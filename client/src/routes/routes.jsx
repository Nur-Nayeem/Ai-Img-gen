import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import AllAiIMages from "../pages/AllAiIMages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "published-image",
        Component: AllAiIMages,
      },
    ],
  },
]);

export default router;
