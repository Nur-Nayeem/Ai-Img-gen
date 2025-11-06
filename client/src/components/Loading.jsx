import React from "react";

const Loading = () => {
  return (
    <div className="text-center text-3xl font-bold text-secondary h-[80vh] flex justify-center items-center bg-[#c8d6e5]">
      <span className="loading loading-spinner loading-xl text-primary"></span>
    </div>
  );
};

export default Loading;
