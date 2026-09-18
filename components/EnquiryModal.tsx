'use client';

import { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Loader2 } from 'lucide-react';
import { academicSchools } from '@/data/academicData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+ ]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid contact number (10-15 digits)';
    }
    if (!formData.school) errs.school = 'Please select a school of interest';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate admission API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', school: '', message: '' });
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[12000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        className="relative w-full max-w-lg bg-white shadow-2xl cut-corner-panel border-2 border-[#019e6e]/30 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="bg-[#0d315c] text-white p-6 flex items-center justify-between border-b-2 border-[#ffaf3a]">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#ffaf3a]">
              Admissions 2026-27
            </span>
            <h3 id="enquiry-title" className="text-xl font-black tracking-tight">
              Admissions Enquiry
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#019e6e]/10 text-[#019e6e] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-[#0d315c]">Enquiry Submitted!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you for your interest in St. Mary&apos;s University. Our admissions counselling team will contact you shortly with program details and eligibility information.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 bg-[#019e6e] text-white cut-corner-badge font-black text-xs uppercase tracking-widest hover:bg-[#10bb82] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#019e6e] transition-all ${
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
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#019e6e] transition-all ${
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
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#019e6e] transition-all ${
                      errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-[11px] mt-1 font-semibold">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  School of Interest <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.school}
                  onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                  className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#019e6e] transition-all ${
                    errors.school ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                  }`}
                >
                  <option value="">-- Select School --</option>
                  {academicSchools.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
                {errors.school && <p className="text-red-500 text-[11px] mt-1 font-semibold">{errors.school}</p>}
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  Message / Queries (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ask about eligibility, hostel facilities, scholarships, or counselling schedule..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#019e6e] transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#019e6e] text-white cut-corner-badge font-black text-xs uppercase tracking-widest shadow-lg hover:bg-[#10bb82] disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Submitting Enquiry...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" /> Submit Enquiry
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-wider">
                Official enquiries are treated in accordance with university privacy standards.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
