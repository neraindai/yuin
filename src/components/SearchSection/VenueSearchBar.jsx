import { FaChevronDown } from "react-icons/fa";
import CustomSelect from "../ExtraComponent/CustomSelect";

const VenueSearchBar = () => {
  return (
    <div className="w-full max-w-3xl flex flex-col items-start gap-4">
      <div className="container mx-auto">
      {/* Title */}
      <strong className="text-white text-base md:text-baselg lg:text-md mb-2 lg:mb-0 block">
        すべての結婚式場一覧
      </strong>

      {/* Search Form Row */}
      <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
        {/* Area Dropdown */}
        <div className="relative w-full lg:flex-1">
          {/* <select className="w-full px-4 py-3 text-gray-700 outline-none appearance-none rounded-xl shadow-md bg-white/95">
            <option>エリア</option>
            <option>東京</option>
            <option>大阪</option>
            <option>名古屋</option>
          </select> */}
          <CustomSelect
                name="area hello"
                placeholder="選択する"
                options={["選択する", "選択する", "選択する"]}
                withouSearchIcon
              />
        </div>

        {/* Condition Dropdown */}
        <div className="relative w-full lg:flex-1">
          <CustomSelect
                name="area hello"
                placeholder="選択する"
                options={["選択する", "選択する", "選択する"]}
                withouSearchIcon
              />
        </div>

        {/* Search Button */}
        <button className="w-full lg:w-[150px] bg-[#C3F1D6] text-primary-text font-semibold px-14 py-3 hover:bg-green-500 transition rounded-full shadow-md">
          検索
        </button>
      </div>
      </div>
    </div>
  );
};

export default VenueSearchBar;
