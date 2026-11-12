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
    <section id="faq" className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md border border-emerald-200">
            Pusat Informasi
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Tanya Jawab Seputar Layanan Sewa (FAQ)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Jawaban lengkap seputar sistem pemesanan, ketentuan lepas kunci, deposit, dan fasilitas.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180 text-emerald-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Support CTA Box */}
        <div className="mt-10 rounded-2xl bg-white border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm text-center sm:text-left">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Pertanyaan Anda Belum Terjawab?</h3>
            <p className="text-xs text-slate-600 mt-1">Tim Customer Service kami siap melayani dan menjawab pertanyaan Anda via WhatsApp.</p>
          </div>
          <a
            href={buildWhatsAppSupportUrl('Pertanyaan Khusus Seputar Sewa Mobil')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Tanya Admin via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
