import clsx from "clsx";

const Badge = ({ type, children }) => {
  const styles = clsx(
    "text-white text-xs font-bold px-3 py-1 rounded-full shadow-md",
    {
      "bg-red-500": type === "おすすめ", 
      "bg-yellow-400 text-black": type === "継続割引",
    }
  );

  return <span className={styles}>{children}</span>;
};

export default Badge;
