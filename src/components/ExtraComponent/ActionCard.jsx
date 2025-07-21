const ActionCard = ({ label, buttonText }) => {
  return (
    <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-full px-8 py-4 shadow text-center w-full md:w-auto">
      <p className="text-sm text-gray-600">{label}</p>
      <button className="text-lg font-bold text-green-700 mt-1">{buttonText}</button>
    </div>
  );
};

export default ActionCard;
