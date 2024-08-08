
const StatCardsProfile = ({ title, description, value, color }) => {
  return (
    <div className="flex flex-col items-center bg-custom-light-purple p-6 rounded-lg">
      <p className="mt-4 text-gray-700 text-lg">{title}</p>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      <div className="relative">
        <svg
          className="w-32 h-32"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`text-${color}-200`}
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="100, 100"
          />
          <path
            className={`text-${color}-500`}
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="90, 100"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-2xl font-bold text-${color}-500`}>
            {value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatCardsProfile;
