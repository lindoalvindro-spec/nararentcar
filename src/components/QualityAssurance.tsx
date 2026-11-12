import React from 'react';
import { ShieldCheck, RefreshCw, Sparkles, PhoneCall, FileText, CheckCircle } from 'lucide-react';

export const QualityAssurance: React.FC = () => {
  const commitments = [
    {
      icon: Sparkles,
      title: 'Pembersihan & Sanitasi Menyeluruh',
      desc: 'Setiap unit dicuci bersih luar-dalam, disedot debu, dan disterilkan dengan disinfektan sebelum diserahterimakan kepada penyewa baru.',
    },
    {
      icon: RefreshCw,
      title: 'Garansi Penggantian Unit Cepat',
      desc: 'Jika kendaraan mengalami kendala teknis atau mogok di jalan, tim kami segera mengirimkan mobil pengganti setara tanpa biaya tambahan.',
    },
    {
      icon: FileText,
      title: 'Transparansi Tarif & Bebas Biaya Siluman',
      desc: 'Semua rincian biaya, waktu sewa, dan batas overtime dicantumkan jelas pada formulir serah terima sejak awal.',
    },
    {
      icon: ShieldCheck,
      title: 'Surat Kendaraan Resmi & Pajak Hidup',
      desc: 'Seluruh armada memiliki STNK asli yang masih berlaku, uji kelayakan jalan teratur, dan bebas masalah tilang elektronik (ETLE).',
    },
    {
      icon: PhoneCall,
      title: 'Dukungan Siaga Darurat 24 Jam',
      desc: 'Layanan Customer Service dan tim derek rekanan kami siaga 24 jam sehari untuk membantu kendala Anda di jalan.',
    },
    {
      icon: CheckCircle,
      title: 'Pengembalian Deposit 1x24 Jam',
      desc: 'Uang deposit jaminan sewa lepas kunci diproses kembali utuh 100% maksimal 1x24 jam setelah unit dikembalikan dengan aman.',
    },
  ];

  return (
    <section id="mutu" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md border border-emerald-200">
            Jaminan Kualitas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Komitmen Standar Mutu RentCar Nusantara
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Kami menjaga kepercayaan Anda melalui prosedur operasional terstandarisasi di setiap perjalanan.
          </p>
        </div>

        {/* Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-700 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
