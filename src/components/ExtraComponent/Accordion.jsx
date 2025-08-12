import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Accordion = ({ number, question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-green-200">
      <button
        className="w-full flex justify-between items-center p-4 py-4 text-left text-sm font-medium"
        onClick={() => setOpen(!open)}
      >
        <span className="text-gray-800 text-md"><span className="font-bold pr-2 text-semmd font-[montserrat]">{ number }</span>{question}</span>
        <span className="text-xl font-bold text-black">{open ? '−' : '+'}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden pl-4 pr-4"
          >
            <div className="pb-4 px-1 text-gray-600 text-md leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;