export type Language = 'en' | 'vi';

export type CallStatus = 'conf' | 'tbc';
export type HostType = 'HSC' | 'Self';

export interface Representative {
  name: string;
  title: string;
}

export interface SlideHighlight {
  page: number;
  title: { en: string; vi: string };
  summary: { en: string; vi: string };
  metrics?: { label: { en: string; vi: string }; value: string }[];
}

export interface VideoChapter {
  time: string;
  seconds: number;
  title: { en: string; vi: string };
  speaker?: string;
}

export interface EarningsCall {
  id: string;
  ticker: string;
  companyName: { en: string; vi: string };
  exchange: 'HOSE' | 'HNX' | 'UPCoM';
  sector: { en: string; vi: string };
  quarter: string;
  date: string; // YYYY-MM-DD
  time: string; // e.g. "10:00 - 11:00"
  status: CallStatus;
  host: HostType;
  hostName?: string;
  lang: string;
  format?: { en: string; vi: string };
  reps: Representative[];
  overview?: { en: string; vi: string };
  agenda?: { en: string[]; vi: string[] };
  keyFinancials?: {
    revenue?: string;
    profit?: string;
    growth?: string;
    highlights?: { en: string; vi: string }[];
  };
  meetingUrl?: string;
  recordingDuration?: string;
  recordingChapters?: VideoChapter[];
  slidesPages?: number;
  slidesHighlights?: SlideHighlight[];
  transcriptTakeaways?: { en: string[]; vi: string[] };
}
