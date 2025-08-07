import BookMark from "../../assets/icons/bookmark";

const FavoriteVenueCard = ({
  imageUrl,
  title,
  description,
  capacityInfo,
  tag1,
  tag2,
}) => {
  return (
    <div className="flex bg-white rounded-xl shadow-md p-4 relative w-full max-w-4xl mx-auto">
      <img
        src={imageUrl}
        alt={title}
        className="w-1/3 h-60 object-cover"
      />

      <div className="flex flex-col gap-3 w-2/3 px-4">
        <div>
          <div className="mb-2">
            <h3 className="text-2xl font-semibold text-gray-800 inline-block border-b border-black pb-2 w-[80%]">
              {title}
            </h3>
          </div>

          <p className="text-sm text-gray-600 line-clamp-3 pt-2">{description}</p>
        </div>

        {/* Top tags section */}
        <div className="flex gap-2 mt-4">
          <span className="bg-[#F4F4F4] text-gray-700 text-xs px-4 py-1 rounded-full">
            {tag1}
          </span>
          <span className="bg-[#F4F4F4] text-gray-700 text-xs px-4 py-1 rounded-full">
            {tag2}
          </span>
        </div>

        {/* CTA Button */}
        <div className="mt-2">
          <button className="bg-[#D2F4E1] text-[#056644] text-sm font-medium px-6 py-2 rounded-full shadow hover:bg-[#bcefd4] transition-all duration-200">
            詳しく見る
          </button>
        </div>
      </div>

      {/* Bookmark icon */}
      <div className="absolute top-4 right-4">
        <BookMark />
      </div>
    </div>
  );
};

export default FavoriteVenueCard;
