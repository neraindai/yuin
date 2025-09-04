import { useState } from "react";
import SectionHeader from "./SectionHeader";

const MobileViewSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      <SectionHeader sectionTitle="Title" noborder />

      {/* Buttons */}
      <div className="flex flex-row gap-4">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-bgBtn rounded-8 px-4 py-2"
        >
          home button
        </button>
        <button className="bg-bgBtn rounded-8 px-4 py-2">building</button>
      </div>

      {/* Search */}
      <form action="" className="mt-4">
        <label>
          <input
            type="search"
            placeholder="search placeholder"
            className="border px-3 py-2 rounded-md w-full"
          />
        </label>
      </form>

      {/* Sidebar Popup */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>

        <ul className="p-6 space-y-4">
          {["link 1", "link 2", "link 3"].map((link, index) => (
            <li key={index}>
              {/* Accordion Header */}
              <span
                className="flex justify-between items-center font-bold cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                {link}
                <span>{activeAccordion === index ? "−" : "+"}</span>
              </span>

              {/* Accordion Body */}
              <ul
                className={`pl-4 mt-2 space-y-2 text-sm overflow-hidden transition-all duration-300 ${
                  activeAccordion === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <li>
                  <a href="#">inner link 1</a>
                </li>
                <li>
                  <a href="#">inner link 2</a>
                </li>
                <li>
                  <a href="#">inner link 3</a>
                </li>
              </ul>
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
    </>
  );
};

export default MobileViewSideBar;
