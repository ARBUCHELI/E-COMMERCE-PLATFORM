import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

const AdvertisingCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Latest Electronics",
      subtitle: "Discover cutting-edge technology",
      description: "Up to 50% off on smartphones, laptops, and more",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=400&fit=crop",
      cta: "Shop Electronics",
      link: "/category/electronics",
      bgColor: "from-blue-600 to-blue-800"
    },
    {
      id: 2,
      title: "Fashion Forward",
      subtitle: "Style that speaks to you",
      description: "New arrivals in clothing and accessories",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=400&fit=crop",
      cta: "Shop Clothing",
      link: "/category/clothing",
      bgColor: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "Musical Instruments",
      subtitle: "Create your perfect sound",
      description: "Guitars, keyboards, drums and more",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=400&fit=crop",
      cta: "Shop Instruments",
      link: "/category/instruments",
      bgColor: "from-orange-600 to-red-600"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-[10px] shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? "translate-x-0" : 
            index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className={`relative w-full h-full bg-gradient-to-r ${slide.bgColor}`}>
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            {/* Content */}
            <div className="relative z-10 flex items-center h-full px-8 md:px-16">
              <div className="max-w-lg text-white">
                <h3 className="text-sm font-medium mb-2 opacity-90">
                  {slide.subtitle}
                </h3>
                <h2 className="text-4xl md:text-6xl font-bold mb-4 font-primary">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6 opacity-90">
                  {slide.description}
                </p>
                <Button 
                  className="bg-secondary hover:bg-secondary-hover text-secondary-foreground font-semibold px-8 py-3 text-lg rounded-[10px]"
                  onClick={() => window.location.href = slide.link}
                >
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AdvertisingCarousel;