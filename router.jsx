import { createBrowserRouter } from "react-router-dom";
import { About } from "./src/pages/About/About";
import RootLayout from "./src/pages/RootLayout/RootLayout";
import Team from "./src/pages/Team/Team";

import Contact from "./src/pages/Contacts/Contacts";

import { Home } from "./src/pages/Home/Home";
import { HomePage } from "./src/pages/Main/Main";
import Services from "./src/pages/Services/Services";
import ServicesCombo from "./src/pages/Services/Pages/ServicesCombo";
import ServiceHair from "./src/pages/Services/Pages/ServicesHair";
import ServiceBear from "./src/pages/Services/Pages/ServiceBear";
import ServiceFinishes from "./src/pages/Services/Pages/ServiceFinishes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
    {
      index: true,
      element: <HomePage />,
      
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
      path: "services/",
      element: <Services />,
      children: [
        {
          index: true,
          element: <ServicesCombo />
        }, 
        {
          path: 'hair', 
          element: <ServiceHair />
        },
        {
          path: 'bear',
          element: <ServiceBear />
        },
        {
          path: 'finishes',
          element: <ServiceFinishes />
        }
      ]
    },
    {
      path: "contacts",
      element: <Contact />
    }
  ]
  }
])

export default router