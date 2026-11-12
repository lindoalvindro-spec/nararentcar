import React from 'react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { REVIEWS_DATA } from '../data/reviews';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimoni" className="py-16 bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
            Kisah Nyata Pelanggan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Apa Kata Mereka Tentang RentCar Nusantara?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Ulasan jujur dari ribuan pelanggan perorangan, wisatawan, maupun instansi yang telah merasakan kenyamanan layanan kami.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-slate-700" />
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-500/20 border border-brand-500/40 text-brand-300 flex items-center justify-center font-bold text-xs">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white flex items-center gap-1">
                      <span>{rev.name}</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
                    </h4>
                    <p className="text-[11px] text-slate-400">{rev.location}</p>
                  </div>
                </div>
                <div className="mt-2 text-[10px] text-brand-400/90 font-medium">
                  Unit: {rev.carRented}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
