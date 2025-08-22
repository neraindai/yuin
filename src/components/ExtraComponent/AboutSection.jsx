import DecorativeDivider from './DecorativeDivider';
import SectionHeader from './SectionHeader';
import OverlayContent from './OverlayContent';

const AboutSection = () => {
  return (
    <section className="container mx-auto">
        <DecorativeDivider/>
      {/* Top Title */}
      <div className="text-center">
      <SectionHeader
      sectionTitle="ゆいのねとは"
      shortDescription="大切な一日を、最高の思い出に。私たちは、理想の結婚式をサポートするために、心を込めたサービスと厳選した会場をご提供しています。"
       />
      </div>

      <OverlayContent
        title="ゆいのね」の強み"
        description="ゆいのね」は、高校生や教育関係者が安心して使える会場検索サイトです。全国の提携会場を一括で検索・比較でき、進路指導やキャリアサポートに役立つ場をスムーズに見つけることができます。
            信頼性の高い地域企業と連携しており、掲載情報の正確さにもこだわっています。"
         />
      <OverlayContent
        title="ゆいのね」の強み"
        description="ゆいのね」は、高校生や教育関係者が安心して使える会場検索サイトです。全国の提携会場を一括で検索・比較でき、進路指導やキャリアサポートに役立つ場をスムーズに見つけることができます。
            信頼性の高い地域企業と連携しており、掲載情報の正確さにもこだわっています。"
            reverseColumn
         />

      
    </section>
  );
};

export default AboutSection;

