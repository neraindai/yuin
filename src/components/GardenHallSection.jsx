import SectionHeader from "./ExtraComponent/SectionHeader";

const GardenHallSection = ({
  pointNumber,
  mainImage,
  title,
  description,
  cards
}) => {
  return (
    <section className="relative mx-auto px-4 py-10 justify-center text-center">
      {/* Circle Badge */}
      <div className="absolute -top-6 left-0 bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-sm font-semibold leading-tight text-center shadow-lg">
        ポイント<br />{pointNumber}
      </div>

      {/* Section Header */}
      <SectionHeader
        sectionTitle={title} 
        shortDescription={description}
        noborder
      />

      {/* Main Image */}
      <div className="mb-10">
        <img src={mainImage} alt={title} className="w-full rounded-lg" />
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div key={idx} className="text-center">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-56 object-cover rounded-lg"
            />
            <h4 className="font-bold mt-4 mb-2 text-base md:text-lg">
              {card.title}
            </h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GardenHallSection;
