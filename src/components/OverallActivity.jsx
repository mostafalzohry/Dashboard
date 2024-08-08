function OverallActivity() {
    return (
      <div className="text-center">
        <h3 className="text-lg font-semibold text-indigo-900 mb-1">
          Overall Activity
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Hours spent by organizations starting from January
        </p>
        <div className="relative inline-flex items-center justify-center">
          <svg className="w-32 h-32">
            <circle
              className="text-indigo-100"
              strokeWidth="10"
              stroke="currentColor"
              fill="transparent"
              r="56"
              cx="64"
              cy="64"
            />
            <circle
              className="text-indigo-600"
              strokeWidth="10"
              strokeDasharray={2 * Math.PI * 56}
              strokeDashoffset={2 * Math.PI * 56 * (1 - 200 / 360)}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="56"
              cx="64"
              cy="64"
            />
          </svg>
          <span className="absolute text-2xl font-bold text-indigo-900">
            200
            <br />
            hours
          </span>
        </div>
      </div>
    );
  }

  export default OverallActivity