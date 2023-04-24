import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Defaoult } from "./layouts/Default";
import { Status } from "./pages/Status";
import { Timeline } from "./pages/Timeline";

export const router = createBrowserRouter([

  {
    path: '/',
    element: <Defaoult />,
    children: [
      {
        path: '/',
        element: <Timeline />
      },
      {
        path: '/status',
        element: <Status />
      },
    ]
  }

])