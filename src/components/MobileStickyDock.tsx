import React, { useRef, useState, useEffect } from 'react';
import { SlidersHorizontal, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { buildWhatsAppSupportUrl } from '../utils/whatsapp';

gsap.registerPlugin(useGSAP);

interface MobileStickyDockProps {
  totalVehicles: number;
}

export const MobileStickyDock: React.FC<MobileStickyDockProps> = ({ totalVehicles }) => {
  const [isVisible, setIsVisible] = useState(false);
  const dockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(
    () => {
      if (!dockRef.current) return;
      if (isVisible) {
        gsap.to(dockRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.35,
          ease: 'power3.out',
        });
      } else {
        gsap.to(dockRef.current, {
          y: 90,
          opacity: 0,
          duration: 0.25,
          ease: 'power3.in',
        });
      }
    },
    { dependencies: [isVisible] }
  );

  const scrollToArmada = () => {
    const el = document.getElementById('armada');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={dockRef}
      style={{ transform: 'translateY(90px)', opacity: 0 }}
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-4 py-3 shadow-[0_-4px_25px_rgba(0,0,0,0.5)] pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
        
        {/* Left Side: Availability indicator & Quick Catalog Scroll */}
        <button
          type="button"
          onClick={scrollToArmada}
          className="flex flex-col items-start justify-center text-left py-1 px-2 rounded-lg hover:bg-slate-900 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-white font-display">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{totalVehicles} Unit Mobil Siap</span>
          </div>
          <span className="text-[10px] text-slate-400 flex items-center gap-1">
            <SlidersHorizontal className="w-3 h-3 text-amber-400" />
            <span>Pilih Unit &amp; Harga All-In</span>
          </span>
        </button>

        {/* Right Side: Direct WhatsApp Action */}
        <a
          href={buildWhatsAppSupportUrl('Booking Mobil All-In Nara Rent Car Pekanbaru')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 active:scale-95 text-white font-bold font-display text-xs shadow-md shadow-red-950/60 transition-all cursor-pointer min-h-[44px] border border-red-500/40"
        >
          <MessageCircle className="w-4 h-4 fill-white stroke-white" />
          <span>Pesan via WA</span>
        </a>

      </div>
    </div>
  );
};
