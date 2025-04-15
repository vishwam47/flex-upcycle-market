
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { mockProducts } from "@/data/mockProducts";
import { Trash2, ArrowLeft, ShoppingCart } from "lucide-react";

// Sample cart items
const initialCartItems = [
  { id: "1", quantity: 1 },
  { id: "3", quantity: 2 },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  
  // Get full product details from mock data
  const cartProducts = cartItems.map((item) => {
    const product = mockProducts.find((p) => p.id === item.id);
    return {
      ...product,
      quantity: item.quantity,
    };
  }).filter(item => item !== undefined);
  
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  
  // Calculate totals
  const subtotal = cartProducts.reduce(
    (sum, item) => sum + (item?.price || 0) * (item?.quantity || 0),
    0
  );
  const shipping = 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-portflex-light py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-portflex-purple hover:text-portflex-lavender">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Continue Shopping
            </Link>
          </div>
          
          <h1 className="text-2xl font-bold text-portflex-purple mb-6">
            Shopping Cart
          </h1>
          
          {cartProducts.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {cartProducts.map((item) => (
                  <Card key={item?.id} className="mb-4 overflow-hidden">
                    <div className="flex flex-col sm:flex-row">
                      <div className="w-full sm:w-32 h-32">
                        <img
                          src={item?.imageUrl}
                          alt={item?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 flex-grow">
                        <div className="flex justify-between">
                          <div>
                            <Link to={`/product/${item?.id}`} className="text-lg font-semibold text-portflex-purple hover:underline">
                              {item?.name}
                            </Link>
                            <p className="text-sm text-gray-600 mb-2">Seller: {item?.seller}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => item?.id && removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                        
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center">
                            <button
                              onClick={() => item?.id && updateQuantity(item.id, (item?.quantity || 0) - 1)}
                              className="px-3 py-1 border border-portflex-light rounded-l-md text-portflex-purple"
                            >
                              -
                            </button>
                            <span className="w-12 px-3 py-1 border-y border-portflex-light text-center">
                              {item?.quantity}
                            </span>
                            <button
                              onClick={() => item?.id && updateQuantity(item.id, (item?.quantity || 0) + 1)}
                              className="px-3 py-1 border border-portflex-light rounded-r-md text-portflex-purple"
                            >
                              +
                            </button>
                          </div>
                          <div className="font-semibold text-portflex-purple">
                            ${((item?.price || 0) * (item?.quantity || 0)).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="lg:col-span-1">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold text-portflex-purple mb-4">
                    Order Summary
                  </h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-portflex-light pt-3 flex justify-between">
                      <span className="font-semibold text-portflex-purple">Total</span>
                      <span className="font-bold text-portflex-purple">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-portflex-purple text-white hover:bg-opacity-90">
                    Proceed to Checkout
                  </Button>
                  
                  <div className="mt-4 text-xs text-gray-500">
                    <p>• Secure checkout powered by Stripe</p>
                    <p>• Free returns within 30 days</p>
                    <p>• Questions? Contact our support team</p>
                  </div>
                </Card>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="flex justify-center mb-4">
                <ShoppingCart className="h-16 w-16 text-portflex-lavender" />
              </div>
              <h2 className="text-xl font-semibold text-portflex-purple mb-2">
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-6">
                Looks like you haven't added any upcycled products to your cart yet.
              </p>
              <Link to="/">
                <Button className="bg-portflex-purple text-white hover:bg-opacity-90">
                  Start Shopping
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
