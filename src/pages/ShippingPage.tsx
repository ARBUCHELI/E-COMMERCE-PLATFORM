import React from "react";
import Footer from "@/components/Footer/Footer";
import { Truck, Clock, Globe, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ShippingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <Truck className="w-8 h-8 text-primary mr-2" />
          </div>
          <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Shipping Information
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Fast, reliable shipping to your doorstep
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-primary" />
                <CardTitle>Standard Shipping</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our standard shipping option delivers your order in 5-7 business days.
              </p>
              <p className="font-semibold">Free on orders over $50</p>
              <p className="text-sm text-muted-foreground">$5.99 for orders under $50</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Package className="w-6 h-6 text-primary" />
                <CardTitle>Express Shipping</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Need it fast? Express shipping delivers in 2-3 business days.
              </p>
              <p className="font-semibold">$14.99 flat rate</p>
              <p className="text-sm text-muted-foreground">Available at checkout</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-lg mb-8">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Globe className="w-6 h-6 text-primary" />
              <CardTitle>International Shipping</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We ship to most countries worldwide. International delivery times vary by destination.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Canada & Mexico: 7-10 business days</li>
              <li>• Europe: 10-14 business days</li>
              <li>• Asia & Australia: 14-21 business days</li>
              <li>• Other regions: Contact us for details</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Note: International orders may be subject to customs fees and import duties.
            </p>
          </CardContent>
        </Card>

        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Tracking Your Order</h2>
          <p className="text-muted-foreground mb-4">
            Once your order ships, you'll receive a confirmation email with a tracking number. Use this number to track your package in real-time on our shipping partner's website.
          </p>
          <p className="text-muted-foreground">
            Please allow 24-48 hours after shipment for tracking information to become available.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShippingPage;