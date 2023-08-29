import React from "react";

const LoadingBubbles = () => {
  return (
    <div className="flex items-center justify-center space-x-2 w-full ml-20">
      <div className="w-4 h-4 bg-violet-600 dark:bg-violet-400 rounded-full animate-pulse"></div>
      <div className="w-4 h-4 bg-violet-600 dark:bg-violet-400 rounded-full animate-pulse"></div>
      <div className="w-4 h-4 bg-violet-600 dark:bg-violet-400 rounded-full animate-pulse"></div>
    </div>
  );
};

export default LoadingBubbles;
