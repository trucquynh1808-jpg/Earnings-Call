/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { EarningsCall } from './types';
import { UPCOMING_CALLS, PAST_CALLS, QUARTERS } from './data/callsData';
import { exportAllCallsToCSV } from './utils/calendar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CallCard } from './components/CallCard';
import { CallRowTable } from './components/CallRowTable';
import { RegistrationModal } from './components/RegistrationModal';
import { RecordingModal } from './components/RecordingModal';
import { SlidesModal } from './components/SlidesModal';
import {
  Search,
  LayoutList,
  Table as TableIcon,
  AlertCircle,
  Info
} from 'lucide-react';

export default function App() {
  // Tab state: 1 = Upcoming, 2 = Past Quarters
  const [activeTab, setActiveTab] = useState<1 | 2>(1);

  // View mode: 'list' (cards) vs 'table' (compact)
  const [viewMode, setViewMode] = useState<'list' | 'table'>('list');

  // Filter state for Upcoming
  const [searchUp, setSearchUp] = useState('');
  const [hostFilter, setHostFilter] = useState<string>('');
  const [sectorFilter, setSectorFilter] = useState<string>('');

  // Filter state for Past
  const [currentQuarter, setCurrentQuarter] = useState<string>(QUARTERS[0]);
  const [searchPast, setSearchPast] = useState('');

  // Modal states
  const [activeRegCall, setActiveRegCall] = useState<EarningsCall | null>(null);
  const [activeRecCall, setActiveRecCall] = useState<EarningsCall | null>(null);
  const [activeSlidesCall, setActiveSlidesCall] = useState<EarningsCall | null>(null);

  // Unique sectors for filter dropdown
  const allSectors = useMemo(() => {
    const list = UPCOMING_CALLS.map(c => c.sector.en);
    return Array.from(new Set(list));
  }, []);

  // Filtered upcoming calls
  const filteredUpcoming = useMemo(() => {
    const q = searchUp.toLowerCase().trim();
    return UPCOMING_CALLS.filter(item => {
      const matchTicker = item.ticker.toLowerCase().includes(q);
      const matchCompany = item.companyName.en.toLowerCase().includes(q);
      const matchRep = item.reps.some(r => r.name.toLowerCase().includes(q));
      const matchQuery = !q || matchTicker || matchCompany || matchRep;

      const matchHost = !hostFilter || item.host === hostFilter;
      const matchSector = !sectorFilter || item.sector.en === sectorFilter;

      return matchQuery && matchHost && matchSector;
    });
  }, [searchUp, hostFilter, sectorFilter]);

  // Filtered past calls
  const filteredPast = useMemo(() => {
    const q = searchPast.toLowerCase().trim();
    return PAST_CALLS.filter(item => {
      const matchQuarter = item.quarter === currentQuarter;
      const matchTicker = item.ticker.toLowerCase().includes(q);
      const matchCompany = item.companyName.en.toLowerCase().includes(q);
      const matchRep = item.reps.some(r => r.name.toLowerCase().includes(q));
      const matchQuery = !q || matchTicker || matchCompany || matchRep;

      return matchQuarter && matchQuery;
    });
  }, [currentQuarter, searchPast]);

  const handleExport = () => {
    const dataset = activeTab === 1 ? UPCOMING_CALLS : PAST_CALLS;
    exportAllCallsToCSV(dataset);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] flex flex-col font-sans">
      
      {/* 1. Header with Official HSC Logo */}
      <Header onExportCsv={handleExport} />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Main Workspace */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b-2 border-slate-200 pb-0 mb-6 gap-3">
          <div className="flex items-center gap-1 sm:gap-4 overflow-x-auto">
            <button
              id="tab-up"
              type="button"
              onClick={() => setActiveTab(1)}
              className={`pb-3 px-3 sm:px-4 text-sm sm:text-base font-bold transition-all relative whitespace-nowrap cursor-pointer ${
                activeTab === 1
                  ? 'text-[#1a4bb5] border-b-3 border-[#1a4bb5]'
                  : 'text-slate-500 hover:text-slate-800 border-b-3 border-transparent'
              }`}
            >
              <span>Upcoming Calls (Q3.2026)</span>
              <span className="ml-2 font-mono text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                {UPCOMING_CALLS.length}
              </span>
            </button>

            <button
              id="tab-past"
              type="button"
              onClick={() => setActiveTab(2)}
              className={`pb-3 px-3 sm:px-4 text-sm sm:text-base font-bold transition-all relative whitespace-nowrap cursor-pointer ${
                activeTab === 2
                  ? 'text-[#1a4bb5] border-b-3 border-[#1a4bb5]'
                  : 'text-slate-500 hover:text-slate-800 border-b-3 border-transparent'
              }`}
            >
              <span>Past Quarters</span>
              <span className="ml-2 font-mono text-xs px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                {PAST_CALLS.length}
              </span>
            </button>
          </div>

          {/* View mode toggle */}
          <div className="hidden sm:flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg self-start sm:self-auto mb-2 sm:mb-0">
            <button
              type="button"
              onClick={() => setViewMode('list')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md flex items-center gap-1 transition-all cursor-pointer ${
                viewMode === 'list'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Card View"
            >
              <LayoutList className="w-3.5 h-3.5" />
              <span>Card View</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('table')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md flex items-center gap-1 transition-all cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Compact Table"
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Compact Table</span>
            </button>
          </div>
        </div>

        {/* Tab 1: UPCOMING CALLS CONTROLS */}
        {activeTab === 1 && (
          <div className="space-y-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-2.5">
              {/* Search bar */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  id="search-up"
                  type="text"
                  value={searchUp}
                  onChange={e => setSearchUp(e.target.value)}
                  placeholder="Search by ticker, company, or speaker..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a4bb5] focus:border-[#1a4bb5] shadow-2xs"
                />
                {searchUp && (
                  <button
                    onClick={() => setSearchUp('')}
                    className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Sector filter */}
              <select
                value={sectorFilter}
                onChange={e => setSectorFilter(e.target.value)}
                className="bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1a4bb5] shadow-2xs font-medium cursor-pointer"
              >
                <option value="">All sectors</option>
                {allSectors.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>

              {/* Host filter */}
              <select
                id="sel-host"
                value={hostFilter}
                onChange={e => setHostFilter(e.target.value)}
                className="bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1a4bb5] shadow-2xs font-medium cursor-pointer"
              >
                <option value="">All hosts</option>
                <option value="HSC">HSC Hosted</option>
                <option value="Self">Self Hosted</option>
              </select>
            </div>

            {/* Active filters pill list if any */}
            {(searchUp || hostFilter || sectorFilter) && (
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <span className="font-semibold text-slate-700">Active filters:</span>
                {searchUp && (
                  <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                    "{searchUp}"
                  </span>
                )}
                {sectorFilter && (
                  <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                    {sectorFilter}
                  </span>
                )}
                {hostFilter && (
                  <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                    {hostFilter === 'HSC' ? 'HSC Hosted' : 'Self Hosted'}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setSearchUp('');
                    setHostFilter('');
                    setSectorFilter('');
                  }}
                  className="text-xs text-[#1a4bb5] hover:underline font-semibold ml-1 cursor-pointer"
                >
                  Reset all
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: PAST QUARTERS CONTROLS */}
        {activeTab === 2 && (
          <div className="space-y-4 mb-6">
            
            {/* Quarter selector pills */}
            <div className="flex flex-wrap items-center gap-2" id="qt-container">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">
                Select Quarter:
              </span>
              {QUARTERS.map(q => (
                <button
                  key={q}
                  type="button"
                  onClick={() => setCurrentQuarter(q)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    q === currentQuarter
                      ? 'bg-[#1a4bb5] text-white shadow-xs'
                      : 'bg-white border border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-900'
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Search past */}
            <div className="relative max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                id="search-past"
                type="text"
                value={searchPast}
                onChange={e => setSearchPast(e.target.value)}
                placeholder="Search previous calls or tickers..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a4bb5] focus:border-[#1a4bb5] shadow-2xs"
              />
              {searchPast && (
                <button
                  onClick={() => setSearchPast('')}
                  className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        )}

        {/* 4. Column Header row for Desktop Card View */}
        {viewMode === 'list' && (
          <div className="hidden lg:grid lg:grid-cols-[85px_125px_180px_1fr_130px_24px] gap-3.5 px-4 pb-2 text-[11px] font-bold text-slate-500 uppercase tracking-wider select-none">
            <span>Date</span>
            <span>Time</span>
            <span>Ticker</span>
            <span>Representatives</span>
            <span className="text-right">Organizer</span>
            <span></span>
          </div>
        )}

        {/* 5. Main Earnings Calls List / Table */}
        <div id="main-list" className="space-y-3">
          {activeTab === 1 ? (
            filteredUpcoming.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-xl p-12 text-center text-slate-500">
                <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="font-semibold text-slate-700">No matching earnings calls found.</p>
                <p className="text-xs text-slate-400 mt-1">
                  Try clearing the search query or status filter.
                </p>
              </div>
            ) : viewMode === 'list' ? (
              filteredUpcoming.map(call => (
                <CallCard
                  key={call.id}
                  call={call}
                  onRegister={setActiveRegCall}
                  onWatchRecording={setActiveRecCall}
                  onViewSlides={setActiveSlidesCall}
                  isPast={false}
                />
              ))
            ) : (
              <CallRowTable
                calls={filteredUpcoming}
                onRegister={setActiveRegCall}
                onWatchRecording={setActiveRecCall}
                onViewSlides={setActiveSlidesCall}
                isPast={false}
              />
            )
          ) : (
            filteredPast.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-xl p-12 text-center text-slate-500">
                <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="font-semibold text-slate-700">No matching earnings calls found.</p>
                <p className="text-xs text-slate-400 mt-1">
                  No archival calls found for {currentQuarter} matching search criteria.
                </p>
              </div>
            ) : viewMode === 'list' ? (
              filteredPast.map(call => (
                <CallCard
                  key={call.id}
                  call={call}
                  onRegister={setActiveRegCall}
                  onWatchRecording={setActiveRecCall}
                  onViewSlides={setActiveSlidesCall}
                  isPast={true}
                />
              ))
            ) : (
              <CallRowTable
                calls={filteredPast}
                onRegister={setActiveRegCall}
                onWatchRecording={setActiveRecCall}
                onViewSlides={setActiveSlidesCall}
                isPast={true}
              />
            )
          )}
        </div>

        {/* Institutional Disclosure Note */}
        <div className="mt-10 p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-[#1a4bb5] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold text-slate-800">
              Institutional Client Notice:
            </span>{' '}
            All sessions feature moderated Q&A with C-suite executives and Head of IR. Full presentation decks and replay recordings are archived post-call in accordance with regulatory disclosure guidelines.
          </div>
        </div>

      </main>

      {/* 6. Footer */}
      <footer id="txt-foot" className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="font-medium text-slate-600 mb-1">
            All sessions are in Vietnam Time (GMT+7). Exclusively for institutional investors and clients of HSC.
          </p>
          <p className="text-[11px] text-slate-400">
            © 2026 Ho Chi Minh City Securities Corporation (HSC). All rights reserved.
          </p>
        </div>
      </footer>

      {/* 7. Interactive Modals */}
      <RegistrationModal
        call={activeRegCall}
        onClose={() => setActiveRegCall(null)}
      />

      <RecordingModal
        call={activeRecCall}
        onClose={() => setActiveRecCall(null)}
      />

      <SlidesModal
        call={activeSlidesCall}
        onClose={() => setActiveSlidesCall(null)}
      />

    </div>
  );
}
