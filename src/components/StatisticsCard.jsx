import React from 'react';

const StatisticsCard = ({ title, value, color }) => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h3 className="text-lg font-medium text-gray-600">{title}</h3>
      <div className={`mt-4 text-4xl font-bold ${color}`}>{value}</div>
    </div>
  );
};

export default StatisticsCard;
