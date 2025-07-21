import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Slider";
import SearchSection from "../components/SearchSection/SearchSection";
import RegisterLoginSection from '../components/ExtraComponent/RegisterLoginSection';
import PopularVenuesSection from '../components/ExtraComponent/PopularVenuesSection';

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
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
