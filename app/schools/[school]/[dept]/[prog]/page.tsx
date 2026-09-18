import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { academicSchools, getSchoolBySlug, getDepartmentBySlug, getProgramBySlug } from '@/data/academicData';
import { ArrowRight, Clock, Award, CheckCircle2, Briefcase, FileCheck, PhoneCall, HelpCircle } from 'lucide-react';

interface ProgramPageProps {
  params: Promise<{ school: string; dept: string; prog: string }>;
}

export async function generateStaticParams() {
  const params: { school: string; dept: string; prog: string }[] = [];
  academicSchools.forEach((s) => {
    s.departments.forEach((d) => {
      d.programs.forEach((p) => {
        params.push({ school: s.slug, dept: d.slug, prog: p.slug });
      });
    });
  });
  return params;
}

export async function generateMetadata({ params }: ProgramPageProps): Promise<Metadata> {
  const { school: schoolSlug, dept: deptSlug, prog: progSlug } = await params;
  const prog = getProgramBySlug(progSlug);
  if (!prog) return { title: 'Program Not Found' };

  return {
    title: `${prog.name} | St. Mary's University`,
    description: prog.overview,
  };
}

export default async function IndividualProgramPage({ params }: ProgramPageProps) {
  const { school: schoolSlug, dept: deptSlug, prog: progSlug } = await params;
  const school = getSchoolBySlug(schoolSlug);
  const dept = getDepartmentBySlug(schoolSlug, deptSlug);
  const prog = getProgramBySlug(progSlug);

  if (!school || !dept || !prog) notFound();

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: prog.name,
    description: prog.overview,
    provider: {
      '@type': 'CollegeOrUniversity',
      name: "St. Mary's University",
      sameAs: 'https://smru.edu.in',
    },
    educationalCredentialAwarded: prog.level,
    timeRequired: prog.duration,
  };

  return (
    <div className="bg-[#f8fbff] min-h-screen py-12 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      <div className="smru-container">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 mb-8">
          <Link href="/" className="hover:text-[#019e6e]">Home</Link>
          <span>/</span>
          <Link href="/schools/" className="hover:text-[#019e6e]">Schools</Link>
          <span>/</span>
          <Link href={`/schools/${school.slug}/`} className="hover:text-[#019e6e]">
            {school.shortName}
          </Link>
          <span>/</span>
          <Link href={`/schools/${school.slug}/${dept.slug}/`} className="hover:text-[#019e6e]">
            {dept.name.replace('Department of ', '')}
          </Link>
          <span>/</span>
          <span className="text-[#019e6e]">{prog.id.toUpperCase()}</span>
        </div>

        {/* Programme Header Card */}
        <div className="bg-[#0d315c] text-white p-8 md:p-12 cut-corner-panel shadow-2xl relative overflow-hidden mb-12">
          <div className="max-w-4xl space-y-5 relative z-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 bg-[#ffaf3a] text-[#0d315c] text-[10px] font-black uppercase tracking-widest cut-corner-badge">
                {prog.level}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/80 font-bold">
                <Clock className="w-3.5 h-3.5 text-[#019e6e]" /> Duration: {prog.duration}
              </span>
              <span className="text-xs text-white/50">|</span>
              <span className="text-xs text-white/80 font-medium">
                {school.name}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              {prog.name}
            </h1>

            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              {prog.overview}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="https://apply.smru.edu.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#019e6e] text-white cut-corner-badge font-black text-xs uppercase tracking-widest shadow-xl hover:bg-[#10bb82] transition-colors"
              >
                Apply Online 2026-27 <ArrowRight className="w-4 h-4 inline ml-1" />
              </a>
              <Link
                href="/admissions/"
                className="px-6 py-4 bg-white/10 text-white cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-colors"
              >
                Admission Process
              </Link>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
          {/* Main Content Column */}
          <div className="space-y-10">
            {/* Overview */}
            <div className="bg-white border border-slate-200 cut-corner-panel p-8 shadow-sm space-y-4">
              <h2 className="text-xl font-black text-[#0d315c] flex items-center gap-2">
                <Award className="w-5 h-5 text-[#019e6e]" /> Programme Overview
              </h2>
              <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                <p>{prog.overview}</p>
                <p>
                  Instruction at St. Mary&apos;s University integrates state-of-the-art simulation labs, direct clinical patient handling, interdisciplinary research opportunities, and mentorship from experienced clinical practitioners.
                </p>
              </div>
            </div>

            {/* Eligibility */}
            <div className="bg-white border border-slate-200 cut-corner-panel p-8 shadow-sm space-y-4">
              <h2 className="text-xl font-black text-[#0d315c] flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#019e6e]" /> Minimum Eligibility Requirements
              </h2>
              <div className="p-4 bg-slate-50 border-l-4 border-[#019e6e] text-slate-700 text-xs sm:text-sm leading-relaxed">
                {prog.eligibility}
              </div>
              <p className="text-xs text-slate-500 italic">
                * Eligibility documents are confirmed and verified during the personal admissions counselling session.
              </p>
            </div>

            {/* Career Opportunities */}
            <div className="bg-white border border-slate-200 cut-corner-panel p-8 shadow-sm space-y-4">
              <h2 className="text-xl font-black text-[#0d315c] flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#019e6e]" /> Career Pathways &amp; Opportunities
              </h2>
              <p className="text-xs text-slate-600">
                Graduates of {prog.name} from St. Mary&apos;s University are qualified for career roles across diverse healthcare, diagnostic, research, and corporate sectors:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {prog.careerProspects.map((career, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#019e6e] shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-slate-700">{career}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Quick Admission Actions & Contacts */}
          <div className="space-y-6">
            {/* Quick Apply Card */}
            <div className="bg-white border-2 border-[#019e6e]/30 cut-corner-panel p-6 shadow-md space-y-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#019e6e]">
                Official Application
              </span>
              <h3 className="text-lg font-black text-[#0d315c]">
                2026-27 Applications Open
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete your online application at the official university application portal.
              </p>
              <a
                href="https://apply.smru.edu.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#019e6e] text-white cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-[#10bb82] transition-colors flex items-center justify-center gap-2 shadow"
              >
                Apply Online Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Counselling Desk */}
            <div className="bg-[#f8fbff] border border-slate-200 cut-corner-panel p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#0d315c]">
                <PhoneCall className="w-4 h-4 text-[#019e6e]" />
                <h4 className="text-xs font-black uppercase tracking-widest">
                  Admissions Helpdesk
                </h4>
              </div>
              <p className="text-xs text-slate-600">
                Call our counsellors for eligibility verification, fee structures, and campus visit scheduling:
              </p>
              <p className="text-base font-black text-[#0d315c]">
                7331119432
              </p>
              <p className="text-[11px] text-slate-400 font-semibold">
                Monday – Saturday: 9:30 AM – 5:30 PM
              </p>
            </div>

            {/* Related Department Programs */}
            <div className="bg-white border border-slate-200 cut-corner-panel p-6 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-[#0d315c] border-b border-slate-100 pb-2">
                Related Programs in {dept.name.replace('Department of ', '')}
              </h4>
              <ul className="space-y-2">
                {dept.programs.map((other) => (
                  <li key={other.id}>
                    <Link
                      href={`/schools/${school.slug}/${dept.slug}/${other.slug}/`}
                      className={`text-xs font-bold block transition-colors ${
                        other.slug === prog.slug
                          ? 'text-[#019e6e] underline pointer-events-none'
                          : 'text-slate-600 hover:text-[#019e6e]'
                      }`}
                    >
                      {other.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
