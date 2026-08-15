import { useState } from "react";
import { Heart, ShoppingBag, User, Menu, X } from "lucide-react";

/**
 * Navbar
 * - "Collections" and "Shop" route to their own pages (/collections, /shop)
 * - "Our Story" and "Journal" scroll to in-page sections on the Home page
 * - "Home" routes to "/"
 *
 * Swap <a> tags for your router's <Link> (react-router-dom) when you wire up routing:
 *   import { Link } from "react-router-dom";
 *   <Link to="/collections">Collections</Link>
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="w-full bg-sand/95 backdrop-blur-sm border-b border-cocoa/10 sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <img src="/assets/paara-logo.png" alt="Paara Jewellery" className="h-9 md:h-10 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] tracking-wide text-cocoa">
          <a href="/" className="border-b border-gold pb-1 text-gold">
            Home
          </a>
          <a href="/collections" className="hover:text-gold transition-colors">
            Collections
          </a>
          <a href="/shop" className="hover:text-gold transition-colors">
            Shop
          </a>
          <a href="#our-story" onClick={scrollToSection("our-story")} className="hover:text-gold transition-colors">
            Our Story
          </a>
          <a href="#journal" onClick={scrollToSection("journal")} className="hover:text-gold transition-colors">
            Journal
          </a>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-6 text-cocoa">
          <button aria-label="Wishlist" className="hover:text-gold transition-colors">
            <Heart size={20} strokeWidth={1.4} />
          </button>
          <button aria-label="Cart" className="hover:text-gold transition-colors">
            <ShoppingBag size={20} strokeWidth={1.4} />
          </button>
          <button aria-label="Account" className="hover:text-gold transition-colors">
            <User size={20} strokeWidth={1.4} />
          </button>
          <button aria-label="Menu" className="hover:text-gold transition-colors">
            <Menu size={20} strokeWidth={1.4} />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-cocoa"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} strokeWidth={1.4} /> : <Menu size={24} strokeWidth={1.4} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden flex flex-col gap-5 px-6 pb-6 text-cocoa text-[15px]">
          <a href="/" className="text-gold">Home</a>
          <a href="/collections">Collections</a>
          <a href="/shop">Shop</a>
          <a href="#our-story" onClick={scrollToSection("our-story")}>Our Story</a>
          <a href="#journal" onClick={scrollToSection("journal")}>Journal</a>
          <div className="flex items-center gap-6 pt-2 border-t border-cocoa/10 mt-2">
            <Heart size={20} strokeWidth={1.4} />
            <ShoppingBag size={20} strokeWidth={1.4} />
            <User size={20} strokeWidth={1.4} />
          </div>
        </nav>
      )}
    </header>
  );
}
