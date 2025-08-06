import React, { useState } from 'react';

const Accordion = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-green-200">
      <button
        className="w-full flex justify-between items-center py-4 text-left text-sm font-medium"
        onClick={() => setOpen(!open)}
      >
        <span className="text-gray-800">{question}</span>
        <span className="text-xl font-bold text-green-600">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="pb-4 px-1 text-gray-600 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export default Accordion;
