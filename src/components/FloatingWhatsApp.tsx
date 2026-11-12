import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppSupportUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5">
      
      {/* Tooltip Pill */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 pl-3.5 pr-2 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-semibold shadow-lg">
          <span>Butuh Bantuan? <strong>Chat CS Kami</strong></span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors ml-1"
            aria-label="Tutup pesan bantuan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={buildWhatsAppSupportUrl('Bantuan CS via Floating Button')}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
        aria-label="Hubungi Customer Support RentCar Nusantara melalui WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white stroke-white" />
      </a>

    </div>
  );
};
