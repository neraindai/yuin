import SectionHeader from "./ExtraComponent/SectionHeader";

const GardenHallSection = ({
  pointNumber,
  mainImage,
  title,
  description,
  cards,
  colorBlack,
  smallHeading
}) => {
  return (
    <section className="relative px-4 justify-center text-center">
      <div className="static w-full md:w-full lg:w-[771px] mx-auto">
        <div className="static grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] lg:grid-cols-[1fr] justify-start gap-5 lg:gap-10 mb-4 md:mb-8 lg:mb-2">
          {/* Circle Badge */}
        <div className="relative lg:absolute lg:left-0 lg:top-0 font-yugothic font-bold text-baselg w-[80px] md:w-[120px] lg:w-[107px] h-[80px] md:h-[120px] lg:h-[107px] flex flex-col justify-center items-center ga-0 rounded-[100%] bg-[#4C8B6D] text-white shadow-lg">
          <span className="uwanted-span bg-green">ポイント</span><span>{pointNumber}</span>
        </div>

        {/* Section Header */}
        <SectionHeader
          sectionTitle={title} 
          shortDescription={description}
          noborder
          colorBlack={colorBlack}
          smallHeading={smallHeading}
        />
        </div>

        {/* Main Image */}
        <div className="">
          <div className="mb-10">
            <img src={mainImage} alt={title} className="w-full rounded-lg mb-10" />
            <h3 className="font-yugothic font-semibold text-basemd md:text-baselg lg:text-md text-[#000] mb-4">特別な日にふさわしい特別な一枚を残せるラグジュアリーホテル</h3>
            <p className="font-yugothic font-regular text-smd md:text-base lg:basemd text-[#000]">陽光と緑に包まれた『セレスティアルガーデンホール』。ガラスドームから差し込む光が幻想的な雰囲気を演出します。自然石のガーデンテラスでは、挙式後にゲストと幸せを分かち合う特別なひとときを。</p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, idx) => (
          <div key={idx} className="text-center">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-56 object-cover rounded-lg"
            />
            <h4 className="font-yugothic font-bold mt-4 mb-2 text-base md:text-md md:text-md text-[#000]">
              {card.title}
            </h4>
            <p className="font-yugothic font-regular text-sm md:text-basemd leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GardenHallSection;
