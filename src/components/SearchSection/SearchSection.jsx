import { FaSearch, FaMapMarkerAlt, FaSearchLocation } from "react-icons/fa";


export default function SearchSection() {
  return (
    <div className="mt-16 mb-16 w-[488px] p-5 shadow-[0_4px_16px_rgba(0,0,0,0.1)] rounded-[10px] bg-white bg-opacity-90 rounded-lg p-6 max-w-md shadow-lg">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FaMapMarkerAlt />
        <span>結婚式場を探す</span>
      </h2>

      <form className="space-y-4 text-sm">
        {/* Search by area */}
        <div>
          <label className="font-bold text-[#5B5B5B] text-[12px] font-zen font-semibold block mb-1">挙式希望エリアから探す</label>
          <div className="flex items-center border rounded-md overflow-hidden">
            <select
              className="flex-1 px-3 py-2 outline-none border-none"
              defaultValue=""
            >
              <option value="" disabled>
                選択する
              </option>
              <option>東京</option>
              <option>大阪</option>
              <option>名古屋</option>
              {/* Add more options */}
            </select>
            <button
              type="submit"
              className="bg-green-100 text-green-700 px-3 py-2"
            >
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Search by venue name */}
        <div>
          <label className="font-bold text-[#5B5B5B] text-[12px] font-zen font-semibold block mb-1">式場名で探す</label>
          <div className="flex items-center border rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="式場名を入力してください"
              className="flex-1 px-3 py-2 outline-none"
            />
            <button
              type="submit"
              className="bg-green-100 text-green-700 px-3 py-2"
            >
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Search by keyword */}
        <div>
          <label className="font-bold text-[#5B5B5B] text-[12px] font-zen font-semibold block mb-1">キーワードで探す</label>
          <div className="flex items-center border rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="式場名を入力してください"
              className="flex-1 px-3 py-2 outline-none"
            />
            <button
              type="submit"
              className="bg-green-100 text-green-700 px-3 py-2"
            >
              <FaSearch />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
