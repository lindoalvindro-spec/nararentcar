import React, { useState } from 'react';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/rental';
import { buildWhatsAppSupportUrl } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Pilihan Armada', href: '#armada' },
    { label: 'Paket Layanan', href: '#layanan' },
    { label: 'Syarat & Keamanan Data', href: '#syarat' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all shadow-md">
      {/* Main Navbar */}
      <div className="bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo & Brand Identity */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-xl p-1"
              aria-label="Nara Rent Car Pekanbaru Beranda"
            >
              <img
                src="/images/logo_nara_transparent.png"
                alt="Logo Nara Rent Car"
                width={120}
                height={55}
                className="h-11 sm:h-12 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform"
              />
              <div className="border-l border-slate-800 pl-3">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white block leading-tight font-display">
                  NARA RENT CAR
                </span>
                <span className="hidden sm:flex items-center gap-1 text-[11px] text-amber-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Pekanbaru &bull; {COMPANY_CONFIG.tagline}
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7" aria-label="Navigasi Utama">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Button */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={buildWhatsAppSupportUrl('Konsultasi Sewa Mobil Pekanbaru')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-bold font-display text-xs sm:text-sm transition-all shadow-md shadow-red-950/50 border border-red-500/40 cursor-pointer"
                aria-label="Hubungi Customer Service via WhatsApp"
              >
                <Phone className="w-4 h-4 stroke-[2.2]" />
                <span>Hubungi CS</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700 transition-colors cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-label="Buka menu navigasi"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-slate-900 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href={buildWhatsAppSupportUrl('Konsultasi Sewa Mobil Pekanbaru')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-bold font-display text-sm shadow-md"
              >
                <Phone className="w-4 h-4 stroke-[2.2]" />
                <span>Hubungi CS via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
