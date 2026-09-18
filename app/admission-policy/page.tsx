import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, FileCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Admission Policy | St. Mary's University",
  description: "Official admission policy, non-discrimination statement, merit guidelines, and verification rules for St. Mary's University Hyderabad.",
};

export default function AdmissionPolicyPage() {
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
            <span className="text-[#019e6e]">Admission Policy</span>
          </div>

          <h1 className="smru-h1 text-[#0d315c] uppercase">
            Admission Policy
          </h1>
          <div className="h-1.5 w-20 cut-corner-underline bg-[#ffaf3a] mx-auto" />

          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Institutional principles governing fair, transparent, inclusive, and merit-oriented student admissions at St. Mary&apos;s University.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white border border-slate-200 cut-corner-panel p-8 shadow-sm space-y-6">
            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#0d315c] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#019e6e]" /> 1. Non-Discrimination and Equal Opportunity
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                St. Mary&apos;s University strictly adheres to equal opportunity admission principles. No candidate is denied consideration on grounds of religion, race, caste, sex, place of birth, or disability, in alignment with the Constitution of India and UGC regulatory mandates.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#0d315c] flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#019e6e]" /> 2. Transparent Merit Determination
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Admission into all academic programs is granted based on verified eligibility criteria, academic marks secured in qualifying examinations (10+2, Bachelor&apos;s, or Master&apos;s degrees), entrance examination merit where mandated, and personal counseling assessment.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#0d315c] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#019e6e]" /> 3. Document Verification
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All provisional admissions remain conditional until physical original documents, including qualifying marks sheets, transfer certificates, conduct certificates, and statutory caste/income certificates (if applicable), are verified by the Registrar&apos;s office.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#0d315c] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#019e6e]" /> 4. Anti-Ragging and Conduct Compliance
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every admitted student and their parent/guardian must submit the mandatory UGC Anti-Ragging undertaking at the time of final admission confirmation. The university enforces a strict zero-tolerance policy against any form of harassment or indiscipline.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/admissions/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0d315c] text-white cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-[#019e6e] transition-colors"
            >
              Back to Admissions Gateway <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
