// pages/Profile.js
"use client"
import React from 'react';
import Header from '../../components/Header';
import ProfileSection from '../../components/ProfileSection';
import Card from '../../components/Card';
import StatCardsProfile from '../../components/StatCardsProfile';
import ImpactTable from '../../components/ImpactTable';

const Profile = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <div className="min-h-screen bg-white p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Profile Section */}
            <ProfileSection
              name="Haitham Badran"
              role="Marketing Coordinator"
              bio="I’m a marketing coordinator who recently moved to Netherlands and I'm struggling with the Dutch language."
              email="haithambadran@gmail.com"
              phone="+31 71 131 9858"
              address="6391 Elgin St. Celina, Delaware 10299"
            />

            {/* Right Column */}
            <div className="lg:col-span-3 space-y-6">
              {/* Top Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card title="Mother Language" bgColor="custom-light-purple">
                  <div className="text-sm text-gray-700">
                    <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">
                      Arabic
                    </span>
                  </div>
                </Card>

                <Card title="Other Languages" bgColor="custom-light-purple">
                  <div className="flex space-x-2">
                    <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">
                      English
                    </span>
                    <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">
                      German
                    </span>
                  </div>
                </Card>

                <Card title="Level" bgColor="custom-light-purple">
                  <div className="text-sm text-gray-700">
                    <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">
                      Med B2
                    </span>
                  </div>
                </Card>

                <Card title="Interests" bgColor="custom-light-purple">
                  <div className="flex space-x-2">
                    <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">
                      Reading
                    </span>
                    <span className="inline-block bg-purple-100 text-purple-600 py-1 px-3 rounded-full">
                      Hiking
                    </span>
                  </div>
                </Card>
              </div>

              {/* Main Content */}
              <div className="flex flex-col md:flex-row rounded-lg shadow-lg">
                {/* Left Section */}
                <div className="flex flex-col space-y-8 md:w-1/3">
                  <StatCardsProfile
                    title="Hours spent"
                    description="Hours spent by Learner over this program"
                    value="200"
                    color="purple"
                  />
                  <StatCardsProfile
                    title="Remaining"
                    description="Credit spent by Learner over this program"
                    value="200"
                    color="lime"
                  />
                </div>

                {/* Right Section */}
                <ImpactTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
