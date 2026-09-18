'use client';

import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingActionSidebar from './FloatingActionSidebar';
import EnquiryModal from './EnquiryModal';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[3000] focus:rounded-md focus:bg-[#0d315c] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0d315c]"
      >
        Skip to main content
      </a>

      {/* Main Header */}
      <Header onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      {/* Main Page Content */}
      <main id="main-content" className="flex-1 outline-none pt-[104px] lg:pt-[116px]">
        {children}
      </main>

      {/* Right-side Quick Action Sidebar */}
      <FloatingActionSidebar onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      {/* Global Footer */}
      <Footer />

      {/* Admission Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </div>
  );
}
