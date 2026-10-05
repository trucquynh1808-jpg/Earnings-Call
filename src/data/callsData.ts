import { EarningsCall } from '../types';

export const UPCOMING_CALLS: EarningsCall[] = [
  {
    id: 'up-1',
    ticker: 'PVD',
    companyName: {
      en: 'PetroVietnam Drilling & Well Services Corp.',
      vi: 'Tổng CTCP Khoan và Dịch vụ Khoan Dầu khí'
    },
    exchange: 'HOSE',
    sector: { en: 'Energy & Oilfield Services', vi: 'Năng lượng & Dầu khí' },
    quarter: 'Q3.2026',
    date: '2026-11-02',
    time: '10:00 - 11:00',
    status: 'conf',
    host: 'HSC',
    hostName: 'Mr. Nam Nguyễn',
    lang: 'English',
    format: { en: 'Virtual (Zoom Webinar)', vi: 'Trực tuyến (Zoom Webinar)' },
    reps: [
      { name: 'Ms. Hoàng Thị Thu Hà', title: 'Head of Investor Relations' }
    ],
    overview: {
      en: 'Management briefing on Q3 2026 offshore drilling rig utilization, jack-up day-rates renewal in Southeast Asia, and order backlog outlook for 2027.',
      vi: 'Ban lãnh đạo cập nhật kết quả kinh doanh Q3/2026, hiệu suất hoạt động đội giàn khoan tự nâng tại Đông Nam Á, và triển vọng hợp đồng năm 2027.'
    },
    agenda: {
      en: [
        '10:00 - 10:15: Opening remarks by HSC Institutional Equity Research',
        '10:15 - 10:40: Operational updates & financial highlights by PVD Management',
        '10:40 - 11:00: Live institutional Q&A session'
      ],
      vi: [
        '10:00 - 10:15: Phát biểu mở đầu của Khối Phân tích HSC',
        '10:15 - 10:40: Cập nhật hoạt động kinh doanh và tài chính từ Ban Lãnh đạo PVD',
        '10:40 - 11:00: Phiên hỏi đáp trực tiếp cùng các quỹ đầu tư'
      ]
    },
    keyFinancials: {
      revenue: '1,840 tỷ VND',
      profit: '235 tỷ VND',
      growth: '+18.5% YoY',
      highlights: [
        { en: '100% Jack-up rig fleet utilization across Southeast Asia', vi: 'Hiệu suất khai thác giàn tự nâng đạt 100% tại Đông Nam Á' },
        { en: 'Average day rate improved +12% compared to previous contracts', vi: 'Giá thuê ngày bình quân tăng +12% so với hợp đồng cũ' }
      ]
    }
  },
  {
    id: 'up-2',
    ticker: 'KBC',
    companyName: {
      en: 'Kinh Bac City Development Holding Corp.',
      vi: 'Tổng CTCP Phát triển Đô thị Kinh Bắc'
    },
    exchange: 'HOSE',
    sector: { en: 'Industrial Real Estate', vi: 'Bất động sản Khu công nghiệp' },
    quarter: 'Q3.2026',
    date: '2026-11-02',
    time: '15:00 - 16:00',
    status: 'conf',
    host: 'HSC',
    hostName: 'Ms. Trang Hồ',
    lang: 'English',
    format: { en: 'Virtual (Zoom Webinar)', vi: 'Trực tuyến (Zoom Webinar)' },
    reps: [
      { name: 'Mr. Nguyễn Hồng Quân', title: 'Deputy CFO & Chief Accountant' }
    ],
    overview: {
      en: 'Review of industrial land handovers in Nam Son Hap Linh, Quang Chau, and licensing progression for Trang Due 3 industrial park expansion.',
      vi: 'Báo cáo tiến độ bàn giao đất công nghiệp tại KCN Nam Sơn Hạp Lĩnh, Quang Châu và tiến trình pháp lý KCN Tràng Duệ 3 mở rộng.'
    },
    agenda: {
      en: [
        '15:00 - 15:10: HSC Welcome & Vietnam Industrial Park Macro Overview',
        '15:10 - 15:35: KBC Q3.2026 Results & Land Bank Handover Pace',
        '15:35 - 16:00: Institutional Investor Q&A'
      ],
      vi: [
        '15:00 - 15:10: Giới thiệu & Tổng quan vĩ mô BĐS Khu công nghiệp từ HSC',
        '15:10 - 15:35: Kết quả Q3.2026 và tiến độ ghi nhận quỹ đất KBC',
        '15:35 - 16:00: Hỏi đáp chuyên sâu dành cho nhà đầu tư tổ chức'
      ]
    },
    keyFinancials: {
      revenue: '1,420 tỷ VND',
      profit: '410 tỷ VND',
      growth: '+24.2% YoY',
      highlights: [
        { en: 'FDI electronics manufacturing commitments in northern corridor', vi: 'Cam kết dòng vốn FDI điện tử bán dẫn tại hành lang phía Bắc' }
      ]
    }
  },
  {
    id: 'up-3',
    ticker: 'DXG & DXS',
    companyName: {
      en: 'Dat Xanh Group & Dat Xanh Services',
      vi: 'CTCP Tập đoàn Đất Xanh & Dịch vụ BĐS Đất Xanh'
    },
    exchange: 'HOSE',
    sector: { en: 'Residential Real Estate & Brokerage', vi: 'BĐS Dân cư & Dịch vụ Môi giới' },
    quarter: 'Q3.2026',
    date: '2026-11-03',
    time: '15:00 - 16:00',
    status: 'conf',
    host: 'HSC',
    hostName: 'Ms. Trang Bùi',
    lang: 'English',
    format: { en: 'Virtual (Zoom Webinar)', vi: 'Trực tuyến (Zoom Webinar)' },
    reps: [
      { name: 'Mr. Phan Lê Hòa', title: 'Deputy CEO' }
    ],
    overview: {
      en: 'Discussion on nationwide residential project sales recovery, brokerage absorption rate, and project delivery schedules in southern provinces.',
      vi: 'Cập nhật tình hình phục hồi giao dịch BĐS dân cư, tỷ lệ hấp thụ môi giới và tiến độ bàn giao dự án trọng điểm phía Nam.'
    },
    agenda: {
      en: [
        '15:00 - 15:15: Sector recovery review by HSC Research',
        '15:15 - 15:40: Management presentation by Dat Xanh Executive Team',
        '15:40 - 16:00: Open Q&A Session'
      ],
      vi: [
        '15:00 - 15:15: Nhận định phục hồi ngành từ HSC Research',
        '15:15 - 15:40: Trình bày kết quả và kế hoạch bán hàng từ Ban Lãnh đạo',
        '15:40 - 16:00: Phiên giải đáp thắc mắc'
      ]
    },
    keyFinancials: {
      revenue: '1,650 tỷ VND',
      profit: '185 tỷ VND',
      growth: '+31.0% YoY',
      highlights: [
        { en: 'Brokerage transaction volume +45% YoY as primary launches resumed', vi: 'Khối lượng giao dịch phân phối tăng 45% khi các dự án mới tái khởi động' }
      ]
    }
  }
];

export const PAST_CALLS: EarningsCall[] = [
  {
    id: 'past-1',
    ticker: 'FMC',
    companyName: {
      en: 'Sao Ta Foods JSC',
      vi: 'CTCP Thực phẩm Sao Ta'
    },
    exchange: 'HOSE',
    sector: { en: 'Agri-food & Seafood Export', vi: 'Nông nghiệp & Thủy sản' },
    quarter: 'Q2.2026',
    date: '2026-07-15',
    time: '15:00 - 16:00',
    status: 'conf',
    host: 'HSC',
    hostName: 'Ms. Thảo Trần',
    lang: 'Vietnamese',
    reps: [
      { name: 'Mr. Hồ Quốc Lực', title: 'Chairman of the Board of Directors' }
    ],
    recordingDuration: '58:24',
    slidesPages: 28,
    overview: {
      en: 'Detailed discussion on shrimp harvest yields, anti-subsidy duties in the US market, and expanding market share in Japan and Korea.',
      vi: 'Phân tích chi tiết về sản lượng thu hoạch tôm tự nuôi, thuế chống trợ cấp tại thị trường Mỹ và thị phần tại Nhật Bản, Hàn Quốc.'
    },
    recordingChapters: [
      { time: '00:00', seconds: 0, title: { en: 'Opening & Agenda', vi: 'Khai mạc & Giới thiệu' }, speaker: 'HSC Research' },
      { time: '07:15', seconds: 435, title: { en: 'FMC Q2.2026 Operational Performance', vi: 'Kết quả kinh doanh Q2/2026' }, speaker: 'Mr. Hồ Quốc Lực' },
      { time: '22:40', seconds: 1360, title: { en: 'US Trade Remedy Case & Tariff Defense', vi: 'Cập nhật vụ kiện thuế thị trường Mỹ' }, speaker: 'Mr. Hồ Quốc Lực' },
      { time: '38:10', seconds: 2290, title: { en: 'Farm Expansion & Yield Optimization', vi: 'Mở rộng vùng nuôi & cải thiện tỷ lệ sống' }, speaker: 'Management Team' },
      { time: '46:00', seconds: 2760, title: { en: 'Q&A: Raw Material Cost & Margin Guidance', vi: 'Hỏi đáp: Giá nguyên liệu & Biên lợi nhuận' }, speaker: 'All Speakers' }
    ],
    slidesHighlights: [
      {
        page: 1,
        title: { en: 'Cover: Q2 2026 Results & Global Market Strategy', vi: 'Bìa: Kết quả Q2/2026 & Chiến lược Thị trường Toàn cầu' },
        summary: { en: 'Executive presentation to institutional investors hosted by HSC.', vi: 'Tài liệu trình bày cho nhà đầu tư tổ chức do HSC chủ trì.' }
      },
      {
        page: 6,
        title: { en: 'Revenue Breakdown by Destination', vi: 'Cơ cấu Doanh thu theo Thị trường Xuất khẩu' },
        summary: { en: 'Japan remains the largest market at 38%, followed by North America (29%) and Europe (20%).', vi: 'Nhật Bản duy trì vị thế lớn nhất với 38%, tiếp theo là Bắc Mỹ (29%) và Châu Âu (20%).' },
        metrics: [
          { label: { en: 'Japan Sales', vi: 'Thị trường Nhật' }, value: '38%' },
          { label: { en: 'US & Canada', vi: 'Bắc Mỹ' }, value: '29%' },
          { label: { en: 'Gross Margin', vi: 'Biên gộp' }, value: '12.4%' }
        ]
      },
      {
        page: 14,
        title: { en: 'Self-Farming Land Expansion Progress', vi: 'Tiến độ mở rộng vùng nuôi công nghệ cao' },
        summary: { en: 'Vinh Thuan farm cluster achieved ASC certification, lowering cost of raw shrimp by 8% per kg.', vi: 'Vùng nuôi Vĩnh Thuận đạt chuẩn ASC, giảm chi phí tôm nguyên liệu 8%/kg.' }
      }
    ],
    transcriptTakeaways: {
      en: [
        'Export volume grew 14% YoY despite subdued global consumer spending.',
        'Zero anti-dumping duty achieved in recent US administrative review, providing competitive advantage over Indian and Ecuadorian peers.',
        'Targeting 2026 revenue of 6,200 billion VND with strong Q3-Q4 seasonal export orders.'
      ],
      vi: [
        'Sản lượng xuất khẩu tăng 14% so với cùng kỳ bất chấp sức mua tiêu dùng toàn cầu chậm lại.',
        'Mức thuế chống bán phá giá 0% trong kỳ rà soát mới nhất tạo lợi thế lớn so với đối thủ Ấn Độ và Ecuador.',
        'Mục tiêu doanh thu cả năm 6.200 tỷ VND với đơn hàng dồi dào trong cao điểm xuất khẩu Q3-Q4.'
      ]
    }
  },
  {
    id: 'past-2',
    ticker: 'TCB',
    companyName: {
      en: 'Vietnam Technological and Commercial Joint Stock Bank (Techcombank)',
      vi: 'Ngân hàng TMCP Kỹ thương Việt Nam'
    },
    exchange: 'HOSE',
    sector: { en: 'Banking & Financial Institutions', vi: 'Ngân hàng' },
    quarter: 'Q2.2026',
    date: '2026-07-22',
    time: '14:45 - 16:15',
    status: 'conf',
    host: 'Self',
    lang: 'English',
    reps: [
      { name: 'Mr. Jens Lottner', title: 'Chief Executive Officer (CEO)' },
      { name: 'Mr. Alexandre Macaire', title: 'Group Chief Financial Officer (CFO)' }
    ],
    recordingDuration: '1:24:10',
    slidesPages: 45,
    overview: {
      en: 'In-depth presentation of Techcombank Q2 2026 earnings, Casa ratio resurgence to 42%, non-interest income growth, and Techcom Securities IPO roadmap.',
      vi: 'Báo cáo chi tiết kết quả kinh doanh Q2/2026 của Techcombank, tỷ lệ CASA phục hồi lên 42%, tăng trưởng thu ngoài lãi và lộ trình IPO TCBS.'
    },
    recordingChapters: [
      { time: '00:00', seconds: 0, title: { en: 'Welcome & CEO Strategic Overview', vi: 'Chào mừng & Tổng quan chiến lược từ CEO' }, speaker: 'Mr. Jens Lottner' },
      { time: '18:30', seconds: 1110, title: { en: 'Financial Performance & NIM Dynamics', vi: 'Báo cáo tài chính & Diễn biến NIM' }, speaker: 'Mr. Alexandre Macaire' },
      { time: '41:15', seconds: 2475, title: { en: 'Asset Quality, Provisioning & Credit Risk', vi: 'Chất lượng tài sản & Trích lập dự phòng' }, speaker: 'Mr. Alexandre Macaire' },
      { time: '55:00', seconds: 3300, title: { en: 'Digital Banking, Auto-Earning & CASA', vi: 'Ngân hàng số, Sinh lời tự động & CASA' }, speaker: 'Executive Committee' },
      { time: '1:05:00', seconds: 3900, title: { en: 'Institutional Q&A Session', vi: 'Phiên hỏi đáp nhà đầu tư định chế' }, speaker: 'CEO & CFO' }
    ],
    slidesHighlights: [
      {
        page: 3,
        title: { en: 'Key Macro & Financial Highlights', vi: 'Điểm nhấn Kinh tế Vĩ mô và Tài chính' },
        summary: { en: 'Total operating income reached record high; ROA maintained at top tier of Vietnam banking sector at 2.6%.', vi: 'Tổng thu nhập hoạt động lập đỉnh mới; chỉ số ROA duy trì nhóm dẫn đầu ngành ngân hàng đạt 2.6%.' },
        metrics: [
          { label: { en: 'CASA Ratio', vi: 'Tỷ lệ CASA' }, value: '42.3%' },
          { label: { en: 'CAR (Basel II)', vi: 'Hệ số CAR' }, value: '15.1%' },
          { label: { en: 'NIM (LTM)', vi: 'Biên NIM' }, value: '4.45%' }
        ]
      },
      {
        page: 18,
        title: { en: 'CASA Acceleration via Auto-Earning Features', vi: 'Đột phá tăng trưởng CASA nhờ tính năng Sinh lời tự động' },
        summary: { en: 'Over 2.4 million retail accounts enrolled in Auto-Earning, unlocking sticky low-cost funding.', vi: 'Hơn 2,4 triệu tài khoản cá nhân kích hoạt Sinh lời tự động, tạo nguồn vốn giá rẻ bền vững.' }
      }
    ],
    transcriptTakeaways: {
      en: [
        'CASA ratio expanded by 180 bps QoQ to 42.3%, reinforcing the bank low cost of funds advantage.',
        'Credit growth of 12.8% YTD well-balanced across corporate loans, retail mortgages, and merchant financing.',
        'Management reaffirmed guidance of ~28 trillion VND PBT for FY2026.'
      ],
      vi: [
        'Tỷ lệ CASA tăng thêm 180 điểm cơ bản lên 42,3%, củng cố lợi thế chi phí vốn thấp.',
        'Tăng trưởng tín dụng đạt 12,8% từ đầu năm, cân đối giữa khách hàng doanh nghiệp, mua nhà và tài trợ chuỗi.',
        'Ban điều hành tái khẳng định mục tiêu lợi nhuận trước thuế 28.000 tỷ VND cho năm 2026.'
      ]
    }
  },
  {
    id: 'past-3',
    ticker: 'HCM',
    companyName: {
      en: 'Ho Chi Minh City Securities Corporation (HSC)',
      vi: 'CTCP Chứng khoán Thành phố Hồ Chí Minh'
    },
    exchange: 'HOSE',
    sector: { en: 'Diversified Financials & Brokerage', vi: 'Chứng khoán & Dịch vụ Tài chính' },
    quarter: 'Q2.2026',
    date: '2026-07-22',
    time: '15:00 - 16:00',
    status: 'conf',
    host: 'HSC',
    hostName: 'Institutional Client Relations Division',
    lang: 'English',
    reps: [
      { name: 'Mr. Trịnh Hoài Giang', title: 'Chief Executive Officer (CEO)' },
      { name: 'Mr. Huỳnh Lê Cường', title: 'Head of Institutional Sales' }
    ],
    recordingDuration: '1:02:15',
    slidesPages: 32,
    overview: {
      en: 'HSC official Q2 earnings review covering equity brokerage market share gains, margin lending book expansion following capital increase, and KRX system deployment preparedness.',
      vi: 'Đánh giá kết quả kinh doanh Q2/2026 của HSC: thị phần môi giới cổ phiếu, mở rộng quy mô cho vay ký quỹ sau đợt tăng vốn và mức độ sẵn sàng của hệ thống KRX.'
    },
    recordingChapters: [
      { time: '00:00', seconds: 0, title: { en: 'Opening & Corporate Overview', vi: 'Khai mạc & Báo cáo tổng quát' }, speaker: 'HSC Management' },
      { time: '14:20', seconds: 860, title: { en: 'Market Share, Liquidity & Brokerage Growth', vi: 'Thị phần, Thanh khoản & Doanh thu môi giới' }, speaker: 'Mr. Trịnh Hoài Giang' },
      { time: '31:40', seconds: 1900, title: { en: 'Margin Lending & Treasury Performance', vi: 'Hoạt động cho vay Margin & Nguồn vốn' }, speaker: 'Financial Division' },
      { time: '48:10', seconds: 2890, title: { en: 'Q&A on KRX System & Foreign Institutional Trading', vi: 'Hỏi đáp về Hệ thống KRX & Giao dịch Khối ngoại' }, speaker: 'CEO & Team' }
    ],
    slidesHighlights: [
      {
        page: 4,
        title: { en: 'Capital Position & Margin Capacity', vi: 'Quy mô Vốn & Dư địa Cho vay Ký quỹ' },
        summary: { en: 'Capital injection successfully completed, boosting equity to over 13,000 billion VND.', vi: 'Hoàn tất đợt tăng vốn, nâng vốn chủ sở hữu lên vượt 13.000 tỷ VND.' },
        metrics: [
          { label: { en: 'Equity Capital', vi: 'Vốn CSH' }, value: '13.2T VND' },
          { label: { en: 'Margin Loan Book', vi: 'Dư nợ Margin' }, value: '19.5T VND' },
          { label: { en: 'Institutional Share', vi: 'Thị phần Khách tổ chức' }, value: '24.8%' }
        ]
      }
    ],
    transcriptTakeaways: {
      en: [
        'HSC ranked #1 in foreign institutional brokerage turnover on the Ho Chi Minh Stock Exchange.',
        'Margin book expanded by 25% following the successful rights issuance, driving interest income up 38% YoY.',
        'Fully prepared for non-prefunding mechanism implementation for foreign investors.'
      ],
      vi: [
        'HSC tiếp tục dẫn đầu thị phần môi giới khách hàng tổ chức nước ngoài trên HOSE.',
        'Quy mô dư nợ margin tăng 25% sau đợt phát hành quyền mua thành công, doanh thu lãi vay tăng 38% YoY.',
        'Hệ thống công nghệ đã sẵn sàng 100% cho cơ chế giao dịch không ký quỹ 100% (non-prefunding) của khối ngoại.'
      ]
    }
  },
  {
    id: 'past-4',
    ticker: 'ACB',
    companyName: {
      en: 'Asia Commercial Joint Stock Bank (ACB)',
      vi: 'Ngân hàng TMCP Á Châu'
    },
    exchange: 'HOSE',
    sector: { en: 'Banking & Financial Institutions', vi: 'Ngân hàng' },
    quarter: 'Q2.2026',
    date: '2026-07-23',
    time: '15:30 - 17:00',
    status: 'conf',
    host: 'Self',
    lang: 'English',
    reps: [
      { name: 'Mr. Từ Tiến Phát', title: 'Chief Executive Officer (CEO)' },
      { name: 'Ms. Nguyễn Thị Tuyết Lan', title: 'Head of Investor Relations' }
    ],
    recordingDuration: '1:18:45',
    slidesPages: 36,
    overview: {
      en: 'ACB performance update highlighting conservative risk management, zero bond exposure risk, retail SME credit acceleration, and ROE above 23%.',
      vi: 'Báo cáo hoạt động ACB với định hướng quản trị rủi ro thận trọng, không rủi ro trái phiếu doanh nghiệp, tăng trưởng tín dụng SME và ROE trên 23%.'
    },
    recordingChapters: [
      { time: '00:00', seconds: 0, title: { en: 'CEO Review of Q2 Operational Results', vi: 'CEO đánh giá kết quả kinh doanh Q2' }, speaker: 'Mr. Từ Tiến Phát' },
      { time: '20:10', seconds: 1210, title: { en: 'Credit Growth Engine & SME Expansion', vi: 'Động lực tín dụng bán lẻ và SME' }, speaker: 'Management Team' },
      { time: '45:00', seconds: 2700, title: { en: 'Asset Quality & Lowest NPL Profile in Sector', vi: 'Chất lượng tài sản & Tỷ lệ nợ xấu thấp nhất ngành' }, speaker: 'Chief Risk Officer' },
      { time: '1:02:00', seconds: 3720, title: { en: 'Q&A: Dividend Policy & Digital Customer Growth', vi: 'Hỏi đáp: Chính sách cổ tức & Khách hàng số' }, speaker: 'Executive Board' }
    ],
    slidesHighlights: [
      {
        page: 5,
        title: { en: 'Quality-First Balance Sheet Architecture', vi: 'Chất lượng tài sản chuẩn mực và tỷ suất sinh lời' },
        summary: { en: 'NPL kept at 1.18% with 100% real estate collateral coverage on large exposures.', vi: 'Nợ xấu được kiểm soát chặt ở 1,18%, các khoản vay lớn đều có tài sản bảo đảm an toàn.' },
        metrics: [
          { label: { en: 'ROE (LTM)', vi: 'ROE' }, value: '23.4%' },
          { label: { en: 'NPL Ratio', vi: 'Tỷ lệ nợ xấu' }, value: '1.18%' },
          { label: { en: 'LLR Coverage', vi: 'Bao phủ nợ xấu' }, value: '95%' }
        ]
      }
    ],
    transcriptTakeaways: {
      en: [
        'Maintained premier credit rating with zero corporate real estate bonds in investment portfolio.',
        'Annual cash and stock dividend strategy continued with high consistency.',
        'Digital banking active users reached 6.5 million, cutting cost-to-income ratio (CIR) down to 31.8%.'
      ],
      vi: [
        'Duy trì chất lượng danh mục tốt nhất ngành, hoàn toàn không nắm giữ trái phiếu doanh nghiệp rủi ro.',
        'Chính sách chi trả cổ tức kết hợp tiền mặt và cổ phiếu được duy trì đều đặn qua các năm.',
        'Lượng người dùng ứng dụng số đạt 6,5 triệu, giúp hạ tỷ lệ chi phí trên thu nhập (CIR) xuống 31,8%.'
      ]
    }
  },
  {
    id: 'past-5',
    ticker: 'FPT',
    companyName: {
      en: 'FPT Corporation',
      vi: 'CTCP FPT'
    },
    exchange: 'HOSE',
    sector: { en: 'Information Technology & Software', vi: 'Công nghệ Thông tin & Phần mềm' },
    quarter: 'Q1.2026',
    date: '2026-04-24',
    time: '15:00 - 16:00',
    status: 'conf',
    host: 'HSC',
    hostName: 'Ms. Linh Đỗ',
    lang: 'English',
    reps: [
      { name: 'Mr. Nguyễn Thế Phương', title: 'Executive Vice President & CFO' },
      { name: 'Mr. Phạm Minh Tuấn', title: 'Executive Vice President & CEO of FPT Software' }
    ],
    recordingDuration: '1:06:20',
    slidesPages: 40,
    overview: {
      en: 'Global IT services revenue milestone, semiconductor design partnerships, Nvidia AI factory datacenter expansion, and Automotive software contracts.',
      vi: 'Dấu mốc doanh thu dịch vụ CNTT toàn cầu, hợp tác thiết kế vi mạch bán dẫn, trung tâm dữ liệu AI Factory hợp tác cùng Nvidia và mảng phần mềm ô tô.'
    },
    recordingChapters: [
      { time: '00:00', seconds: 0, title: { en: 'HSC Tech Sector Kickoff', vi: 'HSC khai mạc phiên cập nhật ngành Tech' }, speaker: 'HSC Research' },
      { time: '10:15', seconds: 615, title: { en: 'Global IT Revenue & Mega Contract Signings', vi: 'Doanh thu IT toàn cầu & Hợp đồng quy mô lớn' }, speaker: 'Mr. Nguyễn Thế Phương' },
      { time: '28:30', seconds: 1710, title: { en: 'AI Factory & Semiconductor Roadmap', vi: 'Trung tâm AI Factory & Lộ trình Bán dẫn' }, speaker: 'Mr. Phạm Minh Tuấn' },
      { time: '48:00', seconds: 2880, title: { en: 'Institutional Q&A: Talent Pipeline & Margin Outlook', vi: 'Hỏi đáp Quỹ đầu tư: Nhân lực & Biên lợi nhuận' }, speaker: 'FPT Leadership' }
    ],
    slidesHighlights: [
      {
        page: 7,
        title: { en: 'Global IT Services Contract Backlog', vi: 'Quy mô Hợp đồng Dịch vụ CNTT Toàn cầu' },
        summary: { en: 'Signed over $1.2B in foreign software contracts; double-digit growth in US and Japanese corporate accounts.', vi: 'Giá trị hợp đồng ký mới tại nước ngoài vượt 1,2 tỷ USD; tăng trưởng hai chữ số tại Mỹ và Nhật.' },
        metrics: [
          { label: { en: 'Signed Backlog', vi: 'Hợp đồng ký mới' }, value: '$1.25B' },
          { label: { en: 'AI & Cloud Revenue', vi: 'Doanh thu AI/Cloud' }, value: '+34% YoY' },
          { label: { en: 'Global Headcount', vi: 'Quy mô nhân sự' }, value: '52,000+' }
        ]
      }
    ],
    transcriptTakeaways: {
      en: [
        'Global DX (Digital Transformation) billings surged 29%, powered by Generative AI integration projects.',
        'Automotive software engineering unit logged consecutive contracts with major US/German tier-1 OEMs.',
        'Datacenter division operating at full capacity; sovereign AI infrastructure project progressing on schedule.'
      ],
      vi: [
        'Doanh thu Chuyển đổi số tăng tốc 29%, dẫn dắt bởi các dự án tích hợp GenAI thực tế cho khách hàng quốc tế.',
        'Khối phần mềm ô tô (Automotive) liên tiếp thắng thầu các dự án OEM lớn của Mỹ và Đức.',
        'Khối trung tâm dữ liệu hoạt động tối đa công suất; hạ tầng tính toán AI phục vụ doanh nghiệp tiến triển đúng hạn.'
      ]
    }
  },
  {
    id: 'past-6',
    ticker: 'VHM',
    companyName: {
      en: 'Vinhomes JSC',
      vi: 'CTCP Vinhomes'
    },
    exchange: 'HOSE',
    sector: { en: 'Residential Mega-Master Planned Real Estate', vi: 'Đại đô thị Bất động sản Dân cư' },
    quarter: 'Q1.2026',
    date: '2026-04-28',
    time: '16:00 - 17:00',
    status: 'conf',
    host: 'Self',
    lang: 'English',
    reps: [
      { name: 'Ms. Nguyễn Diệu Linh', title: 'Vice Chairwoman of Board of Directors' },
      { name: 'Mr. Douglas Farrell', title: 'Deputy CEO, Finance & Capital Markets' }
    ],
    recordingDuration: '1:14:00',
    slidesPages: 38,
    overview: {
      en: 'Update on bulk sales transactions, Vinhomes Ocean Park series deliveries, and pre-sales launch pipeline for northern mega-projects.',
      vi: 'Cập nhật các giao dịch bán buôn, tiến độ bàn giao chuỗi Vinhomes Ocean Park và kế hoạch mở bán các đại dự án mới tại miền Bắc.'
    },
    recordingChapters: [
      { time: '00:00', seconds: 0, title: { en: 'Management Welcome & Market Conditions', vi: 'Chào mừng & Diễn biến thị trường' }, speaker: 'Board of Directors' },
      { time: '16:45', seconds: 1005, title: { en: 'Financial Results & Presales Volume', vi: 'Kết quả kinh doanh & Doanh số bán trước' }, speaker: 'Mr. Douglas Farrell' },
      { time: '38:20', seconds: 2300, title: { en: 'Mega-Project Construction Milestones', vi: 'Tiến độ xây dựng các đại dự án' }, speaker: 'Project Management' },
      { time: '52:10', seconds: 3130, title: { en: 'Global Institutional Investor Q&A', vi: 'Hỏi đáp cùng các quỹ đầu tư toàn cầu' }, speaker: 'VHM Executives' }
    ],
    slidesHighlights: [
      {
        page: 8,
        title: { en: 'Unbilled Contracted Sales (Backlog)', vi: 'Doanh số bán chưa ghi nhận (Backlog)' },
        summary: { en: 'Massive backlog of over 85,000 billion VND securing earnings visibility for upcoming quarters.', vi: 'Doanh số chưa ghi nhận đạt trên 85.000 tỷ VND, đảm bảo triển vọng lợi nhuận các quý tiếp theo.' }
      }
    ],
    transcriptTakeaways: {
      en: [
        'Contracted unbilled sales backlog surpassed 85,000 billion VND.',
        'High cash collection efficiency observed across retail buyers and institutional bulk transaction partners.',
        'Diversified financing avenues successfully secured across domestic bonds and syndicated international loans.'
      ],
      vi: [
        'Doanh số bán chưa ghi nhận đạt trên 85.000 tỷ VND.',
        'Tiến độ thu tiền thực tế từ khách hàng cá nhân và đối tác bán lô lớn đạt mức cao.',
        'Nguồn vốn được đa dạng hóa qua kênh trái phiếu trong nước và khoản vay hợp vốn quốc tế.'
      ]
    }
  },
  {
    id: 'past-7',
    ticker: 'MSN',
    companyName: {
      en: 'Masan Group Corporation',
      vi: 'CTCP Tập đoàn Masan'
    },
    exchange: 'HOSE',
    sector: { en: 'Consumer Goods & Retail Ecosystem', vi: 'Hàng Tiêu dùng & Bán lẻ' },
    quarter: 'Q4.2025',
    date: '2026-01-20',
    time: '15:00 - 16:30',
    status: 'conf',
    host: 'HSC',
    hostName: 'Mr. Thành Bùi',
    lang: 'English',
    reps: [
      { name: 'Mr. Danny Le', title: 'Chief Executive Officer (CEO)' },
      { name: 'Ms. Nguyễn Thị Phương', title: 'CEO of WinCommerce' }
    ],
    recordingDuration: '1:20:10',
    slidesPages: 42,
    overview: {
      en: 'FY2025 financial review & 2026 outlook: WinCommerce store profitability milestone, Masan Consumer Holdings international expansion, and debt deleveraging progress.',
      vi: 'Đánh giá năm tài chính 2025 & Triển vọng 2026: Cột mốc có lãi của chuỗi WinCommerce, xuất khẩu Masan Consumer và lộ trình giảm đòn bẩy tài chính.'
    },
    recordingChapters: [
      { time: '00:00', seconds: 0, title: { en: 'Introduction by HSC Consumer Desk', vi: 'Giới thiệu từ Bộ phận Tiêu dùng HSC' }, speaker: 'HSC Research' },
      { time: '12:00', seconds: 720, title: { en: 'Masan Consumer & FMCG Performance', vi: 'Hoạt động kinh doanh Hàng tiêu dùng' }, speaker: 'Mr. Danny Le' },
      { time: '35:10', seconds: 2110, title: { en: 'WinCommerce Store Profitability & LFL Growth', vi: 'Hiệu quả WinCommerce & Tăng trưởng LFL' }, speaker: 'Ms. Nguyễn Thị Phương' },
      { time: '58:00', seconds: 3480, title: { en: 'Capital Allocation & Leverage Reduction', vi: 'Phân bổ vốn & Giảm nợ vay' }, speaker: 'CFO' },
      { time: '1:08:00', seconds: 4080, title: { en: 'Q&A Session', vi: 'Phiên hỏi đáp' }, speaker: 'All Panelists' }
    ],
    slidesHighlights: [
      {
        page: 6,
        title: { en: 'WinCommerce Profitability Turnaround', vi: 'Bước ngoặt có lãi của WinCommerce' },
        summary: { en: 'Monthly net profit positive across store network driven by WiN membership adoption of 9+ million members.', vi: 'Toàn hệ thống đạt điểm hòa vốn và có lợi nhuận ròng nhờ chương trình Hội viên WiN đạt 9 triệu thành viên.' }
      }
    ],
    transcriptTakeaways: {
      en: [
        'WinCommerce achieved full network monthly net profit positivity.',
        'Masan Consumer packaged food innovation pipeline expanded international exports by 22%.',
        'Net debt to EBITDA ratio trimmed down meaningfully from private equity proceeds and operational cashflow.'
      ],
      vi: [
        'Chuỗi bán lẻ WinCommerce chính thức đạt mốc có lợi nhuận ròng hàng tháng trên toàn mạng lưới.',
        'Sản phẩm tiêu dùng đóng gói mở rộng thị trường quốc tế tăng 22%.',
        'Tỷ lệ Nợ vay ròng trên EBITDA giảm đáng kể nhờ dòng tiền kinh doanh và đối tác chiến lược.'
      ]
    }
  },
  {
    id: 'past-8',
    ticker: 'VNM',
    companyName: {
      en: 'Vietnam Dairy Products JSC (Vinamilk)',
      vi: 'CTCP Sữa Việt Nam (Vinamilk)'
    },
    exchange: 'HOSE',
    sector: { en: 'Consumer Dairy & Beverages', vi: 'Sữa & Thực phẩm Đồ uống' },
    quarter: 'Q4.2025',
    date: '2026-01-22',
    time: '10:00 - 11:30',
    status: 'conf',
    host: 'Self',
    lang: 'English',
    reps: [
      { name: 'Ms. Mai Kiều Liên', title: 'Chief Executive Officer (CEO)' },
      { name: 'Mr. Lê Thành Liêm', title: 'Executive Director, Finance & CFO' }
    ],
    recordingDuration: '1:12:30',
    slidesPages: 35,
    overview: {
      en: 'Vinamilk brand repositioning impact, raw milk powder input cost trends, domestic market share stabilization, and high cash dividend yields.',
      vi: 'Hiệu quả chiến dịch tái định vị thương hiệu Vinamilk, xu hướng giá bột sữa nguyên liệu thế giới, giữ vững thị phần và tỷ suất cổ tức tiền mặt cao.'
    },
    recordingChapters: [
      { time: '00:00', seconds: 0, title: { en: 'CEO Welcome Address', vi: 'Phát biểu khai mạc từ CEO' }, speaker: 'Ms. Mai Kiều Liên' },
      { time: '15:20', seconds: 920, title: { en: 'Full Year Financial Review', vi: 'Báo cáo tài chính cả năm' }, speaker: 'Mr. Lê Thành Liêm' },
      { time: '37:45', seconds: 2265, title: { en: 'Domestic Dairy Consumption & Rebranding Uptake', vi: 'Tiêu thụ sữa nội địa & Phản hồi tái định vị' }, speaker: 'Marketing Leadership' },
      { time: '55:00', seconds: 3300, title: { en: 'Q&A: Global Dairy Prices & Dividend Roadmap', vi: 'Hỏi đáp: Giá sữa thế giới & Cổ tức' }, speaker: 'Executive Board' }
    ],
    slidesHighlights: [
      {
        page: 4,
        title: { en: 'Gross Margin Expansion on Favorable Powder Prices', vi: 'Biên lợi nhuận gộp mở rộng nhờ giá bột sữa' },
        summary: { en: 'Gross margin expanded by 220 bps YoY as low-cost inventory locked in.', vi: 'Biên lợi nhuận gộp tăng thêm 220 điểm cơ bản nhờ chốt hợp đồng nguyên liệu giá thuận lợi.' }
      }
    ],
    transcriptTakeaways: {
      en: [
        'Consolidated revenue topped 64,500 billion VND with steady 5.5% annual growth.',
        'High dividend payout maintained at over 80% of net profits in cash.',
        'Export markets in the Middle East and Southeast Asia sustained double-digit volume expansion.'
      ],
      vi: [
        'Doanh thu hợp nhất vượt 64.500 tỷ VND, duy trì mức tăng trưởng bền bỉ 5,5%.',
        'Tỷ lệ chi trả cổ tức duy trì trên 80% lợi nhuận sau thuế bằng tiền mặt.',
        'Thị trường xuất khẩu Trung Đông và Đông Nam Á duy trì mức tăng trưởng sản lượng 2 chữ số.'
      ]
    }
  }
];

export const QUARTERS = ['Q2.2026', 'Q1.2026', 'Q4.2025'];
