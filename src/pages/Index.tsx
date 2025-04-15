
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoryShowcase from "@/components/CategoryShowcase";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <CategoryShowcase />
        <section className="py-16 portflex-gradient">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Join Our Upcycling Community</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Discover unique items, connect with makers, and be part of the 
              sustainable shopping movement.
            </p>
            <div className="flex justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 min-w-[250px] rounded-l-full focus:outline-none"
              />
              <button className="bg-portflex-purple hover:bg-opacity-90 text-white px-6 py-3 rounded-r-full transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
