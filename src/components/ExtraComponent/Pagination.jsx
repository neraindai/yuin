const Pagination = () => {
  return (
    // <div className="mt-10 flex justify-center items-center gap-2 text-gray-600">
    //   {/* Previous button aligned left */}
    //   <div className="flex-1">
    //     <button className="px-3 py-1 rounded-full hover:bg-gray-200">
    //       前へ
    //     </button>
    //   </div>

    //   {/* Page numbers centered */}
    //   <div className="flex gap-2">
    //     {[1, 2, 3, 4, 5, 6, 7].map((num) => (
    //       <button
    //         key={num}
    //         className={`px-4 py-2 rounded-full ${
    //           num === 1 ? "bg-green-500 text-white" : "hover:bg-gray-200"
    //         }`}
    //       >
    //         {num}
    //       </button>
    //     ))}
    //   </div>

    //   {/* Next button aligned right */}
    //   <div className="flex-1 flex justify-end">
    //     <button className="px-3 py-1 rounded-full hover:bg-gray-200">
    //       次へ
    //     </button>
    //   </div>
    // </div>
    <div className="mt-10 flex justify-center items-center gap-2 text-gray-600">
      <button>前へ</button>
      {[1, 2, 3, 4, 5, 6, 7].map((num) => (
        <button
          key={num}
          className={`px-3 py-1 rounded-full ${
            num === 1 ? "bg-green-500 text-white" : "hover:bg-gray-200"
          }`}
        >
          {num}
        </button>
      ))}
      <button>次へ</button>
    </div>
  );
};

export default Pagination;
