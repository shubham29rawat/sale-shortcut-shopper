
import React from 'react';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
  layout?: 'grid' | 'list';
}

const ProductCard = ({ product, layout = 'grid' }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product);
  };

  const discount = Math.round(((product.price - product.salePrice) / product.price) * 100);

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
      layout === 'list' ? 'flex flex-row' : ''
    }`}>
      <div className={layout === 'list' ? 'w-1/3' : ''}>
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 right-2 bg-sale text-white px-2 py-1 rounded-md font-bold">
            {discount}% OFF
          </div>
        </div>
      </div>
      
      <div className={layout === 'list' ? 'w-2/3' : ''}>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg mb-2">{product.name}</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sale font-bold text-xl">${product.salePrice.toFixed(2)}</span>
            <span className="text-gray-500 line-through text-sm">${product.price.toFixed(2)}</span>
          </div>
          <p className="text-gray-600 text-sm">{product.description}</p>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-sale hover:bg-sale-light text-white"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProductCard;
