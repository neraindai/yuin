import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Slider";
import SearchSection from "../components/SearchSection/SearchSection";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Slider>
        <SearchSection />
      </Slider>
      <Footer />
    </>
  );
};

export default MainLayout;
