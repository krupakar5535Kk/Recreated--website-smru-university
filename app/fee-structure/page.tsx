import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, PhoneCall, HelpCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Fee Structure | St. Mary's University",
  description: "Official fee structure, payment schedules, and admissions counselling fee confirmation policy at St. Mary's University Hyderabad.",
};

export default function FeeStructurePage() {
  return (
    <div className="bg-[#f8fbff] min-h-screen py-12 md:py-16">
      <div className="smru-container">
        {/* Breadcrumb & Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
            <Link href="/" className="hover:text-[#019e6e]">Home</Link>
            <span>/</span>
            <Link href="/admissions/" className="hover:text-[#019e6e]">Admissions</Link>
            <span>/</span>
            <span className="text-[#019e6e]">Fee Structure</span>
          </div>

          <h1 className="smru-h1 text-[#0d315c] uppercase">
            Fee Structure &amp; Policies
          </h1>
          <div className="h-1.5 w-20 cut-corner-underline bg-[#ffaf3a] mx-auto" />

          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            St. Mary&apos;s University maintains transparent fee schedules across tuition, laboratory, and residential amenities, confirmed in person during admissions counselling.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Important Notice on Fee Confirmation */}
          <div className="bg-white border border-slate-200 cut-corner-panel p-8 shadow-sm space-y-5">
            <span className="text-xs font-black uppercase tracking-widest text-[#019e6e]">
              Official Transparency Notice
            </span>
            <h2 className="text-2xl font-black text-[#0d315c]">
              Counselling-Based Fee Confirmation
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We confirm programme fees, intake quotas, and hostel charges at personal admissions counselling rather than publishing a single uniform figure here. Because fee structures vary based on degree specialisation, clinical laboratory requirements, clinical rotation hours, and merit scholarship eligibility, our counselling team provides an itemized breakdown for each applicant.
            </p>

            <div className="p-4 bg-[#f8fbff] border-l-4 border-[#019e6e] text-slate-700 text-xs sm:text-sm leading-relaxed">
              To receive the official fee schedule for your specific programme of interest, submit your application at{' '}
              <a href="https://apply.smru.edu.in" target="_blank" rel="noopener noreferrer" className="font-bold text-[#019e6e] underline">
                apply.smru.edu.in
              </a>{' '}
              or speak directly with our admissions helpdesk at <strong className="text-[#0d315c]">7331119432</strong>.
            </div>
          </div>

          {/* Fee Components */}
          <div className="bg-white border border-slate-200 cut-corner-panel p-8 shadow-sm space-y-6">
            <h3 className="text-xl font-black text-[#0d315c]">
              Standard University Fee Components
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded space-y-1">
                <h4 className="text-sm font-black text-[#0d315c]">Tuition &amp; Instruction Fee</h4>
                <p className="text-xs text-slate-600">Covers classroom instruction, faculty mentorship, academic coursework, and library access.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded space-y-1">
                <h4 className="text-sm font-black text-[#0d315c]">Clinical &amp; Lab Facility Fee</h4>
                <p className="text-xs text-slate-600">Covers audiology booths, physiotherapy OPDs, gait analysis, simulation equipment, and materials.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded space-y-1">
                <h4 className="text-sm font-black text-[#0d315c]">Residential &amp; Mess Charges</h4>
                <p className="text-xs text-slate-600">Applicable for hostel boarders, covering lodging, 24/7 security, power backup, and three daily meals.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded space-y-1">
                <h4 className="text-sm font-black text-[#0d315c]">Examination &amp; Statutory Dues</h4>
                <p className="text-xs text-slate-600">Covers semester examination fees, grade sheet issuance, university registration, and degree conferral.</p>
              </div>
            </div>
          </div>

          {/* Contact Admissions Desk */}
          <div className="bg-[#0d315c] text-white cut-corner-panel p-8 text-center space-y-4">
            <h3 className="text-xl font-black text-[#ffaf3a]">
              Request Fee Confirmation for Your Program
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto">
              Our counsellors are available Mon-Sat (9:30 AM – 5:30 PM) to provide exact fee schedules, payment installment schedules, and scholarship deductions.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="tel:7331119432"
                className="px-6 py-3 bg-[#ffaf3a] text-[#0d315c] cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" /> Call: 7331119432
              </a>
              <Link
                href="/contact/"
                className="px-6 py-3 bg-white/10 text-white cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-colors"
              >
                Campus Helpdesk &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
