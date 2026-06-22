/* Dunia Safi Contact Section — Clean Wave Manifesto
 * Contact form + info cards + social links
 */
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
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
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    
    try {
      // Use Formspree to send contact form
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("message", form.message);
      formData.append("_subject", "New Contact Form Submission from Dunia Safi");
      formData.append("_captcha", "false");

     const response = await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(form),
});

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", message: "" });
        toast.success("Message sent! We'll get back to you soon.");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: "Call Us", value: "+254 799 953 166 / +254 792 666 567", href: "tel:+254799953166" },
    { icon: Phone, label: "WhatsApp", value: "+254 799 953 166", href: "https://wa.me/254799953166" },
    { icon: Mail, label: "Email Us", value: "info@duniasafi.com", href: "mailto:info@duniasafi.com" },
    { icon: MapPin, label: "Find Us", value: "Godown 18, Falcon Road, Nairobi", href: "#map" },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden" style={{ background: "oklch(0.12 0.01 285)" }}>
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" fill="oklch(0.985 0.01 80)" />
        </svg>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-red-600 blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-green-600 blur-3xl -translate-y-1/2" />
      </div>

      <div className="container relative">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-accent text-red-400 text-2xl block mb-2">Get In Touch</span>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-4">
            LET'S TALK
            <br />
            <span className="text-gradient-red">CLEAN</span>
          </h2>
          <p className="font-body text-gray-400 text-lg max-w-xl mx-auto">
            Have questions about Dunia Safi? Want to place a bulk order? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div className="reveal-left space-y-6">
            {/* Contact cards */}
            {contactInfo.map((info, i) => (
              <a
                key={info.label}
                href={info.href}
                className={`flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200 card-hover reveal delay-${(i + 1) * 100}`}
              >
                <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                  <info.icon className="text-red-400" size={20} />
                </div>
                <div>
                  <div className="font-body text-gray-400 text-xs mb-0.5">{info.label}</div>
                  <div className="font-body text-white font-medium">{info.value}</div>
                </div>
              </a>
            ))}

            {/* Social links */}
            <div className="pt-4 reveal delay-400">
              <p className="font-body text-gray-400 text-sm mb-4">Follow us on social media</p>
              <div className="flex gap-3 flex-wrap">
                {[
                  { icon: Facebook, label: "Facebook", url: "https://web.facebook.com/profile.php?id=61568769866780", color: "hover:bg-blue-600" },
                  { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/duniasafii/", color: "hover:bg-pink-600" },
                  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/company/pure-earth-enterprises-ltd/", color: "hover:bg-blue-700" },
                  { icon: Twitter, label: "Twitter", url: "https://x.com/duniasafy?s=11", color: "hover:bg-sky-500" },
                  { icon: null, label: "TikTok", url: "https://www.tiktok.com/@duniasafi.ke", color: "hover:bg-black", image: "/images/tiktok-icon.png" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-gray-300 ${social.color} hover:text-white hover:border-transparent transition-all duration-200`}
                    aria-label={social.label}
                  >
                    {social.icon ? (
                      <social.icon size={18} />
                    ) : social.image ? (
                      <img src={social.image} alt={social.label} className="w-5 h-5" />
                    ) : null}
                  </a>
                ))}
              </div>
            </div>

            {/* Brand tagline block */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-red-600/20 to-green-600/10 border border-red-500/20 reveal delay-500">
              <img
                src="/images/logo.webp"
                alt="Dunia Safi"
                className="h-14 mb-4"
              />
              <p className="font-accent text-red-300 text-xl mb-1">Simply the Best</p>
              <p className="font-body text-gray-400 text-sm">
                Pure Earth Enterprises Ltd — Trusted by families across East Africa.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal-right">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="text-green-400 mb-4" size={56} />
                  <h3 className="font-display text-3xl text-white mb-3">MESSAGE SENT!</h3>
                  <p className="font-body text-gray-400">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                    className="mt-6 btn-brand-red"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-3xl text-white mb-6">SEND A MESSAGE</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-gray-400 text-xs mb-1.5 block">Full Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-500 font-body text-sm focus:outline-none focus:border-red-500 focus:bg-white/15 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-body text-gray-400 text-xs mb-1.5 block">Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+254 700 000 000"
                        className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-500 font-body text-sm focus:outline-none focus:border-red-500 focus:bg-white/15 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-gray-400 text-xs mb-1.5 block">Email Address *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-500 font-body text-sm focus:outline-none focus:border-red-500 focus:bg-white/15 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="font-body text-gray-400 text-xs mb-1.5 block">Message *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-500 font-body text-sm focus:outline-none focus:border-red-500 focus:bg-white/15 transition-all resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-brand-red w-full justify-center text-base"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
