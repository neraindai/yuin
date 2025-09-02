import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { downarrow } from "../../assets";

export default function CustomSelect({ name, placeholder, options, iconLeft, withouSearchIcon }) {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={selectRef} className="relative flex items-center border rounded-md h-10 bg-white">
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={selected} />

      {/* Select button */}
      {withouSearchIcon ? (
        <>
        <button
        type="button"
        onClick={() =>  { console.log("clicked"); setOpen(!open); }}
        className="flex-1 h-full px-1 text-left flex items-center justify-between focus:outline-none"
      >
        {/* Left icon if provided */}
        {iconLeft && (
          <span className="absolute left-3">
            <img src={iconLeft} alt="icon" className="w-4 h-4 block object-cover" />
          </span>
        )}

        {/* Placeholder or selected value */}
        <span
          className={`${
            selected ? "text-gray-700 text-base" : "text-gray-400 text-sm"
          } ml-3`}
        >
          {selected || placeholder}
        </span>

        {/* Right chevron */}
        <span className="absolute right-2 pointer-events-none text-gray-500">
          <img src={downarrow} alt="down arrow" className="block object-cover" />
        </span>
      </button>
      </>) : (
        <>
        <button
        type="button"
        onClick={() =>  { console.log("clicked"); setOpen(!open); }}
        className="flex-1 h-full px-3 text-left flex items-center justify-between focus:outline-none"
      >
        {/* Left icon if provided */}
        {iconLeft && (
          <span className="absolute left-3">
            <img src={iconLeft} alt="icon" className="w-4 h-4 block object-cover" />
          </span>
        )}

        {/* Placeholder or selected value */}
        <span
          className={`${
            selected ? "text-gray-700 text-base" : "text-gray-400 text-sm"
          } ml-6`}
        >
          {selected || placeholder}
        </span>

        {/* Right chevron */}
        <span className="absolute right-12 pointer-events-none text-gray-500">
          <img src={downarrow} alt="down arrow" className="block object-cover" />
        </span>
      </button>
        </>)}
      

      {/* Search button */}
      {withouSearchIcon? (<>
      
      </>) : (<>
      <button
        type="submit"
        className="bg-green-100 text-green-700 px-3 h-full flex items-center justify-center rounded-none"
      >
        <FaSearch />
      </button></>)}

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
          {options.map((option, i) => (
            <div
              key={i}
              className="px-3 py-2 cursor-pointer hover:bg-[#BCF8D0] text-primary-text text-nm"
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
