import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS_DATA } from '../data/faqs';
import { buildWhatsAppSupportUrl } from '../utils/whatsapp';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
            Pertanyaan Umum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Jawaban lengkap seputar sistem sewa, jaminan deposit, antar-jemput, dan ketentuan perjalanan.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden transition-all duration-200 hover:border-slate-700"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="text-sm sm:text-base font-bold text-white flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-brand-400 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180 text-brand-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white">Masih Memiliki Pertanyaan Lain?</h4>
            <p className="text-xs text-slate-400 mt-1">Tim Customer Support kami standby 24 jam untuk menjawab pertanyaan Anda.</p>
          </div>
          <a
            href={buildWhatsAppSupportUrl('Pertanyaan Khusus Seputar Sewa')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors shadow"
          >
            <MessageSquare className="w-4 h-4 text-brand-400" />
            <span>Chat CS via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
