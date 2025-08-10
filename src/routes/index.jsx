import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CelestialGardenHall from "../pages/CelestialGardenHall/CelestialGardenHall";
import NotFound from "../pages/NotFound";
import FavoriteVenueList from "../pages/venue-list/FavoriteVenueList";
import BudgetWedding from "../pages/budget-wedding/BudgetWedding";
import FaqAccordion from "../pages/FAQs/FaqAccordion";
import ContactForm from "../pages/ContactForm/ContactForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Venue details Page */}
      <Route path="/celestial-garden-hall" element={<CelestialGardenHall />} />

      {/* Page not found page */}
      <Route path="*" element={<NotFound />} />

      {/* FavoriteVenueList Page */}
      <Route path="/fvt-venue-list" element={<FavoriteVenueList />} />

      {/*BudgetWedding Page  */}
      <Route path="/budget-wedding" element={<BudgetWedding />} />

      {/* FaqAccordion Page */}
      <Route path="/faq-accordion" element={<FaqAccordion />} />

      {/* ContactForm Page */}
      <Route path="/contact-form" element={<ContactForm />} />
      
    </Routes>
  );
};

export default AppRoutes;
