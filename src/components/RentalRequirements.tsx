import React, { useState, useRef } from 'react';
import { 
  User, 
  Plane, 
  Building, 
  FileCheck, 
  ArrowRight, 
  Lock, 
  CreditCard, 
  Briefcase, 
  Check,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { buildWhatsAppSupportUrl } from '../utils/whatsapp';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

type CustomerType = 'domisili' | 'wisatawan' | 'perusahaan';

export const RentalRequirements: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CustomerType>('domisili');
  const containerRef = useRef<HTMLElement>(null);
  const dossierContentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.req-header',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.req-dossier-card',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    },
    { scope: containerRef }
  );

  const handleTabChange = (type: CustomerType) => {
    setActiveTab(type);
    if (dossierContentRef.current) {
      gsap.fromTo(
        dossierContentRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    }
  };

  const tabs: {
    id: CustomerType;
    label: string;
    sublabel: string;
    icon: React.FC<{ className?: string }>;
  }[] = [
    {
      id: 'domisili',
      label: 'Domisili Pekanbaru / Riau',
      sublabel: 'KTP & Jadwal Penjemputan',
      icon: User,
    },
    {
      id: 'wisatawan',
      label: 'Wisatawan / Tamu SSK II',
      sublabel: 'KTP & Info Tiket / Hotel',
      icon: Plane,
    },
    {
      id: 'perusahaan',
      label: 'Instansi & Korporasi Riau',
      sublabel: 'PO / Surat Tugas & NPWP',
      icon: Building,
    },
  ];

  return (
    <section ref={containerRef} id="syarat" className="py-20 bg-slate-950 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Left-Aligned Editorial Style */}
        <div className="req-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-3">
              <FileCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Verifikasi Dokumen Cepat</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tracking-tight">
              Syarat Sewa Simpel &amp; Jaminan Keamanan Data
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Karena seluruh armada didampingi oleh supir profesional kami, proses verifikasi sangat praktis via WhatsApp tanpa penahanan dokumen fisik asli dan tanpa biaya deposit jaminan.
          </p>
        </div>

        {/* Main Grid: Left Documents Requirement (7 Cols) & Right Security Guarantee (5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Requirements Dossier (7 Cols) */}
          <div className="req-dossier-card lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 backdrop-blur-md">
            
            {/* Segmented Selector */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Pilih Kategori Penyewa:
                </span>
                <span className="text-xs text-amber-400 font-semibold hidden sm:inline-block">
                  Verifikasi via WhatsApp &lt; 5 Menit
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-1.5 rounded-xl bg-slate-950 border border-slate-800">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => handleTabChange(tab.id)}
                      className={`flex flex-col items-start p-3 rounded-lg text-left transition-all cursor-pointer ${
                        isActive
                          ? 'bg-amber-500 text-slate-950 font-extrabold shadow-md'
                          : 'text-slate-400 hover:text-white hover:bg-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                        <span className="text-xs font-bold font-display">
                          {tab.label}
                        </span>
                      </div>
                      <span className={`text-[11px] font-normal leading-tight ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                        {tab.sublabel}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Hierarchical Document Content */}
            <div ref={dossierContentRef} className="space-y-6 pt-2">
              
              {/* Category 1: Domisili Pekanbaru */}
              {activeTab === 'domisili' && (
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Dokumen yang Dibutuhkan
                      </span>
                      <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800">
                        Tanpa Deposit Jaminan
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 flex-shrink-0">
                          <CreditCard className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-white font-display block">
                            Foto E-KTP Penyewa
                          </span>
                          <span className="text-[11px] text-slate-400 block leading-tight mt-0.5">
                            KTP aktif warga negara Indonesia
                          </span>
                          <span className="inline-block text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-1.5 py-0.5 rounded mt-1.5 border border-emerald-800/60">
                            Cukup foto via WhatsApp
                          </span>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 flex-shrink-0">
                          <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-white font-display block">
                            Lokasi &amp; Waktu Jemput
                          </span>
                          <span className="text-[11px] text-slate-400 block leading-tight mt-0.5">
                            Alamat rumah, kantor, atau hotel
                          </span>
                          <span className="inline-block text-[10px] text-amber-300 font-semibold bg-amber-950/60 px-1.5 py-0.5 rounded mt-1.5 border border-amber-800/60">
                            Supir tiba tepat waktu
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                      <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                      <span>Bebas ribet: Anda tidak perlu meninggalkan KTP fisik, motor, atau uang deposit jaminan apapun.</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Category 2: Wisatawan / Tamu Luar Kota */}
              {activeTab === 'wisatawan' && (
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Dokumen Tamu Bandara SSK II
                      </span>
                      <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800">
                        Siaga Penjemputan Flight
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 flex-shrink-0">
                          <CreditCard className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-white font-display block">
                            Foto E-KTP Penyewa
                          </span>
                          <span className="text-[11px] text-slate-400 block leading-tight mt-0.5">
                            Identitas pemesan unit
                          </span>
                          <span className="inline-block text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-1.5 py-0.5 rounded mt-1.5 border border-emerald-800/60">
                            Kirim via WhatsApp
                          </span>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 flex-shrink-0">
                          <Plane className="w-4 h-4 text-amber-400" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-white font-display block">
                            Nomor Tiket / Jam Landing
                          </span>
                          <span className="text-[11px] text-slate-400 block leading-tight mt-0.5">
                            Konfirmasi jadwal kedatangan SSK II
                          </span>
                          <span className="inline-block text-[10px] text-amber-300 font-semibold bg-amber-950/60 px-1.5 py-0.5 rounded mt-1.5 border border-amber-800/60">
                            Supir standby di gate
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                      <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                      <span>Jika pesawat mengalami delay, kami tetap menunggu tanpa biaya pinalti penjemputan.</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Category 3: Instansi / Korporasi */}
              {activeTab === 'perusahaan' && (
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Dokumen Instansi Pemerintah &amp; Korporasi
                      </span>
                      <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800">
                        Faktur &amp; Invoice Resmi
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 flex-shrink-0">
                          <Briefcase className="w-4 h-4 text-amber-400" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-white font-display block">
                            Purchase Order (PO) / Surat Tugas
                          </span>
                          <span className="text-[11px] text-slate-400 block leading-tight mt-0.5">
                            Surat dinas dari kantor/instansi
                          </span>
                          <span className="inline-block text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-1.5 py-0.5 rounded mt-1.5 border border-emerald-800/60">
                            Format reimbursement resmi
                          </span>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 flex-shrink-0">
                          <Building className="w-4 h-4 text-amber-400" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-white font-display block">
                            NPWP Perusahaan (Opsional)
                          </span>
                          <span className="text-[11px] text-slate-400 block leading-tight mt-0.5">
                            Untuk kebutuhan faktur pajak PPh 23
                          </span>
                          <span className="inline-block text-[10px] text-amber-300 font-semibold bg-amber-950/60 px-1.5 py-0.5 rounded mt-1.5 border border-amber-800/60">
                            Invoicing fleksibel
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                      <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                      <span>Tersedia sistem pembayaran tempo invoicing untuk mitra instansi dan korporasi terdaftar di Pekanbaru.</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Right Column: Jaminan Keamanan & Kerahasiaan Data (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-amber-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-md">
            
            {/* Top Amber Halo */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-400 flex items-center justify-center flex-shrink-0 shadow-md">
                <Lock className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                  Komitmen Privasi Pelanggan
                </span>
                <h3 className="text-base sm:text-lg font-bold font-display text-white">
                  Jaminan Keamanan &amp; Kerahasiaan Data
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Kami menghargai penuh privasi setiap pelanggan. Nara Rent Car Pekanbaru menerapkan standar ketat dalam perlindungan dokumen dan data perjalanan Anda.
            </p>

            <div className="space-y-3.5 pt-2 border-t border-slate-800">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong>Tanpa Penahanan Fisik Asli:</strong> KTP asli atau dokumen identitas berharga Anda tetap Anda pegang sendiri secara aman.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong>Kerahasiaan Agenda Perjalanan:</strong> Rute kunjungan pejabat, instansi dinas, dan keluarga dijamin aman serta tidak dipublikasikan tanpa izin.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong>Bebas Uang Jaminan (Deposit):</strong> Seluruh paket sewa dengan supir tidak membebankan uang deposit yang memberatkan.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong>Arsip Terenkripsi:</strong> Berkas verifikasi hanya digunakan semata-mata untuk pencatatan manifest layanan resmi.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <a
                href={buildWhatsAppSupportUrl('Konsultasi Dokumen & Booking Mobil')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-bold font-display text-xs sm:text-sm transition-all shadow-md shadow-red-950/60 border border-red-500/40 cursor-pointer"
              >
                <span>Konsultasi Syarat via WhatsApp</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </a>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Admin siaga 24 jam melayani pertanyaan Anda</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
