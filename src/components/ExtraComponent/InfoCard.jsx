const InfoCard = ({ image, title, description, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} gap-6 mb-12`}>
      <div className="md:w-1/2 ">
        <img src={image} alt="venue" className="rounded-xl w-full h-[445px] rounded-[45px]" />
      </div>
      <div className="md:w-1/2 bg-[#E9FFF3] rounded-xl p-6">
        <h3 className="text-[20px] font-bold text-primary-text font-zen mb-2">{title}</h3>
        <p className="paragraph tracking-tightest">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
