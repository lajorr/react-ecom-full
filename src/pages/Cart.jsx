import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import CartProducts from "../components/CartProducts";
import MyButton from "../components/MyButton";

const Cart = () => {
  const productList = [1];
  return (
    <>
      <Breadcrumbs path="Cart" />
      <div className="mx-[135px]">
        <CartProducts cartItems={productList} />
        <div className="flex justify-between mb-[140px]">
          <div className="flex gap-4 h-min">
            <input
              type="text"
              className="border border-black rounded-[4px] text-[16px] py-4 px-6"
              placeholder="Coupon Code"
            />
            <MyButton>Apply Coupon</MyButton>
          </div>
          <div className="border border-black rounded-[4px] px-6 py-8 w-[470px]">
            <h1 className="text-[20px] font-[500] mb-[24px]">Cart Total</h1>
            <div className="flex justify-between text-[16px]">
              <p>Subtotal</p>
              <p>$175</p>
            </div>
            <hr className="bg-black/40 my-4 " />
            <div className="flex justify-between text-[16px]">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <hr className="bg-black/40 my-4 " />
            <div className="flex justify-between text-[16px] mb-4">
              <p>Total</p>
              <p>$175</p>
            </div>
            <div className="flex justify-center">
              <MyButton>Proceed to Checkout</MyButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
