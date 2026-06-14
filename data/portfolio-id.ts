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
  resumeUrl: "/resume.pdf",
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
};

export type Project = {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  accentColor: string;
  year: string;
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
      "Sebuah dasbor interaktif R Shiny untuk memantau tren deforestasi, penggunaan lahan pertanian, dan dampak bencana di seluruh provinsi Aceh menggunakan data statistik multi-tahun BPS.",
    tech: ["R", "R Shiny", "Leaflet", "BPS Data", "Statistical Classification"],
    techIcons: [
      { name: "R", iconUrl: "https://cdn.simpleicons.org/r/276DC3", color: "#276DC3" },
      { name: "Shiny", iconUrl: "https://raw.githubusercontent.com/rstudio/shiny/main/man/figures/logo.png", color: "#75AADB" },
      { name: "Leaflet", iconUrl: "https://cdn.simpleicons.org/leaflet/199900", color: "#199900" },
      { name: "OpenStreetMap", iconUrl: "https://cdn.simpleicons.org/openstreetmap/7EBC6F", color: "#7EBC6F" },
    ],
    problem: "**Provinsi Aceh** menghadapi percepatan deforestasi — kehilangan tutupan hutan seluas **39.683 Ha** pada tahun 2025 saja — namun pembuat kebijakan daerah tidak memiliki **alat yang terpadu dan real-time** untuk mengkorelasikan hilangnya hutan dengan peristiwa bencana. Data dari BPS tersebar di berbagai laporan PDF statis, sehingga mustahil untuk mengidentifikasi kabupaten mana yang memerlukan **intervensi segera**.",
    action: [
      "Mengumpulkan dan membersihkan **data multi-tahun (2021–2026)** mengenai tata guna lahan, pertanian, dan bencana dari publikasi BPS",
      "Merancang **sistem klasifikasi statistik** (Aman / Waspada / Darurat Pengawasan) menggunakan aturan ambang batas Q3",
      "Built an **interactive R Shiny web application** with 3 analytical tabs: Overview, Analisis Eksploratif, and Tentang Klasifikasi",
      "Mengintegrasikan **peta choropleth Leaflet** dengan tooltip tingkat kabupaten yang dapat diklik, menunjukkan hilangnya hutan, jumlah bencana, dan desa yang terdampak",
      "Mengembangkan **grafik tren sumbu ganda** yang mengkorelasikan hilangnya hutan dengan frekuensi bencana yang relevan per tahun",
      "Membuat **bagan gelembung (bubble charts)** untuk memvisualisasikan hubungan 3 arah antara deforestasi, bencana, dan produktivitas pertanian",
      "Mengimplementasikan **tata letak responsif penuh** yang diuji di berbagai ukuran layar desktop, tablet, dan ponsel",
    ],
    result: [
      "Mengidentifikasi hilangnya total hutan seluas **39.683 Ha** di seluruh provinsi Aceh pada tahun 2025, yang berdampak pada **1.136 desa**",
      "Mengklasifikasikan ke-23 kabupaten/kota ke dalam tingkat risiko — mengungkap **Bener Meriah sebagai Darurat Pengawasan** dengan hilangnya hutan 3.481 Ha dan 22 peristiwa bencana",
      "Mengungkap bahwa **Kebakaran hutan** merupakan **64,8%** dari semua bencana yang relevan — jenis ancaman dominan",
      "**Aceh Utara menduduki peringkat #1** dalam produksi beras meskipun berstatus Waspada — menyoroti risiko ketahanan pangan",
      "Dasbor ini memproses dan memvisualisasikan **data multi-dimensi selama 5 tahun** secara real-time dengan pemfilteran dinamis",
      "Berhasil diuji pada **3 kategori perangkat**, memastikan aksesibilitas bagi petugas lapangan yang menggunakan perangkat seluler",
    ],
    keyResults: [
      "39.683 Ha hutan hilang (2025)",
      "1.136 desa terdampak",
      "Klasifikasi risiko 3 tingkat",
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
      "156.301 polis aktif",
      "Rp 2,51T GWP dianalisis",
      "7 studi kasus analitis",
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
    title: "Study Buddy Database Architecture",
    category: "Business Intelligence",
    categoryColor: "text-amber-500",
    accentColor: "#f59e0b",
    year: "2025",
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
    description: "Arsitektur basis data dan data warehouse yang komprehensif untuk 'Study Buddy', platform bimbingan belajar online privat. Dilengkapi dengan database transaksional MySQL, pipeline ETL Pentaho, dan dasbor analitik OLAP.",
    tech: ["MySQL", "Pentaho", "Laravel", "Tailwind CSS", "Vite", "Data Warehouse", "OLAP"],
    techIcons: [
      { name: "MySQL", iconUrl: "https://cdn.simpleicons.org/mysql/4479A1", color: "#4479A1" },
      { name: "Laravel", iconUrl: "https://cdn.simpleicons.org/laravel/FF2D20", color: "#FF2D20" },
      { name: "PHP", iconUrl: "https://cdn.simpleicons.org/php/777BB4", color: "#777BB4" },
      { name: "Tailwind CSS", iconUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "#06B6D4" },
      { name: "Vite", iconUrl: "https://cdn.simpleicons.org/vite/646CFF", color: "#646CFF" }
    ],
    problem: "Study Buddy membutuhkan **sistem terstruktur** untuk mengelola interaksi tutor-siswa, penjadwalan kelas, dan transaksi pembayaran. Selanjutnya, untuk mendukung pertumbuhan bisnis, data historis perlu diubah menjadi **wawasan analitis** bagi para eksekutif.",
    action: [
      "Merancang **Entity Relationship Diagram (ERD)** dan **Physical Data Model (PDM)** untuk operasi inti platform.",
      "Membangun **Data Warehouse** menggunakan Star Schema dengan tabel Fakta terpusat (Siswa, Tutor, Pendapatan).",
      "Mengembangkan **pipeline ETL** menggunakan Pentaho Data Integration untuk mengekstraksi, membersihkan, dan memuat data dari MySQL ke dalam Data Warehouse.",
      "Mengintegrasikan **hasil analitik OLAP** ke dalam dasbor interaktif Laravel untuk pemantauan real-time."
    ],
    result: [
      "Berhasil mengimplementasikan **basis data relasional yang skalabel** yang mampu menangani transaksi bimbingan belajar yang kompleks dengan aman.",
      "Membangun Data Warehouse yang andal sebagai **sumber kebenaran tunggal (single source of truth)** untuk business intelligence.",
      "Menghasilkan **dasbor administratif** yang memvisualisasikan tren pendapatan, pendaftaran siswa, dan pertumbuhan tutor secara real-time."
    ],
    keyResults: [
      "Data Warehouse Star Schema",
      "Pipeline ETL Pentaho",
      "Dasbor Laravel",
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
    images: [
      "/projects/datmin-traveloka/desktop/desktop-1.png",
    ],
    deviceScreenshots: {
      desktop: [
        "/projects/datmin-traveloka/desktop/desktop-1.png",
      ],
      tablet: [],
      mobile: [],
    },
    description: "Pipeline data mining end-to-end untuk mensegmentasi hotel dan memprediksi harga akomodasi di Surabaya menggunakan K-Means Clustering dan Regresi Random Forest berdasarkan data hasil scraping Traveloka.",
    tech: ["Python", "Playwright", "Scikit-Learn", "Pandas", "Jupyter"],
    techIcons: [
      { name: "Python", iconUrl: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
      { name: "Playwright", iconUrl: "https://playwright.dev/img/playwright-logo.svg", color: "#2EAD33" },
      { name: "Scikit-Learn", iconUrl: "https://cdn.simpleicons.org/scikitlearn/F7931E", color: "#F7931E" },
      { name: "Pandas", iconUrl: "https://cdn.simpleicons.org/pandas/150458", color: "#150458" },
      { name: "Jupyter", iconUrl: "https://cdn.simpleicons.org/jupyter/F37626", color: "#F37626" },
    ],
    problem: "Wisatawan sering kesulitan menemukan akomodasi optimal di Surabaya yang sesuai dengan anggaran mereka karena **informasi berlebihan (information overload)** di OTA seperti Traveloka. Diperlukan pengelompokan hotel secara logis ke dalam segmen pasar dan memprediksi **tolok ukur harga** berdasarkan fitur seperti lokasi dan peringkat bintang.",
    action: [
      "Merekayasa **web scraper asinkron** menggunakan Playwright untuk mengekstraksi data hotel langsung dari antarmuka dinamis Traveloka.",
      "Melakukan **Analisis Data Eksploratif (EDA)** dan prapemrosesan data yang kuat untuk menangani nilai yang hilang.",
      "Menerapkan **K-Means Clustering** untuk mengelompokkan hotel ke dalam segmen pasar yang berbeda dan dapat ditindaklanjuti (misalnya, hemat, mewah) berdasarkan fitur-fiturnya.",
      "Membangun dan menyetel model **Regresi Random Forest** untuk memprediksi harga akomodasi secara akurat berdasarkan atribut yang diekstraksi."
    ],
    result: [
      "Berhasil mengekstraksi dataset bersih dari **250+ hotel di Surabaya**, melewati batasan pemuatan dinamis.",
      "Mengelompokkan akomodasi ke dalam **klaster yang berbeda**, memudahkan perbandingan nilai harga terhadap kualitas (value-for-money) di berbagai tingkatan hotel.",
      "Melatih model Random Forest yang mampu memprediksi harga hotel, menetapkan **tolok ukur harga yang andal** berdasarkan data pasar.",
      "Menyelesaikan **alur kerja data mining menyeluruh** mulai dari web scraping mentah hingga penerapan machine learning."
    ],
    keyResults: [
      "250+ Hotel Di-scrape",
      "Disegmentasi dengan K-Means",
      "Prediksi Random Forest",
    ],
    github: null,
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
    images: [
      "/projects/bsi-text-clustering/desktop/desktop-1.png",
      "/projects/bsi-text-clustering/desktop/desktop-2.png",
      "/projects/bsi-text-clustering/desktop/desktop-3.png",
      "/projects/bsi-text-clustering/desktop/desktop-4.png",
    ],
    deviceScreenshots: {
      desktop: [
        "/projects/bsi-text-clustering/desktop/desktop-1.png",
        "/projects/bsi-text-clustering/desktop/desktop-2.png",
        "/projects/bsi-text-clustering/desktop/desktop-3.png",
        "/projects/bsi-text-clustering/desktop/desktop-4.png",
      ],
      tablet: [],
      mobile: [],
    },
    description:
      "Pipeline teks mining NLP end-to-end untuk mengklasterkan 128.000+ ulasan aplikasi BSI Mobile dari Google Play menggunakan vektorisasi TF-IDF dan K-Means clustering, dengan prapemrosesan Bahasa Indonesia penuh melalui stemming Sastrawi.",
    tech: ["Python", "Scikit-Learn", "Sastrawi", "NLTK", "Pandas", "Seaborn", "Jupyter"],
    techIcons: [
      { name: "Python", iconUrl: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
      { name: "Scikit-Learn", iconUrl: "https://cdn.simpleicons.org/scikitlearn/F7931E", color: "#F7931E" },
      { name: "Pandas", iconUrl: "https://cdn.simpleicons.org/pandas/150458", color: "#150458" },
      { name: "Jupyter", iconUrl: "https://cdn.simpleicons.org/jupyter/F37626", color: "#F37626" },
    ],
    problem: "BSI Mobile telah mengumpulkan **128.607 ulasan pengguna** di Google Play, namun tidak ada cara sistematis untuk memahami apa yang dikeluhkan atau dipuji pengguna. Membaca ribuan ulasan secara manual adalah mustahil — sebuah **pendekatan clustering berbasis data** diperlukan untuk memunculkan kelompok wawasan yang dapat ditindaklanjuti dari teks bahasa Indonesia mentah yang tidak terstruktur.",
    action: [
      "Memuat dan membersihkan **128.607 ulasan mentah** (109.322 setelah deduplikasi dan penghapusan nilai null) dari dataset BSI Google Play",
      "Menerapkan **pipeline prapemrosesan NLP Bahasa Indonesia**: lowercasing, pembersihan regex, penghapusan stopword NLTK, dan **stemming morfologis Sastrawi**",
      "Menerapkan **vektorisasi TF-IDF** (maksimum 1.000 fitur, min_df=5, max_df=0,8) untuk mengubah teks menjadi matriks fitur 2.000×493",
      "Melatih **model K-Means** (k=5, n_init=10, random_state=42) untuk mensegmentasi ulasan ke dalam 5 klaster perilaku yang berbeda",
      "Menganalisis setiap klaster melalui **kata TF-IDF teratas**, peringkat rata-rata, dan contoh ulasan yang representatif",
      "Menghasilkan **visualisasi** (distribusi peringkat, diagram batang ukuran klaster) menggunakan Matplotlib dan Seaborn",
    ],
    result: [
      "**Klaster 0 (307 ulasan, rata-rata 2,87★)**: Keluhan migrasi BSI Mobile vs. Byond — pengguna frustrasi dengan ketidakcocokan perangkat dengan aplikasi baru",
      "**Klaster 1 (260 ulasan, rata-rata 1,95★)**: Laporan error & crash aplikasi — dominasi kata 'error', 'eror', 'tolong'; klaster kegagalan UX yang kritis",
      "**Klaster 2 (62 ulasan, rata-rata 4,73★)**: Pengguna yang puas — kata kunci: 'mudah', 'cepat', 'amanah', 'nyaman' — klaster dengan peringkat tertinggi",
      "**Klaster 3 (1.191 ulasan, rata-rata 2,34★)**: Klaster ketidakpuasan terbesar — rasa frustrasi umum terkait transaksi, masalah saldo, dan keandalan sistem",
      "**Klaster 4 (180 ulasan, rata-rata 1,91★)**: Kegagalan pembukaan akun — pengguna tidak dapat mendaftar atau membuka rekening secara online",
      "Peringkat rata-rata keseluruhan: **2,40★** — 51,75% ulasan yang dijadikan sampel memberikan bintang 1, mengungkapkan ketidakpuasan pengguna yang parah",
    ],
    keyResults: [
      "128.607 ulasan dianalisis",
      "5 klaster perilaku pengguna",
      "Rata-rata 2,40★ terungkap",
    ],
    github: null,
    demo: null,
    liveUrl: null,
    featured: false,
    gradient: "from-purple-600/20 via-violet-600/10 to-transparent",
    icon: "🔍",
    codeSnippets: [
      {
        title: "Indonesian NLP Preprocessing Pipeline (Python)",
        language: "python",
        code: `# Initialize Sastrawi stemmer for Bahasa Indonesia
factory = StemmerFactory()
stemmer = factory.create_stemmer()

def preprocess_text(text):
    # Lowercase and remove non-alphabetic characters
    text = text.lower()
    text = re.sub(r'[^a-zA-Z\\s]', '', text)
    text = re.sub(r'\\s+', ' ', text).strip()

    # Remove Indonesian stopwords
    stop_words = set(stopwords.words('indonesian'))
    words = [w for w in text.split() if w not in stop_words]

    # Apply Sastrawi morphological stemming
    stemmed = [stemmer.stem(word) for word in words]
    return ' '.join(stemmed)

df['clean_content'] = df['content'].apply(preprocess_text)

# TF-IDF Vectorization
vectorizer = TfidfVectorizer(max_features=1000, min_df=5, max_df=0.8)
tfidf_matrix = vectorizer.fit_transform(df['clean_content'])
# → Shape: (2000, 493)

# K-Means Clustering
kmeans = KMeans(n_clusters=5, random_state=42, n_init=10)
df['cluster'] = kmeans.fit_predict(tfidf_matrix)`
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
      "Akurasi latih XGBoost 99,12%",
      "3 model dibandingkan",
      "4.051 sampel dianalisis",
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
