import Link from 'next/link';
import { scholarshipList } from '@/data/scholarshipData';
import { ArrowRight, CheckCircle2, FileText, GraduationCap, HelpCircle, PhoneCall } from 'lucide-react';

interface MegaMenuAdmissionsProps {
  onClose: () => void;
}

export default function MegaMenuAdmissions({ onClose }: MegaMenuAdmissionsProps) {
  return (
    <div
      className="absolute top-full left-0 w-full bg-[#082244] border-b-4 border-[#019e6e] shadow-2xl z-50 text-white animate-in fade-in slide-in-from-top-2 duration-200"
      onMouseLeave={onClose}
    >
      <div className="max-w-[1440px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Overview & Pathways */}
          <div className="space-y-4 border-r border-white/10 pr-6">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#ffaf3a]">Admissions 2026-27</h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/admissions/"
                  onClick={onClose}
                  className="flex items-center gap-2 text-sm font-bold text-white hover:text-[#019e6e] transition-colors"
                >
                  <GraduationCap className="w-4 h-4 text-[#019e6e]" /> Admission Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/phd-admissions/"
                  onClick={onClose}
                  className="flex items-center gap-2 text-sm font-bold text-white hover:text-[#019e6e] transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#ffaf3a]" /> Ph.D. Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/fee-structure/"
                  onClick={onClose}
                  className="flex items-center gap-2 text-sm font-bold text-white hover:text-[#019e6e] transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#019e6e]" /> Fee Structure
                </Link>
              </li>
              <li>
                <Link
                  href="/admission-policy/"
                  onClick={onClose}
                  className="flex items-center gap-2 text-sm font-bold text-white hover:text-[#019e6e] transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#ffaf3a]" /> Admission Policy
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <a
                href="https://apply.smru.edu.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#019e6e] px-4 py-3 cut-corner-badge text-xs font-black uppercase tracking-wider text-white hover:bg-[#10bb82] transition-colors shadow-lg"
              >
                Apply Online Now <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2 & 3: Scholarships */}
          <div className="col-span-2 space-y-4 border-r border-white/10 pr-6">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-black uppercase tracking-widest text-[#ffaf3a]">University Scholarships</h4>
              <span className="text-[10px] text-white/50 font-bold uppercase">9 Meritorious Schemes</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {scholarshipList.map((s) => (
                <Link
                  key={s.id}
                  href="/admissions/#scholarships"
                  onClick={onClose}
                  className="p-2.5 bg-white/5 border border-white/5 rounded hover:border-[#ffaf3a]/40 transition-all text-left group"
                >
                  <p className="text-xs font-bold text-white group-hover:text-[#ffaf3a] transition-colors truncate">
                    {s.name}
                  </p>
                  <p className="text-[10px] text-white/50 truncate mt-0.5">{s.tag}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & Counselling */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#ffaf3a]">Counselling Helpdesk</h4>
            <div className="bg-white/5 border border-white/10 cut-corner-panel p-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-[#019e6e]/20 text-[#019e6e] flex items-center justify-center">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-white/50 uppercase font-black">Direct Admissions</p>
                  <a href="tel:7331119432" className="text-sm font-black text-white hover:text-[#ffaf3a]">
                    7331119432
                  </a>
                </div>
              </div>
              <p className="text-[11px] text-white/60 leading-relaxed">
                Counselors are available Monday to Saturday, 9:30 AM to 5:30 PM for campus tours and eligibility guidance.
              </p>
              <Link
                href="/contact/"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ffaf3a] hover:underline"
              >
                Schedule Campus Visit <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
