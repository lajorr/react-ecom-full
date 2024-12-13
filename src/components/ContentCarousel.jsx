import React from "react";
import LeftArrowFilled from "../assets/icons/left_arrow_filled.svg";
import RightArrowFilled from "../assets/icons/right_arrow_filled.svg";
import ProductCard from "./ProductCard";

import { flashSalesList } from "../utils/Constants.js";

const ContentCarousel = ({ sectionTitle, title }) => {
  return (
    <section>
      <div className="flex gap-4 items-center mb-6 ">
        <div className="h-[40px] w-[20px] bg-secondary-200 rounded-[4px] "></div>
        <h3 className="font-[600] text-[16px] text-secondary-200 ">
          {sectionTitle}
        </h3>
      </div>
      <div className="grid grid-cols-3 mb-[40px]">
        <h1 className="col-span-2 font-[600] text-[36px] ">{title}</h1>
        <div className="flex justify-end gap-2">
          <img
            className="size-[46px] cursor-pointer"
            src={LeftArrowFilled}
            alt="previous"
          />
          <img
            className="size-[46px] cursor-pointer "
            src={RightArrowFilled}
            alt="next"
          />
        </div>
      </div>
      <ProductCard product={flashSalesList[1]} />
    </section>
  );
};

export default ContentCarousel;
