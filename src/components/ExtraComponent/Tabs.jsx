import React from 'react';

const Tabs = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className="flex border-b border-green-200">
      {tabs.map((tab, idx) => (
        <button
          key={idx}
          className={`px-6 py-2 text-sm font-semibold border-t border-l border-r 
            ${
              activeTab === idx
                ? 'bg-green-100 text-green-700 border-green-300 rounded-t-md'
                : 'text-gray-600'
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
