
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { mockProducts } from "@/data/mockProducts";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  useEffect(() => {
    const query = searchParams.get("q") || "";
    setSearchQuery(query);
    
    if (query) {
      const results = mockProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchParams]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-portflex-light py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h1 className="text-2xl font-bold text-portflex-purple mb-6">Search Products</h1>
            <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto mb-6">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search for upcycled products..."
                  className="w-full pl-10 pr-4 py-3 rounded-full border-portflex-lavender focus:border-portflex-purple focus:ring-portflex-purple"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-portflex-purple h-5 w-5" />
                <Button 
                  type="submit"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-portflex-purple text-white hover:bg-opacity-90"
                >
                  Search
                </Button>
              </div>
            </form>
            
            {searchResults.length > 0 ? (
              <>
                <div className="mb-4">
                  <p className="text-gray-600">
                    Found {searchResults.length} results for "{searchParams.get("q")}"
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {searchResults.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : searchParams.get("q") ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-portflex-purple mb-2">
                  No results found for "{searchParams.get("q")}"
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or browse our categories below.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button 
                    variant="outline" 
                    className="border-portflex-lavender text-portflex-purple hover:bg-portflex-light"
                    onClick={() => setSearchParams({ q: "furniture" })}
                  >
                    Furniture
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-portflex-lavender text-portflex-purple hover:bg-portflex-light"
                    onClick={() => setSearchParams({ q: "decor" })}
                  >
                    Decor
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-portflex-lavender text-portflex-purple hover:bg-portflex-light"
                    onClick={() => setSearchParams({ q: "fashion" })}
                  >
                    Fashion
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-portflex-purple mb-2">
                  Search for upcycled products
                </h3>
                <p className="text-gray-600">
                  Enter keywords to find unique, sustainable items.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
