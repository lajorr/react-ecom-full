import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Ratings from "../components/Ratings";
import { getProductById } from "../services/ProductServices";

import DeliveryIconBlack from "../assets/icons/delivery_icon_black.svg";
import HearIcon from "../assets/icons/heart_icon.svg";
import IconMinus from "../assets/icons/icon_minus.svg";
import IconPlus from "../assets/icons/icon_plus.svg";
import ReturnIcon from "../assets/icons/return_icon.svg";
import MyButton from "../components/MyButton";
import ServiceAvailable from "../components/ServiceAvailable";

const ProductDetail = () => {
  const productDetails = useLoaderData();

  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const colors = ["#A0BCE0", "#E07575"];
  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <>
      <Breadcrumbs path={productDetails.title} />
      <div className="flex mx-[135px] items-center mb-[140px]">
        <div className="flex flex-col gap-4 mr-[30px] ">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-[138px] w-[170px] bg-secondary rounded-[4px] py-2 "
            >
              <img
                className="object-contain size-full "
                src={productDetails.image}
                alt="image"
              />
            </div>
          ))}
        </div>

        <div className="bg-secondary p-4 w-[500px] rounded-[4px] mr-[70px] h-[600px]">
          <img
            className=" object-contain size-full "
            src={productDetails.image}
            alt="image"
          />
        </div>
        <div className="w-[400px]">
          <h1 className="text-[24px] font-[600] mb-4">
            {productDetails.title}
          </h1>
          <div className="flex">
            <Ratings
              rate={productDetails.rating.rate}
              rateCount={productDetails.rating.count}
            />
            <p className="ml-2 text-[14px]  text-black/50 ">
              ({productDetails.rating.count} Reviews){" "}
              <span className="mx-4">|</span>{" "}
              <span className="text-button1">In Stock</span>
            </p>
          </div>
          <p className="text-[24px] mt-4 mb-6">${productDetails.price}</p>
          <p className="text-[14px]">{productDetails.description}</p>
          <hr className="bg-black/50 h-0.5 my-6" />
          <div className="flex items-center ">
            <p className="text-[20px] mr-6">Colours</p>
            <div className="flex gap-2">
              {colors.map((_color) => (
                <button
                  className={`size-[20px] rounded-full ${
                    color === _color ? "border-2 border-black" : ""
                  }`}
                  style={{
                    backgroundColor: _color,
                    border: color === _color ? "2px solid #000" : "none",
                  }}
                  key={_color}
                  onClick={() => {
                    setColor(_color);
                  }}
                ></button>
              ))}
            </div>
          </div>
          <div className="flex items-center my-6">
            <p className="text-[20px] mr-6">Sizes</p>
            <div className="flex gap-2">
              {sizes.map((s) => (
                <button
                  className={`size-[32px] rounded-[4px] ${
                    size === s
                      ? "bg-secondary2 text-white"
                      : "border-2 border-black/50"
                  }`}
                  key={s}
                  onClick={() => {
                    setSize(s);
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-4 mb-[40px]">
            <div className="rounded-[4px] grid grid-cols-[auto_1fr_auto] w-[160px] overflow-hidden border-2 border-black/50">
              <button className="px-2 border-r-2 border-black/50">
                <img src={IconMinus} alt="minus" />
              </button>
              <div className="place-self-center font-[500] text-[20px] py-2">
                2
              </div>
              <button className="bg-secondary2 px-3 border-l-2">
                <img src={IconPlus} alt="plus" />
              </button>
            </div>
            <MyButton onClick={() => {}}>Buy Now</MyButton>
            <button className="rounded-[4px] border-2 border-black/50 ">
              <img
                className="size-full object-contain"
                src={HearIcon}
                alt="wish list"
              />
            </button>
          </div>
          <div className="border-2 border-black/50 rounded-[4px] py-6">
            <ServiceAvailable
              title="Free Delivery"
              description="Enter your postal code for Delivery Availability"
              icon={DeliveryIconBlack}
            />
            <hr className="h-0.5 bg-black/50 my-4" />
            <ServiceAvailable
              title="Return Delivery"
              description="Free 30 Days Delivery Returns. Details"
              icon={ReturnIcon}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

export const ProductLoader = ({ params }) => {
  console.log(params);
  const { id } = params;
  return getProductById(id);
};
