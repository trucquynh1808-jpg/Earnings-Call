import { EarningsCall } from '../types';

export function createGoogleCalendarUrl(call: EarningsCall): string {
  // call.date is YYYY-MM-DD, call.time is like "10:00 - 11:00"
  const times = call.time.split('-').map(t => t.trim());
  const startTimeStr = times[0] || '10:00';
  const endTimeStr = times[1] || '11:00';

  const [startHour, startMin] = startTimeStr.split(':').map(n => parseInt(n, 10));
  const [endHour, endMin] = endTimeStr.split(':').map(n => parseInt(n, 10));

  // Vietnam is UTC+7
  const startDt = new Date(`${call.date}T${startTimeStr.padStart(5, '0')}:00+07:00`);
  const endDt = new Date(`${call.date}T${endTimeStr.padStart(5, '0')}:00+07:00`);

  const formatGCal = (d: Date) => {
    return d.toISOString().replace(/-|:|\.\d\d\d/g, '');
  };

  const title = encodeURIComponent(`[${call.ticker}] Earnings Call & Corporate Access (${call.quarter})`);
  const details = encodeURIComponent(
    `Host: ${call.host === 'HSC' ? 'HSC Hosted' : 'Company Self-Hosted'}\n` +
    `Company: ${call.companyName.en}\n` +
    `Language: ${call.lang}\n` +
    `Key Speakers: ${call.reps.map(r => `${r.name} (${r.title})`).join(', ')}\n\n` +
    `Organized via HSC Institutional Client Portal.`
  );
  const location = encodeURIComponent('Virtual Webinar (Zoom / MS Teams)');
  const dates = `${formatGCal(startDt)}/${formatGCal(endDt)}`;

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
}

export function downloadIcsFile(call: EarningsCall): void {
  const times = call.time.split('-').map(t => t.trim());
  const startTimeStr = times[0] || '10:00';
  const endTimeStr = times[1] || '11:00';

  const startDt = new Date(`${call.date}T${startTimeStr.padStart(5, '0')}:00+07:00`);
  const endDt = new Date(`${call.date}T${endTimeStr.padStart(5, '0')}:00+07:00`);

  const pad = (n: number) => String(n).padStart(2, '0');
  const formatICSDate = (d: Date) => {
    return (
      d.getUTCFullYear() +
      pad(d.getUTCMonth() + 1) +
      pad(d.getUTCDate()) +
      'T' +
      pad(d.getUTCHours()) +
      pad(d.getUTCMinutes()) +
      pad(d.getUTCSeconds()) +
      'Z'
    );
  };

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//HSC Institutional Portal//VN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:hsc-call-${call.id}-${Date.now()}@hsc.com.vn`,
    `DTSTAMP:${formatICSDate(new Date())}`,
    `DTSTART:${formatICSDate(startDt)}`,
    `DTEND:${formatICSDate(endDt)}`,
    `SUMMARY:[${call.ticker}] Corporate Access & Earnings Call (${call.quarter})`,
    `DESCRIPTION:${call.companyName.en} - ${call.host === 'HSC' ? 'HSC Hosted' : 'Self Hosted'}. Language: ${call.lang}. Speakers: ${call.reps.map(r => r.name).join(', ')}`,
    'LOCATION:Virtual Meeting / Webinar',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${call.ticker}_Earnings_Call_${call.quarter}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

export function exportAllCallsToCSV(calls: EarningsCall[]): void {
  const headers = ['Ticker', 'Company', 'Exchange', 'Quarter', 'Date', 'Time (VN GMT+7)', 'Status', 'Host', 'Language', 'Representatives'];
  const rows = calls.map(c => [
    `"${c.ticker}"`,
    `"${c.companyName.en}"`,
    `"${c.exchange}"`,
    `"${c.quarter}"`,
    `"${c.date}"`,
    `"${c.time}"`,
    `"${c.status === 'conf' ? 'Confirmed' : 'Pending'}"`,
    `"${c.host}"`,
    `"${c.lang}"`,
    `"${c.reps.map(r => `${r.name} - ${r.title}`).join('; ')}"`
  ]);

  const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `HSC_Corporate_Access_Schedule_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
