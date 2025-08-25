import React from 'react';

const Tabs = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className="flex flex-col lg:flex-row border-b border-green-200 sm:rounded-t-[20px]">
      {tabs.map((tab, idx) => (
        <button
          key={idx}
          className={`text-base md:text-basemd lg:text-baselg px-6 py-3 pl-14 pr-14 text-semmd font-semibold border-t border-b border-l border-r lg:rounded-t-[30px] last:border-r 
            ${
              activeTab === idx
                ? 'bg-green-100 border-green-100 text-green-700 first:rounded-t-[20px] lg:rounded-t-[20px]'
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
