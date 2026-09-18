import Link from 'next/link';
import { tickerNotices } from '@/data/navigationData';

export default function AnnouncementBar() {
  // Duplicate array so marquee scroll is seamless
  const duplicatedNotices = [...tickerNotices, ...tickerNotices];

  return (
    <section className="h-10 bg-[#082244] border-b border-white/10 text-white select-none relative z-[2200]">
      <div className="max-w-[1440px] mx-auto h-full px-3 sm:px-4 flex items-center gap-1.5 sm:gap-3">
        <span className="shrink-0 hidden md:inline-flex items-center cut-corner-badge bg-[#ffaf3a] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-[#0d315c]">
          Flash
        </span>

        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="smru-global-ticker-track">
            {duplicatedNotices.map((notice, idx) => (
              <Link
                key={idx}
                href={notice.href}
                className="smru-global-ticker-item transition-opacity hover:opacity-80"
              >
                <span className="flex items-center gap-1.5 sm:gap-2">
                  {notice.isNew && (
                    <span className="animate-pulse bg-[#ea580c] text-white px-1.5 py-0.5 text-[7px] sm:text-[8px] font-black uppercase tracking-widest whitespace-nowrap">
                      New:
                    </span>
                  )}
                  <span className={notice.isNew ? 'text-[#ffedd5] font-bold' : 'text-white/90 font-medium'}>
                    {notice.text}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="/admissions/"
          className="shrink-0 inline-flex min-h-[28px] items-center cut-corner-badge border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.05em] sm:tracking-[0.12em] text-white hover:bg-white/20 transition-colors"
        >
          Important Notice
        </Link>
      </div>
    </section>
  );
}
