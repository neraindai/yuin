import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { FaSearch } from "react-icons/fa";
import { homeIcon, buildingIcon, iconhome } from "../../assets";
import { logo } from "../../assets";
import { Link } from "react-router-dom";

const MobileViewSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      <SectionHeader sectionTitle="結婚式場を探す" noborder />

      <div className="container">
        {/* Buttons */}
        {/* <div className="flex flex-row gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-bgBtn rounded-8 px-4 py-2"
          >
            home button
          </button>
          <button className="bg-bgBtn rounded-8 px-4 py-2">building</button>
        </div> */}

        {/* Buttons row */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Button 1 */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex flex-col items-center justify-center rounded-2xl bg-green-200 py-6 shadow-md hover:bg-green-300 transition"
          >
            <img
              src={homeIcon}
              alt="home icon"
              className="w-8 h-8 mb-2 object-contain"
            />
            <span className="text-green-900 font-medium">
              挙式希望エリアから探す
            </span>
          </button>

          {/* Button 2 */}
          <button className="flex flex-col items-center justify-center rounded-2xl bg-green-200 py-6 shadow-md hover:bg-green-300 transition">
            <img
              src={buildingIcon}
              alt="building icon"
              className="w-8 h-8 mb-2 object-contain"
            />
            <span className="text-green-900 font-medium">式場名で探す</span>
          </button>
        </div>

        {/* Search */}
        {/* <form action="" className="mt-4">
          <label>
            <input
              type="search"
              placeholder="search placeholder"
              className="border px-3 py-2 rounded-md w-full"
            />
          </label>
        </form> */}

        <form className="banner_form space-y-4 text-sm mt-4">
          {/* Search by venue name */}
          <div>
            {/* <label className="text-grey text-sm font-zen font-bold block mb-1">
              式場名で探す
            </label> */}
            <div className="relative flex items-center border rounded-md overflow-hidden h-10">
              <input
                type="text"
                name="venue"
                placeholder="キーワードで探す"
                className="flex-1 h-full outline-none rounded-none text-[10px]"
              />
              <span className="absolute left-3 pointer-events-none text-gray-500">
                <img
                  src={iconhome}
                  alt="home icon"
                  className="w-4 h-4 block object-cover"
                />
              </span>
              <button
                type="submit"
                className="bg-green-100 text-green-700 px-3 h-full flex items-center justify-center rounded-none"
              >
                <FaSearch />
              </button>
            </div>
          </div>
        </form>

        {/* Sidebar Popup */}
        <div
          className={`bg-white fixed top-0 left-0 h-full w-full shadow-lg transform transition-transform duration-300 z-50
  ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Logo at top-left */}
          <div className="absolute top-4 left-4">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-[120px] xl:w-[150px] object-contain"
              />
            </Link>
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-md text-black"
          >
            ✕
          </button>

          {/* Sidebar links */}
          <ul className="py-6 space-y-4 mt-20 bg-white">
            {/* Accordion links */}
            {["link 1", "link 2", "link 3"].map((link, index) => (
              <li key={index}>
                <span
                  className={`flex justify-between items-center font-bold cursor-pointer px-4 py-2 transition-colors ${
                    activeAccordion === index
                      ? "bg-green-200 text-green-900"
                      : "bg-transparent text-gray-800"
                  } hover:bg-green-100`}
                  onClick={() => toggleAccordion(index)}
                >
                  {link}
                  <span
                    className={`w-6 h-5 flex items-center justify-center rounded-sm text-sm font-bold transition-colors ${
                      activeAccordion === index
                        ? "bg-white text-black"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {activeAccordion === index ? "−" : "+"}
                  </span>
                </span>

                {/* Accordion Body */}
                <ul
                  className={`list-disc pl-6 mt-2 space-y-2 text-sm overflow-hidden transition-all duration-300 ${
                    activeAccordion === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <li>
                    <a
                      href="#"
                      className="text-black hover:bg-green-100 rounded px-4 py-1 block"
                    >
                      inner link 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-black hover:bg-green-100 rounded px-4 py-1 block"
                    >
                      inner link 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-black hover:bg-green-100 rounded px-4 py-1 block"
                    >
                      inner link 3
                    </a>
                  </li>
                </ul>
              </li>
            ))}

            {/* Simple links */}
            <li>
              <a
                href="#"
                className="block font-bold px-3 py-2 rounded-md transition-colors bg-transparent text-gray-800 hover:bg-green-100"
              >
                link 4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block font-bold px-3 py-2 rounded-md transition-colors bg-transparent text-gray-800 hover:bg-green-100"
              >
                link 5
              </a>
            </li>
          </ul>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
          ></div>
        )}
      </div>
    </>
  );
};

export default MobileViewSideBar;
