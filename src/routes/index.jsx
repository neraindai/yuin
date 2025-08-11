import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CelestialGardenHall from "../pages/CelestialGardenHall/CelestialGardenHall";
import NotFound from "../pages/NotFound";
import FavoriteVenueList from "../pages/venue-list/FavoriteVenueList";
import BudgetWedding from "../pages/budget-wedding/BudgetWedding";
import FaqAccordion from "../pages/FAQs/FaqAccordion";
import ContactForm from "../pages/ContactForm/ContactForm";
import ContactFormUI from "../pages/ContactForm/ContactFormUI";
import TermsOfUse from "../pages/TermsOfUse/TermsOfUse";
import InquiryFlow from "../pages/ContactForm/InquiryFlow";
import Login from "../pages/Login/Login";

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

      {/* ContactFormUI Page */}
      <Route path="/contact-form-ui" element={<ContactFormUI />} />

      {/* TermsOfUse Page */}
      <Route path="/terms-of-use" element={<TermsOfUse />} />

      {/* InquiryFlow Page */}
      <Route path="/inquiry-flow" element={<InquiryFlow />} />

      {/* Login Page */}
      <Route path="/login" element={<Login />} />
      
    </Routes>
  );
};

export default AppRoutes;
