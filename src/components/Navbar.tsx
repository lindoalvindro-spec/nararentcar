import React, { useState } from 'react';
import { Car, Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/rental';
import { buildWhatsAppSupportUrl } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Pilihan Armada', href: '#armada' },
    { label: 'Paket Layanan', href: '#layanan' },
    { label: 'Syarat Sewa', href: '#syarat' },
    { label: 'Standar Mutu', href: '#mutu' },
    { label: 'Tanya Jawab (FAQ)', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-600 rounded-xl p-1"
            aria-label="RentCar Nusantara Beranda"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:bg-emerald-700 transition-colors">
              <Car className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 block leading-tight">
                {COMPANY_CONFIG.name}
              </span>
              <span className="hidden sm:flex items-center gap-1 text-xs text-emerald-700 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> Unit Resmi & Bergaransi
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Navigasi Utama">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={buildWhatsAppSupportUrl('Konsultasi Sewa Mobil')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-sm"
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
              className="p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
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
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:text-emerald-700 hover:bg-slate-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href={buildWhatsAppSupportUrl('Konsultasi Sewa Mobil')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm"
            >
              <Phone className="w-4 h-4 stroke-[2.2]" />
              <span>Hubungi CS via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
