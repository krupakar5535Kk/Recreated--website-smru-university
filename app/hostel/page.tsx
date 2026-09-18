import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Wifi, Utensils, CheckCircle2, Bed, HeartPulse, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Hostel Facilities | St. Mary's University",
  description: "Explore on-campus residential hostel facilities for students at St. Mary's University Hyderabad with 24/7 security, high-speed Wi-Fi, and nutritious dining.",
};

export default function HostelPage() {
  return (
    <div className="bg-[#f8fbff] min-h-screen py-12 md:py-16">
      <div className="smru-container">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 mb-8">
          <Link href="/" className="hover:text-[#019e6e]">Home</Link>
          <span>/</span>
          <span className="text-[#019e6e]">Hostel Facilities</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-[#0d315c] text-white p-8 md:p-14 cut-corner-panel shadow-2xl relative overflow-hidden mb-12">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="px-3 py-1 cut-corner-badge bg-[#019e6e] text-white text-[10px] font-black uppercase tracking-widest inline-block">
              Residential Life
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Hostel Facilities at <span className="text-[#ffaf3a]">St. Mary&apos;s University</span>
            </h1>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Safe, secure, and modern on-campus student residences designed to cultivate academic concentration, camaraderie, personal well-being, and balanced student living.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/hostel-360/"
                className="px-6 py-3.5 bg-[#019e6e] text-white cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-[#10bb82] transition-colors"
              >
                Hostel 360° Tour
              </Link>
              <Link
                href="/contact/"
                className="px-6 py-3.5 bg-white/10 text-white cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-colors"
              >
                Inquire Hostel Charges
              </Link>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-slate-200 cut-corner-card p-6 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#019e6e]/10 text-[#019e6e] flex items-center justify-center">
              <Bed className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-[#0d315c]">Furnished Living Spaces</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Well-ventilated rooms equipped with individual study desks, ergonomic chairs, spacious wardrobes, and comfortable bedding options.
            </p>
          </div>

          <div className="bg-white border border-slate-200 cut-corner-card p-6 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#ffaf3a]/15 text-[#e8971f] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-[#0d315c]">24/7 Security &amp; Wardens</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              CCTV surveillance across entry gates, corridors, and perimeters with dedicated resident male and female wardens.
            </p>
          </div>

          <div className="bg-white border border-slate-200 cut-corner-card p-6 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#0d315c]/10 text-[#0d315c] flex items-center justify-center">
              <Utensils className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-[#0d315c]">Hygienic Dining Mess</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nutritious breakfast, lunch, snacks, and dinner prepared in an industrial kitchen under strict food hygiene standards.
            </p>
          </div>

          <div className="bg-white border border-slate-200 cut-corner-card p-6 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#0fa571]/10 text-[#0fa571] flex items-center justify-center">
              <Wifi className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-[#0d315c]">High-Speed Wi-Fi</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Uninterrupted campus network connection across all hostel rooms, common halls, and study libraries for digital research.
            </p>
          </div>

          <div className="bg-white border border-slate-200 cut-corner-card p-6 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#155e75]/10 text-[#155e75] flex items-center justify-center">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-[#0d315c]">Medical &amp; First Aid</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              On-campus health center, 24/7 first-aid station, resident nursing staff, and emergency medical ambulance transportation.
            </p>
          </div>

          <div className="bg-white border border-slate-200 cut-corner-card p-6 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#d97706]/10 text-[#d97706] flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-[#0d315c]">Power Backup &amp; RO Water</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Continuous generator power backup, solar water heating systems, and multi-stage RO purified drinking water stations.
            </p>
          </div>
        </div>

        {/* Hostel Charges & Admissions Info */}
        <div className="bg-white border border-slate-200 cut-corner-panel p-8 shadow-sm space-y-4 max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-black text-[#0d315c]">
            Hostel Admissions &amp; Booking
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Hostel accommodation is allocated on a first-come, first-served basis during admissions counselling. Room options include single, double, and triple-sharing rooms. Room charges and meal plan options are confirmed directly with the admissions team.
          </p>
          <div className="pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0d315c] text-white cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-[#019e6e] transition-colors"
            >
              Contact Admissions Helpdesk <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
