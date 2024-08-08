import React from 'react';

const ImpactMeasurement = () => {
  const data = [
    "Ik versta goed nederlands",
    "Ik spreek goed nederlands",
    "Ik durf nederlands te spreken met nederlandse mensen",
    "Ik voel me goed omdat ik nederlands spreek",
    "Ik durf nieuwe dingen buitenshuis te doen omdat ik nederlands spreek",
    "Ik ben actief buitenshuis (bibliotheek, sport, bioscoop, winkelen, reizen met openbaar vervoer)",
    "Ik doe mee aan activiteiten in de buurt (straatfeest, koffie-ochtend, buurthuis)",
    "Ik heb vrijwilligerswerk"
  ];

  return (
    <div className="bg-gray-50 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact Measurement</h3>
      <table className="w-full text-sm text-left">
        <thead>
          <tr>
            <th className="text-gray-600">Questions</th>
            <th className="text-gray-600 text-center">T0</th>
            <th className="text-gray-600 text-center">T1</th>
          </tr>
        </thead>
        <tbody>
          {data.map((question, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-2 text-gray-700">{question}</td>
              <td className="text-center text-gray-700">5</td>
              <td className="text-center text-gray-700">6</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ImpactMeasurement;
