import React, { createContext, useContext, useState } from "react";

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
        const cartProduct = cartItem.cartProduct;

        if (idx === existingItemIdx) {
          const newQuantity = cartProduct.quantity + 1;
          const updated = {
            cartProduct: {
              product: cartProduct.product,
              quantity: newQuantity,
            },
          };
          return CartWithSubTotal(updated);
        } else {
          return CartWithSubTotal(cartItem);
        }
      });
      setCartItems(updatedCartItems);
    } else {
      const newItem = CartWithSubTotal(item);
      setCartItems((prev) => [...prev, newItem]);
    }
  };

  const CartWithSubTotal = (item) => {
    const cartProduct = item.cartProduct;
    return {
      cartProduct: {
        product: cartProduct.product,
        quantity: cartProduct.quantity,
        subTotal: cartProduct.quantity * cartProduct.product.price,
      },
    };
  };

  const updateQuantity = (id, quantity) => {
    console.log("udateing", id, quantity);
    const updatedCartItems = cartItems.map((cartItem) => {
      const cartProduct = cartItem.cartProduct;
      if (cartProduct.product.id === id) {
        const updated = {
          cartProduct: {
            product: cartProduct.product,
            quantity,
          },
        };
        return CartWithSubTotal(updated);
      }
      return cartItem;
    });

    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.cartProduct.subTotal;
    }, 0);
  };

  const deleteItem = (id) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.cartProduct.product.id !== id
    );
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        addToCart: addToCart,
        updateQuantity: updateQuantity,
        calculateTotal: calculateTotal,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
}
