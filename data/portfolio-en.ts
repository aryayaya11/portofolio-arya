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
  major: "Data Science Technology",
  status: "Undergraduate Data Science Student",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop", // placeholder profile image
  email: "aryaputrapermana1@gmail.com", // update with real email
  linkedin: "www.linkedin.com/in/aryaputrapermana", // update
  github: "https://github.com/aryayaya11", // update
  instagram: "https://www.instagram.com/aryaa.puttra/", // update
  resumeUrl: "/resume.pdf",
  tagline: "Building data-driven solutions through analytics, leadership, and impactful decision making.",
  about: `As an undergraduate Data Science student at Universitas Airlangga, I am deeply passionate about translating complex datasets into strategic, evidence-based decisions. I thrive at the intersection of analytics, statistics, and business intelligence, with hands-on experience building machine learning models, designing data warehouses, and crafting interactive dashboards.

My technical toolkit includes Python, SQL, R, and Microsoft Excel—but I believe that data is only as good as the story it tells. Beyond technical problem-solving, I bring strong communication skills and collaborative experience from managing organizational finances and coordinating international programs.

Whether it's optimizing budgets or analyzing geospatial data, my ultimate goal is to bridge the gap between analytical rigor and real-world impact.`,
  roles: [
    "Data Analyst Enthusiast",
    "Business Intelligence Enthusiast",
    "Data Science Student",
  ],
};

export const stats = [
  { label: "Organizations & Committees", value: 10, suffix: "+", decimals: 0 },
  { label: "Projects", value: 5, suffix: "+", decimals: 0 },
  { label: "Funds Managed", value: 140, suffix: "M+", prefix: "Rp", decimals: 0 },
  { label: "Members Coordinated", value: 500, suffix: "+", decimals: 0 },
  { label: "International Programs", value: 3, suffix: "+", decimals: 0 },
];

export const experiences = [
  {
    id: "kombo-ftmm",
    role: "Treasurer",
    organization: "KOMBO FTMM",
    period: "2026 – Present",
    type: "Finance",
    images: [
      "/experiences/kombo/kombo-1.png"
    ],
    responsibilities: [
      "Supervised monthly cash flow and financial administration for over 70 active organization members.",
      "Directed the circulation of operational funds exceeding Rp60,000,000 throughout the governance period.",
      "Drafted and published comprehensive financial transparency reports on a monthly basis.",
    ],
    impact: "Ensured 100% financial accountability and fostered trust through transparent reporting.",
    color: "from-violet-500/20 to-purple-500/20",
    accentColor: "bg-violet-500",
  },
  {
    id: "bem-ftmm",
    role: "Minister of Finance",
    organization: "BEM FTMM — Faculty Student Executive Board",
    period: "2025 – 2026",
    type: "Leadership",
    images: [
      "/experiences/bem/bem-1.jpg",
      "/experiences/bem/bem-2.jpg",
      "/experiences/bem/bem-3.jpg"
    ],
    responsibilities: [
      "Directed organizational cash flow of over Rp80,000,000, distributed across 49 diverse work programs and 11 ministries.",
      "Formulated 10+ detailed Budget Plans (RAB) and led the public disclosure of monthly financial reports via social media.",
      "Recorded and audited over 20 financial transactions monthly to uphold strict financial accountability.",
      "Strategized budget efficiency during the planning phase, cutting costs by up to 50% for select programs without compromising quality.",
    ],
    impact: "Maximized resource allocation and significantly cut program expenditures while maintaining transparent public records.",
    color: "from-blue-500/20 to-indigo-500/20",
    accentColor: "bg-blue-500",
  },
  {
    id: "segta",
    role: "Liaison Officer",
    organization: "SEGTA (Sustainable Energy and Green Technology Application)",
    period: "2025",
    type: "International",
    images: [
      "/experiences/lo/lo-1.jpg",
      "/experiences/lo/lo-2.jpg",
      "/experiences/lo/lo-3.jpg",
      "/experiences/lo/lo-4.jpg"
    ],
    responsibilities: [
      "Guided and assisted over 80 international participants from Malaysia throughout a week-long international program.",
      "Managed the full itinerary and logistics, with the primary agenda held at Gili Iyang Island, Madura.",
      "Served as a cultural liaison, bridging cross-cultural communication to ensure a comfortable and interactive experience.",
      "Provided comprehensive social and cultural orientation, introducing Indonesian etiquette, batik, and local heritage.",
    ],
    impact: "Fostered strong cross-cultural exchange and ensured the smooth execution of a week-long international event.",
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
      "An interactive R Shiny dashboard monitoring deforestation trends, agricultural land use, and disaster impacts across Aceh province using multi-year BPS statistical data.",
    tech: ["R", "R Shiny", "Leaflet", "BPS Data", "Statistical Classification"],
    techIcons: [
      { name: "R", iconUrl: "https://cdn.simpleicons.org/r/276DC3", color: "#276DC3" },
      { name: "Shiny", iconUrl: "https://raw.githubusercontent.com/rstudio/shiny/main/man/figures/logo.png", color: "#75AADB" },
      { name: "Leaflet", iconUrl: "https://cdn.simpleicons.org/leaflet/199900", color: "#199900" },
      { name: "OpenStreetMap", iconUrl: "https://cdn.simpleicons.org/openstreetmap/7EBC6F", color: "#7EBC6F" },
    ],
    problem: "**Aceh province** faces accelerating deforestation — losing **39,683 Ha** of forest cover in 2025 alone — yet regional policymakers had no **unified, real-time tool** to correlate forest loss with disaster events. Data from BPS was fragmented across static PDF reports, making it impossible to identify which districts required **immediate intervention**.",
    action: [
      "Collected and cleaned **multi-year (2021–2026)** land use, agricultural, and disaster data from BPS publications",
      "Designed a **statistical classification system** (Aman / Waspada / Darurat Pengawasan) using Q3 threshold rules",
      "Built an **interactive R Shiny web application** with 3 analytical tabs: Overview, Analisis Eksploratif, and Tentang Klasifikasi",
      "Integrated **Leaflet choropleth maps** with clickable district-level tooltips showing forest loss, disaster count, and affected villages",
      "Developed **dual-axis trend charts** correlating forest loss with relevant disaster frequency per year",
      "Created **bubble charts** visualizing the 3-way relationship between deforestation, disasters, and agricultural productivity",
      "Implemented **fully responsive layout** tested across desktop, tablet, and mobile viewports",
    ],
    result: [
      "Identified **39,683 Ha** of total forest loss across Aceh province in 2025, affecting **1,136 villages**",
      "Classified all 23 kabupaten/kota into risk tiers — revealing **Bener Meriah as Darurat Pengawasan** with 3,481 Ha forest loss and 22 disaster events",
      "Revealed **Kebakaran hutan** (forest fire) accounts for **64.8%** of all relevant disasters — the dominant threat type",
      "**Aceh Utara ranked #1** in rice production despite Waspada classification — highlighting the food-security risk",
      "Dashboard processes and visualizes **5 years of multi-dimensional data** in real-time with dynamic filtering",
      "Successfully tested across **3 device categories**, ensuring accessibility for field officers using mobile devices",
    ],
    keyResults: [
      "39,683 Ha forest lost (2025)",
      "1,136 villages impacted",
      "3-tier risk classification",
    ],
    github: null,
    demo: null,
    liveUrl: null,
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
    title: "AXA Insurance Executive Dashboard",
    category: "Insurance Analytics",
    categoryColor: "text-blue-400",
    accentColor: "#00008F",
    year: "2026",
    images: [
      "/projects/axa-dashboard/desktop/cover.png",
      "/projects/axa/ppt/slide-1.png",
      "/projects/axa/ppt/slide-2.png",
      "/projects/axa/ppt/slide-3.png",
    ],
    deviceScreenshots: {
      desktop: [
        "/projects/axa-dashboard/desktop/cover.png",
        "/projects/axa-dashboard/desktop/desktop-1.png",
        "/projects/axa-dashboard/desktop/desktop-2.png",
        "/projects/axa-dashboard/desktop/desktop-3.png",
      ],
      tablet: [],
      mobile: [
        "/projects/axa-dashboard/mobile/mobile-1.png",
        "/projects/axa-dashboard/mobile/mobile-2.png",
        "/projects/axa-dashboard/mobile/mobile-3.png",
      ],
    },
    description:
      "A multi-case actuarial analytics dashboard built with Python Streamlit for AXA Insurance × Universitas Airlangga, covering 7 strategic portfolio analyses from risk-reward segmentation to reinsurance effectiveness and fraud detection.",
    tech: ["Python", "Streamlit", "Plotly", "Pandas", "Actuarial Analytics"],
    techIcons: [
      { name: "Python", iconUrl: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
      { name: "Streamlit", iconUrl: "https://cdn.simpleicons.org/streamlit/FF4B4B", color: "#FF4B4B" },
      { name: "Plotly", iconUrl: "https://cdn.simpleicons.org/plotly/3F4F75", color: "#3F4F75" },
      { name: "Pandas", iconUrl: "https://cdn.simpleicons.org/pandas/150458", color: "#150458" },
    ],
    problem: "AXA Insurance held a massive portfolio of **156,301 active policies** but had no unified tool to evaluate profitability, assess reinsurance ROI, or **detect extreme claim outliers/fraud**. Static Excel reports made **real-time decision-making impossible** for executives.",
    action: [
      "Engineered a **Streamlit web app** with 7 sequential analytical case studies navigable from a single persistent sidebar",
      "Built an interactive **Risk-Reward Matrix** (GWP vs. Total Claim) classifying segments into Cash Cow, High Risk-Return, Low Performer, and Bleeding",
      "Implemented **reinsurance effectiveness analysis**: Gross LR vs Net LR funnel, RWP-to-GWP ratio, and Underwriting Margin impact",
      "Applied **IQR-based outlier detection** on settled claims to identify extreme events requiring special capital reserves",
      "Performed **vintage/duration analysis** to surface early-claim fraud indicators and under-reserving gaps",
      "Designed a fully **responsive UI** with custom CSS and Plotly charts using the branded AXA color palette",
      "Packaged **modular architecture** (app.py, components.py, config.py) for maintainability",
    ],
    result: [
      "Portfolio KPIs tracked: 156,301 active policies · **Rp 2.51 Triliun GWP** · 49.3% blended loss ratio",
      "Risk-reward matrix revealed **Branch K contributes ~47% of national premium** — an extreme concentration risk",
      "COB 4, 6, and 7 identified as **'Bleeding' segments**, with claims far exceeding premium income",
      "Reinsurance reduced Gross LR to Net LR 45.79% (**↓3.55 pp**) — but cost Rp 353.29 Miliar in underwriting margin",
      "**IQR outlier detection** flagged extreme claims; Channel B showed **0% outstanding reserves** (under-reserving risk)",
      "Early-claim fraud indicator: significant % of claims appeared within **30 days of policy inception**",
    ],
    keyResults: [
      "156,301 active policies",
      "Rp 2.51T GWP analyzed",
      "7 analytical case studies",
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
    description: "An end-to-end data mining pipeline to segment hotels and predict accommodation prices in Surabaya using K-Means Clustering and Random Forest Regression based on Traveloka scraped data.",
    tech: ["Python", "Playwright", "Scikit-Learn", "Pandas", "Jupyter"],
    techIcons: [
      { name: "Python", iconUrl: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
      { name: "Playwright", iconUrl: "https://playwright.dev/img/playwright-logo.svg", color: "#2EAD33" },
      { name: "Scikit-Learn", iconUrl: "https://cdn.simpleicons.org/scikitlearn/F7931E", color: "#F7931E" },
      { name: "Pandas", iconUrl: "https://cdn.simpleicons.org/pandas/150458", color: "#150458" },
      { name: "Jupyter", iconUrl: "https://cdn.simpleicons.org/jupyter/F37626", color: "#F37626" },
    ],
    problem: "Tourists often struggle to find optimal accommodations in Surabaya that fit their budget due to **information overload** on OTAs like Traveloka. There is a need to logically group hotels into market segments and predict **pricing benchmarks** based on features like location and star rating.",
    action: [
      "Engineered an **asynchronous web scraper** using Playwright to extract hotel records directly from Traveloka's dynamic interface.",
      "Conducted **exploratory data analysis (EDA)** and robust preprocessing to handle missing values.",
      "Implemented **K-Means Clustering** to group hotels into distinct, actionable market segments (e.g., budget, luxury) based on their features.",
      "Built and tuned a **Random Forest Regression** model to accurately predict accommodation prices based on scraped attributes."
    ],
    result: [
      "Successfully extracted a clean dataset of **250+ hotels in Surabaya**, bypassing dynamic loading constraints.",
      "Segmented accommodations into **distinct clusters**, allowing for easy value-for-money comparisons across different hotel tiers.",
      "Trained a Random Forest model capable of predicting hotel prices, establishing a **reliable pricing benchmark** based on market data.",
      "Delivered a comprehensive **end-to-end data mining workflow** from raw web scraping to machine learning deployment."
    ],
    keyResults: [
      "250+ Hotels Scraped",
      "K-Means Segmented",
      "Random Forest Prediction",
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
    description: "A comprehensive database architecture and data warehouse for 'Study Buddy', a private online tutoring platform. Features MySQL transactional database, Pentaho ETL pipeline, and OLAP analytics dashboard.",
    tech: ["MySQL", "Pentaho", "Laravel", "Tailwind CSS", "Vite", "Data Warehouse", "OLAP"],
    techIcons: [
      { name: "MySQL", iconUrl: "https://cdn.simpleicons.org/mysql/4479A1", color: "#4479A1" },
      { name: "Laravel", iconUrl: "https://cdn.simpleicons.org/laravel/FF2D20", color: "#FF2D20" },
      { name: "PHP", iconUrl: "https://cdn.simpleicons.org/php/777BB4", color: "#777BB4" },
      { name: "Tailwind CSS", iconUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "#06B6D4" },
      { name: "Vite", iconUrl: "https://cdn.simpleicons.org/vite/646CFF", color: "#646CFF" }
    ],
    problem: "Study Buddy required a **structured system** to manage tutor-student interactions, class scheduling, and payment transactions. Furthermore, to support business growth, historical data needed to be transformed into **analytical insights** for executives.",
    action: [
      "Designed the **Entity Relationship Diagram (ERD)** and **Physical Data Model (PDM)** for core platform operations.",
      "Built a **Data Warehouse** using a Star Schema with centralized Fact tables (Students, Tutors, Revenue).",
      "Developed an **ETL pipeline** using Pentaho Data Integration to extract, clean, and load data from MySQL into the Data Warehouse.",
      "Integrated the **OLAP analytical results** into an interactive Laravel dashboard for real-time monitoring."
    ],
    result: [
      "Successfully implemented a **scalable relational database** capable of handling complex tutoring transactions securely.",
      "Established a reliable Data Warehouse providing a **single source of truth** for business intelligence.",
      "Delivered an **administrative dashboard** that visualizes revenue, student enrollment, and tutor growth trends in real-time."
    ],
    keyResults: [
      "Star Schema DW",
      "Pentaho ETL Pipeline",
      "Laravel Dashboard",
    ],
    github: "https://github.com/arfiantifputri/stubu",
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
      "An end-to-end NLP text mining pipeline to cluster 128,000+ BSI Mobile app reviews from Google Play using TF-IDF vectorization and K-Means clustering, with full Indonesian language preprocessing via Sastrawi stemming.",
    tech: ["Python", "Scikit-Learn", "Sastrawi", "NLTK", "Pandas", "Seaborn", "Jupyter"],
    techIcons: [
      { name: "Python", iconUrl: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
      { name: "Scikit-Learn", iconUrl: "https://cdn.simpleicons.org/scikitlearn/F7931E", color: "#F7931E" },
      { name: "Pandas", iconUrl: "https://cdn.simpleicons.org/pandas/150458", color: "#150458" },
      { name: "Jupyter", iconUrl: "https://cdn.simpleicons.org/jupyter/F37626", color: "#F37626" },
    ],
    problem: "BSI Mobile had accumulated **128,607 user reviews** on Google Play, but there was no systematic way to understand what users were actually complaining about or praising. Manually reading thousands of reviews is infeasible — a **data-driven clustering approach** was needed to surface actionable insight groups from raw unstructured Indonesian-language text.",
    action: [
      "Loaded and cleaned **128,607 raw reviews** (109,322 after deduplication and null removal) from the BSI Google Play dataset",
      "Implemented **Indonesian NLP preprocessing pipeline**: lowercasing, regex cleaning, NLTK stopword removal, and **Sastrawi morphological stemming**",
      "Applied **TF-IDF vectorization** (max 1,000 features, min_df=5, max_df=0.8) to transform text into a 2,000×493 feature matrix",
      "Trained a **K-Means model** (k=5, n_init=10, random_state=42) to segment reviews into 5 distinct behavioral clusters",
      "Analyzed each cluster via **top TF-IDF terms**, average rating, and representative sample reviews",
      "Generated **visualizations** (rating distribution, cluster size bar charts) using Matplotlib and Seaborn",
    ],
    result: [
      "**Cluster 0 (307 reviews, avg 2.87★)**: BSI Mobile vs. Byond migration complaints — users frustrated by phone incompatibility with new app",
      "**Cluster 1 (260 reviews, avg 1.95★)**: App error & crash reports — 'error', 'eror', 'tolong' dominate; critical UX failure cluster",
      "**Cluster 2 (62 reviews, avg 4.73★)**: Satisfied users — keywords: 'mudah', 'cepat', 'amanah', 'nyaman' — highest-rated cluster",
      "**Cluster 3 (1,191 reviews, avg 2.34★)**: Largest dissatisfied cluster — general frustration with transactions, saldo issues, and reliability",
      "**Cluster 4 (180 reviews, avg 1.91★)**: Account opening failures — users unable to register or open accounts online",
      "Overall average rating: **2.40★** — 51.75% of sampled reviews rated 1 star, revealing severe user dissatisfaction",
    ],
    keyResults: [
      "128,607 reviews analyzed",
      "5 behavioral clusters",
      "2.40★ avg rating revealed",
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
      "A multi-model NLP classification pipeline to detect whether text was written by a human or an AI. Compares three architectures — TF-IDF + XGBoost, BERT Base Uncased, and DistilBERT — on a 3,411-sample binary classification task.",
    tech: ["Python", "XGBoost", "BERT", "DistilBERT", "Scikit-Learn", "PyTorch", "Jupyter"],
    techIcons: [
      { name: "Python", iconUrl: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
      { name: "PyTorch", iconUrl: "https://cdn.simpleicons.org/pytorch/EE4C2C", color: "#EE4C2C" },
      { name: "Scikit-Learn", iconUrl: "https://cdn.simpleicons.org/scikitlearn/F7931E", color: "#F7931E" },
      { name: "Jupyter", iconUrl: "https://cdn.simpleicons.org/jupyter/F37626", color: "#F37626" },
    ],
    problem: "With the rapid proliferation of AI-generated content (GPT, Claude, Gemini), distinguishing AI-written text from human-written text has become a critical challenge for educators, publishers, and content platforms. This project builds and benchmarks **multiple ML models** to solve this binary classification problem on English-language essays.",
    action: [
      "Loaded and standardized **3,411 training** and **640 test** English text samples with binary labels (0=Human, 1=AI)",
      "Applied **text preprocessing pipeline**: URL removal, HTML tag stripping, whitespace normalization",
      "Performed **Exploratory Data Analysis (EDA)**: label distribution, word count statistics, and top frequent word visualization",
      "Built a **TF-IDF + XGBoost baseline** (max 5,000 features, n_estimators=100) with stratified 80/20 train-test split",
      "Fine-tuned **BERT Base Uncased** (Hugging Face Transformers) for sequence classification on the task",
      "Implemented **DistilBERT** as a lighter, faster alternative to full BERT with comparable performance",
      "Evaluated all models with **confusion matrices**, classification reports (precision, recall, F1-score)",
    ],
    result: [
      "**XGBoost (train set)**: 99.12% accuracy — near-perfect in-distribution fit (Human: F1 0.99, AI: F1 0.99)",
      "**XGBoost (test set)**: 83.28% accuracy — good generalization (Human: F1 0.85, AI: F1 0.80)",
      "**Training data balance**: near-perfectly balanced at 50.4% Human / 49.6% AI",
      "**BERT and DistilBERT** applied as transformer-based deep learning alternatives for higher semantic understanding",
      "Demonstrated the **trade-off between model complexity and generalization** across three distinct architectures",
    ],
    keyResults: [
      "99.12% XGBoost train accuracy",
      "3 models benchmarked",
      "4,051 samples analyzed",
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
      "Data Cleaning",
      "Data Visualization",
      "Statistical Analysis",
      "Exploratory Data Analysis",
    ],
  },
  "Machine Learning": {
    icon: "🤖",
    color: "from-violet-500 to-purple-500",
    items: ["Classification", "Regression", "Clustering", "Model Evaluation"],
  },
  "Business Intelligence": {
    icon: "📈",
    color: "from-amber-500 to-orange-500",
    items: [
      "Power BI",
      "Dashboard Development",
      "KPI Monitoring",
      "Reporting",
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
      "Leadership",
      "Communication",
      "Financial Management",
      "Problem Solving",
      "Teamwork",
      "Project Management",
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
      "Model Evaluation",
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
      "Simple Queries",
      "Relationships",
      "Aggregators",
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
  { icon: "🐍", name: "Python", description: "Data Analysis" },
  { icon: "🗄️", name: "SQL", description: "Database Query" },
  { icon: "📊", name: "Power BI", description: "Visualization" },
  { icon: "📈", name: "Excel", description: "Spreadsheet" },
  { icon: "🔧", name: "Git", description: "Version Control" },
  { icon: "🐙", name: "GitHub", description: "Repository" },
  { icon: "🌐", name: "Streamlit", description: "Web Apps" },
  { icon: "📓", name: "Jupyter", description: "Notebook" },
  { icon: "💻", name: "VS Code", description: "Code Editor" },
  { icon: "🎨", name: "Canva", description: "Design" },
  { icon: "☁️", name: "Google Workspace", description: "Productivity" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
