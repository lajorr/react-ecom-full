import React from "react";
import { serviceList } from "../utils/Constants";
const ServicesComponent = () => {
  return (
    <section className="my-[140px] flex justify-center gap-[88px]">
      {serviceList.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
          <div className="bg-[#2F2E30]/30 size-[80px] rounded-full flex justify-center items-center mb-6">
            <div className="bg-black size-[58px] rounded-full flex justify-center items-center">
              <img className="size-[40px]" src={item.icon} alt={item.title} />
            </div>
          </div>
          <h1 className="font-[600] text-[20px] leading-7 text-black mb-2">
            {item.title}
          </h1>
          <p className="text-[14px] leading-5  ">{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default ServicesComponent;
