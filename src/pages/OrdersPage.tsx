import React from "react";
import Footer from "@/components/Footer/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const OrdersPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Card className="border-0 shadow-lg max-w-md mx-auto text-center">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4">Please sign in to view your orders</p>
              <Button onClick={() => navigate("/")}>Go Home</Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <Package className="w-8 h-8 text-primary mr-2" />
          </div>
          <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Order History
          </h1>
          <p className="text-xl text-muted-foreground text-center">
            View your past orders and track current shipments
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="border-0 shadow-lg">
          <CardContent className="pt-6 text-center py-12">
            <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">You haven't placed any orders yet</p>
            <Button onClick={() => navigate("/products")}>Start Shopping</Button>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default OrdersPage;