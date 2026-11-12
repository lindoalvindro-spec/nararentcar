import React, { useState } from 'react';
import { Car, Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/rental';
import { buildWhatsAppSupportUrl } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Armada Mobil', href: '#armada' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Syarat Sewa', href: '#syarat' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-slate-950 shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <Car className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                {COMPANY_CONFIG.name}
              </span>
              <span className="hidden sm:flex items-center gap-1 text-xs text-brand-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" /> Terpercaya & Bergaransi
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigasi Utama">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-brand-400 transition-colors focus:outline-none focus:text-brand-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={buildWhatsAppSupportUrl('Konsultasi Sewa Mobil')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-slate-950 font-semibold text-sm transition-all shadow-md shadow-brand-500/20 hover:shadow-brand-500/40 active:scale-95"
            >
              <Phone className="w-4 h-4 stroke-[2.5]" />
              <span>Hubungi CS</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-brand-400 hover:bg-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={buildWhatsAppSupportUrl('Konsultasi Sewa Mobil')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-slate-950 font-semibold text-sm shadow-lg shadow-brand-500/20"
            >
              <Phone className="w-4 h-4 stroke-[2.5]" />
              <span>Hubungi CS via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
