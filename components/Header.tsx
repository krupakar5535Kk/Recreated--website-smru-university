'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnnouncementBar from './AnnouncementBar';
import MegaMenuSchools from './MegaMenuSchools';
import MegaMenuAdmissions from './MegaMenuAdmissions';
import MobileNav from './MobileNav';
import { Menu } from 'lucide-react';

interface HeaderProps {
  onOpenEnquiry: () => void;
}

export default function Header({ onOpenEnquiry }: HeaderProps) {
  const [activeMenu, setActiveMenu] = useState<'schools' | 'admissions' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[2200] transition-transform duration-300">
        {/* Top announcement flash bar */}
        <AnnouncementBar />

        {/* Main Navbar */}
        <nav className="h-[64px] lg:h-[76px] bg-[#0d315c] border-b-2 border-[#019e6e]/40 shadow-lg relative">
          <div className="flex h-full items-center justify-between lg:pr-8">
            {/* White Logo Badge */}
            <Link
              href="/"
              className="flex h-full items-center justify-center shrink-0 bg-white cut-corner-badge shadow-md overflow-hidden transition-all duration-300 px-3 sm:px-4 lg:px-5 min-w-[112px] sm:min-w-[128px] lg:min-w-[140px]"
            >
              <Image
                src="/assets/Logo.webp"
                alt="St. Mary's University Logo"
                width={120}
                height={65}
                priority
                className="w-[86px] object-contain lg:w-[96px] h-auto"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden h-full lg:flex items-center justify-end gap-x-4 xl:gap-x-7 pr-4 font-outfit">
              <li>
                <Link
                  href="/"
                  className="whitespace-nowrap text-[12px] xl:text-[14px] font-black uppercase tracking-[0.14em] xl:tracking-[0.2em] text-white/90 hover:text-[#ffaf3a] transition-all relative group py-2"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#ffaf3a] transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </li>

              <li>
                <Link
                  href="/about/"
                  className="whitespace-nowrap text-[12px] xl:text-[14px] font-black uppercase tracking-[0.14em] xl:tracking-[0.2em] text-white/90 hover:text-[#ffaf3a] transition-all relative group py-2"
                >
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#ffaf3a] transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </li>

              {/* Schools Mega Menu Trigger */}
              <li
                className="h-full flex items-center relative"
                onMouseEnter={() => setActiveMenu('schools')}
              >
                <Link
                  href="/schools/"
                  className={`whitespace-nowrap text-[12px] xl:text-[14px] font-black uppercase tracking-[0.14em] xl:tracking-[0.2em] flex items-center gap-1.5 py-4 transition-all ${
                    activeMenu === 'schools' ? 'text-[#ffaf3a]' : 'text-white/90 hover:text-[#ffaf3a]'
                  }`}
                >
                  Schools
                  <span className="text-[9px] transition-transform duration-200">
                    {activeMenu === 'schools' ? '▲' : '▼'}
                  </span>
                </Link>
              </li>

              {/* Admissions Mega Menu Trigger */}
              <li
                className="h-full flex items-center relative"
                onMouseEnter={() => setActiveMenu('admissions')}
              >
                <Link
                  href="/admissions/"
                  className={`whitespace-nowrap text-[12px] xl:text-[14px] font-black uppercase tracking-[0.14em] xl:tracking-[0.2em] flex items-center gap-1.5 py-4 transition-all ${
                    activeMenu === 'admissions' ? 'text-[#ffaf3a]' : 'text-white/90 hover:text-[#ffaf3a]'
                  }`}
                >
                  Admissions
                  <span className="text-[9px] transition-transform duration-200">
                    {activeMenu === 'admissions' ? '▲' : '▼'}
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="/careers/"
                  className="whitespace-nowrap text-[12px] xl:text-[14px] font-black uppercase tracking-[0.14em] xl:tracking-[0.2em] text-white/90 hover:text-[#ffaf3a] transition-all relative group py-2"
                >
                  Careers
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#ffaf3a] transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </li>

              <li>
                <Link
                  href="/search/"
                  className="whitespace-nowrap text-[12px] xl:text-[14px] font-black uppercase tracking-[0.14em] xl:tracking-[0.2em] text-white/90 hover:text-[#ffaf3a] transition-all relative group py-2"
                >
                  Search
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#ffaf3a] transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </li>

              <li>
                <Link
                  href="/contact/"
                  className="whitespace-nowrap text-[12px] xl:text-[14px] font-black uppercase tracking-[0.14em] xl:tracking-[0.2em] text-white/90 hover:text-[#ffaf3a] transition-all relative group py-2"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#ffaf3a] transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </li>

              <li>
                <Link
                  href="/campus-360/"
                  className="whitespace-nowrap text-[12px] xl:text-[14px] font-black uppercase tracking-[0.14em] xl:tracking-[0.2em] text-white/90 hover:text-[#ffaf3a] transition-all relative group py-2"
                >
                  Campus 360
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#ffaf3a] transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="block lg:hidden mr-4 p-3 text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <span className="block h-[2.5px] w-full bg-white rounded-sm"></span>
                <span className="block h-[2.5px] w-full bg-white rounded-sm"></span>
                <span className="block h-[2.5px] w-full bg-white rounded-sm"></span>
              </div>
            </button>
          </div>

          {/* Mega Menus Dropdown */}
          {activeMenu === 'schools' && (
            <MegaMenuSchools onClose={() => setActiveMenu(null)} />
          )}
          {activeMenu === 'admissions' && (
            <MegaMenuAdmissions onClose={() => setActiveMenu(null)} />
          )}
        </nav>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenEnquiry={onOpenEnquiry}
      />
    </>
  );
}
