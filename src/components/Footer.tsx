
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-portflex-light">
      <div className="container mx-auto p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4 text-portflex-purple">
              <span className="text-portflex-purple">Port</span>
              <span className="text-portflex-lavender">Flex</span>
            </h2>
            <p className="text-gray-600 mb-4">
              A marketplace for beautifully crafted upcycled products that reduce waste and help the planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-portflex-purple hover:text-portflex-lavender">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-portflex-purple hover:text-portflex-lavender">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-portflex-purple hover:text-portflex-lavender">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-portflex-purple">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/furniture" className="text-gray-600 hover:text-portflex-lavender">
                  Furniture
                </Link>
              </li>
              <li>
                <Link to="/category/fashion" className="text-gray-600 hover:text-portflex-lavender">
                  Fashion
                </Link>
              </li>
              <li>
                <Link to="/category/decor" className="text-gray-600 hover:text-portflex-lavender">
                  Home Decor
                </Link>
              </li>
              <li>
                <Link to="/category/jewelry" className="text-gray-600 hover:text-portflex-lavender">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link to="/category/art" className="text-gray-600 hover:text-portflex-lavender">
                  Art
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-portflex-purple">About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-portflex-lavender">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-gray-600 hover:text-portflex-lavender">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/sellers" className="text-gray-600 hover:text-portflex-lavender">
                  Sellers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-portflex-lavender">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-portflex-lavender">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-portflex-purple">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-portflex-lavender">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-600 hover:text-portflex-lavender">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-600 hover:text-portflex-lavender">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-portflex-lavender">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-portflex-lavender">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-portflex-light mt-8 pt-8">
          <p className="text-center text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} PortFlex. All rights reserved. Upcycled with 💜
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
