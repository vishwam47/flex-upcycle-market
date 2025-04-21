
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/types/product";

const DOLLAR_TO_RUPEE = 83;

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const rupees = Math.round(product.price * DOLLAR_TO_RUPEE);

  return (
    <Card className="product-card overflow-hidden transition-all duration-300 h-full flex flex-col border-secondary/50">
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
          className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background text-destructive hover:text-destructive"
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>
      <CardContent className="pt-4 flex-grow">
        <div className="text-xs text-accent font-medium mb-1">
          {product.category}
        </div>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-semibold text-primary mb-1 hover:underline">
            {product.name}
          </h3>
        </Link>
        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-bold text-primary">
            ₹{rupees.toLocaleString("en-IN")}
          </p>
          <div className="text-sm text-muted-foreground">
            {product.seller}
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t border-secondary/50 pt-3">
        <Button 
          className="w-full bg-primary hover:bg-accent text-primary-foreground transition-colors"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
