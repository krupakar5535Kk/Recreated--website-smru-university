import React from "react";
import Link from "next/link";
import { Shield, Lock, Eye, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | St. Mary's University (SMRU)",
  description: "Official Privacy Policy of St. Mary's University regarding student, applicant, and visitor personal data protection and privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-[#0d315c] text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#ffaf3a] bg-[#ffaf3a]/15 rounded-full mb-3">
              <Lock className="w-4 h-4" />
              Information Governance
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              How St. Mary&apos;s University collects, utilizes, safeguards, and respects the personal information of students, applicants, parents, and portal visitors.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-6 sm:p-10 rounded-lg border border-slate-200 shadow-sm space-y-8 text-sm text-slate-700 leading-relaxed">
          <div>
            <h2 className="font-heading text-xl font-bold text-slate-900 mb-3">
              1. Introduction & Overview
            </h2>
            <p>
              St. Mary&apos;s University (SMRU) is committed to protecting the privacy and confidentiality of personal data entrusted to us. This Privacy Policy governs all information collected through our official portal (<code className="text-xs bg-slate-100 px-1 py-0.5 rounded">smru.edu.in</code>), online application portals, enquiry forms, and campus registration systems.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-slate-900 mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-2">We collect information provided voluntarily by you when interacting with our university services:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Contact data: Name, email address, telephone numbers, postal address, parent/guardian details.</li>
              <li>Academic data: Marksheets, qualifying examination scores, school/college records, transfer certificates.</li>
              <li>Identification records: Date of birth, Aadhaar/Government ID copies, category certificates where applicable.</li>
              <li>Technical records: IP address, browser type, device information, and interaction cookies for portal usability.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-slate-900 mb-3">
              3. Purpose & Use of Data
            </h2>
            <p className="mb-2">Your information is used strictly for legitimate educational and statutory purposes:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Processing university admissions, merit verification, and student enrolment.</li>
              <li>Academic administration, examination coordination, and degree issuance.</li>
              <li>Communication regarding admissions counseling, scholarships, schedules, and campus alerts.</li>
              <li>Statutory reporting to UGC, TSCHE, and regulatory bodies as mandated by Indian law.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-slate-900 mb-3">
              4. Data Security & Confidentiality
            </h2>
            <p>
              SMRU deploys multi-layered technological and operational safeguards to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We do not sell, rent, or lease applicant contact records to external commercial marketing entities.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-slate-900 mb-3">
              5. Contacting the Data Protection Desk
            </h2>
            <p>
              If you have queries or concerns regarding this policy or wish to review your stored applicant information, please contact our administrative desk at:
            </p>
            <div className="mt-3 p-4 bg-slate-50 rounded border border-slate-200 text-xs">
              <p className="font-bold text-slate-900">Office of the Registrar (Data Privacy & Records)</p>
              <p className="text-slate-600 mt-1">St. Mary&apos;s University, Deshmukhi (V), Pochampally (M), Yadadri Bhuvanagiri, Telangana - 508284</p>
              <p className="text-[#019e6e] font-semibold mt-1">Email: contactus@smru.edu.in | Tel: +91 73311 19432</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
