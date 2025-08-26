import { FaSearch, FaUser } from "react-icons/fa";
import { books } from "../../assets";

export default function SearchSection() {
  return (
    <div className="mt-16 mb-16 w-[488px] max-w-md p-6 bg-white bg-opacity-90 shadow-[0_4px_16px_rgba(0,0,0,0.1)] rounded-lg">
      <h2 className="text-base text-black-text font-semibold mb-4 flex items-center space-x-2">
        <img src={books} alt="books-icon" />
        <span> 結婚式場を探す</span>
      </h2>

      <form action="">
        <ul>
          <li className="mb-4">
            {/* Label */}
            <label className="text-black text-[12px] font-zen font-bold block mb-1">
              ユーザー名
            </label>

            {/* Input with icons */}
            <div className="relative">
              <input
                type="text"
                placeholder="shankar"
                className="w-full h-full border border-[#ccc] pl-9 pr-9 outline-none rounded"
              />

              {/* Left icon */}
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
                <FaUser />
              </span>

              {/* Right icon */}
              <span className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-100 text-green-700 px-3 h-full flex items-center justify-center rounded-none">
                <FaSearch />
              </span>
            </div>
          </li>
        </ul>
      </form>

      <form className="space-y-4 text-sm">
        {/* Search by area */}
        <div>
          <label className="text-grey text-[12px] font-zen font-bold block mb-1">
            挙式希望エリアから探す
          </label>
          <div className="flex items-center border rounded-md overflow-hidden h-10">
            <select
              className="flex-1 h-full px-3 outline-none border-none rounded-none"
              defaultValue=""
            >
              <option value="" disabled>
                選択する
              </option>
              <option>東京</option>
              <option>大阪</option>
              <option>名古屋</option>
            </select>
            <button
              type="submit"
              className="bg-green-100 text-green-700 px-3 h-full flex items-center justify-center rounded-none"
            >
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Search by venue name */}
        <div>
          <label className="text-grey text-[12px] font-zen font-bold block mb-1">
            式場名で探す
          </label>
          <div className="flex items-center border rounded-md overflow-hidden h-10">
            <input
              type="text"
              placeholder="式場名を入力してください"
              className="flex-1 h-full px-3 outline-none rounded-none"
            />
            <button
              type="submit"
              className="bg-green-100 text-green-700 px-3 h-full flex items-center justify-center rounded-none"
            >
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Search by keyword */}
        <div>
          <label className="text-grey text-[12px] font-zen font-bold block mb-1">
            キーワードで探す
          </label>
          <div className="flex items-center border rounded-md overflow-hidden h-10">
            <input
              type="text"
              placeholder="キーワードを入力してください"
              className="flex-1 h-full px-3 outline-none rounded-none"
            />
            <button
              type="submit"
              className="bg-green-100 text-green-700 px-3 h-full flex items-center justify-center rounded-none"
            >
              <FaSearch />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
