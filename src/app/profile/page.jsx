"use client";

import Header from "../../components/Header";
import ProfileAvatar from "../../assets/ProfileAvatar.png";
import { useRouter } from "next/navigation";
import useAuth from "../../utils/useAuth";
import { useEffect } from "react";

const Profile = () => {
  const { loading, authenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authenticated) {
      router.push("/login");
    }
  }, [loading, authenticated, router]);

  if (loading || !authenticated) {
    return (
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <div className="min-h-screen bg-white p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Profile Section */}
            <div className="col-span-1 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img
                src={ProfileAvatar.src}
                alt="Profile"
                className="w-24 h-24 rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-900">
                Haitham Badran
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Marketing Coordinator
              </p>
              <p className="text-center text-sm text-gray-700 mb-6">
                “I’m a marketing coordinator who recently moved to Netherlands
                and I'm struggling with the Dutch language.”
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
                <div className="bg-custom-light-purple p-4 rounded-lg shadow-lg">
                  <h3 className="text-sm font-semibold text-purple-600 mb-2">
                    Mother Language
                  </h3>
                  <div className="text-sm text-gray-700">
                    <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">
                      Arabic
                    </span>
                  </div>
                </div>

                {/* Other Languages */}
                <div className="bg-custom-light-purple p-4 rounded-lg shadow-lg">
                  <h3 className="text-sm font-semibold text-purple-600 mb-2">
                    Other Languages
                  </h3>
                  <div className="flex space-x-2">
                    <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">
                      English
                    </span>
                    <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">
                      German
                    </span>
                  </div>
                </div>

                {/* Level */}
                <div className="bg-custom-light-purple p-4 rounded-lg shadow-lg">
                  <h3 className="text-sm font-semibold text-purple-600 mb-2">
                    Level
                  </h3>
                  <div className="text-sm text-gray-700">
                    <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">
                      Med B2
                    </span>
                  </div>
                </div>

                {/* Interests */}
                <div className="bg-custom-light-purple p-4 rounded-lg shadow-lg">
                  <h3 className="text-sm font-semibold text-purple-600 mb-2">
                    Interests
                  </h3>
                  <div className="flex space-x-2">
                    <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">
                      Reading
                    </span>
                    <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">
                      Hiking
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex flex-col md:flex-row  rounded-lg shadow-lg">
                {/* Left Section */}
                <div className="flex flex-col space-y-8 md:w-1/3">
                  {/* Hours Spent */}
                  <div className="flex flex-col items-center bg-custom-light-purple p-6 rounded-lg">
                    <p className="mt-4 text-gray-700 text-lg">Hours spent</p>
                    <p className="text-gray-600 text-sm mb-2">
                      Hours spent by Learner over this program
                    </p>
                    <div className="relative">
                      <svg
                        className="w-32 h-32"
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="text-purple-200"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeDasharray="100, 100"
                        />
                        <path
                          className="text-purple-600"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeDasharray="90, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-purple-600">
                          200
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Credit Spent */}
                  <div className="flex flex-col items-center   bg-custom-light-purple  p-6 rounded-lg">
                    <p className="mt-4 text-gray-700 text-lg">Remaining</p>
                    <p className="text-gray-600 text-sm mb-2">
                      Credit spent by Learner over this program
                    </p>
                    <div className="relative">
                      <svg
                        className="w-32 h-32"
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="text-lime-200"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeDasharray="100, 100"
                        />
                        <path
                          className="text-lime-500"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeDasharray="90, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-lime-500">
                          200
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section */}
                <div className="md:w-2/3 bg-custom-light-purple p-6 rounded-lg shadow-lg mt-8 md:mt-0 md:ml-8">
                  <h2 className="text-indigo-800 text-xl font-semibold mb-4">
                    Impact Measurement
                  </h2>
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-indigo-800">
                        <th className="pb-4">Questions</th>
                        <th className="pb-4 text-center">T0</th>
                        <th className="pb-4 text-center">T1</th>
                        <th className="pb-4 text-center">T2</th>
                        <th className="pb-4 text-center">T3</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2">
                          Lorem ipsum dolor sit amet consectetur?
                        </td>
                        <td className="py-2 text-center">7</td>
                        <td className="py-2 text-center">4</td>
                        <td className="py-2 text-center">8</td>
                        <td className="py-2 text-center">9</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          Lorem ipsum dolor sit amet consectetur?
                        </td>
                        <td className="py-2 text-center">4</td>
                        <td className="py-2 text-center">5</td>
                        <td className="py-2 text-center">7</td>
                        <td className="py-2 text-center">8</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          Lorem ipsum dolor sit amet consectetur?
                        </td>
                        <td className="py-2 text-center">5</td>
                        <td className="py-2 text-center">3</td>
                        <td className="py-2 text-center">6</td>
                        <td className="py-2 text-center">8</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          Lorem ipsum dolor sit amet consectetur?
                        </td>
                        <td className="py-2 text-center">6</td>
                        <td className="py-2 text-center">4</td>
                        <td className="py-2 text-center">7</td>
                        <td className="py-2 text-center">8</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
