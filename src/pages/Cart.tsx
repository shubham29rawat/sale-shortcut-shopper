
import React from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

const Cart = () => {
  const { items, removeFromCart, clearCart, totalPrice } = useCart();

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Cart</h1>
        <p className="text-gray-600">
          Review your items before checkout
        </p>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16">
          <ShoppingCart className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven't added any items to your cart yet.</p>
          <Link to="/products">
            <Button className="bg-sale hover:bg-sale-light text-white">
              Browse Products
            </Button>
          </Link>
        </div>
      ) : (
        <div>
          <div className="bg-white border rounded-lg overflow-hidden mb-8">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-14 w-14 flex-shrink-0 mr-4">
                          <img className="h-full w-full object-cover rounded-md" src={item.image} alt={item.name} />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.description.substring(0, 60)}...</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                      <div className="font-medium text-sale">${item.salePrice.toFixed(2)}</div>
                      <div className="text-xs text-gray-500 line-through">${item.price.toFixed(2)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 border-red-200 hover:bg-red-50"
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex gap-4">
              <Link to="/products">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Continue Shopping
                </Button>
              </Link>

              <Button 
                variant="outline" 
                className="text-red-600 border-red-200 hover:bg-red-50"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </div>
            
            <div className="bg-white border rounded-lg p-6">
              <div className="text-lg mb-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal:</span>
                  <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500 text-sm mb-2">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="border-t mt-4 pt-4 flex justify-between font-bold">
                  <span>Total:</span>
                  <span className="text-sale">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              
              <Button className="w-full bg-sale hover:bg-sale-light text-white">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
