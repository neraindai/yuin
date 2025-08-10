import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CelestialGardenHall from "../pages/CelestialGardenHall/CelestialGardenHall";
import NotFound from "../pages/NotFound";
import FavoriteVenueList from "../pages/venue-list/FavoriteVenueList";
import GradenSomePage from "../pages/CelestialGardenHall/GradenSomePage";
import BudgetWedding from "../pages/budget-wedding/BudgetWedding";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/celestial-garden-hall" element={<CelestialGardenHall />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/fvt-venue-list" element={<FavoriteVenueList />} />
      <Route path="/garden-some-page" element={<GradenSomePage />} />
      <Route path="/budget-wedding" element={<BudgetWedding />} />
      
    </Routes>
  );
};

export default AppRoutes;
