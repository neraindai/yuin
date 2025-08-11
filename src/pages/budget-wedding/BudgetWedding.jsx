import { venue5, venue6 } from "../../assets";
import DecorativeDivider from "../../components/ExtraComponent/DecorativeDivider";
import { motion } from "framer-motion";
import BudgetSection from "./BudgetSection";
import BrideGroomCard from "../../components/ExtraComponent/BrideGroomCard";
import { bridegroom1, bridegroom2 } from "../../assets";
import Footer from "../../components/Footer/Footer";
import HeroMiniImage from "../../components/HeroMiniImage";
import BudgetBanner from "../../assets/images/BudgetBanner.png";
import Header from "../../components/Header/Header";

const BudgetWedding = () => {
  return (
    <>
      {/* Header part*/}
      <Header />

      {/* Mini Hero Image */}
      <HeroMiniImage image={BudgetBanner} />

      <section className="container mx-auto">
        {/* Top Title */}
        <div className="text-center mb-10">
          <h2 className="heading mt-5">費用を抑えて結婚式を挙げたい方へ</h2>
          {/* <p className="text-center relative mb-1 font-yumincho pl-15 pr-15 after:content-[''] after:flex  after:h-[1px] after:bg-[#D5E6DC] after:mt-[25px]">
          大切な一日を、最高の思い出に。私たちは、理想の結婚式をサポートするために、心を込めたサービスと厳選した会場をご提供しています。
        </p> */}
        </div>

        {/* First Block */}
        <div className="flex flex-col lg:flex-row justify-center gap-6 relative mb-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 90 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[793px] h-[445px] rounded-[45px] overflow-hidden shadow-md"
          >
            <img
              src={venue5}
              alt="会場1"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Box */}
          <motion.div
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[495px] lg:-ml-[165px] bg-[#F7F8F1] rounded-[25px] pl-9 pr-9 z-10 mt-10 mb-10 align-center shadow-custom-green flex flex-col justify-center"
          >
            <h3 className="text-lg font-bold text-primary-text font-yugothic mb-2 after:content-[''] after:flex after:w-100 after:h-[1px] after:bg-black after:mt-[8px] after:mb-[15px]">
              ゆいのね」の強み
            </h3>
            <p className="font-yugothic font-medium">
              ゆいのね」は、高校生や教育関係者が安心して使える会場検索サイトです。全国の提携会場を一括で検索・比較でき、進路指導やキャリアサポートに役立つ場をスムーズに見つけることができます。
              信頼性の高い地域企業と連携しており、掲載情報の正確さにもこだわっています。
            </p>
          </motion.div>
        </div>

        {/* Second Block */}
        <div className="flex flex-col lg:flex-row justify-center gap-6 relative mb-12">
          {/* Text Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[495px] bg-[#F7F8F1] rounded-[25px] pl-9 pr-9 z-10 mt-10 mb-10 align-center shadow-custom-green flex flex-col justify-center"
          >
            <h3 className="text-lg font-bold text-primary-text font-yugothic mb-2 after:content-[''] after:flex after:w-100 after:h-[1px] after:bg-black after:mt-[8px] after:mb-[15px]">
              他社との違い
            </h3>
            <p className="font-yugothic font-medium">
              「ゆいのね」は高校生や教育現場に特化した会場検索サービスとして、一般的な不特定多数向けサイトとは異なり、進路支援や教育行事に適した情報を厳選して提供しています。
              教育関係者が安心して利用できるよう、学校・地域との連携を重視しています。
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[793px] h-[445px] rounded-[45px] overflow-hidden shadow-md lg:-ml-[165px]"
          >
            <img
              src={venue6}
              alt="会場2"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Third Block */}
        <div className="flex flex-col lg:flex-row justify-center gap-6 relative mb-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 90 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[793px] h-[445px] rounded-[45px] overflow-hidden shadow-md"
          >
            <img
              src={venue5}
              alt="会場1"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Box */}
          <motion.div
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[495px] lg:-ml-[165px] bg-[#F7F8F1] rounded-[25px] pl-9 pr-9 z-10 mt-10 mb-10 align-center shadow-custom-green flex flex-col justify-center"
          >
            <h3 className="text-lg font-bold text-primary-text font-yugothic mb-2 after:content-[''] after:flex after:w-100 after:h-[1px] after:bg-black after:mt-[8px] after:mb-[15px]">
              ゆいのね」の強み
            </h3>
            <p className="font-yugothic font-medium">
              ゆいのね」は、高校生や教育関係者が安心して使える会場検索サイトです。全国の提携会場を一括で検索・比較でき、進路指導やキャリアサポートに役立つ場をスムーズに見つけることができます。
              信頼性の高い地域企業と連携しており、掲載情報の正確さにもこだわっています。
            </p>
          </motion.div>
        </div>

        {/* Fourth Block */}
        <div className="flex flex-col lg:flex-row justify-center gap-6 relative mb-12">
          {/* Text Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[495px] bg-[#F7F8F1] rounded-[25px] pl-9 pr-9 z-10 mt-10 mb-10 align-center shadow-custom-green flex flex-col justify-center"
          >
            <h3 className="text-lg font-bold text-primary-text font-yugothic mb-2 after:content-[''] after:flex after:w-100 after:h-[1px] after:bg-black after:mt-[8px] after:mb-[15px]">
              他社との違い
            </h3>
            <p className="font-yugothic font-medium">
              「ゆいのね」は高校生や教育現場に特化した会場検索サービスとして、一般的な不特定多数向けサイトとは異なり、進路支援や教育行事に適した情報を厳選して提供しています。
              教育関係者が安心して利用できるよう、学校・地域との連携を重視しています。
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[793px] h-[445px] rounded-[45px] overflow-hidden shadow-md lg:-ml-[165px]"
          >
            <img
              src={venue6}
              alt="会場2"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

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
