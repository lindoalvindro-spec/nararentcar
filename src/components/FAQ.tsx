import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FAQS_DATA } from '../data/faqs';
import { FAQItem } from '../types/rental';
import { buildWhatsAppSupportUrl } from '../utils/whatsapp';

gsap.registerPlugin(useGSAP);

interface FAQAccordionItemProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQAccordionItem: React.FC<FAQAccordionItemProps> = ({ faq, isOpen, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const element = contentRef.current;
    if (!element) return;

    if (isOpen) {
      gsap.fromTo(
        element,
        { height: 0, opacity: 0 },
        {
          height: element.scrollHeight,
          opacity: 1,
          duration: 0.35,
          ease: 'power2.out',
          onComplete: () => {
            element.style.height = 'auto';
          },
        }
      );
    } else {
      element.style.height = `${element.scrollHeight}px`;
      // force repaint
      void element.offsetHeight;
      gsap.to(element, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.inOut',
      });
    }
  }, [isOpen]);

  return (
    <div
      className={`faq-item rounded-xl border transition-all duration-200 overflow-hidden ${
        isOpen
          ? 'bg-white border-emerald-300 shadow-sm'
          : 'bg-white border-slate-200 hover:border-slate-300'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-inset"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <span className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-3">
          <HelpCircle
            className={`w-4 h-4 flex-shrink-0 transition-colors ${
              isOpen ? 'text-emerald-700' : 'text-slate-400'
            }`}
          />
          <span>{faq.question}</span>
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180 text-emerald-700' : 'text-slate-400'
          }`}
        />
      </button>

      <div
        ref={contentRef}
        id={`faq-answer-${faq.id}`}
        style={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-5');
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.faq-header',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.faq-item',
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.06,
          duration: 0.4,
          ease: 'power2.out',
          delay: 0.1,
        }
      );
      gsap.fromTo(
        '.faq-cta-box',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', delay: 0.25 }
      );
    },
    { scope: sectionRef }
  );

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section ref={sectionRef} id="faq" className="py-16 bg-slate-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="faq-header text-center mb-12 space-y-2">
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

        {/* Accordion list with smooth GSAP transition */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq) => (
            <FAQAccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => toggleFAQ(faq.id)}
            />
          ))}
        </div>

        {/* Contact Support CTA Box */}
        <div className="faq-cta-box mt-10 rounded-2xl bg-white border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm text-center sm:text-left">
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
