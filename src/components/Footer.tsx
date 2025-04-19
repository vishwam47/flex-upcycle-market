
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-secondary">
      <div className="container mx-auto p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">
              <span className="text-primary">Port</span>
              <span className="text-accent">Flex</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              A marketplace for beautifully crafted upcycled products that reduce waste and help the planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-accent">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary hover:text-accent">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary hover:text-accent">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-primary">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/furniture" className="text-muted-foreground hover:text-accent">
                  Furniture
                </Link>
              </li>
              <li>
                <Link to="/category/fashion" className="text-muted-foreground hover:text-accent">
                  Fashion
                </Link>
              </li>
              <li>
                <Link to="/category/decor" className="text-muted-foreground hover:text-accent">
                  Home Decor
                </Link>
              </li>
              <li>
                <Link to="/category/jewelry" className="text-muted-foreground hover:text-accent">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link to="/category/art" className="text-muted-foreground hover:text-accent">
                  Art
                </Link>
              </li>
              <li>
                <Link to="/sellers" className="text-destructive hover:text-destructive/80">
                  Sell Your Products
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-primary">About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-accent">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-muted-foreground hover:text-accent">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/sellers" className="text-muted-foreground hover:text-accent">
                  Sellers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-accent">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-accent">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-primary">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-accent">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-accent">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted-foreground hover:text-accent">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-accent">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-accent">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary mt-8 pt-8">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} PortFlex. All rights reserved. Upcycled with 💚
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
