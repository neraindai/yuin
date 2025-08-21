const SectionHeader = ({sectionTitle, shortDescription, noborder}) => {
    const withBorder = "text-center relative mb-16 font-yumincho pl-15 pr-15 after:content-[''] after:flex  after:h-[1px] after:mt-[25px]";
    const withoutBorder = "mb-6";
    return(
        <>
            <div className="flex flex-col">
                <h2 className="text-center heading text-3xl font-bold mt-0 font-yumincho tracking-tightest">{sectionTitle}</h2>
                <p className={`${noborder ? withoutBorder : withBorder }`}>{shortDescription}</p>
            </div>
        </>
    )
}

export default SectionHeader;