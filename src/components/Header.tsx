import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAVIGATION_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto container-padding">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center text-2xl font-bold text-white">
              <span className="mr-2 opacity-90">🎙️</span>
              <span>
                Zenikast<span className="text-brand-red">.</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive =
                (item.href === "/" && window.location.pathname === "/") ||
                (item.href !== "/" &&
                  window.location.pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-semibold transition-all duration-300",
                    isActive
                      ? "text-white nav-active"
                      : "text-white/70 hover:text-white",
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Spacer for right alignment if needed, or keeping buttons */}
          <div className="hidden md:flex items-center">
            {/* Empty for now to match image which has nav items on the right */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center min-h-[48px] min-w-[48px] rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen
              ? "max-h-96 opacity-100 pb-6"
              : "max-h-0 opacity-0 pb-0",
          )}
        >
          <nav className="flex flex-col space-y-4 pt-4">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Button className="bg-white text-black hover:bg-white/90 font-bold rounded-full w-full h-12">
                Écouter maintenant
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
