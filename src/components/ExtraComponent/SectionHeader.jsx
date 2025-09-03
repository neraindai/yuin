const SectionHeader = ({sectionTitle, shortDescription, noborder, colorBlack, smallHeading}) => {
    const withBorder = "text-center text-base relative font-yumincho pl-15 pr-15";
    const withoutBorder = "mb-10 lg:mb-16";
    return(
        <>
            {noborder?(
                <>
                <div className="flex flex-col mb-[16px] md:mb-[20px] lg:mb-[24px]">
                    <h2 className={`text-center heading font-yugothic font-bold tracking-tightest ${colorBlack? "text-black" : "text-primary-text"} ${smallHeading ? "text-md md:text-xmd lg:text-lg" : "text-md md:text-lg lg:text-xl"}`}>{sectionTitle}</h2>
                </div>
            </>):(
                <>
                <div className="flex flex-col mb-[36px] md:mb-[48px] lg:mb-[64px]">
                    <h2 className={`text-center heading text-md md:text-lg lg:text-xl mt-0 font-yugothic font-bold tracking-tightest ${colorBlack? "text-black" : "text-primary-text"}`}>{sectionTitle}</h2>
                    <p className={`${noborder ? withoutBorder : withBorder } text-smd md:text-nm lg:text-base`}>{shortDescription}</p>
                </div>
                </>
                )}
        </>
    )
}

export default SectionHeader;
