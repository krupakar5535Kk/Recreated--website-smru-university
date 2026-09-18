'use client';

import { Phone, MessageCircle, Send, HelpCircle } from 'lucide-react';

interface FloatingActionSidebarProps {
  onOpenEnquiry: () => void;
}

export default function FloatingActionSidebar({ onOpenEnquiry }: FloatingActionSidebarProps) {
  return (
    <div
      className="hidden lg:flex fixed right-0 top-[50%] z-[1200] pointer-events-none"
      style={{ transform: 'translateY(-50%)' }}
    >
      <div className="flex flex-col items-end pointer-events-auto gap-2">
        {/* WhatsApp */}
        <a
          href="https://wa.me/919493321969"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex flex-col items-center justify-center w-[52px] py-2.5 cut-corner-badge border border-black/5 transition-all duration-300 hover:w-[68px] hover:translate-x-[-5px] active:scale-95 shadow-[0_4px_15px_rgba(0,0,0,0.08)] bg-gradient-to-br from-[#c6f6d5] to-[#9ae6b4]"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="text-[18px] text-[#166534] w-4 h-4 drop-shadow-sm" />
          <span className="text-[7px] font-extrabold mt-1 text-[#166534] uppercase tracking-tighter">
            WhatsApp
          </span>
        </a>

        {/* Call Us */}
        <a
          href="tel:7331119432"
          className="relative flex flex-col items-center justify-center w-[52px] py-2.5 cut-corner-badge border border-black/5 transition-all duration-300 hover:w-[68px] hover:translate-x-[-5px] active:scale-95 shadow-[0_4px_15px_rgba(0,0,0,0.08)] bg-gradient-to-br from-[#fef08a] to-[#fde047]"
          title="Call Admissions Helpdesk"
        >
          <Phone className="text-[14px] text-[#854d0e] w-3.5 h-3.5 drop-shadow-sm" />
          <span className="text-[7px] font-extrabold mt-1 text-[#854d0e] uppercase tracking-tighter">
            Call Us
          </span>
        </a>

        {/* Apply */}
        <a
          href="https://apply.smru.edu.in"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex flex-col items-center justify-center w-[52px] py-2.5 cut-corner-badge border border-black/5 transition-all duration-300 hover:w-[68px] hover:translate-x-[-5px] active:scale-95 shadow-[0_4px_15px_rgba(0,0,0,0.08)] bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe]"
          title="Apply Online"
        >
          <Send className="text-[14px] text-[#1e3a8a] w-3.5 h-3.5 drop-shadow-sm" />
          <span className="text-[7px] font-extrabold mt-1 text-[#1e3a8a] uppercase tracking-tighter">
            Apply
          </span>
        </a>

        {/* Enquire */}
        <button
          type="button"
          onClick={onOpenEnquiry}
          className="relative flex flex-col items-center justify-center w-[52px] py-2.5 cut-corner-badge border border-black/5 transition-all duration-300 hover:w-[68px] hover:translate-x-[-5px] active:scale-95 shadow-[0_4px_15px_rgba(0,0,0,0.08)] bg-gradient-to-br from-[#ffedd5] to-[#fed7aa]"
          title="Admission Enquiry"
        >
          <HelpCircle className="text-[14px] text-[#9a3412] w-3.5 h-3.5 drop-shadow-sm" />
          <span className="text-[7px] font-extrabold mt-1 text-[#9a3412] uppercase tracking-tighter">
            Enquire
          </span>
        </button>
      </div>
    </div>
  );
}
