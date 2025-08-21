const VenueCard = ({ image, title, description, link }) => {
  return (
    <div className="w-full">
      <img src={image} alt={title} className="w-full h-50 object-cover" />
      <div className="p-4 text-left ml-[13px] mr-[13px] mt-5 shadow-md sm:-mt-[30px] bg-white relative">
        <h3 className="text-base tracking-[-2px] text-black mb-[10px] after:content-[''] after:flex after:w-1/2 after:h-[1px] after:bg-black after:mt-[5px]">{title}</h3>
        <p className="text-sm">{description}</p>
        <a href={link} className="text-sm font-semibold text-blue-600 hover:underline font-regular">もっと見る</a>
      </div>
    </div>
  );
};

export default VenueCard;
