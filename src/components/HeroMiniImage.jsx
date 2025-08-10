const HeroMiniImage = ({ image }) => {
  return (
    <div className="w-full h-60 md:h-96">
      <img
        src={image}
        alt="Hero"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroMiniImage;
