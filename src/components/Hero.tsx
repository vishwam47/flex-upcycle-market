
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="absolute inset-0 z-0 portflex-gradient opacity-10"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Discover Unique Upcycled Treasures
          </h1>
          <p className="text-lg md:text-xl mb-8 text-secondary-foreground">
            Shop sustainable, one-of-a-kind products crafted from repurposed materials.
            Each purchase helps reduce waste and supports eco-conscious creators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/category/featured">
              <Button 
                className="button-shop-now px-8 py-6 !bg-accent !text-[var(--primary-foreground)] !border-none !shadow-md"
                size="lg"
              >
                Shop Now
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant="outline" 
                className="border-accent text-accent hover:bg-highlight hover:text-foreground px-8 py-6 rounded-full"
                size="lg"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
