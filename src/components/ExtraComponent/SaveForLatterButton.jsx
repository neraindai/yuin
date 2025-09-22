import { useState } from "react";
import { BiBookmark, BiSolidBookmark } from "react-icons/bi";

export default function SaveForLater() {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <button onClick={() => setIsSaved(!isSaved)} className="p-2">
      {isSaved ? (
        <BiSolidBookmark className="w-5 md:w-6 lg:w-8 h-5 md:h-6 lg:h-8 text-primary-text" />
      ) : (
        <BiBookmark className="w-5 md:w-6 lg:w-8 h-5 md:h-6 lg:h-8 text-primary-text" />
      )}
    </button>
  );
}
