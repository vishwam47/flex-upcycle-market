
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Info } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-secondary/10">
        <div className="container mx-auto px-4 flex justify-center">
          <Card className="w-full max-w-md border-secondary/50">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-serif text-primary">Sign in</CardTitle>
              <CardDescription>
                Enter your email and password to access your account
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="bg-accent/10 text-accent rounded-lg p-3 flex items-start">
                <Info className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>This is a demo application without a connected backend.</p>
                  <p className="mt-1">To implement authentication, please connect Supabase to your Lovable project.</p>
                </div>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" />
              </div>
              
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/forgot-password" className="text-sm text-accent hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm">Remember me</Label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full bg-primary hover:bg-accent text-primary-foreground mb-4">
                Sign In
              </Button>
              <div className="text-center text-sm">
                Don't have an account?{" "}
                <Link to="/signup" className="text-accent hover:underline">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
