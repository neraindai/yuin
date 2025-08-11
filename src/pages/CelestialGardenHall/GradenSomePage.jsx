import GardenHallSection from "../../components/GardenHallSection";
import mainGardenHall from "../../assets/images/garden-hall1.jpg";
import gardenHall1 from "../../assets/images/garden-hall2.jpg";
import gardenHall2 from "../../assets/images/garden-hall3.jpg";
import gardenHall3 from "../../assets/images/garden-hall4.jpg";

const GradenSomePage = () => {
  const cardsData = [
    {
      image: gardenHall1,
      title: "天窓から降り注ぐ光",
      text: "高い天井のガラスドームが、柔らかな自然光で空間を包み込み、特別な一日を優しく照らします。"
    },
    {
      image: gardenHall2,
      title: "天窓から降り注ぐ光",
      text: "高い天井のガラスドームが、柔らかな自然光で空間を包み込み、特別な一日を優しく照らします。"
    },
    {
      image: gardenHall3,
      title: "天窓から降り注ぐ光",
      text: "高い天井のガラスドームが、柔らかな自然光で空間を包み込み、特別な一日を優しく照らします。"
    }
  ];

  return (
    <>
      <GardenHallSection
        pointNumber={1}
        mainImage={mainGardenHall}
        title="専用テラス付の『セレスティアルガーデンホール』"
        description="陽光と緑に包まれた「セレスティアルガーデンホール」。ガラスドームから差し込む光が幻想的な雰囲気を演出します。自然石のガーデンテラスでは、挙式後にゲストと幸せを分かち合う特別なひとときを。"
        cards={cardsData}
      />

      <GardenHallSection
        pointNumber={2}
        mainImage={mainGardenHall}
        title="専用テラス付の『セレスティアルガーデンホール』"
        description="陽光と緑に包まれた「セレスティアルガーデンホール」。ガラスドームから差し込む光が幻想的な雰囲気を演出します。自然石のガーデンテラスでは、挙式後にゲストと幸せを分かち合う特別なひとときを。"
        cards={cardsData}
      />

      <GardenHallSection
        pointNumber={3}
        mainImage={mainGardenHall}
        title="専用テラス付の『セレスティアルガーデンホール』"
        description="陽光と緑に包まれた「セレスティアルガーデンホール」。ガラスドームから差し込む光が幻想的な雰囲気を演出します。自然石のガーデンテラスでは、挙式後にゲストと幸せを分かち合う特別なひとときを。"
        cards={cardsData}
      />
    </>
  );
};

export default GradenSomePage;
