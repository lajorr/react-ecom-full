import React from "react";
import { useNavigate } from "react-router-dom";
import Ratings from "./Ratings";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleProductClick = () => {
    console.log("Product Clicked", product.id);
    navigate(`/products/${product.id}`);
  };
  return (
    <div className="group w-[270px]" onClick={handleProductClick}>
      <div
        className="bg-secondary h-[250px] rounded-[4px] bg-contain bg-no-repeat bg-center cursor-pointer"
        style={{ backgroundImage: `url(${product.image})` }}
        onClick={() => {}}
      >
        <div className=" w-[270px] h-[250px] flex flex-col justify-end">
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
          <Ratings
            rate={product.rating.rate}
            rateCount={product.rating.count}
          />
          <p className="ml-2 text-[14px] font-[600] text-black/50 ">
            ({product.rating.count})
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
