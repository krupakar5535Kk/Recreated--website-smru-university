import React from "react";
import Link from "next/link";
import { Award, CheckCircle, BarChart3, BookOpen, Layers, Target } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IQAC - Internal Quality Assurance Cell | St. Mary's University (SMRU)",
  description: "Internal Quality Assurance Cell (IQAC) of St. Mary's University dedicated to continuous curriculum refinement, academic excellence, and pedagogical innovation.",
};

export default function IQACPage() {
  const initiatives = [
    {
      title: "Outcome-Based Education (OBE)",
      desc: "Systematic mapping of Program Outcomes (POs), Program Specific Outcomes (PSOs), and Course Outcomes (COs) aligned with National Board of Accreditation benchmarks.",
    },
    {
      title: "Academic & Administrative Audits (AAA)",
      desc: "Annual peer review audits across all 6 schools and 15 departments covering curriculum relevance, lab modernisation, and publication output.",
    },
    {
      title: "Continuous Faculty Enrichment",
      desc: "Mandatory Faculty Development Programmes (FDPs), industry immersions, pedagogical training, and research grant sponsorships.",
    },
    {
      title: "Student Feedback & Stakeholder Surveys",
      desc: "Structured feedback cycles collected every semester from students, parents, alumni, and corporate recruiters for curriculum revisions.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-[#0d315c] text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#ffaf3a] bg-[#ffaf3a]/15 rounded-full mb-3">
              <Award className="w-4 h-4" />
              Academic Standards & Assurance
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Internal Quality Assurance Cell (IQAC)
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Fostering a culture of academic rigor, continuous curriculum improvement, research excellence, and institutional effectiveness at St. Mary&apos;s University.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Overview */}
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm">
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
              Mandate & Strategic Role
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              The Internal Quality Assurance Cell (IQAC) at St. Mary&apos;s University operates as the central nodal agency for guiding, planning, and monitoring academic quality enhancements. In conformity with NAAC and UGC guidelines, IQAC designs mechanisms for conscious, consistent, and catalytic improvements in overall academic and administrative performance.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              By spearheading the institutionalization of best pedagogical practices, modern laboratory infrastructure, and assistive technology integration, IQAC ensures that SMRU students graduate with globally competitive competence and social empathy.
            </p>
          </div>

          {/* Core Focus Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initiatives.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded bg-emerald-50 text-[#019e6e] flex items-center justify-center mb-4 font-bold text-sm">
                  {idx + 1}
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quick links */}
          <div className="bg-[#0d315c] text-white p-6 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-heading font-bold text-base text-[#ffaf3a] mb-1">
                Explore Our Multidisciplinary Programs
              </h4>
              <p className="text-xs text-slate-300">
                View all 71 degree programs structured under the Choice-Based Credit System (CBCS).
              </p>
            </div>
            <Link
              href="/academic-structure"
              className="px-4 py-2 bg-[#019e6e] hover:bg-[#01865d] text-white text-xs font-bold rounded transition-colors shrink-0"
            >
              Academic Structure &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
