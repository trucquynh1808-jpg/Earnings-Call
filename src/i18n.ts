import { Language } from './types';

export interface Translations {
  portalBrand: string;
  institutionalTitle: string;
  h1: string;
  sub: string;
  tabUp: string;
  tabPast: string;
  searchUp: string;
  searchPast: string;
  allStatus: string;
  allHost: string;
  allSectors: string;
  hscHost: string;
  selfHost: string;
  conf: string;
  tbc: string;
  colDate: string;
  colTime: string;
  colTicker: string;
  colRep: string;
  colOrg: string;
  regBtn: string;
  recBtn: string;
  slideBtn: string;
  calendarBtn: string;
  exportCsvBtn: string;
  langLabel: string;
  hostLabel: string;
  formatLabel: string;
  agendaLabel: string;
  empty: string;
  foot: string;
  timezoneNotice: string;
  viewDetails: string;
  collapseDetails: string;
  overview: string;
  financialHighlights: string;
  speakers: string;
  copyLink: string;
  copied: string;
  addToGCal: string;
  downloadIcs: string;
  
  // Registration modal
  regTitle: string;
  regSub: string;
  fullName: string;
  workEmail: string;
  institution: string;
  titleRole: string;
  questionOptional: string;
  questionPlaceholder: string;
  submitRegistration: string;
  regSuccessTitle: string;
  regSuccessMessage: string;
  calendarInvites: string;
  close: string;

  // Recording Modal
  recordingTitle: string;
  nowPlaying: string;
  chapters: string;
  keyTakeaways: string;
  speed: string;
  playbackAudioVideo: string;
  
  // Slides Modal
  slidesTitle: string;
  downloadPdf: string;
  slidePageOf: string;
  nextSlide: string;
  prevSlide: string;
  slideSummary: string;
  keyMetrics: string;

  // Stats bar
  upcomingCallsCount: string;
  confirmedCount: string;
  hscHostedCount: string;
  viewModeList: string;
  viewModeTable: string;
}

export const I18N: Record<Language, Translations> = {
  en: {
    portalBrand: "HSC Institutional Clients",
    institutionalTitle: "Vietnam Equities Corporate Access",
    h1: "Earnings Calls & Corporate Access Hub",
    sub: "Register for HSC-hosted and corporate earnings calls with Vietnam's leading listed companies, or access presentation slides and past recordings.",
    tabUp: "Upcoming Calls (Q3.2026)",
    tabPast: "Past Quarters",
    searchUp: "Search by ticker, company, or speaker...",
    searchPast: "Search previous calls or tickers...",
    allStatus: "All status",
    allHost: "All hosts",
    allSectors: "All sectors",
    hscHost: "HSC Hosted",
    selfHost: "Self Hosted",
    conf: "Confirmed",
    tbc: "Pending / TBC",
    colDate: "Date",
    colTime: "Time",
    colTicker: "Ticker",
    colRep: "Representatives",
    colOrg: "Organizer",
    regBtn: "Register Now",
    recBtn: "Watch Recording",
    slideBtn: "Presentation Slides",
    calendarBtn: "Add to Calendar",
    exportCsvBtn: "Export Schedule (CSV)",
    langLabel: "Language",
    hostLabel: "Research Moderator",
    formatLabel: "Format",
    agendaLabel: "Call Agenda",
    empty: "No matching earnings calls found.",
    foot: "All sessions are in Vietnam Time (GMT+7). Exclusively for institutional investors and clients of HSC.",
    timezoneNotice: "All sessions are in Vietnam Time (GMT+7)",
    viewDetails: "View Details",
    collapseDetails: "Collapse",
    overview: "Session Overview",
    financialHighlights: "Key Q3 Financials & Operating Highlights",
    speakers: "Executive Speakers & IR",
    copyLink: "Share Link",
    copied: "Copied!",
    addToGCal: "Google Calendar",
    downloadIcs: "Outlook / iCal (.ics)",

    regTitle: "Register for Earnings Call",
    regSub: "Institutional access registration for live Q&A and verified webinar credentials.",
    fullName: "Full Name",
    workEmail: "Institutional Work Email",
    institution: "Institution / Fund Name",
    titleRole: "Job Title / Role",
    questionOptional: "Advance Question for Management (Optional)",
    questionPlaceholder: "Enter specific inquiries regarding operational guidance, Capex, or margins...",
    submitRegistration: "Confirm Registration",
    regSuccessTitle: "Registration Confirmed",
    regSuccessMessage: "You are confirmed for this session. A calendar invite and webinar credentials have been generated below.",
    calendarInvites: "Add Event to Calendar",
    close: "Close",

    recordingTitle: "Earnings Call Recording & Transcript",
    nowPlaying: "Webinar Replay",
    chapters: "Key Chapters & Timestamps",
    keyTakeaways: "Executive Highlights",
    speed: "Speed",
    playbackAudioVideo: "Recorded Session",

    slidesTitle: "Investor Presentation Deck",
    downloadPdf: "Download PDF",
    slidePageOf: "Slide",
    nextSlide: "Next",
    prevSlide: "Previous",
    slideSummary: "Executive Slide Commentary",
    keyMetrics: "Highlighted Financial Metrics",

    upcomingCallsCount: "Upcoming Calls",
    confirmedCount: "Confirmed",
    hscHostedCount: "HSC Hosted",
    viewModeList: "Card View",
    viewModeTable: "Compact Table"
  },
  vi: {
    portalBrand: "HSC Institutional Clients",
    institutionalTitle: "Cổng Tiếp Xúc Doanh Nghiệp & Phân Tích",
    h1: "Cổng Thông Tin Earnings Calls & Tiếp Xúc Doanh Nghiệp",
    sub: "Tham gia các buổi hội thảo kết quả kinh doanh định kỳ do HSC hoặc doanh nghiệp niêm yết tổ chức, đồng thời xem lại tài liệu và bản ghi các quý trước.",
    tabUp: "Lịch sắp tới (Kết quả Q3.2026)",
    tabPast: "Các quý trước",
    searchUp: "Tìm mã cổ phiếu, tên doanh nghiệp hoặc diễn giả...",
    searchPast: "Tìm kiếm các kỳ trước hoặc mã CP...",
    allStatus: "Tất cả trạng thái",
    allHost: "Tất cả đơn vị tổ chức",
    allSectors: "Tất cả các ngành",
    hscHost: "Do HSC chủ trì",
    selfHost: "Doanh nghiệp tự tổ chức",
    conf: "Đã xác nhận",
    tbc: "Dự kiến / Chưa chốt",
    colDate: "Ngày",
    colTime: "Giờ",
    colTicker: "Mã CP",
    colRep: "Đại diện tham dự",
    colOrg: "Đơn vị",
    regBtn: "Đăng ký tham gia",
    recBtn: "Xem bản ghi",
    slideBtn: "Tài liệu thuyết trình",
    calendarBtn: "Lưu lịch họp",
    exportCsvBtn: "Xuất lịch họp (CSV)",
    langLabel: "Ngôn ngữ",
    hostLabel: "Điều phối viên (Chuyên viên PT)",
    formatLabel: "Hình thức",
    agendaLabel: "Chương trình chi tiết",
    empty: "Không tìm thấy lịch họp phù hợp.",
    foot: "Thời gian áp dụng theo giờ Việt Nam (GMT+7). Dành riêng cho khách hàng tổ chức của HSC.",
    timezoneNotice: "Thời gian áp dụng theo giờ Việt Nam (GMT+7)",
    viewDetails: "Xem chi tiết",
    collapseDetails: "Thu gọn",
    overview: "Nội dung cuộc họp",
    financialHighlights: "Chỉ số tài chính & Điểm nhấn hoạt động",
    speakers: "Đại diện Ban Lãnh đạo & IR",
    copyLink: "Chia sẻ",
    copied: "Đã sao chép!",
    addToGCal: "Google Calendar",
    downloadIcs: "Outlook / iCal (.ics)",

    regTitle: "Đăng ký tham dự Earnings Call",
    regSub: "Đăng ký dành cho nhà đầu tư tổ chức để nhận liên kết Zoom và gửi câu hỏi cho Ban Lãnh đạo.",
    fullName: "Họ và tên",
    workEmail: "Email công vụ / Tổ chức",
    institution: "Tên Quỹ / Định chế đầu tư",
    titleRole: "Chức vụ / Vị trí",
    questionOptional: "Câu hỏi trước cho Ban Lãnh đạo (Tùy chọn)",
    questionPlaceholder: "Nhập các câu hỏi về chiến lược kinh doanh, định hướng biên lợi nhuận...",
    submitRegistration: "Xác nhận đăng ký",
    regSuccessTitle: "Đăng ký thành công",
    regSuccessMessage: "Hệ thống đã ghi nhận thông tin đăng ký của Quý khách. Quý khách có thể đồng bộ nhanh vào lịch làm việc.",
    calendarInvites: "Thêm sự kiện vào Lịch",
    close: "Đóng",

    recordingTitle: "Bản ghi & Biên bản tóm tắt Earnings Call",
    nowPlaying: "Xem lại buổi họp trực tuyến",
    chapters: "Mục lục & Các mốc thời gian",
    keyTakeaways: "Nội dung trọng tâm",
    speed: "Tốc độ",
    playbackAudioVideo: "Video ghi hình",

    slidesTitle: "Tài liệu Thuyết trình Kết quả Kinh doanh",
    downloadPdf: "Tải tài liệu PDF",
    slidePageOf: "Trang",
    nextSlide: "Trang sau",
    prevSlide: "Trang trước",
    slideSummary: "Tóm tắt điểm nhấn trang thuyết trình",
    keyMetrics: "Chỉ số tài chính nổi bật",

    upcomingCallsCount: "Lịch họp sắp tới",
    confirmedCount: "Đã xác nhận",
    hscHostedCount: "Do HSC chủ trì",
    viewModeList: "Dạng chi tiết",
    viewModeTable: "Bảng tóm tắt"
  }
};
