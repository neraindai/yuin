const SectionHeader = ({sectionTitle, shortDescription, noborder, colorBlack}) => {
    const withBorder = "text-center text-base relative mb-5 lg:mb-16 font-yumincho pl-15 pr-15 after:content-[''] after:flex  after:h-[1px] after:mt-[25px]";
    const withoutBorder = "mb-10 lg:mb-16";
    return(
        <>
            {noborder?(
                <>
                <div className="flex flex-col">
                    <h2 className={`text-center heading text-md md:text-lg lg:text-xl mt-0 mb-2 lg:mb-8 font-yugothic font-bold tracking-tightest ${colorBlack? "text-[#000]" : "text-[#3a9d85]"}`}>{sectionTitle}</h2>
                </div>
            </>):(
                <>
                <div className="flex flex-col">
                    <h2 className={`text-center heading text-md md:text-lg lg:text-xl mt-0 font-yugothic font-bold tracking-tightest ${colorBlack? "text-[#000]" : "text-[#3a9d85]"}`}>{sectionTitle}</h2>
                    <p className={`${noborder ? withoutBorder : withBorder } text-smd md:text-nm lg:text-base`}>{shortDescription}</p>
                </div>
                </>
                )}
        </>
    )
}

export default SectionHeader;
