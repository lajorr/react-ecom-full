import React from "react";

const BgContainer = ({
  bg,
  rowsSpan = 1,
  colsSpan = 1,
  bgPosition = "bg-bottom",
  children,
}) => {
  return (
    <div
      className={`p-8 bg-black bg-no-repeat bg-contain ${bgPosition}  ${colsSpan} ${bg} `}
      style={{ gridRow: `span ${rowsSpan}`, gridColumn: `span ${colsSpan}` }}
    >
      {children}
    </div>
  );
};

export default BgContainer;
