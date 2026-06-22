/* Dunia Safi Footer — Clean Wave Manifesto */
import { Droplets, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "oklch(0.09 0.01 285)" }} className="border-t border-white/5">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <img
              src="/images/logo.webp"
              alt="Dunia Safi"
              className="h-12 mb-4"
            />
            <p className="font-body text-gray-400 text-sm leading-relaxed max-w-xs">
              Pure Earth Enterprises Ltd — Stay Clean
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Droplets className="text-red-500" size={14} />
              <span className="font-accent text-red-400 text-base">Simply the Best</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-white text-xl mb-4">QUICK LINKS</h4>
            <div className="space-y-2">
              {[
                { label: "Home", id: "home" },
                { label: "About Us", id: "about" },
                { label: "Products", id: "products" },
                { label: "Uses", id: "uses" },
                { label: "Why Us", id: "why-us" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block font-body text-sm text-gray-400 hover:text-red-400 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white text-xl mb-4">CONTACT</h4>
            <div className="space-y-3 font-body text-sm text-gray-400">
              <p><a href="tel:+254799953166" className="hover:text-red-400 transition">📞 +254 799 953 166</a></p>
              <p><a href="tel:+254792666567" className="hover:text-red-400 transition">📞 +254 792 666 567</a></p>
              <p><a href="https://wa.me/254799953166" className="hover:text-red-400 transition">💬 WhatsApp: +254 799 953 166</a></p>
              <p><a href="mailto:info@duniasafi.com" className="hover:text-red-400 transition">✉️ info@duniasafi.com</a></p>
              <p>📍 Godown 18, Falcon Road</p>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="border-t border-white/5 pt-6 mb-6">
          <h4 className="font-display text-white text-sm mb-4">FOLLOW US</h4>
          <div className="flex gap-3">
            {[
              { icon: Facebook, url: "https://web.facebook.com/profile.php?id=61568769866780", label: "Facebook" },
              { icon: Instagram, url: "https://www.instagram.com/duniasafii/", label: "Instagram" },
              { icon: Linkedin, url: "https://www.linkedin.com/company/pure-earth-enterprises-ltd/", label: "LinkedIn" },
              { icon: Twitter, url: "https://x.com/duniasafy?s=11", label: "Twitter" },
              { icon: null, url: "https://www.tiktok.com/@duniasafi.ke", label: "TikTok", image: "/images/tiktok-icon.png" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-red-600/20 hover:border-red-500/30 transition-all"
                aria-label={social.label}
              >
                {social.icon ? (
                  <social.icon size={16} />
                ) : social.image ? (
                  <img src={social.image} alt={social.label} className="w-4 h-4" />
                ) : null}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-gray-500 text-xs">
            © {year} Pure Earth Enterprises Ltd. All rights reserved.
          </p>
          <p className="font-body text-gray-600 text-xs">
            Dunia Safi — Simply the Best
          </p>
        </div>
      </div>
    </footer>
  );
}
