import React from "react";
import Link from "next/link";
import { Users, Award, BookOpen, GraduationCap, Mail, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "University Leadership & Administration | St. Mary's University (SMRU)",
  description: "Meet the Chancellor, Vice-Chancellor, Registrar, Deans, and academic leadership team of St. Mary's University.",
};

export default function LeadershipPage() {
  const leadership = [
    {
      role: "Chancellor / Founder Chairman",
      name: "Rev. K.V.K. Rao",
      credentials: "Founder, Joseph Sriharsha & Mary Indraja Educational Society",
      bio: "A visionary educationist who dedicated over three decades to building institutions of higher learning, engineering, and humanitarian rehabilitation across Telangana and South India.",
    },
    {
      role: "Vice Chairman / Pro-Chancellor",
      name: "Dr. K.V.N. Rajesh",
      credentials: "M.Tech, Ph.D.",
      bio: "Spearheading academic modernizations, industry collaborations, assistive technological integration, and national accreditation standards at SMRU.",
    },
    {
      role: "Vice-Chancellor",
      name: "Office of the Vice-Chancellor",
      credentials: "Ph.D., Senior Academic Administrator",
      bio: "Chief Academic and Executive Officer presiding over academic councils, strategic development, research excellence, and multidisciplinary governance.",
    },
    {
      role: "Registrar",
      name: "Office of the Registrar",
      credentials: "Administration & Statutory Affairs",
      bio: "Custodian of university records, statutory compliances, regulatory interfaces with UGC & TSCHE, and administrative proceedings.",
    },
  ];

  const deans = [
    {
      school: "School of Engineering & Technology",
      focus: "AI, Data Science, Cyber Security, Robotics, Core Engineering",
    },
    {
      school: "School of Pharmaceutical Sciences",
      focus: "B.Pharm, Pharm.D, Clinical Research, Regulatory Affairs",
    },
    {
      school: "School of Rehabilitation & Allied Health Sciences",
      focus: "Physiotherapy (BPT), Speech & Hearing (BASLP), Occupational Therapy",
    },
    {
      school: "School of Business & Management Studies",
      focus: "MBA, BBA, Healthcare Analytics, FinTech, Entrepreneurship",
    },
    {
      school: "School of Science & Humanities",
      focus: "Applied Sciences, Mathematical Modelling, Computational Chemistry",
    },
    {
      school: "School of Commerce & Computer Applications",
      focus: "MCA, BCA, Data Analytics, Corporate Governance",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-[#0d315c] text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#ffaf3a] bg-[#ffaf3a]/15 rounded-full mb-3">
              Institutional Governance
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              University Leadership & Administration
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Guided by distinguished educationists, researchers, and administrators committed to inclusive excellence and transformative rehabilitation education.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Principal Officers */}
        <h2 className="font-heading text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
          Principal Statutory Officers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {leadership.map((officer, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:border-[#019e6e] transition-all"
            >
              <span className="inline-block px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider rounded bg-emerald-50 text-[#019e6e] border border-emerald-200 mb-3">
                {officer.role}
              </span>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-1">
                {officer.name}
              </h3>
              <p className="text-xs text-[#0d315c] font-semibold mb-3">
                {officer.credentials}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {officer.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Academic Deans */}
        <h2 className="font-heading text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
          Deans of Academic Faculties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deans.map((dean, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm"
            >
              <div className="w-10 h-10 rounded bg-blue-50 text-[#0d315c] flex items-center justify-center mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                Dean, {dean.school}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                <strong>Focus:</strong> {dean.focus}
              </p>
              <Link
                href="/schools"
                className="text-xs font-semibold text-[#019e6e] hover:underline"
              >
                View Faculty Programmes &rarr;
              </Link>
            </div>
          ))}
        </div>

        {/* Contact Administrative Secretariat */}
        <div className="mt-14 bg-[#0d315c] text-white p-8 rounded-lg">
          <div className="max-w-2xl">
            <h3 className="font-heading font-bold text-xl text-[#ffaf3a] mb-2">
              Office of the Registrar & Administrative Secretariat
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
              For statutory correspondence, academic verification, affiliations, and official communication with the university administration:
            </p>
            <div className="flex flex-wrap gap-4 text-xs">
              <a
                href="mailto:contactus@smru.edu.in"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded transition-colors"
              >
                <Mail className="w-4 h-4 text-[#ffaf3a]" />
                contactus@smru.edu.in
              </a>
              <a
                href="tel:7331119432"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#019e6e] hover:bg-[#01865d] rounded transition-colors font-bold"
              >
                <Phone className="w-4 h-4" />
                Administrative Helpline: +91 73311 19432
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
