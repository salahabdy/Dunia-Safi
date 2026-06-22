/* Dunia Safi Coming Soon Section — Clean Wave Manifesto
 * Teaser for powder soap product launch with email signup form
 */
import { useEffect, useRef, useState } from "react";
import { Sparkles, Mail, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function ComingSoonSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    
    try {
      // Use Formspree to send email subscription
      const response = await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email,
    name: "Newsletter Subscriber",
    phone: "N/A",
    message: "Subscribed to powder soap launch notifications",
  }),
});

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
        toast.success("Thanks! You'll be notified when powder soap launches.");
      } else {
        toast.error("Failed to sign up. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="coming-soon" ref={sectionRef} className="py-24 bg-gradient-to-br from-red-50 to-green-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-red-100 -translate-y-1/2 translate-x-1/2 blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-green-100 translate-y-1/2 -translate-x-1/2 blur-3xl opacity-40 pointer-events-none" />

      <div className="container relative">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white border border-red-200 shadow-sm">
            <Sparkles size={16} className="text-red-600" />
            <span className="font-accent text-red-600 text-sm font-semibold">COMING SOON</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-gray-900 mb-4">
            POWDER SOAP
            <br />
            <span className="text-gradient-green">REVOLUTION</span>
          </h2>
          <p className="font-body text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We're launching our innovative powder soap formula — the same powerful cleaning you love, now in a sustainable, lightweight powder form. Perfect for bulk orders and eco-conscious businesses.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Features */}
          <div className="reveal-left">
            <div className="space-y-5">
              {[
                {
                  icon: "🌱",
                  title: "Eco-Friendly Packaging",
                  desc: "Minimal plastic, maximum impact. Powder soap uses 70% less packaging than bar soap.",
                },
                {
                  icon: "📦",
                  title: "Nationwide Availability",
                  desc: "Available across the country for easy access. Reach customers everywhere with our nationwide distribution network.",
                },
                {
                  icon: "💰",
                  title: "Higher Margins",
                  desc: "Competitive wholesale pricing with excellent profit margins for retailers and distributors.",
                },
                {
                  icon: "⚡",
                  title: "Same Power, New Form",
                  desc: "All the cleaning power of Dunia Safi bar soap in convenient powder form.",
                },
              ].map((feature, i) => (
                <div
                  key={feature.title}
                  className={`p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all card-hover reveal delay-${(i + 1) * 100}`}
                >
                  <div className="flex gap-4 items-start">
                    <span className="text-3xl flex-shrink-0">{feature.icon}</span>
                    <div>
                      <h3 className="font-body font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="font-body text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Signup Form */}
          <div className="reveal-right">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="text-green-500 mb-4" size={56} />
                  <h3 className="font-display text-3xl text-gray-900 mb-3">YOU'RE ON THE LIST!</h3>
                  <p className="font-body text-gray-600 mb-6">
                    We'll notify you as soon as powder soap launches. Expect early-bird discounts for our subscribers.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="font-body text-sm text-red-600 hover:text-red-700 font-semibold"
                  >
                    Sign up another email
                  </button>
                </div>
              ) : (
                <div>
                  <h3 className="font-display text-3xl text-gray-900 mb-2">BE FIRST TO KNOW</h3>
                  <p className="font-body text-gray-600 text-sm mb-6">
                    Get notified when powder soap launches. Plus, exclusive early-bird discounts for subscribers.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="font-body text-gray-700 text-sm font-medium mb-2 block">
                        Your Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 font-body text-sm transition-all"
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full btn-brand-red justify-center text-base"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Signing up...
                        </span>
                      ) : (
                        <>
                          <Mail size={16} />
                          Notify Me
                        </>
                      )}
                    </button>

                    <p className="font-body text-xs text-gray-500 text-center">
                      We respect your privacy. Unsubscribe anytime.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center reveal">
          <p className="font-body text-gray-600 mb-6">
            Interested in wholesale opportunities for powder soap?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-body font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Contact Our B2B Team
          </a>
        </div>
      </div>
    </section>
  );
}
