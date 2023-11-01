"use client";

import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [totalCartItems, setTotalCartItems] = useState(0);

  const updateCartState = (updatedCartItems) => {
    const updatedTotalCartPrice = updatedCartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const updatedTotalCartItems = updatedCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartItems(updatedCartItems);
    setTotalCartPrice(updatedTotalCartPrice);
    setTotalCartItems(updatedTotalCartItems);
  };

  const addToCart = (item) => {
    const existingCartItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity += 1;
      updateCartState(updatedCartItems);
    } else {
      const cartItem = { ...item, quantity: 1 };
      const updatedCartItems = [...cartItems, cartItem];
      updateCartState(updatedCartItems);
    }
  };
  const increaseItemQuantity = (itemId) => {
    const existingCartItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === itemId
    );

    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity += 1;
      updateCartState(updatedCartItems);
    }
  };
  const decreaseItemQuantity = (itemId) => {
    const existingCartItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === itemId
    );

    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[existingCartItemIndex].quantity > 1) {
        updatedCartItems[existingCartItemIndex].quantity -= 1;
        updateCartState(updatedCartItems);
      }
    }
  };
  const removeFromCart = (itemId) => {
    const existingCartItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === itemId
    );
    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[existingCartItemIndex].quantity > 1) {
        updatedCartItems[existingCartItemIndex].quantity -= 1;
      } else {
        updatedCartItems.splice(existingCartItemIndex, 1);
      }
      updateCartState(updatedCartItems);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalCartPrice,
        totalCartItems,
        addToCart,
        removeFromCart,
        increaseItemQuantity,
        decreaseItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
