import React from 'react';
import { Car, Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/rental';
import { buildWhatsAppSupportUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 text-xs sm:text-sm pt-14 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold">
                <Car className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {COMPANY_CONFIG.name}
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Penyedia jasa sewa dan rental mobil terpercaya di Indonesia. Menyediakan unit tahun muda dengan perawatan berkala resmi, jaminan penggantian unit, dan pilihan lepas kunci atau dengan supir.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>STNK Asli Aktif & Perlindungan Asuransi Resmi</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2">
              Alamat & Kontak Kantor
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_CONFIG.address}, {COMPANY_CONFIG.city}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{COMPANY_CONFIG.operatingHours}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-white transition-colors">
                  {COMPANY_CONFIG.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Nav & Fleet Tags */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2">
              Pilihan Armada Favorit
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {['Toyota Innova Zenix', 'Honda Brio RS', 'Mitsubishi Xpander', 'Toyota Fortuner GR', 'Toyota Alphard', 'HiAce Premio'].map((car) => (
                <a
                  key={car}
                  href="#armada"
                  className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs transition-colors"
                >
                  {car}
                </a>
              ))}
            </div>
            <div className="pt-2">
              <a
                href={buildWhatsAppSupportUrl('Booking Darurat Hari Ini')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold text-xs"
              >
                <span>Reservasi Cepat via WhatsApp &rarr;</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_CONFIG.name}. Seluruh hak cipta dilindungi undang-undang.
          </p>
          <p>
            Standar Mutu Layanan Otomotif Terpercaya di Indonesia.
          </p>
        </div>

      </div>
    </footer>
  );
};
