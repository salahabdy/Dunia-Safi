/* Dunia Safi Bubbles Banner — Clean Wave Manifesto
 * Animated promotional strip between sections
 */
import { Droplets } from "lucide-react";

const items = [
  "SIMPLY THE BEST",
  "FAMILY TRUSTED",
  "ENDLESS CLEAN",
];

export default function BubblesBanner() {
  const doubled = [...items, ...items, ...items];

  return (
    <div className="bg-red-600 py-3 overflow-hidden relative">
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{
          animation: "wave-move 18s linear infinite",
          width: "max-content",
        }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-3 flex-shrink-0">
            <Droplets className="text-red-200" size={14} />
            <span className="font-display text-white text-sm tracking-widest">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
