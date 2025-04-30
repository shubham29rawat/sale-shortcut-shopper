
import React from 'react';
import { saleProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const Products = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Sale Products</h1>
        <p className="text-gray-600">
          Limited-time offers. Act fast before they're gone!
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-100 p-6 rounded-lg mb-12">
        <div className="flex items-center mb-4">
          <div className="bg-sale text-white px-3 py-1 rounded-md font-bold">
            SALE
          </div>
          <div className="ml-3 text-xl font-semibold">Special Offers</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {saleProducts.map(product => (
            <ProductCard key={product.id} product={product} layout="list" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
