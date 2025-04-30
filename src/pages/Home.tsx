
import React, { useState } from 'react';
import { saleProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showSaleItems, setShowSaleItems] = useState(false);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to SaleShop</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover amazing deals on premium products. Limited-time offers you don't want to miss.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <Button 
          onClick={() => setShowSaleItems(!showSaleItems)}
          size="lg"
          className="bg-sale hover:bg-sale-light text-white text-lg gap-2"
        >
          {showSaleItems ? 'Hide Sale Items' : 'View Sale Items'}
          {!showSaleItems && <ArrowRight className="h-5 w-5" />}
        </Button>
      </div>

      {showSaleItems && (
        <div className="mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6 text-center">
            <span className="bg-sale text-white px-3 py-1 rounded-md">Flash Sale</span>
            <span className="ml-2">Ends Soon!</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {saleProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/products">
              <Button variant="outline" className="gap-2">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}

      {!showSaleItems && (
        <div className="text-center my-16 text-gray-500">
          Click the button above to see our limited-time sale offers!
        </div>
      )}
    </div>
  );
};

export default Home;
