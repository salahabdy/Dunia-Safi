/* Dunia Safi Floating Contact Buttons — Clean Wave Manifesto
 * Fixed floating WhatsApp and Email icons with pop-up animation
 */
import { MessageCircle, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingContactButtons() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed bottom-32 right-8 z-40 flex flex-col gap-3 transition-all duration-500 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
      }`}
    >
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/254799953166"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-200 hover:shadow-xl"
        aria-label="WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={18} />
      </a>

      {/* Email Button */}
      <a
        href="mailto:info@duniasafi.com"
        className="w-10 h-10 rounded-full bg-red-600 text-white shadow-lg flex items-center justify-center hover:bg-red-700 hover:scale-110 transition-all duration-200 hover:shadow-xl"
        aria-label="Email"
        title="Send an email"
      >
        <Mail size={18} />
      </a>
    </div>
  );
}
