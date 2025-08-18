const StepCard = ({ image, title, description, number }) => {
  return (
    <div className="flex-[0_0_100%] md:[flex-[0_0_calc(50%)]] lg:flex-[0_0_calc(33.33%)] px-4 py-10">
     
      <div className="flex flex-col items-center justify-center">
        <img src={image} alt={title} className="w-auto h-30 object-cover" />
      </div>
      <div className="flex flex-col md:flex-row mt-3 gap-2 lg:gap-6 items-start justify-start">
        <div className="w-full w-full lg:w-[10%] md:text-left">
          <span className="font-yumincho text-lg lg:text-xxl text-primary-text font-normal text-center block lg:inline-block">{number}</span>
        </div>
        <div className="w-full lg:w-[80%] mt-0 lg:mt-4">
          <h3 className="font-yugothic text-md text-black-text font-bold text-left text-center lg:text-left">{title}</h3>
          <p className="font-yugothic text-black-text font-regular text-nm text-center lg:text-left">
           {description}
          </p>
        </div>
      </div>
    </div>

  );
};

export default StepCard;
