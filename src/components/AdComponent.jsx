import React from "react";
import Boombox from "../assets/images/boombox.png";
import MyButton from "./MyButton";

const AdComponent = () => {
  const OfferTimeUnit = ({ timeUnit, value }) => {
    return (
      <div className="bg-white size-[62px] rounded-full flex flex-col justify-center items-center">
        <p className="font-[600] text-[16px] leading-[20px] ">{value} </p>
        <p className="text-[11px] leading-[18px]">{timeUnit}</p>
      </div>
    );
  };

  return (
    <div className="mt-[140px] mb-[70px] py-[70px] px-[56px] bg-black h-[500px] relative">
      <div>
        <h3 className="text-[16px] font-[600] text-button1 leading-[20px] ">
          Categories
        </h3>
        <h1 className="text-[48px] font-[600] text-white w-[443px] my-8 leading-[60px] ">
          Enhance Your Music Experience
        </h1>
        <div className="flex gap-6 mb-[40px]">
          <OfferTimeUnit timeUnit={"Hours"} value={23} />
          <OfferTimeUnit timeUnit={"Days"} value={5} />
          <OfferTimeUnit timeUnit={"Minutes"} value={59} />
          <OfferTimeUnit timeUnit={"Seconds"} value={35} />
        </div>

        <MyButton bgColor="bg-button1 hover:bg-secondary2">Buy Now!</MyButton>
      </div>
      <div className="z-0 h-[500px] w-[504px] bg-[#D9D9D9]/30 absolute rounded-full top-[-75px] left-[552px] blur-[100px]"></div>
      <img
        className="z-10 w-[568px] h-[330px] absolute left-[526px] top-[75px] "
        src={Boombox}
        alt="boom box"
      />
    </div>
  );
};

export default AdComponent;
