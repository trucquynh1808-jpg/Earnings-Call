import React from 'react';
import { Download } from 'lucide-react';
import { HscLogo } from './HscLogo';

interface HeaderProps {
  onExportCsv?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onExportCsv }) => {
  return (
    <header className="bg-[#0e2a66] border-b border-[#1b3a80] text-white sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Zone: Strictly the HSC Logo Only */}
        <div className="flex items-center">
          <a href="/" className="inline-flex items-center group" aria-label="HSC">
            <HscLogo variant="white" className="h-8 w-auto hover:opacity-95 transition-opacity" />
          </a>
        </div>

        {/* Action Zone */}
        <div className="flex items-center gap-3">
          {onExportCsv && (
            <button
              onClick={onExportCsv}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-[#2d4e9c] bg-[#143782] text-white hover:bg-[#1a4bb5] transition-colors shadow-2xs cursor-pointer"
              title="Export Schedule (CSV)"
            >
              <Download className="w-3.5 h-3.5 text-blue-200" />
              <span>Export Schedule</span>
            </button>
          )}
        </div>

      </div>
    </header>
  );
};
