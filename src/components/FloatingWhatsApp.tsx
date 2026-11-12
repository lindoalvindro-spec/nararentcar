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
      title: 'Konsultasi Syarat Lepas Kunci',
      desc: 'Cek verifikasi KTP, SIM, & ketentuan sewa',
      topic: 'Konsultasi Syarat Sewa Lepas Kunci',
    },
    {
      icon: Plane,
      title: 'Antar Jemput Bandara',
      desc: 'Reservasi penjemputan Soetta / Halim',
      topic: 'Antar Jemput Bandara CGK / HLP',
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
          className="w-80 sm:w-88 bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 space-y-3"
          role="dialog"
          aria-label="Pilihan Kontak Cepat WhatsApp"
        >
          {/* Popover Header */}
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Pusat Bantuan WhatsApp
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Tutup jendela bantuan"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 leading-snug">
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
                  className="w-full flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200/80 hover:border-emerald-300 transition-all text-left group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors flex-shrink-0 mt-0.5 shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 block">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-slate-500 leading-tight block">
                      {item.desc}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="pt-2 text-center border-t border-slate-100 text-[11px] text-slate-500">
            Respon admin rata-rata &lt; 3 menit (Jam Kerja)
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <div className="hidden sm:block bg-white border border-slate-200 text-slate-800 text-xs font-semibold py-2 px-3 rounded-xl shadow-md">
            <span>Butuh Bantuan? <strong>Chat CS</strong></span>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-700/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
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
