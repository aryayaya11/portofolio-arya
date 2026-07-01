// ============================================================
// PORTFOLIO DATA — Arya Putra Permana
// Edit this file to update your portfolio content
// ============================================================

export const personalInfo = {
  name: "Arya Putra Permana",
  shortName: "Arya Putra",
  initials: "APP",
  location: "Surabaya, Indonesia",
  university: "Universitas Airlangga",
  major: "Teknologi Sains Data",
  status: "Mahasiswa S1 Sains Data",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop", // placeholder profile image
  email: "aryaputrapermana1@gmail.com", // update with real email
  linkedin: "www.linkedin.com/in/aryaputrapermana", // update
  github: "https://github.com/aryayaya11", // update
  instagram: "https://www.instagram.com/aryaa.puttra/", // update
  resumeUrl: "https://drive.google.com/file/d/1RAp2M9CzoBiIUnOSvQy1L6hWjhE7BPiX/view?usp=sharing",
  tagline: "Membangun solusi berbasis data melalui analitik, kepemimpinan, dan pengambilan keputusan yang berdampak.",
  about: `Sebagai mahasiswa S1 Sains Data di Universitas Airlangga, saya sangat antusias dalam menerjemahkan kumpulan data yang kompleks menjadi keputusan strategis yang berbasis bukti. Saya berkembang di persimpangan antara analitik, statistik, dan kecerdasan bisnis (BI), dengan pengalaman langsung dalam membangun model machine learning, merancang data warehouse, dan membuat dasbor interaktif.

Keahlian teknis saya meliputi Python, SQL, R, dan Microsoft Excel—tetapi saya percaya bahwa data hanya akan sebaik cerita yang disampaikannya. Selain penyelesaian masalah teknis, saya memiliki kemampuan komunikasi yang kuat dan pengalaman kolaboratif dari mengelola keuangan organisasi hingga mengoordinasikan program internasional.

Baik itu mengoptimalkan anggaran atau menganalisis data geospasial, tujuan utama saya adalah menjembatani kesenjangan antara ketelitian analitis dan dampak di dunia nyata.`,
  roles: [
    "Penggiat Analisis Data",
    "Penggiat Business Intelligence",
    "Mahasiswa Sains Data",
  ],
};

export const stats = [
  { label: "Organisasi & Kepanitiaan", value: 10, suffix: "+", decimals: 0 },
  { label: "Proyek", value: 5, suffix: "+", decimals: 0 },
  { label: "Dana Dikelola", value: 140, suffix: "Juta+", prefix: "Rp", decimals: 0 },
  { label: "Anggota Dikoordinasi", value: 500, suffix: "+", decimals: 0 },
  { label: "Program Internasional", value: 3, suffix: "+", decimals: 0 },
];

export const experiences = [
  {
    id: "kombo-ftmm",
    role: "Bendahara",
    organization: "KOMBO FTMM",
    period: "2026 – Sekarang",
    type: "Keuangan",
    images: [
      "/experiences/kombo/kombo-1.png"
    ],
    responsibilities: [
      "Mengawasi arus kas bulanan dan administrasi keuangan untuk lebih dari 70 anggota organisasi aktif.",
      "Mengarahkan sirkulasi dana operasional lebih dari Rp60.000.000 selama periode kepengurusan.",
      "Menyusun dan memublikasikan laporan transparansi keuangan secara komprehensif setiap bulan.",
    ],
    impact: "Memastikan akuntabilitas keuangan 100% dan membangun kepercayaan melalui pelaporan yang transparan.",
    color: "from-violet-500/20 to-purple-500/20",
    accentColor: "bg-violet-500",
  },
  {
    id: "bem-ftmm",
    role: "Menteri Keuangan",
    organization: "BEM FTMM — Badan Eksekutif Mahasiswa Fakultas",
    period: "2025 – 2026",
    type: "Kepemimpinan",
    images: [
      "/experiences/bem/bem-1.jpg",
      "/experiences/bem/bem-2.jpg",
      "/experiences/bem/bem-3.jpg"
    ],
    responsibilities: [
      "Mengarahkan arus kas organisasi lebih dari Rp80.000.000 yang didistribusikan ke 49 program kerja dan 11 kementerian.",
      "Merumuskan 10+ Rencana Anggaran Biaya (RAB) terperinci dan memimpin keterbukaan informasi publik laporan keuangan bulanan melalui media sosial.",
      "Mencatat dan mengaudit lebih dari 20 transaksi keuangan setiap bulan untuk menegakkan akuntabilitas keuangan yang ketat.",
      "Menyusun strategi efisiensi anggaran selama fase perencanaan, memotong biaya hingga 50% untuk program tertentu tanpa mengorbankan kualitas.",
    ],
    impact: "Memaksimalkan alokasi sumber daya dan secara signifikan memangkas pengeluaran program sembari mempertahankan catatan publik yang transparan.",
    color: "from-blue-500/20 to-indigo-500/20",
    accentColor: "bg-blue-500",
  },
  {
    id: "segta",
    role: "Liaison Officer",
    organization: "SEGTA (Sustainable Energy and Green Technology Application)",
    period: "2025",
    type: "Internasional",
    images: [
      "/experiences/lo/lo-1.jpg",
      "/experiences/lo/lo-2.jpg",
      "/experiences/lo/lo-3.jpg",
      "/experiences/lo/lo-4.jpg"
    ],
    responsibilities: [
      "Memandu dan mendampingi lebih dari 80 peserta internasional dari Malaysia selama program internasional yang berlangsung seminggu.",
      "Mengelola jadwal dan logistik penuh, dengan agenda utama diadakan di Pulau Gili Iyang, Madura.",
      "Berperan sebagai penghubung budaya, menjembatani komunikasi lintas budaya untuk memastikan pengalaman yang nyaman dan interaktif.",
      "Memberikan orientasi sosial dan budaya yang komprehensif, memperkenalkan etiket Indonesia, batik, dan warisan lokal.",
    ],
    impact: "Membina pertukaran lintas budaya yang kuat dan memastikan kelancaran pelaksanaan acara internasional selama seminggu.",
    color: "from-amber-500/20 to-orange-500/20",
    accentColor: "bg-amber-500",
  },
];

export type TechIcon = {
  name: string;
  iconUrl: string;
  color: string;
};

export type DeviceScreenshots = {
  desktop: string[];
  tablet: string[];
  mobile: string[];
  charts?: string[];
};

export type Project = {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  accentColor: string;
  year: string;
  projectType: string;
  teamType: string;
  roleInGroup?: string;
  myImpact: string;
  whatILearned: string;
  images: string[];
  description: string;
  tech: string[];
  techIcons: TechIcon[];
  problem: string;
  action: string[];
  result: string[];
  keyResults: string[];
  github: string | null;
  demo: string | null;
  liveUrl: string | null;
  featured?: boolean;
  isConfidential?: boolean;
  gradient: string;
  icon?: string;
  deviceScreenshots?: DeviceScreenshots;
  codeSnippets?: {
    title: string;
    language: string;
    code: string;
  }[];
};

export const projects: Project[] = [
  {
    id: "aceh-landwatch",
    title: "Aceh LandWatch Dashboard",
    category: "Geospatial Analytics",
    categoryColor: "text-emerald-400",
    accentColor: "#16a34a",
    year: "2026",
    projectType: "Tugas Kuliah",
    teamType: "Proyek Kelompok",
    roleInGroup: "Desainer UI/UX & Analis Kuantitatif",
    myImpact: "Merancang tata letak UI/UX R Shiny, mendesain antarmuka pengguna interaktif, dan memformulasikan perhitungan statistik kuartil (ambang batas persentil Q3) untuk mengklasifikasikan status tingkat risiko daerah.",
    whatILearned: "Belajar mengimplementasikan peta Leaflet interaktif, mengoordinasikan reaktivitas state di R Shiny, dan menerapkan ambang batas persentil Q3 untuk klasifikasi wilayah.",
    images: [
      "/projects/aceh-landwatch/desktop/desktop-1.png",
      "/projects/aceh-landwatch/desktop/desktop-4.png",
    ],
    deviceScreenshots: {
      desktop: [
        "/projects/aceh-landwatch/desktop/desktop-1.png",
        "/projects/aceh-landwatch/desktop/desktop-2.png",
        "/projects/aceh-landwatch/desktop/desktop-3.png",
        "/projects/aceh-landwatch/desktop/desktop-4.png",
      ],
      tablet: [
        "/projects/aceh-landwatch/tablet/tablet-1.png",
        "/projects/aceh-landwatch/tablet/tablet-2.png",
      ],
      mobile: [
        "/projects/aceh-landwatch/mobile/mobile-1.png",
        "/projects/aceh-landwatch/mobile/mobile-2.png",
      ],
    },
    description:
      "Sebuah dasbor interaktif R Shiny untuk memantau, menganalisis, dan memvisualisasikan hubungan antara alih fungsi lahan (kehilangan tutupan hutan), sektor pertanian, sektor perkebunan, serta intensitas bencana alam di 23 Kabupaten/Kota Provinsi Aceh selama periode 2021–2025.",
    tech: ["R", "R Shiny", "Leaflet", "BPS Data", "Statistical Classification"],
    techIcons: [
      { name: "R", iconUrl: "https://cdn.simpleicons.org/r/276DC3", color: "#276DC3" },
      { name: "Shiny", iconUrl: "https://raw.githubusercontent.com/rstudio/shiny/main/man/figures/logo.png", color: "#75AADB" },
      { name: "Leaflet", iconUrl: "https://cdn.simpleicons.org/leaflet/199900", color: "#199900" },
      { name: "OpenStreetMap", iconUrl: "https://cdn.simpleicons.org/openstreetmap/7EBC6F", color: "#7EBC6F" },
    ],
    problem: "**Provinsi Aceh** menghadapi percepatan deforestasi — kehilangan tutupan hutan seluas **39.683 Ha** pada tahun 2025 saja — namun pembuat kebijakan daerah tidak memiliki **alat yang terpadu dan real-time** untuk mengkorelasikan hilangnya hutan dengan peristiwa bencana. Data dari BPS tersebar di berbagai laporan PDF statis, sehingga mustahil untuk mengidentifikasi kabupaten mana yang memerlukan **intervensi segera**.",
    action: [
      "Mengumpulkan, membersihkan, dan mengintegrasikan **data statistik multi-tahun (2021–2025)** dari BPS Provinsi Aceh terkait alih fungsi lahan, pertanian, perkebunan, dan bencana alam",
      "Merancang **sistem klasifikasi wilayah berbasis aturan (rule-based)** menggunakan ambang batas kuartil ketiga (Q3/persentil 75) untuk mengelompokkan daerah menjadi status Darurat Pengawasan (Merah), Waspada (Oranye), dan Aman (Hijau)",
      "Membangun **aplikasi web Shiny interaktif** dengan visualisasi data modular yang terbagi menjadi Overview, Sektor Pertanian, Sektor Bencana, Sektor Perkebunan, dan Analisis Hubungan",
      "Mengintegrasikan **peta choropleth spasial (GIS)** menggunakan Leaflet dengan fitur *click-to-sync* yang secara dinamis memperbarui filter daerah saat wilayah peta diklik",
      "Mengembangkan **grafik tren dual-axis interaktif** menggunakan Plotly untuk memperlihatkan korelasi historis kehilangan hutan vs intensitas kejadian bencana alam",
      "Membuat **bubble charts interaktif** untuk memetakan efisiensi produktivitas pertanian dan indeks kerawanan daerah",
      "Mengimplementasikan **tata letak responsif penuh** dengan custom CSS agar optimal diakses dari perangkat desktop, tablet, maupun mobile",
    ],
    result: [
      "Mengidentifikasi hilangnya total tutupan hutan seluas **39.683 Ha** di Provinsi Aceh pada tahun 2025 yang berdampak langsung terhadap **1.136 desa**",
      "Mengklasifikasikan 23 kabupaten/kota secara dinamis — mendeteksi **Bener Meriah dalam status Darurat Pengawasan** (kehilangan hutan >= Q3 dan bencana >= Q3)",
      "Menemukan bahwa **kebakaran hutan/lahan** mendominasi kejadian bencana dengan proporsi **64,8%** dari seluruh bencana relevan",
      "Menyoroti risiko ketahanan pangan di **Aceh Utara** yang menempati peringkat pertama produksi padi meskipun berstatus Waspada akibat kerawanan bencana",
      "Dasbor berhasil berjalan dengan performa rendering spasial GeoJSON yang cepat dan pemrosesan data multi-dimensi secara real-time",
      "Aplikasi lolos uji aksesibilitas responsif di perangkat desktop, tablet, dan mobile untuk kenyamanan petugas lapangan",
    ],
    keyResults: [
      "Analisis Spasial Komprehensif 39.683 Ha: Memetakan kehilangan hutan secara dinamis untuk memandu regulasi perlindungan lingkungan",
      "Mitigasi Kerawanan Bencana di 1.136 Desa: Mengidentifikasi pemukiman rentan guna mengefektifkan penyaluran logistik bencana",
      "Sistem Klasifikasi Status 3-Tingkat: Memformulasikan model rule-based Q3 untuk menentukan skala prioritas mitigasi daerah",
    ],
    github: "https://github.com/aryayaya11/aceh-landwatch",
    demo: "https://aryaputrapermana.shinyapps.io/aceh-landwatch/",
    liveUrl: "https://aryaputrapermana.shinyapps.io/aceh-landwatch/",
    featured: true,
    gradient: "from-green-600/20 via-emerald-600/10 to-transparent",
    icon: "🗺️",
    codeSnippets: [
      {
        title: "Reactive Leaflet Map Logic (RShiny)",
        language: "r",
        code: `output$peta_dinamis <- renderLeaflet({
  pata <- peta_reaktif()

  # Bounding box lock for Aceh region
  bbox <- st_bbox(peta_aceh)

  p <- leaflet(pata) %>%
    addProviderTiles(providers$CartoDB.Positron) %>%
    fitBounds(
      lng1 = as.numeric(bbox$xmin), lat1 = as.numeric(bbox$ymin),
      lng2 = as.numeric(bbox$xmax), lat2 = as.numeric(bbox$ymax)
    )

  kota_terpilih_val <- req(kota_terpilih())
  is_selected <- pata$Kota_Map == kota_terpilih_val
  
  # Dynamic styling & highlighting based on selection
  highlight_opts <- highlightOptions(
    weight = ifelse(is_selected, 7, 4),
    color = ifelse(is_selected, "#f59e0b", "#666"),
    opacity = 1, fillOpacity = 1,
    bringToFront = TRUE
  )
})`
      }
    ]
  },
  {
    id: "axa-insurance-dashboard",
    isConfidential: true,
    title: "AXA Insurance Executive Dashboard",
    category: "Insurance Analytics",
    categoryColor: "text-blue-400",
    accentColor: "#00008F",
    year: "2026",
    projectType: "Tugas Proyek Kerja",
    teamType: "Proyek Kelompok",
    roleInGroup: "Developer Streamlit & Analis Risiko",
    myImpact: "Merancang dan membangun dasbor Streamlit, melakukan analisis matriks risiko-keuntungan multi-dimensi (GWP vs Klaim), serta memetakan karakteristik risiko klaim untuk setiap lini bisnis.",
    whatILearned: "Belajar menerapkan konsep pemodelan aktuaria pada dataset besar (156k+ polis) menggunakan Python, mengelola state aplikasi modular, dan merancang dasbor BI untuk eksekutif.",
    images: [
      "/projects/axa/desktop/cover.png",
      "/projects/axa/ppt/slide-1.png",
      "/projects/axa/ppt/slide-2.png",
      "/projects/axa/ppt/slide-3.png",
      "/projects/axa/ppt/slide-4.png",
    ],
    deviceScreenshots: {
      desktop: [
        "/projects/axa/desktop/cover.png",
        "/projects/axa/desktop/desktop-2.png",
        "/projects/axa/desktop/desktop-3.png",
      ],
      tablet: [],
      mobile: [
        "/projects/axa/mobile/mobile-1.png",
        "/projects/axa/mobile/mobile-2.png",
        "/projects/axa/mobile/mobile-3.png",
      ],
    },
    description:
      "Dasbor analitik aktuaria multi-kasus yang dibangun dengan Python Streamlit untuk AXA Insurance × Universitas Airlangga, mencakup 7 analisis portofolio strategis mulai dari segmentasi risiko-imbalan hingga efektivitas reasuransi dan deteksi penipuan.",
    tech: ["Python", "Streamlit", "Plotly", "Pandas", "Actuarial Analytics"],
    techIcons: [
      { name: "Python", iconUrl: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
      { name: "Streamlit", iconUrl: "https://cdn.simpleicons.org/streamlit/FF4B4B", color: "#FF4B4B" },
      { name: "Plotly", iconUrl: "https://cdn.simpleicons.org/plotly/3F4F75", color: "#3F4F75" },
      { name: "Pandas", iconUrl: "https://cdn.simpleicons.org/pandas/150458", color: "#150458" },
    ],
    problem: "AXA Insurance memiliki portofolio besar sebanyak **156.301 polis aktif** namun tidak memiliki alat terpadu untuk mengevaluasi profitabilitas, menilai ROI reasuransi, atau **mendeteksi pencilan klaim ekstrem/penipuan**. Laporan Excel statis membuat **pengambilan keputusan real-time menjadi tidak mungkin** bagi para eksekutif.",
    action: [
      "Merekayasa **aplikasi web Streamlit** dengan 7 studi kasus analitis berurutan yang dapat dinavigasi dari bilah sisi (sidebar) persisten",
      "Membangun **Matriks Risiko-Imbalan (Risk-Reward Matrix)** interaktif (GWP vs. Total Claim) yang mengklasifikasikan segmen ke dalam Cash Cow, High Risk-Return, Low Performer, dan Bleeding",
      "Mengimplementasikan **analisis efektivitas reasuransi**: Gross LR vs Net LR funnel, rasio RWP-terhadap-GWP, dan dampak Margin Underwriting",
      "Menerapkan **deteksi outlier berbasis IQR** pada klaim yang telah diselesaikan untuk mengidentifikasi peristiwa ekstrem yang membutuhkan cadangan modal khusus",
      "Melakukan **analisis vintage/durasi** untuk menemukan indikator penipuan klaim awal dan celah under-reserving",
      "Merancang **UI yang sepenuhnya responsif** dengan CSS kustom dan grafik Plotly menggunakan palet warna khas AXA",
      "Mengemas **arsitektur modular** (app.py, components.py, config.py) untuk pemeliharaan yang mudah",
    ],
    result: [
      "KPI portofolio yang dilacak: 156.301 polis aktif · **GWP Rp 2,51 Triliun** · rasio kerugian campuran 49,3%",
      "Matriks risiko-imbalan mengungkap **Cabang K menyumbang ~47% premi nasional** — sebuah risiko konsentrasi yang ekstrem",
      "COB 4, 6, dan 7 teridentifikasi sebagai **segmen 'Bleeding'**, di mana klaim jauh melebihi pendapatan premi",
      "Reasuransi menurunkan Gross LR menjadi Net LR 45,79% (**↓3,55 pp**) — tetapi mengorbankan Margin Underwriting sebesar Rp 353,29 Miliar",
      "**Deteksi outlier IQR** menandai klaim ekstrem; Channel B menunjukkan **0% cadangan outstanding** (risiko under-reserving)",
      "Indikator awal penipuan: persentase klaim yang signifikan muncul dalam **30 hari pertama sejak polis berlaku**",
    ],
    keyResults: [
      "Prapemrosesan Skala Besar 156.301 Polis: Mengoptimalkan visualisasi portofolio premi aktif di dashboard Streamlit aktuaria",
      "Pemetaan Profitabilitas Rp 2,51T GWP: Mendeteksi rasio klaim ekstrim (under-reserving) dan performa profit cabang nasional",
      "7 Kasus Analitis Aktuaria Terintegrasi: Memodelkan vintage, deteksi outlier klaim IQR, dan efektivitas margin reasuransi",
    ],
    github: null,
    demo: null,
    liveUrl: null,
    featured: true,
    gradient: "from-blue-900/20 via-blue-800/10 to-transparent",
    icon: "🔷",
    codeSnippets: [
      {
        title: "Risk-Reward Matrix Categorization (Python)",
        language: "python",
        code: `def assign_quadrant(row, claim_threshold, gwp_threshold):
    # Determine strategic category based on Claims vs GWP limits
    if row['Total Claim Amount'] <= claim_threshold and row['GWP'] >= gwp_threshold:
        return 'Cash Cow (Low Claim, High Premium)'
    elif row['Total Claim Amount'] > claim_threshold and row['GWP'] < gwp_threshold:
        return 'Bleeding (High Claim, Low Premium)'
    elif row['Total Claim Amount'] > claim_threshold and row['GWP'] >= gwp_threshold:
        return 'High Risk, High Return'
    else:
        return 'Low Risk, Low Return'

# Apply quadrant mapping to actuarial dataset
filtered_df['Matrix Category'] = filtered_df.apply(
    lambda x: assign_quadrant(x, claim_limit, gwp_limit), axis=1
)`
      }
    ]
  },
  {
    id: "study-buddy-database",
    title: "Study Buddy: Platform Tutor Privat & Arsitektur Data Warehouse",
    category: "Business Intelligence",
    categoryColor: "text-amber-500",
    accentColor: "#f59e0b",
    year: "2025",
    projectType: "Tugas Kuliah",
    teamType: "Proyek Kelompok",
    roleInGroup: "Desainer UI/UX & Arsitek Alur Kerja",
    myImpact: "Merancang konsep gambar kabel (wireframe) antarmuka platform, menyusun tata letak antarmuka pengguna (UI/UX), dan menentukan alur transaksi operasional serta pencocokan kelas.",
    whatILearned: "Mendapatkan pengalaman praktis menggunakan Pentaho Data Integration, optimasi Star Schema (tabel Fakta vs Dimensi), serta autentikasi multi-role pada Laravel.",
    images: [
      "/projects/study-buddy/desktop/desktop-1.png",
      "/projects/study-buddy/desktop/desktop-2.png",
      "/projects/study-buddy/desktop/desktop-3.png",
      "/projects/study-buddy/desktop/desktop-4.png",
    ],
    deviceScreenshots: {
      desktop: [
        "/projects/study-buddy/desktop/desktop-1.png",
        "/projects/study-buddy/desktop/desktop-2.png",
        "/projects/study-buddy/desktop/desktop-3.png",
        "/projects/study-buddy/desktop/desktop-4.png",
        "/projects/study-buddy/desktop/desktop-5.png",
        "/projects/study-buddy/desktop/desktop-6.png",
        "/projects/study-buddy/desktop/desktop-7.png",
        "/projects/study-buddy/desktop/desktop-8.png",
        "/projects/study-buddy/desktop/desktop-9.png",
        "/projects/study-buddy/desktop/desktop-10.png",
      ],
      tablet: [],
      mobile: [],
    },
    description: "Platform web terpadu penyedia jasa tutor privat online berbasis Laravel & Tailwind CSS, dilengkapi dengan arsitektur database relasional MySQL, pipeline ETL Pentaho, dan rancangan OLAP Data Warehouse untuk business intelligence.",
    tech: ["MySQL", "Pentaho", "Laravel", "Tailwind CSS", "Vite", "Data Warehouse", "OLAP"],
    techIcons: [
      { name: "MySQL", iconUrl: "https://cdn.simpleicons.org/mysql/4479A1", color: "#4479A1" },
      { name: "Laravel", iconUrl: "https://cdn.simpleicons.org/laravel/FF2D20", color: "#FF2D20" },
      { name: "PHP", iconUrl: "https://cdn.simpleicons.org/php/777BB4", color: "#777BB4" },
      { name: "Tailwind CSS", iconUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "#06B6D4" },
      { name: "Vite", iconUrl: "https://cdn.simpleicons.org/vite/646CFF", color: "#646CFF" }
    ],
    problem: "Siswa SD, SMP, dan SMA sering mengalami kesulitan mencari tutor privat online yang kompeten dan terpercaya, sementara sistem administrasi kelas, jadwal sesi, dan pembayaran bimbingan belajar masih dikelola secara manual dan tidak terintegrasi. Selain itu, pihak manajemen platform tidak memiliki **media analisis terpusat** untuk mengidentifikasi tren pendaftaran siswa, pertumbuhan tutor, serta performa pendapatan bulanan.",
    action: [
      "Merancang **Entity Relationship Diagram (ERD)** transaksional MySQL (OLTP) dengan relasi antar tabel pengguna (`users`), siswa, tutor, mapel, kelas_pendaftaran, pendaftaran, transaksi, kelas, dan jadwal_sesi",
      "Mengembangkan **aplikasi web berbasis Laravel (PHP) & Tailwind CSS** dengan implementasi dashboard multi-role (Admin untuk verifikasi pendaftaran & keuangan, Tutor untuk kelola materi & jadwal, Siswa untuk katalog & pembayaran QRIS)",
      "Merancang arsitektur **Data Warehouse (OLAP) dengan Star Schema** yang terdiri dari 3 tabel fakta (`fact_pendapatan_sb`, `fact_pendaftaran_siswa_sb`, `fact_tutor_sb`) serta 4 tabel dimensi (`dim_siswa_sb`, `dim_tutor_sb`, `dim_mapel_sb`, `dim_waktu`)",
      "Mengembangkan **pipeline ETL (Extract, Transform, Load)** otomatis menggunakan Pentaho Data Integration (Spoon) dengan menyusun Transformation (`.ktr`) dan orchestration Job (`.etl_dw_sb.kjb`) berbasis path relatif",
    ],
    result: [
      "Berhasil mengimplementasikan **sistem basis data relasional MySQL (OLTP)** yang tangguh untuk memproses pencatatan transaksi pendaftaran bimbingan belajar siswa secara aman",
      "Membangun database **studybuddy_dw** berbasis OLAP Star Schema sebagai sumber kebenaran tunggal (single source of truth) untuk kebutuhan pelaporan bisnis bimbingan belajar",
      "Menyediakan data historis terstruktur yang siap digunakan untuk memantau pendapatan kotor/bersih, kuantitas minat belajar siswa, dan performa tutor aktif",
      "Mengeksekusi transformasi data dari database operasional ke DW secara berkala menggunakan automation script Pentaho Data Integration",
      "Menyajikan dashboard administratif interaktif yang mempercepat proses verifikasi bukti pembayaran QRIS dan alokasi penjadwalan kelas",
      "Memastikan aliran data end-to-end yang bersih dan terstandardisasi dari transaksi web Laravel hingga visualisasi metrik bisnis",
    ],
    keyResults: [
      "Pemodelan Star Schema Data Warehouse: Merancang database analitis OLAP dengan 3 fakta dan 4 dimensi untuk visualisasi KPI bisnis",
      "Otomasi ETL Pentaho Data Integration: Membangun alur transformasi terjadwal yang memindahkan data operasional OLTP ke DW",
      "Platform Web Multi-Role Laravel: Mengembangkan portal interaktif (Siswa, Tutor, Admin) terintegrasi sistem pembayaran QRIS",
    ],
    github: "https://github.com/aryayaya11/study-buddy",
    demo: null,
    liveUrl: null,
    featured: true,
    gradient: "from-amber-600/20 via-orange-600/10 to-transparent",
    icon: "🗄️",
    codeSnippets: [
      {
        title: "Registration Controller Logic (Laravel)",
        language: "php",
        code: `public function store(Request $request)
{
    $request->validate([
        'jenjang'   => 'required|string',
        'mapel_id'  => 'required|exists:mapel,mapel_id', 
        'durasi'    => 'required|integer',
        'jadwal_id' => 'required|exists:jadwal_sesi,jadwal_id',
    ]);

    $jenjang_db = strtolower($request->jenjang);

    $kelas = KelasPendaftaran::where('mapel_id', $request->mapel_id)
                             ->where('jenjang', $jenjang_db)
                             ->where('jadwal_id', $request->jadwal_id)
                             ->first();

    if (!$kelas) {
        return back()->with('error', 'Kelas tidak ditemukan.')->withInput();
    }

    $pendaftaran = Pendaftaran::create([
        'siswa_id'       => Auth::user()->user_id,
        'kelas_id'       => $kelas->kelas_id,
        'status'         => 'pending',
        'tanggal_daftar' => now(),
        'durasi'         => $request->durasi . '_bulan',
    ]);

    return redirect()->route('students.transaksi.create', $pendaftaran->daftar_id);
}`
      }
    ]
  },
  {
    id: "datmin-traveloka",
    title: "Traveloka Hotel Segmentation & Price Prediction",
    category: "Predictive Analytics",
    categoryColor: "text-indigo-500",
    accentColor: "#6366f1",
    year: "2025",
    projectType: "Tugas Kuliah",
    teamType: "Proyek Kelompok",
    roleInGroup: "Spesialis Playwright & Data Scraper",
    myImpact: "Membangun dan mengoptimalkan skrip scraping data web secara asinkron menggunakan Playwright untuk memintas pemuatan dinamis (lazy loading) dan mengumpulkan data akomodasi hotel di Surabaya dari Traveloka.",
    whatILearned: "Menguasai scraping asinkron dengan Playwright, mengevaluasi jumlah klaster menggunakan Silhouette score, dan mengatasi masalah target leakage pada model regresi.",
    images: [
      "/projects/datmin-traveloka/sebaran_harga_cluster.png",
      "/projects/datmin-traveloka/actual_vs_predicted.png",
      "/projects/datmin-traveloka/elbow_silhouette.png",
      "/projects/datmin-traveloka/feature_importance.png",
    ],
    deviceScreenshots: {
      desktop: [],
      tablet: [],
      mobile: [],
      charts: [
        "/projects/datmin-traveloka/sebaran_harga_cluster.png",
        "/projects/datmin-traveloka/actual_vs_predicted.png",
        "/projects/datmin-traveloka/elbow_silhouette.png",
        "/projects/datmin-traveloka/feature_importance.png",
      ],
    },
    description: "Pipeline data mining end-to-end untuk mengumpulkan data akomodasi Traveloka secara asinkron, melakukan segmentasi pasar hotel di Surabaya menggunakan K-Means Clustering, serta membangun model prediksi harga optimal berbasis Gradient Boosting Regressor.",
    tech: ["Python", "Playwright", "Scikit-Learn", "Pandas", "Jupyter"],
    techIcons: [
      { name: "Python", iconUrl: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
      { name: "Playwright", iconUrl: "https://playwright.dev/img/playwright-logo.svg", color: "#2EAD33" },
      { name: "Scikit-Learn", iconUrl: "https://cdn.simpleicons.org/scikitlearn/F7931E", color: "#F7931E" },
      { name: "Pandas", iconUrl: "https://cdn.simpleicons.org/pandas/150458", color: "#150458" },
      { name: "Jupyter", iconUrl: "https://cdn.simpleicons.org/jupyter/F37626", color: "#F37626" },
    ],
    problem: "Wisatawan sering mengalami kesulitan dalam menemukan akomodasi hotel di Surabaya yang sesuai dengan anggaran mereka karena **information overload** dan harga dinamis di platform OTA seperti Traveloka. Untuk mengatasi ini, dibutuhkan **sistem pengelompokan (segmentasi)** hotel secara objektif serta model **prediksi tolok ukur harga** sewa per malam berbasis fitur fisik hotel untuk membantu pengambilan keputusan yang rasional.",
    action: [
      "Merekayasa **web scraper asinkron** menggunakan Python Playwright API untuk mensimulasikan browser riil guna mengekstrak nama hotel, koordinat lokasi/kecamatan, harga per malam, rating skor, review, bintang, dan fasilitas dari 300+ hotel",
      "Melakukan **data preprocessing & feature engineering** yang kuat, termasuk ekstraksi teks review, penyaringan spasial wilayah Surabaya, estimasi jarak mengemudi ke Balai Kota Surabaya via Google Maps API, dan penanganan missing values",
      "Mengelompokkan hotel menggunakan algoritma **K-Means Clustering (K=3)** berdasarkan 5 atribut non-harga, mengevaluasi jumlah klaster optimal via **Elbow Method** dan **Silhouette Score**",
      "Membangun dan melatih model **Gradient Boosting Regressor** untuk prediksi harga hotel per malam dengan melakukan rekayasa fitur bebas kebocoran target (*target leakage prevention*), seperti kelas brand, rasio fasilitas/bintang, dan normalisasi logaritmik",
    ],
    result: [
      "Berhasil mengumpulkan dataset bersih sebanyak **304 data hotel di Surabaya** setelah melalui pembersihan data pencilan dan nilai kosong",
      "Mensegmentasikan pasar hotel menjadi **3 kelas segmentasi**: Cluster 0 (Murah: ≤ Rp 182.993,25), Cluster 1 (Menengah: Rp 182.993,25 - Rp 285.998,50), dan Cluster 2 (Mahal: ≥ Rp 285.998,50)",
      "Meningkatkan akurasi prediksi secara signifikan dari baseline Random Forest (R² 55,99%) menjadi **Gradient Boosting Regressor dengan akurasi R² 80,11%** dan RMSE **Rp 100.719,52**",
      "Menghindari *target leakage* secara efektif dengan memisahkan variabel harga target dari rekayasa fitur brand hotel (`is_budget`, `is_midscale`, `is_premium`) dan fitur interaksi",
      "Menemukan bahwa variabel brand premium (`is_premium`) serta fitur interaksi (`rating_x_log_review` dan `fasilitas_x_rating`) memberikan kontribusi kepentingan fitur (*feature importance*) terbesar",
      "Menyajikan visualisasi evaluasi performa model yang membandingkan sebaran harga klaster, visualisasi Elbow/Silhouette, kontribusi fitur, serta sebaran harga aktual vs prediksi",
    ],
    keyResults: [
      "Scraping Otomatis 304 Hotel Surabaya: Mengembangkan async scraper Playwright untuk mengumpulkan data pasar Traveloka real-time",
      "Segmentasi Pasar K-Means (K=3): Mengelompokkan akomodasi secara objektif menjadi kelas Murah, Menengah, dan Mahal berbasis fitur fisik",
      "Prediksi Akurat Model Gradient Boosting (R² 80,11%): Mengestimasi benchmark harga sewa kamar bebas kebocoran data (target leakage)",
    ],
    github: "https://github.com/aryayaya11/traveloka-segmentation-hotel",
    demo: null,
    liveUrl: null,
    featured: false,
    gradient: "from-indigo-600/20 via-blue-600/10 to-transparent",
    icon: "🏨",
    codeSnippets: [
      {
        title: "Asynchronous Web Scraper Loop (Playwright)",
        language: "python",
        code: `async def run():
    async with async_playwright() as p:
        context = await p.chromium.launch_persistent_context(...)
        page = context.pages[0] if context.pages else await context.new_page()
        
        await page.goto('https://www.traveloka.com/.../Surabaya')
        await page.wait_for_selector('.css-1dbjc4n...')
        
        while len(listnamahotel) <= 250:
            # Trigger lazy loading by scrolling to bottom
            await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            await asyncio.sleep(10)
            
            elements = await page.query_selector_all('.css-1dbjc4n...')
            for el in elements:
                nama_hotel = await (await el.query_selector('[data-testid="tvat-hotelName"]')).text_content()
                
                # Check for uniqueness before extracting detailed features
                if nama_hotel not in listnamahotel:
                    listnamahotel.append(nama_hotel)
                    
                    # Extract robust DOM nodes (Price, Location, Rating)
                    harga = await (await el.query_selector('[data-testid="tvat-hotelPrice"]')).text_content()
                    listharga.append(harga)
                    ...`
      }
    ]
  },
  {
    id: "bsi-text-clustering",
    title: "BSI Mobile App Review Clustering",
    category: "NLP & Text Mining",
    categoryColor: "text-purple-400",
    accentColor: "#9333ea",
    year: "2025",
    projectType: "Proyek Mandiri",
    teamType: "Proyek Mandiri",
    myImpact: "Membangun seluruh pipeline klasterisasi teks secara mandiri (tugas individu), mengoptimalkan prapemrosesan teks dengan metode Unique Word Stemming untuk mempercepat stemming sebesar 8x, serta menginjeksikan kosakata perbankan ke dalam stemmer Sastrawi.",
    whatILearned: "Belajar normalisasi slang bahasa Indonesia, konfigurasi TF-IDF, metrik klasterisasi teks, dan kustomisasi kamus Sastrawi.",
    images: [
      "/projects/bsi-text-clustering/desktop/desktop-1.png",
      "/projects/bsi-text-clustering/desktop/desktop-2.png",
      "/projects/bsi-text-clustering/desktop/desktop-3.png",
      "/projects/bsi-text-clustering/desktop/desktop-4.png",
    ],
    deviceScreenshots: {
      desktop: [],
      tablet: [],
      mobile: [],
      charts: [
        "/projects/bsi-text-clustering/desktop/desktop-1.png",
        "/projects/bsi-text-clustering/desktop/desktop-2.png",
        "/projects/bsi-text-clustering/desktop/desktop-3.png",
        "/projects/bsi-text-clustering/desktop/desktop-4.png",
      ],
    },
    description:
      "Pipeline NLP & Text Mining teroptimasi untuk menganalisis dan mengklasterkan ulasan pengguna aplikasi perbankan BSI (BSI Mobile & BYOND) dari Google Play Store. Menerapkan pembersihan data, perluasan reduplikasi, normalisasi slang/singkatan, kustomisasi stemmer Sastrawi, dan metode Unique Word Stemming (dictionary lookup) untuk memotong waktu pemrosesan data besar dari berjam-jam menjadi sekitar 30 menit.",
    tech: ["Python", "Scikit-Learn", "Sastrawi", "NLTK", "Pandas", "Seaborn", "Jupyter"],
    techIcons: [
      { name: "Python", iconUrl: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
      { name: "Scikit-Learn", iconUrl: "https://cdn.simpleicons.org/scikitlearn/F7931E", color: "#F7931E" },
      { name: "Pandas", iconUrl: "https://cdn.simpleicons.org/pandas/150458", color: "#150458" },
      { name: "Jupyter", iconUrl: "https://cdn.simpleicons.org/jupyter/F37626", color: "#F37626" },
    ],
    problem: "Aplikasi perbankan BSI memiliki **128.607 ulasan mentah** di Google Play Store (dibersihkan menjadi **58.407 ulasan** aktif periode 2023 - sekarang). Membaca dan menganalisis puluhan ribu ulasan mentah secara manual untuk menemukan isu kritis, bug teknis, atau kepuasan pengguna adalah hal yang mustahil. Dibutuhkan **analisis klasterisasi teks otomatis** untuk mengekstrak pola keluhan dan sentimen pengguna secara sistematis dari teks bahasa Indonesia yang tidak terstruktur dan penuh noise.",
    action: [
      "Melakukan pembersihan data, penghapusan null, deduplikasi teks, dan pemfilteran rentang waktu ulasan dari Januari 2023 hingga 2025 (menghasilkan **58.407 ulasan bersih**)",
      "Merancang ekspansi reduplikasi kata ulang berakhiran angka `2` (seperti `tiba2` menjadi `tiba tiba`) menggunakan Regular Expressions sebelum pembersihan numerik",
      "Menerapkan pencegahan penggabungan kata (*word merging prevention*) dengan mengganti karakter non-alfabet (seperti `/` dan `&`) dengan spasi sebelum proses pemangkasan whitespace",
      "Membangun kamus normalisasi slang dan singkatan kustom (*slang dictionary*) untuk memetakan kata tidak baku (seperti `gak` -> `tidak`, `yg` -> `yang`, `tf` -> `transfer`) ke bentuk baku",
      "Menambahkan kosakata teknis/inggris (seperti `update`, `error`, `transfer`, `qris`, `byond`, `login`, `otp`, `pin`, `saldo`) ke kamus internal stemmer Sastrawi agar stemming berjalan tepat",
      "Mengimplementasikan metode **Unique Word Stemming (dictionary lookup)** untuk meminimalkan beban komputasi stemming Sastrawi, memangkas waktu pemrosesan dataset besar dari berjam-jam menjadi sekitar 30 menit",
      "Mengekstrak fitur teks menggunakan **TF-IDF Vectorizer** dengan parameter `max_features=1000, min_df=5, max_df=0.8`",
      "Melatih algoritma **K-Means Clustering** (k=5, random_state=42) untuk mensegmentasi ulasan ke dalam 5 klaster topik utama",
      "Melakukan analisis tren rating bulanan, korelasi volume vs rating, peta kata kunci dominan, dan analisis responsivitas dukungan pengembang (*developer responsiveness*)",
    ],
    result: [
      "**Klasterisasi K-Means (5 Klaster)**: Mensegmentasikan ulasan ke dalam 3 klaster kepuasan tinggi (Klaster 0, 1, 2, 4 dengan rating rata-rata >4,8★) dan 1 klaster keluhan teknis mayoritas (Klaster 3 berisi **33.035 ulasan** dengan rating rata-rata **2,85★** terkait error, login, update, dan transfer)",
      "**Polarisasi Sentimen Biner**: Menemukan polarisasi ekstrem di mana **65,6%** pengguna memberikan rating **5★** (puas kestabilan umum) dan **22,2%** memberikan rating **1★** (mengalami kendala fatal), dengan sangat sedikit ulasan netral di antaranya",
      "**Identifikasi Outage & Crash HP Spesifik**: Mendeteksi anomali rating bulanan terendah (**2,01★**) pada Mei 2023 akibat gangguan sistem IT nasional BSI, serta mendeteksi lonjakan keluhan crash berkelanjutan sepanjang tahun 2024 pada tipe HP tertentu (seperti Samsung A13) setelah rilis pembaruan versi `6.22.1` dan `6.22.3`",
      "**Analisis Masalah Utama Pengguna**: Memetakan kata kunci keluhan di mana isu *Error & Crashes* dikeluhkan oleh 7,8% ulasan (avg rating **1,92**), disusul kendala *Login & Akses* (5,3%, avg rating **2,12**), masalah *SMS OTP* dengan rating terendah (2,4%, avg rating **1,66** akibat pulsa terpotong tanpa OTP masuk), serta resistensi migrasi ke aplikasi *BYOND* (0,8%, avg rating **2,66**)",
      "**Evaluasi Dukungan Developer**: Menemukan tingkat respons pengembang yang sangat aktif dengan membalas **99,86%** dari total ulasan, memprioritaskan keluhan kritis dengan membalas **99,6%** ulasan bintang 1 dan **99,9%** ulasan bintang 2 (rata-rata waktu tanggapan 2,36 hari)",
    ],
    keyResults: [
      "Unique Word Stemming Teroptimasi: Memotong waktu stemming Sastrawi dari berjam-jam menjadi sekitar 30 menit menggunakan dictionary lookup pada 19.582 kata unik",
      "Identifikasi Isu Kritis & Pola Outage: Mendeteksi anomali gangguan IT nasional Mei 2023, crash HP Samsung A13 pasca-update, dan isu pemotongan pulsa SMS OTP",
      "Analisis Layanan Pelanggan (Customer Support): Menganalisis 99,86% tanggapan pengembang, membuktikan prioritas pada keluhan kritis bintang 1 & 2 dengan rata-rata waktu balas 2,36 hari",
    ],
    github: "https://github.com/aryayaya11/BSI-segmentation",
    demo: null,
    liveUrl: null,
    featured: false,
    gradient: "from-purple-600/20 via-violet-600/10 to-transparent",
    icon: "🔍",
    codeSnippets: [
      {
        title: "Indonesian NLP Preprocessing Pipeline (Python)",
        language: "python",
        code: `# 1. Kamus normalisasi slang & ekspansi stopwords kustom
stop_words = set(stopwords.words('indonesian'))
custom_stopwords = {'bsi', 'aplikasi', 'mobile', 'bank', 'byond', 'sih', 'deh', 'dong', 'yang', 'di', 'ke', 'dari'}
stop_words.update(custom_stopwords)

slang_dict = {
    'gak': 'tidak', 'ga': 'tidak', 'ngak': 'tidak', 'gk': 'tidak',
    'yg': 'yang', 'dgn': 'dengan', 'utk': 'untuk', 'tp': 'tapi',
    'klo': 'kalau', 'kalo': 'kalau', 'krn': 'karena',
    'sy': 'saya', 'dr': 'dari', 'mo': 'mau', 'aja': 'saja',
    'eror': 'error', 'tf': 'transfer', 'hp': 'handphone', 'updet': 'update'
}

# 2. Tambahkan kata dasar teknis/inggris ke kamus internal Sastrawi
sastrawi_dict = stemmer.delegatedStemmer.dictionary
technical_words = ['update', 'error', 'transfer', 'qris', 'byond', 'login', 'otp', 'pin', 'saldo']
sastrawi_dict.add_words(technical_words)

# 3. Preprocessing cepat menggunakan Unique Word Stemming (dictionary lookup)
stem_mapping = {}
for i, word in enumerate(unique_words):
    stem_mapping[word] = stemmer.stem(word) # pre-stem kata unik saja

def preprocess_text_fast(text):
    text = text.lower()
    # Ekspansi kata ulang berakhiran angka 2 (tiba2 -> tiba tiba)
    text = re.sub(r'\\b([a-zA-Z]+)2\\b', r'\\1 \\1', text)
    # Ganti non-alfabet dengan spasi untuk mencegah kata tergabung
    text = re.sub(r'[^a-zA-Z\\s]', ' ', text)
    text = re.sub(r'\\s+', ' ', text).strip()
    
    stemmed_words = []
    for word in text.split():
        word_normalized = slang_dict.get(word, word)
        if word_normalized not in stop_words:
            # Menggunakan dictionary lookup untuk performa tinggi
            stemmed_words.append(stem_mapping.get(word_normalized, word_normalized))
    return ' '.join(stemmed_words)

df['clean_content'] = df['content'].apply(preprocess_text_fast)`
      }
    ]
  },
  {
    id: "ai-vs-human-detection",
    title: "AI vs Human Text Detection",
    category: "Machine Learning",
    categoryColor: "text-sky-400",
    accentColor: "#0ea5e9",
    year: "2025",
    projectType: "Tugas Kuliah",
    teamType: "Proyek Kelompok",
    roleInGroup: "Pengevaluasi Model Machine Learning",
    myImpact: "Melakukan evaluasi perbandingan performa dari beberapa model machine learning (XGBoost, BERT, DistilBERT) pada metrik-metrik evaluasi klasifikasi teks.",
    whatILearned: "Belajar menggunakan API sequence classification Hugging Face, fine-tuning model deep learning dengan PyTorch, serta menganalisis trade-off generalisasi model.",
    images: [
      "/projects/ai-vs-human/ppt/slide-1.jpg",
      "/projects/ai-vs-human/ppt/slide-2.jpg",
      "/projects/ai-vs-human/ppt/slide-3.jpg",
    ],
    deviceScreenshots: {
      desktop: [],
      tablet: [],
      mobile: [],
    },
    description:
      "Pipeline klasifikasi NLP multi-model untuk mendeteksi apakah suatu teks ditulis oleh manusia atau AI. Membandingkan tiga arsitektur — TF-IDF + XGBoost, BERT Base Uncased, dan DistilBERT — pada tugas klasifikasi biner dengan 3.411 sampel.",
    tech: ["Python", "XGBoost", "BERT", "DistilBERT", "Scikit-Learn", "PyTorch", "Jupyter"],
    techIcons: [
      { name: "Python", iconUrl: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
      { name: "PyTorch", iconUrl: "https://cdn.simpleicons.org/pytorch/EE4C2C", color: "#EE4C2C" },
      { name: "Scikit-Learn", iconUrl: "https://cdn.simpleicons.org/scikitlearn/F7931E", color: "#F7931E" },
      { name: "Jupyter", iconUrl: "https://cdn.simpleicons.org/jupyter/F37626", color: "#F37626" },
    ],
    problem: "Dengan pesatnya proliferasi konten yang dihasilkan AI (GPT, Claude, Gemini), membedakan teks tulisan AI dari teks tulisan manusia telah menjadi tantangan kritis bagi pendidik, penerbit, dan platform konten. Proyek ini membangun dan mengevaluasi **berbagai model ML** untuk menyelesaikan tugas klasifikasi biner ini pada esai berbahasa Inggris.",
    action: [
      "Memuat dan menstandardisasi **3.411 data latih** dan **640 data uji** berupa sampel teks bahasa Inggris dengan label biner (0=Manusia, 1=AI)",
      "Menerapkan **pipeline prapemrosesan teks**: penghapusan URL, pembersihan tag HTML, dan normalisasi spasi",
      "Melakukan **Analisis Data Eksploratif (EDA)**: distribusi label, statistik jumlah kata, dan visualisasi kata yang paling sering muncul",
      "Membangun **baseline TF-IDF + XGBoost** (maksimum 5.000 fitur, n_estimators=100) dengan pembagian data (split) stratifikasi 80/20",
      "Menyetel ulang (fine-tuning) **BERT Base Uncased** (Hugging Face Transformers) untuk klasifikasi urutan pada tugas tersebut",
      "Menerapkan **DistilBERT** sebagai alternatif yang lebih ringan dan lebih cepat dari BERT penuh dengan kinerja yang sebanding",
      "Mengevaluasi semua model dengan **Matriks Kebingungan (Confusion Matrices)**, laporan klasifikasi (presisi, recall, F1-score)",
    ],
    result: [
      "**XGBoost (data latih)**: Akurasi 99,12% — hampir sempurna dalam distribusi (Manusia: F1 0,99, AI: F1 0,99)",
      "**XGBoost (data uji)**: Akurasi 83,28% — generalisasi yang baik (Manusia: F1 0,85, AI: F1 0,80)",
      "**Keseimbangan data latih**: hampir seimbang sempurna dengan 50,4% Manusia / 49,6% AI",
      "**BERT dan DistilBERT** diterapkan sebagai alternatif deep learning berbasis transformer untuk pemahaman semantik yang lebih tinggi",
      "Menunjukkan **pertukaran (trade-off) antara kompleksitas model dan generalisasi** di ketiga arsitektur yang berbeda",
    ],
    keyResults: [
      "Akurasi Model XGBoost 99,12% (Train): Melatih model klasifikasi biner berbasis TF-IDF untuk membedakan teks manusia vs buatan AI",
      "Benchmark 3 Arsitektur Klasifikasi: Membandingkan performa XGBoost dengan transformer canggih BERT dan DistilBERT",
      "Prapemrosesan & Evaluasi 4.051 Sampel: Melakukan pembersihan teks, visualisasi EDA sebaran kata, dan analisis matriks kebingungan",
    ],
    github: null,
    demo: null,
    liveUrl: null,
    featured: false,
    gradient: "from-sky-600/20 via-cyan-600/10 to-transparent",
    icon: "🤖",
    codeSnippets: [
      {
        title: "TF-IDF + XGBoost Classifier (Python)",
        language: "python",
        code: `# Text preprocessing
def clean_text(text):
    text = str(text)
    text = re.sub(r'http\\S+|www\\S+|https\\S+', '', text, flags=re.MULTILINE)
    text = re.sub(r'<.*?>', '', text)
    text = text.replace('\\n', ' ').replace('\\t', ' ')
    return re.sub(r'\\s+', ' ', text).strip()

df['Text'] = df['Text'].apply(clean_text)

# Stratified train/test split
X_train, X_test, y_train, y_test = train_test_split(
    sentences, labels, test_size=0.2,
    random_state=42, stratify=labels
)

# TF-IDF Vectorization (5000 features)
tfidf = TfidfVectorizer(max_features=5000, ngram_range=(1,1))
X_train_tfidf = tfidf.fit_transform(X_train)
X_test_tfidf  = tfidf.transform(X_test)

# XGBoost Classifier
model_xgb = XGBClassifier(
    use_label_encoder=False,
    eval_metric='logloss',
    n_estimators=100,
    learning_rate=0.1,
    random_state=42
)
model_xgb.fit(X_train_tfidf, y_train)

acc = accuracy_score(y_test, model_xgb.predict(X_test_tfidf))
# → Train accuracy: 99.12% | Test accuracy: 83.28%`
      }
    ]
  }
];

export const skills = {
  Programming: {
    icon: "💻",
    color: "from-blue-500 to-indigo-500",
    items: ["Python", "SQL", "TypeScript"],
  },
  "Data Analytics": {
    icon: "📊",
    color: "from-emerald-500 to-teal-500",
    items: [
      "Pembersihan Data",
      "Visualisasi Data",
      "Analisis Statistik",
      "Analisis Data Eksploratif",
    ],
  },
  "Machine Learning": {
    icon: "🤖",
    color: "from-violet-500 to-purple-500",
    items: ["Klasifikasi", "Regresi", "Klasterisasi", "Evaluasi Model"],
  },
  "Business Intelligence": {
    icon: "📈",
    color: "from-amber-500 to-orange-500",
    items: [
      "Power BI",
      "Pengembangan Dasbor",
      "Pemantauan KPI",
      "Pelaporan",
    ],
  },
  Tools: {
    icon: "🛠️",
    color: "from-cyan-500 to-sky-500",
    items: ["Git", "GitHub", "Streamlit", "Excel", "Canva"],
  },
  "Soft Skills": {
    icon: "🌟",
    color: "from-rose-500 to-pink-500",
    items: [
      "Kepemimpinan",
      "Komunikasi",
      "Manajemen Keuangan",
      "Pemecahan Masalah",
      "Kerja Sama Tim",
      "Manajemen Proyek",
    ],
  },
};

export const certifications = [
  {
    id: "komdigi-2026",
    title: "Data Scientist Scholarship 2026",
    issuer: "Komdigi Digital Talent Scholarship",
    year: "2026",
    images: [
      "/certifications/Sertifikat_ARYA PUTRA PERMANA_Data Scientist - Nasional-page-00001.jpg",
      "/certifications/Sertifikat_ARYA PUTRA PERMANA_Data Scientist - Nasional-page-00002.jpg"
    ],
    topics: [
      "Data-Driven Decision Making",
      "Technical Problem Definition",
      "Model Design Strategy",
      "Evaluasi Model",
    ],
    color: "from-blue-500/20 to-violet-500/20",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  {
    id: "ibm-data-analytics-pathway",
    title: "Data Analytics Fluency Pathway",
    issuer: "IBM SkillsBuild",
    year: "2026",
    images: [
      "/certifications/ibm/IBMDesign-0.jpg",
      "/certifications/ibm/IBMDesign-1.jpg",
      "/certifications/ibm/IBMDesign-2.jpg",
      "/certifications/ibm/IBMDesign-3.jpg",
      "/certifications/ibm/IBMDesign-4.jpg",
      "/certifications/ibm/IBMDesign-5.jpg",
      "/certifications/ibm/IBMDesign-6.jpg",
    ],
    topics: [
      "Fakta & Dasar Data (Data Fundamentals)",
      "Klasifikasi Data (Data Classification)",
      "Kegunaan Data Organisasi (Data Usability)",
      "Statistika Deskriptif & Inferensial",
      "Pengumpulan & Analisis Data",
      "Persiapan Data (Data Preparation)",
      "Visualisasi & Presentasi Data",
    ],
    color: "from-indigo-500/20 to-cyan-500/20",
    badgeColor: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  },
  {
    id: "sql-basic",
    title: "SQL (Basic) Certificate",
    issuer: "HackerRank",
    year: "2026",
    images: ["/certifications/sql_basic certificate-page-00001.jpg"],
    topics: [
      "Kueri Sederhana",
      "Relasi Database",
      "Fungsi Agregasi",
    ],
    color: "from-emerald-500/20 to-teal-500/20",
    badgeColor: "bg-emerald-500/20 text-emerald-500 border-emerald-500/30",
  }
];

export const awards = [
  {
    id: "fade-in-2025",
    title: "FADE-IN 2025",
    achievement: "International Delegate",
    year: "2025",
    images: [
      "/awards/fade-in/IMG-20250730-WA0107.jpg",
      "/awards/fade-in/IMG-20250805-WA0049.jpg",
      "/awards/fade-in/IMG-20250808-WA0003.jpg"
    ],
    color: "from-emerald-500/20 to-teal-500/20",
    type: "International Program",
  },
  {
    id: "kicc-2024",
    title: "Malaysian Choral Eisteddfod 2024",
    achievement: "Gold Medalist",
    year: "2024",
    images: [
      "/awards/mce/IMG-20241107-WA0002.jpg",
      "/awards/mce/IMG-20241107-WA0006.jpg",
      "/awards/mce/IMG-20241107-WA0011.jpg",
      "/awards/mce/IMG-20241125-WA0029.jpg"
    ],
    color: "from-yellow-500/20 to-amber-500/20",
    type: "International Competition",
  },
  {
    id: "choir-2024",
    title: "National Student Choir Competition 2024",
    achievement: "Finalist",
    year: "2024",
    images: [
      "/awards/lpsm/IMG-20240703-WA0027.jpg",
      "/awards/lpsm/Screenshot 2026-06-12 153533.png",
      "/awards/lpsm/Screenshot 2026-06-12 153623.png"
    ],
    color: "from-slate-500/20 to-zinc-500/20",
    type: "National Competition",
  },
];

export const toolboxItems = [
  { icon: "🐍", name: "Python", description: "Analisis Data" },
  { icon: "🗄️", name: "SQL", description: "Kueri Basis Data" },
  { icon: "📊", name: "Power BI", description: "Visualisasi" },
  { icon: "📈", name: "Excel", description: "Lembar Kerja" },
  { icon: "🔧", name: "Git", description: "Kontrol Versi" },
  { icon: "🐙", name: "GitHub", description: "Repositori" },
  { icon: "🌐", name: "Streamlit", description: "Aplikasi Web" },
  { icon: "📓", name: "Jupyter", description: "Buku Catatan" },
  { icon: "💻", name: "VS Code", description: "Penyunting Kode" },
  { icon: "🎨", name: "Canva", description: "Desain" },
  { icon: "☁️", name: "Google Workspace", description: "Produktivitas" },
];

export const navLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Pencapaian", href: "#achievements" },
  { label: "Teknologi", href: "#tech-stack" },
  { label: "Proyek", href: "#projects" },
  { label: "Kontak", href: "#contact" },
];
