function Attendance() {
    return (
      <div className="text-center">
        <h3 className="text-lg font-semibold text-indigo-900 mb-4">Attendance</h3>
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
              className="text-green-400"
              strokeWidth="10"
              strokeDasharray={2 * Math.PI * 56}
              strokeDashoffset={2 * Math.PI * 56 * (1 - 0.95)}
              strokeLinecap="round"
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
              strokeDashoffset={2 * Math.PI * 56 * (1 - 0.91)}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="46"
              cx="64"
              cy="64"
            />
          </svg>
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <div className="flex justify-between mt-4 text-sm">
          <div>
            <p className="font-semibold text-indigo-900">Learners</p>
            <p className="text-indigo-600">91%</p>
          </div>
          <div>
            <p className="font-semibold text-indigo-900">
              Language
              <br />
              Buddies
            </p>
            <p className="text-green-500">95%</p>
          </div>
        </div>
      </div>
    );
  }

  export default Attendance