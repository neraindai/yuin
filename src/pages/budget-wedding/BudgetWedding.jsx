// import { venue5, venue6 } from "../../assets";
import DecorativeDivider from "../../components/ExtraComponent/DecorativeDivider";
import BudgetSection from "./BudgetSection";
import BrideGroomCard from "../../components/ExtraComponent/BrideGroomCard";
import { bridegroom1, bridegroom2 } from "../../assets";
import Footer from "../../components/Footer/Footer";
import HeroMiniImage from "../../components/HeroMiniImage";
import BudgetBanner from "../../assets/images/BudgetBanner.png";
import Header from "../../components/Header/Header";
import InfoSectionComponents from "./InfoSectionComponents";
import SectionHeader from "../../components/ExtraComponent/SectionHeader";

const BudgetWedding = () => {
  return (
    <>
      {/* Header part*/}
      <Header />

      {/* Mini Hero Image */}
      <HeroMiniImage image={BudgetBanner} />

      <section className="container mx-auto">
        {/* Top Title */}
        <div className="text-center my-10">
          <SectionHeader sectionTitle="費用を抑えて結婚式を挙げたい方へ" />
        </div>

        <InfoSectionComponents />

        <DecorativeDivider />

        <BudgetSection />

        <DecorativeDivider />

        <div className="grid grid-cols-2 gap-[10px] my-12">
          <BrideGroomCard
            title="新郎新婦"
            description="結婚式場のご予約やご相談に関するお問い合わせは、こちらより承っております"
            image={bridegroom1}
            buttonText="新郎新婦 様"
          />
          <BrideGroomCard
            title="結婚式場"
            description="弊社サービスへのご掲載やご提携に関するお問い合わせは、こちらよりご連絡ください"
            image={bridegroom2}
            buttonText="結婚式場 様"
          />
        </div>
      </section>

      {/* Footer part  */}
      <Footer />
    </>
  );
};

export default BudgetWedding;
