/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

// Load cart from localStorage if available
const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem('cart');
    return localCart ? JSON.parse(localCart) : [];
});


const [total, setTotal] = useState(0);

useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    
    const newTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setTotal(newTotal);
}, [cart]);

// Add item to cart
const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(
    cartItem => cartItem.id === item.id && 
                cartItem.sessionType === item.sessionType && 
                cartItem.sessionPeriod === item.sessionPeriod
    );

    if (existingItemIndex >= 0) {
    // Item exists, update quantity
    const newCart = [...cart];
    newCart[existingItemIndex].quantity += item.quantity;
    setCart(newCart);
    } else {
    // Add new item
    setCart([...cart, item]);
    }
};

// Remove item from cart
const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
};

// Clear cart
const clearCart = () => {
    setCart([]);
};

// Context value
const value = {
    cart,
    total,
    addToCart,
    removeFromCart,
    clearCart
};

return (
    <CartContext.Provider value={value}>
    {children}
    </CartContext.Provider>
);
};

