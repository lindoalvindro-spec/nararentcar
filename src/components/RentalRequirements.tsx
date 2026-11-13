import React, { useState, useRef } from 'react';
import { 
  User, 
  Plane, 
  Building, 
  FileCheck, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Lock, 
  CreditCard, 
  FileText, 
  Home, 
  Briefcase, 
  Check
} from 'lucide-react';
import { buildWhatsAppSupportUrl } from '../utils/whatsapp';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type CustomerType = 'domisili' | 'wisatawan' | 'perusahaan';

export const RentalRequirements: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CustomerType>('domisili');
  const containerRef = useRef<HTMLElement>(null);
  const dossierContentRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header entrance
      gsap.fromTo(
        '.req-header',
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Section cards entrance
      gsap.fromTo(
        '.req-dossier-card',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.req-timeline-card',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // ScrollTrigger Timeline Progress Line
      if (timelineRef.current) {
        gsap.fromTo(
          '.timeline-progress-fill',
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 70%',
              end: 'bottom 75%',
              scrub: 0.5,
            },
          }
        );
      }
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
      sublabel: 'KTP & Bukti Domisili',
      icon: User,
    },
    {
      id: 'wisatawan',
      label: 'Wisatawan / Tamu SSK II',
      sublabel: 'Tiket PP & Reservasi Hotel',
      icon: Plane,
    },
    {
      id: 'perusahaan',
      label: 'Instansi & Korporasi Riau',
      sublabel: 'NIB, NPWP & PO Resmi',
      icon: Building,
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Pilih Armada & Tanggal Sewa',
      sla: 'Instan di Website',
      slaColor: 'bg-slate-100 text-slate-700 border-slate-200',
      desc: 'Tentukan model kendaraan yang Anda butuhkan, tanggal pemakaian, serta opsi lepas kunci atau supir.',
    },
    {
      num: '02',
      title: 'Verifikasi Berkas via WhatsApp',
      sla: 'Proses ~15 - 30 Menit',
      slaColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      desc: 'Kirimkan foto dokumen persyaratan melalui WhatsApp admin kami tanpa perlu datang ke kantor fisik.',
    },
    {
      num: '03',
      title: 'Serah Terima & Cek Fisik Unit',
      sla: 'Antar ke Bandara SSK II / Lokasi Anda',
      slaColor: 'bg-blue-50 text-blue-800 border-blue-200',
      desc: 'Mobil diantar tepat waktu ke Bandara SSK II, hotel penginapan, atau alamat Anda di Pekanbaru. Cek fisik bersama dan serah terima kunci.',
    },
    {
      num: '04',
      title: 'Pengembalian & Refund Deposit',
      sla: 'Garansi Maksimal 1x24 Jam',
      slaColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      desc: 'Unit dijemput kembali. Dana jaminan deposit ditransfer kembali utuh 100% ke rekening Anda tanpa potongan.',
    },
  ];

  return (
    <section ref={containerRef} id="syarat" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Left-Aligned Editorial Style */}
        <div className="req-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
              <FileCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Verifikasi & Prosedur Sewa</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
              Syarat Sewa Transparan & Alur Pemesanan
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl">
            Proses verifikasi dokumen cepat melalui WhatsApp tanpa penahanan dokumen fisik asli yang berisiko. Cek berkas yang perlu Anda siapkan.
          </p>
        </div>

        {/* Split Grid: Left (Executive Concierge Dossier) & Right (Timeline Cards with SLAs) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Executive Concierge Dossier (7 Cols) */}
          <div className="req-dossier-card lg:col-span-7 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            
            {/* Segmented Selector with Sub-labels (No Ellipsis, Generous Breathing Room) */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Pilih Kategori Penyewa:
                </span>
                <span className="text-xs text-emerald-700 font-semibold hidden sm:inline-block">
                  Pilih sesuai identitas Anda
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-1.5 rounded-xl bg-slate-100/90 border border-slate-200">
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
                          ? 'bg-white text-slate-950 shadow-sm border border-slate-200 ring-1 ring-slate-200/60'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-700' : 'text-slate-500'}`} />
                        <span className="text-xs font-bold font-display">
                          {tab.label}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-normal leading-tight">
                        {tab.sublabel}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Hierarchical Document Dossier Content */}
            <div ref={dossierContentRef} className="space-y-6 pt-2">
              
              {/* Category 1: Warga Domisili Jabodetabek */}
              {activeTab === 'domisili' && (
                <div className="space-y-4">
                  {/* Primary Mandatory IDs */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        1. Dokumen Identitas Utama
                      </span>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Wajib Disiapkan
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* E-KTP */}
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-700 flex-shrink-0 shadow-xs">
                          <CreditCard className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-900 font-display block">
                            E-KTP Asli Penyewa
                          </span>
                          <span className="text-[11px] text-slate-500 block leading-tight mt-0.5">
                            KTP aktif & sah secara hukum
                          </span>
                          <span className="inline-block text-[10px] text-emerald-700 font-semibold bg-emerald-100/60 px-1.5 py-0.5 rounded mt-1.5">
                            Foto kamera HP, bebas fotokopi
                          </span>
                        </div>
                      </div>

                      {/* SIM A */}
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-700 flex-shrink-0 shadow-xs">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-900 font-display block">
                            SIM A Sah & Aktif
                          </span>
                          <span className="text-[11px] text-slate-500 block leading-tight mt-0.5">
                            Surat izin mengemudi pengemudi
                          </span>
                          <span className="inline-block text-[10px] text-emerald-700 font-semibold bg-emerald-100/60 px-1.5 py-0.5 rounded mt-1.5">
                            Masa berlaku masih hidup
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Verification (Pilih Salah Satu) */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        2. Verifikasi Domisili (Pilih Salah Satu)
                      </span>
                      <span className="text-[11px] font-medium text-slate-500">
                        Salah satu cukup
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Home className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Bukti Domisili:</strong> Rekening listrik, tagihan air PDAM, bukti PBB rumah, atau Kartu Keluarga (KK).</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-slate-700 pt-1.5 border-t border-slate-200/60">
                        <User className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Verifikasi Tambahan:</strong> Akun media sosial aktif (Instagram / LinkedIn) untuk pencocokan identitas kilat.</span>
                      </div>
                    </div>
                  </div>

                  {/* Deposit Section */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        3. Ketentuan Jaminan Sewa
                      </span>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Refund 100%
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                      <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div className="text-xs text-slate-700 leading-relaxed">
                        <strong>Deposit Jaminan Lepas Kunci:</strong> Uang deposit ditransfer saat booking dan dikembalikan utuh 100% via transfer bank maksimal 1x24 jam setelah mobil dikembalikan dalam kondisi aman.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Category 2: Wisatawan / Tamu Luar Kota */}
              {activeTab === 'wisatawan' && (
                <div className="space-y-4">
                  {/* Primary Mandatory IDs */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        1. Dokumen Identitas Utama
                      </span>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Wajib Disiapkan
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-700 flex-shrink-0 shadow-xs">
                          <CreditCard className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-900 font-display block">
                            E-KTP Asli Penyewa
                          </span>
                          <span className="text-[11px] text-slate-500 block leading-tight mt-0.5">
                            Identitas resmi warga negara
                          </span>
                          <span className="inline-block text-[10px] text-emerald-700 font-semibold bg-emerald-100/60 px-1.5 py-0.5 rounded mt-1.5">
                            Cukup foto via WhatsApp
                          </span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-700 flex-shrink-0 shadow-xs">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-900 font-display block">
                            SIM A Aktif
                          </span>
                          <span className="text-[11px] text-slate-500 block leading-tight mt-0.5">
                            Surat izin mengemudi sah
                          </span>
                          <span className="inline-block text-[10px] text-emerald-700 font-semibold bg-emerald-100/60 px-1.5 py-0.5 rounded mt-1.5">
                            Berlaku sewa lepas kunci
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Travel Proofs */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        2. Bukti Kunjungan Wisata / Perjalanan
                      </span>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Konfirmasi Jadwal
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Plane className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Tiket Pesawat / Kereta Api PP:</strong> Tiket kedatangan dan kepulangan sebagai konfirmasi durasi kunjungan.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-slate-700 pt-1.5 border-t border-slate-200/60">
                        <Home className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Bukti Reservasi Penginapan:</strong> Voucher booking hotel, villa, atau apartemen selama di kota tujuan.</span>
                      </div>
                    </div>
                  </div>

                  {/* Deposit Section */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        3. Ketentuan Jaminan Sewa
                      </span>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Refund 100%
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                      <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div className="text-xs text-slate-700 leading-relaxed">
                        <strong>Deposit Jaminan Wisatawan:</strong> Pengembalian dana jaminan diproses utuh via transfer bank maksimal 1x24 jam setelah pengembalian unit di bandara atau hotel.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Category 3: Instansi / Korporasi */}
              {activeTab === 'perusahaan' && (
                <div className="space-y-4">
                  {/* Corporate Legalities */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        1. Legalitas Badan Usaha
                      </span>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Faktur Resmi
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-700 flex-shrink-0 shadow-xs">
                          <Building className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-900 font-display block">
                            NIB & NPWP Perusahaan
                          </span>
                          <span className="text-[11px] text-slate-500 block leading-tight mt-0.5">
                            Nomor Induk Berusaha aktif
                          </span>
                          <span className="inline-block text-[10px] text-emerald-700 font-semibold bg-emerald-100/60 px-1.5 py-0.5 rounded mt-1.5">
                            Faktur Pajak PPh 23
                          </span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-700 flex-shrink-0 shadow-xs">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-900 font-display block">
                            Purchase Order (PO) Resmi
                          </span>
                          <span className="text-[11px] text-slate-500 block leading-tight mt-0.5">
                            Surat tugas / PO bertanda tangan
                          </span>
                          <span className="inline-block text-[10px] text-emerald-700 font-semibold bg-emerald-100/60 px-1.5 py-0.5 rounded mt-1.5">
                            Invoicing tempo 30 hari
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Driver Assignment */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        2. Identitas Pengemudi yang Ditugaskan
                      </span>
                      <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        Karyawan Resmi
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CreditCard className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span><strong>KTP & SIM A Karyawan:</strong> Identitas driver operasional yang ditugaskan oleh instansi.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-slate-700 pt-1.5 border-t border-slate-200/60">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Bebas Deposit:</strong> Mitra korporat terdaftar bebas uang jaminan deposit sewa mobil.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Privacy & Safety Guarantee Seal */}
            <div className="pt-4 border-t border-slate-200/80">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block font-display">
                      Jaminan Keamanan & Kerahasiaan Data
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      Tanpa tahan dokumen fisik asli. Berkas hanya untuk verifikasi sewa resmi.
                    </span>
                  </div>
                </div>
                <a
                  href={buildWhatsAppSupportUrl('Konsultasi Dokumen Persyaratan Sewa')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-xs text-emerald-700 hover:text-emerald-800 flex-shrink-0 cursor-pointer"
                >
                  <span>Tanya Admin</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Executive Timeline Cards with Realistic SLAs (5 Cols) */}
          <div ref={timelineRef} className="req-timeline-card lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-0.5">
                    Standar Operasional Prosedur
                  </span>
                  <h3 className="text-base font-bold font-display text-slate-900">
                    4 Langkah Pemesanan Cepat
                  </h3>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                  Transparan
                </span>
              </div>

              {/* Timeline Container with Progress Fill Line */}
              <div className="relative pl-7 space-y-6">
                {/* Background vertical gray rail */}
                <div className="absolute left-2.5 top-2 bottom-3 w-0.5 bg-slate-200" />
                
                {/* Scroll-triggered emerald progress rail */}
                <div className="timeline-progress-fill absolute left-2.5 top-2 bottom-3 w-0.5 bg-emerald-600 origin-top" />

                {steps.map((step, idx) => (
                  <div key={idx} className="relative group">
                    {/* Number Indicator Node */}
                    <div className="absolute -left-7 top-0.5 w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold ring-4 ring-white shadow-xs">
                      {idx + 1}
                    </div>

                    {/* Step Card */}
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 group-hover:border-slate-300 transition-colors">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          Tahap {step.num}
                        </span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${step.slaColor}`}>
                          {step.sla}
                        </span>
                      </div>

                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-display mb-1">
                        {step.title}
                      </h4>

                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action Area */}
            <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
              <a
                href={buildWhatsAppSupportUrl('Mulai Booking Unit Nara Rent Car Pekanbaru')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-bold font-display text-xs sm:text-sm transition-all shadow-md shadow-red-900/30 border border-red-600/40 cursor-pointer"
              >
                <span>Mulai Booking via WhatsApp</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </a>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Respon admin kilat &lt; 3 menit pada jam operasional</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
