import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  FileText, 
  Download, 
  CheckCircle, 
  ExternalLink, 
  Building, 
  Award,
  BookOpen
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Approvals & Recognitions | St. Mary's University (SMRU)",
  description: "Official statutory approvals, UGC 2(f) recognition, and Telangana State Legislature Act 10 of 2026 documents for St. Mary's University.",
};

export default function ApprovalsRecognitionsPage() {
  const documents = [
    {
      title: "UGC Recognition Letter under Section 2(f)",
      authority: "University Grants Commission (UGC), Ministry of Education, Govt. of India",
      referenceNo: "F.No. 8-18/2024(CPP-I/PU)",
      date: "14th January 2025",
      description: "Confirmation of inclusion of St. Mary's Rehabilitation University in the consolidated list of State Private Universities maintained by the UGC under Section 2(f) of the UGC Act, 1956.",
      filePath: "/assets/St. Marys Rehabilitation University UGC recognition letter 2(f).pdf",
      fileName: "UGC_Recognition_Letter_2(f).pdf",
      status: "Official & Active",
    },
    {
      title: "Telangana State Private Universities (Amendment) Act, 2026",
      authority: "Legislature of the State of Telangana / Law Department",
      referenceNo: "Act No. 10 of 2026 (Telangana Gazette)",
      date: "Gazette Notification 2026",
      description: "State enactment establishing St. Mary's Rehabilitation University as a statutory unitary State Private University empowered to award degrees under Section 22 of the UGC Act.",
      filePath: "/assets/SMRU Act 10 of 2026.pdf",
      fileName: "SMRU_Act_10_of_2026.pdf",
      status: "Enacted & Notified",
    },
    {
      title: "Government of Telangana Ordinance No. 2 of 2025",
      authority: "Government of Telangana",
      referenceNo: "Ordinance No. 2 of 2025",
      date: "Year 2025",
      description: "Promulgation ordinance establishing the university framework prior to assembly enactment as Act 10 of 2026.",
      filePath: "/assets/SMRU Act 10 of 2026.pdf",
      fileName: "Government_Ordinance_SMRU.pdf",
      status: "Superseded by Act 10",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Banner */}
      <section className="bg-[#0d315c] text-white py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#019e6e_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#ffaf3a] bg-[#ffaf3a]/15 rounded-full mb-3">
              <ShieldCheck className="w-4 h-4" />
              Statutory Governance & Compliance
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Approvals, Recognitions & Acts
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Official statutory documentation confirming the legal establishment, UGC recognition, and regulatory standing of St. Mary&apos;s University.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Statutory Overview Alert */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-10">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#019e6e] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-lg text-emerald-950 mb-1">
                Full Statutory Authority to Confer Degrees
              </h2>
              <p className="text-sm text-emerald-800 leading-relaxed">
                St. Mary&apos;s University is a statutory university established by the State Legislature of Telangana and recognized by the University Grants Commission (UGC) under Section 2(f). In accordance with Section 22 of the UGC Act, 1956, degrees conferred by SMRU are recognized across India and globally for employment, civil services, and higher education.
              </p>
            </div>
          </div>
        </div>

        {/* Document Cards */}
        <div className="space-y-6">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm hover:border-[#019e6e] transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-block px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider rounded bg-blue-50 text-blue-700 border border-blue-200">
                      {doc.status}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Ref: {doc.referenceNo}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    <strong>Issuing Body:</strong> {doc.authority} • <strong>Date:</strong> {doc.date}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed pt-1">
                    {doc.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                  <a
                    href={doc.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0d315c] hover:bg-[#092241] text-white text-xs font-semibold rounded transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Document
                  </a>
                  <a
                    href={doc.filePath}
                    download={doc.fileName}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#019e6e] hover:bg-[#01865d] text-white text-xs font-semibold rounded transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Governance Framework */}
        <div className="mt-14 bg-white rounded-lg border border-slate-200 p-8 shadow-sm">
          <h3 className="font-heading text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
            Adherence to National Higher Education Regulatory Frameworks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-4 rounded border border-slate-100 bg-slate-50">
              <h4 className="text-sm font-bold text-slate-900 mb-1">UGC Guidelines</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full compliance with UGC (Establishment and Maintenance of Standards in Private Universities) Regulations, curriculum standards, and academic terms.
              </p>
            </div>
            <div className="p-4 rounded border border-slate-100 bg-slate-50">
              <h4 className="text-sm font-bold text-slate-900 mb-1">Apex Council Norms</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Programs in Technical Education, Pharmacy, Rehabilitation, and Management adhere strictly to respective apex body infrastructure and faculty ratios.
              </p>
            </div>
            <div className="p-4 rounded border border-slate-100 bg-slate-50">
              <h4 className="text-sm font-bold text-slate-900 mb-1">Telangana Higher Education</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Regulated under the purview of Telangana State Council of Higher Education (TSCHE) and the Department of Higher Education, Govt. of Telangana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
