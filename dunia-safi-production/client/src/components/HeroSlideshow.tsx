/* Dunia Safi Hero Slideshow — Clean Wave Manifesto Design
 * Full-screen hero with 3 auto-advancing slides
 * Animated floating bubbles, bold Bebas Neue headlines
 * Smooth crossfade transitions
 */
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Droplets } from "lucide-react";

const slides = [
  {
    id: 0,
    image: "/manus-storage/cream-soap-hero_2d3a845e.jpg",
    tagline: "Simply the Best",
    headline: "ONE SOAP.",
    headline2: "ENDLESS CLEAN.",
    sub: "The multipurpose bar soap trusted by over 100,000 families. Powerful, reliable, and built for every task.",
    cta: "Discover the Clean",
    ctaHref: "#products",
    accent: "rgba(227, 30, 36, 0.85)",
  },
  {
    id: 1,
    image: "/manus-storage/white-soap-spa_8e61c0c9.jpg",
    tagline: "Personal Care",
    headline: "CLEAN SKIN.",
    headline2: "CONFIDENT YOU.",
    sub: "Effective for daily personal care and family hygiene. Trusted by thousands of households across East Africa.",
    cta: "Learn More",
    ctaHref: "#about",
    accent: "rgba(30, 122, 46, 0.8)",
  },
  {
    id: 2,
    image: "/manus-storage/nature-soap-green_92f5f825.jpg",
    tagline: "Multipurpose",
    headline: "SPARKLING",
    headline2: "CLEAN HOME.",
    sub: "From laundry to dishes to floors — Dunia Safi does it all. One bar, infinite possibilities.",
    cta: "See All Uses",
    ctaHref: "#uses",
    accent: "rgba(227, 30, 36, 0.85)",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* Floating bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 80 + 20 + "px",
              height: Math.random() * 80 + 20 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 6 + 8}s ease-in-out infinite`,
              animationDelay: Math.random() * 2 + "s",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div className="max-w-2xl">
            {/* Tagline */}
            <div
              key={`tag-${current}`}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 mb-5 animate-slide-left"
            >
              <Droplets size={14} className="text-white" />
              <span className="font-accent text-white text-sm tracking-wider">{slides[current].tagline}</span>
            </div>

            {/* Headline */}
            <h1
              key={`head-${current}`}
              className="font-display text-6xl md:text-7xl lg:text-8xl text-white leading-tight mb-4 animate-slide-left"
              style={{ animationDelay: "100ms" }}
            >
              {slides[current].headline}
              <br />
              <span style={{ color: slides[current].accent }}>{slides[current].headline2}</span>
            </h1>

            {/* Description */}
            <p
              key={`desc-${current}`}
              className="font-body text-white/90 text-lg md:text-xl max-w-lg mb-8 animate-slide-left"
              style={{ animationDelay: "200ms" }}
            >
              {slides[current].sub}
            </p>

            {/* CTA */}
            <div
              key={`cta-${current}`}
              className="flex gap-4 animate-slide-left"
              style={{ animationDelay: "300ms" }}
            >
              <a
                href={slides[current].ctaHref}
                className="px-8 py-3.5 rounded-full bg-red-600 text-white font-display font-bold text-sm tracking-wide hover:bg-red-700 transition-all duration-200 hover:shadow-lg hover:shadow-red-600/50"
              >
                {slides[current].cta}
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full bg-white/20 border border-white/40 text-white font-display font-bold text-sm tracking-wide hover:bg-white/30 transition-all duration-200 backdrop-blur-sm"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
