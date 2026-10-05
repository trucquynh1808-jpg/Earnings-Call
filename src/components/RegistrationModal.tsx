import React, { useState } from 'react';
import { EarningsCall } from '../types';
import { createGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';
import { X, CheckCircle2, Calendar, Download, Building, Mail, User, Briefcase, HelpCircle } from 'lucide-react';

interface RegistrationModalProps {
  call: EarningsCall | null;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  call,
  onClose
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    institution: '',
    title: '',
    question: ''
  });

  if (!call) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.institution) {
      return;
    }
    setSubmitted(true);
  };

  const handleDownloadIcs = () => {
    downloadIcsFile(call);
  };

  const gcalUrl = createGoogleCalendarUrl(call);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header bar */}
        <div className="bg-[#0e2a66] px-6 py-4 text-white flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-blue-200">
              {call.ticker} · {call.quarter}
            </span>
            <h2 className="text-lg font-bold text-white leading-snug">
              {submitted ? 'Registration Confirmed' : 'Register for Earnings Call'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-blue-200 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!submitted ? (
            <div>
              <div className="mb-4 pb-4 border-b border-slate-100">
                <div className="text-xs text-slate-500 font-medium mb-1">
                  {call.companyName.en}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="inline-flex items-center gap-1 text-[#1a4bb5]">
                    <Calendar className="w-3.5 h-3.5" />
                    {call.date} ({call.time} GMT+7)
                  </span>
                  <span>·</span>
                  <span>{call.host === 'HSC' ? 'HSC Hosted' : 'Self Hosted'}</span>
                  <span>·</span>
                  <span>{call.lang}</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. David Nguyen / Jane Doe"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a4bb5] focus:border-[#1a4bb5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Institutional Work Email <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. portfolio.manager@fund.com"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a4bb5] focus:border-[#1a4bb5]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Institution / Fund Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        required
                        type="text"
                        value={formData.institution}
                        onChange={e => setFormData({ ...formData, institution: e.target.value })}
                        placeholder="e.g. Dragon Capital / VinaCapital"
                        className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a4bb5] focus:border-[#1a4bb5]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Job Title / Role
                    </label>
                    <div className="relative">
                      <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        value={formData.title}
                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                        placeholder="e.g. Senior Portfolio Analyst"
                        className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a4bb5] focus:border-[#1a4bb5]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Advance Question for Management (Optional)
                  </label>
                  <div className="relative">
                    <HelpCircle className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <textarea
                      rows={2}
                      value={formData.question}
                      onChange={e => setFormData({ ...formData, question: e.target.value })}
                      placeholder="Enter specific inquiries regarding operational guidance, Capex, or margins..."
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a4bb5] focus:border-[#1a4bb5]"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Advance questions will be prioritized during the moderated institutional Q&A session.
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-bold text-white bg-[#1a4bb5] hover:bg-[#133e99] rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    Confirm Registration
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Registration Confirmed
              </h3>
              <p className="text-sm text-slate-600 mb-5 max-w-sm mx-auto">
                You are confirmed for this session. A calendar invite and webinar credentials have been generated below.
              </p>

              {/* Webinar Credential details */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-left mb-6 text-xs text-slate-700 space-y-1.5">
                <div className="font-semibold text-slate-900 pb-1 border-b border-slate-200">
                  {call.ticker} - {call.companyName.en}
                </div>
                <div><span className="font-semibold">Date:</span> {call.date} ({call.time} GMT+7)</div>
                <div><span className="font-semibold">Format:</span> {call.format?.en || 'Virtual Webinar'}</div>
                <div><span className="font-semibold">Registered Email:</span> {formData.email}</div>
                {formData.question && (
                  <div className="text-slate-500 italic mt-1 pt-1 border-t border-slate-100">
                    "{formData.question}"
                  </div>
                )}
              </div>

              {/* Calendar Action Buttons */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Add Event to Calendar
                </div>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <a
                    href={gcalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 transition-colors shadow-2xs"
                  >
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>Google Calendar</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleDownloadIcs}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-[#1a4bb5] text-white hover:bg-[#133e99] transition-colors shadow-2xs cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Outlook / iCal (.ics)</span>
                  </button>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
