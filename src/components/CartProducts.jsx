import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
const CartProducts = ({ productList, updateQuantity, removeFromCart }) => {
  const cartColumns = ["Product", "Price", "Quantity", "Subtotal"];
  const [isUpdate, setIsUpdate] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="mb-20">
      {productList?.length === 0 ? (
        <h1>No Items</h1>
      ) : (
        <div className="flex flex-col gap-10">
          <GridContainer>
            {cartColumns.map((col, idx) => (
              <div key={idx} className="">
                {col}
              </div>
            ))}
          </GridContainer>
          {productList?.map((item) => {
            const cartProduct = item.cartProduct;
            return (
              <CartProductTile
                key={cartProduct.product.id}
                isUpdate={isUpdate}
                product={cartProduct.product}
                subtotal={cartProduct.subTotal}
                quantity={cartProduct.quantity}
                onQuantityChanged={(e) => {
                  updateQuantity(cartProduct.product.id, e.target.value);
                }}
                onRemoveItem={removeFromCart}
              />
            );
          })}
          <div className="flex justify-between">
            <MyButton
              bgColor="white hover:bg-black/5"
              className={"border border-black"}
              textColor="black"
              onClick={() => {
                navigate('/');
              }}
            >
              Return To Shop
            </MyButton>
            <MyButton
              bgColor={` ${
                isUpdate
                  ? "bg-button1 hover:bg-secondary2"
                  : " white hover:bg-black/5"
              }`}
              className={`${!isUpdate && "border border-black"} `}
              textColor={` ${isUpdate ? "white" : "black"}`}
              onClick={() => {
                setIsUpdate((prev) => !prev);
              }}
            >
              {isUpdate ? "Done" : "Update Cart"}
            </MyButton>
          </div>
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

const CartProductTile = ({
  product,
  quantity,
  subtotal,
  onQuantityChanged,
  isUpdate,
  onRemoveItem,
}) => {
  const handleItemRemove = () => {
    onRemoveItem(product.id);
  };
  return (
    <>
      <GridContainer>
        <div className="flex gap-5 items-center place-self-start relative">
          {isUpdate && (
            <CancelRoundedIcon
              sx={{
                color: "#DB4444",
                position: "absolute",
                top: "-5px",
                left: "-12px",
                cursor: "pointer",
              }}
              onClick={handleItemRemove}
            />
          )}
          <img src={product.image} className="size-[54px] object-contain" />
          <p className="text-[16px]">{product.title}</p>
        </div>
        <p>${product.price}</p>
        <input
          type="number"
          min={1}
          defaultValue={quantity}
          className="w-[72px] border-2 text-center"
          onChange={onQuantityChanged}
        />
        <p>${subtotal}</p>
      </GridContainer>
    </>
  );
};

export default CartProducts;
