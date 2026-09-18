import Link from 'next/link';
import Image from 'next/image';
import { academicSchools } from '@/data/academicData';
import { scholarshipList } from '@/data/scholarshipData';
import { universityFAQs } from '@/data/faqData';
import FAQAccordion from '@/components/FAQAccordion';
import {
  Award,
  ArrowRight,
  Sparkles,
  BookOpen,
  Activity,
  HeartPulse,
  Brain,
  ShieldCheck,
  Scale,
  Cpu,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Users,
  Compass,
  Building,
  Utensils,
  Bike,
  Trees,
  Check
} from 'lucide-react';

export default function HomePage() {
  const partners = [
    'Care Hospitals',
    'Yashoda Hospitals',
    'Continental Hospitals',
    'NIMS Hyderabad',
    'National Institute for the Visually Handicapped',
    'TELANGANA ACADEMY FOR SKILL & KNOWLEDGE (TASK)',
    'National Institute for the Mentally Handicapped (NIEPID)',
    'Ali Yavar Jung National Institute of Speech and Hearing Disabilities'
  ];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION (#hero) */}
      <section
        id="hero"
        className="relative w-full h-[calc(100svh-112px)] md:h-[90svh] min-h-[560px] md:min-h-[620px] overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(max-width: 768px)" srcSet="/assets/hero-campus-mobile.webp" type="image/webp" />
            <Image
              src="/assets/hero-campus-fast.webp"
              alt="St. Mary's University Campus Drone View in Hyderabad"
              fill
              priority
              className="object-cover object-center"
            />
          </picture>
        </div>

        {/* Top gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-[42svh] md:h-[45svh] z-10 bg-gradient-to-b from-[#0d315c]/95 via-[#0d315c]/72 to-transparent pointer-events-none" />

        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-[36svh] z-10 bg-gradient-to-t from-[#0d315c]/85 via-[#0d315c]/35 to-transparent pointer-events-none md:hidden" />

        {/* Content */}
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-start p-6 md:p-12 pt-[96px] sm:pt-[104px] md:pt-[112px] lg:pt-[120px] xl:pt-[128px]">
          <div className="smru-container pointer-events-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-5 py-2 cut-corner-badge bg-[#ffaf3a]/10 backdrop-blur-md border border-[#ffaf3a]/30 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#ffaf3a] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ffaf3a]">
                  Admissions Open for UG, PG &amp; Diploma (2026-27)
                </span>
              </div>

              <div>
                <h1 className="text-[clamp(1.5rem,5.5vw,3.5rem)] font-black text-white drop-shadow-2xl [text-shadow:_0_8px_40px_rgba(0,0,0,0.8)] font-cinzel leading-[1.15] tracking-tight uppercase">
                  <span className="text-[#ffaf3a]">St. Mary&apos;s University</span> (SMRU), Hyderabad
                </h1>
              </div>

              <p className="text-white/90 text-[10px] md:text-[13px] font-black uppercase tracking-[0.4em] max-w-4xl mx-auto drop-shadow-lg leading-relaxed">
                St. Mary&apos;s Rehabilitation University · UGC 2(f) Recognised
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="https://apply.smru.edu.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-[#019e6e] text-white cut-corner-badge font-black text-xs uppercase tracking-widest shadow-xl hover:bg-[#10bb82] hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                Apply Online 2026-27 <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/schools/"
                className="px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/30 text-white cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-white/20 hover:-translate-y-0.5 transition-all"
              >
                Explore 71+ Programs
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll down line indicator */}
        <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
          <div className="w-[1px] h-12 bg-white/40 mx-auto animate-pulse" />
        </div>
      </section>

      {/* 2. TRUST STRIP (#trust-strip) */}
      <section id="trust-strip" className="bg-[#0d315c] text-white py-8 border-y border-white/10 relative z-20">
        <div className="smru-container text-center">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white/90 leading-relaxed max-w-5xl mx-auto">
            St. Mary&apos;s University (SMRU) is the public name of St. Mary&apos;s Rehabilitation University, a UGC-recognised private university in Hyderabad, Telangana, established under Telangana Ordinance No. 2 of 2025 and Telangana Act No. 10 of 2026.
          </p>
        </div>
      </section>

      {/* 3. WHY SMRU (#why-smru) */}
      <section id="why-smru" className="scroll-mt-24 smru-section bg-[#f8fbff]">
        <div className="smru-container">
          <div className="relative text-center">
            <h2 className="smru-title">Why Join St. Mary&apos;s University?</h2>
            <div className="mt-4 h-1.5 w-20 cut-corner-underline bg-[#ffaf3a] mx-auto" />
            <p className="smru-sub">
              St. Mary&apos;s University brings together rehabilitation, healthcare, allied sciences, assistive technology, law, management, technology, and multidisciplinary education through a student-first academic ecosystem.
            </p>
          </div>

          <ul className="relative space-y-6 lg:space-y-4 max-w-5xl mx-auto py-8 mt-10">
            {/* Step 1 */}
            <li className="relative w-full cursor-default transition-transform duration-500 hover:scale-[1.01] lg:ml-[10px] lg:w-[calc(100%-10px)]">
              <article className="relative overflow-hidden cut-corner-panel p-5 sm:p-6 lg:skew-x-[-6deg] lg:p-8 shadow-[0_15px_30px_rgba(0,0,0,0.1)] border-b-[6px] transition-all text-white bg-[#1d4f8e] border-b-[#081d3a]">
                <div className="flex items-start gap-4 sm:items-center sm:gap-5 lg:skew-x-[6deg] lg:gap-8">
                  <div className="h-12 w-12 shrink-0 cut-corner-badge border-[3px] border-black/10 flex items-center justify-center sm:h-14 sm:w-14 lg:h-16 lg:w-16 bg-white/10">
                    <span className="text-2xl font-black leading-none opacity-90 lg:text-3xl">1</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1.5 text-[14px] font-black uppercase leading-tight tracking-[0.08em] sm:text-[15px] lg:text-[18px] lg:tracking-[0.1em]">
                      Rehabilitation &amp; Healthcare Focus
                    </h3>
                    <p className="max-w-3xl break-words text-[13px] font-medium leading-relaxed opacity-90 lg:text-[14px]">
                      Dedicated clinical training embedded into healthcare and allied sciences programmes with hands-on hospital exposure.
                    </p>
                  </div>
                </div>
              </article>
            </li>

            {/* Step 2 */}
            <li className="relative w-full cursor-default transition-transform duration-500 hover:scale-[1.01] lg:ml-[35px] lg:w-[calc(100%-35px)]">
              <article className="relative overflow-hidden cut-corner-panel p-5 sm:p-6 lg:skew-x-[-6deg] lg:p-8 shadow-[0_15px_30px_rgba(0,0,0,0.1)] border-b-[6px] transition-all text-white bg-[#0fa571] border-b-[#034d32]">
                <div className="flex items-start gap-4 sm:items-center sm:gap-5 lg:skew-x-[6deg] lg:gap-8">
                  <div className="h-12 w-12 shrink-0 cut-corner-badge border-[3px] border-black/10 flex items-center justify-center sm:h-14 sm:w-14 lg:h-16 lg:w-16 bg-white/10">
                    <span className="text-2xl font-black leading-none opacity-90 lg:text-3xl">2</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1.5 text-[14px] font-black uppercase leading-tight tracking-[0.08em] sm:text-[15px] lg:text-[18px] lg:tracking-[0.1em]">
                      6 Focused Schools
                    </h3>
                    <p className="max-w-3xl break-words text-[13px] font-medium leading-relaxed opacity-90 lg:text-[14px]">
                      A streamlined structure offering depth and specialisation across key academic fields including law, engineering, and psychology.
                    </p>
                  </div>
                </div>
              </article>
            </li>

            {/* Step 3 */}
            <li className="relative w-full cursor-default transition-transform duration-500 hover:scale-[1.01] lg:ml-[60px] lg:w-[calc(100%-60px)]">
              <article className="relative overflow-hidden cut-corner-panel p-5 sm:p-6 lg:skew-x-[-6deg] lg:p-8 shadow-[0_15px_30px_rgba(0,0,0,0.1)] border-b-[6px] transition-all text-[#0d315c] bg-[#ffaf3a] border-b-[#ab711a]">
                <div className="flex items-start gap-4 sm:items-center sm:gap-5 lg:skew-x-[6deg] lg:gap-8">
                  <div className="h-12 w-12 shrink-0 cut-corner-badge border-[3px] border-black/10 flex items-center justify-center sm:h-14 sm:w-14 lg:h-16 lg:w-16 bg-black/5">
                    <span className="text-2xl font-black leading-none opacity-90 lg:text-3xl">3</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1.5 text-[14px] font-black uppercase leading-tight tracking-[0.08em] sm:text-[15px] lg:text-[18px] lg:tracking-[0.1em]">
                      Student-First Ecosystem
                    </h3>
                    <p className="max-w-3xl break-words text-[13px] font-medium leading-relaxed opacity-90 lg:text-[14px]">
                      Built to support student outcomes from admission through graduation with high-end residential, sports, and research facilities.
                    </p>
                  </div>
                </div>
              </article>
            </li>

            {/* Step 4 */}
            <li className="relative w-full cursor-default transition-transform duration-500 hover:scale-[1.01] lg:ml-[85px] lg:w-[calc(100%-85px)]">
              <article className="relative overflow-hidden cut-corner-panel p-5 sm:p-6 lg:skew-x-[-6deg] lg:p-8 shadow-[0_15px_30px_rgba(0,0,0,0.1)] border-b-[6px] transition-all text-white bg-[#155e75] border-b-[#083344]">
                <div className="flex items-start gap-4 sm:items-center sm:gap-5 lg:skew-x-[6deg] lg:gap-8">
                  <div className="h-12 w-12 shrink-0 cut-corner-badge border-[3px] border-black/10 flex items-center justify-center sm:h-14 sm:w-14 lg:h-16 lg:w-16 bg-white/10">
                    <span className="text-2xl font-black leading-none opacity-90 lg:text-3xl">4</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1.5 text-[14px] font-black uppercase leading-tight tracking-[0.08em] sm:text-[15px] lg:text-[18px] lg:tracking-[0.1em]">
                      Statutory Compliance
                    </h3>
                    <p className="max-w-3xl break-words text-[13px] font-medium leading-relaxed opacity-90 lg:text-[14px]">
                      UGC 2(f) recognized statutory state private university operating with transparent regulatory and academic governance.
                    </p>
                  </div>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </section>

      {/* 4. SCHOOLS SECTION (#schools) */}
      <section id="schools" className="scroll-mt-24 smru-section bg-white">
        <div className="smru-container">
          <div className="relative text-center">
            <h2 className="smru-title">Explore Our Schools</h2>
            <div className="mt-4 h-1.5 w-20 cut-corner-underline bg-[#ffaf3a] mx-auto" />
            <p className="smru-sub">
              Offering 71+ career-aligned undergraduate, postgraduate, and doctoral degrees across 6 specialized academic faculties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {academicSchools.map((school) => {
              const totalProgs = school.departments.reduce((acc, d) => acc + d.programs.length, 0);
              return (
                <article
                  key={school.id}
                  className="bg-[#f8fbff] border border-slate-200 cut-corner-card p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
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
                        {totalProgs} Programs
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-[#0d315c] group-hover:text-[#019e6e] transition-colors mb-3">
                      {school.name}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {school.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">
                      {school.departments.length} Departments
                    </span>
                    <Link
                      href={`/schools/${school.slug}/`}
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#019e6e] hover:text-[#10bb82] group-hover:translate-x-1 transition-all"
                    >
                      View Programs <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/academic-structure/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0d315c] text-white cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-[#019e6e] transition-colors"
            >
              View Complete Academic Structure <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. TEACHING TECHNIQUES (#experience) */}
      <section id="experience" className="scroll-mt-24 smru-section bg-[#f8fbff]">
        <div className="smru-container">
          <div className="relative text-center">
            <h2 className="smru-title">Teaching Techniques at St. Mary&apos;s University</h2>
            <div className="mt-4 h-1.5 w-20 cut-corner-underline bg-[#ffaf3a] mx-auto" />
            <p className="smru-sub">
              Our pedagogic framework balances intensive classroom theory with active clinical bedside rounds, practical simulations, and assistive research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white p-7 cut-corner-panel border border-slate-200 shadow-sm hover:shadow-lg transition-all text-center">
              <div className="w-14 h-14 rounded-full bg-[#019e6e]/10 text-[#019e6e] flex items-center justify-center mx-auto mb-5">
                <Activity className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-[#0d315c] mb-2">Clinical Exposure</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct diagnostic and patient handling rounds conducted in on-campus clinics and partnered multi-speciality tertiary care hospitals.
              </p>
            </div>

            <div className="bg-white p-7 cut-corner-panel border border-slate-200 shadow-sm hover:shadow-lg transition-all text-center">
              <div className="w-14 h-14 rounded-full bg-[#ffaf3a]/15 text-[#e8971f] flex items-center justify-center mx-auto mb-5">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-[#0d315c] mb-2">Simulation Labs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-fidelity physiological manikins, virtual audiological testers, and computerized gait analyzers for risk-free skill mastery.
              </p>
            </div>

            <div className="bg-white p-7 cut-corner-panel border border-slate-200 shadow-sm hover:shadow-lg transition-all text-center">
              <div className="w-14 h-14 rounded-full bg-[#1d4f8e]/10 text-[#1d4f8e] flex items-center justify-center mx-auto mb-5">
                <Brain className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-[#0d315c] mb-2">Multisensory Learning</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Visual, auditory, and kinesthetic tools tailored specifically for inclusive education and rehabilitation cognitive therapy.
              </p>
            </div>

            <div className="bg-white p-7 cut-corner-panel border border-slate-200 shadow-sm hover:shadow-lg transition-all text-center">
              <div className="w-14 h-14 rounded-full bg-[#0fa571]/10 text-[#0fa571] flex items-center justify-center mx-auto mb-5">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-[#0d315c] mb-2">Peer-Led Case Discussions</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Interdisciplinary case reviews bridging medicine, psychology, law, and engineering to solve real-world healthcare challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CAMPUS & LEARNING ENVIRONMENT (#campus) */}
      <section id="campus" className="relative scroll-mt-24 smru-section bg-white overflow-hidden">
        <div className="smru-container">
          <div className="relative text-center">
            <h2 className="smru-title">Campus &amp; Learning Environment</h2>
            <div className="mt-4 h-1.5 w-20 cut-corner-underline bg-[#ffaf3a] mx-auto" />
            <p className="smru-sub">
              Sprawling modern campus near Ramoji Film City equipped with state-of-the-art facilities for complete academic and personal development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-[#f8fbff] border border-slate-200 cut-corner-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 bg-[#0d315c] text-white cut-corner-badge flex items-center justify-center">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-black text-[#0d315c] mb-1">Modern Hostels</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Wi-Fi enabled student dorms with 24/7 power backup, hygienic food mess, and round-the-clock wardens and security.
                </p>
              </div>
            </div>

            <div className="bg-[#f8fbff] border border-slate-200 cut-corner-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 bg-[#019e6e] text-white cut-corner-badge flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-black text-[#0d315c] mb-1">Advanced Labs</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Specialized anatomy models, audiology soundproof suites, gait labs, and assistive tech prototyping machines.
                </p>
              </div>
            </div>

            <div className="bg-[#f8fbff] border border-slate-200 cut-corner-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 bg-[#ffaf3a] text-[#0d315c] cut-corner-badge flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-black text-[#0d315c] mb-1">Sports Complex</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Turf cricket ground, multi-sport courts, indoor badminton, table tennis, and gymnasium conditioning.
                </p>
              </div>
            </div>

            <div className="bg-[#f8fbff] border border-slate-200 cut-corner-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 bg-[#155e75] text-white cut-corner-badge flex items-center justify-center">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-black text-[#0d315c] mb-1">Wellness Centre</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Full-time on-campus doctors, rehabilitation therapists, psychological counselors, and emergency ambulance access.
                </p>
              </div>
            </div>

            <div className="bg-[#f8fbff] border border-slate-200 cut-corner-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 bg-[#166534] text-white cut-corner-badge flex items-center justify-center">
                <Trees className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-black text-[#0d315c] mb-1">Green Spaces</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Extensive landscaped lawns, sensory healing parks, open-air study gazebos, and eco-friendly tree canopies.
                </p>
              </div>
            </div>

            <div className="bg-[#f8fbff] border border-slate-200 cut-corner-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 bg-[#d97706] text-white cut-corner-badge flex items-center justify-center">
                <Bike className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-black text-[#0d315c] mb-1">Campus Bike Rental</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Eco-friendly bicycle sharing stations throughout the campus connecting academic blocks, libraries, and hostels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIAL SKILL PARTNERS (#partners) */}
      <section id="partners" className="relative scroll-mt-24 smru-section bg-[#f8fbff] overflow-hidden">
        <div className="smru-container">
          <div className="relative text-center">
            <h2 className="smru-title">Our Industrial Skill Partners</h2>
            <div className="mt-4 h-1.5 w-20 cut-corner-underline bg-[#ffaf3a] mx-auto" />
            <p className="smru-sub">
              Collaborations with leading hospitals, national institutes, and healthcare organizations to provide real-world internship and clinical exposure.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="p-5 bg-white border border-slate-200/80 cut-corner-card text-center flex items-center justify-center shadow-sm hover:shadow-md hover:border-[#019e6e] transition-all min-h-[90px]"
              >
                <span className="text-xs md:text-sm font-black text-[#0d315c] uppercase tracking-wide">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HOSTEL FACILITIES (#hostels) */}
      <section id="hostels" className="relative scroll-mt-24 smru-section bg-white overflow-hidden">
        <div className="smru-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#019e6e]">
                Residential Life
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0d315c] leading-tight">
                Hostel Facilities at <br className="hidden md:block" />
                <span className="text-[#019e6e]">St. Mary&apos;s University</span>
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                St. Mary&apos;s University provides safe, secure, and fully equipped residential hostel accommodations for boys and girls on campus, creating a vibrant learning community with quiet study hours, sports access, and nourishing dining.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Separate Boys & Girls Hostels',
                  '24/7 Security & CCTV Coverage',
                  'High-Speed Campus Wi-Fi',
                  'Nutritious Vegetarian & Non-Veg Meals',
                  'Resident Wardens & Medical Help',
                  'Indoor Recreation & Study Lounges'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#019e6e] shrink-0" />
                    <span className="text-xs font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/hostel/"
                  className="px-6 py-3 bg-[#0d315c] text-white cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-[#019e6e] transition-colors"
                >
                  Explore Hostels
                </Link>
                <Link
                  href="/hostel-360/"
                  className="px-6 py-3 bg-slate-100 text-[#0d315c] cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-colors"
                >
                  Hostel 360° Tour
                </Link>
              </div>
            </div>

            <div className="relative h-[360px] md:h-[420px] cut-corner-panel overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/campus-360/hostel-block/thumb.webp"
                alt="Hostel Block at St. Mary's University"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#0d315c]/90 px-4 py-2 cut-corner-badge text-white text-[10px] font-black uppercase tracking-widest">
                Student Residential Block
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CANTEEN SECTION (#canteen) */}
      <section id="canteen" className="relative scroll-mt-24 smru-section bg-[#0d315c] text-white overflow-hidden">
        <div className="smru-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[340px] md:h-[380px] cut-corner-panel overflow-hidden border-4 border-white/10 shadow-2xl order-2 lg:order-1">
              <Image
                src="/campus-360/student-life/thumb.webp"
                alt="Campus Canteen and Student Dining"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#ffaf3a] px-4 py-2 cut-corner-badge text-[#0d315c] text-[10px] font-black uppercase tracking-widest">
                Central Dining &amp; Cafeteria
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#ffaf3a]">
                Campus Dining
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Campus Canteen at <br className="hidden md:block" />
                <span className="text-[#ffaf3a]">St. Mary&apos;s University</span>
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                The university cafeteria serves fresh, wholesome, and nutritious meals prepared under stringent hygiene and safety protocols. With a diverse daily menu accommodating regional preferences, it is a favourite spot for socializing, discussions, and refreshments between lectures.
              </p>

              <ul className="space-y-2.5 text-xs text-white/90 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffaf3a]" /> Balanced multi-cuisine daily breakfast, lunch, and dinner
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffaf3a]" /> Fresh juices, snacks, and hot beverages throughout the day
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffaf3a]" /> Hygienic industrial kitchen with strict food inspection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10. LIFE AT SMRU GALLERY (#gallery) */}
      <section id="gallery" className="relative scroll-mt-24 py-16 bg-white overflow-hidden">
        <div className="smru-container">
          <div className="relative text-center">
            <h2 className="smru-title">Life at St. Mary&apos;s University</h2>
            <div className="mt-4 h-1.5 w-20 cut-corner-underline bg-[#ffaf3a] mx-auto" />
            <p className="smru-sub">
              Capturing moments of intellectual discovery, clinical training, athletic tournaments, and student life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="relative h-64 cut-corner-card overflow-hidden group shadow-md">
              <Image
                src="/campus-360/central-library/thumb.webp"
                alt="Central Library"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                <span className="text-[9px] font-black uppercase text-[#ffaf3a] tracking-widest">Academics</span>
                <h3 className="text-base font-black text-white">Central Library</h3>
              </div>
            </div>

            <div className="relative h-64 cut-corner-card overflow-hidden group shadow-md">
              <Image
                src="/campus-360/cricket-ground-gymnasium-and-indoor-games/thumb.webp"
                alt="Cricket Ground & Gym"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                <span className="text-[9px] font-black uppercase text-[#019e6e] tracking-widest">Athletics</span>
                <h3 className="text-base font-black text-white">Sports Complex</h3>
              </div>
            </div>

            <div className="relative h-64 cut-corner-card overflow-hidden group shadow-md">
              <Image
                src="/campus-360/class-room/thumb.webp"
                alt="Smart Classrooms"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                <span className="text-[9px] font-black uppercase text-[#ffaf3a] tracking-widest">Innovation</span>
                <h3 className="text-base font-black text-white">Smart Classrooms</h3>
              </div>
            </div>

            <div className="relative h-64 cut-corner-card overflow-hidden group shadow-md">
              <Image
                src="/campus-360/sensory-park/thumb.webp"
                alt="Sensory Park"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                <span className="text-[9px] font-black uppercase text-[#019e6e] tracking-widest">Therapy</span>
                <h3 className="text-base font-black text-white">Sensory Park</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CAMPUS 360 TEASER (#explore-campus) */}
      <section className="smru-section bg-[#f8fbff] border-y border-slate-200">
        <div className="smru-container">
          <div className="relative cut-corner-panel overflow-hidden bg-[#0d315c] text-white p-8 md:p-14 shadow-2xl">
            <div className="relative z-10 max-w-2xl space-y-6">
              <span className="px-3.5 py-1 cut-corner-badge bg-[#ffaf3a] text-[#0d315c] text-[10px] font-black uppercase tracking-widest">
                Interactive Virtual Tour
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                Experience the campus in 360°
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                Take an immersive 360° virtual walkthrough through all 22 campus locations including the main quadrangle, clinical rehab hospital, moot court, labs, and athletic arena.
              </p>
              <div>
                <Link
                  href="/campus-360/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#019e6e] text-white cut-corner-badge font-black text-xs uppercase tracking-widest shadow-xl hover:bg-[#10bb82] transition-colors"
                >
                  Launch Campus 360 Tour <Compass className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="absolute -right-10 -bottom-10 w-[420px] h-[360px] opacity-25 lg:opacity-40 pointer-events-none">
              <Image
                src="/campus-360/clock-tower/thumb.webp"
                alt="Clock Tower"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 12. SCHOLARSHIPS SECTION (#scholarships) */}
      <section
        id="scholarships"
        className="relative scroll-mt-24 smru-section bg-white border-b border-slate-100 overflow-hidden bg-[radial-gradient(at_50%_0%,rgba(255,175,58,0.08)_0,transparent_55%)]"
      >
        <div className="smru-container">
          <div className="relative text-center">
            <h2 className="smru-title">Scholarships at St. Mary&apos;s University</h2>
            <div className="mt-4 h-1.5 w-20 cut-corner-underline bg-[#ffaf3a] mx-auto" />
            <p className="smru-sub">
              We believe that quality education should be accessible. St. Mary&apos;s University offers robust scholarship programs for meritorious and deserving students.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-5 mt-12">
            {scholarshipList.map((scholarship) => (
              <div
                key={scholarship.id}
                className="px-6 py-3.5 bg-[#f5f9ff] text-[#0d315c] cut-corner-badge border border-[#d8e8fb] font-black shadow-[0_8px_20px_rgba(13,49,92,0.06)] hover:shadow-[0_12px_30px_rgba(13,49,92,0.12)] hover:-translate-y-1 transition-all flex items-center gap-2 relative z-10 cursor-default text-xs md:text-sm"
              >
                <Award className="text-[#ffaf3a] w-4 h-4 drop-shadow-md shrink-0" />
                <span>{scholarship.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/admissions/#scholarships"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#019e6e] hover:underline"
            >
              Learn More About Scholarship Eligibility &amp; Criteria <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 13. UNIVERSITY EVENTS (#events) */}
      <section id="events" className="relative scroll-mt-24 smru-section bg-[#eef6f5] border-y border-[#d8e8e6] overflow-hidden">
        <div className="smru-container">
          <div className="relative text-center">
            <h2 className="smru-title">University Events</h2>
            <div className="mt-4 h-1.5 w-20 cut-corner-underline bg-[#ffaf3a] mx-auto" />
            <p className="smru-sub">
              Latest campus activities, institutional initiatives, and student life updates from St. Mary&apos;s University.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="group overflow-hidden cut-corner-panel border border-slate-100 bg-white shadow-[0_18px_44px_rgba(13,49,92,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(13,49,92,0.14)]">
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <Image
                  src="/assets/events/tree-plantation-drive-2026/tree-plantation-drive-01.webp"
                  alt="Tree Plantation Drive at St. Mary's University"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute left-4 top-4 bg-[#0d315c]/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#ffaf3a] backdrop-blur">
                  World Environment Day
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3 flex flex-wrap gap-3 text-[11px] font-black uppercase tracking-[0.12em] text-slate-500">
                  <span className="inline-flex items-center gap-1.5 text-[#019e6e]">
                    <Calendar className="w-3.5 h-3.5" /> June 5, 2026
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#ffaf3a]">
                    <MapPin className="w-3.5 h-3.5" /> Campus Grounds
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#0d315c] tracking-tight">
                  Tree Plantation Drive
                </h3>
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                  St. Mary&apos;s University organized a large-scale Tree Plantation Drive under the Plant4Mother initiative, promoting environmental conservation and campus sustainability.
                </p>

                <div className="mt-5">
                  <Link
                    href="/events/"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#019e6e] group-hover:translate-x-1 transition-all"
                  >
                    View Event <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/events/"
              className="inline-flex items-center gap-3 bg-[#0d315c] px-6 py-4 text-xs font-black uppercase tracking-widest text-white transition-all hover:bg-[#019e6e]"
            >
              View All Events <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 14. CAMPUS LOCATION & DIRECTIONS */}
      <section className="scroll-mt-24 bg-white py-14 md:py-20 border-b border-slate-100">
        <div className="smru-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#019e6e]">
                Location &amp; Transit
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0d315c] leading-tight">
                Campus Location in Hyderabad
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                St. Mary&apos;s University is located near Ramoji Film City in Deshmukhi Village, Pochampally Mandal, Hyderabad. The campus is readily accessible via the Vijayawada Highway (NH65) and Outer Ring Road (ORR).
              </p>

              <div className="space-y-3 text-xs text-slate-700 font-semibold">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#019e6e] shrink-0 mt-0.5" />
                  <p>Near Ramoji Film City, Deshmukhi Village, Pochampally Mandal, Yadadri Bhuvanagiri District, Hyderabad - 508284.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#ffaf3a] shrink-0 mt-0.5" />
                  <p>Daily university shuttle bus routes from major metropolitan points across Hyderabad.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/campus-location-hyderabad/"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0d315c] text-white cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-[#019e6e] transition-colors"
                >
                  Detailed Directions &amp; Bus Routes <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="cut-corner-panel overflow-hidden shadow-xl border-4 border-white h-[360px]">
              <iframe
                title="St. Mary's University Location"
                src="https://maps.google.com/maps?q=St.%20Mary%27s%20University%2C%20Deshmukhi&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 15. OFFICIAL RECOGNITION (#recognition) */}
      <section id="recognition" className="scroll-mt-24 smru-section bg-white">
        <div className="smru-container text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-black uppercase tracking-widest text-[#019e6e]">
            Accreditation &amp; Trust
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0d315c]">
            Official <span className="text-[#019e6e]">Recognition</span>
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            St. Mary&apos;s University is established by the Government of Telangana under Telangana Ordinance No. 2 of 2025 and Telangana Act No. 10 of 2026. The university is recognized by the University Grants Commission (UGC) under Section 2(f) of the UGC Act, 1956.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="/assets/St. Marys Rehabilitation University UGC recognition letter 2(f).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-[#019e6e] text-[#019e6e] cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-[#019e6e] hover:text-white transition-all"
            >
              UGC Recognition Letter 2(f)
            </a>
            <a
              href="/assets/SMRU Act 10 of 2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-[#0d315c] text-[#0d315c] cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-[#0d315c] hover:text-white transition-all"
            >
              State University Act 10 of 2026
            </a>
          </div>
        </div>
      </section>

      {/* 16. ADMISSIONS CTA BANNER (#admissions-cta) */}
      <section id="admissions-cta" className="smru-section bg-[#0d315c] text-white relative overflow-hidden">
        <div className="smru-container text-center max-w-3xl mx-auto space-y-6 relative z-10">
          <span className="text-xs font-black uppercase tracking-widest text-[#ffaf3a]">
            Admissions Open 2026-27
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Begin Your <span className="text-[#ffaf3a]">Professional Journey</span>
          </h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            Apply online for 2026-27 undergraduate, postgraduate, and diploma admissions or connect with our academic counsellors for course guidance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://apply.smru.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#019e6e] text-white cut-corner-badge font-black text-xs uppercase tracking-widest shadow-xl hover:bg-[#10bb82] transition-colors"
            >
              Apply Online Now <ArrowRight className="w-4 h-4 ml-1 inline" />
            </a>
            <Link
              href="/contact/"
              className="px-8 py-4 bg-white/10 text-white cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-colors"
            >
              Talk to a Counselor
            </Link>
          </div>
        </div>
      </section>

      {/* 17. VOICES OF EXCELLENCE / TESTIMONIALS (#testimonials) */}
      <section id="testimonials" className="smru-section bg-white border-y border-slate-100">
        <div className="smru-container">
          <div className="relative text-center">
            <h2 className="smru-title">Voices of Excellence</h2>
            <div className="mt-4 h-1.5 w-20 cut-corner-underline bg-[#ffaf3a] mx-auto" />
            <p className="smru-sub">
              Reflections from scholars, clinicians, and faculty members within St. Mary&apos;s academic ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[#f8fbff] border border-slate-200 cut-corner-panel p-7 space-y-4">
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                &ldquo;The clinical immersion in audiology and speech therapy equipped me with real diagnostic experience from the very first academic year. The specialized simulation labs are unparalleled.&rdquo;
              </p>
              <div className="pt-2 border-t border-slate-200">
                <p className="text-xs font-black text-[#0d315c]">BASLP Scholar</p>
                <p className="text-[10px] text-slate-500 uppercase font-bold">School of Rehabilitation Sciences</p>
              </div>
            </div>

            <div className="bg-[#f8fbff] border border-slate-200 cut-corner-panel p-7 space-y-4">
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                &ldquo;St. Mary&apos;s blend of legal studies with healthcare policy and emerging tech law provides a distinct interdisciplinary edge that prepares lawyers for modern judicial and corporate challenges.&rdquo;
              </p>
              <div className="pt-2 border-t border-slate-200">
                <p className="text-xs font-black text-[#0d315c]">B.A. LL.B. (Hons) Student</p>
                <p className="text-[10px] text-slate-500 uppercase font-bold">School of Law</p>
              </div>
            </div>

            <div className="bg-[#f8fbff] border border-slate-200 cut-corner-panel p-7 space-y-4">
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                &ldquo;Hands-on assistive robotics and rehabilitation engineering workshops allow us to design real prosthetics and mobility aids for patients right here in Telangana.&rdquo;
              </p>
              <div className="pt-2 border-t border-slate-200">
                <p className="text-xs font-black text-[#0d315c]">B.Tech Rehabilitation Engineering</p>
                <p className="text-[10px] text-slate-500 uppercase font-bold">School of Engineering &amp; Technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 18. VISION & MISSION (#mission-vision) */}
      <section id="mission-vision" className="relative scroll-mt-24 overflow-hidden bg-[#0d315c] text-white py-16">
        <div className="smru-container">
          <div className="relative text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#ffaf3a]">
              Institutional Purpose
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Built for inclusive professional education
            </h2>
            <div className="mt-4 h-1.5 w-20 cut-corner-underline bg-[#ffaf3a] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 cut-corner-panel p-8 space-y-4">
              <h3 className="text-2xl font-black text-[#ffaf3a]">Our Vision</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                To emerge as a premier multidisciplinary university known nationally and globally for pioneering inclusive healthcare, rehabilitation sciences, compassionate education, and technological empowerment of every learner.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 cut-corner-panel p-8 space-y-4">
              <h3 className="text-2xl font-black text-[#019e6e]">Our Mission</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                To nurture highly qualified, socially conscious clinicians, therapists, engineers, legal professionals, and scholars through rigorous evidence-based curricula, hands-on clinical exposure, and continuous community service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 19. FAQS (#faqs) */}
      <section id="faqs" className="scroll-mt-24 py-16 bg-white border-t border-slate-100">
        <div className="smru-container">
          <div className="relative text-center mb-12">
            <h2 className="smru-title">Frequently Asked Questions</h2>
            <div className="mt-4 h-1.5 w-20 cut-corner-underline bg-[#ffaf3a] mx-auto" />
            <p className="smru-sub">
              Key information about university accreditation, admissions, courses, fees, and campus life.
            </p>
          </div>

          <FAQAccordion items={universityFAQs} />
        </div>
      </section>

      {/* 20. IMPORTANT LINKS & STATUTORY NOTICE */}
      <section className="py-12 bg-[#f8fbff] border-t border-slate-200">
        <div className="smru-container">
          <div className="border border-[#e2eaf3] bg-white p-6 md:p-8 cut-corner-panel shadow-sm">
            <div className="mb-6">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#0d315c]">
                Important Links &amp; Disclosures
              </h3>
              <div className="mt-2 h-1.5 w-16 cut-corner-underline bg-[#019e6e]" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {[
                { label: 'Approvals & Recognitions', href: '/approvals-recognitions/' },
                { label: 'Mandatory Disclosure', href: '/mandatory-disclosure/' },
                { label: 'Statutory Disclosures', href: '/statutory-disclosures/' },
                { label: 'Anti-Ragging Cell', href: '/anti-ragging/' },
                { label: 'Grievance Redressal', href: '/grievance-redressal/' },
                { label: 'IQAC Quality Assurance', href: '/iqac-quality-assurance/' },
                { label: 'Admissions 2026', href: '/admissions/' },
                { label: 'Campus 360 Tour', href: '/campus-360/' },
                { label: 'Campus Location', href: '/campus-location-hyderabad/' },
                { label: 'Faculty Careers', href: '/careers/' },
                { label: 'Fee Structure', href: '/fee-structure/' },
                { label: 'Leadership Profiles', href: '/leadership/all/' }
              ].map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="p-3 bg-slate-50 border border-slate-200 cut-corner-badge text-[11px] font-bold text-[#0d315c] hover:bg-[#019e6e] hover:text-white transition-colors block text-center truncate"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
