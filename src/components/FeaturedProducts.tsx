
import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/types/product";
import { mockProducts } from "@/data/mockProducts";

const FeaturedProducts = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 4;
  const totalPages = Math.ceil(mockProducts.length / productsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const currentProducts = mockProducts.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-portflex-purple">Featured Products</h2>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full border-portflex-lavender text-portflex-purple hover:bg-portflex-light"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full border-portflex-lavender text-portflex-purple hover:bg-portflex-light"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
