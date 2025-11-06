import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import AllAiIMages from "../pages/AllAiIMages";
import CreateNewImage from "../pages/CreateNewImage";

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
        path: "ai-images",
        Component: AllAiIMages,
      },
      {
        path: "create-new-image",
        Component: CreateNewImage,
      },
    ],
  },
]);

export default router;
