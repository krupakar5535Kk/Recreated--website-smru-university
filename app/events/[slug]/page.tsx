import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, MapPin, ArrowLeft, Tag, CheckCircle2, Share2 } from "lucide-react";
import { UNIVERSITY_EVENTS } from "@/data/eventsData";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return UNIVERSITY_EVENTS.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = UNIVERSITY_EVENTS.find((e) => e.slug === slug);
  if (!event) return { title: "Event Not Found | St. Mary's University" };

  return {
    title: `${event.title} | St. Mary's University Events`,
    description: event.summary,
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = UNIVERSITY_EVENTS.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Event Header */}
      <section className="bg-[#0d315c] text-white py-12 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All University Events
          </Link>

          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#019e6e] text-white">
              <Tag className="w-3.5 h-3.5" />
              {event.category}
            </span>
          </div>

          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            {event.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#ffaf3a]" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#ffaf3a]" />
              <span>{event.venue || event.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Event Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          {/* Main Photo */}
          <div className="relative h-64 sm:h-96 w-full bg-slate-100">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 sm:p-10 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              {event.summary}
            </p>

            <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-600">
              <p>{event.description}</p>
            </div>

            {event.highlights && event.highlights.length > 0 && (
              <div className="pt-6 border-t border-slate-100">
                <h3 className="font-heading font-bold text-base text-slate-900 mb-4">
                  Event Highlights & Key Milestones
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {event.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#019e6e] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/events"
                className="text-xs font-semibold text-[#019e6e] hover:underline"
              >
                &larr; View More Campus Happenings
              </Link>
              <Link
                href="/campus-360"
                className="px-4 py-2 bg-[#0d315c] hover:bg-[#092241] text-white text-xs font-bold rounded transition-colors"
              >
                Explore Campus 360° &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
