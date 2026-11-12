import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppSupportUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      
      {/* Tooltip Pill */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 pl-3.5 pr-2 py-2 rounded-full bg-slate-900/95 border border-brand-500/30 text-white text-xs font-medium shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-right-3 duration-300">
          <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-ping mr-1" />
          <span>Ada pertanyaan sewa? <strong>Chat CS Kami</strong></span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="p-1 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors ml-1"
            aria-label="Tutup pesan"
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
        className="relative group p-4 rounded-full bg-brand-500 hover:bg-brand-400 text-slate-950 shadow-2xl shadow-brand-500/40 hover:shadow-brand-500/60 transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-brand-500/30"
        aria-label="Hubungi kami via WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-brand-500/30 animate-pulse pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-slate-950 stroke-slate-950" />
      </a>

    </div>
  );
};
