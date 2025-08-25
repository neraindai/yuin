const BadgeBtn = ({ type, children }) => {
  let baseClasses =
    "text-white text-xs font-bold px-3 py-1 rounded-full shadow-md";

  let typeClasses = "";

  if (type === "おすすめ") {
    typeClasses = "bg-red-500";
  } else if (type === "継続割引") {
    typeClasses = "bg-yellow-400 text-black";
  }

  return <span className={`${baseClasses} ${typeClasses}`}>{children}</span>;
};

export default BadgeBtn;
