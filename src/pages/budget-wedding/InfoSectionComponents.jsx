import { motion } from "framer-motion";

// Import images
// import venue5 from "../../assets/images/venued4.jpg";
// import venue6 from "../../assets/images/venue2.jpg";
import { venue5, venue6 } from "../../assets";
import OverlayContent from "../../components/ExtraComponent/OverlayContent";


export default function InfoSectionComponents() {
  return (
    <>
      {/* First Block */}
        {/* Image */}
        
        <OverlayContent title="ゆいのね」の強み" description="ゆいのね」は、高校生や教育関係者が安心して使える会場検索サイトです。全国の提携会場を一括で検索・比較でき、進路指導やキャリアサポートに役立つ場をスムーズに見つけることができます。
            信頼性の高い地域企業と連携しており、掲載情報の正確さにもこだわっています。"/>
            <OverlayContent title="ゆいのね」の強み" description="ゆいのね」は、高校生や教育関係者が安心して使える会場検索サイトです。全国の提携会場を一括で検索・比較でき、進路指導やキャリアサポートに役立つ場をスムーズに見つけることができます。
            信頼性の高い地域企業と連携しており、掲載情報の正確さにもこだわっています。" reverseColumn/>
            <OverlayContent title="ゆいのね」の強み" description="ゆいのね」は、高校生や教育関係者が安心して使える会場検索サイトです。全国の提携会場を一括で検索・比較でき、進路指導やキャリアサポートに役立つ場をスムーズに見つけることができます。
            信頼性の高い地域企業と連携しており、掲載情報の正確さにもこだわっています。"/>
            <OverlayContent title="ゆいのね」の強み" description="ゆいのね」は、高校生や教育関係者が安心して使える会場検索サイトです。全国の提携会場を一括で検索・比較でき、進路指導やキャリアサポートに役立つ場をスムーズに見つけることができます。
            信頼性の高い地域企業と連携しており、掲載情報の正確さにもこだわっています。" reverseColumn/>
            <OverlayContent title="ゆいのね」の強み" description="ゆいのね」は、高校生や教育関係者が安心して使える会場検索サイトです。全国の提携会場を一括で検索・比較でき、進路指導やキャリアサポートに役立つ場をスムーズに見つけることができます。
            信頼性の高い地域企業と連携しており、掲載情報の正確さにもこだわっています。"/>
            <OverlayContent title="ゆいのね」の強み" description="ゆいのね」は、高校生や教育関係者が安心して使える会場検索サイトです。全国の提携会場を一括で検索・比較でき、進路指導やキャリアサポートに役立つ場をスムーズに見つけることができます。
            信頼性の高い地域企業と連携しており、掲載情報の正確さにもこだわっています。" reverseColumn/>
            {/* Big CTA */}
        <div className="text-center pt-10">
          <button
            className="font-medium px-4 sm:px-5 py-2 rounded-full transition w-full sm:w-auto bg-[#BCF8D0] text-black shadow-md"
          >
            費用負担のサービスを受けるための面談をする
            <p className="text-sm mt-2 font-normal">
              費用負担のサービスを受けたい方は直接話していただく必要があります
            </p>
          </button>
        </div>
    </>
  );
}
