'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: () => void;
}

export default function MobileNav({ isOpen, onClose, onOpenEnquiry }: MobileNavProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="fixed inset-0 z-[10000] lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-[100dvh] w-[min(88vw,380px)] bg-white shadow-2xl flex flex-col z-10 transition-transform">
        {/* Header with Close button */}
        <div className="flex items-center justify-end px-6 py-5 shrink-0 border-b border-slate-100">
          <button
            onClick={onClose}
            className="w-11 h-11 rounded-full bg-slate-50 flex items-center justify-center text-[#0d315c] hover:bg-slate-100 active:scale-90 transition-all"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-grow overflow-y-auto px-6 py-4">
          <nav className="divide-y divide-slate-100 text-left">
            <div className="py-4">
              <Link
                href="/"
                onClick={onClose}
                className="block text-[17px] font-bold text-[#0d315c] hover:text-[#019e6e] transition-colors"
              >
                Home
              </Link>
            </div>

            <div className="py-4">
              <Link
                href="/about/"
                onClick={onClose}
                className="block text-[17px] font-bold text-[#0d315c] hover:text-[#019e6e] transition-colors"
              >
                About us
              </Link>
            </div>

            {/* Academics Accordion */}
            <div className="py-4">
              <button
                onClick={() => toggleSection('academics')}
                className="w-full flex items-center justify-between text-[17px] font-bold text-[#0d315c] hover:text-[#019e6e] transition-colors text-left"
              >
                <span>Academics</span>
                {expandedSection === 'academics' ? (
                  <ChevronUp className="w-4 h-4 text-[#019e6e]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                )}
              </button>

              {expandedSection === 'academics' && (
                <ul className="mt-3 space-y-2 pl-4 border-l-2 border-[#019e6e]/30">
                  <li>
                    <Link
                      href="/schools/"
                      onClick={onClose}
                      className="block py-1 text-[15px] font-bold text-slate-600 hover:text-[#019e6e]"
                    >
                      Schools & Programs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academic-structure/"
                      onClick={onClose}
                      className="block py-1 text-[15px] font-bold text-slate-600 hover:text-[#019e6e]"
                    >
                      Academic Structure
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Admissions Accordion */}
            <div className="py-4">
              <button
                onClick={() => toggleSection('admissions')}
                className="w-full flex items-center justify-between text-[17px] font-bold text-[#0d315c] hover:text-[#019e6e] transition-colors text-left"
              >
                <span>Admissions</span>
                {expandedSection === 'admissions' ? (
                  <ChevronUp className="w-4 h-4 text-[#019e6e]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                )}
              </button>

              {expandedSection === 'admissions' && (
                <ul className="mt-3 space-y-2 pl-4 border-l-2 border-[#019e6e]/30">
                  <li>
                    <Link
                      href="/admissions/"
                      onClick={onClose}
                      className="block py-1 text-[15px] font-bold text-slate-600 hover:text-[#019e6e]"
                    >
                      Admission Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact/"
                      onClick={onClose}
                      className="block py-1 text-[15px] font-bold text-slate-600 hover:text-[#019e6e]"
                    >
                      Counselling Helpdesk
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/phd-admissions/"
                      onClick={onClose}
                      className="block py-1 text-[15px] font-bold text-slate-600 hover:text-[#019e6e]"
                    >
                      Ph.D Admissions
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://apply.smru.edu.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-1 text-[15px] font-black text-[#019e6e] hover:underline"
                    >
                      Apply Online
                    </a>
                  </li>
                </ul>
              )}
            </div>

            <div className="py-4">
              <Link
                href="/events/"
                onClick={onClose}
                className="block text-[17px] font-bold text-[#0d315c] hover:text-[#019e6e] transition-colors"
              >
                Events
              </Link>
            </div>

            <div className="py-4">
              <Link
                href="/search/"
                onClick={onClose}
                className="block text-[17px] font-bold text-[#0d315c] hover:text-[#019e6e] transition-colors"
              >
                Search
              </Link>
            </div>

            <div className="py-4">
              <Link
                href="/careers/"
                onClick={onClose}
                className="block text-[17px] font-bold text-[#0d315c] hover:text-[#019e6e] transition-colors"
              >
                Careers
              </Link>
            </div>

            <div className="py-4">
              <Link
                href="/campus-360/"
                onClick={onClose}
                className="block text-[17px] font-bold text-[#0d315c] hover:text-[#019e6e] transition-colors"
              >
                Campus 360
              </Link>
            </div>

            <div className="py-4">
              <Link
                href="/contact/"
                onClick={onClose}
                className="block text-[17px] font-bold text-[#0d315c] hover:text-[#019e6e] transition-colors"
              >
                Contact us
              </Link>
            </div>
          </nav>
        </div>

        {/* Footer in Drawer */}
        <div className="px-6 py-6 border-t border-slate-100 mt-auto bg-slate-50">
          <button
            onClick={() => {
              onClose();
              onOpenEnquiry();
            }}
            className="w-full py-3.5 bg-[#019e6e] text-white rounded-[12px] font-black text-[13px] uppercase tracking-widest shadow-lg shadow-[#019e6e]/20 hover:bg-[#10bb82] active:scale-95 transition-all mb-4"
          >
            ENQUIRE NOW
          </button>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
            © 2026 ST. MARY&apos;S REHABILITATION UNIVERSITY
          </p>
        </div>
      </div>
    </div>
  );
}
