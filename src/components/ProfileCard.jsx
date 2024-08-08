// function Profile() {
//     return (
//       <div className="bg-white shadow-md rounded-lg p-6 flex">
//         <div className="mr-6">
//           <img src="/haitham-badran.jpg" alt="Haitham Badran" className="rounded-full w-24 h-24" />
//         </div>
//         <div className="flex-1">
//           <h2 className="text-xl font-bold mb-2">Haitham Badran</h2>
//           <p className="text-gray-500 mb-4">
//             "I'm a marketing coordinator who recently moved to netherlands and I'm struggling with the dutch language"
//           </p>
//           <div className="flex items-center mb-4">
//             <span className="mr-2">
//               <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//             </span>
//             <span>haithamBadran@gmail.com</span>
//           </div>
//           <div className="flex items-center mb-4">
//             <span className="mr-2">
//               <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//               </svg>
//             </span>
//             <span>+31 71 131 9858</span>
//           </div>
//           <div className="flex items-center">
//             <span className="mr-2">
//               <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//             </span>
//             <span>6391 Elgin St, Celina, Delaware 10299</span>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   function LanguageSection() {
//     return (
//       <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <h3 className="text-lg font-bold mb-4">Mother Language</h3>
//         <div className="flex items-center mb-2">
//           <div className="w-6 h-6 mr-2">
//             <img src="/arabic.svg" alt="Arabic" />
//           </div>
//           <span>Arabic</span>
//         </div>
//       </div>
//     );
//   }
  
//   function OtherLanguagesSection() {
//     return (
//       <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <h3 className="text-lg font-bold mb-4">Other Languages</h3>
//         <div className="flex items-center mb-2 mr-4">
//           <div className="w-6 h-6 mr-2">
//             <img src="/english.svg" alt="English" />
//           </div>
//           <span>English</span>
//         </div>
//         <div className="flex items-center mb-2 mr-4">
//           <div className="w-6 h-6 mr-2">
//             <img src="/german.svg" alt="German" />
//           </div>
//           <span>German</span>
//         </div>
//       </div>
//     );
//   }
  
//   function LevelSection() {
//     return (
//       <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <h3 className="text-lg font-bold mb-4">Level</h3>
//         <div className="flex items-center mb-2">
//           <div className="w-6 h-6 mr-2">
//             <img src="/med-b2.svg" alt="Medium B2" />
//           </div>
//           <span>Med B2</span>
//         </div>
//       </div>
//     );
//   }
  
//   function InterestsSection() {
//     return (
//       <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <h3 className="text-lg font-bold mb-4">Interests</h3>
//         <div className="flex items-center mb-2 mr-4">
//           <div className="w-6 h-6 mr-2">
//             <img src="/reading.svg" alt="Reading" />
//           </div>
//           <span>Reading</span>
//         </div>
//         <div className="flex items-center mb-2 mr-4">
//           <div className="w-6 h-6 mr-2">
//             <img src="/hiking.svg" alt="Hiking" />
//           </div>
//           <span>Hiking</span>
//         </div>
//       </div>
//     );
//   }
  
//   function HoursSection() {
//     return (
//       <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <h3 className="text-lg font-bold mb-4">Hours spent</h3>
//         <div className="flex justify-center">
//           <div className="text-center">
//             <p className="text-4xl font-bold text-indigo-600">200</p>
//             <p className="text-gray-500">hours</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   function ImpactSection() {
//     const questions = [
//       { question: '1. Ik versta goed nederlands', to: 5, t1: 6 },
//       { question: '2. Ik spreek goed nederlands', to: 5, t1: 6 },
//       { question: '3. Ik durf nederlands te spreken met nederlandse mensen', to: 5, t1: 6 },
//       { question: '4. Ik voel me goed omdat ik nederlands spreek', to: 5, t1: 6 },
//       { question: '5. Ik durf nieuwe dingen buitenshuis te doen omdat ik nederlands spreek', to: 5, t1: 6 },
//       { question: '6. Ik ben actief buitenshuis (bibliotheek, sport, bioscoop, winkelen, reizen met openbaar vervoer)', to: 5, t1: 6 },
//       { question: '7. Ik doe mee aan activiteiten in de buurt (straatfeest, koffie-ochtend, buurthuis)', to: 5, t1: 6 },
//       { question: '8. Ik heb vrijwilligerswerk', to: 5, t1: 6 },
//     ];
  
//     return (
//       <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <h3 className="text-lg font-bold mb-4">Impact Measurement</h3>
//         <table className="w-full">
//           <thead>
//             <tr className="text-left text-gray-500">
//               <th className="py-2">Questions</th>
//               <th>T0</th>
//               <th>T1</th>
//             </tr>
//           </thead>
//           <tbody>
//             {questions.map((q, index) => (
//               <tr key={index} className="border-t">
//                 <td className="py-3">{q.question}</td>
//                 <td>{q.to}</td>
//                 <td>{q.t1}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
  
//   function ProfilePage() {
//     return (
//       <div className="p-8">
//         <Profile />
//         <LanguageSection />
//         <OtherLanguagesSection />
//         <LevelSection />
//         <InterestsSection />
//         <HoursSection />
//         <ImpactSection />
//       </div>
//     );
//   }
  
//   export default ProfilePage;


import React from 'react';

const ProfileCard = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <div className="flex flex-col items-center text-center">
        <img className="mb-4 w-24 h-24 rounded-full" src="https://via.placeholder.com/150" alt="Profile" />
        <h3 className="text-xl font-semibold text-gray-900">Haitham Badran</h3>
        <p className="text-gray-600">Marketing Coordinator</p>
        <p className="mt-4 text-gray-500">“I’m a marketing coordinator who recently moved to Netherlands and I'm struggling with the Dutch language.”</p>
        <div className="mt-6 space-y-2">
          <div className="flex items-center justify-center text-gray-500">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884l8 4.917 8-4.917-8-4.917-8 4.917zM18 8.118v6.764l-8 4.917-8-4.917V8.118l8 4.917 8-4.917z"/>
            </svg>
            <span>haithambadran@gmail.com</span>
          </div>
          <div className="flex items-center justify-center text-gray-500">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2h-2V5H4v10h6v2H4a2 2 0 01-2-2V5z"/>
              <path d="M18 13.586l-4.95-4.95 1.414-1.414L18 10.758l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95z"/>
            </svg>
            <span>+31 71 131 9858</span>
          </div>
          <div className="flex items-center justify-center text-gray-500">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2C5.589 2 2 5.589 2 10s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14a6 6 0 110-12 6 6 0 010 12zM12 8.5a1 1 0 11-2 0 1 1 0 012 0zm1 2.5h-4v1h4v-1z"/>
            </svg>
            <span>6391 Elgin St. Celina, Delaware 10299</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

