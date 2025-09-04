const StepCard = ({ image, title, description, number }) => {
  return (
    <div className="pr-6 flex-[0_0_100%] md:flex-[0_0_calc(50%)] lg:flex-[0_0_calc(33.33%)]">
     
      <div className="flex flex-col items-center justify-center">
        <img src={image} alt={title} className="w-auto h-30 object-cover" />
      </div>
      <div className="flex flex-row mt-3 items-start justify-start mb-[40px]">
        <div className="w-[10%] lg:w-[10%] md:text-left">
          <span className="font-yumincho font-bold text-lg lg:text-xxl text-primary-text text-center block lg:inline-block lg:mt-4">{number}</span>
        </div>
        <div className="pl-3 w-[90%] mt-0 lg:mt-4">
          <h3 className="font-yugothicui text-black-text text-base md:text-basemd lg:text-baselg">{title}</h3>
          <p className="font-yugothicui text-black-text font-light lg:text-left text-sm">
           {description}
          </p>
        </div>
      </div>
    </div>

  );
};

export default StepCard;
