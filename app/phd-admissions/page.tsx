import { Metadata } from 'next';
import Link from 'next/link';
import { AlertCircle, ArrowRight, CheckCircle2, Clock, FileCheck, PhoneCall } from 'lucide-react';

export const metadata: Metadata = {
  title: "Ph.D. Admissions 2026 Status | St. Mary's University",
  description: "Official status and guidelines for Ph.D. admissions 2026-27 at St. Mary's University Hyderabad across rehabilitation, healthcare, engineering, psychology, and law.",
};

export default function PhdAdmissionsPage() {
  const researchAreas = [
    'Audiology & Speech Language Pathology',
    'Physiotherapy & Neurological Rehabilitation',
    'Occupational Therapy & Assistive Devices',
    'Clinical Psychology & Neuropsychology',
    'Inclusive Education & Special Education Needs',
    'Rehabilitation Engineering & Biomaterials',
    'Computer Science & Artificial Intelligence in Healthcare',
    'Constitutional & Healthcare Jurisprudence',
    'Allied Diagnostic Technologies'
  ];

  return (
    <div className="bg-[#f8fbff] min-h-screen py-12 md:py-16">
      <div className="smru-container">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 mb-8">
          <Link href="/" className="hover:text-[#019e6e]">Home</Link>
          <span>/</span>
          <Link href="/admissions/" className="hover:text-[#019e6e]">Admissions</Link>
          <span>/</span>
          <span className="text-[#019e6e]">Ph.D. Admissions</span>
        </div>

        {/* Status Notice Banner */}
        <div className="bg-white border-2 border-amber-300 cut-corner-panel p-6 md:p-8 shadow-sm mb-12 flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded">
              Current Cycle Notification
            </span>
            <h2 className="text-lg font-black text-[#0d315c]">
              Ph.D. Admissions 2026–27: Applications Closed
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Applications for the current Ph.D. admissions cycle are closed. Next-cycle entrance dates, eligibility notifications, and vacancy declarations will be announced through official university notices.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
          <div className="space-y-8">
            <div className="bg-white border border-slate-200 cut-corner-panel p-8 shadow-sm space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-[#019e6e]">
                Research Excellence
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-[#0d315c]">
                Doctoral Programmes (Ph.D.)
              </h1>
              <p className="text-sm text-slate-600 leading-relaxed">
                St. Mary&apos;s University offers Ph.D. degrees governed by University Grants Commission (Minimum Standards and Procedure for Award of Ph.D. Degree) Regulations. Our research ecosystem integrates state-of-the-art clinical laboratories, interdisciplinary faculty guides, and active hospital clinical collaborations.
              </p>
            </div>

            {/* Research Disciplines */}
            <div className="bg-white border border-slate-200 cut-corner-panel p-8 shadow-sm space-y-4">
              <h2 className="text-xl font-black text-[#0d315c]">
                Active Research Disciplines
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {researchAreas.map((area, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 bg-slate-50 border border-slate-100 rounded">
                    <CheckCircle2 className="w-4 h-4 text-[#019e6e] shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-slate-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Minimum Eligibility */}
            <div className="bg-white border border-slate-200 cut-corner-panel p-8 shadow-sm space-y-4">
              <h2 className="text-xl font-black text-[#0d315c]">
                General Ph.D. Eligibility Criteria
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed list-disc pl-5">
                <li>Master&apos;s degree or a professional degree declared equivalent to the Master’s degree by the corresponding statutory regulatory body, with at least 55% marks in aggregate or its equivalent grade &apos;B&apos; in the UGC 7-point scale.</li>
                <li>A relaxation of 5% of marks (from 55% to 50%) or an equivalent relaxation of grade is allowed for candidates belonging to SC/ST/OBC (non-creamy layer)/differently-abled categories.</li>
                <li>Candidates who have qualified UGC-NET / JRF / CSIR-NET / GATE or equivalent national-level fellowship examinations are given preference in interview rounds.</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 cut-corner-panel p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-[#0d315c] border-b border-slate-100 pb-2">
                Research Cell Contact
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                For doctoral guidelines, supervisor allocations, and upcoming cycle queries:
              </p>
              <div className="space-y-2 text-xs">
                <p><strong>Email:</strong> <a href="mailto:reach@smru.edu.in" className="text-[#019e6e] hover:underline">reach@smru.edu.in</a></p>
                <p><strong>Helpdesk:</strong> 7331119432 / 9010455591</p>
                <p><strong>Hours:</strong> Mon–Sat 9:30 AM to 5:30 PM</p>
              </div>
            </div>

            <div className="bg-[#0d315c] text-white cut-corner-panel p-6 shadow-md space-y-4">
              <h3 className="text-base font-black text-[#ffaf3a]">
                Admissions 2026-27
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Applications for UG and PG degree programmes remain open for the 2026-27 academic session.
              </p>
              <Link
                href="/admissions/"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#019e6e] hover:text-[#10bb82]"
              >
                Browse UG/PG Admissions &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
