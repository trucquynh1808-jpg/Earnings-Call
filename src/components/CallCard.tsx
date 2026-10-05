import React, { useState } from 'react';
import { EarningsCall } from '../types';
import { ChevronDown, Play, FileText, Clock } from 'lucide-react';

interface CallCardProps {
  call: EarningsCall;
  onRegister: (call: EarningsCall) => void;
  onWatchRecording: (call: EarningsCall) => void;
  onViewSlides: (call: EarningsCall) => void;
  isPast?: boolean;
}

export const CallCard: React.FC<CallCardProps> = ({
  call,
  onRegister,
  onWatchRecording,
  onViewSlides,
  isPast = false
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Date tile formatting (English format)
  const d = new Date(call.date + "T00:00:00");
  const day = String(d.getDate()).padStart(2, '0');
  const month = d.toLocaleDateString('en-GB', { month: 'short' });
  const weekday = d.toLocaleDateString('en-GB', { weekday: 'short' });

  return (
    <div
      id={`call-${call.ticker}`}
      className={`bg-white border rounded-xl overflow-hidden transition-all duration-150 ${
        call.host === 'HSC'
          ? 'border-l-4 border-l-[#1a4bb5] border-y-slate-200 border-r-slate-200 bg-[#fdfefe]'
          : 'border-slate-300'
      } ${isOpen ? 'shadow-md ring-1 ring-slate-200' : 'hover:shadow-md'}`}
    >
      {/* Clickable Header summary */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer p-4 select-none hover:bg-slate-50/70 transition-colors"
      >
        <div className="flex flex-col lg:grid lg:grid-cols-[85px_125px_180px_1fr_130px_24px] items-start lg:items-center gap-3 lg:gap-3.5">
          
          {/* Col 1: Date Tile */}
          <div className="flex items-center gap-3 lg:block">
            <div className="flex flex-col leading-none">
              <span className="font-mono text-2xl font-black text-[#0e2a66]">
                {day}
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-tight mt-0.5">
                {month} · {weekday}
              </span>
            </div>
            
            {/* Mobile badge indicators if screens < lg */}
            <div className="lg:hidden flex items-center gap-1.5 ml-auto">
              {!isPast && (
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Confirmed
                </span>
              )}
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-800">
                {call.host === 'HSC' ? 'HSC Hosted' : 'Self Hosted'}
              </span>
            </div>
          </div>

          {/* Col 2: Time */}
          <div className="text-xs sm:text-[13px] font-mono font-medium text-slate-700 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400 lg:hidden" />
            <span>{call.time}</span>
          </div>

          {/* Col 3: Ticker + Company Name Preview */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-black text-base text-[#0e2a66]">
                {call.ticker}
              </span>
              <span className="text-[10px] font-bold text-slate-500 uppercase px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">
                {call.exchange}
              </span>
            </div>
            <div className="text-xs text-slate-500 line-clamp-1 font-medium mt-0.5" title={call.companyName.en}>
              {call.companyName.en}
            </div>
          </div>

          {/* Col 4: Representatives */}
          <div className="w-full">
            {call.reps && call.reps.length > 0 ? (
              <div className="flex flex-col gap-0.5">
                {call.reps.slice(0, 2).map((rep, idx) => (
                  <div key={idx} className="text-xs text-slate-800 leading-snug">
                    <span className="font-semibold text-slate-900">{rep.name}</span>
                    <span className="text-slate-500 text-[11px] block sm:inline sm:ml-1">· {rep.title}</span>
                  </div>
                ))}
              </div>
            ) : (
              <span className="text-xs text-slate-400 italic">
                Executive management & IR team
              </span>
            )}
          </div>

          {/* Col 5: Tags (Desktop view) */}
          <div className="hidden lg:flex flex-col items-end gap-1">
            {!isPast && (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                Confirmed
              </span>
            )}
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-800">
              {call.host === 'HSC' ? 'HSC Hosted' : 'Self Hosted'}
            </span>
          </div>

          {/* Col 6: Arrow Indicator */}
          <div className="hidden lg:flex justify-end text-slate-400">
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isOpen ? 'rotate-180 text-[#1a4bb5]' : ''
              }`}
            />
          </div>

        </div>

        {/* Mobile Expand Trigger prompt */}
        <div className="lg:hidden mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span className="text-[#1a4bb5] font-semibold">
            {isOpen ? 'Collapse Details' : 'View Details'}
          </span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </div>

      {/* Expanded Inner Panel */}
      {isOpen && (
        <div className="p-4 sm:p-5 bg-slate-50/80 border-t border-slate-200 space-y-4 text-xs animate-in fade-in duration-150">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 bg-white p-3.5 rounded-lg border border-slate-200 text-slate-700">
            <div>
              <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wider">
                Language
              </span>
              <span className="font-semibold text-slate-900 mt-0.5 block">
                {call.lang}
              </span>
            </div>

            <div>
              <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wider">
                Research Moderator
              </span>
              <span className="font-semibold text-slate-900 mt-0.5 block">
                {call.hostName || (call.host === 'HSC' ? 'HSC Institutional Research' : 'Company IR')}
              </span>
            </div>

            <div>
              <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wider">
                Format
              </span>
              <span className="font-semibold text-slate-900 mt-0.5 block">
                {call.format?.en || (isPast ? 'Recorded Webinar' : 'Virtual (Zoom Webinar)')}
              </span>
            </div>
          </div>

          {/* Action Buttons Row: ONLY Register Now for upcoming */}
          <div className="pt-1 flex items-center">
            {!isPast ? (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onRegister(call);
                }}
                className="px-5 py-2.5 rounded-lg font-bold text-xs text-white bg-[#1a4bb5] hover:bg-[#133e99] transition-colors shadow-2xs inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Register Now</span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onWatchRecording(call);
                  }}
                  className="px-4 py-2 rounded-lg font-bold text-xs text-white bg-[#1a4bb5] hover:bg-[#133e99] transition-colors shadow-2xs inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Watch Recording</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewSlides(call);
                  }}
                  className="px-3.5 py-2 rounded-lg font-semibold text-xs border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition-colors shadow-2xs inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-[#1a4bb5]" />
                  <span>Presentation Slides</span>
                </button>
              </div>
            )}
          </div>

        </div>
      )}
    </div>
  );
};
