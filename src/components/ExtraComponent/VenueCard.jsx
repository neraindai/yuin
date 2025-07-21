const VenueCard = ({ image, title, description, link }) => {
  return (
    <div className="rounded w-full">
      <img src={image} alt={title} className="w-full h-50 object-cover" />
      <div className="p-4 text-left ml-3 mr-3 mt-5 shadow-md sm:-mt-[30px] bg-white relative">
        <h3 className="font-bold text-md mb-1 font-zen font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 mb-2 font-zen font-regular">{description}</p>
        <a href={link} className="text-sm font-semibold text-blue-600 hover:underline font-regular">もっと見る</a>
      </div>
    </div>
  );
};

export default VenueCard;
