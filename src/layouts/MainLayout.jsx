import { useLocation } from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Slider";
import SearchSection from "../components/SearchSection/SearchSection";
import RegisterLoginSection from '../components/ExtraComponent/RegisterLoginSection';
import PopularVenuesSection from '../components/ExtraComponent/PopularVenuesSection';
import VenueCampaign from '../components/ExtraComponent/VenueCampaign';
import AboutSection from '../components/ExtraComponent/AboutSection';
import StepComponent from '../components/ExtraComponent/StepComponent';
import DecorativeDivider from '../components/ExtraComponent/DecorativeDivider';
import TestimonialCarousel from '../components/ExtraComponent/TestimonialCarousel';
import BrideGroomCardList from '../components/ExtraComponent/BrideGroomCardList';
import TabSection from '../components/ExtraComponent/TabSection';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Header />

      {isHome ? (
        <>
          <Slider>
            <SearchSection />
          </Slider>
          <main>
            <RegisterLoginSection />
            <PopularVenuesSection />
            <VenueCampaign />
            <AboutSection />
            <StepComponent />
            <DecorativeDivider />
            <RegisterLoginSection />
            <TestimonialCarousel />
            <BrideGroomCardList />
            <TabSection />
          </main>
        </>
      ) : (
        <main className="min-h-[60vh]">{children}</main>
      )}

      <Footer />
    </>
  );
};

export default MainLayout;
