import React from "react";

const MyButton = ({
  className,
  onClick,
  children,
  bgColor = "bg-secondary2 hover:bg-secondary2/80",
}) => {
  return (
    <button
      className={`${
        className ?? ""
      } ${bgColor} rounded-[4px] text-white text-[16px] font-[500] py-4 px-12`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MyButton;
