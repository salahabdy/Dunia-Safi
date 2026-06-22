/* Dunia Safi Navbar — Clean Wave Manifesto Design
 * Transparent on hero, solid white on scroll
 * Red brand accent, DM Sans typography
 */
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Uses", href: "#uses" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

interface CartButtonProps {
  scrolled: boolean;
  onOpen: () => void;
}

function CartButton({ scrolled, onOpen }: CartButtonProps) {
  const { itemCount } = useCart();

  return (
    <button
      onClick={onOpen}
      className={`relative p-2.5 rounded-lg transition-colors ${
        scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/20"
      }`}
      aria-label="Shopping cart"
    >
      <ShoppingBag size={20} />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 text-white text-xs font-bold flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  );
}

interface NavbarProps {
  onCartOpen: () => void;
}

export default function Navbar({ onCartOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveLink(id);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex items-center gap-2"
          >
            <img
              src="/manus-storage/dunia-safi-logo_4911e785.webp"
              alt="Dunia Safi Logo"
              className={`transition-all duration-300 ${scrolled ? "h-12" : "h-14"}`}
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`font-body font-500 text-sm transition-all duration-200 relative group ${
                  scrolled ? "text-gray-800 hover:text-red-600" : "text-white hover:text-red-200"
                } ${activeLink === link.href.replace("#", "") ? (scrolled ? "text-red-600" : "text-red-200") : ""}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-red-500 transition-all duration-200 ${
                    activeLink === link.href.replace("#", "") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <CartButton scrolled={scrolled} onOpen={onCartOpen} />
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body font-semibold text-sm transition-all duration-200 ${
                scrolled
                  ? "bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg"
                  : "bg-white text-red-600 hover:bg-red-50"
              }`}
            >
              Contact
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/20"
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 pt-20">
            <img
              src="/manus-storage/dunia-safi-logo_4911e785.webp"
              alt="Dunia Safi"
              className="h-12 mb-8"
            />
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-800 hover:bg-red-50 hover:text-red-600 font-body font-medium transition-colors"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                className="btn-brand-red w-full justify-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
