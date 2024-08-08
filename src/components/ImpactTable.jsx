import React from 'react';

const ImpactTable = () => {
  return (
    <div className="bg-custom-light-purple p-6 rounded-lg shadow-lg mt-8 md:mt-0 md:ml-8 w-full">
      <h2 className="text-indigo-800 text-xl font-semibold mb-4">
        Impact Measurement
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-indigo-800 border-b">
              <th className="pb-4 px-2">Questions</th>
              <th className="pb-4 px-2 text-center">T0</th>
              <th className="pb-4 px-2 text-center">T1</th>
              <th className="pb-4 px-2 text-center">T2</th>
              <th className="pb-4 px-2 text-center">T3</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-2">Lorem ipsum dolor sit amet consectetur?</td>
              <td className="py-2 px-2 text-center">7</td>
              <td className="py-2 px-2 text-center">4</td>
              <td className="py-2 px-2 text-center">8</td>
              <td className="py-2 px-2 text-center">9</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-2">Lorem ipsum dolor sit amet consectetur?</td>
              <td className="py-2 px-2 text-center">4</td>
              <td className="py-2 px-2 text-center">5</td>
              <td className="py-2 px-2 text-center">7</td>
              <td className="py-2 px-2 text-center">8</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-2">Lorem ipsum dolor sit amet consectetur?</td>
              <td className="py-2 px-2 text-center">5</td>
              <td className="py-2 px-2 text-center">3</td>
              <td className="py-2 px-2 text-center">6</td>
              <td className="py-2 px-2 text-center">8</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-2">Lorem ipsum dolor sit amet consectetur?</td>
              <td className="py-2 px-2 text-center">6</td>
              <td className="py-2 px-2 text-center">4</td>
              <td className="py-2 px-2 text-center">7</td>
              <td className="py-2 px-2 text-center">8</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImpactTable;
