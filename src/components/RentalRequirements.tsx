import React, { useState } from 'react';
import { CheckCircle2, User, Plane, Building, FileCheck, ArrowRight } from 'lucide-react';
import { buildWhatsAppSupportUrl } from '../utils/whatsapp';

export const RentalRequirements: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'domisili' | 'wisatawan' | 'perusahaan'>('domisili');

  const tabs = [
    { id: 'domisili', label: 'Warga Lokal / Domisili', icon: User },
    { id: 'wisatawan', label: 'Wisatawan / Tamu Luar Kota', icon: Plane },
    { id: 'perusahaan', label: 'Instansi / Perusahaan', icon: Building },
  ];

  const requirementsData = {
    domisili: [
      'E-KTP asli penyewa & penjamin (keluarga/kerabat se-KK)',
      'SIM A aktif yang masih berlaku',
      'Bukti tempat tinggal domisili (PBB, tagihan listrik, atau kartu keluarga)',
      'Akun media sosial aktif (Instagram / LinkedIn / Facebook)',
      'Deposit jaminan (dikembalikan 100% setelah unit kembali aman)',
    ],
    wisatawan: [
      'E-KTP asli penyewa',
      'SIM A aktif yang masih berlaku',
      'Tiket pesawat / kereta api Pulang-Pergi (PP)',
      'Bukti konfirmasi reservasi hotel / penginapan selama di kota',
      'Akun media sosial aktif',
      'Deposit jaminan sewa lepas kunci',
    ],
    perusahaan: [
      'NPWP & SIUP / NIB Perusahaan yang masih berlaku',
      'KTP & SIM A pengemudi yang ditunjuk',
      'Surat Keterangan Kerja atau Surat Tugas dari perusahaan',
      'Purchase Order (PO) resmi bertanda tangan pejabat berwenang',
      'Bebas uang jaminan deposit untuk corporate partner terdaftar',
    ],
  };

  const steps = [
    {
      num: '01',
      title: 'Pilih Mobil',
      desc: 'Tentukan unit mobil dan durasi hari sewa yang sesuai kebutuhan Anda.',
    },
    {
      num: '02',
      title: 'Verifikasi WA',
      desc: 'Kirim foto dokumen persyaratan ke WhatsApp admin kami untuk verifikasi cepat (kurang dari 15 menit).',
    },
    {
      num: '03',
      title: 'Antar Unit',
      desc: 'Mobil diantar langsung ke rumah, hotel, atau bandara sesuai jadwal yang Anda tentukan.',
    },
    {
      num: '04',
      title: 'Mulai Melaju',
      desc: 'Cek fisik kendaraan, tanda tangan serah terima, dan nikmati perjalanan menyenangkan Anda.',
    },
  ];

  return (
    <section id="syarat" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
            Transparan & Mudah
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Syarat Sewa Ringan & Alur Pemesanan
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Proses verifikasi dokumen cepat, aman, dan tanpa birokrasi berbelit. Kami menjamin privasi data Anda 100% terjaga.
          </p>
        </div>

        {/* Requirements Box with Tabs */}
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl mb-16">
          
          {/* Tabs header */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-950 border border-slate-800 mb-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-brand-500 text-slate-950 shadow-md shadow-brand-500/20 font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Checklist content */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-brand-400" />
              <span>Dokumen Persyaratan yang Diperlukan:</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {requirementsData[activeTab].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800/80"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800/80 mt-6">
              <span className="text-xs text-slate-400">
                Punya pertanyaan mengenai kelengkapan dokumen Anda?
              </span>
              <a
                href={buildWhatsAppSupportUrl('Pertanyaan Syarat Sewa')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-400 hover:text-brand-300 underline underline-offset-4"
              >
                <span>Tanya Admin Langsung</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Step-by-Step Flow */}
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            4 Langkah Mudah Sewa Mobil
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 text-left space-y-3"
            >
              <div className="text-3xl font-black text-brand-400/40 tracking-tight">
                {step.num}
              </div>
              <h4 className="text-base font-bold text-white">
                {step.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
