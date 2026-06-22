/* Dunia Safi Home Page — Clean Wave Manifesto Design
 * Assembles all sections: Hero, About, Products, Uses, WhyUs, Contact, Footer
 */
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSlideshow from "@/components/HeroSlideshow";
import BubblesBanner from "@/components/BubblesBanner";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import UsesSection from "@/components/UsesSection";
import WhyUsSection from "@/components/WhyUsSection";
import WholesaleSection from "@/components/WholesaleSection";
import ComingSoonSection from "@/components/ComingSoonSection";
import LocationMap from "@/components/LocationMap";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { ArrowUp } from "lucide-react";

export default function Home() {
  const [showTop, setShowTop] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <HeroSlideshow />
      <BubblesBanner />
      <AboutSection />
      <ProductsSection />
      <UsesSection />
      <WhyUsSection />
      <WholesaleSection />
      <ComingSoonSection />
      <LocationMap />
      <ContactSection />
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      {/* Floating contact buttons */}
      <FloatingContactButtons />
      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-red-600 text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:bg-red-700 hover:scale-110 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
