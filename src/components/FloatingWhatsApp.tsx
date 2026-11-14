import React, { useState, useRef } from 'react';
import { MessageCircle, X, Car, FileText, Plane, Headphones } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { buildWhatsAppSupportUrl } from '../utils/whatsapp';

gsap.registerPlugin(useGSAP);

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen && popoverRef.current) {
      gsap.fromTo(
        popoverRef.current,
        { opacity: 0, y: 15, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: 'power2.out' }
      );
    }
  }, [isOpen]);

  const quickTopics = [
    {
      icon: Car,
      title: 'Cek Ketersediaan Hari Ini',
      desc: 'Tanya unit mobil yang siap jalan sekarang',
      topic: 'Ketersediaan Unit Mobil Hari Ini',
    },
    {
      icon: FileText,
      title: 'Konsultasi Paket Sewa & Rute',
      desc: 'Tanya paket 12 jam dalam kota atau lintas Riau',
      topic: 'Konsultasi Paket Sewa dan Rute Riau',
    },
    {
      icon: Plane,
      title: 'Antar Jemput Bandara SSK II',
      desc: 'Reservasi penjemputan Bandara SSK II Pekanbaru',
      topic: 'Antar Jemput Bandara SSK II Pekanbaru',
    },
    {
      icon: Headphones,
      title: 'Bantuan Customer Service',
      desc: 'Konsultasi umum atau permintaan khusus',
      topic: 'Bantuan Customer Service Umum',
    },
  ];

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3">
      
      {/* Quick Action Popover Card */}
      {isOpen && (
        <div
          ref={popoverRef}
          className="w-80 sm:w-88 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-4 space-y-3 text-white backdrop-blur-md"
          role="dialog"
          aria-label="Pilihan Kontak Cepat WhatsApp"
        >
          {/* Popover Header */}
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Pusat Bantuan WhatsApp
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Tutup jendela bantuan"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 leading-snug">
            Halo! Pilih topik informasi yang Anda butuhkan untuk terhubung langsung dengan admin kami:
          </p>

          {/* Action List */}
          <div className="space-y-1.5 pt-1">
            {quickTopics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={buildWhatsAppSupportUrl(item.topic)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-start gap-3 p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 hover:border-amber-500/50 transition-all text-left group"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors flex-shrink-0 mt-0.5 shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white group-hover:text-amber-300 block">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-slate-400 leading-tight block">
                      {item.desc}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="pt-2 text-center border-t border-slate-800 text-[11px] text-slate-400">
            Respon admin rata-rata &lt; 3 menit (Jam Kerja)
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <div className="hidden sm:block bg-slate-900/95 border border-slate-800 text-slate-200 text-xs font-semibold py-2 px-3 rounded-xl shadow-lg backdrop-blur-md">
            <span>Butuh Bantuan? <strong className="text-amber-400">Chat CS</strong></span>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/40 transition-all hover:scale-105 active:scale-95 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 cursor-pointer border border-emerald-500/40"
          aria-expanded={isOpen}
          aria-label="Buka menu kontak WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6 stroke-[2.2]" />
          ) : (
            <MessageCircle className="w-6 h-6 fill-white stroke-white" />
          )}
        </button>
      </div>

    </div>
  );
};
