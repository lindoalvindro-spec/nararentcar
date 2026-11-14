import React, { useEffect, useRef } from 'react';
import { X, Check, Users, Briefcase, Cog, Fuel, MessageCircle, Sparkles, UserCheck } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Vehicle } from '../types/rental';
import { buildWhatsAppBookingUrl } from '../utils/whatsapp';
import { formatIDR } from '../utils/formatters';

gsap.registerPlugin(useGSAP);

interface CarDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export const CarDetailModal: React.FC<CarDetailModalProps> = ({ vehicle, onClose }) => {
  const [startDate, setStartDate] = React.useState<string>('');
  const [notes, setNotes] = React.useState<string>('');

  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  // Smooth GSAP modal open animation
  useGSAP(
    () => {
      if (vehicle && modalRef.current && backdropRef.current) {
        gsap.fromTo(
          backdropRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.25, ease: 'power2.out' }
        );
        gsap.fromTo(
          modalRef.current,
          { scale: 0.94, opacity: 0, y: 15 },
          { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: 'power3.out' }
        );
      }
    },
    { dependencies: [vehicle] }
  );

  // Handle ESC key press per Anti-slop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!vehicle) return null;

  const whatsAppBookingUrl = buildWhatsAppBookingUrl({
    vehicle,
    startDate,
    notes,
  });

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-vehicle-title"
    >
      
      {/* Modal Dialog Window */}
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-white"
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <h3 id="modal-vehicle-title" className="text-xl font-bold font-display text-white">
              {vehicle.name}
            </h3>
            <span className="text-xs px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-300 font-semibold border border-amber-500/30">
              Tahun {vehicle.year}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Tutup Jendela Rincian Unit"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Top Grid: Image & Key Specs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Left: Car Image Banner */}
            <div className="md:col-span-6 space-y-3">
              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 relative p-4 flex items-center justify-center">
                <img
                  src={vehicle.image}
                  alt={`Foto unit ${vehicle.name}`}
                  className="max-h-36 object-contain drop-shadow-2xl mx-auto"
                />
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                  <Users className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                  <span className="text-[11px] text-slate-300 font-semibold">{vehicle.seats} Kursi</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                  <Briefcase className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                  <span className="text-[11px] text-slate-300 font-semibold">{vehicle.luggage} Koper</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                  <Cog className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                  <span className="text-[11px] text-slate-300 font-semibold">{vehicle.transmission}</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                  <Fuel className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                  <span className="text-[11px] text-slate-300 font-semibold">{vehicle.fuelType}</span>
                </div>
              </div>
            </div>

            {/* Right: Features & Included Benefits */}
            <div className="md:col-span-6 space-y-4">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Fasilitas &amp; Keunggulan Unit</span>
              </h4>
              <ul className="space-y-1.5">
                {vehicle.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 stroke-[2.5]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-slate-800">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Benefit Paket Sewa
                </h4>
                <ul className="space-y-1.5">
                  {vehicle.includedBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 stroke-[2]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Pricing Box & Form */}
          <div className="rounded-xl bg-slate-950 p-5 border border-slate-800 space-y-4">
            
            {/* Explicit All-In Price */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                  Paket All-In 12 Jam (Dalam Kota Pekanbaru)
                </span>
                <span className="text-xs text-slate-400">
                  Termasuk: Mobil + Supir Profesional + BBM
                </span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl sm:text-3xl font-black font-display text-red-500">
                  {formatIDR(vehicle.pricePer12Hours)}
                </span>
                <span className="text-xs text-slate-400">/ 12 Jam</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Status Paket */}
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Skema Layanan
                </label>
                <div className="py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold text-white flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-amber-400" />
                  <span>Dengan Supir (All-In 12 Jam)</span>
                </div>
              </div>

              {/* Tanggal Rencana */}
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Rencana Tanggal Pemakaian
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Titik Jemput / Catatan */}
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">
                Titik Jemput / Catatan Khusus (Opsional)
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Contoh: Jemput di Bandara SSK II jam 09.00 WIB, antar ke hotel..."
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <p className="text-[11px] text-slate-400 italic">
              *Tarif di atas di luar biaya parkir &amp; tol. Untuk rute luar kota Riau (Siak, Dumai, Kampar), hubungi admin kami untuk penyesuaian tarif terbaik.
            </p>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-10">
          <div className="text-xs text-slate-400">
            Respon admin cepat &lt; 3 menit di WhatsApp.
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors cursor-pointer border border-slate-700"
            >
              Tutup
            </button>
            <a
              href={whatsAppBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-bold font-display text-xs shadow-md shadow-red-950/50 transition-all cursor-pointer border border-red-500/40"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-white" />
              <span>Booking Sekarang via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
