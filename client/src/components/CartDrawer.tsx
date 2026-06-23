/* Shopping Cart Drawer — Bulk Order Management */
import { X, Plus, Minus, ShoppingBag, AlertCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error("Cart is empty");
      return;
    }

    // Check MOQ for each item
    const invalidItems = items.filter((item) => item.quantity < item.moq);
    if (invalidItems.length > 0) {
      toast.error(
        `Minimum order quantity not met for: ${invalidItems.map((i) => `${i.name} (min ${i.moq})`).join(", ")}`
      );
      return;
    }

    // Generate WhatsApp message
    const message = items
      .map(
        (item) =>
          `${item.name} (${item.size}, ${item.color}): ${item.quantity} boxes @ KES ${item.price.toLocaleString()}`
      )
      .join("\n");

    const whatsappText = `Hi Pure Earth Enterprises!\n\nI'd like to place a bulk order:\n\n${message}\n\nTotal: KES ${total.toLocaleString()}\n\nPlease confirm availability and delivery details.`;

    const whatsappUrl = `https://wa.me/254799953166?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-red-600" size={22} />
            <h2 className="font-display text-2xl text-gray-900">BULK ORDER</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="text-gray-300 mb-3" size={48} />
              <p className="font-body text-gray-500">Your cart is empty</p>
              <p className="font-body text-xs text-gray-400 mt-1">
                Add products to get started
              </p>
            </div>
          ) : (
            items.map((item) => {
              const isBelowMOQ = item.quantity < item.moq;
              return (
                <div
                  key={item.id}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    isBelowMOQ
                      ? "border-amber-200 bg-amber-50"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-body font-semibold text-gray-900">
                        {item.name}
                      </h4>
                      <p className="font-body text-xs text-gray-600">
                        {item.size} • {item.color}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {isBelowMOQ && (
                    <div className="flex items-center gap-1.5 mb-2 p-2 bg-amber-100 rounded-lg">
                      <AlertCircle size={14} className="text-amber-700" />
                      <span className="font-body text-xs text-amber-700">
                        Min {item.moq} boxes required
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-7 h-7 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-body font-semibold w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-7 h-7 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="font-body text-sm font-semibold text-gray-900">
                        KES {(item.price * item.quantity).toLocaleString()}
                      </p>
                      <p className="font-body text-xs text-gray-500">
                        @ KES {item.price.toLocaleString()}/box
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-body text-gray-600">Total:</span>
              <span className="font-display text-3xl text-red-600">
                KES {total.toLocaleString()}
              </span>
            </div>
            <div className="space-y-2">
              <button
                onClick={handleCheckout}
                className="btn-brand-red w-full justify-center text-base"
              >
                Order via WhatsApp
              </button>
              <button
                onClick={() => {
                  clearCart();
                  onClose();
                }}
                className="w-full px-4 py-2.5 rounded-full font-body font-semibold text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
