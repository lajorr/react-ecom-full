import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import AppleLogo from "../assets/images/apple_logo.svg";
import IphoneLarge from "../assets/images/iphone_large.png";

import { catalogList } from "../utils/Constants.js";

const Header = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] mx-[135px] ">
      <div className=" pr-4 flex flex-col gap-4 mt-[40px]">
        {catalogList.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center w-[217px]"
          >
            <p className="text-[16px]">{item.name}</p>
            {item.hasMore && <ArrowForwardIosIcon fontSize="24px" />}
          </div>
        ))}
      </div>
      <div className="border-l-[0.5px] border-black/30 pl-[45px] pt-[40px] flex justify-center relative ">
        <div className="bg-black size-full pl-16 flex">
          <div className="text-white  mt-[58px] flex flex-col gap-2">
            <div className="flex items-center gap-6">
              <img className="w-[40px]" src={AppleLogo} alt="Apple Logo" />
              <h2 className="text-[16p">iPhone 14 Series</h2>
            </div>
            <h1 className="text-[48px] w-[294px] font-[600] ">Up to 10% off Voucher</h1>
            <div className="flex gap-2 cursor-pointer ">
              <p className="font-[500] text-[16px] underline underline-offset-4 ">
                Shop Now
              </p>
              <ArrowForwardIcon />
            </div>
          </div>
          <img className="mt-4" src={IphoneLarge} alt="Iphone" />
        </div>
        <div className="absolute bottom-[10px] flex gap-[12px] ">
          {Array.from({ length: 5 }).map((_, index) => (
            <button
              key={index}
              className="size-[12px] rounded-full bg-white/50"
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
