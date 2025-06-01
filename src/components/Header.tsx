
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Platform", href: "/platform" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Pricing", href: "/pricing" },
  { name: "Resources", href: "/resources" },
  { name: "About", href: "/about" },
  { name: "Security", href: "/security" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-pure-white/95 backdrop-blur-sm border-b border-ice-fog">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5" onClick={closeMobileMenu}>
            <span className="font-garamond text-2xl font-bold text-midnight-brief tracking-garamond">
              White Shoe
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-midnight-brief hover:bg-ice-fog transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium leading-6 transition-colors hover:text-slate-docket ${
                location.pathname === item.href
                  ? "text-slate-docket"
                  : "text-midnight-brief"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
          <Link to="/signin" className="flex items-center px-3 py-2 text-sm font-semibold leading-6 text-midnight-brief hover:text-slate-docket transition-colors">
            Sign In
          </Link>
          <Link to="/contact">
            <Button className="bg-slate-docket hover:bg-slate-docket/90 text-pure-white btn-ripple">
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>
      
      {/* Mobile Menu - Full Screen Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40 bg-midnight-brief/20 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeMobileMenu}
          />
          
          {/* Full Screen Menu */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full">
              {/* Menu Content */}
              <div className="relative ml-auto flex w-full max-w-xs flex-col bg-pure-white shadow-2xl animate-slide-in-right">
                
                {/* Header Section */}
                <div className="flex items-center justify-between px-6 py-6 border-b border-ice-fog bg-pure-white">
                  <Link to="/" onClick={closeMobileMenu} className="flex-shrink-0">
                    <span className="font-garamond text-xl font-bold text-midnight-brief tracking-garamond">
                      White Shoe
                    </span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={closeMobileMenu}
                    className="h-10 w-10 rounded-full text-midnight-brief hover:bg-ice-fog transition-colors"
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                
                {/* Navigation Section */}
                <div className="flex-1 overflow-y-auto px-6 py-8">
                  <nav className="space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={closeMobileMenu}
                        className={`group flex items-center rounded-lg px-4 py-4 text-base font-medium transition-all duration-200 ${
                          location.pathname === item.href
                            ? "bg-slate-docket text-pure-white shadow-sm"
                            : "text-midnight-brief hover:bg-ice-fog hover:text-slate-docket"
                        }`}
                      >
                        <span className="truncate">{item.name}</span>
                        {location.pathname === item.href && (
                          <div className="ml-auto h-2 w-2 rounded-full bg-pure-white" />
                        )}
                      </Link>
                    ))}
                  </nav>
                </div>
                
                {/* Auth Section */}
                <div className="border-t border-ice-fog bg-pure-white px-6 py-6">
                  <div className="space-y-4">
                    <Link
                      to="/signin"
                      onClick={closeMobileMenu}
                      className="flex w-full items-center justify-center rounded-lg border border-ice-fog px-4 py-3 text-base font-medium text-midnight-brief hover:bg-ice-fog transition-colors"
                    >
                      Sign In
                    </Link>
                    <Link to="/contact" onClick={closeMobileMenu} className="block">
                      <Button className="w-full bg-slate-docket hover:bg-slate-docket/90 text-pure-white py-3 text-base font-medium btn-ripple">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Footer Info */}
                  <div className="mt-6 pt-4 border-t border-ice-fog">
                    <p className="text-xs text-slate-docket/60 text-center">
                      © 2024 White Shoe AI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
