
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, Heart, User, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const categories = [
    { name: "Home", path: "/" },
    { name: "Furniture", path: "/category/furniture" },
    { name: "Fashion", path: "/category/fashion" },
    { name: "Decor", path: "/category/decor" },
    { name: "Jewelry", path: "/category/jewelry" },
    { name: "Art", path: "/category/art" },
    { name: "Sell", path: "/sellers" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-2xl font-serif text-primary-foreground">P</span>
            </div>
            <h1 className="text-2xl font-serif">
              <span className="text-primary">Port</span>
              <span className="text-accent">Flex</span>
            </h1>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          {!isMobile && (
            <form 
              onSubmit={handleSearchSubmit} 
              className="flex-1 max-w-xl mx-8"
            >
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search for upcycled products..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border-muted focus:border-primary focus:ring-primary"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5" />
              </div>
            </form>
          )}

          {/* Navigation Links - Hidden on mobile */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-1">
              <Link to="/favorites">
                <Button variant="ghost" size="icon" className="text-primary hover:text-accent hover:bg-secondary/50">
                  <Heart className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="text-primary hover:text-accent hover:bg-secondary/50">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/account">
                <Button variant="ghost" size="icon" className="text-primary hover:text-accent hover:bg-secondary/50">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <div className="flex items-center space-x-2">
              <Link to="/search">
                <Button variant="ghost" size="icon" className="text-primary">
                  <Search className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="text-primary">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="ghost" onClick={toggleMenu} size="icon" className="text-primary">
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Search - Only visible on mobile */}
        {isMobile && (
          <form 
            onSubmit={handleSearchSubmit} 
            className="mt-3"
          >
            <div className="relative">
              <Input
                type="search"
                placeholder="Search for upcycled products..."
                className="w-full pl-10 pr-4 py-2 rounded-full border-muted focus:border-primary focus:ring-primary"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5" />
            </div>
          </form>
        )}

        {/* Categories Navigation */}
        <div className="mt-4 flex items-center justify-center overflow-x-auto">
          <nav className="flex space-x-4 px-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className={`whitespace-nowrap text-sm font-medium ${
                  category.name === "Sell" 
                    ? "text-destructive hover:text-destructive/80" 
                    : "text-primary hover:text-accent"
                }`}
              >
                {category.name === "Sell" ? (
                  <span className="flex items-center">
                    <Package className="h-4 w-4 mr-1" />
                    {category.name}
                  </span>
                ) : (
                  category.name
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu - Only visible when menu is open on mobile */}
        {isMobile && isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background pt-16">
            <div className="container mx-auto p-4">
              <div className="flex flex-col space-y-4">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.path}
                    className={`text-lg font-medium py-2 border-b border-secondary ${
                      category.name === "Sell" 
                        ? "text-destructive hover:text-destructive/80 flex items-center" 
                        : "text-primary hover:text-accent"
                    }`}
                    onClick={toggleMenu}
                  >
                    {category.name === "Sell" ? (
                      <>
                        <Package className="h-5 w-5 mr-2" />
                        {category.name}
                      </>
                    ) : (
                      category.name
                    )}
                  </Link>
                ))}
                <Link
                  to="/favorites"
                  className="text-lg font-medium text-primary hover:text-accent py-2 border-b border-secondary flex items-center"
                  onClick={toggleMenu}
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Favorites
                </Link>
                <Link
                  to="/account"
                  className="text-lg font-medium text-primary hover:text-accent py-2 border-b border-secondary flex items-center"
                  onClick={toggleMenu}
                >
                  <User className="h-5 w-5 mr-2" />
                  Account
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
