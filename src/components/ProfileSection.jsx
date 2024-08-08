import React from 'react';
import ProfileAvatar from '../assets/ProfileAvatar.png';

const ProfileSection = ({ name, role, bio, email, phone, address }) => {
  return (
    <div className="col-span-1 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
      <img
        src={ProfileAvatar.src}
        alt="Profile"
        className="w-24 h-24 rounded-full mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
      <p className="text-sm text-gray-500 mb-4">{role}</p>
      <p className="text-center text-sm text-gray-700 mb-6">{bio}</p>
      <div className="w-full space-y-2">
        <div className="flex items-center text-gray-500 text-sm">
          <span className="mr-2">📧</span>
          <span>{email}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <span className="mr-2">📞</span>
          <span>{phone}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <span className="mr-2">📍</span>
          <span>{address}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
