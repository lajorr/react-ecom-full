import React from "react";

const MyInputField = ({ label, isRequired, name }) => {
  return (
    <div className="text-[16px]">
      <p className=" opacity-40 mb-2">
        {label}
        {isRequired && <span className="text-red-600">*</span>}
      </p>
      <input
        type="text"
        name={name}
        className="w-[470px] bg-secondary rounded-[4px] px-5 py-4 focus:outline-none "
      />
    </div>
  );
};

export default MyInputField;
