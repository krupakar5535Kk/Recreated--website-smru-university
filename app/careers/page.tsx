import { Metadata } from 'next';
import Link from 'next/link';
import {
  Users,
  BookOpen,
  Award,
  TrendingUp,
  Globe,
  Heart,
  Building,
  GraduationCap,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  Briefcase
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Faculty & Staff Careers | St. Mary's University",
  description: "Build your academic career at St. Mary's University. Explore faculty and administrative job openings in Hyderabad across healthcare, allied sciences, and law.",
};

export default function CareersPage() {
  const benefits = [
    { title: 'Supportive Team Culture', icon: Users },
    { title: 'Growth & Research Opportunities', icon: BookOpen },
    { title: 'Employee Wellness Benefits', icon: Heart },
    { title: 'Career Development', icon: TrendingUp },
    { title: 'Global Collaboration', icon: Globe },
    { title: 'Inclusive & Diverse Environment', icon: Award },
    { title: 'Modern Infrastructure', icon: Building },
    { title: 'Mentorship Programs', icon: GraduationCap }
  ];

  return (
    <div className="bg-[#f8fbff] min-h-screen py-12 md:py-16">
      <div className="smru-container">
        {/* Breadcrumb & Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
            <Link href="/" className="hover:text-[#019e6e]">Home</Link>
            <span>/</span>
            <span className="text-[#019e6e]">Careers</span>
          </div>

          <h1 className="smru-h1 text-[#0d315c] uppercase">
            Careers at <span className="text-[#019e6e]">St. Mary&apos;s University</span>
          </h1>
          <div className="h-1.5 w-20 cut-corner-underline bg-[#ffaf3a] mx-auto" />

          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Join St. Mary&apos;s University&apos;s specialized academic ecosystem for rehabilitation, allied health, law, and professional education.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <span className="inline-block bg-[#019e6e] text-white px-5 py-2 cut-corner-badge font-bold text-xs shadow">
              Applications reviewed on a rolling basis
            </span>
            <span className="inline-block bg-[#0d315c] text-white px-5 py-2 cut-corner-badge font-bold text-xs shadow">
              Join the School of Law &amp; Health Sciences Faculty
            </span>
          </div>
        </div>

        {/* Benefits Grid */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0d315c]">
              Why Faculty &amp; Staff Thrive Here
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {benefits.map((b, i) => {
              const IconComp = b.icon;
              return (
                <div
                  key={i}
                  className="bg-white cut-corner-card shadow-sm p-6 text-center border border-slate-200 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-[#019e6e]/10 text-[#019e6e] flex items-center justify-center mx-auto mb-3">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#0d315c] block leading-snug">
                    {b.title}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Join St. Mary's (Stepped / Panel Cards) */}
        <section className="max-w-5xl mx-auto mb-16">
          <div className="bg-white border border-slate-200 cut-corner-panel p-8 md:p-12 shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0d315c]">
                Why Join St. Mary&apos;s University?
              </h2>
              <div className="mt-3 h-1 w-16 bg-[#ffaf3a] mx-auto" />
              <p className="text-xs text-slate-500 font-semibold mt-2">
                Build your academic career in a purpose-driven university environment
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-200/80 cut-corner-card text-center space-y-2">
                <div className="w-12 h-12 bg-[#019e6e]/10 text-[#019e6e] cut-corner-badge flex items-center justify-center mx-auto font-black text-lg">
                  1
                </div>
                <h3 className="text-sm font-black text-[#0d315c]">Rehab-Focused Curriculum</h3>
                <p className="text-xs text-slate-600">Specialized programs tailored to rehabilitation and allied healthcare.</p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 cut-corner-card text-center space-y-2">
                <div className="w-12 h-12 bg-[#019e6e]/10 text-[#019e6e] cut-corner-badge flex items-center justify-center mx-auto font-black text-lg">
                  2
                </div>
                <h3 className="text-sm font-black text-[#0d315c]">Clinical Training &amp; Outreach</h3>
                <p className="text-xs text-slate-600">Real-world training integrated with hospital exposure and outreach.</p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 cut-corner-card text-center space-y-2">
                <div className="w-12 h-12 bg-[#019e6e]/10 text-[#019e6e] cut-corner-badge flex items-center justify-center mx-auto font-black text-lg">
                  3
                </div>
                <h3 className="text-sm font-black text-[#0d315c]">Educational Legacy</h3>
                <p className="text-xs text-slate-600">Purpose-driven environment backed by established educational leadership.</p>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200/80 cut-corner-card text-center space-y-2">
                <div className="w-12 h-12 bg-[#019e6e]/10 text-[#019e6e] cut-corner-badge flex items-center justify-center mx-auto font-black text-lg">
                  4
                </div>
                <h3 className="text-sm font-black text-[#0d315c]">Student Outcomes Focus</h3>
                <p className="text-xs text-slate-600">Work with teams dedicated to clinical skill-building and career support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team Contact Section */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-[#019e6e]/30 cut-corner-panel p-8 md:p-12 shadow-xl text-center space-y-6">
            <div className="w-16 h-16 bg-[#019e6e]/10 text-[#019e6e] rounded-full flex items-center justify-center mx-auto">
              <Briefcase className="w-8 h-8" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#0d315c]">
              Join Our Academic &amp; Administrative Team
            </h2>

            <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We are always looking for passionate educators, clinicians, researchers, and professional support staff to join our university. For job inquiries or to submit your CV/resume, contact our recruitment desk:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-2">
              <a
                href="mailto:enquiry@smru.edu.in"
                className="p-5 bg-slate-50 border border-slate-200 cut-corner-badge hover:border-[#019e6e] hover:bg-white transition-all flex flex-col items-center justify-center gap-1.5"
              >
                <Mail className="w-6 h-6 text-[#019e6e]" />
                <span className="text-xs font-bold text-slate-400 uppercase">Email Resume</span>
                <span className="text-sm font-black text-[#0d315c]">enquiry@smru.edu.in</span>
              </a>

              <a
                href="tel:+919010455591"
                className="p-5 bg-slate-50 border border-slate-200 cut-corner-badge hover:border-[#019e6e] hover:bg-white transition-all flex flex-col items-center justify-center gap-1.5"
              >
                <Phone className="w-6 h-6 text-[#019e6e]" />
                <span className="text-xs font-bold text-slate-400 uppercase">Recruitment Helpline</span>
                <span className="text-sm font-black text-[#0d315c]">+91 9010455591</span>
              </a>
            </div>

            <div className="pt-6 border-t border-slate-100 text-xs text-slate-500">
              <p><strong>St. Mary&apos;s University</strong>, Near Ramoji Film City, Deshmukhi Village, Hyderabad - 508284, India.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
