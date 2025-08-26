import { FaSearch } from "react-icons/fa";
import { books, iconhome, downarrow } from "../../assets";
import CustomSelect from "../ExtraComponent/CustomSelect";

export default function SearchSection() {
  return (
    <div className="mt-16 mb-16 w-[488px] max-w-md p-6 bg-white bg-opacity-90 shadow-[0_4px_16px_rgba(0,0,0,0.1)] rounded-lg">
      <h2 className="text-base text-black-text font-semibold mb-4 flex items-center space-x-2">
        <img src={books} alt="books-icon" />
        <span> 結婚式場を探す</span>
      </h2>

      
<form className="space-y-4 text-sm">
  {/* Search by area */}
  <div className="relative">
    <label className="text-grey text-sm font-zen font-bold block mb-1">
      挙式希望エリアから探す
    </label>
    <CustomSelect
      name="area"
      placeholder="選択する"
      options={["選択する", "選択する", "選択する"]}
      iconLeft={iconhome}
    />
  </div>

  {/* Search by venue name */}
  <div>
    <label className="text-grey text-sm font-zen font-bold block mb-1">
      式場名で探す
    </label>
    <div className="relative flex items-center border rounded-md overflow-hidden h-10">
      <input
        type="text"
        name="venue"
        placeholder="式場名を入力してください"
        className="flex-1 h-full py-6 outline-none rounded-none text-[10px]"
      />
      <span className="absolute left-3 pointer-events-none text-gray-500">
          <img src={iconhome} alt="home icon" className="w-4 h-4 block object-cover" />
        </span>
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
    <label className="text-grey text-sm font-zen font-bold block mb-1">
      キーワードで探す
    </label>
    <CustomSelect
      name="keyword"
      placeholder="式場名を入力してください"
      options={["式場名を入力してください", "式場名を入力してください", "式場名を入力してください"]}
      iconLeft={iconhome}
    />
  </div>
</form>
    </div>
  );
}
