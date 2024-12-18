import React from "react";

const RoundedBorderContainer = ({ children }) => {
  return (
    <div className="bg-[#2F2E30]/30 size-[80px] rounded-full flex justify-center items-center mb-6 mx-auto">
      <div className="bg-black size-[58px] rounded-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default RoundedBorderContainer;
