import { createBrowserRouter } from "react-router-dom";
import { Home } from "./src/pages/Home/Home";
import { About } from "./src/pages/About/About";
import RootLayout from "./src/pages/RootLayout/RootLayout";
import Team from "./src/pages/Team/Team";
import Pricing from "./src/pages/Pricing/Pricing";
import Gallery from "./src/pages/Gallery/Gallery";
import Testmonial from "./src/pages/Testmonial/Testimonial";
import Contact from "./src/pages/Contacts/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
      index: true,
      element: <Home />
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
      path: "testimonials",
      element: <Testmonial />
    }, 
    {
      path: "contacts",
      element: <Contact />
    }
  ]
  }
])

export default router