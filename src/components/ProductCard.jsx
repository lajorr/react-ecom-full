import StarRoundedIcon from "@mui/icons-material/StarRounded";
import React from "react";
import FillEye from "../assets/icons/fill_eye.svg";
import FillHeart from "../assets/icons/fill_heart.svg";

const ProductCard = ({ product }) => {
  return (
    <div className="group w-[270px]">
      <div className="bg-secondary h-[250px] rounded-[4px] relative">
        <div className="size-full flex items-center justify-center">
          <img src={product.img} alt="image" />
        </div>
        <div className="absolute w-[270px] h-[250px] right-0 bottom-0 flex flex-col justify-between">
          <div className="flex justify-between px-[12px] pt-[12px] ">
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
          </div>
          <div className="bg-black w-full h-[40px] rounded-b-[4px] text-white text-[16px] font-[500] hidden group-hover:block cursor-pointer">
            <p className="text-center my-2"> Add To Cart</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <h2 className="font-[500] text-[16px] ">{product.name}</h2>
        <div>
          <span className="mr-[12px] text-secondary2">
            {product.discountedPrice}
          </span>
          <span className="text-black/50 font-[500] text-[16px] line-through">
            {product.price}
          </span>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }, (_, index) => (
            <StarRoundedIcon
              key={index}
              sx={{
                fontSize: "20px",
                color: `${index < product.rating ? "#FFAD33" : "black"}`,
                opacity: `${index >= product.rating && "25%"}`,
              }}
            />
          ))}
          <p className="ml-2 text-[14px] font-[600] text-black/50 ">
            ({product.ratingCount})
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
