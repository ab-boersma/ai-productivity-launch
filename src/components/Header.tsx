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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-midnight-brief hover:bg-ice-fog"
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
        
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
      
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div 
            className="fixed inset-0 bg-black/50 z-40" 
            onClick={closeMobileMenu}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-pure-white bg-opacity-100 shadow-xl z-50">
            <div className="flex items-center justify-between p-6 border-b">
              <Link to="/" onClick={closeMobileMenu}>
                <span className="font-garamond text-xl font-bold text-midnight-brief">
                  White Shoe
                </span>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeMobileMenu}
                className="p-2"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-6">
              <nav className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      location.pathname === item.href
                        ? "bg-slate-docket text-white"
                        : "text-midnight-brief hover:bg-gray-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 space-y-3">
                <Link
                  to="/signin"
                  onClick={closeMobileMenu}
                  className="block w-full text-center px-4 py-3 border border-gray-300 rounded-lg text-base font-medium text-midnight-brief hover:bg-gray-50"
                >
                  Sign In
                </Link>
                <Link to="/contact" onClick={closeMobileMenu}>
                  <Button className="w-full bg-slate-docket hover:bg-slate-docket/90 text-white py-3 text-base">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
