import { FaChevronDown } from "react-icons/fa";

const VenueSearchBar = () => {
  return (
    <div className="w-full max-w-3xl flex flex-col items-start gap-4">
      {/* Title */}
      <strong className="text-white text-lg">
        すべての結婚式場一覧
      </strong>

      {/* Search Form Row */}
      <div className="flex items-center gap-4 w-full">
        {/* Area Dropdown */}
        <div className="relative flex-1">
          <select className="w-full px-4 py-3 text-gray-700 outline-none appearance-none rounded-xl shadow-md bg-white/95">
            <option>エリア</option>
            <option>東京</option>
            <option>大阪</option>
            <option>名古屋</option>
          </select>
          {/* Custom Arrow */}
          <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
        </div>

        {/* Condition Dropdown */}
        <div className="relative flex-1">
          <select className="w-full px-4 py-3 text-gray-700 outline-none appearance-none rounded-xl shadow-md bg-white/95">
            <option>条件をしぼりこむ</option>
            <option>人気順</option>
            <option>価格順</option>
            <option>おすすめ</option>
          </select>
          {/* Custom Arrow */}
          <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
        </div>

        {/* Search Button */}
        <button className="bg-green-400 text-white font-semibold px-14 py-3 hover:bg-green-500 transition rounded-full shadow-md">
          検索
        </button>
      </div>
    </div>
  );
};

export default VenueSearchBar;
