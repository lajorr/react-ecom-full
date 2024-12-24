import React, { useState } from "react";
import Joystick from "../assets/images/joystick.png";
const CartProducts = ({ productList }) => {
  const cartColumns = ["Product", "Price", "Quantity", "Subtotal"];

  const [cartItemList, setCartItemList] = useState([
    {
      title: "Joystick",
      img: Joystick,
      price: 123,
      quantity: 2,
      subtotal: 246,
    },
  ]);

  const addToCart = () => {
    console.log("Add to cart");
    const item = {
      title: "Joystick",
      img: Joystick,
      price: 123,
      quantity: 2,
      subtotal: 246,
    };
    // cartItemList.push(item);
    setCartItemList((prev) => [...prev, item]);
  };

  return (
    <div className="mb-20">
      <button onClick={addToCart}>add to cart</button>
      {cartItemList?.length === 0 ? (
        <h1>No Items</h1>
      ) : (
        <div className="flex flex-col gap-10">
          <GridContainer>
            {cartColumns.map((col) => (
              <div className="">{col}</div>
            ))}
          </GridContainer>
          {cartItemList.map((item) => (
            <CartProductTile
              img={item.img}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              subtotal={item.subtotal}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const GridContainer = ({ children }) => {
  return (
    <div className="grid grid-cols-4 place-items-center py-6 px-10 shadow-md">
      {children}
    </div>
  );
};

const CartProductTile = ({ title, img, price, quantity, subtotal }) => {
  return (
    <GridContainer>
      <div className="flex gap-5 items-center">
        <img src={img} className="size-[54px] object-contain" />
        <p className="text-[16px]">{title}</p>
      </div>
      <p>${price}</p>
      <input
        type="number"
        defaultValue={quantity}
        className="w-[72px] border-2 text-center"
      />
      <p>${subtotal}</p>
    </GridContainer>
  );
};

export default CartProducts;
