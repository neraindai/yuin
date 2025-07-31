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

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Slider>
        <SearchSection />
      </Slider>
       <main>
        <RegisterLoginSection />
        <PopularVenuesSection />
        <VenueCampaign />
        <AboutSection/>
        <StepComponent/>
        <DecorativeDivider/>
        <RegisterLoginSection />
        <TestimonialCarousel/>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
