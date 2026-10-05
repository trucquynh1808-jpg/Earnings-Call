import React, { useState } from 'react';
import { EarningsCall } from '../types';
import { X, ChevronLeft, ChevronRight, Download, FileText, CheckCircle2, TrendingUp } from 'lucide-react';

interface SlidesModalProps {
  call: EarningsCall | null;
  onClose: () => void;
}

export const SlidesModal: React.FC<SlidesModalProps> = ({
  call,
  onClose
}) => {
  if (!call) return null;

  const totalPages = call.slidesPages || 28;
  const [currentPage, setCurrentPage] = useState(1);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const currentHighlight = call.slidesHighlights?.find(h => h.page === currentPage) ||
    call.slidesHighlights?.[0];

  const handleDownload = () => {
    const textContent = [
      `============================================================`,
      `HSC INSTITUTIONAL CORPORATE ACCESS - PRESENTATION SLIDES`,
      `Ticker: ${call.ticker} (${call.exchange})`,
      `Company: ${call.companyName.en}`,
      `Quarter: ${call.quarter} | Date: ${call.date}`,
      `Host: ${call.host === 'HSC' ? 'HSC Hosted' : 'Company Self-Hosted'}`,
      `Language: ${call.lang}`,
      `Speakers: ${call.reps.map(r => `${r.name} - ${r.title}`).join(', ')}`,
      `============================================================`,
      ``,
      `OVERVIEW:`,
      call.overview?.en || '',
      ``,
      `KEY FINANCIAL HIGHLIGHTS:`,
      call.transcriptTakeaways?.en.map(p => `• ${p}`).join('\n') || 'Refer to full filings.',
      ``,
      `This presentation was provided during HSC Corporate Access Webinar.`,
      `All rights reserved - Ho Chi Minh City Securities Corporation (HSC).`
    ].join('\n');

    const blob = new Blob([textContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${call.ticker}_${call.quarter}_Investor_Presentation.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-[#0e2a66] px-5 py-3.5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-blue-700 font-mono text-xs font-bold text-white tracking-wider">
              {call.ticker}
            </span>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white">
                Investor Presentation Deck · {call.quarter}
              </h2>
              <p className="text-xs text-blue-200">
                {call.companyName.en} · {totalPages} slides
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1a4bb5] hover:bg-[#143782] text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloadSuccess ? 'Downloaded!' : 'Download PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="text-blue-200 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors ml-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-100 flex flex-col items-center justify-center min-h-[380px]">
          
          <div className="w-full max-w-2xl bg-white rounded-lg shadow-md border border-slate-300 p-6 sm:p-8 flex flex-col justify-between aspect-16/10 relative overflow-hidden transition-all">
            
            {/* Slide Header */}
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="font-bold text-sm text-[#0e2a66] flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#1a4bb5]" />
                    <span>{call.ticker} Investor Relations</span>
                  </div>
                  <span className="text-xs text-slate-400">·</span>
                  <span className="text-xs font-semibold text-slate-500">{call.quarter} Review</span>
                </div>
                <div className="font-mono text-xs font-semibold text-slate-400">
                  Slide {currentPage} / {totalPages}
                </div>
              </div>

              {/* Slide Headline */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                {currentHighlight?.title.en || `${call.ticker} - Operational & Financial Overview`}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentHighlight?.summary.en || call.overview?.en}
              </p>
            </div>

            {/* Slide Metrics & Visual Body */}
            <div className="my-4">
              {currentHighlight?.metrics && currentHighlight.metrics.length > 0 ? (
                <div className="grid grid-cols-3 gap-3">
                  {currentHighlight.metrics.map((m, idx) => (
                    <div key={idx} className="bg-blue-50/70 border border-blue-100 rounded-lg p-3 text-center">
                      <div className="text-[11px] font-medium text-slate-500 mb-1">
                        {m.label.en}
                      </div>
                      <div className="font-mono text-lg sm:text-xl font-bold text-[#0e2a66]">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-slate-50 rounded-lg border border-slate-200 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 mb-2">
                    <TrendingUp className="w-4 h-4 text-[#1a4bb5]" />
                    <span>Key Q3 Financials & Operating Highlights</span>
                  </div>
                  <div className="text-xs text-slate-600 space-y-1.5">
                    {call.transcriptTakeaways?.en.slice(0, 2).map((pt, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    )) || <div>Official presentation deck submitted to the Ho Chi Minh Stock Exchange.</div>}
                  </div>
                </div>
              )}
            </div>

            {/* Slide Footer */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span>HSC Corporate Access · Confidential Institutional Material</span>
              <span>Slide {currentPage}</span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 transition-colors shadow-2xs cursor-pointer"
              title="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="font-mono text-xs font-semibold text-slate-700">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 transition-colors shadow-2xs cursor-pointer"
              title="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Footer info bar */}
        <div className="p-3 bg-white border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span>{call.lang} Presentation Deck</span>
            <span>·</span>
            <span>PDF Format (High Res Vector)</span>
          </div>
          <button
            onClick={onClose}
            className="font-semibold text-slate-700 hover:text-slate-900 cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
