import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import VenueList from "../components/ExtraComponent/VenueList";
import FavoriteVenueList from "../components/ExtraComponent/FavoriteVenueList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/venue-list" element={<VenueList />} />
      <Route path="/fvt-venue-list" element={<FavoriteVenueList />} />
      
    </Routes>
  );
};

export default AppRoutes;
