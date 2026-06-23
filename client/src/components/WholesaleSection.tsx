/* Dunia Safi Wholesale & Partnerships — Clean Wave Manifesto */
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Building2, TrendingUp, Handshake, CheckCircle2, ArrowRight } from "lucide-react";

export default function WholesaleSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    location: "",
    monthlyVolume: "",
    contactName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
              el.classList.add("visible");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.contactName,
        email: formData.email,
        phone: formData.phone,
        message: `
Business Name: ${formData.businessName}
Business Type: ${formData.businessType}
Location: ${formData.location}
Monthly Volume: ${formData.monthlyVolume}

Message:
${formData.message}
        `,
      }),
    });

    if (response.ok) {
      toast.success("Partnership inquiry sent!");
      setFormData({
        businessName: "",
        businessType: "",
        location: "",
        monthlyVolume: "",
        contactName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      toast.error("Failed to send inquiry");
    }
  } catch {
    toast.error("Failed to send inquiry");
  }

  setIsSubmitting(false);
};

  const pathways = [
    {
      icon: Building2,
      title: "Become a Distributor",
      description: "Regional wholesale distribution opportunities with competitive margins and dedicated support",
      features: ["Regional territories", "Competitive pricing", "Marketing support", "Dedicated account manager"],
      cta: "Learn More",
    },
    {
      icon: TrendingUp,
      title: "Bulk Orders",
      description: "Direct bulk purchasing for retailers with flexible MOQs and fast delivery",
      features: ["Flexible MOQs", "Volume discounts", "Fast shipping", "Flexible payment terms"],
      cta: "Order Now",
    },
    {
      icon: Handshake,
      title: "Retail Partnerships",
      description: "Co-branding and shelf-space opportunities for retail stores and supermarkets",
      features: ["Co-branding support", "POS materials", "Training & demos", "Revenue sharing"],
      cta: "Partner With Us",
    },
  ];

  const benefits = [
    { icon: CheckCircle2, text: "Competitive wholesale pricing" },
    { icon: CheckCircle2, text: "Marketing & promotional support" },
    { icon: CheckCircle2, text: "Fast, reliable delivery" },
    { icon: CheckCircle2, text: "Dedicated account manager" },
    { icon: CheckCircle2, text: "Flexible payment terms" },
    { icon: CheckCircle2, text: "Training & product support" },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-red-50 -translate-y-1/2 translate-x-1/2 blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-green-50 translate-y-1/2 -translate-x-1/2 blur-3xl opacity-40 pointer-events-none" />

      <div className="container relative">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <h2 className="font-display text-5xl md:text-6xl text-gray-900 mb-4">
            GROW YOUR
            <br />
            <span className="text-gradient-red">BUSINESS</span>
          </h2>
          <p className="font-body text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Partner with Dunia Safi and tap into a trusted brand serving 100,000+ families. Multiple pathways to success.
          </p>
        </div>

        {/* Three pathway cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pathways.map((pathway, idx) => {
            const Icon = pathway.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-gray-200 p-8 hover:border-red-400 hover:shadow-xl transition-all duration-300 reveal"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-50 to-green-50 flex items-center justify-center mb-6 group-hover:from-red-100 group-hover:to-green-100 transition-all">
                  <Icon className="w-8 h-8 text-red-600" />
                </div>

                {/* Title & description */}
                <h3 className="font-display text-2xl text-gray-900 mb-3">{pathway.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{pathway.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {pathway.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <Button
                  variant="outline"
                  className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:border-red-400 group/btn"
                >
                  {pathway.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Benefits highlight */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 mb-16 reveal">
          <h3 className="font-display text-3xl text-white mb-8">Why Partner With Us?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => {
              const BenefitIcon = benefit.icon;
              return (
                <div key={idx} className="flex items-center gap-4">
                  <BenefitIcon className="w-6 h-6 text-white flex-shrink-0" />
                  <span className="text-white font-medium">{benefit.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partnership inquiry form */}
        <div className="bg-white rounded-2xl border border-gray-200 p-12 reveal">
          <h3 className="font-display text-3xl text-gray-900 mb-2">Get Started Today</h3>
          <p className="text-gray-600 mb-8">Fill out the form below and our team will contact you within 24 hours</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Business Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                <Input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Your business name"
                  required
                  className="w-full"
                />
              </div>

              {/* Business Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Type *</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select business type</option>
                  <option value="distributor">Distributor</option>
                  <option value="retailer">Retailer</option>
                  <option value="supermarket">Supermarket</option>
                  <option value="wholesaler">Wholesaler</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location / Region *</label>
                <Input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Your location"
                  required
                  className="w-full"
                />
              </div>

              {/* Monthly Volume */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expected Monthly Volume</label>
                <Input
                  type="text"
                  name="monthlyVolume"
                  value={formData.monthlyVolume}
                  onChange={handleChange}
                  placeholder="e.g., 50 boxes/month"
                  className="w-full"
                />
              </div>

              {/* Contact Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name *</label>
                <Input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full"
                />
              </div>

              {/* Phone */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+254 7XX XXX XXX"
                  required
                  className="w-full"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your partnership interest..."
                rows={4}
                className="w-full"
              />
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 rounded-lg transition-all"
            >
              {isSubmitting ? "Sending..." : "Submit Partnership Inquiry"}
            </Button>
          </form>

          {/* Contact alternative */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-center mb-4">Prefer to reach out directly?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:0799953166"
                className="px-6 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-all text-center font-medium"
              >
                Call: 0799953166
              </a>
              <a
                href="https://wa.me/message/254799953166"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all text-center font-medium"
              >
                WhatsApp
              </a>
              <a
                href="mailto:info@duniasafi.com"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all text-center font-medium"
              >
                Email: info@duniasafi.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
