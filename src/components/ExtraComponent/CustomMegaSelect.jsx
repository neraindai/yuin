import { useState, useRef, useEffect } from "react";
import { downarrow, iconhome } from "../../assets";
import { FaSearch } from "react-icons/fa";

const CustomMegaSelect = () => {
  const venues = ["北海道全て (23)", "帯広・釧路・北見・道東", "旭川市・道北 (23)", "札幌市・札幌近郊", "胆振・日高・千歳 (０)", "函館市・道南"];
  const cities = {
    "北海道全て 1": ["札幌市・札幌近郊 1", "札幌市・札幌近郊 2", "札幌市・札幌近郊 3", "札幌市・札幌近郊 4"],
    "函館市・道南 2": ["函館市・道南 1", "函館市・道南 2", "函館市・道南 3", "函館市・道南 4"],
    "帯広・釧路・北見・道東 3": ["帯広・釧路・北見・道東 1", "帯広・釧路・北見・道東 2", "帯広・釧路・北見・道東 3", "帯広・釧路・北見・道東 4"],
    "胆振・日高・千歳 4": ["胆振・日高・千歳 1", "胆振・日高・千歳 2", "胆振・日高・千歳 3", "胆振・日高・千歳 4"],
  };

  const [selected, setSelected] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentOptions, setCurrentOptions] = useState(venues);
  const [showSecondChoice, setShowSecondChoice] = useState(false);
  const [currentChoice, setCurrentChoice] = useState(null);

  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setShowSecondChoice(false);
        setCurrentChoice(null);
        setCurrentOptions(venues);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleOption = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((v) => v !== option)
        : [...prev, option]
    );
  };

  const handleCityClick = (city) => {
    setCurrentChoice(city);
    setCurrentOptions(cities[city]);
    setSelected([]); // clear previous selection
    setShowSecondChoice(false);
  };

  const handleBack = () => {
    setCurrentChoice(null);
    setCurrentOptions(venues);
    setSelected([]);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Main select button */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative w-full py-3 pl-6 border rounded-lg bg-white text-left cursor-pointer"
      >
        {/* homeicon */}

        {/* Left icon if provided */}
          <span className="absolute left-3">
            <img src={iconhome} alt="icon" className="w-4 h-4 block object-cover" />
          </span>

        <span className={`font-yugothic pl-3 ${selected.length === 0 ? "text-gray-400" : "text-black"}`}>
        {selected.length > 0 ? selected.join(", ") : currentChoice ? currentChoice : "選択する"}
        </span>

        {/* Right chevron */}
        <span className="absolute right-10 pointer-events-none text-gray-500">
          <img src={downarrow} alt="down arrow" className="block object-cover" />
        </span>
        <button
            type="submit"
            className="absolute right-0 top-0 bg-green-100 text-green-700 px-3 h-full flex items-center justify-center rounded-none"
        >
            <FaSearch />
        </button>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg p-6 z-10">
          {/* City select button */}
          {!currentChoice && (
            <div className="mb-2">
              <div
                onClick={() => setShowSecondChoice(!showSecondChoice)}
                className="w-full flex justify-between items-center p-2 border rounded hover:bg-gray-100"
              >
                {/* select city */}
                帯広・釧路・北見・道東 
                <>{showSecondChoice ? <span  className="scale-y-[-1]"><img src={downarrow} alt="down arrow" className="block object-cover" /></span>: <span><img src={downarrow} alt="down arrow" className="block object-cover" /></span>}</>
              </div>

              {/* City options dropdown */}
              {showSecondChoice && (
                <div className="mt-1 border rounded shadow bg-white">
                  {Object.keys(cities).map((city, index) => (
                    <div
                      key={index}
                      onClick={() => handleCityClick(city)}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {city}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Back button */}
          {currentChoice && (
            <button
              onClick={handleBack}
              className="mb-2 flex items-center space-x-1 text-primary-text font-yugothic text-smd font-semibold hover:underline"
            >
              <span>←</span>
              <span>Back</span>
            </button>
          )}

          {/* Options with checkboxes */}
          <div className="grid grid-cols-1fr lg:grid-cols-2 gap-2">
            {currentOptions.map((option, index) => (
              <label
                key={index}
                className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(option)}
                  onChange={() => toggleOption(option)}
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          
        {/* Button */}
        <div className="w-full grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] gap-[10px] mt-8">
            <button
            className="font-medium px-4 sm:px-5 py-2 rounded-full transition w-full sm:w-auto border border-[#4C8B6D] text-black shadow-md"
            >
            条件クリア
            </button>
            <button
            className="font-medium px-4 sm:px-5 py-2 rounded-full transition w-full sm:w-auto bg-[#BCF8D0] text-black shadow-md"
            >
            検索する
            </button>
        </div>
        </div>
      )}
    </div>
  );
};

export default CustomMegaSelect;
