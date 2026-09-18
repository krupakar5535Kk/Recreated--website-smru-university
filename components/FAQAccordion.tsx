'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '@/types';

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3.5 max-w-4xl mx-auto text-left">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border transition-all cut-corner-card bg-white overflow-hidden ${
              isOpen
                ? 'border-[#019e6e] shadow-[0_8px_24px_rgba(1,158,110,0.08)]'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 text-left transition-colors"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-xs font-black transition-colors ${
                    isOpen
                      ? 'bg-[#019e6e] text-white'
                      : 'bg-slate-100 text-[#0d315c]'
                  }`}
                >
                  {idx + 1}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0d315c] leading-snug">
                  {item.question}
                </h3>
              </div>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-[#019e6e] transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-slate-600 text-sm sm:text-[15px] leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
