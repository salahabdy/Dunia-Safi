/* Location Map — Pure Earth Enterprises Ltd */
import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

export default function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Embed Google Map iframe for Pure Earth Enterprises Ltd location
    if (mapRef.current) {
      mapRef.current.innerHTML = `
        <iframe
          width="100%"
          height="450"
          style="border:0; border-radius: 1.5rem;"
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.2!2d36.77!3d-1.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sPure%20Earth%20Enterprises%20Ltd%2C%20Godown%2018%2C%20Falcon%20Road!5e0!3m2!1sen!2ske!4v1624000000000"
        ></iframe>
      `;
    }
  }, []);

  return (
    <section id="map" className="py-24 relative overflow-hidden bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-accent text-red-600 text-2xl block mb-2">Visit Us</span>
          <h2 className="font-display text-5xl md:text-6xl text-gray-900 mb-4">
            FIND US ON THE
            <br />
            <span className="text-gradient-red">MAP</span>
          </h2>
          <p className="font-body text-gray-600 text-lg max-w-xl mx-auto">
            Located in the heart of Nairobi. Stop by our godown to see our products in person.
          </p>
        </div>

        {/* Map container */}
        <div className="rounded-3xl overflow-hidden shadow-2xl mb-8" ref={mapRef} />

        {/* Address card */}
        <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0">
              <MapPin className="text-white" size={22} />
            </div>
            <div>
              <h3 className="font-display text-2xl text-gray-900 mb-2">Pure Earth Enterprises Ltd</h3>
              <p className="font-body text-gray-700 text-lg mb-1">
                <strong>Godown 18, Falcon Road</strong>
              </p>
              <p className="font-body text-gray-600 text-sm mb-4">
                Nairobi, Kenya
              </p>
              <p className="font-body text-gray-600 text-sm">
                📞 <a href="tel:+254799953166" className="text-red-600 hover:text-red-700 font-semibold">+254 799 953 166</a> | 
                <a href="https://wa.me/254792666567" className="text-red-600 hover:text-red-700 font-semibold ml-2">+254 792 666 567</a>
              </p>
              <p className="font-body text-gray-600 text-sm">
                ✉️ <a href="mailto:info@duniasafi.com" className="text-red-600 hover:text-red-700 font-semibold">info@duniasafi.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
