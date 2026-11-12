import React, { useState } from 'react';
import { CheckCircle2, User, Plane, Building, FileCheck, ArrowRight } from 'lucide-react';
import { buildWhatsAppSupportUrl } from '../utils/whatsapp';

export const RentalRequirements: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'domisili' | 'wisatawan' | 'perusahaan'>('domisili');

  const tabs = [
    { id: 'domisili', label: 'Warga Domisili / Lokal', icon: User },
    { id: 'wisatawan', label: 'Wisatawan / Tamu Luar Kota', icon: Plane },
    { id: 'perusahaan', label: 'Instansi / Korporasi', icon: Building },
  ];

  const requirementsData = {
    domisili: [
      'E-KTP asli penyewa dan penjamin keluarga',
      'Surat Izin Mengemudi (SIM A) aktif dan sah',
      'Bukti tempat tinggal domisili (PBB, rekening listrik, atau Kartu Keluarga)',
      'Akun media sosial aktif untuk verifikasi identitas',
      'Deposit jaminan (dikembalikan utuh 100% setelah unit kembali dalam kondisi baik)',
    ],
    wisatawan: [
      'E-KTP asli penyewa',
      'Surat Izin Mengemudi (SIM A) aktif',
      'Tiket pesawat atau kereta api Pulang Pergi (PP)',
      'Bukti konfirmasi reservasi hotel atau penginapan selama kunjungan',
      'Akun media sosial aktif',
      'Deposit jaminan sewa lepas kunci',
    ],
    perusahaan: [
      'NPWP dan NIB / SIUP Perusahaan yang masih berlaku',
      'KTP dan SIM A pengemudi yang ditugaskan',
      'Surat Tugas atau Keterangan Kerja dari pimpinan instansi',
      'Purchase Order (PO) resmi dari instansi',
      'Bebas uang deposit jaminan untuk mitra korporat terdaftar',
    ],
  };

  const steps = [
    {
      num: '1',
      title: 'Pilih Unit Mobil',
      desc: 'Tentukan model kendaraan, opsi transmisi, dan durasi hari sewa yang Anda perlukan.',
    },
    {
      num: '2',
      title: 'Kirim Dokumen via WA',
      desc: 'Kirimkan foto dokumen persyaratan melalui WhatsApp untuk verifikasi kilat admin.',
    },
    {
      num: '3',
      title: 'Serah Terima Mobil',
      desc: 'Mobil diantar ke alamat rumah, bandara, atau stasiun sesuai jadwal yang Anda sepakati.',
    },
    {
      num: '4',
      title: 'Selesai & Refund Deposit',
      desc: 'Setelah masa sewa berakhir dan unit dicek bersama, deposit langsung dikembalikan utuh.',
    },
  ];

  return (
    <section id="syarat" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md border border-emerald-200">
            Panduan Transparan
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Persyaratan Sewa & Alur Pemesanan
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Proses verifikasi dokumen cepat, aman, dan tanpa syarat yang menyulitkan.
          </p>
        </div>

        {/* Tabbed Requirements Box */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-16">
          
          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 p-1 rounded-xl bg-slate-100 border border-slate-200 mb-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4 text-emerald-600" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Checklist content */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-700" />
              <span>Dokumen yang Perlu Disiapkan:</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {requirementsData[activeTab].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 mt-6 text-xs">
              <span className="text-slate-500">
                Memiliki dokumen yang belum lengkap atau kasus khusus?
              </span>
              <a
                href={buildWhatsAppSupportUrl('Konsultasi Dokumen Persyaratan Sewa')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-800"
              >
                <span>Tanya Admin Langsung</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* 4 Steps Section */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-slate-900">
            4 Langkah Praktis Menyewa Unit
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 text-left space-y-2 shadow-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                {step.num}
              </div>
              <h4 className="text-base font-bold text-slate-900">
                {step.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
