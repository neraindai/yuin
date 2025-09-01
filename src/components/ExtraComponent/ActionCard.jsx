const ActionCard = ({ label, buttonText }) => {
  return (
    <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-full py-5 shadow text-center w-full md:w-[300px]">
      <p className="text-sm font-yugothic font-bold text-primary-text">{label}</p>
      <button className="text-smd md:text-baselg font-yugothic font-bold mt-1 text-primary-text ">{buttonText}</button>
    </div>
  );
};

export default ActionCard;
