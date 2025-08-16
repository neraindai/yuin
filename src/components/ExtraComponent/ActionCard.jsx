const ActionCard = ({ label, buttonText }) => {
  return (
    <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-full px-16 py-5 shadow text-center w-full md:w-auto">
      <p className="text-sm font-yugothic font-bold text-primary-text">{label}</p>
      <button className="text-nm md:text-semmd font-bold mt-1 text-primary-text ">{buttonText}</button>
    </div>
  );
};

export default ActionCard;
