import React from "react";
const CartProducts = ({ productList }) => {
  const cartColumns = ["Product", "Price", "Quantity", "Subtotal"];



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
                key={cartProduct.product?.id}
                img={cartProduct.product?.image}
                title={cartProduct.product?.title}
                price={cartProduct.product?.price}
                quantity={cartProduct.quantity}
                subtotal={cartProduct.subtotal}
                //* calc subtotal
              />
            );
          })}
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
