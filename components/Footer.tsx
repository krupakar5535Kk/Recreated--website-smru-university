'use client';

import Link from 'next/link';
import { footerColumns } from '@/data/navigationData';
import { MapPin, Phone, Mail, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full overflow-hidden bg-[linear-gradient(180deg,#143a6b_0%,#0d315c_100%)] font-outfit text-white pb-20 lg:pb-0 relative z-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-16 pt-10 md:pt-16 pb-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] xl:gap-12">
          {/* Column 1: Brand & Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <div>
                <h3 className="text-3xl md:text-4xl font-black italic tracking-tight text-[#ffaf3a] leading-none">
                  St. Mary&apos;s
                </h3>
                <p className="mt-1 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white/70">
                  University
                </p>
              </div>
              <p className="max-w-xs text-[13px] md:text-[14px] font-medium leading-relaxed text-white/40">
                St. Mary&apos;s University educational legacy, now advancing rehabilitation-led professional education.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <h4 className="text-[12px] font-black uppercase tracking-widest text-[#ffaf3a]">Contact</h4>
              <div className="space-y-3 text-[13px] font-medium text-white/50">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 shrink-0 text-[#ffaf3a] w-4 h-4" />
                  <p className="leading-relaxed">
                    Near Ramoji Film City, Deshmukhi Village, Pochampally Mandal, Yadadri Bhuvanagiri District, Hyderabad, Telangana - 508284, India.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 shrink-0 text-[#ffaf3a] w-3.5 h-3.5" />
                  <div>
                    <p>7331119432</p>
                    <p>9010455591/90</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 shrink-0 text-[#ffaf3a] w-3.5 h-3.5" />
                  <p className="break-all">reach@smru.edu.in</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-3 mt-2">
              <h4 className="text-[12px] font-black uppercase tracking-widest text-[#ffaf3a]">Social</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.youtube.com/@SMRUniversity"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-9 w-9 items-center justify-center cut-corner-badge border border-white/10 bg-white/5 text-white transition-all hover:bg-[#ffaf3a] hover:text-[#0d315c]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a
                  href="https://www.facebook.com/SMRUniversity"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center cut-corner-badge border border-white/10 bg-white/5 text-white transition-all hover:bg-[#ffaf3a] hover:text-[#0d315c]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a
                  href="https://www.instagram.com/smruhyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center cut-corner-badge border border-white/10 bg-white/5 text-white transition-all hover:bg-[#ffaf3a] hover:text-[#0d315c]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/smruhyderabad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center cut-corner-badge border border-white/10 bg-white/5 text-white transition-all hover:bg-[#ffaf3a] hover:text-[#0d315c]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Academics */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[12px] font-black uppercase tracking-widest text-[#ffaf3a]">Academics</h4>
            <nav aria-label="Academics">
              <ul className="grid grid-cols-1 gap-2.5 text-[13px] font-semibold text-white/60">
                {footerColumns.academics.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href} className="transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Admissions & Campus */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-[12px] font-black uppercase tracking-widest text-[#ffaf3a]">Admissions</h4>
              <nav aria-label="Admissions">
                <ul className="grid grid-cols-1 gap-2.5 text-[13px] font-semibold text-white/60">
                  {footerColumns.admissions.map((item, idx) => (
                    <li key={idx}>
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-white"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link href={item.href} className="transition-colors hover:text-white">
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-[12px] font-black uppercase tracking-widest text-[#ffaf3a]">Campus</h4>
              <nav aria-label="Campus">
                <ul className="grid grid-cols-1 gap-2.5 text-[13px] font-semibold text-white/60">
                  {footerColumns.campus.map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.href} className="transition-colors hover:text-white">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Column 4: Student Support */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[12px] font-black uppercase tracking-widest text-[#ffaf3a]">Student Support</h4>
            <nav aria-label="Student Support">
              <ul className="grid grid-cols-1 gap-2.5 text-[13px] font-semibold text-white/60">
                {footerColumns.support.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href} className="transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 5: Information & Disclosures */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[12px] font-black uppercase tracking-widest text-[#ffaf3a]">Information & Disclosures</h4>
            <nav aria-label="University Information & Disclosures">
              <ul className="grid grid-cols-1 gap-2.5 text-[13px] font-semibold text-white/60">
                {footerColumns.disclosures.map((item, idx) => (
                  <li key={idx}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-white"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className={`transition-colors ${
                          item.highlight
                            ? 'text-[#019e6e] font-bold hover:text-[#10bb82]'
                            : 'hover:text-white'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Section with Scroll-To-Top Button */}
        <div className="relative mt-12 border-t border-white/[0.08] pt-10">
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="absolute left-1/2 top-0 flex h-12 w-12 md:h-14 md:w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center cut-corner-badge bg-[#10bb82] text-white shadow-[0_20px_45px_rgba(1,158,110,0.35)] transition-transform hover:scale-105"
          >
            <ChevronUp className="w-5 h-5 stroke-[2.5]" />
          </button>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="py-2">
              <p className="text-[13px] font-black uppercase tracking-[0.42em] text-white/40">
                Official St. Mary&apos;s University Website
              </p>
              <p className="mt-2 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.08em] text-white/25 leading-relaxed">
                St. Mary&apos;s University is officially established as St. Mary’s Rehabilitation University under Telangana Gazette Act No. 10 of 2026.
                <br />
                Copyrights © 2026 St. Mary&apos;s University. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/[0.35] md:justify-end">
              <Link href="/privacy-policy/" className="transition-colors hover:text-white/70">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service/" className="transition-colors hover:text-white/70">
                Terms Of Service
              </Link>
              <Link href="/schools/" className="text-[#ffaf3a] transition-colors hover:text-white">
                Academics
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
