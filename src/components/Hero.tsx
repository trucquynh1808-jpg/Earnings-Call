import React from 'react';
import { Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#0e2a66] via-[#123887] to-[#1a4bb5] text-white py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-blue-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          {/* Banner Kicker: In Uppercase */}
          <div className="text-xs font-bold uppercase tracking-wider text-blue-200/90 mb-3">
            INSTITUTIONAL CLIENTS · CORPORATE ACCESS
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3 leading-tight">
            Earnings Calls Series
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-2xl font-normal">
            Register for HSC-hosted and corporate earnings calls with Vietnam's leading listed companies, or access presentation slides and past recordings.
          </p>
        </div>

        {/* Info Strip: Only Vietnam Time GMT+7 */}
        <div className="mt-6 pt-5 border-t border-white/10 flex items-center text-xs text-blue-200">
          <div className="flex items-center gap-2 font-medium">
            <Clock className="w-4 h-4 text-amber-300 shrink-0" />
            <span>All sessions are in Vietnam Time (GMT+7)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
