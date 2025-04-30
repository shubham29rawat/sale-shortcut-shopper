
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const location = useLocation();
  const { totalItems } = useCart();

  return (
    <nav className="bg-white shadow-md py-4 mb-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          SaleShop
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link 
            to="/" 
            className={`font-medium hover:text-primary transition-colors ${
              location.pathname === '/' ? 'text-primary border-b-2 border-primary' : 'text-gray-600'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={`font-medium hover:text-primary transition-colors ${
              location.pathname === '/products' ? 'text-primary border-b-2 border-primary' : 'text-gray-600'
            }`}
          >
            Products
          </Link>
          <Link to="/cart">
            <Button variant="outline" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-sale text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
