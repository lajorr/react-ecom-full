import React from "react";
import { serviceList } from "../utils/Constants";
import RoundedBorderContainer from "./RoundedBorderContainer";
const Services = () => {
  return (
    <section className="my-[140px] flex justify-center gap-[88px]">
      {serviceList.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
          <RoundedBorderContainer>
            <img className="size-[40px]" src={item.icon} alt={item.title} />
          </RoundedBorderContainer>
          <h1 className="font-[600] text-[20px] leading-7 text-black mb-2">
            {item.title}
          </h1>
          <p className="text-[14px] leading-5  ">{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Services;
