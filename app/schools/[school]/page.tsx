import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { academicSchools, getSchoolBySlug } from '@/data/academicData';
import { ArrowRight, BookOpen, Layers, CheckCircle2, Award } from 'lucide-react';

interface SchoolPageProps {
  params: Promise<{ school: string }>;
}

export async function generateStaticParams() {
  return academicSchools.map((s) => ({
    school: s.slug,
  }));
}

export async function generateMetadata({ params }: SchoolPageProps): Promise<Metadata> {
  const { school: schoolSlug } = await params;
  const school = getSchoolBySlug(schoolSlug);
  if (!school) return { title: 'School Not Found' };

  return {
    title: `${school.name} | St. Mary's University`,
    description: school.description,
  };
}

export default async function SchoolDetailPage({ params }: SchoolPageProps) {
  const { school: schoolSlug } = await params;
  const school = getSchoolBySlug(schoolSlug);

  if (!school) notFound();

  const allPrograms = school.departments.flatMap((d) => d.programs);

  return (
    <div className="bg-[#f8fbff] min-h-screen py-12 md:py-16">
      <div className="smru-container">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 mb-8">
          <Link href="/" className="hover:text-[#019e6e]">Home</Link>
          <span>/</span>
          <Link href="/schools/" className="hover:text-[#019e6e]">Schools</Link>
          <span>/</span>
          <span className="text-[#019e6e]">{school.shortName}</span>
        </div>

        {/* Hero Banner */}
        <div
          className="p-8 md:p-12 cut-corner-panel text-white relative overflow-hidden shadow-xl mb-12"
          style={{ backgroundColor: school.color }}
        >
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="px-3 py-1 cut-corner-badge bg-white/20 text-white text-[10px] font-black uppercase tracking-widest inline-block backdrop-blur-xs">
              {school.badge}
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">
              {school.name}
            </h1>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              {school.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://apply.smru.edu.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#ffaf3a] text-[#0d315c] cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-white transition-colors"
              >
                Apply for 2026-27 Admissions
              </a>
              <Link
                href="/admissions/"
                className="px-6 py-3 bg-white/10 border border-white/30 text-white cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-colors"
              >
                Admission Criteria
              </Link>
            </div>
          </div>
        </div>

        {/* Departments & Programs Breakdown */}
        <div className="space-y-12">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-2xl font-black text-[#0d315c]">
                Academic Departments ({school.departments.length})
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Offering {allPrograms.length} specialized undergraduate, postgraduate, and doctoral degrees
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {school.departments.map((dept) => (
              <div
                key={dept.id}
                className="bg-white border border-slate-200 cut-corner-panel p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#019e6e]">
                      Department
                    </span>
                    <h3 className="text-xl font-black text-[#0d315c]">
                      {dept.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">{dept.description}</p>
                  </div>

                  <Link
                    href={`/schools/${school.slug}/${dept.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#019e6e] hover:underline"
                  >
                    View Department Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Programs Grid in this Department */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {dept.programs.map((prog) => (
                    <div
                      key={prog.id}
                      className="p-5 bg-slate-50 border border-slate-200/80 cut-corner-card hover:border-[#019e6e] hover:bg-white transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-2 py-0.5 bg-white text-slate-700 border border-slate-200 rounded text-[9px] font-black uppercase">
                            {prog.level}
                          </span>
                          <span className="text-[10px] text-slate-400 font-bold">
                            {prog.duration}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-[#0d315c] mb-2 leading-snug">
                          {prog.name}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-2 mb-4">
                          {prog.overview}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                        <Link
                          href={`/schools/${school.slug}/${dept.slug}/${prog.slug}/`}
                          className="text-[11px] font-black uppercase text-[#019e6e] hover:underline flex items-center gap-1"
                        >
                          Program Page <ArrowRight className="w-3 h-3" />
                        </Link>
                        <a
                          href="https://apply.smru.edu.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-black uppercase text-[#0d315c] hover:text-[#ffaf3a]"
                        >
                          Apply
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
