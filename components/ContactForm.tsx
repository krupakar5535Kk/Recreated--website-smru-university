'use client';

import { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Admissions Guidance',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errs.email = 'Valid email is required';
    }
    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+ ]{10,15}$/.test(form.phone.trim())) {
      errs.phone = 'Enter a valid 10-15 digit phone number';
    }
    if (!form.message.trim()) errs.message = 'Please provide your message or inquiry';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="bg-white border-2 border-[#019e6e]/40 cut-corner-panel p-8 text-center space-y-4 shadow-sm">
        <div className="w-14 h-14 bg-[#019e6e]/10 text-[#019e6e] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-black text-[#0d315c]">Message Sent Successfully</h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
          Thank you for writing to St. Mary&apos;s University. Our team typically responds within one business day through official contact channels.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm({ name: '', email: '', phone: '', category: 'Admissions Guidance', message: '' });
            setSubmitted(false);
          }}
          className="px-6 py-2.5 bg-[#019e6e] text-white cut-corner-badge font-bold text-xs uppercase tracking-wider hover:bg-[#10bb82] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 cut-corner-panel p-8 shadow-sm space-y-4 text-left">
      <div className="border-b border-slate-100 pb-3 mb-2">
        <h3 className="text-lg font-black text-[#0d315c]">Send an Official Enquiry</h3>
        <p className="text-xs text-slate-500">Admissions, campus visit requests, and institutional support</p>
      </div>

      <div>
        <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="e.g. Ananya Rao"
          className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#019e6e] ${
            errors.name ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
          }`}
        />
        {errors.name && <p className="text-red-500 text-[11px] mt-1 font-semibold">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="name@example.com"
            className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#019e6e] ${
              errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
            }`}
          />
          {errors.email && <p className="text-red-500 text-[11px] mt-1 font-semibold">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="e.g. 9876543210"
            className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#019e6e] ${
              errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
            }`}
          />
          {errors.phone && <p className="text-red-500 text-[11px] mt-1 font-semibold">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
          Inquiry Category
        </label>
        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#019e6e]"
        >
          <option value="Admissions Guidance">Admissions Guidance (UG/PG)</option>
          <option value="Campus Tour Booking">Campus Tour &amp; Visit Request</option>
          <option value="Hostel Accommodation">Hostel &amp; Residential Inquiry</option>
          <option value="Scholarship Verification">Scholarship Inquiry</option>
          <option value="Corporate / Partnership">Corporate &amp; Academic Partnership</option>
          <option value="General Administration">General Administration</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Please describe your inquiry or request..."
          className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#019e6e] resize-none ${
            errors.message ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
          }`}
        />
        {errors.message && <p className="text-red-500 text-[11px] mt-1 font-semibold">{errors.message}</p>}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3.5 bg-[#019e6e] text-white cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-[#10bb82] disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Transmitting...
            </>
          ) : (
            <>
              <Send className="w-3.5 h-3.5" /> Submit Inquiry
            </>
          )}
        </button>
      </div>
    </form>
  );
}
