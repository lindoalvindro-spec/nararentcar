import React, { useState, useEffect } from 'react';
import { X, Check, Calendar, Users, Briefcase, Cog, Fuel, Shield, MessageCircle, Star } from 'lucide-react';
import { Vehicle } from '../types/rental';
import { formatCurrencyIDR } from '../utils/formatters';
import { buildWhatsAppBookingUrl } from '../utils/whatsapp';

interface CarDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export const CarDetailModal: React.FC<CarDetailModalProps> = ({ vehicle, onClose }) => {
  const [serviceType, setServiceType] = useState<'lepas-kunci' | 'dengan-supir'>('lepas-kunci');
  const [durationDays, setDurationDays] = useState<number>(1);
  const [startDate, setStartDate] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  // Handle ESC key press
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
  
  // Calculate duration discount: >= 7 days = 10% discount, >= 3 days = 5% discount
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Dialog Window */}
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-vehicle-title"
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <h3 id="modal-vehicle-title" className="text-xl font-bold text-white">
              {vehicle.name}
            </h3>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-brand-500/20 text-brand-300 font-semibold border border-brand-500/30">
              {vehicle.year}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-8">
          
          {/* Top Grid: Image Gallery & Key Specs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Left: Car Image Banner */}
            <div className="md:col-span-7 space-y-3">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-400 text-xs font-bold border border-slate-700/80">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{vehicle.rating} / 5.0</span>
                  <span className="text-slate-400 font-normal">({vehicle.reviewCount} ulasan)</span>
                </div>
              </div>

              {/* Specs Pills */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <Users className="w-4 h-4 text-brand-400 mx-auto mb-1" />
                  <span className="text-[11px] text-slate-300 font-medium">{vehicle.seats} Penumpang</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <Briefcase className="w-4 h-4 text-brand-400 mx-auto mb-1" />
                  <span className="text-[11px] text-slate-300 font-medium">{vehicle.luggage} Koper</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <Cog className="w-4 h-4 text-brand-400 mx-auto mb-1" />
                  <span className="text-[11px] text-slate-300 font-medium">{vehicle.transmission}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <Fuel className="w-4 h-4 text-brand-400 mx-auto mb-1" />
                  <span className="text-[11px] text-slate-300 font-medium">{vehicle.fuelType}</span>
                </div>
              </div>
            </div>

            {/* Right: Features & Included Benefits */}
            <div className="md:col-span-5 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Fasilitas & Kelengkapan Unit
              </h4>
              <ul className="space-y-2">
                {vehicle.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-brand-400 flex-shrink-0 stroke-[2.5]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-slate-800">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                  Sudah Termasuk (Included)
                </h4>
                <ul className="space-y-2">
                  {vehicle.includedBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-400">
                      <Shield className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Interactive Rental Price Estimator */}
          <div className="rounded-2xl bg-slate-950 p-5 sm:p-6 border border-slate-800 space-y-5">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-400" />
                <span>Kalkulator Estimasi Biaya Sewa</span>
              </h4>
              <span className="text-xs text-slate-400">Simulasi Instan</span>
            </div>

            {/* Service & Duration Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Opsi Layanan */}
              <div>
                <label className="text-xs font-semibold text-slate-400 block mb-1.5">
                  Paket Layanan
                </label>
                <div className="flex rounded-xl bg-slate-900 border border-slate-800 p-1">
                  <button
                    type="button"
                    onClick={() => setServiceType('lepas-kunci')}
                    className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${
                      serviceType === 'lepas-kunci' ? 'bg-brand-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Lepas Kunci
                  </button>
                  <button
                    type="button"
                    onClick={() => setServiceType('dengan-supir')}
                    className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${
                      serviceType === 'dengan-supir' ? 'bg-brand-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    + Supir
                  </button>
                </div>
              </div>

              {/* Durasi Sewa */}
              <div>
                <label className="text-xs font-semibold text-slate-400 block mb-1.5">
                  Durasi Sewa (Hari)
                </label>
                <div className="flex items-center rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5">
                  <button
                    type="button"
                    onClick={() => setDurationDays(Math.max(1, durationDays - 1))}
                    className="w-7 h-7 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 flex items-center justify-center font-bold text-base"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold text-white text-sm">
                    {durationDays} Hari
                  </span>
                  <button
                    type="button"
                    onClick={() => setDurationDays(durationDays + 1)}
                    className="w-7 h-7 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 flex items-center justify-center font-bold text-base"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Tanggal Mulai */}
              <div>
                <label className="text-xs font-semibold text-slate-400 block mb-1.5">
                  Rencana Tanggal Sewa (Opsional)
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                />
              </div>

            </div>

            {/* Catatan Tambahan */}
            <div>
              <label className="text-xs font-semibold text-slate-400 block mb-1.5">
                Catatan / Permintaan Khusus (Opsional)
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Contoh: Penjemputan di Bandara Soetta jam 09.00, butuh car seat bayi..."
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-400 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
              />
            </div>

            {/* Price Breakdown Calculation */}
            <div className="pt-4 border-t border-slate-800/80 space-y-2 text-sm">
              <div className="flex justify-between text-slate-400 text-xs">
                <span>Tarif Harian ({serviceType === 'lepas-kunci' ? 'Lepas Kunci' : 'Dengan Supir'})</span>
                <span className="text-slate-200 font-medium">{formatCurrencyIDR(dailyRate)} / hari</span>
              </div>
              <div className="flex justify-between text-slate-400 text-xs">
                <span>Subtotal ({durationDays} hari x {formatCurrencyIDR(dailyRate)})</span>
                <span className="text-slate-200 font-medium">{formatCurrencyIDR(subtotal)}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-brand-400 text-xs font-semibold">
                  <span>Diskon Khusus Durasi ({discountPercent}%)</span>
                  <span>- {formatCurrencyIDR(discountAmount)}</span>
                </div>
              )}
              <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
                <span className="text-sm font-bold text-white">Estimasi Total Biaya</span>
                <span className="text-2xl font-extrabold text-brand-400">
                  {formatCurrencyIDR(grandTotal)}
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/80 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-10 backdrop-blur-md">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            *Harga estimasi belum termasuk overtime / deposit lepas kunci.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors"
            >
              Kembali
            </button>
            <a
              href={whatsAppBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs shadow-lg shadow-brand-500/20 transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Kirim Booking ke WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
