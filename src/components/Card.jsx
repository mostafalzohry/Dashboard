// components/Card.js
import React from 'react';

const Card = ({ title, children, bgColor }) => {
  return (
    <div className={`bg-${bgColor} p-4 rounded-lg shadow-lg`}>
      <h3 className="text-sm font-semibold text-purple-600 mb-2">{title}</h3>
      {children}
    </div>
  );
};

export default Card;
