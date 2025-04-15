import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, Heart, User } from "lucide-react";
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
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-portflex-purple flex items-center justify-center">
              <span className="text-2xl font-serif text-white">P</span>
            </div>
            <h1 className="text-2xl font-serif">
              <span className="text-portflex-purple">Port</span>
              <span className="text-portflex-lavender">Flex</span>
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
                  className="w-full pl-10 pr-4 py-2 rounded-full border-portflex-lavender focus:border-portflex-purple focus:ring-portflex-purple"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-portflex-purple h-5 w-5" />
              </div>
            </form>
          )}

          {/* Navigation Links - Hidden on mobile */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-1">
              <Link to="/favorites">
                <Button variant="ghost" size="icon" className="text-portflex-purple hover:text-portflex-lavender hover:bg-portflex-light">
                  <Heart className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="text-portflex-purple hover:text-portflex-lavender hover:bg-portflex-light">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/account">
                <Button variant="ghost" size="icon" className="text-portflex-purple hover:text-portflex-lavender hover:bg-portflex-light">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <div className="flex items-center space-x-2">
              <Link to="/search">
                <Button variant="ghost" size="icon" className="text-portflex-purple">
                  <Search className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="text-portflex-purple">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="ghost" onClick={toggleMenu} size="icon" className="text-portflex-purple">
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
                className="w-full pl-10 pr-4 py-2 rounded-full border-portflex-lavender focus:border-portflex-purple focus:ring-portflex-purple"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-portflex-purple h-5 w-5" />
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
                className="whitespace-nowrap text-sm text-portflex-purple hover:text-portflex-lavender"
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu - Only visible when menu is open on mobile */}
        {isMobile && isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white pt-16">
            <div className="container mx-auto p-4">
              <div className="flex flex-col space-y-4">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.path}
                    className="text-lg font-medium text-portflex-purple hover:text-portflex-lavender py-2 border-b border-portflex-light"
                    onClick={toggleMenu}
                  >
                    {category.name}
                  </Link>
                ))}
                <Link
                  to="/favorites"
                  className="text-lg font-medium text-portflex-purple hover:text-portflex-lavender py-2 border-b border-portflex-light flex items-center"
                  onClick={toggleMenu}
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Favorites
                </Link>
                <Link
                  to="/account"
                  className="text-lg font-medium text-portflex-purple hover:text-portflex-lavender py-2 border-b border-portflex-light flex items-center"
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
