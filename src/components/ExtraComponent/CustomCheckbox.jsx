import { useState } from "react";

export default function CustomCheckbox({ label, checked: controlledChecked, onChange }) {
  const [checked, setChecked] = useState(controlledChecked || false);

  // If you want to support controlled usage from parent
  const isControlled = controlledChecked !== undefined;

  const handleChange = (e) => {
    if (!isControlled) {
      setChecked(e.target.checked);
    }
    if (onChange) onChange(e);
  };

  const isChecked = isControlled ? controlledChecked : checked;

  return (
    <label className="inline-flex items-center cursor-pointer select-none mb-5">
      <input
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={handleChange}
      />
      <span
        className={`
          w-[21px] h-[21px]  border transition-colors duration-300 ease-in-out
          flex-shrink-0
          flex items-center justify-center
          ${isChecked ? "bg-[#4C8B6D] border-[#4C8B6D]" : "border-[#4C8B6D] bg-transparent"}
        `}
      >
        {isChecked && (
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </span>
      <span
        className={`ml-5 select-none font-light font-zen transition-colors duration-300 ease-in-out ${
          isChecked ? "text-[#4C8B6D]" : "text-[#141416]"
        }`}
      >
        {label}
      </span>
    </label>
  );
}
