
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../data/products';
import { toast } from 'sonner';

interface CartContextType {
  items: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<Product[]>([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(items));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [items]);

  const addToCart = (product: Product) => {
    // Check if the product is already in the cart
    const existingProductIndex = items.findIndex(item => item.id === product.id);
    
    if (existingProductIndex !== -1) {
      // Product already in cart, let the user know
      toast.info(`${product.name} is already in your cart!`);
      return;
    }

    setItems(prevItems => [...prevItems, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (productId: number) => {
    const productName = items.find(item => item.id === productId)?.name;
    setItems(prevItems => prevItems.filter(item => item.id !== productId));
    if (productName) {
      toast.success(`${productName} removed from cart!`);
    }
  };

  const clearCart = () => {
    setItems([]);
    toast.success('Cart cleared!');
  };

  const totalItems = items.length;
  
  const totalPrice = items.reduce((total, item) => total + item.salePrice, 0);

  const value = {
    items,
    addToCart,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
