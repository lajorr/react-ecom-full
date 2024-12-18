import React from "react";

const ContactService = ({ icon, title, children }) => {
  return (
    <div>
      <div className="flex gap-4 items-center mb-[24px]">
        <div className="size-[40px] bg-secondary2 rounded-full flex justify-center items-center">
          <img src={icon} alt="phone icon" />
        </div>
        <p className="font-[600] text-[16px] ">{title}</p>
      </div>
      <div className="flex flex-col gap-4 text-[14px] ">{children}</div>
    </div>
  );
};

export default ContactService;
