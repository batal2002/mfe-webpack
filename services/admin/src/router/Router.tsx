import { createBrowserRouter } from "react-router-dom";
import { App } from "@/components/App";
import React, { Suspense } from "react";
import { LazyAbout } from "@/pages/about/About.lazy";

const routes = [
  {
    path: "admin/",
    element: <App />,
    children: [
      {
        path: "about",
        element: (
          <Suspense fallback={"Loading..."}>
            <LazyAbout />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
