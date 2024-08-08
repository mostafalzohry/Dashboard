import React from 'react';
import ProfileCard from '../../components/ProfileCard'
import StatisticsCard from '../../components/StatisticsCard'
import ImpactMeasurement from '../../components/ImpactMeasurement'
import LanguagesAndLevel from '../../components/LanguagesAndLevel'
import CircularProgress from '../../components/CircularProgress'


const Profile = () => {
  return (



  <div className="min-h-screen bg-gray-100 p-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

    {/* Profile Section */}
    <div className="col-span-1 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
      <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
      <h2 className="text-xl font-semibold text-gray-900">Haitham Badran</h2>
      <p className="text-sm text-gray-500 mb-4">Marketing Coordinator</p>
      <p className="text-center text-sm text-gray-700 mb-6">
        “I’m a marketing coordinator who recently moved to Netherlands and I'm struggling with the Dutch language.”
      </p>
      <div className="w-full space-y-2">
        <div className="flex items-center text-gray-500 text-sm">
          <span className="mr-2">📧</span>
          <span>haithambadran@gmail.com</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <span className="mr-2">📞</span>
          <span>+31 71 131 9858</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <span className="mr-2">📍</span>
          <span>6391 Elgin St. Celina, Delaware 10299</span>
        </div>
      </div>
    </div>

    {/* Right Column */}
    <div className="lg:col-span-3 space-y-6">

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* Mother Language */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Mother Language</h3>
          <div className="text-sm text-gray-700">
            <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">Arabic</span>
          </div>
        </div>

        {/* Other Languages */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Other Languages</h3>
          <div className="flex space-x-2">
            <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">English</span>
            <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">German</span>
          </div>
        </div>

        {/* Level */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Level</h3>
          <div className="text-sm text-gray-700">
            <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">Med B2</span>
          </div>
        </div>

        {/* Interests */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Interests</h3>
          <div className="flex space-x-2">
            <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">Reading</span>
            <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">Hiking</span>
          </div>
        </div>
      </div>

      {/* Circular Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-purple-600">200 hours</h3>
          <p className="text-sm text-gray-500">Hours spent</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-green-600">200 Remaining</h3>
          <p className="text-sm text-gray-500">Credit spent</p>
        </div>
      </div>

      {/* Impact Measurement */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-gray-600 mb-4">Impact Measurement</h3>
        <div>
          <div className="grid grid-cols-3 text-sm font-semibold text-gray-500 mb-2">
            <span>Questions</span>
            <span className="text-center">T0</span>
            <span className="text-center">T1</span>
          </div>
          {["Ik versta goed nederlands", "Ik spreek goed nederlands", "Ik durf nederlands te spreken met nederlandse mensen", "Ik voel me goed omdat ik nederlands spreek", "Ik durf nieuwe dingen buitenshuis te doen omdat ik nederlands spreek", "Ik ben actief buitenshuis", "Ik doe mee aan activiteiten in de buurt", "Ik heb vrijwilligerswerk"].map((question, idx) => (
            <div key={idx} className="grid grid-cols-3 text-sm mb-2">
              <span>{question}</span>
              <span className="text-center">5</span>
              <span className="text-center">6</span>
            </div>
          ))}
        </div>
      </div>
      
    </div>

  </div>
</div>

/// good too



  );
};

export default Profile;


// <div className="min-h-screen bg-gray-100 p-8">
//   <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

//     {/* Profile Section */}
//     <div className="col-span-1 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//       <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
//       <h2 className="text-xl font-semibold text-gray-900">Haitham Badran</h2>
//       <p className="text-sm text-gray-500 mb-4">Marketing Coordinator</p>
//       <p className="text-center text-sm text-gray-700 mb-6">
//         “I’m a marketing coordinator who recently moved to Netherlands and I'm struggling with the Dutch language.”
//       </p>
//       <div className="w-full space-y-2">
//         <div className="flex items-center text-gray-500 text-sm">
//           <span className="mr-2">📧</span>
//           <span>haithambadran@gmail.com</span>
//         </div>
//         <div className="flex items-center text-gray-500 text-sm">
//           <span className="mr-2">📞</span>
//           <span>+31 71 131 9858</span>
//         </div>
//         <div className="flex items-center text-gray-500 text-sm">
//           <span className="mr-2">📍</span>
//           <span>6391 Elgin St. Celina, Delaware 10299</span>
//         </div>
//       </div>
//     </div>

//     {/* Right Column */}
//     <div className="lg:col-span-3 space-y-6">

//       {/* Language and Level Cards */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         <div className="bg-white p-4 rounded-lg shadow-lg text-center">
//           <p className="text-sm font-semibold text-gray-600">Mother Language</p>
//           <p className="text-lg text-blue-600 mt-2">Arabic</p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-lg text-center">
//           <p className="text-sm font-semibold text-gray-600">Other Languages</p>
//           <p className="text-lg text-blue-600 mt-2">English, German</p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-lg text-center">
//           <p className="text-sm font-semibold text-gray-600">Level</p>
//           <p className="text-lg text-yellow-500 mt-2">Med B2</p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-lg text-center">
//           <p className="text-sm font-semibold text-gray-600">Interests</p>
//           <p className="text-lg text-blue-600 mt-2">Reading, Hiking</p>
//         </div>
//       </div>

//       {/* Row with Charts and Impact Measurement */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
//         {/* Hours Spent */}
//         <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//           <h3 className="text-sm font-semibold text-gray-600 mb-2">Hours spent</h3>
//           <CircularProgress
//             value={200}
//             max={200}
//             size={120}
//             strokeWidth={10}
//             color="#6D28D9" // Purple
//           />
//           <p className="text-xl text-purple-600 font-bold mt-2">200 hours</p>
//         </div>

//         {/* Credit Spent */}
//         <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//           <h3 className="text-sm font-semibold text-gray-600 mb-2">Credit spent</h3>
//           <CircularProgress
//             value={200}
//             max={200}
//             size={120}
//             strokeWidth={10}
//             color="#22c55e" // Green
//           />
//           <p className="text-xl text-green-600 font-bold mt-2">200 Remaining</p>
//         </div>

//         {/* Impact Measurement */}
//         <div className="bg-white p-6 rounded-lg shadow-lg col-span-1 md:col-span-1">
//           <h3 className="text-lg font-semibold text-gray-900 mb-4">Impact Measurement</h3>
//           <table className="w-full text-sm text-left text-gray-500">
//             <thead className="text-xs text-gray-700 uppercase bg-gray-50">
//               <tr>
//                 <th className="py-3 px-6">Questions</th>
//                 <th className="py-3 px-6 text-center">T0</th>
//                 <th className="py-3 px-6 text-center">T1</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="py-3 px-6">Ik versta goed nederlands</td>
//                 <td className="py-3 px-6 text-center">5</td>
//                 <td className="py-3 px-6 text-center">6</td>
//               </tr>
//               <tr>
//                 <td className="py-3 px-6">Ik spreek goed nederlands</td>
//                 <td className="py-3 px-6 text-center">5</td>
//                 <td className="py-3 px-6 text-center">6</td>
//               </tr>
//               {/* Repeat similar structure for other questions */}
//             </tbody>
//           </table>
//         </div>

//       </div>
//     </div>
//   </div>
// </div>

//     // <div className="flex justify-center items-center h-screen">
//     //   <ProfilePage />
//     // </div>
//     // <div className="min-h-screen bg-gray-100 p-8">
//     //   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
//     //     <div className="col-span-1">
//     //       <ProfileCard />
//     //     </div>
//     //     <div className="col-span-2 grid grid-cols-2 gap-4">
//     //       <LanguagesAndLevel />
//     //       <StatisticsCard title="Hours spent" value="200 hours" color="text-blue-500" />
//     //       <StatisticsCard title="Credit spent" value="200 Remaining" color="text-green-500" />
//     //       <div className="col-span-2">
//     //         <ImpactMeasurement />
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//     //////////////////////////
// //     <div className="min-h-screen bg-gray-100 p-8">
// //     <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
      
// //       {/* Profile Section */}
// //       <div className="col-span-1 bg-white p-4 rounded-lg shadow-lg">
// //         <div className="flex flex-col items-center text-center">
// //           <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
// //           <h2 className="text-xl font-semibold">Haitham Badran</h2>
// //           <p className="text-sm text-gray-500">Marketing Coordinator</p>
// //           <p className="mt-4 text-sm">“I’m a marketing coordinator who recently moved to Netherlands and I'm struggling with the Dutch language.”</p>
// //         </div>
        
// //         <div className="mt-6 space-y-2">
// //           <div className="flex items-center text-gray-500 text-sm">
// //             <span className="mr-2">📧</span>
// //             <span>haithambadran@gmail.com</span>
// //           </div>
// //           <div className="flex items-center text-gray-500 text-sm">
// //             <span className="mr-2">📞</span>
// //             <span>+31 71 131 9858</span>
// //           </div>
// //           <div className="flex items-center text-gray-500 text-sm">
// //             <span className="mr-2">📍</span>
// //             <span>6391 Elgin St. Celina, Delaware 10299</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Languages and Level Section */}
// //       <div className="lg:col-span-3">
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
// //           {/* Mother Language */}
// //           <div className="bg-white p-4 rounded-lg shadow-lg">
// //             <h3 className="text-sm font-semibold text-gray-600 mb-2">Mother Language</h3>
// //             <div className="text-sm text-gray-700">
//               <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">Arabic</span>
//             </div>
//           </div>

//           {/* Other Languages */}
//           <div className="bg-white p-4 rounded-lg shadow-lg">
//             <h3 className="text-sm font-semibold text-gray-600 mb-2">Other Languages</h3>
//             <div className="flex space-x-2">
//               <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">English</span>
//               <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">German</span>
//             </div>
//           </div>

//           {/* Level */}
//           <div className="bg-white p-4 rounded-lg shadow-lg">
//             <h3 className="text-sm font-semibold text-gray-600 mb-2">Level</h3>
//             <div className="text-sm text-gray-700">
//               <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">Med B2</span>
//             </div>
//           </div>

//           {/* Interests */}
//           <div className="bg-white p-4 rounded-lg shadow-lg">
//             <h3 className="text-sm font-semibold text-gray-600 mb-2">Interests</h3>
//             <div className="flex space-x-2">
//               <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">Reading</span>
//               <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">Hiking</span>
//             </div>
//           </div>

//           {/* Hours Spent */}
//           <div className="col-span-2 md:col-span-1 bg-white p-4 rounded-lg shadow-lg text-center">
//             <h3 className="text-xl font-semibold text-purple-600">200 hours</h3>
//             <p className="text-sm text-gray-500">Hours spent</p>
//           </div>

//           {/* Credit Spent */}
//           <div className="col-span-2 md:col-span-1 bg-white p-4 rounded-lg shadow-lg text-center">
//             <h3 className="text-xl font-semibold text-purple-600">200 Remaining</h3>
//             <p className="text-sm text-gray-500">Credit spent</p>
//           </div>
//         </div>

//         {/* Impact Measurement */}
//         <div className="bg-white p-4 mt-4 rounded-lg shadow-lg">
//           <h3 className="text-lg font-semibold text-gray-600 mb-4">Impact Measurement</h3>
//           <div>
//             <div className="grid grid-cols-3 text-sm font-semibold text-gray-500 mb-2">
//               <span>Questions</span>
//               <span className="text-center">T0</span>
//               <span className="text-center">T1</span>
//             </div>
//             {["Ik versta goed nederlands", "Ik spreek goed nederlands", "Ik durf nederlands te spreken met nederlandse mensen", "Ik voel me goed omdat ik nederlands spreek", "Ik durf nieuwe dingen buitenshuis te doen omdat ik nederlands spreek", "Ik ben actief buitenshuis", "Ik doe mee aan activiteiten in de buurt", "Ik heb vrijwilligerswerk"].map((question, idx) => (
//               <div key={idx} className="grid grid-cols-3 text-sm mb-2">
//                 <span>{question}</span>
//                 <span className="text-center">5</span>
//                 <span className="text-center">6</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
      
//     </div>
//   </div>
  //// the basic layout is above

//   <div className="min-h-screen bg-gray-100 p-8">
//   <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

//     {/* Profile Section */}
//     <div className="col-span-1 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//       <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
//       <h2 className="text-xl font-semibold text-gray-900">Haitham Badran</h2>
//       <p className="text-sm text-gray-500 mb-4">Marketing Coordinator</p>
//       <p className="text-center text-sm text-gray-700 mb-6">
//         “I’m a marketing coordinator who recently moved to Netherlands and I'm struggling with the Dutch language.”
//       </p>
//       <div className="w-full space-y-2">
//         <div className="flex items-center text-gray-500 text-sm">
//           <span className="mr-2">📧</span>
//           <span>haithambadran@gmail.com</span>
//         </div>
//         <div className="flex items-center text-gray-500 text-sm">
//           <span className="mr-2">📞</span>
//           <span>+31 71 131 9858</span>
//         </div>
//         <div className="flex items-center text-gray-500 text-sm">
//           <span className="mr-2">📍</span>
//           <span>6391 Elgin St. Celina, Delaware 10299</span>
//         </div>
//       </div>
//     </div>

//     {/* Right Column */}
//     <div className="lg:col-span-3 space-y-6">

//       {/* Top Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
//         {/* Mother Language */}
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <h3 className="text-sm font-semibold text-gray-600 mb-2">Mother Language</h3>
//           <div className="text-sm text-gray-700">
//             <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">Arabic</span>
//           </div>
//         </div>

//         {/* Other Languages */}
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <h3 className="text-sm font-semibold text-gray-600 mb-2">Other Languages</h3>
//           <div className="flex space-x-2">
//             <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">English</span>
//             <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">German</span>
//           </div>
//         </div>

//         {/* Level */}
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <h3 className="text-sm font-semibold text-gray-600 mb-2">Level</h3>
//           <div className="text-sm text-gray-700">
//             <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">Med B2</span>
//           </div>
//         </div>

//         {/* Interests */}
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <h3 className="text-sm font-semibold text-gray-600 mb-2">Interests</h3>
//           <div className="flex space-x-2">
//             <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">Reading</span>
//             <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">Hiking</span>
//           </div>
//         </div>
//       </div>

//       {/* Circular Cards */}
//       <div className="grid grid-cols-2 gap-4">
//         <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//           <h3 className="text-xl font-semibold text-purple-600">200 hours</h3>
//           <p className="text-sm text-gray-500">Hours spent</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//           <h3 className="text-xl font-semibold text-green-600">200 Remaining</h3>
//           <p className="text-sm text-gray-500">Credit spent</p>
//         </div>
//       </div>

//       {/* Impact Measurement */}
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h3 className="text-lg font-semibold text-gray-600 mb-4">Impact Measurement</h3>
//         <div>
//           <div className="grid grid-cols-3 text-sm font-semibold text-gray-500 mb-2">
//             <span>Questions</span>
//             <span className="text-center">T0</span>
//             <span className="text-center">T1</span>
//           </div>
//           {["Ik versta goed nederlands", "Ik spreek goed nederlands", "Ik durf nederlands te spreken met nederlandse mensen", "Ik voel me goed omdat ik nederlands spreek", "Ik durf nieuwe dingen buitenshuis te doen omdat ik nederlands spreek", "Ik ben actief buitenshuis", "Ik doe mee aan activiteiten in de buurt", "Ik heb vrijwilligerswerk"].map((question, idx) => (
//             <div key={idx} className="grid grid-cols-3 text-sm mb-2">
//               <span>{question}</span>
//               <span className="text-center">5</span>
//               <span className="text-center">6</span>
//             </div>
//           ))}
//         </div>
//       </div>
      
//     </div>

//   </div>
// </div>

/// good too
{/* <div className="min-h-screen bg-gray-100 p-8">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

  <div className="col-span-1 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
    <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
    <h2 className="text-xl font-semibold text-gray-900">Haitham Badran</h2>
    <p className="text-sm text-gray-500 mb-4">Marketing Coordinator</p>
    <p className="text-center text-sm text-gray-700 mb-6">
      “I’m a marketing coordinator who recently moved to Netherlands and I'm struggling with the Dutch language.”
    </p>
    <div className="w-full space-y-2">
      <div className="flex items-center text-gray-500 text-sm">
        <span className="mr-2">📧</span>
        <span>haithambadran@gmail.com</span>
      </div>
      <div className="flex items-center text-gray-500 text-sm">
        <span className="mr-2">📞</span>
        <span>+31 71 131 9858</span>
      </div>
      <div className="flex items-center text-gray-500 text-sm">
        <span className="mr-2">📍</span>
        <span>6391 Elgin St. Celina, Delaware 10299</span>
      </div>
    </div>
  </div>

  <div className="lg:col-span-3 space-y-6">

    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">Mother Language</h3>
        <div className="text-sm text-gray-700">
          <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">Arabic</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">Other Languages</h3>
        <div className="flex space-x-2">
          <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">English</span>
          <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">German</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">Level</h3>
        <div className="text-sm text-gray-700">
          <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">Med B2</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">Interests</h3>
        <div className="flex space-x-2">
          <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">Reading</span>
          <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">Hiking</span>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <CircularProgress
          value={200}
          max={200}
          size={120}
          strokeWidth={10}
          color="#6D28D9" // Purple
        />
        <p className="text-sm text-gray-500 mt-2">Hours spent</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <CircularProgress
          value={200}
          max={200}
          size={120}
          strokeWidth={10}
          color="#10B981" // Green
        />
        <p className="text-sm text-gray-500 mt-2">Credit spent</p>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-600 mb-4">Impact Measurement</h3>
      <div>
        <div className="grid grid-cols-3 text-sm font-semibold text-gray-500 mb-2">
          <span>Questions</span>
          <span className="text-center">T0</span>
          <span className="text-center">T1</span>
        </div>
        {["Ik versta goed nederlands", "Ik spreek goed nederlands", "Ik durf nederlands te spreken met nederlandse mensen", "Ik voel me goed omdat ik nederlands spreek", "Ik durf nieuwe dingen buitenshuis te doen omdat ik nederlands spreek", "Ik ben actief buitenshuis", "Ik doe mee aan activiteiten in de buurt", "Ik heb vrijwilligerswerk"].map((question, idx) => (
          <div key={idx} className="grid grid-cols-3 text-sm mb-2">
            <span>{question}</span>
            <span className="text-center">5</span>
            <span className="text-center">6</span>
          </div>
        ))}
      </div>
    </div>
    
  </div>

</div>
</div> */}