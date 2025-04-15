
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileUpload, Package, DollarSign } from "lucide-react";

const Sellers = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically connect to your backend
    console.log("Product submitted");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-primary/5 py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl font-bold text-primary text-center mb-6">
              Sell Your Upcycled Creations
            </h1>
            <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our community of creative artisans and reach customers who value sustainable, unique products.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <Label htmlFor="productName">Product Name</Label>
                <Input id="productName" placeholder="Enter product name" required />
              </div>

              <div className="space-y-4">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your product and its upcycled journey..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input 
                    id="price" 
                    type="number" 
                    min="0" 
                    step="0.01" 
                    placeholder="0.00"
                    required
                  />
                </div>
                <div className="space-y-4">
                  <Label htmlFor="category">Category</Label>
                  <select 
                    id="category"
                    className="w-full border rounded-md h-10 px-3"
                    required
                  >
                    <option value="">Select category</option>
                    <option value="furniture">Furniture</option>
                    <option value="fashion">Fashion</option>
                    <option value="decor">Home Decor</option>
                    <option value="jewelry">Jewelry</option>
                    <option value="art">Art</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <Label htmlFor="images">Product Images</Label>
                <div className="border-2 border-dashed border-primary/20 rounded-lg p-8 text-center">
                  <FileUpload className="mx-auto h-12 w-12 text-primary/40 mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Drag and drop your images here, or click to select files
                  </p>
                </div>
              </div>

              <Button type="submit" className="w-full">
                List Product
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sellers;
