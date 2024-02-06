import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./src/pages/About/About";
import RootLayout from "./src/pages/RootLayout/RootLayout";
import Team from "./src/pages/Team/Team";
import Pricing from "./src/pages/Pricing/Pricing";
import Gallery from "./src/pages/Gallery/Gallery";
import Contact from "./src/pages/Contacts/Contacts";

import { Home } from "./src/pages/Home/Home";
import { HomePage } from "./src/pages/Main/Main";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={<RootLayout />}
      >
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contacts" element={<Contact />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;
