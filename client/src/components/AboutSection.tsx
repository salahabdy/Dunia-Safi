/* Dunia Safi About Section — Clean Wave Manifesto
 * Brand story, animated stats, leaf motif
 */
import { useEffect, useRef, useState } from "react";
import { Leaf, Shield, Sparkles, Heart } from "lucide-react";

const stats = [
  { value: 2024, suffix: "", label: "Founded" },
  { value: 100, suffix: "K+", label: "Families Served" },
  { value: 4, suffix: "", label: "Product Uses" },
  { value: 100, suffix: "%", label: "Customer Satisfaction" },
];

const values = [
  {
    icon: Leaf,
    title: "Quality Ingredients",
    desc: "Formulated with carefully selected ingredients for effective cleaning and skin care.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Shield,
    title: "Powerful Performance",
    desc: "Tackles tough cleaning jobs across home, laundry, and personal care with reliable results.",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    icon: Sparkles,
    title: "Rich Lather",
    desc: "Creates a luxuriously rich foam that penetrates deep to remove dirt, grease, and bacteria.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Heart,
    title: "Trusted by Families",
    desc: "Since 2024, Pure Earth has served over 100,000 families across East Africa with reliable products.",
    color: "text-red-600",
    bg: "bg-red-50",
  },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = Date.now();
          const raf = requestAnimationFrame(function tick() {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          });
          return () => cancelAnimationFrame(raf);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-red-50 -translate-y-1/2 translate-x-1/2 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-green-50 translate-y-1/2 -translate-x-1/2 blur-3xl opacity-60 pointer-events-none" />

      <div className="container relative">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <p className="font-display text-3xl md:text-4xl text-gray-900 mb-6 font-bold tracking-tight">PURE EARTH ENTERPRISES LTD</p>
          <h2 className="font-display text-5xl md:text-6xl text-gray-900 mb-4">
            <span className="text-black">STAY</span>
            <br />
            <span className="text-gradient-red">CLEAN</span>
          </h2>
          <p className="font-body text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Dunia Safi by Pure Earth Enterprises Ltd — crafted with a simple belief: every family deserves access to a powerful,
            reliable, and affordable cleaning solution. One bar that does it all.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center p-6 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 text-white reveal delay-${(i + 1) * 100}`}
            >
              <div className="font-display text-4xl md:text-5xl mb-1">
                {stat.suffix ? (
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                ) : (
                  <span>{stat.value}</span>
                )}
              </div>
              <div className="font-body text-sm text-red-100">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="reveal-left relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-section.jpg"
                alt="Dunia Safi branded product showcase"
                className="w-full h-[600px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Leaf className="text-green-600" size={22} />
                </div>
                <div>
                  <div className="font-display text-2xl text-gray-900">100%</div>
                  <div className="font-body text-xs text-gray-500">Trusted Quality</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Values grid */}
          <div className="reveal-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`p-5 rounded-2xl ${v.bg} card-hover reveal delay-${(i + 1) * 100}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white shadow-sm mb-3`}>
                    <v.icon className={v.color} size={20} />
                  </div>
                  <h3 className="font-body font-semibold text-gray-900 mb-1">{v.title}</h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
