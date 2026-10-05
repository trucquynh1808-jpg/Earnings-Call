import React from 'react';
import { EarningsCall } from '../types';
import { Play, FileText, Plus } from 'lucide-react';

interface CallRowTableProps {
  calls: EarningsCall[];
  onRegister: (call: EarningsCall) => void;
  onWatchRecording: (call: EarningsCall) => void;
  onViewSlides: (call: EarningsCall) => void;
  isPast?: boolean;
}

export const CallRowTable: React.FC<CallRowTableProps> = ({
  calls,
  onRegister,
  onWatchRecording,
  onViewSlides,
  isPast = false
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold text-[11px]">
            <tr>
              <th scope="col" className="py-3 px-4">Date</th>
              <th scope="col" className="py-3 px-3">Time</th>
              <th scope="col" className="py-3 px-3">Ticker</th>
              <th scope="col" className="py-3 px-4">Representatives</th>
              <th scope="col" className="py-3 px-3">Organizer</th>
              <th scope="col" className="py-3 px-3">Language</th>
              <th scope="col" className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {calls.map((call) => (
              <tr key={call.id} className="hover:bg-blue-50/50 transition-colors">
                
                {/* Date */}
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="font-mono font-bold text-slate-900">{call.date}</div>
                  <div className="text-[11px] text-slate-500">
                    {new Date(call.date + "T00:00:00").toLocaleDateString('en-GB', { weekday: 'short' })}
                  </div>
                </td>

                {/* Time */}
                <td className="py-3 px-3 whitespace-nowrap font-mono text-slate-700">
                  {call.time}
                </td>

                {/* Ticker & Name */}
                <td className="py-3 px-3 whitespace-nowrap">
                  <span className="font-mono font-bold text-[#0e2a66] text-sm mr-1.5">{call.ticker}</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-1 py-0.5 rounded">
                    {call.exchange}
                  </span>
                  <div className="text-[11px] text-slate-500 max-w-[180px] truncate" title={call.companyName.en}>
                    {call.companyName.en}
                  </div>
                </td>

                {/* Representatives */}
                <td className="py-3 px-4">
                  {call.reps && call.reps.length > 0 ? (
                    <div>
                      <div className="font-semibold text-slate-900 truncate max-w-[180px]">{call.reps[0].name}</div>
                      <div className="text-[11px] text-slate-500 truncate max-w-[180px]">{call.reps[0].title}</div>
                    </div>
                  ) : (
                    <span className="text-slate-400">—</span>
                  )}
                </td>

                {/* Host */}
                <td className="py-3 px-3 whitespace-nowrap">
                  <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                    call.host === 'HSC' ? 'bg-indigo-50 text-indigo-700' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {call.host === 'HSC' ? 'HSC Hosted' : 'Self Hosted'}
                  </span>
                  {!isPast && (
                    <div className="mt-1">
                      <span className={`text-[10px] font-bold ${call.status === 'conf' ? 'text-emerald-700' : 'text-amber-700'}`}>
                        {call.status === 'conf' ? 'Confirmed' : 'Pending / TBC'}
                      </span>
                    </div>
                  )}
                </td>

                {/* Language */}
                <td className="py-3 px-3 whitespace-nowrap text-slate-600 text-[11px]">
                  {call.lang}
                </td>

                {/* Actions */}
                <td className="py-3 px-4 text-right whitespace-nowrap">
                  {!isPast ? (
                    <button
                      type="button"
                      onClick={() => onRegister(call)}
                      className="px-3 py-1.5 bg-[#1a4bb5] hover:bg-[#133e99] text-white rounded text-xs font-bold transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Register</span>
                    </button>
                  ) : (
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        type="button"
                        onClick={() => onWatchRecording(call)}
                        className="px-2.5 py-1.5 bg-[#1a4bb5] hover:bg-[#133e99] text-white rounded text-xs font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer"
                        title="Watch Recording"
                      >
                        <Play className="w-3 h-3 fill-white" />
                        <span>Replay</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => onViewSlides(call)}
                        className="px-2 py-1.5 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded text-xs font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer"
                        title="Presentation Slides"
                      >
                        <FileText className="w-3 h-3 text-[#1a4bb5]" />
                        <span>PDF</span>
                      </button>
                    </div>
                  )}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
