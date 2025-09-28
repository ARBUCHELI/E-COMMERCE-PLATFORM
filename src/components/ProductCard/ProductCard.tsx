import { ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/contexts/AuthContext";
import { AuthModal } from "@/components/auth/AuthModal";

interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  original_price: number | null;
  image_url: string | null;
  inventory_count: number | null;
  categories?: {
    name: string;
  };
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const discountPercentage = product.original_price 
    ? Math.round(((product.original_price - product.price) / product.original_price) * 100)
    : 0;

  const handleAddToCart = () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    addToCart(product.id);
  };

  const isOutOfStock = product.inventory_count !== null && product.inventory_count <= 0;

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image_url || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
          />
          {discountPercentage > 0 && (
            <Badge className="absolute top-2 left-2 bg-destructive">
              {discountPercentage}% OFF
            </Badge>
          )}
          {isOutOfStock && (
            <Badge variant="secondary" className="absolute top-2 right-2">
              Out of Stock
            </Badge>
          )}
        </div>
        
        <div className="p-4">
          <div className="mb-2">
            {product.categories && (
              <Badge variant="outline" className="text-xs mb-2">
                {product.categories.name}
              </Badge>
            )}
            <h3 className="font-semibold text-lg line-clamp-2 mb-1">
              {product.name}
            </h3>
            {product.description && (
              <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                {product.description}
              </p>
            )}
          </div>

          <div className="flex items-center gap-1 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < 4 ? 'fill-primary text-primary' : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(4.0)</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">${product.price}</span>
              {product.original_price && product.original_price > product.price && (
                <span className="text-muted-foreground line-through text-sm">
                  ${product.original_price}
                </span>
              )}
            </div>
            
            <Button
              onClick={handleAddToCart}
              disabled={isOutOfStock}
              size="sm"
              className="min-w-[100px]"
            >
              <ShoppingCart className="w-4 h-4 mr-1" />
              {isOutOfStock ? 'Sold Out' : user ? 'Add to Cart' : 'Sign In'}
            </Button>
          </div>
        </div>
      </CardContent>
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
        defaultTab="signin"
      />
    </Card>
  );
};