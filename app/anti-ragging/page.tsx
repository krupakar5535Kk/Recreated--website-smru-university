import React from "react";
import Link from "next/link";
import { ShieldAlert, Phone, Mail, CheckCircle, AlertTriangle, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anti-Ragging Cell & Policy | St. Mary's University (SMRU)",
  description: "Zero-tolerance policy against ragging at St. Mary's University in strict compliance with UGC Regulations and Supreme Court directives.",
};

export default function AntiRaggingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-[#0d315c] text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rose-300 bg-rose-500/20 rounded-full mb-3">
              <ShieldAlert className="w-4 h-4 text-rose-400" />
              Zero Tolerance Policy
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Anti-Ragging Cell & Policy
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              St. Mary&apos;s University enforces an uncompromising zero-tolerance policy towards ragging in any form across its academic blocks, hostels, sports complexes, and university transit.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            {/* UGC Compliance Statement */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                Statutory Compliance & UGC Mandate
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                In strict compliance with the directives of the <strong>Hon&apos;ble Supreme Court of India</strong> and the <strong>University Grants Commission (UGC) Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009</strong>, ragging is completely prohibited on the SMRU campus.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                Any student found guilty of indulging, abetting, or conspiring in ragging shall face stringent penal actions, which may include immediate suspension, expulsion, cancellation of admission, withholding of results/degrees, debarring from representing the university, and lodging of a First Information Report (FIR) with law enforcement authorities.
              </p>

              <h3 className="font-heading text-lg font-bold text-slate-900 mb-3">
                Forms of Ragging Prohibited
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                {[
                  "Verbal abuse, mockery, or offensive language",
                  "Physical assault or force in any manner",
                  "Psychological intimidation or harassment",
                  "Forced participation in tasks against dignity",
                  "Digital harassment, cyberbullying, or trolling",
                  "Financial extortion or unauthorized tasks",
                  "Hostel entry harassment or bed-checks",
                  "Denial of barrier-free access or discrimination",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-100">
                    <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Anti-Ragging Squad & Mechanism */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm">
              <h2 className="font-heading text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                Institutional Monitoring Architecture
              </h2>
              <div className="space-y-4 text-sm text-slate-600">
                <div className="p-4 rounded bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Anti-Ragging Committee</h4>
                  <p className="text-xs">
                    Headed by senior university administrators, faculty deans, local police representatives, civil society members, and student council delegates to oversee prevention measures.
                  </p>
                </div>
                <div className="p-4 rounded bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Anti-Ragging Flying Squad</h4>
                  <p className="text-xs">
                    Conducts surprise inspections across residential hostels, mess dining halls, cafeteria, library corridors, and bus boarding zones during both day and night hours.
                  </p>
                </div>
                <div className="p-4 rounded bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Mandatory Student & Parent Undertakings</h4>
                  <p className="text-xs">
                    Every admitted student and their parent/guardian must submit an online anti-ragging affidavit as mandated by UGC at the time of admission enrolment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Helplines Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-rose-50 border border-rose-200 rounded-lg p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block mb-2">
                24x7 Emergency Helplines
              </span>
              <h3 className="font-heading font-bold text-lg text-rose-950 mb-3">
                Report Ragging Immediately
              </h3>
              <p className="text-xs text-rose-800 leading-relaxed mb-6">
                Your identity will remain strictly confidential. You can reach out immediately to any of the numbers below:
              </p>

              <div className="space-y-3">
                <a
                  href="tel:18001805522"
                  className="block p-3 bg-white rounded border border-rose-200 text-center hover:bg-rose-100/50 transition-colors"
                >
                  <span className="block text-[11px] text-slate-500 font-semibold">National UGC Anti-Ragging Helpline (Toll-Free)</span>
                  <span className="block font-bold text-rose-600 text-sm mt-0.5">1800-180-5522</span>
                </a>

                <a
                  href="tel:7331119432"
                  className="block p-3 bg-white rounded border border-rose-200 text-center hover:bg-rose-100/50 transition-colors"
                >
                  <span className="block text-[11px] text-slate-500 font-semibold">SMRU Campus Vigilance Officer</span>
                  <span className="block font-bold text-[#0d315c] text-sm mt-0.5">+91 73311 19432</span>
                </a>

                <a
                  href="mailto:antiragging@smru.edu.in"
                  className="block p-3 bg-white rounded border border-rose-200 text-center hover:bg-rose-100/50 transition-colors"
                >
                  <span className="block text-[11px] text-slate-500 font-semibold">Confidential Email Reporting</span>
                  <span className="block font-bold text-[#019e6e] text-xs mt-0.5">antiragging@smru.edu.in</span>
                </a>
              </div>
            </div>

            <div className="bg-[#0d315c] text-white p-6 rounded-lg text-xs">
              <h4 className="font-heading font-bold text-sm text-[#ffaf3a] mb-2">
                Online Affidavit Portal
              </h4>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Fill the mandatory national anti-ragging undertaking online on the UGC Antiragging portal:
              </p>
              <a
                href="https://www.antiragging.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 px-3 bg-[#019e6e] hover:bg-[#01865d] text-white font-bold rounded transition-colors"
              >
                UGC Anti-Ragging Portal &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
