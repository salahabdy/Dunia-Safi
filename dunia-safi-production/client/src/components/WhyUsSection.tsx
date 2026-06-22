/* Dunia Safi Why Us Section — Clean Wave Manifesto
 * Feature highlights + testimonials carousel
 */
import { useEffect, useRef, useState } from "react";
import { Recycle, ThumbsUp, Truck, Quote, ChevronLeft, ChevronRight, Droplets } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Lathers Well & Long Lasting",
    desc: "Rich, creamy lather that lasts longer than ordinary soaps. More value for your money.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly",
    desc: "Biodegradable formula and minimal packaging. Good for you, good for the planet.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: ThumbsUp,
    title: "Can Be Used for Personal Care",
    desc: "Effective for daily personal care and hygiene. Suitable for the whole family.",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    icon: Truck,
    title: "Easy to Order",
    desc: "Bulk orders available with competitive pricing. Contact us for wholesale inquiries and direct delivery.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
];

const testimonials = [
  {
    name: "Amina Hassan",
    location: "Nairobi, Kenya",
    text: "Dunia Safi is the only soap I use for everything in my home. From bathing my children to washing clothes — it does it all perfectly!",
    rating: 5,
    avatar: "AH",
    color: "bg-red-500",
  },
  {
    name: "John Mwangi",
    location: "Mombasa, Kenya",
    text: "I was skeptical at first, but this soap truly is multipurpose. The lather is amazing and it lasts much longer than other soaps I've tried.",
    rating: 5,
    avatar: "JM",
    color: "bg-green-600",
  },
  {
    name: "Fatuma Ali",
    location: "Dar es Salaam, Tanzania",
    text: "My family has been using Dunia Safi for years. It's affordable, effective, and smells wonderful. I recommend it to everyone!",
    rating: 5,
    avatar: "FA",
    color: "bg-amber-500",
  },
  {
    name: "Peter Ochieng",
    location: "Kampala, Uganda",
    text: "Best value soap on the market. Cleans dishes, clothes, and my skin — all with one bar. Dunia Safi is a game changer!",
    rating: 5,
    avatar: "PO",
    color: "bg-teal-600",
  },
];

export default function WhyUsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[activeTestimonial];

  return (
    <section id="why-us" ref={sectionRef} className="py-24 relative overflow-hidden" style={{ background: "oklch(0.985 0.01 80)" }}>
      {/* Red diagonal accent */}
      <div
        className="absolute top-0 left-0 w-full h-2 bg-red-600"
      />

      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-accent text-red-600 text-2xl block mb-2">Why Choose Us</span>
          <h2 className="font-display text-5xl md:text-6xl text-gray-900 mb-4">
            THE DUNIA SAFI
            <br />
            <span className="text-gradient-red">DIFFERENCE</span>
          </h2>
          <p className="font-body text-gray-600 text-lg max-w-xl mx-auto">
            We don't just make soap. We make a promise — to deliver the best clean, every single time.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`p-6 rounded-2xl bg-white shadow-sm border border-gray-100 card-hover reveal delay-${(i + 1) * 100}`}
            >
              <div className={`w-12 h-12 rounded-2xl ${f.bg} flex items-center justify-center mb-4`}>
                <f.icon className={f.color} size={22} />
              </div>
              <h3 className="font-body font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="font-body text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-3xl mx-auto reveal">
          <div className="text-center mb-10">
            <span className="font-accent text-green-600 text-2xl block mb-2">Testimonials</span>
            <h3 className="font-display text-4xl text-gray-900">WHAT FAMILIES SAY</h3>
          </div>

          {/* Testimonial card */}
          <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 overflow-hidden">
            {/* Quote icon */}
            <Quote className="absolute top-6 right-8 text-red-100" size={60} />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <p className="font-body text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-body font-bold`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-body font-semibold text-gray-900">{t.name}</div>
                  <div className="font-body text-sm text-gray-500">{t.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setActiveTestimonial((activeTestimonial - 1 + testimonials.length) % testimonials.length)}
              className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === activeTestimonial ? "w-6 h-2.5 bg-red-600" : "w-2.5 h-2.5 bg-gray-300"
                }`}
              />
            ))}
            <button
              onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)}
              className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
