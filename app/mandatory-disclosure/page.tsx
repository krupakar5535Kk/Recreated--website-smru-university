import React from "react";
import Link from "next/link";
import { 
  FileText, 
  ShieldCheck, 
  Building2, 
  Users, 
  CheckCircle, 
  ExternalLink,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mandatory Disclosure | St. Mary's University (SMRU)",
  description: "Statutory and mandatory public disclosures under UGC and Telangana State Private Universities regulations for St. Mary's University.",
};

export default function MandatoryDisclosurePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-[#0d315c] text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#ffaf3a] bg-[#ffaf3a]/15 rounded-full mb-3">
              Transparency & Institutional Accountability
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Mandatory Public Disclosures
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Published in accordance with the regulatory directives of the University Grants Commission (UGC) and the Telangana State Private Universities Act.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Section 1: University Identity */}
          <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#019e6e]" />
              1. University Identity & Sponsoring Body
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <span className="text-xs text-slate-500 font-semibold uppercase">Name of Institution</span>
                <p className="font-bold text-slate-900 mt-1">St. Mary&apos;s University (SMRU)</p>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-semibold uppercase">Sponsoring Society</span>
                <p className="font-bold text-slate-900 mt-1">Joseph Sriharsha & Mary Indraja Educational Society (JSMI)</p>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-semibold uppercase">Statutory Act of Establishment</span>
                <p className="text-slate-800 mt-1">Telangana State Private Universities (Establishment and Regulation) (Amendment) Act, 2026 (Act No. 10 of 2026)</p>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-semibold uppercase">UGC Recognition</span>
                <p className="text-slate-800 mt-1">Recognized under Section 2(f) of the UGC Act, 1956 (F.No. 8-18/2024(CPP-I/PU))</p>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-semibold uppercase">Campus Location</span>
                <p className="text-slate-800 mt-1">Deshmukhi (V), Pochampally (M), Yadadri Bhuvanagiri District, Telangana - 508284</p>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-semibold uppercase">Corporate / Admissions Office</span>
                <p className="text-slate-800 mt-1">LB Nagar, Hyderabad Metro Region, Telangana</p>
              </div>
            </div>
          </div>

          {/* Section 2: Statutory Officers & Governance */}
          <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#019e6e]" />
              2. Authorities & Statutory Governance Bodies
            </h2>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              The University functions through constitutional bodies established pursuant to the provisions of the SMRU Act, comprising distinguished academicians, industry leaders, government nominees, and administrative heads:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="p-4 bg-slate-50 rounded border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Governing Body</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The supreme authority responsible for overarching policy direction, institutional resource allocation, statutes approval, and long-term vision.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Board of Management</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Executive body responsible for administrative oversight, faculty appointments, financial controls, and university infrastructure.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Academic Council</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Principal academic authority approving curricula, degree regulations, examination norms, research protocols, and academic standards.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Campus & Physical Infrastructure */}
          <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#019e6e]" />
              3. Campus Infrastructure & Facilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-slate-50 rounded border border-slate-200">
                <span className="block text-2xl font-bold text-[#0d315c] mb-1">100%</span>
                <span className="text-xs text-slate-600 font-medium">Barrier-Free Accessibility</span>
              </div>
              <div className="p-4 bg-slate-50 rounded border border-slate-200">
                <span className="block text-2xl font-bold text-[#0d315c] mb-1">6</span>
                <span className="text-xs text-slate-600 font-medium">Academic Schools</span>
              </div>
              <div className="p-4 bg-slate-50 rounded border border-slate-200">
                <span className="block text-2xl font-bold text-[#0d315c] mb-1">15</span>
                <span className="text-xs text-slate-600 font-medium">Specialized Departments</span>
              </div>
              <div className="p-4 bg-slate-50 rounded border border-slate-200">
                <span className="block text-2xl font-bold text-[#0d315c] mb-1">71</span>
                <span className="text-xs text-slate-600 font-medium">Conferred Degree Programmes</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
              <Link href="/campus-360" className="text-[#019e6e] font-semibold hover:underline flex items-center gap-1">
                Virtual 360° Campus Tour <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <Link href="/academic-structure" className="text-[#019e6e] font-semibold hover:underline flex items-center gap-1">
                View Academic Structure <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <Link href="/fee-structure" className="text-[#019e6e] font-semibold hover:underline flex items-center gap-1">
                Official Fee Policy <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Section 4: Ombudsman & Redressal */}
          <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#019e6e]" />
              4. Statutory Grievance Redressal & Ombudsman
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              In accordance with the UGC (Redress of Grievances of Students) Regulations, the university has designated an independent University Ombudsman and established functional committees:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <Link href="/anti-ragging" className="p-3 bg-slate-50 rounded border border-slate-200 hover:border-[#019e6e] block">
                <span className="font-bold text-slate-900 block mb-1">Anti-Ragging Committee</span>
                <span className="text-slate-600">Zero-tolerance monitoring squad and helpline</span>
              </Link>
              <Link href="/grievance-redressal" className="p-3 bg-slate-50 rounded border border-slate-200 hover:border-[#019e6e] block">
                <span className="font-bold text-slate-900 block mb-1">Student Grievance Cell</span>
                <span className="text-slate-600">Formal escalation and redressal procedure</span>
              </Link>
              <Link href="/iqac-quality-assurance" className="p-3 bg-slate-50 rounded border border-slate-200 hover:border-[#019e6e] block">
                <span className="font-bold text-slate-900 block mb-1">Internal Quality Assurance Cell</span>
                <span className="text-slate-600">Academic audits and continuous quality enhancement</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
