
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

  return (
    <header className="sticky top-0 z-50 bg-pure-white/95 backdrop-blur-sm border-b border-ice-fog">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
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
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-midnight-brief"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
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
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Link to="/signin" className="text-sm font-semibold leading-6 text-midnight-brief hover:text-slate-docket transition-colors">
            Sign In
          </Link>
          <Link to="/contact">
            <Button className="bg-slate-docket hover:bg-slate-docket/90 text-pure-white btn-ripple">
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-pure-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="font-garamond text-xl font-bold text-midnight-brief tracking-garamond">
                  White Shoe
                </span>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-midnight-brief"
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 transition-colors hover:bg-ice-fog ${
                        location.pathname === item.href
                          ? "text-slate-docket bg-ice-fog"
                          : "text-midnight-brief"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <Link
                    to="/signin"
                    className="text-base font-medium text-midnight-brief hover:text-slate-docket transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button className="w-full bg-slate-docket hover:bg-slate-docket/90 text-pure-white">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
