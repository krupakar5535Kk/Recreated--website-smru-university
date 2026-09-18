import React from "react";
import Link from "next/link";
import { 
  Building2, 
  Award, 
  Target, 
  Eye, 
  Compass, 
  BookOpen, 
  CheckCircle2, 
  Users, 
  FileText, 
  ArrowRight,
  ShieldCheck,
  HeartHandshake
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | St. Mary's University (SMRU)",
  description: "Learn about St. Mary's University (SMRU) - India's pioneering rehabilitation-integrated university established under Telangana Act 10 of 2026 and recognized under UGC Section 2(f).",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="bg-[#0d315c] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffaf3a_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#ffaf3a] bg-[#ffaf3a]/15 rounded-full mb-3">
              Institutional Heritage & Vision
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Pioneering Inclusive Higher Education & Rehabilitation
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              St. Mary&apos;s University (SMRU) stands at the forefront of multidisciplinary higher education, uniquely integrating engineering, pharmacy, commerce, and computer applications with India&apos;s most advanced rehabilitation sciences framework.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Text */}
            <div className="lg:col-span-8 space-y-6 text-slate-700 leading-relaxed text-base">
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Genesis & Statutory Establishment
                </h2>
                <p>
                  St. Mary&apos;s University (SMRU) was formally established under the <strong>Telangana State Private Universities (Establishment and Regulation) (Amendment) Act, 2026 (Act No. 10 of 2026)</strong>, following the landmark Ordinance No. 2 of 2025 promulgated by the Government of Telangana. The university is officially recognized by the <strong>University Grants Commission (UGC)</strong> under Section 2(f) of the UGC Act, 1956 (vide F.No. 8-18/2024(CPP-I/PU) dated 14th January 2025).
                </p>
              </div>

              <p>
                Sponsored by the esteemed <strong>Joseph Sriharsha & Mary Indraja Educational Society (JSMI)</strong>, which brings over three decades of distinguished leadership in higher education, professional training, and societal upliftment across South India, SMRU was conceptualized to address critical national gaps in rehabilitation infrastructure, assistive technologies, and inclusive higher learning.
              </p>

              {/* Vision & Mission Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="bg-white p-6 rounded-lg border-l-4 border-l-[#019e6e] border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded bg-emerald-50 text-[#019e6e] flex items-center justify-center mb-4">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Our Vision</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    To be a globally recognized institution of educational excellence that seamlessly bridges traditional multidisciplinary learning with compassionate, technology-driven rehabilitation, empowering students to lead inclusive societal transformation.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-l-[#ffaf3a] border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded bg-amber-50 text-[#ffaf3a] flex items-center justify-center mb-4">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    To deliver world-class curricula, hands-on clinical and industrial exposure, and state-of-the-art research laboratories while nurturing ethical leadership, compassionate service, and assistive innovations for communities with special needs.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">
                  Core Institutional Pillars
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Assistive Tech & Innovation",
                      desc: "Dedicated incubation for prosthetic engineering, AI-driven diagnostics, and adaptive software.",
                    },
                    {
                      title: "Multidisciplinary Harmony",
                      desc: "Choice-Based Credit System (CBCS) bridging B.Tech, Allied Health, Pharmacy, and Management.",
                    },
                    {
                      title: "Clinical & Industrial Immersion",
                      desc: "Partnerships with premier research hospitals, healthcare networks, and IT enterprises.",
                    },
                    {
                      title: "Inclusive Campus Architecture",
                      desc: "100% barrier-free campus design with tactile paving, elevators, and accessible amenities.",
                    },
                  ].map((pillar, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white p-4 rounded border border-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-[#019e6e] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{pillar.title}</h4>
                        <p className="text-xs text-slate-600 mt-1">{pillar.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Facts */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#0d315c]" />
                  Quick Facts
                </h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-xs text-slate-500 font-semibold uppercase">Legal Name</dt>
                    <dd className="font-semibold text-slate-900">St. Mary&apos;s University (SMRU)</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-500 font-semibold uppercase">Statutory Act</dt>
                    <dd className="text-slate-800">Telangana Act No. 10 of 2026</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-500 font-semibold uppercase">UGC Status</dt>
                    <dd className="text-slate-800">Recognized under Section 2(f) of UGC Act 1956</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-500 font-semibold uppercase">Sponsoring Body</dt>
                    <dd className="text-slate-800">Joseph Sriharsha & Mary Indraja Educational Society</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-500 font-semibold uppercase">Campus Extent</dt>
                    <dd className="text-slate-800">Deshmukhi Campus, Yadadri Bhuvanagiri (Greater Hyderabad)</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-500 font-semibold uppercase">Academic Reach</dt>
                    <dd className="text-slate-800">6 Schools • 15 Departments • 71 Programmes</dd>
                  </div>
                </dl>

                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                  <Link
                    href="/approvals-recognitions"
                    className="flex items-center justify-between text-xs font-semibold text-[#019e6e] hover:underline"
                  >
                    <span>View Statutory Approvals</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/campus-location-hyderabad"
                    className="flex items-center justify-between text-xs font-semibold text-[#019e6e] hover:underline"
                  >
                    <span>Campus Location & Transit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Statutory Notice Card */}
              <div className="bg-[#0d315c] text-white p-6 rounded-lg">
                <ShieldCheck className="w-8 h-8 text-[#ffaf3a] mb-3" />
                <h4 className="font-heading font-bold text-base mb-2">UGC 2(f) Certification</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Official recognition letter issued by University Grants Commission, New Delhi confirming entry of SMRU in the list of State Private Universities.
                </p>
                <a
                  href="/assets/St. Marys Rehabilitation University UGC recognition letter 2(f).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#019e6e] hover:bg-[#01865d] px-3 py-2 rounded transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Download UGC Letter (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
