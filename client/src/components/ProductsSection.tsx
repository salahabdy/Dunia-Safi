/* Pure Earth Enterprises — Dunia Safi Products Section
 * Real product specs with bulk pricing and shopping cart
 */
import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, ShoppingCart, Info } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const products = [
  {
    id: "1kg-cream",
    name: "Dunia Safi 1kg",
    size: "1kg",
    color: "Cream",
    boxes: 10,
    price: 1300,
    moq: 10,
    image: "/manus-storage/1kg-cream-soap_bc53d065.jpg",
    features: ["10 bars per box", "Multipurpose", "Bulk pricing"],
    rating: 4.9,
    reviews: 1240,
    badge: "Popular",
    badgeColor: "bg-red-500",
  },
  {
    id: "1kg-white",
    name: "Dunia Safi 1kg",
    size: "1kg",
    color: "White",
    boxes: 10,
    price: 1550,
    moq: 10,
    image: "/manus-storage/1kg-white-soap-opt_ca86cd35.jpg",
    features: ["10 bars per box", "Multipurpose", "Premium"],
    rating: 4.8,
    reviews: 890,
    badge: "Premium",
    badgeColor: "bg-green-500",
  },
  {
    id: "175g-cream",
    name: "Dunia Safi 175g",
    size: "175g",
    color: "Cream",
    boxes: 48,
    price: 1150,
    moq: 10,
    image: "/manus-storage/175g_cream_38cb60a4.jpg",
    features: ["48 pieces per box", "Portable", "Value"],
    rating: 4.9,
    reviews: 2100,
    badge: "Best Value",
    badgeColor: "bg-amber-500",
  },
  {
    id: "175g-white",
    name: "Dunia Safi 175g",
    size: "175g",
    color: "White",
    boxes: 48,
    price: 1350,
    moq: 10,
    image: "/manus-storage/175g_white_770be451.jpg",
    features: ["48 pieces per box", "Portable", "Premium"],
    rating: 5.0,
    reviews: 1500,
    badge: "Premium",
    badgeColor: "bg-green-600",
  },
];

export default function ProductsSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const reveals = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const product = products[active];

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      size: product.size,
      color: product.color,
      price: product.price,
      moq: product.moq,
      quantity: product.moq,
    });
    toast.success(`Added ${product.name} (${product.color}) to cart!`);
  };

  return (
    <section id="products" ref={sectionRef} className="py-24 relative overflow-hidden" style={{ background: "oklch(0.12 0.01 285)" }}>
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, oklch(0.495 0.228 26.5) 0%, transparent 50%), radial-gradient(circle at 80% 50%, oklch(0.48 0.145 142) 0%, transparent 50%)",
        }}
      />

      <div className="container relative">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-accent text-red-400 text-2xl block mb-2">Our Range</span>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-4">
            DUNIA SAFI
            <br />
            <span className="text-gradient-red">PRODUCTS</span>
          </h2>
          <p className="font-body text-gray-400 text-lg max-w-xl mx-auto">
            Premium cleaning solutions for every need. Currently offering multipurpose bar soap with more products coming soon.
          </p>
        </div>

        {/* Product Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full font-body font-medium text-sm transition-all duration-200 ${
                active === i
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10"
              }`}
            >
              {p.size} • {p.color}
            </button>
          ))}
        </div>

        {/* Main Product Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Product Image */}
          <div className="reveal-left relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src={product.image}
                alt={`${product.name} - ${product.color}`}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-transparent" />

              {/* Badge */}
              <div className={`absolute top-5 left-5 ${product.badgeColor} text-white text-xs font-body font-bold px-3 py-1.5 rounded-full shadow-lg`}>
                {product.badge}
              </div>

              {/* Rating */}
              <div className="absolute bottom-5 left-5 bg-white/15 backdrop-blur-md rounded-xl px-4 py-2.5 border border-white/20">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-gray-400"}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="font-body font-semibold text-white text-xs ml-1">{product.rating}</span>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setActive((active - 1 + products.length) % products.length)}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2 items-center">
                {products.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-200 ${
                      i === active ? "w-6 h-2 bg-red-500" : "w-2 h-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActive((active + 1) % products.length)}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="reveal-right">
            <div className="mb-2">
              <span className="font-accent text-red-400 text-xl">Bulk Order</span>
            </div>
            <h3 className="font-display text-5xl text-white mb-1">{product.name}</h3>
            <p className="font-body text-gray-400 text-lg mb-6">{product.color} • {product.size}</p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8 p-5 rounded-2xl bg-white/5 border border-white/10">
              <div>
                <p className="font-body text-gray-400 text-xs mb-1">Pieces per Box</p>
                <p className="font-display text-3xl text-white">{product.boxes}</p>
              </div>
              <div>
                <p className="font-body text-gray-400 text-xs mb-1">Minimum Order</p>
                <p className="font-display text-3xl text-white">{product.moq}</p>
              </div>
              <div>
                <p className="font-body text-gray-400 text-xs mb-1">Price per Box</p>
                <p className="font-display text-2xl text-red-400">KES {product.price.toLocaleString()}</p>
              </div>
              <div>
                <p className="font-body text-gray-400 text-xs mb-1">Min Total</p>
                <p className="font-display text-2xl text-green-400">KES {(product.price * product.moq).toLocaleString()}</p>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-8">
              {product.features.map((f) => (
                <span
                  key={f}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white text-sm font-body"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  {f}
                </span>
              ))}
            </div>

            {/* Info box */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 mb-6 flex gap-3">
              <Info size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-body text-xs text-amber-200">
                  <strong>Bulk Order:</strong> Minimum {product.moq} boxes required. Order via WhatsApp for fastest response.
                </p>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleAddToCart}
              className="btn-brand-red w-full justify-center text-base flex items-center gap-2"
            >
              <ShoppingCart size={18} />
              Add to Cart ({product.moq} boxes)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
