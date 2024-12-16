import React from "react";

const MyButton = ({
  className,
  onClick,
  bgColor = "bg-secondary2",
  hoverColor = "bg-secondary2/80",
  children,
}) => {
  return (
    <button
      className={`${
        className ?? ""
      } ${bgColor} rounded-[4px] text-white text-[16px] font-[500] py-4 px-12 hover:${hoverColor} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MyButton;
