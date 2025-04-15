
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockProducts } from "@/data/mockProducts";
import { Button } from "@/components/ui/button";
import { Star, Heart, Share2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  
  const product = mockProducts.find((p) => p.id === id);
  
  // Similar products (same category, but not the current product)
  const similarProducts = product 
    ? mockProducts
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4)
    : [];

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-portflex-purple mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/">
            <Button className="bg-portflex-purple text-white hover:bg-opacity-90">
              Return Home
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-portflex-light py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-portflex-purple hover:text-portflex-lavender">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to shopping
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div className="rounded-lg overflow-hidden bg-portflex-light">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="flex flex-col">
                <div className="mb-2">
                  <Link to={`/category/${product.category.toLowerCase()}`} className="text-sm font-medium text-portflex-lavender hover:underline">
                    {product.category}
                  </Link>
                </div>
                
                <h1 className="text-2xl md:text-3xl font-bold text-portflex-purple mb-2">
                  {product.name}
                </h1>
                
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({Math.floor(product.rating * 10)})
                  </span>
                </div>
                
                <div className="text-2xl font-bold text-portflex-purple mb-4">
                  ${product.price.toFixed(2)}
                </div>
                
                <p className="text-gray-700 mb-6">
                  {product.description}
                </p>
                
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Seller</p>
                  <Link to={`/seller/${product.seller.toLowerCase()}`} className="font-medium text-portflex-purple hover:underline">
                    {product.seller}
                  </Link>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Quantity</p>
                  <div className="flex items-center">
                    <button
                      onClick={decreaseQuantity}
                      className="px-3 py-1 border border-portflex-light rounded-l-md text-portflex-purple"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      className="w-16 px-3 py-1 border-y border-portflex-light text-center"
                    />
                    <button
                      onClick={increaseQuantity}
                      className="px-3 py-1 border border-portflex-light rounded-r-md text-portflex-purple"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Button
                    className="bg-portflex-purple text-white hover:bg-opacity-90 flex-grow"
                    size="lg"
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="border-portflex-lavender text-portflex-purple hover:bg-portflex-light"
                    size="icon"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-portflex-lavender text-portflex-purple hover:bg-portflex-light"
                    size="icon"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="text-sm text-gray-600 mt-auto">
                  <p className="mb-1">• Handcrafted upcycled product</p>
                  <p className="mb-1">• Ships within 2-3 business days</p>
                  <p>• 30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
          
          {similarProducts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-portflex-purple mb-6">
                Similar Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {similarProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
