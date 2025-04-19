
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, ShoppingBag, Bell, Settings, LogIn } from 'lucide-react';

const Account = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl font-bold text-primary mb-8">My Account</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <Card className="border-secondary/50">
                <CardHeader className="bg-primary/5 border-b border-secondary/50">
                  <CardTitle className="text-primary">Account</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="flex flex-col">
                    <Link to="/account?tab=profile" className="flex items-center gap-2 p-4 border-b border-secondary/50 text-primary hover:bg-secondary/20">
                      <User size={16} />
                      <span>Profile</span>
                    </Link>
                    <Link to="/account?tab=orders" className="flex items-center gap-2 p-4 border-b border-secondary/50 text-primary hover:bg-secondary/20">
                      <ShoppingBag size={16} />
                      <span>Orders</span>
                    </Link>
                    <Link to="/account?tab=notifications" className="flex items-center gap-2 p-4 border-b border-secondary/50 text-primary hover:bg-secondary/20">
                      <Bell size={16} />
                      <span>Notifications</span>
                    </Link>
                    <Link to="/account?tab=settings" className="flex items-center gap-2 p-4 text-primary hover:bg-secondary/20">
                      <Settings size={16} />
                      <span>Settings</span>
                    </Link>
                  </nav>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-9">
              <Card className="border-secondary/50">
                <CardHeader className="border-b border-secondary/50">
                  <CardTitle className="text-primary">Login Required</CardTitle>
                  <CardDescription>
                    You need to be logged in to access your account features
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <LogIn className="w-16 h-16 mx-auto text-primary mb-4" />
                    <h2 className="text-xl font-semibold text-primary mb-2">Authentication Required</h2>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      To access your profile, orders, notifications, and account settings, 
                      please login or create an account.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                      <Button asChild variant="default" className="bg-primary hover:bg-accent text-primary-foreground w-full">
                        <Link to="/login">Login</Link>
                      </Button>
                      <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full">
                        <Link to="/signup">Create Account</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
