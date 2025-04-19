
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingBag, Info } from "lucide-react";
import { mockProducts } from "@/data/mockProducts";
import ProductCard from "@/components/ProductCard";

const Favorites = () => {
  // In a real app, this would come from state or an API call
  // For now, just use 3 random products from mockProducts
  const favoriteProducts = mockProducts.slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h1 className="font-serif text-3xl font-bold text-primary mb-2">Your Favorites</h1>
              <p className="text-muted-foreground">Items you've saved for later</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link to="/">Continue Shopping</Link>
              </Button>
            </div>
          </div>
          
          <Card className="mb-8 border-secondary/50">
            <CardContent className="p-4">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm">
                  This is a demo favorites page. In a complete implementation with Supabase, your favorites would be 
                  saved to your account and synchronized across devices.
                </p>
              </div>
            </CardContent>
          </Card>
          
          {favoriteProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favoriteProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Heart className="h-16 w-16 mx-auto text-muted-foreground/40 mb-4" />
              <h2 className="text-xl font-semibold text-primary mb-2">Your favorites list is empty</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Browse our collections and click the heart icon to save products you love for later.
              </p>
              <Button asChild className="bg-primary hover:bg-accent text-primary-foreground">
                <Link to="/">Browse Products</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Favorites;
