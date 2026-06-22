/* Dunia Safi Uses Section — Clean Wave Manifesto
 * Interactive tabs showing 4 multipurpose uses
 * Animated icons and descriptions
 */
import { useEffect, useRef, useState } from "react";
import { Hand, Shirt, UtensilsCrossed, Home, Check } from "lucide-react";

const uses = [
  {
    id: "body",
    icon: Hand,
    title: "Personal Hygiene",
    headline: "CLEAN SKIN,\nCONFIDENT YOU",
    desc: "Dunia Safi's gentle formula cleanses deeply while nourishing your skin. Perfect for daily bathing — leaves you feeling fresh, clean, and protected all day long.",
    points: [
      "Kills 99.9% of germs",
      "Gentle on the skin",
      "Long-lasting fragrance",
      "Rich creamy lather",
    ],
    color: "from-red-500 to-red-700",
    bg: "bg-red-600",
    light: "bg-red-50",
    text: "text-red-600",
    border: "border-red-200",
  },
  {
    id: "laundry",
    icon: Shirt,
    title: "Laundry",
    headline: "BRILLIANTLY\nCLEAN CLOTHES",
    desc: "Tough on stains, gentle on fabrics. Dunia Safi cuts through grease and grime, leaving your clothes fresh and bright. Works on all fabric types.",
    points: [
      "Removes tough stains",
      "Brightens whites",
      "Safe for all fabrics",
      "Easy to rinse",
    ],
    color: "from-green-500 to-green-700",
    bg: "bg-green-600",
    light: "bg-green-50",
    text: "text-green-600",
    border: "border-green-200",
  },
  {
    id: "dishes",
    icon: UtensilsCrossed,
    title: "Dishwashing",
    headline: "SPARKLING\nCLEAN DISHES",
    desc: "Cuts through grease and food residue with ease. A small amount creates a rich lather that leaves your dishes spotlessly clean and hygienically safe.",
    points: [
      "Cuts through grease",
      "Leaves no residue",
      "Hygienic clean",
      "Economical to use",
    ],
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-500",
    light: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-200",
  },
  {
    id: "home",
    icon: Home,
    title: "Home Cleaning",
    headline: "A SPOTLESS\nHOME AWAITS",
    desc: "From bathroom tiles to kitchen surfaces, Dunia Safi tackles household cleaning with power. One bar handles floors, surfaces, and more.",
    points: [
      "Multi-surface cleaning",
      "Removes mold & mildew",
      "Fresh clean scent",
      "Value for money",
    ],
    color: "from-teal-500 to-teal-700",
    bg: "bg-teal-600",
    light: "bg-teal-50",
    text: "text-teal-600",
    border: "border-teal-200",
  },
];

export default function UsesSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const handleTabChange = (i: number) => {
    if (i === active || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActive(i);
      setIsAnimating(false);
    }, 200);
  };

  const use = uses[active];

  return (
    <section id="uses" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background wave */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" fill="oklch(0.12 0.01 285)" />
        </svg>
      </div>

      <div className="container relative">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-accent text-red-600 text-2xl block mb-2">Multipurpose</span>
          <h2 className="font-display text-5xl md:text-6xl text-gray-900 mb-4">
            ONE BAR,
            <br />
            <span className="text-gradient-green">FOUR POWERS</span>
          </h2>
          <p className="font-body text-gray-600 text-lg max-w-xl mx-auto">
            Why buy four products when one does everything? Dunia Safi is your all-in-one cleaning solution.
          </p>
        </div>

        {/* Uses image banner */}
        <div className="rounded-3xl overflow-hidden mb-12 shadow-xl reveal">
          <img
            src="/manus-storage/ChatGPTImageJun22,2026,12_17_38PM_08ba8dc8.png"
            alt="Dunia Safi 4 uses"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {uses.map((u, i) => (
            <button
              key={u.id}
              onClick={() => handleTabChange(i)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-body font-medium text-sm transition-all duration-200 ${
                active === i
                  ? `${u.bg} text-white shadow-lg`
                  : `bg-gray-100 text-gray-600 hover:bg-gray-200`
              }`}
            >
              <u.icon size={16} />
              {u.title}
            </button>
          ))}
        </div>

        {/* Active use content */}
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center transition-opacity duration-200 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Left: Icon + headline */}
          <div className="reveal-left">
            <div className={`inline-flex w-20 h-20 rounded-3xl ${use.bg} items-center justify-center mb-6 shadow-lg`}>
              <use.icon size={36} className="text-white" />
            </div>
            <h3
              className="font-display text-5xl md:text-6xl text-gray-900 mb-6 leading-tight"
              style={{ whiteSpace: "pre-line" }}
            >
              {use.headline}
            </h3>
            <p className="font-body text-gray-600 text-lg leading-relaxed mb-8">{use.desc}</p>
            <div className="grid grid-cols-2 gap-3">
              {use.points.map((point) => (
                <div key={point} className={`flex items-center gap-2.5 p-3 rounded-xl ${use.light} ${use.border} border`}>
                  <div className={`w-5 h-5 rounded-full ${use.bg} flex items-center justify-center flex-shrink-0`}>
                    <Check size={11} className="text-white" />
                  </div>
                  <span className={`font-body text-sm font-medium ${use.text}`}>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="reveal-right">
            <div className={`rounded-3xl bg-gradient-to-br ${use.color} p-8 text-white relative overflow-hidden shadow-2xl`}>
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/10 -translate-y-1/3 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/10 translate-y-1/3 -translate-x-1/3" />

              <div className="relative z-10">
                <use.icon size={64} className="text-white/80 mb-6" />
                <h4 className="font-display text-4xl mb-3">{use.title.toUpperCase()}</h4>
                <p className="font-body text-white/80 text-base leading-relaxed mb-6">{use.desc}</p>

                {/* Progress bars */}
                <div className="space-y-3">
                  {[
                    { label: "Cleaning Power", value: 95 },
                    { label: "Skin Safety", value: 98 },
                    { label: "Value for Money", value: 100 },
                  ].map((bar) => (
                    <div key={bar.label}>
                      <div className="flex justify-between mb-1">
                        <span className="font-body text-xs text-white/70">{bar.label}</span>
                        <span className="font-body text-xs text-white font-semibold">{bar.value}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/20">
                        <div
                          className="h-full rounded-full bg-white transition-all duration-700"
                          style={{ width: `${bar.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
