import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="w-full bg-yellow-500 animate-pulse">
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
    </div>
  );
};

export default SkeletonLoader;
