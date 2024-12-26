import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItemIdx = cartItems.findIndex(
      (cartItem) =>
        String(cartItem.cartProduct.product.id) ===
        String(item.cartProduct.product.id)
    );

    if (existingItemIdx !== -1) {
      // product exists
      const updatedCartItems = cartItems.map((cartItem, idx) => {
        if (idx === existingItemIdx) {
          return {
            cartProduct: {
              product: cartItem.cartProduct.product,
              quantity: cartItem.cartProduct.quantity + 1,
            },
          };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prev) => [...prev, item]);
    }
  };

  const calculateSubtotal = (item) => {
    item.product.price * item.quantity;
  };

  return (
    <CartContext.Provider
      value={{ cartItems: cartItems, addToCart: addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
