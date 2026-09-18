'use client';

import { useState } from 'react';
import Link from 'next/link';
import { School } from '@/types';
import { ChevronDown, ChevronRight, GraduationCap, ArrowRight, Layers, Search } from 'lucide-react';

interface AcademicStructureViewerProps {
  schools: School[];
}

export default function AcademicStructureViewer({ schools }: AcademicStructureViewerProps) {
  const [expandedSchools, setExpandedSchools] = useState<Record<string, boolean>>({
    'rehabilitation-sciences': true,
    'health-allied-health-sciences': true,
    'psychology': true,
    'nursing-sciences': true,
    'engineering-emerging-technologies': true,
    'law': true,
  });

  const [levelFilter, setLevelFilter] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const toggleSchool = (id: string) => {
    setExpandedSchools((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const collapseAll = () => setExpandedSchools({});
  const expandAll = () => {
    const all: Record<string, boolean> = {};
    schools.forEach((s) => (all[s.id] = true));
    setExpandedSchools(all);
  };

  return (
    <div className="space-y-8">
      {/* Controls & Filter Bar */}
      <div className="bg-white border border-slate-200 cut-corner-panel p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search school, department, program..."
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded text-xs focus:outline-none focus:ring-2 focus:ring-[#019e6e]"
          />
        </div>

        {/* Level Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {['ALL', 'Undergraduate', 'Postgraduate', 'Doctoral', 'Diploma'].map((lvl) => (
            <button
              key={lvl}
              onClick={() => setLevelFilter(lvl)}
              className={`px-3 py-1.5 cut-corner-badge text-[11px] font-black uppercase tracking-wider transition-all ${
                levelFilter === lvl
                  ? 'bg-[#0d315c] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>

        {/* Expand/Collapse buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={expandAll}
            className="text-[11px] font-black uppercase tracking-wider text-[#019e6e] hover:underline"
          >
            Expand All
          </button>
          <span className="text-slate-300">|</span>
          <button
            onClick={collapseAll}
            className="text-[11px] font-black uppercase tracking-wider text-slate-500 hover:underline"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Schools Tree */}
      <div className="space-y-6">
        {schools.map((school) => {
          const isExpanded = !!expandedSchools[school.id];
          // Filter programs based on criteria
          const filteredDepts = school.departments
            .map((dept) => {
              const progs = dept.programs.filter((p) => {
                const matchesLevel = levelFilter === 'ALL' || p.level === levelFilter;
                const matchesSearch =
                  searchTerm === '' ||
                  p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  school.name.toLowerCase().includes(searchTerm.toLowerCase());
                return matchesLevel && matchesSearch;
              });
              return { ...dept, programs: progs };
            })
            .filter((d) => d.programs.length > 0 || searchTerm === '');

          if (searchTerm !== '' && filteredDepts.length === 0) return null;

          return (
            <div
              key={school.id}
              className="bg-white border border-slate-200 cut-corner-panel shadow-sm overflow-hidden"
            >
              {/* School Header Row */}
              <div
                onClick={() => toggleSchool(school.id)}
                className="p-5 md:p-6 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors border-b border-slate-100 select-none"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: school.color }}
                  />
                  <div>
                    <span
                      className="px-2 py-0.5 cut-corner-badge text-white text-[9px] font-black uppercase tracking-wider mb-1 inline-block"
                      style={{ backgroundColor: school.color }}
                    >
                      {school.badge}
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-[#0d315c]">
                      {school.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="hidden sm:inline-block text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {school.departments.length} Departments
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </div>

              {/* Department & Programs Expansion */}
              {isExpanded && (
                <div className="p-6 md:p-8 space-y-8 bg-[#fafcff]">
                  {filteredDepts.map((dept) => (
                    <div key={dept.id} className="space-y-4">
                      {/* Department Heading */}
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <div className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-[#019e6e]" />
                          <h4 className="text-sm md:text-base font-black text-[#0d315c]">
                            {dept.name}
                          </h4>
                        </div>
                        <Link
                          href={`/schools/${school.slug}/${dept.slug}/`}
                          className="text-xs font-bold text-[#019e6e] hover:underline"
                        >
                          Dept Overview &rarr;
                        </Link>
                      </div>

                      {/* Programs Cards in Department */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {dept.programs.map((prog) => (
                          <div
                            key={prog.id}
                            className="p-4 bg-white border border-slate-200 cut-corner-card hover:border-[#019e6e] transition-all flex flex-col justify-between shadow-xs"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span
                                  className={`px-2 py-0.5 text-[9px] font-black uppercase tracking-wider rounded ${
                                    prog.level === 'Undergraduate'
                                      ? 'bg-blue-50 text-blue-700'
                                      : prog.level === 'Postgraduate'
                                      ? 'bg-purple-50 text-purple-700'
                                      : prog.level === 'Doctoral'
                                      ? 'bg-amber-50 text-amber-700'
                                      : 'bg-emerald-50 text-emerald-700'
                                  }`}
                                >
                                  {prog.level}
                                </span>
                                <span className="text-[10px] text-slate-400 font-bold">
                                  {prog.duration}
                                </span>
                              </div>

                              <h5 className="text-xs sm:text-sm font-bold text-[#0d315c] mb-2 leading-snug">
                                {prog.name}
                              </h5>
                            </div>

                            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                              <Link
                                href={`/schools/${school.slug}/${dept.slug}/${prog.slug}/`}
                                className="text-[11px] font-black uppercase text-[#019e6e] hover:underline flex items-center gap-1"
                              >
                                Program Details <ArrowRight className="w-3 h-3" />
                              </Link>
                              <a
                                href="https://apply.smru.edu.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] font-black uppercase tracking-wider text-[#0d315c] hover:text-[#ffaf3a]"
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
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
