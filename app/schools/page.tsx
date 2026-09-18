import { Metadata } from 'next';
import Link from 'next/link';
import { academicSchools } from '@/data/academicData';
import { ArrowRight, BookOpen, Layers, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: "Courses Offered at St. Mary's University | SMRU",
  description: "Explore undergraduate, postgraduate, and doctoral degree programmes offered across 6 schools at St. Mary's University Hyderabad.",
};

export default function SchoolsPage() {
  return (
    <div className="bg-[#f8fbff] min-h-screen py-12 md:py-16">
      <div className="smru-container">
        {/* Header Breadcrumbs & Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
            <Link href="/" className="hover:text-[#019e6e]">Home</Link>
            <span>/</span>
            <span className="text-[#019e6e]">Schools &amp; Programs</span>
          </div>

          <h1 className="smru-h1 text-[#0d315c] uppercase">
            Schools &amp; Programs
          </h1>
          <div className="h-1.5 w-20 cut-corner-underline bg-[#ffaf3a] mx-auto" />

          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            St. Mary&apos;s University offers specialized education across 6 academic schools, 15 departments, and 71+ degree programs spanning rehabilitation, allied health, psychology, law, and engineering.
          </p>

          <div className="pt-2">
            <Link
              href="/academic-structure/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 cut-corner-badge text-xs font-black uppercase tracking-widest text-[#0d315c] hover:border-[#019e6e] hover:text-[#019e6e] shadow-sm transition-all"
            >
              <Layers className="w-4 h-4 text-[#019e6e]" /> View Expandable Academic Hierarchy
            </Link>
          </div>
        </div>

        {/* 6 Schools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academicSchools.map((school) => {
            const allPrograms = school.departments.flatMap((d) => d.programs);
            return (
              <div
                key={school.id}
                className="bg-white border border-slate-200 cut-corner-card p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="px-3 py-1 cut-corner-badge text-white text-[10px] font-black uppercase tracking-wider"
                      style={{ backgroundColor: school.color }}
                    >
                      {school.badge}
                    </span>
                    <span className="text-xs font-black text-slate-400">
                      {allPrograms.length} Programs
                    </span>
                  </div>

                  <h2 className="text-xl font-black text-[#0d315c] group-hover:text-[#019e6e] transition-colors mb-3">
                    {school.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {school.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <p className="text-[11px] font-black uppercase tracking-widest text-slate-400">
                      Departments ({school.departments.length}):
                    </p>
                    <ul className="space-y-1.5">
                      {school.departments.map((dept) => (
                        <li key={dept.id} className="text-xs font-bold text-slate-700 flex items-center justify-between">
                          <Link
                            href={`/schools/${school.slug}/${dept.slug}/`}
                            className="hover:text-[#019e6e] transition-colors"
                          >
                            {dept.name.replace('Department of ', '')}
                          </Link>
                          <span className="text-[10px] text-[#ffaf3a] font-black">
                            {dept.programs.length} progs
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/schools/${school.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#019e6e] hover:text-[#10bb82] transition-colors"
                  >
                    Explore School <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href="https://apply.smru.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#0d315c] text-white cut-corner-badge text-[10px] font-black uppercase tracking-widest hover:bg-[#019e6e] transition-colors"
                  >
                    Apply
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
