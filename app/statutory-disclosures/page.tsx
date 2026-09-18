import React from "react";
import Link from "next/link";
import { ShieldCheck, FileText, ArrowRight, Award, Building, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statutory Disclosures | St. Mary's University (SMRU)",
  description: "Official public and statutory disclosures, regulatory compliance, and university charter of St. Mary's University.",
};

export default function StatutoryDisclosuresPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-[#0d315c] text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#ffaf3a] bg-[#ffaf3a]/15 rounded-full mb-3">
              Official University Disclosures
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Statutory Disclosures & Transparency
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Transparent institutional disclosures, legal notifications, and statutory filings for students, parents, regulators, and the general public.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/mandatory-disclosure"
            className="block bg-white p-6 rounded-lg border border-slate-200 hover:border-[#019e6e] hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3 mb-3 text-[#019e6e]">
              <Building className="w-6 h-6" />
              <h2 className="font-heading text-xl font-bold text-slate-900 group-hover:text-[#019e6e] transition-colors">
                Mandatory Disclosure
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Comprehensive institutional parameters covering land, built-up instructional areas, academic faculties, governing bodies, and infrastructure.
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#019e6e]">
              View Mandatory Disclosures <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/approvals-recognitions"
            className="block bg-white p-6 rounded-lg border border-slate-200 hover:border-[#019e6e] hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3 mb-3 text-[#019e6e]">
              <Award className="w-6 h-6" />
              <h2 className="font-heading text-xl font-bold text-slate-900 group-hover:text-[#019e6e] transition-colors">
                Approvals & Recognitions
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Download copies of the UGC Section 2(f) recognition letter and the Telangana State Private Universities Act 10 of 2026.
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#019e6e]">
              View Statutory Approvals <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/fee-structure"
            className="block bg-white p-6 rounded-lg border border-slate-200 hover:border-[#019e6e] hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3 mb-3 text-[#019e6e]">
              <FileText className="w-6 h-6" />
              <h2 className="font-heading text-xl font-bold text-slate-900 group-hover:text-[#019e6e] transition-colors">
                Fee Structure Policy
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Counselling-governed tuition fee schedules, installment milestones, hostel boarding charges, and refund protocols.
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#019e6e]">
              Read Fee Policy <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/admission-policy"
            className="block bg-white p-6 rounded-lg border border-slate-200 hover:border-[#019e6e] hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3 mb-3 text-[#019e6e]">
              <ShieldCheck className="w-6 h-6" />
              <h2 className="font-heading text-xl font-bold text-slate-900 group-hover:text-[#019e6e] transition-colors">
                Admission Policy Charter
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Transparent, merit-first, non-discriminatory admission principles aligned with state reservations and national standards.
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#019e6e]">
              View Admission Charter <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
