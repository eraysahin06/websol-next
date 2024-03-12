import React from "react";

const Three = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-12 px-4 bg-gradient-to-r from-purple-600 to-blue-900 text-white">
      <div className="md:w-1/2 mt-8 md:mt-0 md:mr-8 text-center md:text-left flex flex-col items-center md:items-start">
        <h2 className="text-2xl text-blue-200 font-bold">Innovative Solutions for Your Business</h2>
        <p className="mt-4">
          Websol is dedicated to providing innovative solutions that cater to the unique needs of your business. Our team is committed to delivering excellence and pushing the boundaries of technology to help you achieve your goals.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-64 h-64 text-blue-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
    </div>
  );
};

export default Three;
