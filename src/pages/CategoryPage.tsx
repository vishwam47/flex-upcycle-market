
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { mockProducts } from "@/data/mockProducts";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  SlidersHorizontal,
  Check,
  X 
} from "lucide-react";

const categories = {
  furniture: "Furniture",
  fashion: "Fashion",
  decor: "Home Decor",
  jewelry: "Jewelry",
  art: "Art",
  featured: "Featured Products"
};

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState("featured");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 300 });
  
  const categoryName = categoryId ? categories[categoryId as keyof typeof categories] : "Products";
  
  // Filter products by category (if featured, show all)
  const categoryProducts = categoryId === "featured" 
    ? mockProducts
    : mockProducts.filter(product => 
        product.category.toLowerCase() === categoryId?.toLowerCase()
      );
  
  // Sort products
  const sortedProducts = [...categoryProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        return parseInt(b.id) - parseInt(a.id);
      default: // featured
        return b.rating - a.rating;
    }
  });
  
  // Filter by price
  const filteredProducts = sortedProducts.filter(
    product => product.price >= priceRange.min && product.price <= priceRange.max
  );

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-portflex-light py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h1 className="text-2xl font-bold text-portflex-purple mb-1">
              {categoryName}
            </h1>
            <p className="text-gray-600 mb-6">
              Discover unique upcycled {categoryName.toLowerCase()} made from repurposed materials
            </p>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <p className="text-sm text-gray-600">
                {filteredProducts.length} products found
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="appearance-none bg-portflex-light text-portflex-purple px-4 py-2 pr-8 rounded-md border border-portflex-light focus:outline-none focus:ring-1 focus:ring-portflex-purple"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-portflex-purple pointer-events-none" />
                </div>
                
                <Button
                  variant="outline"
                  onClick={toggleFilter}
                  className="border-portflex-lavender text-portflex-purple hover:bg-portflex-light sm:hidden"
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Filters - Desktop */}
              <div className="hidden md:block">
                <div className="bg-portflex-light rounded-lg p-4">
                  <div className="mb-6">
                    <h3 className="font-semibold text-portflex-purple mb-3">Price Range</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Min: ${priceRange.min}</span>
                        <span className="text-sm text-gray-600">Max: ${priceRange.max}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="300"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
                        className="w-full accent-portflex-purple"
                      />
                      <input
                        type="range"
                        min="0"
                        max="300"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                        className="w-full accent-portflex-purple"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-portflex-purple mb-3">Categories</h3>
                    <div className="space-y-2">
                      {Object.entries(categories).map(([id, name]) => (
                        <div key={id} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`category-${id}`}
                            className="rounded border-portflex-lavender text-portflex-purple focus:ring-portflex-purple"
                            checked={categoryId === id}
                            readOnly
                          />
                          <label htmlFor={`category-${id}`} className="ml-2 text-gray-700">
                            {name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-portflex-purple text-white hover:bg-opacity-90"
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
              
              {/* Mobile Filters Modal */}
              {isFilterOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
                  <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white p-4 overflow-y-auto">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-portflex-purple">Filters</h3>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={toggleFilter}
                        className="text-portflex-purple"
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>
                    
                    <div className="border-t border-portflex-light pt-4 mb-6">
                      <h3 className="font-semibold text-portflex-purple mb-3">Price Range</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Min: ${priceRange.min}</span>
                          <span className="text-sm text-gray-600">Max: ${priceRange.max}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="300"
                          value={priceRange.min}
                          onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
                          className="w-full accent-portflex-purple"
                        />
                        <input
                          type="range"
                          min="0"
                          max="300"
                          value={priceRange.max}
                          onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                          className="w-full accent-portflex-purple"
                        />
                      </div>
                    </div>
                    
                    <div className="border-t border-portflex-light pt-4 mb-6">
                      <h3 className="font-semibold text-portflex-purple mb-3">Categories</h3>
                      <div className="space-y-2">
                        {Object.entries(categories).map(([id, name]) => (
                          <div key={id} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`mobile-category-${id}`}
                              className="rounded border-portflex-lavender text-portflex-purple focus:ring-portflex-purple"
                              checked={categoryId === id}
                              readOnly
                            />
                            <label htmlFor={`mobile-category-${id}`} className="ml-2 text-gray-700">
                              {name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline"
                        className="flex-1 border-portflex-lavender text-portflex-purple hover:bg-portflex-light"
                        onClick={toggleFilter}
                      >
                        Cancel
                      </Button>
                      <Button 
                        className="flex-1 bg-portflex-purple text-white hover:bg-opacity-90"
                        onClick={toggleFilter}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Product Grid */}
              <div className="md:col-span-3">
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg p-8 text-center">
                    <h3 className="text-xl font-medium text-portflex-purple mb-2">
                      No products found
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Try adjusting your filters to find what you're looking for.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setPriceRange({ min: 0, max: 300 })}
                      className="border-portflex-lavender text-portflex-purple hover:bg-portflex-light"
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
