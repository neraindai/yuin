const StepCard = ({ image, title, description, number }) => {
  return (
    <div className="mt-15">
     
      <div className="flex flex-col items-center justify-center">
        <img src={image} alt={title} className="w-auto h-30 object-cover" />
      </div>

     
      <div className="flex flex-col md:flex-row mt-3 gap-6 items-start justify-start">
       
        <div className="w-full w-full lg:w-[10%] md:text-left">
          <span className="font-yumincho text-xxl text-primary-text font-normal">{number}</span>
        </div>

       
        <div className="w-full lg:w-[80%] mt-4">
          <h3 className="font-yugothic text-md text-black-text font-bold text-left">{title}</h3>
          <p className="font-yugothic text-black-text font-regular text-nm text-left">
           {description}
          </p>
        </div>
      </div>
    </div>

  );
};

export default StepCard;
