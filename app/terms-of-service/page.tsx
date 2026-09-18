import React from "react";
import Link from "next/link";
import { FileCheck, Shield, HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service & Portal Usage | St. Mary's University (SMRU)",
  description: "Terms of service and acceptable usage guidelines for St. Mary's University digital portal and services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-[#0d315c] text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#ffaf3a] bg-[#ffaf3a]/15 rounded-full mb-3">
              <FileCheck className="w-4 h-4" />
              Legal & Acceptable Use
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Terms of Service & Portal Usage
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Rules, regulations, and acceptable use guidelines governing the official digital platforms and services of St. Mary&apos;s University.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-6 sm:p-10 rounded-lg border border-slate-200 shadow-sm space-y-8 text-sm text-slate-700 leading-relaxed">
          <div>
            <h2 className="font-heading text-xl font-bold text-slate-900 mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or utilizing the web portals, admission forms, or online services of St. Mary&apos;s University (SMRU), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service, along with our Privacy Policy and Institutional Regulations.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-slate-900 mb-3">
              2. Intellectual Property Rights
            </h2>
            <p>
              All materials, logos, emblems, photographs, 360° virtual tours, course syllabi, institutional graphics, and software code on this website are the proprietary intellectual property of St. Mary&apos;s University or its licensing authorities. Unauthorized reproduction, scraping, modification, or commercial exploitation is strictly prohibited without prior written sanction from the Registrar.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-slate-900 mb-3">
              3. Applicant & Student Undertakings
            </h2>
            <p className="mb-2">Users accessing online application, admission, or examination services agree that:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>All information, qualifications, and certificates submitted are genuine and truthful.</li>
              <li>Submission of fraudulent or forged documents will result in immediate cancellation of admission and statutory prosecution.</li>
              <li>Login credentials for student and applicant portals must be preserved securely and not shared with unauthorized third parties.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-slate-900 mb-3">
              4. Disclaimer of Academic Information
            </h2>
            <p>
              While every effort is made to keep information on degree programs, fees, and academic schedules accurate and current, the University reserves the right to amend academic regulations, course modules, fee structures, and seat allocations in compliance with statutory body directives and Academic Council decisions.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-slate-900 mb-3">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms and any disputes arising out of the use of this portal or university admissions shall be governed by the laws of India, and the courts at Hyderabad, Telangana shall have exclusive jurisdiction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
