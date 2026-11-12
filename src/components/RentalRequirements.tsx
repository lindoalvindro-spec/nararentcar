import React, { useState, useRef } from 'react';
import { CheckCircle2, User, Plane, Building, FileCheck, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { buildWhatsAppSupportUrl } from '../utils/whatsapp';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

type CustomerType = 'domisili' | 'wisatawan' | 'perusahaan';

interface RequirementItem {
  name: string;
  mandatory: boolean;
  note?: string;
}

export const RentalRequirements: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CustomerType>('domisili');
  const containerRef = useRef<HTMLElement>(null);
  const checklistRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.req-header',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.req-left-pane',
        { opacity: 0, x: -15 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out', delay: 0.1 }
      );
      gsap.fromTo(
        '.req-step-item',
        { opacity: 0, x: 15 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out', delay: 0.15 }
      );
    },
    { scope: containerRef }
  );

  const handleTabChange = (type: CustomerType) => {
    setActiveTab(type);
    if (checklistRef.current) {
      gsap.fromTo(
        checklistRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    }
  };

  const tabs: { id: CustomerType; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'domisili', label: 'Warga Domisili Jabodetabek', icon: User },
    { id: 'wisatawan', label: 'Wisatawan / Tamu Luar Kota', icon: Plane },
    { id: 'perusahaan', label: 'Instansi / Korporasi', icon: Building },
  ];

  const requirementsData: Record<CustomerType, RequirementItem[]> = {
    domisili: [
      { name: 'E-KTP asli penyewa (wajib aktif)', mandatory: true },
      { name: 'Surat Izin Mengemudi (SIM A) sah dan masih berlaku', mandatory: true },
      { name: 'Bukti domisili (PBB, rekening listrik/air, atau Kartu Keluarga)', mandatory: true },
      { name: 'Akun media sosial aktif untuk verifikasi identitas kilat', mandatory: false, note: 'Instagram / LinkedIn' },
      { name: 'Deposit jaminan sewa (ditransfer balik 100% setelah unit kembali)', mandatory: true, note: 'Bebas potongan' },
    ],
    wisatawan: [
      { name: 'E-KTP asli penyewa', mandatory: true },
      { name: 'Surat Izin Mengemudi (SIM A) aktif', mandatory: true },
      { name: 'Tiket pesawat / kereta api Pulang Pergi (PP)', mandatory: true, note: 'Konfirmasi tanggal kembali' },
      { name: 'Bukti reservasi hotel / penginapan selama di kota', mandatory: true },
      { name: 'Akun media sosial aktif penyewa', mandatory: false },
      { name: 'Deposit jaminan sewa lepas kunci', mandatory: true, note: 'Refund 1x24 jam' },
    ],
    perusahaan: [
      { name: 'Nomor Induk Berusaha (NIB) dan NPWP Perusahaan', mandatory: true },
      { name: 'KTP & SIM A pengemudi yang ditugaskan resmi', mandatory: true },
      { name: 'Surat Tugas / Keterangan Kerja dari manajemen instansi', mandatory: true },
      { name: 'Purchase Order (PO) resmi bertanda tangan pimpinan', mandatory: true },
      { name: 'Bebas uang deposit untuk mitra korporat terdaftar', mandatory: false, note: 'Fasilitas korporat' },
    ],
  };

  const steps = [
    {
      num: '01',
      title: 'Pilih Unit & Tanggal',
      desc: 'Tentukan model mobil yang Anda inginkan, durasi pemakaian, serta opsi lepas kunci atau supir.',
    },
    {
      num: '02',
      title: 'Verifikasi via WhatsApp',
      desc: 'Cukup kirim foto dokumen persyaratan ke admin kami. Verifikasi berkas cepat hanya 15-30 menit.',
    },
    {
      num: '03',
      title: 'Serah Terima Kendaraan',
      desc: 'Mobil diantar ke alamat Anda, bandara, atau stasiun. Cek fisik bersama dan tanda tangan serah terima.',
    },
    {
      num: '04',
      title: 'Pengembalian & Refund Jaminan',
      desc: 'Unit dijemput kembali. Dana deposit jaminan ditransfer kembali utuh 100% maksimal dalam 1x24 jam.',
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
              <span>Panduan Dokumen Transparan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
              Syarat Sewa & 4 Langkah Pemesanan
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl">
            Proses verifikasi dokumen cepat melalui WhatsApp tanpa penahanan dokumen asli yang berisiko. Cek berkas yang perlu Anda siapkan.
          </p>
        </div>

        {/* Split Grid: Left (Requirements Matrix) & Right (Step-by-Step Timeline) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Requirements Tab & Matrix (7 Cols) */}
          <div className="req-left-pane lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            
            {/* Tab Pill Buttons */}
            <div>
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-3">
                Kategori Penyewa:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 rounded-xl bg-slate-100 border border-slate-200">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => handleTabChange(tab.id)}
                      className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-700' : 'text-slate-400'}`} />
                      <span className="truncate">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Checklist items */}
            <div ref={checklistRef} className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs text-slate-500 pb-1 border-b border-slate-100">
                <span>Daftar Berkas Persyaratan</span>
                <span>Status Dokumen</span>
              </div>

              {requirementsData[activeTab].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100/70 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 block">
                        {item.name}
                      </span>
                      {item.note && (
                        <span className="text-[11px] text-slate-500 font-normal">
                          {item.note}
                        </span>
                      )}
                    </div>
                  </div>

                  <span
                    className={`text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-md border flex-shrink-0 ${
                      item.mandatory
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : 'bg-slate-200 text-slate-700 border-slate-300'
                    }`}
                  >
                    {item.mandatory ? 'Wajib' : 'Pendukung'}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust and Safety Badges */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-start gap-2.5 text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Tanpa Tahan Dokumen Asli</strong>. Berkas fisik hanya ditunjukkan saat serah terima unit.</span>
              </div>
              <div className="flex items-start gap-2.5 text-slate-600">
                <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Garansi Refund 1x24 Jam</strong>. Deposit jaminan kembali utuh via transfer bank.</span>
              </div>
            </div>

            {/* Fast WhatsApp Help Link */}
            <div className="pt-2 flex items-center justify-between text-xs bg-emerald-50/60 p-4 rounded-xl border border-emerald-200">
              <span className="text-emerald-950 font-medium">
                Ada dokumen yang belum lengkap atau punya kebutuhan khusus?
              </span>
              <a
                href={buildWhatsAppSupportUrl('Konsultasi Dokumen Persyaratan Sewa')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-emerald-800 hover:text-emerald-900 flex-shrink-0 underline"
              >
                <span>Tanya Admin</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: 4-Step Vertical Timeline (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-base font-bold font-display text-slate-900 mb-6 flex items-center gap-2">
              <span>Alur Pemesanan Cepat</span>
              <span className="text-xs font-normal text-slate-500">(Tanpa Ribet)</span>
            </h3>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
              {steps.map((step, idx) => (
                <div key={idx} className="req-step-item relative space-y-1">
                  {/* Step Dot */}
                  <div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold shadow-sm ring-4 ring-white">
                    {idx + 1}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Langkah {step.num}</span>
                  </div>
                  
                  <h4 className="text-sm font-bold text-slate-900 font-display">
                    {step.title}
                  </h4>
                  
                  <p className="text-xs text-slate-600 leading-relaxed pt-0.5">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <a
                href={buildWhatsAppSupportUrl('Halo Admin, Saya Ingin Mulai Booking Unit')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                <span>Mulai Booking via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
