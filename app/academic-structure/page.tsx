import { Metadata } from 'next';
import Link from 'next/link';
import { academicSchools } from '@/data/academicData';
import AcademicStructureViewer from '@/components/AcademicStructureViewer';

export const metadata: Metadata = {
  title: "Academic Schools & Departments | St. Mary's University",
  description: "Complete academic hierarchy of St. Mary's University covering 6 schools, 15 departments, and 71 undergraduate, postgraduate, and doctoral degree programmes.",
};

export default function AcademicStructurePage() {
  return (
    <div className="bg-[#f8fbff] min-h-screen py-12 md:py-16">
      <div className="smru-container">
        {/* Breadcrumb & Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
            <Link href="/" className="hover:text-[#019e6e]">Home</Link>
            <span>/</span>
            <Link href="/schools/" className="hover:text-[#019e6e]">Schools</Link>
            <span>/</span>
            <span className="text-[#019e6e]">Academic Structure</span>
          </div>

          <h1 className="smru-h1 text-[#0d315c] uppercase">
            Academic Structure
          </h1>
          <div className="h-1.5 w-20 cut-corner-underline bg-[#ffaf3a] mx-auto" />

          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Explore the organizational and curricular hierarchy of St. Mary&apos;s University. Use the interactive filters to browse programs by level, department, or academic school.
          </p>
        </div>

        {/* Interactive Expandable Viewer */}
        <AcademicStructureViewer schools={academicSchools} />
      </div>
    </div>
  );
}
