import React from "react";
import LeftArrowFilled from "../assets/icons/left_arrow_filled.svg";
import RightArrowFilled from "../assets/icons/right_arrow_filled.svg";

const ContentCarousel = ({
  sectionTitle,
  title,
  isSlidable,
  hasViewAll = false,
  onViewAll,
  children,
}) => {
  const MyButton = ({ className, children }) => {
    return (
      <button
        className={`${
          className ?? ""
        } bg-secondary2 rounded-[4px] border text-white font-[500] py-4 px-12`}
        onClick={onViewAll}
      >
        {children}
      </button>
    );
  };
  return (
    <section className="flex flex-col items-center ">
      <div className="flex gap-4 items-center mb-6 w-full ">
        <div className="h-[40px] w-[20px] bg-secondary2 rounded-[4px]"></div>
        <h3 className="font-[600] text-[16px] text-secondary2">
          {sectionTitle}
        </h3>
      </div>
      <div className="grid grid-cols-3 mb-[40px] w-full ">
        <h1 className="col-span-2 font-[600] text-[36px] ">{title}</h1>
        {isSlidable ? (
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
        ) : (
          <MyButton className="place-self-end">View All</MyButton>
        )}
      </div>
      {children}
      {hasViewAll && (
        <MyButton className="mt-[60px]">View All Products</MyButton>
      )}
    </section>
  );
};

export default ContentCarousel;
