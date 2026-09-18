"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { 
  Search, 
  BookOpen, 
  GraduationCap, 
  MapPin, 
  FileText, 
  HelpCircle, 
  Calendar, 
  ArrowRight,
  Sparkles,
  SlidersHorizontal,
  X
} from "lucide-react";
import { SCHOOLS, DEPARTMENTS, PROGRAMS } from "@/data/academicData";
import { CAMPUS_SCENES } from "@/data/campus360Data";
import { SCHOLARSHIPS } from "@/data/scholarshipData";
import { UNIVERSITY_FAQS } from "@/data/faqData";
import { UNIVERSITY_EVENTS } from "@/data/eventsData";

type SearchCategory = "all" | "programs" | "schools" | "admissions" | "campus" | "faqs";

interface SearchResultItem {
  id: string;
  category: "programs" | "schools" | "admissions" | "campus" | "faqs";
  title: string;
  subtitle?: string;
  description: string;
  href: string;
  tags: string[];
}

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<SearchCategory>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");

  // Build unified search index
  const index = useMemo<SearchResultItem[]>(() => {
    const items: SearchResultItem[] = [];

    // 1. Programs
    PROGRAMS.forEach((prog) => {
      const dept = DEPARTMENTS.find((d) => d.slug === prog.departmentId);
      const school = SCHOOLS.find((s) => s.slug === prog.schoolId);
      items.push({
        id: `prog-${prog.slug}`,
        category: "programs",
        title: prog.name,
        subtitle: `${prog.level.toUpperCase()} • ${prog.duration} • ${dept?.name || ""}`,
        description: `Offered under the ${school?.name || "St. Mary's University"}. Eligibility: ${prog.eligibility}. Focus includes theoretical rigor, practical laboratories, and industry-oriented rehabilitation technologies.`,
        href: `/schools/${prog.schoolId}/${prog.departmentId}/${prog.slug}`,
        tags: [prog.level.toLowerCase(), prog.schoolId, prog.departmentId, "degree", "program", "course"],
      });
    });

    // 2. Schools & Departments
    SCHOOLS.forEach((sch) => {
      const progCount = sch.departments.reduce((acc, d) => acc + d.programs.length, 0);
      items.push({
        id: `school-${sch.slug}`,
        category: "schools",
        title: sch.name,
        subtitle: `Academic Faculty • ${sch.departments.length} Departments • ${progCount} Degree Programmes`,
        description: sch.description,
        href: `/schools/${sch.slug}`,
        tags: ["school", "faculty", "academics", sch.slug],
      });
    });

    DEPARTMENTS.forEach((dept) => {
      const sch = SCHOOLS.find((s) => s.slug === dept.schoolId);
      items.push({
        id: `dept-${dept.slug}`,
        category: "schools",
        title: dept.name,
        subtitle: `Department • ${sch?.name || "Academic Department"}`,
        description: dept.description,
        href: `/schools/${dept.schoolId}/${dept.slug}`,
        tags: ["department", dept.schoolId, "academics"],
      });
    });

    // 3. Admissions & Scholarships
    items.push({
      id: "adm-gateway",
      category: "admissions",
      title: "Admissions Gateway 2026-27",
      subtitle: "Official Admissions Portal & Criteria",
      description: "Explore undergraduate, postgraduate, diploma, and doctoral admission pathways, eligibility criteria, and the 4-step admission process at SMRU.",
      href: "/admissions",
      tags: ["admissions", "apply", "process", "eligibility", "entrance"],
    });

    items.push({
      id: "adm-phd",
      category: "admissions",
      title: "Ph.D. & Doctoral Admissions",
      subtitle: "Full-Time & Part-Time Research Degrees",
      description: "Research scholars at SMRU engage in cutting-edge doctoral programs in engineering, health sciences, computing, management, and interdisciplinary rehabilitation.",
      href: "/phd-admissions",
      tags: ["phd", "doctorate", "research", "fellowship"],
    });

    items.push({
      id: "adm-fee",
      category: "admissions",
      title: "Fee Structure Policy",
      subtitle: "Institutional Fee Schedule & Guidelines",
      description: "Transparent, counselling-governed tuition structure for all programs with installment schedules, hostel fees, and merit concessions.",
      href: "/fee-structure",
      tags: ["fees", "cost", "tuition", "hostel fee"],
    });

    SCHOLARSHIPS.forEach((sch) => {
      items.push({
        id: `scholarship-${sch.id}`,
        category: "admissions",
        title: sch.name,
        subtitle: `Financial Aid • ${sch.tag}`,
        description: `Eligibility: ${sch.eligibility}. ${sch.description}`,
        href: "/admissions#scholarships",
        tags: ["scholarship", "financial aid", "merit", "fee waiver"],
      });
    });

    // 4. Campus 360 & Facilities
    CAMPUS_SCENES.forEach((scene) => {
      items.push({
        id: `scene-${scene.id}`,
        category: "campus",
        title: scene.title,
        subtitle: `360° Virtual Campus Tour • ${scene.category.toUpperCase()}`,
        description: scene.description,
        href: `/campus-360?scene=${scene.slug}`,
        tags: ["campus", "facility", "360", "hostel", "labs", "sports", scene.category.toLowerCase()],
      });
    });

    items.push({
      id: "campus-location",
      category: "campus",
      title: "Campus Location & Transit Directions",
      subtitle: "Deshmukhi Campus, Yadadri Bhuvanagiri / Hyderabad Metro Region",
      description: "Directions via NH65 Vijayawada Highway and Hyderabad Outer Ring Road (ORR Exit 11). University transport routes, GPS coordinates, and bus schedules.",
      href: "/campus-location-hyderabad",
      tags: ["location", "directions", "bus", "transport", "hyderabad", "deshmukhi"],
    });

    items.push({
      id: "campus-hostel",
      category: "campus",
      title: "Student Hostels & Residential Life",
      subtitle: "Air-Cooled Rooms, Hygienic Mess, High-Speed Wi-Fi",
      description: "Dedicated residential quarters for male and female scholars with 24/7 biometric security, indoor recreation, medical clinic, and laundry facilities.",
      href: "/hostel",
      tags: ["hostel", "accommodation", "residence", "mess", "food"],
    });

    // 5. Events
    UNIVERSITY_EVENTS.forEach((ev) => {
      items.push({
        id: `event-${ev.id}`,
        category: "campus",
        title: ev.title,
        subtitle: `University Event • ${ev.date} • ${ev.venue || ev.location}`,
        description: ev.description,
        href: `/events/${ev.slug}`,
        tags: ["event", "campus life", ev.category.toLowerCase()],
      });
    });

    // 6. FAQs
    UNIVERSITY_FAQS.forEach((faq, idx) => {
      items.push({
        id: `faq-${idx}`,
        category: "faqs",
        title: faq.question,
        subtitle: `Frequently Asked Question • ${faq.category}`,
        description: faq.answer,
        href: "/admissions#faqs",
        tags: ["faq", "help", "question", faq.category.toLowerCase()],
      });
    });

    return items;
  }, []);

  // Filter items
  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    
    return index.filter((item) => {
      // Category filter
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }

      // Level filter (if in programs category)
      if (selectedLevel !== "all" && item.category === "programs") {
        if (!item.tags.includes(selectedLevel)) return false;
      }

      // If query is empty, show curated highlights
      if (!q) {
        return activeCategory !== "all" || ["schools", "admissions"].includes(item.category);
      }

      // Match query against title, subtitle, description, tags
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchSub = item.subtitle?.toLowerCase().includes(q) || false;
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchTags = item.tags.some((t) => t.toLowerCase().includes(q));

      return matchTitle || matchSub || matchDesc || matchTags;
    });
  }, [index, query, activeCategory, selectedLevel]);

  const categories: { key: SearchCategory; label: string; count?: number }[] = [
    { key: "all", label: "All Results" },
    { key: "programs", label: "Programmes (71)" },
    { key: "schools", label: "Schools & Depts" },
    { key: "admissions", label: "Admissions & Aid" },
    { key: "campus", label: "Campus & 360°" },
    { key: "faqs", label: "FAQs" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Banner */}
      <section className="bg-[#0d315c] text-white py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffaf3a_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#ffaf3a] bg-[#ffaf3a]/15 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              SMRU Global Discovery Directory
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Explore Programmes, Schools & Campus
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Instant search across 71 UGC-recognized degree programmes, 6 academic schools, admission criteria, scholarships, 360° campus scenes, and university notices.
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="mt-8 max-w-4xl relative">
            <div className="relative flex items-center bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-[#019e6e]">
              <Search className="w-6 h-6 text-slate-400 ml-4 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by degree (e.g. B.Tech AI, Physiotherapy, MBA), school, faculty, or admission question..."
                className="w-full py-4 px-4 text-slate-800 text-base sm:text-lg placeholder-slate-400 focus:outline-none"
                autoFocus
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="mr-3 p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
                  aria-label="Clear query"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Quick Keyword Pills */}
            <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-slate-300">
              <span className="text-slate-400">Popular searches:</span>
              {[
                "Computer Science",
                "Physiotherapy",
                "Ph.D.",
                "Artificial Intelligence",
                "Hostel",
                "Scholarships",
                "Speech Therapy",
                "MBA",
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 rounded transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0 space-y-6">
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100 font-semibold text-slate-900 text-sm uppercase tracking-wider">
                <SlidersHorizontal className="w-4 h-4 text-[#019e6e]" />
                Filter by Category
              </div>
              <div className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors flex items-center justify-between ${
                      activeCategory === cat.key
                        ? "bg-[#0d315c] text-white font-medium"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>

              {/* Level Filter (for programs) */}
              {(activeCategory === "all" || activeCategory === "programs") && (
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Degree Level
                  </span>
                  <div className="space-y-1">
                    {[
                      { id: "all", label: "All Degree Levels" },
                      { id: "ug", label: "Undergraduate (UG)" },
                      { id: "pg", label: "Postgraduate (PG)" },
                      { id: "diploma", label: "Diploma / Certificate" },
                      { id: "doctoral", label: "Ph.D. / Doctoral" },
                    ].map((lvl) => (
                      <button
                        key={lvl.id}
                        onClick={() => setSelectedLevel(lvl.id)}
                        className={`w-full text-left px-3 py-1.5 text-xs rounded transition-colors ${
                          selectedLevel === lvl.id
                            ? "bg-[#019e6e] text-white font-medium"
                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        {lvl.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Need Assistance Card */}
            <div className="bg-[#0d315c] text-white p-5 rounded-lg">
              <h3 className="font-heading font-bold text-base text-[#ffaf3a] mb-2">
                Need Help Finding a Degree?
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Our academic counselors are available to guide you through program options, eligibility criteria, and fee structures.
              </p>
              <a
                href="tel:7331119432"
                className="block text-center py-2 px-3 bg-[#019e6e] hover:bg-[#01865d] text-white text-xs font-bold rounded transition-colors"
              >
                Call: +91 73311 19432
              </a>
            </div>
          </aside>

          {/* Results Listing */}
          <main className="flex-1 min-w-0">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-3 border-b border-slate-200">
              <span className="text-sm text-slate-600">
                Found{" "}
                <strong className="text-slate-900 font-bold">
                  {filteredResults.length}
                </strong>{" "}
                results {query ? `for "${query}"` : "in index"}
              </span>
              {query && (
                <button
                  onClick={() => {
                    setQuery("");
                    setActiveCategory("all");
                    setSelectedLevel("all");
                  }}
                  className="text-xs text-[#019e6e] hover:underline self-start sm:self-auto"
                >
                  Reset all filters
                </button>
              )}
            </div>

            {/* Results items */}
            {filteredResults.length > 0 ? (
              <div className="space-y-4">
                {filteredResults.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="block bg-white p-5 rounded-lg border border-slate-200 hover:border-[#019e6e] hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <span
                            className={`inline-block px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider rounded ${
                              item.category === "programs"
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                : item.category === "schools"
                                ? "bg-blue-50 text-blue-700 border border-blue-200"
                                : item.category === "admissions"
                                ? "bg-amber-50 text-amber-700 border border-amber-200"
                                : item.category === "campus"
                                ? "bg-purple-50 text-purple-700 border border-purple-200"
                                : "bg-slate-100 text-slate-700 border border-slate-200"
                            }`}
                          >
                            {item.category}
                          </span>
                          {item.subtitle && (
                            <span className="text-xs text-slate-500 font-medium">
                              {item.subtitle}
                            </span>
                          )}
                        </div>
                        <h2 className="font-heading text-lg font-bold text-slate-900 group-hover:text-[#019e6e] transition-colors flex items-center gap-2">
                          {item.title}
                        </h2>
                        <p className="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-400 group-hover:bg-[#019e6e] group-hover:text-white transition-colors shrink-0">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="bg-white rounded-lg border border-slate-200 p-12 text-center">
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold text-slate-800 mb-2">
                  No matching results found
                </h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
                  We couldn&apos;t find anything matching &ldquo;{query}&rdquo;. Try checking for spelling errors or searching for broader terms like &ldquo;Engineering&rdquo;, &ldquo;Pharmacy&rdquo;, or &ldquo;Hostel&rdquo;.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <button
                    onClick={() => setQuery("")}
                    className="px-4 py-2 bg-[#0d315c] text-white text-xs font-semibold rounded hover:bg-[#092241] transition-colors"
                  >
                    View All Directory Items
                  </button>
                  <Link
                    href="/academic-structure"
                    className="px-4 py-2 bg-[#019e6e] text-white text-xs font-semibold rounded hover:bg-[#01865d] transition-colors"
                  >
                    Browse Academic Structure
                  </Link>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 p-12 text-center text-slate-500">Loading directory index...</div>}>
      <SearchContent />
    </Suspense>
  );
}
