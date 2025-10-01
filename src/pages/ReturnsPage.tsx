import React from "react";
import Footer from "@/components/Footer/Footer";
import { RotateCcw, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ReturnsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <RotateCcw className="w-8 h-8 text-primary mr-2" />
          </div>
          <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Returns & Exchanges
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            We want you to love your purchase. If you're not satisfied, we're here to help.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">30-Day Return Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We offer a 30-day return policy on most items. If you're not completely satisfied with your purchase, you can return it for a full refund or exchange.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <h3 className="font-semibold mb-2">How to Return an Item</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Contact our customer service team to initiate a return</li>
                <li>Pack the item securely in its original packaging</li>
                <li>Include your order receipt or packing slip</li>
                <li>Ship to the address provided by our team</li>
                <li>Refund will be processed within 5-7 business days after receipt</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <CardTitle>Eligible for Return</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Items in original condition</li>
                <li>• All tags and packaging intact</li>
                <li>• Unused and unworn items</li>
                <li>• Within 30 days of purchase</li>
                <li>• Proof of purchase provided</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <XCircle className="w-6 h-6 text-red-500" />
                <CardTitle>Not Eligible for Return</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Final sale items</li>
                <li>• Items without tags</li>
                <li>• Worn or used products</li>
                <li>• Damaged by customer</li>
                <li>• Outside 30-day window</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Exchanges</h2>
          <p className="text-muted-foreground mb-4">
            Need a different size or color? We offer free exchanges on eligible items within 30 days of purchase.
          </p>
          <p className="text-muted-foreground">
            Contact our customer service team to arrange an exchange. We'll send your replacement item as soon as we receive your return.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReturnsPage;