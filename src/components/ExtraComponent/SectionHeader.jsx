const SectionHeader = ({sectionTitle, shortDescription, noborder}) => {
    const withBorder = "text-center relative mb-1 font-yumincho pl-15 pr-15 after:content-[''] after:flex  after:h-[1px] after:bg-[#D5E6DC] after:mt-[25px]";
    const withoutBorder = "";
    return(
        <>
            <div className="flex flex-col mb-10">
                <h2 className="text-center heading text-3xl font-bold mb-5 mt-0 font-yumincho">{sectionTitle}</h2>
                <p className={`${noborder ? withoutBorder : withBorder }`}>{shortDescription}</p>
            </div>
        </>
    )
}

export default SectionHeader;