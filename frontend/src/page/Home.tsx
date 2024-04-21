import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to the Home Page!</h1>
      <p className="text-lg text-gray-700 mt-2">
        This is a basic homepage layout using React, TypeScript, and Tailwind CSS.
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
        Click Me!
      </button>
    </div>
  );
};

export default Home;
