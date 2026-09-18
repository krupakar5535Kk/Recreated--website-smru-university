import Link from 'next/link';
import { academicSchools } from '@/data/academicData';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';

interface MegaMenuSchoolsProps {
  onClose: () => void;
}

export default function MegaMenuSchools({ onClose }: MegaMenuSchoolsProps) {
  return (
    <div
      className="absolute top-full left-0 w-full bg-[#082244] border-b-4 border-[#019e6e] shadow-2xl z-50 text-white animate-in fade-in slide-in-from-top-2 duration-200"
      onMouseLeave={onClose}
    >
      <div className="max-w-[1440px] mx-auto px-6 py-8">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
          <div>
            <h3 className="text-xl font-black tracking-tight text-[#ffaf3a] uppercase">Academic Schools & Faculties</h3>
            <p className="text-xs text-white/60 font-medium">Explore professional programs across 6 specialized schools and 15 departments</p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/academic-structure/"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#019e6e] hover:text-[#10bb82] transition-colors"
            >
              <Layers className="w-4 h-4" /> Academic Structure
            </Link>
            <Link
              href="/schools/"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-[#019e6e] px-4 py-2 cut-corner-badge text-white hover:bg-[#10bb82] transition-colors"
            >
              All 71+ Programs <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicSchools.map((school) => (
            <div
              key={school.id}
              className="p-4 bg-white/5 border border-white/10 cut-corner-card hover:bg-white/10 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider cut-corner-badge text-white"
                  style={{ backgroundColor: school.color }}
                >
                  {school.badge}
                </span>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                  {school.departments.length} Departments
                </span>
              </div>

              <Link
                href={`/schools/${school.slug}/`}
                onClick={onClose}
                className="text-sm font-black text-white hover:text-[#ffaf3a] transition-colors line-clamp-1 block"
              >
                {school.name}
              </Link>

              <ul className="mt-3 space-y-1.5 border-t border-white/10 pt-2.5">
                {school.departments.slice(0, 3).map((dept) => (
                  <li key={dept.id}>
                    <Link
                      href={`/schools/${school.slug}/${dept.slug}/`}
                      onClick={onClose}
                      className="text-xs text-white/70 hover:text-white flex items-center justify-between group-hover:translate-x-0.5 transition-all"
                    >
                      <span className="truncate">{dept.name.replace('Department of ', '')}</span>
                      <span className="text-[10px] text-[#ffaf3a] font-bold">
                        {dept.programs.length} progs
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
