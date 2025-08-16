const HeroMiniImage = ({ image, children }) => {
  return (
    <div className="relative w-full h-60 md:h-96">
      {/* Background image */}
      <img
        src={image}
        alt="Hero"
        className="w-full h-full object-cover"
      />

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Children (title, form, etc.) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {children}
      </div>
    </div>
  );
};

export default HeroMiniImage;
