"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import useAuth from '../../utils/useAuth';
import { auth } from '../../utils/firebase';

const Home = () => {
  const { loading, authenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authenticated) {
      router.push('/login');
    }
  }, [loading, authenticated, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (loading || !authenticated) {
    return <div>Loading...</div>;
  }

  return (

   
  //   <div className="min-h-screen flex">
  //   {/* Sidebar */}
  //   <div className="w-1/5 bg-purple-800 text-white p-5">
  //     <h1 className="text-2xl font-bold mb-10">Taaly</h1>
  //     <ul className="space-y-4">
  //       <li className="hover:bg-purple-700 p-2 rounded cursor-pointer">Monitoring</li>
  //       <li className="hover:bg-purple-700 p-2 rounded cursor-pointer">Matching</li>
  //       <li className="hover:bg-purple-700 p-2 rounded cursor-pointer">Reporting</li>
  //       <li className="hover:bg-purple-700 p-2 rounded cursor-pointer">Organizations</li>
  //       <li className="hover:bg-purple-700 p-2 rounded cursor-pointer">Projects</li>
  //       <li className="hover:bg-purple-700 p-2 rounded cursor-pointer">Learning tracks</li>
  //       <li className="hover:bg-purple-700 p-2 rounded cursor-pointer">Settings</li>
  //       <li className="hover:bg-purple-700 p-2 rounded cursor-pointer">Help</li>
  //     </ul>
  //   </div>

  //   {/* Main Content */}
  //   <div className="w-4/5 p-5">
  //     <header className="flex justify-between items-center mb-10">
  //       <h2 className="text-2xl">Hi, Jenny</h2>
  //       <div className="flex items-center">
  //         <img src="path/to/profile.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
  //       </div>
  //     </header>

  //     {/* Search Bar */}
  //     <div className="flex justify-between items-center mb-10">
  //       <input
  //         type="text"
  //         placeholder="Search"
  //         className="border border-gray-300 rounded-lg px-4 py-2 w-full"
  //       />
  //     </div>

  //     {/* Statistics */}
  //     <div className="grid grid-cols-4 gap-4 mb-10">
  //       <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
  //         <h3>Total Learners</h3>
  //         <p className="text-3xl">12</p>
  //       </div>
  //       <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
  //         <h3>Total Language Buddies</h3>
  //         <p className="text-3xl">12</p>
  //       </div>
  //       <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
  //         <h3>Total Organizations</h3>
  //         <p className="text-3xl">12</p>
  //       </div>
  //       <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
  //         <h3>Total Projects</h3>
  //         <p className="text-3xl">12</p>
  //       </div>
  //     </div>

  //     {/* Learners Table */}
  //     <div className="bg-white shadow-lg p-5 rounded-lg mb-10">
  //       <h3 className="text-xl mb-5">Learners</h3>
  //       <table className="w-full text-left">
  //         <thead>
  //           <tr>
  //             <th>Name</th>
  //             <th>Level</th>
  //             <th>Program</th>
  //             <th>Organization</th>
  //             <th>Rating</th>
  //             <th>Hours spent</th>
  //             <th></th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           <tr>
  //             <td>Haitham Badran</td>
  //             <td>Medium B2</td>
  //             <td>Adults</td>
  //             <td>Amsterdam</td>
  //             <td>7/10</td>
  //             <td>7.5</td>
  //             <td><a href="#" className="text-blue-500">View</a></td>
  //           </tr>
  //           <tr>
  //             <td>Hebah Abdullah</td>
  //             <td>Medium B2</td>
  //             <td>Adults</td>
  //             <td>Amsterdam</td>
  //             <td>6/10</td>
  //             <td>7.5</td>
  //             <td><a href="#" className="text-blue-500">View</a></td>
  //           </tr>
  //           <tr>
  //             <td>Miles Esther</td>
  //             <td>Medium B2</td>
  //             <td>Adults</td>
  //             <td>Amsterdam</td>
  //             <td>9/10</td>
  //             <td>7.5</td>
  //             <td><a href="#" className="text-blue-500">View</a></td>
  //           </tr>
  //         </tbody>
  //       </table>
  //     </div>

  //     {/* Organizations */}
  //     <div className="grid grid-cols-3 gap-4">
  //       <div className="bg-green-500 text-white p-4 rounded-lg">
  //         <h3>Amsterdam Organization</h3>
  //         <p>Location</p>
  //         <p>Overview about the organization</p>
  //       </div>
  //       <div className="bg-yellow-500 text-white p-4 rounded-lg">
  //         <h3>Amsterdam Organization</h3>
  //         <p>Location</p>
  //         <p>Overview about the organization</p>
  //       </div>
  //       <div className="bg-red-500 text-white p-4 rounded-lg">
  //         <h3>Amsterdam Organization</h3>
  //         <p>Location</p>
  //         <p>Overview about the organization</p>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  <Dashboard/>
      );
    };
    
    


export default Home;



export function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="bg-white shadow-sm p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-indigo-600 text-white p-2 rounded-lg mr-2">
            <span className="font-bold">Taaly</span>
          </div>
        </div>
        <div className="flex items-center flex-1 justify-center">
          <div className="relative w-1/2">
            <input type="text" placeholder="Search" className="w-full border rounded-full px-4 py-2 pl-10" />
            <svg className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-gray-700">Hi, Jenny</span>
          <img src="/avatar.jpg" alt="User" className="h-8 w-8 rounded-full" />
        </div>
      </div>
    </header>
  );
}

function Sidebar() {
  const menuItems = [
    { name: 'Monitoring', icon: '📊' },
    { name: 'Matching', icon: '🔗' },
    { name: 'Reporting', icon: '📝' },
    { name: 'Organizations', icon: '🏢' },
    { name: 'Projects', icon: '📁' },
    { name: 'Learning tracks', icon: '🎓' },
    { name: 'Settings', icon: '⚙️' },
    { name: 'Help', icon: '❓' },
  ];
  
  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <nav className="mt-5">
        {menuItems.map((item) => (
          <a key={item.name} href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-900 rounded-lg mb-1">
            <span className="mr-2">{item.icon}</span>
            <span>{item.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}

function MainContent() {
  return (
    <main className="flex-1 p-8">
      <StatCards />
      <LearnersList />
      <OrganizationCards />
    </main>
  );
}

function StatCards() {
  const stats = [
    { title: 'Total Learners', value: 12, icon: '👥' },
    { title: 'Total Language Buddies', value: 12, icon: '🗣️' },
    { title: 'Total Organizations', value: 12, icon: '🏢' },
    { title: 'Total Projects', value: 12, icon: '📊' },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-indigo-600 text-white rounded-lg p-4 flex items-center">
          <div className="text-3xl mr-3">{stat.icon}</div>
          <div>
            <h3 className="text-sm font-semibold">{stat.title}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function LearnersList() {
  const learners = [
    { name: 'Haitham Badran', level: 'Medium B2', program: 'Adults', organization: 'Amsterdam', rating: '7/10', hours: '7.5' },
    { name: 'Hebah Abdullah', level: 'Medium B2', program: 'Adults', organization: 'Amsterdam', rating: '6/10', hours: '7.5' },
    { name: 'Miles Esther', level: 'Medium B2', program: 'Adults', organization: 'Amsterdam', rating: '9/10', hours: '7.5' },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <button className="text-indigo-600 font-semibold">Learners</button>
          <button className="text-gray-400">Language Buddies</button>
        </div>
        <div className="relative">
          <input type="text" placeholder="Search by Name, Level, etc" className="border rounded-lg px-4 py-2 pl-10 w-64" />
          <svg className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="py-2">Name</th>
            <th>Level</th>
            <th>Program</th>
            <th>Organization</th>
            <th>Rating</th>
            <th>Hours spent</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {learners.map((learner) => (
            <tr key={learner.name} className="border-t">
              <td className="py-3 flex items-center">
                <img src="/avatar-placeholder.jpg" alt={learner.name} className="w-8 h-8 rounded-full mr-2" />
                {learner.name}
              </td>
              <td>{learner.level}</td>
              <td>{learner.program}</td>
              <td>{learner.organization}</td>
              <td>{learner.rating}</td>
              <td>
                <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-sm font-semibold">{learner.hours}</span>
                </div>
              </td>
              <td>
                <button className="text-indigo-600">View →</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function OrganizationCards() {
  const organizations = [
    { name: 'Amsterdam Organization', color: 'bg-green-200' },
    { name: 'Amsterdam Organization', color: 'bg-yellow-200' },
    { name: 'Amsterdam Organization', color: 'bg-red-200' },
  ];

  return (
    <div className="relative">
      <div className="flex space-x-4 overflow-x-auto">
        {organizations.map((org, index) => (
          <div key={index} className={`${org.color} rounded-lg p-6 w-64 flex-shrink-0`}>
            <h3 className="text-lg font-semibold mb-2">{org.name}</h3>
            <p className="text-sm text-gray-600 mb-4">*Location</p>
            <p className="text-sm mb-4">*Overview about the organization</p>
            <button className="bg-gray-800 text-white px-4 py-2 rounded">Details</button>
          </div>
        ))}
      </div>
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

function RightSidebar() {
  return (
    <aside className="w-64 bg-white p-6 flex flex-col space-y-6">
      <OverallActivity />
      <Attendance />
      <ManageOrganizationsButton />
    </aside>
  );
}

function OverallActivity() {
  return (
    <div className="text-center">
      <h3 className="text-lg font-semibold text-indigo-900 mb-1">Overall Activity</h3>
      <p className="text-sm text-gray-600 mb-4">Hours spent by organizations starting from January</p>
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
            strokeDashoffset={(2 * Math.PI * 56) * (1 - 200 / 360)}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="56"
            cx="64"
            cy="64"
          />
        </svg>
        <span className="absolute text-2xl font-bold text-indigo-900">200<br/>hours</span>
      </div>
    </div>
  );
}

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
            strokeDashoffset={(2 * Math.PI * 56) * (1 - 0.95)}
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
            strokeDashoffset={(2 * Math.PI * 56) * (1 - 0.91)}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="46"
            cx="64"
            cy="64"
          />
        </svg>
        <span className="absolute">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
      <div className="flex justify-between mt-4 text-sm">
        <div>
          <p className="font-semibold text-indigo-900">Learners</p>
          <p className="text-indigo-600">91%</p>
        </div>
        <div>
          <p className="font-semibold text-indigo-900">Language<br/>Buddies</p>
          <p className="text-green-500">95%</p>
        </div>
      </div>
    </div>
  );
}


function ManageOrganizationsButton() {
  return (
    <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
      Manage Organizations
    </button>
  );
}
