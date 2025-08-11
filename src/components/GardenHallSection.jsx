import React from "react";

const GardenHallSection = ({
  pointNumber,
  mainImage,
  title,
  description,
  cards
}) => {
  return (
    <section className="relative max-w-[1100px] mx-auto px-4 py-12 justify-center text-center">
      {/* Circle Badge */}
      <div className="absolute -top-6 left-0 bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-sm font-semibold leading-tight text-center shadow-lg">
        ポイント<br />{pointNumber}
      </div>

      {/* Heading */}
      <h2 className="ml-20 text-lg md:text-xl font-bold leading-snug mb-8">
        {title}
      </h2>

      {/* Main Image */}
      <div className="mb-10">
        <img src={mainImage} alt={title} className="w-full rounded-lg" />
      </div>

      {/* Title & Description */}
      <div className="text-center mb-14">
        <h3 className="text-lg md:text-xl font-bold mb-5">
          特別な日にふさわしい特別な一枚を残せるラグジュアリーホテル
        </h3>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-sm md:text-base">
          {description}
        </p>
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
