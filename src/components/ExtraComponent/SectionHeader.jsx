const SectionHeader = ({ sectionTitle, shortDescription, noborder }) => {
  const withBorder =
    "text-center relative mb-1 font-yumincho pt-5 px-4 after:content-[''] after:flex after:h-[1px] after:bg-[#D5E6DC] after:mt-[25px]";
  const withoutBorder = "";

  return (
    <div className="flex flex-col mb-10">
      {/* Title */}
      <h2 className="text-center heading text-2xl md:text-2xl lg:text-3xl font-bold mt-0 font-yumincho">
        {sectionTitle}
      </h2>

      {/* Subtitle */}
      {shortDescription && (
        <p
          className={`mt-2 text-sm md:text-base lg:text-md text-gray-600 ${
            noborder ? withoutBorder : withBorder
          }`}
        >
          {shortDescription}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
