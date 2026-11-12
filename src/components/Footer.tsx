import React from 'react';
import { Car, Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/rental';
import { buildWhatsAppSupportUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-slate-950 font-bold">
                <Car className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {COMPANY_CONFIG.name}
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Layanan rental dan sewa mobil terpercaya di Indonesia. Menyediakan armada tahun terbaru, bersih, bergaransi, dengan opsi lepas kunci atau supir berpengalaman.
            </p>
            <div className="flex items-center gap-2 text-brand-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Unit Terjamin Asuransi & Terawat Berkala</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">
              Hubungi & Lokasi Kantor
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_CONFIG.address}, {COMPANY_CONFIG.city}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>{COMPANY_CONFIG.operatingHours}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-white transition-colors">
                  {COMPANY_CONFIG.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Nav & Popular Units */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">
              Armada Favorit
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {['Toyota Innova Zenix', 'Honda Brio RS', 'Mitsubishi Xpander', 'Toyota Fortuner GR', 'Toyota Alphard', 'HiAce Premio'].map((car) => (
                <a
                  key={car}
                  href="#armada"
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-brand-300 border border-slate-800 text-xs transition-colors"
                >
                  {car}
                </a>
              ))}
            </div>
            <div className="pt-3">
              <a
                href={buildWhatsAppSupportUrl('Booking Darurat Hari Ini')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-semibold text-xs"
              >
                <span>Reservasi Cepat via WhatsApp &rarr;</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_CONFIG.name}. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <p className="flex items-center gap-1 justify-center">
            Dirancang dengan <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> untuk kenyamanan mobilitas Anda.
          </p>
        </div>

      </div>
    </footer>
  );
};
