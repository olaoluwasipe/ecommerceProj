import React, { ReactElement, createContext, useContext, useState } from 'react';

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
}

export interface CartItem {
  id: number;
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
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
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
