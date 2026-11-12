import React, { useState, useEffect, useRef } from 'react';
import { X, Check, Calendar, Users, Briefcase, Cog, Fuel, Shield, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Vehicle } from '../types/rental';
import { formatCurrencyIDR } from '../utils/formatters';
import { buildWhatsAppBookingUrl } from '../utils/whatsapp';

gsap.registerPlugin(useGSAP);

interface CarDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export const CarDetailModal: React.FC<CarDetailModalProps> = ({ vehicle, onClose }) => {
  const [serviceType, setServiceType] = useState<'lepas-kunci' | 'dengan-supir'>('lepas-kunci');
  const [durationDays, setDurationDays] = useState<number>(1);
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

  const dailyRate = serviceType === 'lepas-kunci' ? vehicle.priceWithoutDriver : vehicle.priceWithDriver;
  const subtotal = dailyRate * durationDays;
  
  // Calculate duration discount
  let discountPercent = 0;
  if (durationDays >= 7) {
    discountPercent = 10;
  } else if (durationDays >= 3) {
    discountPercent = 5;
  }
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const grandTotal = subtotal - discountAmount;

  const whatsAppBookingUrl = buildWhatsAppBookingUrl({
    vehicle,
    serviceType,
    durationDays,
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
        className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <h3 id="modal-vehicle-title" className="text-xl font-bold text-slate-900">
              {vehicle.name}
            </h3>
            <span className="text-xs px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-semibold border border-emerald-200">
              Tahun {vehicle.year}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
            aria-label="Tutup Jendela Rincian Unit"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-7">
          
          {/* Top Grid: Image Gallery & Key Specs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Left: Car Image Banner */}
            <div className="md:col-span-6 space-y-3">
              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 relative">
                <img
                  src={vehicle.image}
                  alt={`Foto unit ${vehicle.name}`}
                  className="w-full h-full object-cover"
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
                  Sudah Termasuk Dalam Layanan
                </h4>
                <ul className="space-y-1.5">
                  {vehicle.includedBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <Shield className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Interactive Price Estimator Calculator */}
          <div className="rounded-xl bg-slate-50 p-5 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-700" />
                <span>Kalkulator Estimasi Biaya Sewa</span>
              </h4>
              <span className="text-xs text-slate-500 font-medium">Perhitungan Transparan</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              
              {/* Opsi Layanan */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Paket Layanan
                </label>
                <div className="flex rounded-lg bg-white border border-slate-300 p-1">
                  <button
                    type="button"
                    onClick={() => setServiceType('lepas-kunci')}
                    className={`flex-1 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                      serviceType === 'lepas-kunci' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Lepas Kunci
                  </button>
                  <button
                    type="button"
                    onClick={() => setServiceType('dengan-supir')}
                    className={`flex-1 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                      serviceType === 'dengan-supir' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    + Supir
                  </button>
                </div>
              </div>

              {/* Durasi Sewa */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Durasi Sewa
                </label>
                <div className="flex items-center rounded-lg bg-white border border-slate-300 px-3 py-1">
                  <button
                    type="button"
                    onClick={() => setDurationDays(Math.max(1, durationDays - 1))}
                    className="w-7 h-7 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 flex items-center justify-center font-bold text-sm"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold text-slate-900 text-sm">
                    {durationDays} Hari
                  </span>
                  <button
                    type="button"
                    onClick={() => setDurationDays(durationDays + 1)}
                    className="w-7 h-7 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 flex items-center justify-center font-bold text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Tanggal Mulai */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Rencana Tanggal Mulai
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs focus:ring-1 focus:ring-emerald-600 focus:outline-none"
                />
              </div>

            </div>

            {/* Catatan Tambahan */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Catatan / Kebutuhan Khusus (Opsional)
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Contoh: Titik jemput Bandara Soetta Terminal 3, request supir non-smoker..."
                className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 placeholder-slate-400 text-xs focus:ring-1 focus:ring-emerald-600 focus:outline-none"
              />
            </div>

            {/* Price Breakdown Calculation */}
            <div className="pt-3 border-t border-slate-200 space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Tarif Harian ({serviceType === 'lepas-kunci' ? 'Lepas Kunci' : 'Dengan Supir'})</span>
                <span className="font-semibold text-slate-800">{formatCurrencyIDR(dailyRate)} / hari</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Subtotal ({durationDays} hari x {formatCurrencyIDR(dailyRate)})</span>
                <span className="font-semibold text-slate-800">{formatCurrencyIDR(subtotal)}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Potongan Durasi Sewa ({discountPercent}%)</span>
                  <span>- {formatCurrencyIDR(discountAmount)}</span>
                </div>
              )}
              <div className="pt-2 border-t border-slate-200 flex justify-between items-center">
                <span className="text-sm font-bold text-slate-900">Perkiraan Total Biaya</span>
                <span className="text-xl font-extrabold text-emerald-700">
                  {formatCurrencyIDR(grandTotal)}
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-10">
          <div className="text-xs text-slate-500">
            *Tarif tidak mengikat sebelum dikonfirmasi oleh admin via WhatsApp.
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-xs transition-colors"
            >
              Tutup
            </button>
            <a
              href={whatsAppBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-white" />
              <span>Lanjut Reservasi via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
