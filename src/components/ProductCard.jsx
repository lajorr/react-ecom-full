import StarRoundedIcon from "@mui/icons-material/StarRounded";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="group w-[270px]">
      <div
        className="bg-secondary h-[250px] rounded-[4px] bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        {/* <div className="size-full flex items-center justify-center">
          <img className="size-full" src={product.image} alt="image" />
        </div> */}
        <div className=" w-[270px] h-[250px] flex flex-col justify-end">
          {/* <div className="flex justify-between px-[12px] pt-[12px] ">
            {product.offer ? (
              <div className="bg-secondary2 rounded-[4px] h-min py-1 px-[12px] text-white text-[12px]">
                {product.offer}
              </div>
            ) : product.isNew ? (
              <div className="bg-button1  rounded-[4px] h-min py-1 px-[12px] text-white text-[12px] leading-[18px]">
                NEW
              </div>
            ) : (
              <div></div>
            )}
            <div className="flex flex-col gap-2 ">
              <img src={FillHeart} alt="" />
              <img src={FillEye} alt="" />
            </div>
          </div> */}
          <div className="bg-black w-full py-2 rounded-b-[4px] text-white text-[16px] font-[500] hidden group-hover:block cursor-pointer">
            <p className="text-center my-2 leading-6"> Add To Cart</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <h2 className="font-[500] text-[16px] w-full text-ellipsis whitespace-nowrap overflow-hidden">
          {product.title}
        </h2>
        <div className="flex justify-between">
          <span className="mr-[12px] text-secondary2">${product.price}</span>
          <span className="text-black/30 font-[500] text-[16px]">
            {product.category}
          </span>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }, (_, index) => (
            <StarRoundedIcon
              key={index}
              sx={{
                fontSize: "20px",
                color: `${
                  index < Math.round(product.rating.rate) ? "#FFAD33" : "black"
                }`,
                opacity: `${index >= Math.round(product.rating.rate) && "25%"}`,
              }}
            />
          ))}
          <p className="ml-2 text-[14px] font-[600] text-black/50 ">
            ({product.rating.count})
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
