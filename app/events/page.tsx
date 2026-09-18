import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { universityEvents } from '@/data/eventsData';
import { Calendar, MapPin, Tag, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "University Events | St. Mary's University",
  description: "Stay updated with academic conferences, community outreach initiatives, cultural programs, and student fests at St. Mary's University Hyderabad.",
};

export default function EventsPage() {
  return (
    <div className="bg-[#f8fbff] min-h-screen py-12 md:py-16">
      <div className="smru-container">
        {/* Breadcrumbs & Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
            <Link href="/" className="hover:text-[#019e6e]">Home</Link>
            <span>/</span>
            <span className="text-[#019e6e]">Events</span>
          </div>

          <h1 className="smru-h1 text-[#0d315c] uppercase">
            University Events
          </h1>
          <div className="h-1.5 w-20 cut-corner-underline bg-[#ffaf3a] mx-auto" />

          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Latest campus activities, clinical conferences, national symposiums, student fests, and social outreach initiatives from St. Mary&apos;s University.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {universityEvents.map((event) => (
            <article
              key={event.id}
              id={event.slug}
              className="bg-white border border-slate-200 cut-corner-panel overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute left-4 top-4 bg-[#0d315c]/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-[#ffaf3a] backdrop-blur">
                    {event.category}
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-4">
                  <div className="flex flex-wrap gap-3 text-[11px] font-black uppercase tracking-wider text-slate-500">
                    <span className="inline-flex items-center gap-1.5 text-[#019e6e]">
                      <Calendar className="w-3.5 h-3.5" /> {event.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[#ffaf3a]">
                      <MapPin className="w-3.5 h-3.5" /> {event.location}
                    </span>
                  </div>

                  <h2 className="text-2xl font-black text-[#0d315c] tracking-tight">
                    {event.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                      Key Highlights:
                    </p>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {event.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#019e6e] font-bold">✓</span> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/contact/"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#0d315c] text-white cut-corner-badge text-xs font-black uppercase tracking-widest hover:bg-[#019e6e] transition-colors"
                >
                  Inquire About Upcoming Events <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
