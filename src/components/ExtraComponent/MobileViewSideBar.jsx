import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { FaSearch } from "react-icons/fa";
import { homeIcon, buildingIcon, iconhome } from "../../assets";
import { logo } from "../../assets";
import { Link } from "react-router-dom";

const MobileViewSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  // const toggleAccordion = (index) => {
  //   setActiveAccordion(activeAccordion === index ? null : index);
  // };

  // Sample accordion data
  const accordionData = [
    {
      title: "首都圏",
      content: ["東京都", "神奈川県", "埼玉県", "千葉県"],
    },
    {
      title: "首都圏",
      content: ["東京都", "神奈川県", "埼玉県", "千葉県"],
    },
    {
      title: "首都圏",
      content: ["東京都", "神奈川県", "埼玉県", "千葉県"],
    },
    {
      title: "北陸・甲信越・静岡",
    },
    {
      title: "中国",
    },
    {
      title: "四国",
    },
    {
      title: "九州・沖縄",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeChild, setActiveChild] = useState({ parent: null, child: null });
  const [activeSingle, setActiveSingle] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    setActiveSingle(null); // reset single when accordion opens
  };

  const handleChildClick = (parentIndex, childIndex) => {
    setActiveChild({ parent: parentIndex, child: childIndex });
    setActiveSingle(null); // reset single if submenu clicked
  };

  const handleSingleClick = (index) => {
    setActiveSingle(index);
    setActiveIndex(null); // reset accordion if single clicked
    setActiveChild({ parent: null, child: null }); // reset submenu if single clicked
  };

  return (
    <>
      <div className="mt-[15px]">
        <SectionHeader sectionTitle="結婚式場を探す" noborder />
      </div>

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
            className="flex flex-col items-center justify-center rounded-2xl bg-bgBtn py-6 shadow-md hover:bg-green-300 transition"
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
          <button className="flex flex-col items-center justify-center rounded-2xl bg-bgBtn py-6 shadow-md hover:bg-green-300 transition">
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
          className={`bg-white pt-16 fixed top-0 left-0 h-full w-full shadow-lg transform transition-transform duration-300 z-50
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
          <ul className="main_parent">
            <label className="text-sm text-[#5B5B5B] bg-[#F5F5F5] py-3 px-2 block text-center">挙式希望エリアから探す</label>
            {accordionData.map((item, index) => (
              <li className="main_child" key={index}>
                <div>
                  {/* Accordion Header */}
                  {activeIndex === index ? (<>
                    <div className={`bg-bgBtn py-3 px-3 title_wrap flex justify-between items-center rounded ${item.content ? "cursor-pointer" : "cursor-pointer"
                      } ${activeSingle === index ? "bg-bgBtn" : ""}`}
                      onClick={() =>
                        item.content ? toggleAccordion(index) : handleSingleClick(index)
                      }>
                      {activeSingle === index ? (<><a href="#"><strong>{item.title}</strong></a></>) : (<><strong>{item.title}</strong></>)}

                      {/* Show + / - only if content exists */}
                      
                      {item.content && (
                        <div className="iconWrap">
                          <span className={`flex flex-row justify-center items-center p-[5px] w-[20px] h-[20px] ${activeIndex === index ? "bg-white text-primary-text" : "bg-primary-text text-white"}`}>{activeIndex === index ? "-" : "+"}</span>
                        </div>
                      )}
                    </div>

                  </>
                  ) : (
                    <>
                      <div
                        className={`p-3 title_wrap flex justify-between items-center rounded ${item.content ? "cursor-pointer" : "cursor-pointer"
                          } ${activeSingle === index ? "bg-bgBtn" : ""}`}
                        onClick={() =>
                          item.content ? toggleAccordion(index) : handleSingleClick(index)
                        } // only toggle if content exists
                      >
                        {activeSingle === index ? (<><a href="#"><strong>{item.title}</strong></a></>) : (<><strong>{item.title}</strong></>)}

                        {/* Show + / - only if content exists */}
                        {item.content && (
                          <div className="iconWrap">
                            <span className={`flex flex-row justify-center items-center p-[5px] w-[20px] h-[20px] ${activeIndex === index ? "bg-white text-primary-text" : "bg-primary-text text-white"}`}>{activeIndex === index ? "-" : "+"}</span>
                          </div>
                        )}
                      </div>
                    </>
                  )}


                  {/* Accordion Content */}
                  {item.content && (
                    <ul
                      className={`second_child accordionContent overflow-hidden transition-all duration-300 list-disc list-inside ${activeIndex === index
                        ? "max-h-40 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      {item.content.map((sub, subIndex) => (
                        <li
                          key={subIndex}
                          className={`mb-4 px-5 cursor-pointer ${activeChild.parent === index &&
                            activeChild.child === subIndex
                            ? "text-primary-text font-semibold"
                            : "text-black"
                            }`}
                          onClick={() => handleChildClick(index, subIndex)}
                        >
                          <a href="#">{sub}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
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
