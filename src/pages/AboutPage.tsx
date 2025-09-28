import Footer from "@/components/Footer/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Heart, Shield, Truck } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">About Us</Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            About ShopApp
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover the story behind our mission to bring you the best products at great prices with exceptional service.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="space-y-12">
          {/* Mission Section */}
          <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="text-muted-foreground leading-relaxed text-center text-lg">
                At ShopApp, we believe that shopping should be simple, enjoyable, and accessible to everyone. 
                Our mission is to provide high-quality products at competitive prices while delivering an 
                exceptional customer experience that exceeds expectations.
              </p>
            </CardContent>
          </Card>

          {/* Why Choose Us Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-muted-foreground text-lg">Experience the difference with our premium service</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Quality Products</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We carefully curate our product selection to ensure you receive only the finest quality items that meet our strict standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                      <Truck className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Fast Shipping</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Get your orders delivered quickly with our reliable shipping partners and real-time tracking system.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Customer Support</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Our friendly customer service team is here to help you with any questions or concerns 24/7.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Secure Shopping</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Shop with confidence knowing your personal and payment information is always protected with industry-leading security.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Section */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Get In Touch</CardTitle>
              <p className="text-muted-foreground">We'd love to hear from you</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-medium">@</span>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">support@shopapp.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-medium">📞</span>
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">1-800-SHOP-APP</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-medium">📍</span>
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">123 Commerce Street<br />Business City, BC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-medium">🕐</span>
                    </div>
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-muted-foreground">Monday - Friday: 9AM - 6PM PST</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;