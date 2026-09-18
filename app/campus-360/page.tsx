import { Metadata } from 'next';
import Link from 'next/link';
import Campus360Viewer from '@/components/Campus360Viewer';
import { ArrowRight, Compass, MapPin, PhoneCall } from 'lucide-react';

export const metadata: Metadata = {
  title: "Virtual Campus Tour | St. Mary's University",
  description: "Experience the St. Mary's University Hyderabad campus in 360°. Walk through our 22 virtual locations including labs, hospital, hostel blocks, and sports complexes.",
};

export default function Campus360Page() {
  return (
    <div className="bg-[#f8fbff] min-h-screen py-12 md:py-16">
      <div className="smru-container">
        {/* Breadcrumb & Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
            <Link href="/" className="hover:text-[#019e6e]">Home</Link>
            <span>/</span>
            <span className="text-[#019e6e]">Campus 360° Virtual Tour</span>
          </div>

          <h1 className="smru-h1 text-[#0d315c] uppercase">
            Virtual Campus Tour
          </h1>
          <div className="h-1.5 w-20 cut-corner-underline bg-[#ffaf3a] mx-auto" />

          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Welcome to the interactive 360° tour of St. Mary&apos;s University Hyderabad. Explore all 22 official locations across academic blocks, research centres, clinical hospital suites, and student residential facilities.
          </p>
        </div>

        {/* 360 Interactive Viewer */}
        <Campus360Viewer />

        {/* Schedule Physical Campus Visit Card */}
        <div className="mt-14 bg-white border border-slate-200 cut-corner-panel p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#019e6e]">
              In-Person Experience
            </span>
            <h3 className="text-xl font-black text-[#0d315c]">
              Schedule an On-Campus Guided Tour
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              Campus visits are encouraged for prospective students and parents. Schedule your visit at least 24 hours in advance for a guided laboratory tour and admission counseling.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/contact/"
              className="px-6 py-3.5 bg-[#019e6e] text-white cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-[#10bb82] transition-colors"
            >
              Book Campus Visit
            </Link>
            <Link
              href="/campus-location-hyderabad/"
              className="px-6 py-3.5 bg-[#0d315c] text-white cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-[#1a4a84] transition-colors"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
