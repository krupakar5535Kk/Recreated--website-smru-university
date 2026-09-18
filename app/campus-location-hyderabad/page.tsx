import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Navigation, Bus, Car, Train, PhoneCall, ArrowRight, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: "Campus Location Hyderabad | St. Mary's University",
  description: "Verified campus address, road directions, highway access routes, and public transit guide to St. Mary's University near Ramoji Film City, Hyderabad.",
};

export default function CampusLocationPage() {
  return (
    <div className="bg-[#f8fbff] min-h-screen py-12 md:py-16">
      <div className="smru-container">
        {/* Breadcrumb & Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
            <Link href="/" className="hover:text-[#019e6e]">Home</Link>
            <span>/</span>
            <span className="text-[#019e6e]">Campus Location</span>
          </div>

          <h1 className="smru-h1 text-[#0d315c] uppercase">
            Campus Location &amp; Directions
          </h1>
          <div className="h-1.5 w-20 cut-corner-underline bg-[#ffaf3a] mx-auto" />

          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            St. Mary&apos;s University main campus is located near Ramoji Film City at Deshmukhi Village, easily accessible from Hyderabad city center and the international airport via major highways.
          </p>
        </div>

        {/* Addresses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Main Campus Address */}
          <div className="bg-white border-2 border-[#019e6e]/40 cut-corner-panel p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-[#019e6e]">
              <MapPin className="w-6 h-6 shrink-0" />
              <span className="text-xs font-black uppercase tracking-widest text-[#019e6e]">
                Main Campus &amp; Headquarters
              </span>
            </div>
            <h2 className="text-xl font-black text-[#0d315c]">
              Deshmukhi Campus, Hyderabad
            </h2>
            <address className="text-sm text-slate-600 not-italic leading-relaxed">
              <strong>St. Mary&apos;s University</strong><br />
              Near Ramoji Film City, Deshmukhi Village,<br />
              Pochampally Mandal, Yadadri Bhuvanagiri District,<br />
              Hyderabad Metropolitan Region,<br />
              Telangana State, India - 508284.
            </address>

            <div className="pt-2 border-t border-slate-100 text-xs space-y-1 text-slate-500">
              <p><strong>Admissions Helpdesk:</strong> 7331119432 / 9010455591</p>
              <p><strong>Official Email:</strong> reach@smru.edu.in</p>
            </div>
          </div>

          {/* Corporate / City Office Address */}
          <div className="bg-white border border-slate-200 cut-corner-panel p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-[#0d315c]">
              <Building className="w-6 h-6 shrink-0 text-[#ffaf3a]" />
              <span className="text-xs font-black uppercase tracking-widest text-slate-500">
                City Corporate Office
              </span>
            </div>
            <h2 className="text-xl font-black text-[#0d315c]">
              LB Nagar Corporate Office
            </h2>
            <address className="text-sm text-slate-600 not-italic leading-relaxed">
              <strong>Corporate Office, Ground Floor</strong><br />
              Prajay Princeton Towers, Opp. Metro Pillar No. 1650,<br />
              LB Nagar, Hyderabad, Telangana State.<br />
              (Near Victoria Memorial Metro Station)
            </address>

            <div className="pt-2 border-t border-slate-100 text-xs space-y-1 text-slate-500">
              <p><strong>Direct Desk:</strong> +91 87124 79133</p>
              <p><strong>Hours:</strong> Mon - Sat: 9:30 AM to 5:30 PM</p>
            </div>
          </div>
        </div>

        {/* Map Embed */}
        <div className="cut-corner-panel overflow-hidden shadow-2xl border-4 border-white mb-12 h-[420px]">
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

        {/* How to Reach & Transit Options */}
        <div className="bg-white border border-slate-200 cut-corner-panel p-8 md:p-12 shadow-sm space-y-8 mb-12">
          <h2 className="text-2xl font-black text-[#0d315c] border-b border-slate-100 pb-4">
            How to Reach the Campus
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 p-5 bg-slate-50 rounded border border-slate-200/60">
              <div className="flex items-center gap-2 text-[#019e6e]">
                <Car className="w-5 h-5" />
                <h3 className="text-sm font-black uppercase tracking-wider text-[#0d315c]">By Road / Car</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Take the Hyderabad-Vijayawada National Highway (NH65). Pass the LB Nagar junction and the Outer Ring Road (ORR) junction at Pedda Amberpet. Turn right towards Deshmukhi near the Ramoji Film City entrance route.
              </p>
            </div>

            <div className="space-y-3 p-5 bg-slate-50 rounded border border-slate-200/60">
              <div className="flex items-center gap-2 text-[#ffaf3a]">
                <Bus className="w-5 h-5 text-[#e8971f]" />
                <h3 className="text-sm font-black uppercase tracking-wider text-[#0d315c]">University Buses</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                St. Mary&apos;s University operates scheduled student and staff shuttle buses from key pickup locations across Hyderabad, Secunderabad, LB Nagar, Dilsukhnagar, Uppal, and ECIL.
              </p>
            </div>

            <div className="space-y-3 p-5 bg-slate-50 rounded border border-slate-200/60">
              <div className="flex items-center gap-2 text-[#0d315c]">
                <Train className="w-5 h-5 text-[#0d315c]" />
                <h3 className="text-sm font-black uppercase tracking-wider text-[#0d315c]">Metro &amp; Rail</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                The nearest Hyderabad Metro station is LB Nagar (Red Line). Connect to university shuttles or TSRTC bus services connecting directly to Deshmukhi and Ramoji Film City.
              </p>
            </div>
          </div>
        </div>

        {/* Action card */}
        <div className="bg-[#0d315c] text-white cut-corner-panel p-8 text-center max-w-2xl mx-auto space-y-4">
          <h3 className="text-xl font-black text-[#ffaf3a]">Plan Your Campus Visit</h3>
          <p className="text-xs sm:text-sm text-white/80">
            Prospective scholars and families are welcome to visit our laboratories, clinical hospital suites, and student residential blocks.
          </p>
          <div className="pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#019e6e] text-white cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-[#10bb82] transition-colors"
            >
              Book Visit Slot <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
