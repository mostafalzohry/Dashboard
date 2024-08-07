"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import useAuth from "../../utils/useAuth";
import { auth } from "../../utils/firebase";

const Home = () => {
  const { loading, authenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authenticated) {
      router.push("/login");
    }
  }, [loading, authenticated, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (loading || !authenticated) {
    return <div>Loading...</div>;
  }

  return (
      <Dashboard />
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
          <svg
            width="40"
            height="35"
            viewBox="0 0 85 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <svg
              width="85"
              height="75"
              viewBox="0 0 85 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_358)">
                <path d="M84.3177 0H0V74.6741H84.3177V0Z" fill="#1E00B9" />
                <path
                  d="M67.5615 40.2834C68.5132 41.2351 68.3688 42.8203 67.258 43.5775C65.9645 44.4585 64.5502 45.089 63.0859 45.4721C60.8348 46.0614 58.4629 46.0614 56.2148 45.4721C54.7504 45.089 53.3361 44.4585 52.0427 43.5775C50.9319 42.8203 50.7875 41.2351 51.7392 40.2834C51.748 40.2746 51.7598 40.2628 51.7687 40.254C52.4905 39.5321 53.6278 39.4054 54.4705 39.98C55.3544 40.581 56.3179 41.0141 57.3168 41.2734C58.846 41.6741 60.4576 41.6741 61.9868 41.2734C62.9857 41.0112 63.9492 40.581 64.8331 39.98C65.6758 39.4054 66.8131 39.5321 67.5349 40.251L67.5644 40.2805L67.5615 40.2834Z"
                  fill="#1EFFBC"
                />
                <path
                  d="M67.205 29.7438C65.8944 28.4332 63.7696 28.4332 62.459 29.7438C61.1484 31.0544 61.1484 33.1793 62.459 34.4899C63.7696 35.8005 65.8944 35.8005 67.205 34.4899C68.5156 33.1793 68.5156 31.0544 67.205 29.7438Z"
                  fill="#1EFFBC"
                />
                <path
                  d="M56.8315 29.743C55.5209 28.4324 53.396 28.4324 52.0854 29.743C50.7748 31.0536 50.7748 33.1784 52.0854 34.489C53.396 35.7996 55.5209 35.7996 56.8315 34.489C58.1421 33.1784 58.1421 31.0536 56.8315 29.743Z"
                  fill="#1EFFBC"
                />
                <path
                  d="M46.9837 35.2981H44.7562V33.0706C44.7562 31.839 43.7573 30.8431 42.5287 30.8431C41.2971 30.8431 40.3012 31.842 40.3012 33.0706V35.2981H38.0737C36.8421 35.2981 35.8462 36.2969 35.8462 37.5256C35.8462 38.7572 36.845 39.7531 38.0737 39.7531H40.3012V41.9806C40.3012 43.2122 41.3 44.2081 42.5287 44.2081C43.7603 44.2081 44.7562 43.2092 44.7562 41.9806V39.7531H46.9837C48.2153 39.7531 49.2112 38.7543 49.2112 37.5256C49.2112 36.294 48.2123 35.2981 46.9837 35.2981Z"
                  fill="white"
                />
                <path
                  d="M33.3237 40.2834C34.2754 41.2351 34.131 42.8203 33.0202 43.5775C31.7267 44.4585 30.3124 45.089 28.8481 45.4721C26.597 46.0614 24.2251 46.0614 21.977 45.4721C20.5126 45.089 19.0984 44.4585 17.8049 43.5775C16.6941 42.8203 16.5497 41.2351 17.5014 40.2834C17.5102 40.2746 17.522 40.2628 17.5309 40.254C18.2527 39.5321 19.3901 39.4054 20.2327 39.98C21.0754 40.5545 22.0801 41.0141 23.079 41.2734C24.6082 41.6741 26.2199 41.6741 27.749 41.2734C28.7479 41.0112 29.7114 40.581 30.5953 39.98C31.438 39.4054 32.5753 39.5321 33.2972 40.251L33.3266 40.2805L33.3237 40.2834Z"
                  fill="#FFE155"
                />
                <path
                  d="M32.9707 29.7434C31.6601 28.4328 29.5352 28.4328 28.2246 29.7434C26.914 31.054 26.914 33.1789 28.2246 34.4895C29.5352 35.8 31.6601 35.8 32.9707 34.4895C34.2812 33.1789 34.2812 31.054 32.9707 29.7434Z"
                  fill="#FFE155"
                />
                <path
                  d="M22.5952 29.7447C21.2846 28.4341 19.1597 28.4341 17.8491 29.7447C16.5385 31.0552 16.5385 33.1801 17.8491 34.4907C19.1597 35.8013 21.2846 35.8013 22.5952 34.4907C23.9058 33.1801 23.9058 31.0552 22.5952 29.7447Z"
                  fill="#FFE155"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_358">
                  <rect
                    width="84.3177"
                    height="74.6741"
                    rx="11.5244"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          </svg>
          <span className="text-indigo-600 font-bold text-xl">Taaly</span>
        </div>
        <div className="flex items-center flex-1 justify-center">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              className="w-full border rounded-full px-4 py-2 pl-10"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-gray-700">Hi, Jenny</span>
          <img
            src="/jenny-avatar.jpg"
            alt="User"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </div>
    </header>
  );
}

function Sidebar() {
  const menuItems = [
    { name: "Monitoring", icon: "📊" },
    { name: "Matching", icon: "🔗" },
    { name: "Reporting", icon: "📝" },
    { name: "Organizations", icon: "🏢" },
    { name: "Projects", icon: "📁" },
    { name: "Learning tracks", icon: "🎓" },
    { name: "Settings", icon: "⚙️" },
    { name: "Help", icon: "❓" },
  ];

  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <nav className="mt-5">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-900 rounded-lg mb-1"
          >
            <span className="mr-2">{item.icon}</span>
            <span>{item.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}

function StatCards() {
  const stats = [
    { title: "Total Learners", value: 12, icon: "👥" },
    { title: "Total Language Buddies", value: 12, icon: "🗣️" },
    { title: "Total Organizations", value: 12, icon: "🏢" },
    { title: "Total Projects", value: 12, icon: "📊" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-indigo-600 text-white rounded-lg p-4 flex items-center"
        >
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

function MainContent() {
  return (
    <main className="flex-1 p-8">
      <StatCards />
      <LearnersList />
      <OrganizationCards />
    </main>
  );
}

function LearnersList() {
  const learners = [
    {
      name: "Haitham Badran",
      level: "Medium B2",
      program: "Adults",
      organization: "Amsterdam",
      rating: "7/10",
      hours: "7.5",
    },
    {
      name: "Hebah Abdullah",
      level: "Medium B2",
      program: "Adults",
      organization: "Amsterdam",
      rating: "6/10",
      hours: "7.5",
    },
    {
      name: "Miles Esther",
      level: "Medium B2",
      program: "Adults",
      organization: "Amsterdam",
      rating: "9/10",
      hours: "7.5",
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <button className="text-indigo-600 font-semibold">Learners</button>
          <button className="text-gray-400">Language Buddies</button>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by Name, Level, etc"
            className="border rounded-lg px-4 py-2 pl-10 w-64"
          />
          <svg
            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
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
                <img
                  src="/avatar-placeholder.jpg"
                  alt={learner.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
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
    { name: "Amsterdam Organization", color: "bg-green-200" },
    { name: "Amsterdam Organization", color: "bg-yellow-200" },
    { name: "Amsterdam Organization", color: "bg-red-200" },
  ];

  return (
    <div className="relative">
      <div className="flex space-x-4 overflow-x-auto">
        {organizations.map((org, index) => (
          <div
            key={index}
            className={`${org.color} rounded-lg p-6 w-64 flex-shrink-0`}
          >
            <h3 className="text-lg font-semibold mb-2">{org.name}</h3>
            <p className="text-sm text-gray-600 mb-4">*Location</p>
            <p className="text-sm mb-4">*Overview about the organization</p>
            <button className="bg-gray-800 text-white px-4 py-2 rounded">
              Details
            </button>
          </div>
        ))}
      </div>
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
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

function ManageOrganizationsButton() {
  return (
    <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>
      Manage Organizations
    </button>
  );
}
