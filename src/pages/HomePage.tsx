import React from "react";
import AdvertisingCarousel from "../components/AdvertisingCarousel/AdvertisingCarousel";
import Footer from "../components/Footer/Footer";
import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

const HomePage: React.FC = () => {
  const { products, loading, error } = useProducts();

  const ProductGridSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="h-48 w-full rounded-lg" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <div className="flex justify-between">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-8 w-20" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <div className="mb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-8">
        <AdvertisingCarousel />
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
          <p className="text-muted-foreground">Discover our latest and most popular items</p>
        </div>

        {loading && <ProductGridSkeleton />}
        
        {error && (
          <div className="text-center py-12">
            <p className="text-destructive mb-4">{error}</p>
            <p className="text-muted-foreground">Please try refreshing the page</p>
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products available at the moment</p>
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;