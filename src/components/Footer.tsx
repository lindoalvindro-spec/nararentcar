import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/rental';
import { buildWhatsAppSupportUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 text-xs sm:text-sm pt-14 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-slate-800">
          
          {/* Brand Info with Transparent Gold Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo_nara_transparent.png"
                alt="Logo Nara Rent Car Pekanbaru"
                width={140}
                height={65}
                className="h-12 w-auto object-contain drop-shadow-md"
              />
              <div className="border-l border-slate-800 pl-3">
                <span className="text-xl font-extrabold tracking-tight text-white font-display block">
                  {COMPANY_CONFIG.name}
                </span>
                <span className="text-xs text-amber-400 font-semibold">
                  {COMPANY_CONFIG.tagline}
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm text-xs sm:text-sm">
              Penyedia jasa rental mobil dengan supir profesional terpercaya di Pekanbaru dan seluruh wilayah Riau. Melayani perjalanan dinas instansi/BUMN, tamu korporat, wisata keluarga, serta penjemputan siaga di Bandara Sultan Syarif Kasim II (SSK II).
            </p>

            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold pt-1">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Unit Tahun Muda (2022-2024) &bull; Supir Santun &amp; Terawat Bengkel Resmi</span>
            </div>
          </div>

          {/* Contact Details Pekanbaru */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2 font-display flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Alamat &amp; Kontak Operasional</span>
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_CONFIG.address}, {COMPANY_CONFIG.city}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{COMPANY_CONFIG.operatingHours}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.phone}`} className="hover:text-amber-300 font-bold transition-colors">
                  {COMPANY_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-amber-300 transition-colors">
                  {COMPANY_CONFIG.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Nav & Fleet Tags */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2 font-display">
              8 Armada Pilihan Pekanbaru
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {[
                'New Avanza',
                'Innova Reborn',
                'Innova Zenix',
                'Fortuner GR',
                'Pajero Sport',
                'Hiace',
                'Triton DC',
                'Alphard VIP',
              ].map((car) => (
                <a
                  key={car}
                  href="#armada"
                  className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-300 border border-slate-800 text-xs transition-colors"
                >
                  {car}
                </a>
              ))}
            </div>
            <div className="pt-3">
              <a
                href={buildWhatsAppSupportUrl('Booking Darurat Bandara SSK II')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold text-xs"
              >
                <span>Reservasi Cepat via WhatsApp &rarr;</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_CONFIG.name} Pekanbaru. Seluruh hak cipta dilindungi.
          </p>
          <p>
            Your Trusted Car Rental Partner &bull; Pandau Jaya, Pekanbaru / Kampar, Riau
          </p>
        </div>

      </div>
    </footer>
  );
};
