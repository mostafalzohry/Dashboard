import React from 'react';

const AuthAside = ({ imageSrc, text }) => {
  return (
    <div className="hidden md:flex w-1/2 min-h-screen flex-col justify-center items-center p-8 relative">
    <img
      src={imageSrc}
      alt="Aside"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative z-10 text-white text-center text-xl md:text-3xl font-bold max-w-md mt-8">
      {text}
    </div>
  </div>
  );
};

export default AuthAside;
