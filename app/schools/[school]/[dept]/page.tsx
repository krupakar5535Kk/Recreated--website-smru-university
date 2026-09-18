import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { academicSchools, getSchoolBySlug, getDepartmentBySlug } from '@/data/academicData';
import { ArrowRight, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

interface DeptPageProps {
  params: Promise<{ school: string; dept: string }>;
}

export async function generateStaticParams() {
  const params: { school: string; dept: string }[] = [];
  academicSchools.forEach((s) => {
    s.departments.forEach((d) => {
      params.push({ school: s.slug, dept: d.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: DeptPageProps): Promise<Metadata> {
  const { school: schoolSlug, dept: deptSlug } = await params;
  const dept = getDepartmentBySlug(schoolSlug, deptSlug);
  if (!dept) return { title: 'Department Not Found' };

  return {
    title: `${dept.name} | St. Mary's University`,
    description: dept.description,
  };
}

export default async function DepartmentDetailPage({ params }: DeptPageProps) {
  const { school: schoolSlug, dept: deptSlug } = await params;
  const school = getSchoolBySlug(schoolSlug);
  const dept = getDepartmentBySlug(schoolSlug, deptSlug);

  if (!school || !dept) notFound();

  return (
    <div className="bg-[#f8fbff] min-h-screen py-12 md:py-16">
      <div className="smru-container">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 mb-8">
          <Link href="/" className="hover:text-[#019e6e]">Home</Link>
          <span>/</span>
          <Link href="/schools/" className="hover:text-[#019e6e]">Schools</Link>
          <span>/</span>
          <Link href={`/schools/${school.slug}/`} className="hover:text-[#019e6e]">
            {school.shortName}
          </Link>
          <span>/</span>
          <span className="text-[#019e6e]">{dept.name.replace('Department of ', '')}</span>
        </div>

        {/* Header */}
        <div className="bg-white border border-slate-200 cut-corner-panel p-8 md:p-12 shadow-sm mb-12">
          <span
            className="px-3 py-1 cut-corner-badge text-white text-[10px] font-black uppercase tracking-wider inline-block mb-3"
            style={{ backgroundColor: school.color }}
          >
            {school.name}
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-[#0d315c] mb-3">
            {dept.name}
          </h1>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            {dept.description} The department houses modern instructional labs, research facilities, and dedicated faculty chambers.
          </p>
        </div>

        {/* Programs List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="text-xl font-black text-[#0d315c]">
              Degrees &amp; Programmes Offered ({dept.programs.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dept.programs.map((prog) => (
              <div
                key={prog.id}
                className="bg-white border border-slate-200 cut-corner-card p-6 shadow-sm hover:shadow-xl hover:border-[#019e6e] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 bg-slate-100 text-[#0d315c] text-[10px] font-black uppercase rounded">
                      {prog.level}
                    </span>
                    <span className="text-xs text-slate-400 font-bold">
                      {prog.duration}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0d315c] mb-2 leading-snug">
                    {prog.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                    {prog.overview}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/schools/${school.slug}/${dept.slug}/${prog.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#019e6e] hover:underline"
                  >
                    View Curriculum &amp; Eligibility <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href="https://apply.smru.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-[#0d315c] text-white cut-corner-badge text-[10px] font-black uppercase hover:bg-[#ffaf3a] hover:text-[#0d315c] transition-colors"
                  >
                    Apply
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
