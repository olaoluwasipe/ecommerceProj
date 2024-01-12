import React, { ReactElement, createContext, useContext, useState } from 'react';

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  getTotalAmount: () => number;
  getTotalItems: () => number;
  removeFromCart: (id: number) => void;
}

export interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps { 
    children: ReactElement
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<CartProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if(existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += item.quantity;
      setCart(updatedCart);
    }else {
      setCart((prevCart) => [...prevCart, item]);
    }
  };

  const removeFromCart = (id: number) => {
    const selectedItemIndex = cart.findIndex((cartItem) => cartItem.id === id);

    if(selectedItemIndex !== -1) {
      const currentCart = [...cart];
      const updateCart = currentCart.splice(selectedItemIndex, 1);
      setCart(currentCart);
    }
  }

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((totalCount, item) => totalCount + item.quantity, 0);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, getTotalAmount, getTotalItems, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
