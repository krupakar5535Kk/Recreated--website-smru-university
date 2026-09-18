import { Metadata } from 'next';
import Link from 'next/link';
import Campus360Viewer from '@/components/Campus360Viewer';
import { ArrowRight, Bed, ShieldCheck, Wifi } from 'lucide-react';

export const metadata: Metadata = {
  title: "Hostel 360° Virtual Tour | St. Mary's University",
  description: "Take an interactive 360° virtual tour through the high-end residential hostels and student living facilities at St. Mary's University Hyderabad.",
};

export default function Hostel360Page() {
  return (
    <div className="bg-[#f8fbff] min-h-screen py-12 md:py-16">
      <div className="smru-container">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 mb-8">
          <Link href="/" className="hover:text-[#019e6e]">Home</Link>
          <span>/</span>
          <Link href="/hostel/" className="hover:text-[#019e6e]">Hostels</Link>
          <span>/</span>
          <span className="text-[#019e6e]">Hostel 360° Tour</span>
        </div>

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-[#019e6e]">
            Virtual Residential Walkthrough
          </span>
          <h1 className="smru-h1 text-[#0d315c] uppercase">
            High-End Hostel &amp; Residential Living
          </h1>
          <div className="h-1.5 w-20 cut-corner-underline bg-[#ffaf3a] mx-auto" />
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Tour the residential student living spaces, recreation rooms, study lounges, and dining pavilions from the comfort of your screen.
          </p>
        </div>

        {/* 360 Viewer initialized to hostel-block */}
        <Campus360Viewer initialSlug="hostel-block" />

        {/* Additional information card */}
        <div className="mt-12 bg-white border border-slate-200 cut-corner-panel p-8 shadow-sm text-center max-w-2xl mx-auto space-y-4">
          <h3 className="text-lg font-black text-[#0d315c]">
            Interested in Residential Accommodation?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Hostel slots for the 2026-27 batch are allocated upon admission confirmation. Call our admissions team to check room availability.
          </p>
          <div className="pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#019e6e] text-white cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-[#10bb82] transition-colors"
            >
              Contact Admissions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
