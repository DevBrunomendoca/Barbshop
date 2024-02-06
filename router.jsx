import { createBrowserRouter } from "react-router-dom";
import { About } from "./src/pages/About/About";
import RootLayout from "./src/pages/RootLayout/RootLayout";
import Team from "./src/pages/Team/Team";
import Pricing from "./src/pages/Pricing/Pricing";
import Gallery from "./src/pages/Gallery/Gallery";
import Contact from "./src/pages/Contacts/Contacts";

import { Home } from "./src/pages/Home/Home";
import { HomePage } from "./src/pages/Main/Main";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
    {
      index: true,
      element: <HomePage />
    },
    {
      path: "about",
      element: <About />
    },
    {
      path: "team",
      element: <Team />
    },
    {
      path: "pricing",
      element: <Pricing />
    },
    {
      path: "gallery",
      element: <Gallery />
    },
    {
      path: "contacts",
      element: <Contact />
    }
  ]
  }
])

export default router