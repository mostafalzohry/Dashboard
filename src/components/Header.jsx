"use client"
import { signOut } from 'firebase/auth';
import Jenny from "../assets/Jenny.png";
import { auth } from '@/utils/firebase';

function Header() {

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = "/login"; 
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <header className="custom-light-purple shadow-sm p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <svg
            width="60"
            height="52"
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
              <g clipPath="url(#clip0_1_358)">
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
            {/* SVG contents */}
          </svg>
          <span className="text-indigo-600 font-bold text-2xl">Taaly</span>
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
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 text-lg">Hi, Jenny</span>
          <img src={Jenny.src} alt="User" className="h-12 w-12 rounded-full" />
          <button
            onClick={handleLogout}
            className="flex items-center text-gray-700 hover:text-red-600 focus:outline-none"
          >
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
                d="M17 16l4-4m0 0l-4-4m4 4H7m10 4H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z"
              />
            </svg>
            <span className="ml-2">Log Out</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
