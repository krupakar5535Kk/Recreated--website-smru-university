import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  ShieldCheck,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  HelpCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Contact Us | St. Mary's University",
  description: "Contact St. Mary's University Hyderabad admissions helpdesk, schedule a campus tour, reach the corporate office, or submit an official student enquiry.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#f8fbff] min-h-screen py-12 md:py-16">
      <div className="smru-container">
        {/* Breadcrumbs & Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
            <Link href="/" className="hover:text-[#019e6e]">Home</Link>
            <span>/</span>
            <span className="text-[#019e6e]">Contact</span>
          </div>

          <h1 className="smru-h1 text-[#0d315c] uppercase">
            Contact <span className="text-[#019e6e]">St. Mary&apos;s University</span>
          </h1>
          <div className="h-1.5 w-20 cut-corner-underline bg-[#ffaf3a] mx-auto" />

          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Admissions, campus helpdesk, and corporate office support for students, parents, visitors, and public information requests. Our Deshmukhi campus is located near Ramoji Film City, Hyderabad.
          </p>
        </div>

        {/* Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 mb-14">
          {/* Left Column: Campus Addresses, Helpdesk, Map */}
          <div className="space-y-8">
            {/* Main Campus Card */}
            <div className="bg-white border border-slate-200 cut-corner-panel p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <span className="h-6 w-1.5 bg-[#019e6e] cut-corner-badge" />
                <h2 className="text-xl font-black text-[#0d315c]">
                  Regional Headquarters &amp; Main Campus
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-[#019e6e] shrink-0 mt-1" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Campus Address</p>
                      <address className="text-xs sm:text-sm font-bold text-[#0d315c] not-italic leading-relaxed mt-1">
                        <strong>St. Mary&apos;s University</strong><br />
                        <span className="text-slate-500 font-medium">Main Campus &amp; Administrative HQ</span><br />
                        Near Ramoji Film City, Deshmukhi Village,<br />
                        Pochampally Mandal, Yadadri Bhuvanagiri District,<br />
                        Hyderabad, Telangana - 508284.
                      </address>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-[#019e6e] shrink-0 mt-1" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Admissions Helpdesk</p>
                      <p className="text-sm font-black text-[#0d315c]">7331119432</p>
                      <p className="text-xs font-bold text-slate-500">9010455591 / 90</p>
                      <p className="text-[11px] text-slate-400 font-medium">Mon-Sat: 9:30 AM - 5:30 PM</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <MessageCircle className="w-5 h-5 text-[#25d366] shrink-0 mt-1" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#25d366]">WhatsApp Admissions</p>
                      <a
                        href="https://wa.me/919493321969"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-black text-[#0d315c] hover:text-[#019e6e] underline"
                      >
                        Chat with Counsellors (+91 9493321969)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Campus Visit Status */}
                <div className="bg-[#f8fafc] border border-[#bae6fd] cut-corner-panel p-5 space-y-3">
                  <div className="flex items-center gap-2 text-[#0369a1]">
                    <Clock className="w-4 h-4" />
                    <h3 className="text-xs font-black uppercase tracking-widest">
                      Campus Visit Status
                    </h3>
                  </div>
                  <p className="text-xs font-bold text-[#0d315c] leading-relaxed">
                    Campus visits are encouraged for prospective students. Please schedule your visit at least 24 hours in advance for a guided laboratory tour.
                  </p>
                  <a
                    href="tel:7331119432"
                    className="w-full inline-block text-center py-2.5 bg-[#0369a1] text-white cut-corner-badge font-bold text-[11px] uppercase tracking-widest hover:bg-[#075985] transition-colors"
                  >
                    Request Campus Visit
                  </a>
                </div>
              </div>

              {/* Map embed */}
              <div className="pt-4">
                <div className="h-[280px] w-full cut-corner-panel overflow-hidden border-2 border-slate-200">
                  <iframe
                    title="St. Mary's University Campus Location"
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

            {/* Corporate Office Card */}
            <div className="bg-white border border-slate-200 cut-corner-panel p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <Building className="w-5 h-5 text-[#ffaf3a]" />
                <h3 className="text-base font-black text-[#0d315c]">
                  City Corporate Office (LB Nagar)
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ground Floor, Prajay Princeton Towers, Opp. Metro Pillar No. 1650, LB Nagar, Hyderabad. (Mon–Sat: 9:30 AM to 5:30 PM). Direct Desk: <a href="tel:+918712479133" className="font-bold text-[#0d315c] underline">+91 87124 79133</a>.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="space-y-6">
            <ContactForm />

            <div className="bg-[#0d315c] text-white cut-corner-panel p-6 shadow-md space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-[#ffaf3a]">
                Emergency &amp; Security Desk
              </h4>
              <p className="text-xs text-white/80 leading-relaxed">
                Campus security and emergency assistance is staffed 24 hours a day, 7 days a week:
              </p>
              <p className="text-sm font-black text-white">
                +91 87124 79133
              </p>
              <p className="text-[10px] text-white/50">
                Main Campus Security Gate, Deshmukhi, Hyderabad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
