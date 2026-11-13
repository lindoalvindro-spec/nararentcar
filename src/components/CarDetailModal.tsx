import React, { useState, useEffect, useRef } from 'react';
import { X, Check, Users, Briefcase, Cog, Fuel, Shield, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Vehicle } from '../types/rental';
import { buildWhatsAppBookingUrl } from '../utils/whatsapp';

gsap.registerPlugin(useGSAP);

interface CarDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export const CarDetailModal: React.FC<CarDetailModalProps> = ({ vehicle, onClose }) => {
  const [serviceType, setServiceType] = useState<'lepas-kunci' | 'dengan-supir'>('lepas-kunci');
  const [startDate, setStartDate] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

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

  // Handle ESC key press per Anti-slop R-32
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
    serviceType,
    startDate,
    notes,
  });

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-vehicle-title"
    >
      
      {/* Modal Dialog Window */}
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <h3 id="modal-vehicle-title" className="text-xl font-bold font-display text-slate-900">
              {vehicle.name}
            </h3>
            <span className="text-xs px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-semibold border border-emerald-200">
              Tahun {vehicle.year}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
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
              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200/60 border border-slate-200 relative p-4 flex items-center justify-center">
                <img
                  src={vehicle.image}
                  alt={`Foto unit ${vehicle.name}`}
                  className="max-h-36 object-contain drop-shadow-md mx-auto"
                />
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                  <Users className="w-4 h-4 text-emerald-700 mx-auto mb-1" />
                  <span className="text-[11px] text-slate-700 font-semibold">{vehicle.seats} Kursi</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                  <Briefcase className="w-4 h-4 text-emerald-700 mx-auto mb-1" />
                  <span className="text-[11px] text-slate-700 font-semibold">{vehicle.luggage} Koper</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                  <Cog className="w-4 h-4 text-emerald-700 mx-auto mb-1" />
                  <span className="text-[11px] text-slate-700 font-semibold">{vehicle.transmission}</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                  <Fuel className="w-4 h-4 text-emerald-700 mx-auto mb-1" />
                  <span className="text-[11px] text-slate-700 font-semibold">{vehicle.fuelType}</span>
                </div>
              </div>
            </div>

            {/* Right: Features & Included Benefits */}
            <div className="md:col-span-6 space-y-4">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Fasilitas & Kelengkapan Unit
              </h4>
              <ul className="space-y-1.5">
                {vehicle.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 stroke-[2.5]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Jaminan Layanan Resmi
                </h4>
                <ul className="space-y-1.5">
                  {vehicle.includedBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <Shield className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Simple Booking Consultation Card (No Price) */}
          <div className="rounded-xl bg-slate-50 p-5 border border-slate-200 space-y-4">
            <div className="border-b border-slate-200 pb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Rencana Sewa Anda
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Pilih opsi sewa untuk mendapatkan penawaran tarif terbaik langsung dari admin WhatsApp kami.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Opsi Layanan */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Pilihan Paket
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setServiceType('lepas-kunci')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer text-center ${
                      serviceType === 'lepas-kunci'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    Lepas Kunci
                  </button>
                  <button
                    type="button"
                    onClick={() => setServiceType('dengan-supir')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer text-center ${
                      serviceType === 'dengan-supir'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    Dengan Supir
                  </button>
                </div>
              </div>

              {/* Tanggal Rencana */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Rencana Tanggal (Opsional)
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs focus:ring-1 focus:ring-emerald-600 focus:outline-none"
                />
              </div>
            </div>

            {/* Catatan Tambahan */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Kebutuhan Khusus / Titik Antar (Opsional)
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Contoh: Titik jemput Bandara SSK II Pekanbaru, antar ke hotel..."
                className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 placeholder-slate-400 text-xs focus:ring-1 focus:ring-emerald-600 focus:outline-none"
              />
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-10">
          <div className="text-xs text-slate-500">
            Penawaran harga terbaik & konfirmasi unit via WhatsApp.
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
            >
              Tutup
            </button>
            <a
              href={whatsAppBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-bold font-display text-xs shadow-md shadow-red-900/30 transition-all cursor-pointer border border-red-600/40"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-white" />
              <span>Tanya Tarif via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
