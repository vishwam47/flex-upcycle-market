
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="product-card overflow-hidden transition-all duration-300 h-full flex flex-col">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white"
        >
          <Heart className="h-5 w-5 text-portflex-purple" />
        </Button>
      </div>
      <CardContent className="pt-4 flex-grow">
        <div className="text-xs text-portflex-lavender font-medium mb-1">
          {product.category}
        </div>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-semibold text-portflex-purple mb-1 hover:underline">
            {product.name}
          </h3>
        </Link>
        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-bold text-portflex-purple">
            ${product.price.toFixed(2)}
          </p>
          <div className="text-sm text-gray-500">
            {product.seller}
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t border-portflex-light pt-3">
        <Button 
          className="w-full bg-portflex-lavender hover:bg-portflex-purple text-portflex-purple hover:text-white transition-colors"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
