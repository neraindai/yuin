import React from 'react';

const Tabs = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className="flex lg:flex-row border-b border-green-200 sm:rounded-t-[20px]">
      {tabs.map((tab, idx) => (
        <button
          key={idx}
          className={`flex-1 md:flex-none text-base md:text-basemd lg:text-baselg px-[15px] md:px-6 py-[15px] md:py-3 md:pl-10 lg:pl-14 md:pr-10 lg:pr-14 text-semmd font-semibold border-t border-b border-l border-r rounded-t-[30px] last:border-r 
            ${
              activeTab === idx
                ? 'bg-green-100 border-green-100 text-green-700 first:rounded-t-[20px] rounded-t-[20px]'
                : 'text-gray-600 border-primary-text first:rounded-t-[20px]'
            }`}
          onClick={() => setActiveTab(idx)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
