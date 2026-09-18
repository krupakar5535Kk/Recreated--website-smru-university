import React from "react";
import Link from "next/link";
import { Scale, Users, Mail, Phone, Clock, FileText, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grievance Redressal Cell & Ombudsman | St. Mary's University (SMRU)",
  description: "Institutional mechanism for transparent resolution of student, faculty, and stakeholder grievances at St. Mary's University.",
};

export default function GrievanceRedressalPage() {
  const steps = [
    {
      step: "Level 1: Departmental Redressal",
      time: "Within 3 Working Days",
      desc: "Submit complaint in writing or via university email to the Head of Department (HOD) or Academic Mentor.",
    },
    {
      step: "Level 2: Institutional Grievance Committee",
      time: "Within 7 Working Days",
      desc: "If unresolved at the department level, matters are escalated to the Dean of Students Welfare / Dean of School.",
    },
    {
      step: "Level 3: University Ombudsman Review",
      time: "Within 15 Working Days",
      desc: "Final appeal before the independent University Ombudsman appointed pursuant to UGC Regulations.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-[#0d315c] text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#ffaf3a] bg-[#ffaf3a]/15 rounded-full mb-3">
              <Scale className="w-4 h-4" />
              Student Support & Fairness
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Grievance Redressal & Ombudsman
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Dedicated institutional machinery ensuring prompt, equitable, and confidential hearing of academic, administrative, hostel, and fee-related grievances.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                Objective & Scope
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                The Grievance Redressal Cell of St. Mary&apos;s University has been instituted to ensure a responsive, accountable, and easily accessible system for all registered scholars, prospective candidates, faculty, and administrative staff members.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                The cell addresses issues concerning admission irregularities, evaluation discrepancies, withholding of certificates, facility maintenance, hostel boarding standards, accessibility barriers, and administrative concerns.
              </p>

              <h3 className="font-heading text-lg font-bold text-slate-900 mb-4">
                Three-Tier Resolution Workflow
              </h3>
              <div className="space-y-4">
                {steps.map((s, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="w-8 h-8 rounded-full bg-[#0d315c] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <h4 className="font-bold text-slate-900 text-sm">{s.step}</h4>
                        <span className="inline-flex items-center gap-1 text-[11px] text-[#019e6e] font-semibold">
                          <Clock className="w-3.5 h-3.5" />
                          {s.time}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Cell for Persons with Disabilities */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border-l-4 border-l-[#019e6e] border border-slate-200 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">
                Special Accessibility & Equal Opportunity Cell
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                In line with SMRU&apos;s pioneering rehabilitation mission and the Rights of Persons with Disabilities Act, 2016, a dedicated Equal Opportunity Officer oversees physical and technological accessibility, assistive learning accommodations, and specialized assistance.
              </p>
              <span className="text-xs font-semibold text-[#019e6e]">
                Priority escalation guaranteed within 24 hours.
              </span>
            </div>
          </div>

          {/* Contact Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              <h3 className="font-heading font-bold text-base text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <Users className="w-4 h-4 text-[#019e6e]" />
                Lodge a Grievance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Students and staff can lodge formal grievances with registration details and supporting documentation via:
              </p>
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-50 rounded border border-slate-200">
                  <span className="block font-semibold text-slate-500 text-[11px]">Email Submission</span>
                  <a href="mailto:grievance@smru.edu.in" className="font-bold text-[#019e6e] hover:underline">
                    grievance@smru.edu.in
                  </a>
                </div>
                <div className="p-3 bg-slate-50 rounded border border-slate-200">
                  <span className="block font-semibold text-slate-500 text-[11px]">Helpdesk & Registration</span>
                  <a href="tel:7331119432" className="font-bold text-slate-900 hover:underline">
                    +91 73311 19432
                  </a>
                </div>
                <div className="p-3 bg-slate-50 rounded border border-slate-200">
                  <span className="block font-semibold text-slate-500 text-[11px]">Office Location</span>
                  <span className="text-slate-700">Dean of Student Affairs, Administrative Block, Deshmukhi Campus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
