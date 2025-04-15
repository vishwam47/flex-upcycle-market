
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Users, Star } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/5 py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary text-center mb-6">
              Our Story
            </h1>
            <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
              Empowering artisans and promoting sustainability through upcycled craftsmanship.
            </p>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create a global marketplace where creativity meets sustainability, 
                transforming discarded materials into beautiful, functional pieces that 
                tell unique stories and contribute to a more sustainable future.
              </p>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-primary text-center mb-12">Meet Our Founders</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Sarah Chen",
                  role: "CEO & Co-Founder",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                  bio: "Passionate about sustainable design and circular economy."
                },
                {
                  name: "David Park",
                  role: "COO & Co-Founder",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                  bio: "Expert in sustainable supply chains and marketplace operations."
                },
                {
                  name: "Elena Martinez",
                  role: "Creative Director",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                  bio: "Award-winning designer focusing on upcycled materials."
                }
              ].map((founder) => (
                <div key={founder.name} className="text-center">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-serif text-xl font-bold text-primary">{founder.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{founder.role}</p>
                  <p className="text-sm text-muted-foreground">{founder.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-primary text-center mb-12">
              What Our Community Says
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  text: "PortFlex has transformed how I think about upcycled products. The quality and creativity are outstanding.",
                  author: "Maya Johnson",
                  role: "Interior Designer"
                },
                {
                  text: "As a seller, PortFlex has given me a platform to showcase my upcycled creations to a global audience.",
                  author: "Carlos Rodriguez",
                  role: "Artisan Seller"
                },
                {
                  text: "The vision and commitment to sustainability make PortFlex stand out in the marketplace landscape.",
                  author: "Emma Thompson",
                  role: "Environmental Consultant"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <Star className="text-primary w-4 h-4" />
                    <Star className="text-primary w-4 h-4" />
                    <Star className="text-primary w-4 h-4" />
                    <Star className="text-primary w-4 h-4" />
                    <Star className="text-primary w-4 h-4" />
                  </div>
                  <p className="font-serif text-lg italic mb-4">{testimonial.text}</p>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
