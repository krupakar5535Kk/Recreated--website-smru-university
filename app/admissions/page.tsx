import { Metadata } from 'next';
import Link from 'next/link';
import { scholarshipList } from '@/data/scholarshipData';
import { universityFAQs } from '@/data/faqData';
import FAQAccordion from '@/components/FAQAccordion';
import {
  ArrowRight,
  GraduationCap,
  FileText,
  CheckCircle2,
  Calendar,
  Award,
  PhoneCall,
  Clock,
  HelpCircle,
  FileCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Admissions Open 2026 | St. Mary's University",
  description: "Apply for 2026-27 undergraduate, postgraduate, and diploma admissions at St. Mary's University Hyderabad. Explore scholarships, eligibility, and counselling details.",
};

export default function AdmissionsPage() {
  const admissionFaqs = universityFAQs.filter((f) => f.category === 'Admissions' || f.category === 'General');

  return (
    <div className="bg-[#f8fbff] min-h-screen py-12 md:py-16">
      <div className="smru-container">
        {/* Breadcrumb & Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
            <Link href="/" className="hover:text-[#019e6e]">Home</Link>
            <span>/</span>
            <span className="text-[#019e6e]">Admissions 2026-27</span>
          </div>

          <h1 className="smru-h1 text-[#0d315c] uppercase">
            Admissions Gateway
          </h1>
          <div className="h-1.5 w-20 cut-corner-underline bg-[#ffaf3a] mx-auto" />

          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Welcome to the admissions portal of St. Mary&apos;s University. Applications are invited for the 2026-27 academic session across allied health, rehabilitation sciences, psychology, nursing, law, and engineering.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="https://apply.smru.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#019e6e] text-white cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-[#10bb82] transition-colors shadow-lg"
            >
              Apply Online Now <ArrowRight className="w-4 h-4 ml-1 inline" />
            </a>
            <Link
              href="/phd-admissions/"
              className="px-6 py-3.5 bg-white border border-slate-200 text-[#0d315c] cut-corner-badge font-black text-xs uppercase tracking-widest hover:border-[#019e6e] hover:text-[#019e6e] transition-colors"
            >
              Ph.D. Admissions Notice
            </Link>
          </div>
        </div>

        {/* Admission Paths */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0d315c]">
              Choose Your Admission Path
            </h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">
              Select your level of study to review pathways and eligibility
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 cut-corner-card p-6 shadow-sm hover:shadow-lg transition-all text-center">
              <span className="w-12 h-12 rounded-full bg-[#019e6e]/10 text-[#019e6e] flex items-center justify-center mx-auto mb-4 font-black">
                UG
              </span>
              <h3 className="text-lg font-black text-[#0d315c] mb-2">Undergraduate</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                BPT, BOT, BPO, BASLP, B.Sc. Allied Health, B.Sc. Nursing, B.Tech. Engineering &amp; Law.
              </p>
              <Link
                href="/schools/"
                className="text-xs font-black uppercase tracking-wider text-[#019e6e] hover:underline"
              >
                Browse UG Programs &rarr;
              </Link>
            </div>

            <div className="bg-white border border-slate-200 cut-corner-card p-6 shadow-sm hover:shadow-lg transition-all text-center">
              <span className="w-12 h-12 rounded-full bg-[#ffaf3a]/15 text-[#e8971f] flex items-center justify-center mx-auto mb-4 font-black">
                PG
              </span>
              <h3 className="text-lg font-black text-[#0d315c] mb-2">Postgraduate</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                MPT, MOT, MPO, M.Sc. Audiology, M.A. Clinical Psychology, M.Sc. Nursing &amp; LL.M.
              </p>
              <Link
                href="/schools/"
                className="text-xs font-black uppercase tracking-wider text-[#019e6e] hover:underline"
              >
                Browse PG Programs &rarr;
              </Link>
            </div>

            <div className="bg-white border border-slate-200 cut-corner-card p-6 shadow-sm hover:shadow-lg transition-all text-center">
              <span className="w-12 h-12 rounded-full bg-[#0d315c]/10 text-[#0d315c] flex items-center justify-center mx-auto mb-4 font-black">
                Ph.D
              </span>
              <h3 className="text-lg font-black text-[#0d315c] mb-2">Doctoral (Ph.D.)</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Research programs across Physiotherapy, Audiology, Psychology, Law, and Technology.
              </p>
              <Link
                href="/phd-admissions/"
                className="text-xs font-black uppercase tracking-wider text-[#019e6e] hover:underline"
              >
                Check Ph.D Status &rarr;
              </Link>
            </div>

            <div className="bg-white border border-slate-200 cut-corner-card p-6 shadow-sm hover:shadow-lg transition-all text-center">
              <span className="w-12 h-12 rounded-full bg-[#0fa571]/10 text-[#0fa571] flex items-center justify-center mx-auto mb-4 font-black">
                Dip
              </span>
              <h3 className="text-lg font-black text-[#0d315c] mb-2">Diplomas</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Specialized Professional Diplomas in Clinical and Rehabilitation Psychology.
              </p>
              <Link
                href="/schools/"
                className="text-xs font-black uppercase tracking-wider text-[#019e6e] hover:underline"
              >
                Browse Diplomas &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Admission Journey / Steps */}
        <section className="mb-16 bg-white border border-slate-200 cut-corner-panel p-8 md:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0d315c]">
              The Admission Journey
            </h2>
            <div className="mt-3 h-1 w-16 bg-[#ffaf3a] mx-auto" />
            <p className="text-xs text-slate-500 font-semibold mt-2">
              Four straightforward steps to secure your enrollment at St. Mary&apos;s University
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="p-6 bg-slate-50 border border-slate-200 cut-corner-card text-center relative space-y-3">
              <span className="w-10 h-10 rounded-full bg-[#0d315c] text-white font-black text-sm flex items-center justify-center mx-auto">
                1
              </span>
              <h3 className="text-base font-black text-[#0d315c]">Online Application</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fill the online application form at apply.smru.edu.in with academic particulars.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 cut-corner-card text-center relative space-y-3">
              <span className="w-10 h-10 rounded-full bg-[#019e6e] text-white font-black text-sm flex items-center justify-center mx-auto">
                2
              </span>
              <h3 className="text-base font-black text-[#0d315c]">Eligibility Review</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Verification of academic transcripts, certificates, and entrance scorecards (if applicable).
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 cut-corner-card text-center relative space-y-3">
              <span className="w-10 h-10 rounded-full bg-[#ffaf3a] text-[#0d315c] font-black text-sm flex items-center justify-center mx-auto">
                3
              </span>
              <h3 className="text-base font-black text-[#0d315c]">Counselling Session</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                One-on-one academic discussion for course finalization, scholarships, and fee verification.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 cut-corner-card text-center relative space-y-3">
              <span className="w-10 h-10 rounded-full bg-[#155e75] text-white font-black text-sm flex items-center justify-center mx-auto">
                4
              </span>
              <h3 className="text-base font-black text-[#0d315c]">Seat Confirmation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Provisional admission allotment, enrollment formalities, and hostel room booking.
              </p>
            </div>
          </div>
        </section>

        {/* Scholarships Section */}
        <section id="scholarships" className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-[#019e6e]">
              Financial Assistance
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0d315c] mt-1">
              Scholarship Opportunities
            </h2>
            <div className="mt-3 h-1 w-16 bg-[#ffaf3a] mx-auto" />
            <p className="text-xs text-slate-500 font-semibold mt-2">
              Rewarding merit, encouraging diversity, and expanding access to healthcare and technical education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarshipList.map((scholarship) => (
              <div
                key={scholarship.id}
                className="bg-white border border-slate-200 cut-corner-card p-6 shadow-sm hover:shadow-lg transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <Award className="w-5 h-5 text-[#ffaf3a]" />
                  <span className="px-2 py-0.5 bg-[#f0fdf4] text-[#166534] border border-[#bbf7d0] rounded text-[9px] font-black uppercase">
                    {scholarship.tag}
                  </span>
                </div>

                <h3 className="text-base font-black text-[#0d315c]">
                  {scholarship.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {scholarship.description}
                </p>

                <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                  <strong>Criteria:</strong> {scholarship.eligibility}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Admissions FAQ */}
        <section className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0d315c]">
              Admissions FAQ
            </h2>
            <div className="mt-3 h-1 w-16 bg-[#ffaf3a] mx-auto" />
          </div>

          <FAQAccordion items={admissionFaqs} />
        </section>

        {/* CTA Card */}
        <div className="bg-[#0d315c] text-white p-8 md:p-12 cut-corner-panel text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-black text-[#ffaf3a]">
            Ready to Apply?
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            The official application portal is open for undergraduate, postgraduate, and diploma programs.
          </p>
          <div className="pt-2">
            <a
              href="https://apply.smru.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#019e6e] text-white cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-[#10bb82] transition-colors shadow-lg"
            >
              Go to apply.smru.edu.in <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
