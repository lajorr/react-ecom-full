import React from "react";
import LeftArrowFilled from "../assets/icons/left_arrow_filled.svg";
import RightArrowFilled from "../assets/icons/right_arrow_filled.svg";

import Semicolon from "../assets/icons/semicolon.svg";
import MyButton from "./MyButton";

const ContentCarousel = ({
  className,
  sectionTitle,
  title,
  isSlidable,
  hasViewAll = false,
  onViewAll,
  countDown,
  children,
}) => {
  const TimerUnit = ({ unitName, countDown }) => {
    return (
      <div className="flex flex-col items-center gap-1">
        <p>{unitName}</p>
        <p className="font-bold text-[32px]">{countDown}</p>
      </div>
    );
  };
  return (
    <section className={`${className ?? ""} flex flex-col items-center`}>
      <div className="flex gap-4 items-center mb-6 w-full ">
        <div className="h-[40px] w-[20px] bg-secondary2 rounded-[4px]"></div>
        <h3 className="font-[600] text-[16px] text-secondary2">
          {sectionTitle}
        </h3>
      </div>
      <div className="grid grid-cols-[auto_1fr_auto] mb-[40px] w-full items-end">
        <h1
          className={`${
            countDown ? "col-span-1" : "col-span-2"
          } font-[600] text-[36px]`}
        >
          {title}
        </h1>

        {countDown && (
          <div className="flex items-end gap-4 ml-[88px]">
            <TimerUnit unitName={"Days"} countDown={countDown.days} />
            <img className="pb-4" src={Semicolon} alt="semicolon" />
            <TimerUnit unitName={"Hours"} countDown={countDown.hours} />
            <img className="pb-4" src={Semicolon} alt="semicolon" />
            <TimerUnit unitName={"Minutes"} countDown={countDown.minutes} />
            <img className="pb-4" src={Semicolon} alt="semicolon" />
            <TimerUnit unitName={"Seconds"} countDown={countDown.seconds} />
          </div>
        )}

        {isSlidable ? (
          <div className="flex justify-end gap-2  items-end">
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
          hasViewAll && (
            <MyButton className="place-self-end" onClick={onViewAll}>
              View All
            </MyButton>
          )
        )}
      </div>
      {children}
      {hasViewAll && isSlidable && (
        <MyButton className="mt-[60px]" onClick={onViewAll}>
          View All Products
        </MyButton>
      )}
    </section>
  );
};

export default ContentCarousel;
