import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Calendar, Car } from 'lucide-react';
import { buildWhatsAppSupportUrl } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  return (
    <section className="bg-white border-b border-slate-200 pt-10 pb-16 lg:pt-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Core Value */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Armada Terawat Bengkel Resmi & Asuransi Perjalanan</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Sewa Mobil Aman & Nyaman, <br />
              <span className="text-emerald-700">Lepas Kunci</span> atau{' '}
              <span className="text-slate-900">Dengan Supir</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Solusi transportasi andal untuk perjalanan dinas kantor, liburan keluarga, maupun antar-jemput bandara. Unit steril bebas asap rokok, STNK aktif, dan didukung layanan darurat 24 jam.
            </p>

            {/* Verifiable commitments (No fake statistics per R-17/R-36) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-800">Unit Tahun Muda (2024)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-800">Garansi Mobil Pengganti</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-800">Bebas Bau Rokok</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <a
                href="#armada"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-colors"
              >
                <span>Lihat Daftar Mobil & Tarif</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </a>
              <a
                href={buildWhatsAppSupportUrl('Tanya Ketersediaan Unit Hari Ini')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm border border-slate-300 transition-colors"
              >
                <span>Konsultasi Ketersediaan (WA)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Practical Quick Action Box */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-7 space-y-5">
              
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  Pencarian Cepat
                </span>
                <h2 className="text-lg font-bold text-slate-900">
                  Cek Ketersediaan Armada
                </h2>
              </div>

              {/* Form elements for immediate interactive engagement */}
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Area Layanan / Penjemputan</span>
                  </label>
                  <select
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    defaultValue="jabodetabek"
                  >
                    <option value="jabodetabek">Area Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi)</option>
                    <option value="soetta">Bandara Internasional Soekarno-Hatta (CGK)</option>
                    <option value="halim">Bandara Halim Perdanakusuma (HLP)</option>
                    <option value="luar-kota">Perjalanan Luar Kota / Antar-Provinsi</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5 flex items-center gap-1.5">
                      <Car className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Jenis Layanan</span>
                    </label>
                    <select
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                      defaultValue="lepas-kunci"
                    >
                      <option value="lepas-kunci">Lepas Kunci</option>
                      <option value="dengan-supir">Dengan Supir</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Rencana Mulai</span>
                    </label>
                    <input
                      type="date"
                      defaultValue={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <a
                  href="#armada"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors shadow-sm"
                >
                  <span>Tampilkan Mobil Sesuai Pilihan</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Tarif mulai <strong>Rp 350.000 / hari</strong></span>
                <span>Termasuk PPN & Asuransi</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
