import React from 'react';

const LanguagesAndLevel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {/* Mother Language */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-lg">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">Mother Language</h3>
        <div className="text-sm text-gray-700">
          <span className="inline-block bg-green-100 text-green-600 py-1 px-3 rounded-full">Arabic</span>
        </div>
      </div>

      {/* Other Languages */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-lg">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">Other Languages</h3>
        <div className="flex space-x-2">
          <span className="inline-block bg-blue-100 text-blue-600 py-1 px-3 rounded-full">English</span>
          <span className="inline-block bg-red-100 text-red-600 py-1 px-3 rounded-full">German</span>
        </div>
      </div>

      {/* Level */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-lg">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">Level</h3>
        <div className="text-sm text-gray-700">
          <span className="inline-block bg-yellow-100 text-yellow-600 py-1 px-3 rounded-full">Med B2</span>
        </div>
      </div>

      {/* Interests */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-lg">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">Interests</h3>
        <div className="flex space-x-2">
          <span className="inline-block bg-gray-200 text-gray-600 py-1 px-3 rounded-full">Reading</span>
          <span className="inline-block bg-gray-200 text-gray-600 py-1 px-3 rounded-full">Hiking</span>
        </div>
      </div>
    </div>
  );
};

export default LanguagesAndLevel;
