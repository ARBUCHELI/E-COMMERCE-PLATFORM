import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import { AuthModal } from "@/components/auth/AuthModal";
import { CartSidebar } from "@/components/CartSidebar/CartSidebar";

const Header = () => {
  const { user, signOut } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authTab, setAuthTab] = useState<'signin' | 'signup'>('signin');

  const handleAuthClick = (tab: 'signin' | 'signup') => {
    setAuthTab(tab);
    setShowAuthModal(true);
  };

  return (
    <header className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold text-foreground cursor-pointer hover:text-primary transition-colors">ShopApp</h1>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors">
              Products
            </Link>
            <Link to="/categories" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors">
              Categories
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors">
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <CartSidebar />
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex space-x-2">
                <Button variant="ghost" onClick={() => handleAuthClick('signin')}>
                  Sign In
                </Button>
                <Button onClick={() => handleAuthClick('signup')}>
                  Sign Up
                </Button>
              </div>
            )}
            
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
        defaultTab={authTab}
      />
    </header>
  );
};

export { Header };