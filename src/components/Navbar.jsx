import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CartIcon from "../assets/icons/cart_icon.svg";
import HeartIcon from "../assets/icons/heart_icon.svg";
import SearchIcon from "../assets/icons/search_icon.svg";
import { useCartContext } from "../provider/CartProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const cartContext = useCartContext();
  const cartItems = cartContext.cartItems;
  return (
    <>
      <div className="bg-black h-[48px] text-white text-[14px] flex items-center justify-between px-[135px]">
        <div className="flex gap-2 mx-auto ">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <span className="font-[600] underline cursor-pointer">Shop Now</span>
        </div>
        <div className="flex items-center ">
          <p>English</p>
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <nav className="px-[135px]  grid grid-cols-[auto_1fr_auto]  place-items-center mt-[40px] mb-4">
        <h2
          className="font-bold text-[24px] cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Exclusive
        </h2>
        <ul className="flex space-x-12 text-4 justify-center">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="contact">
            <li>Contact</li>
          </NavLink>
          <NavLink to="about">
            <li>About</li>
          </NavLink>
          <NavLink to="signup">
            <li>Sign Up</li>
          </NavLink>
        </ul>
        <div className="flex items-center gap-4 ">
          <div className="bg-secondary rounded-[4px] flex items-center mr-2   pr-[12px]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="focus:outline-none bg-transparent text-[12px] w-[195px] py-[7px] pl-[20px]"
            />
            <img src={SearchIcon} alt="Search Icon" />
          </div>
          <img className="cursor-pointer" src={HeartIcon} alt="=Cart Icon" />
          <button
            onClick={() => {
              navigate("/cart");
            }}
            className="relative"
          >
            <div className="bg-secondary2 size-4 rounded-full text-white text-[12px] absolute top-[-4px] right-[-4px]">
              {cartItems.length}
            </div>
            <img className="cursor-pointer" src={CartIcon} alt="=Cart Icon" />
          </button>
        </div>
      </nav>
      <hr className="h-[0.5px] bg-black/30" />
    </>
  );
};

export default Navbar;
