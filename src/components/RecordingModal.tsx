import React, { useState, useEffect } from 'react';
import { EarningsCall } from '../types';
import { X, Play, Pause, Volume2, VolumeX, RotateCcw, Clock, ListChecks, CheckCircle } from 'lucide-react';

interface RecordingModalProps {
  call: EarningsCall | null;
  onClose: () => void;
}

export const RecordingModal: React.FC<RecordingModalProps> = ({
  call,
  onClose
}) => {
  if (!call) return null;

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimeSec, setCurrentTimeSec] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'chapters' | 'takeaways'>('chapters');

  // Total duration in seconds: default 3600 (60 mins)
  const totalSeconds = 3600;

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTimeSec(prev => {
          if (prev >= totalSeconds) {
            setIsPlaying(false);
            return totalSeconds;
          }
          return prev + 1 * playbackSpeed;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed, totalSeconds]);

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const seekTo = (seconds: number) => {
    setCurrentTimeSec(seconds);
    setIsPlaying(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Header */}
        <div className="bg-[#0e2a66] px-5 py-3.5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-blue-700 font-mono text-xs font-bold text-white tracking-wider">
              {call.ticker}
            </span>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white">
                Earnings Call Recording & Transcript · {call.quarter}
              </h2>
              <p className="text-xs text-blue-200">
                {call.companyName.en} · {call.date}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-blue-200 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 min-h-0">
          
          {/* Left Column: Player & Simulation */}
          <div className="lg:col-span-7 bg-slate-950 p-4 sm:p-6 flex flex-col justify-between text-white">
            
            {/* Screen Mockup */}
            <div className="relative aspect-video w-full rounded-lg bg-slate-900 border border-slate-800 flex flex-col items-center justify-center overflow-hidden shadow-inner group">
              <div className="absolute inset-0 bg-radial from-blue-900/30 to-slate-950 pointer-events-none" />

              {/* Webinar Screen Content */}
              <div className="z-10 text-center px-4">
                <div className="w-14 h-14 rounded-full bg-[#1a4bb5]/80 text-white flex items-center justify-center mx-auto mb-3 border-2 border-white/20 shadow-lg">
                  <span className="font-extrabold text-sm">{call.ticker}</span>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-100 max-w-sm mx-auto">
                  {call.companyName.en}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {call.quarter} Corporate Access & Earnings Call
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-800/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{isPlaying ? 'PLAYING' : 'PAUSED'} · {call.lang}</span>
                </div>
              </div>

              {!isPlaying && (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute z-20 w-16 h-16 rounded-full bg-[#1a4bb5]/90 hover:bg-[#1a4bb5] text-white flex items-center justify-center shadow-xl transition-transform hover:scale-105 cursor-pointer"
                  aria-label="Play"
                >
                  <Play className="w-7 h-7 ml-1 fill-white" />
                </button>
              )}
            </div>

            {/* Video Controls Bar */}
            <div className="mt-4 pt-3 border-t border-slate-800/80">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-mono text-slate-400 w-10 text-right">
                  {formatSeconds(currentTimeSec)}
                </span>
                <input
                  type="range"
                  min="0"
                  max={totalSeconds}
                  value={currentTimeSec}
                  onChange={e => setCurrentTimeSec(Number(e.target.value))}
                  className="flex-1 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#1a4bb5]"
                />
                <span className="text-[11px] font-mono text-slate-400 w-10">
                  {call.recordingDuration || '60:00'}
                </span>
              </div>

              <div className="flex items-center justify-between text-slate-300 text-xs">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1.5 rounded hover:bg-slate-800 text-white cursor-pointer"
                    title={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
                  </button>
                  <button
                    onClick={() => setCurrentTimeSec(0)}
                    className="p-1.5 rounded hover:bg-slate-800 cursor-pointer"
                    title="Restart"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1.5 rounded hover:bg-slate-800 cursor-pointer"
                    title={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 font-mono text-[11px]">
                    <span className="text-slate-400">Speed:</span>
                    {[1, 1.25, 1.5].map(s => (
                      <button
                        key={s}
                        onClick={() => setPlaybackSpeed(s)}
                        className={`px-1.5 py-0.5 rounded text-[11px] transition-colors cursor-pointer ${
                          playbackSpeed === s
                            ? 'bg-[#1a4bb5] text-white font-bold'
                            : 'hover:bg-slate-800 text-slate-400'
                        }`}
                      >
                        {s}x
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Chapters & Takeaways Tabs */}
          <div className="lg:col-span-5 bg-white flex flex-col border-t lg:border-t-0 lg:border-l border-slate-200">
            <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab('chapters')}
                className={`flex-1 py-3 px-4 text-center border-b-2 transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'chapters'
                    ? 'border-[#1a4bb5] text-[#1a4bb5] bg-white'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Chapters & Timestamps</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('takeaways')}
                className={`flex-1 py-3 px-4 text-center border-b-2 transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'takeaways'
                    ? 'border-[#1a4bb5] text-[#1a4bb5] bg-white'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <ListChecks className="w-3.5 h-3.5" />
                <span>Executive Highlights</span>
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-4 flex-1 overflow-y-auto">
              {activeTab === 'chapters' ? (
                <div className="space-y-2">
                  <p className="text-xs text-slate-500 mb-2">
                    Click any chapter below to jump directly to that discussion topic:
                  </p>
                  {call.recordingChapters && call.recordingChapters.length > 0 ? (
                    call.recordingChapters.map((chap, idx) => (
                      <div
                        key={idx}
                        onClick={() => seekTo(chap.seconds)}
                        className={`p-2.5 rounded-lg border text-left cursor-pointer transition-all ${
                          currentTimeSec >= chap.seconds && (idx === call.recordingChapters!.length - 1 || currentTimeSec < call.recordingChapters![idx + 1].seconds)
                            ? 'bg-blue-50 border-[#1a4bb5] text-[#0e2a66]'
                            : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs mb-0.5">
                          <span className="font-mono font-bold text-[#1a4bb5]">{chap.time}</span>
                          {chap.speaker && (
                            <span className="text-[11px] text-slate-500 font-medium">{chap.speaker}</span>
                          )}
                        </div>
                        <div className="text-xs font-semibold leading-snug">
                          {chap.title.en}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-slate-500 text-center py-6">
                      Full recording available. Playback with controls on the left.
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-xs text-slate-500 mb-2">
                    Key executive takeaways documented during the session:
                  </p>
                  {call.transcriptTakeaways?.en.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  )) || (
                    <p className="text-xs text-slate-500">Summary notes available in presentation slides.</p>
                  )}
                </div>
              )}
            </div>

            {/* Bottom info */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
              <span>Format: {call.host === 'HSC' ? 'HSC Hosted' : 'Self Hosted'}</span>
              <button
                type="button"
                onClick={onClose}
                className="font-semibold text-slate-700 hover:text-slate-900 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
