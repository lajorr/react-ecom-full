import React from "react";

const MyButton = ({
  className,
  onClick,
  children,
  textColor = "white",
  fontWeight = "500",
  bgColor = "bg-secondary2 hover:bg-secondary2/80",
}) => {
  return (
    <button
      style={{ color: textColor, fontWeight: fontWeight }}
      className={`rounded-[4px] text-[16px] py-4 px-12 ${
        className ?? ""
      } ${bgColor} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MyButton;
