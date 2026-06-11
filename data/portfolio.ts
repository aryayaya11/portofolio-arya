// ============================================================
// PORTFOLIO DATA — Arya Putra Permana
// Edit this file to update your portfolio content
// ============================================================

export const personalInfo = {
  name: "Arya Putra Permana",
  shortName: "Arya",
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
  about: `I am a Data Science student at Universitas Airlangga with a strong interest in data analytics, business intelligence, machine learning, and evidence-based decision making.

Beyond technical skills, I have extensive experience in leadership, financial management, project coordination, and organizational governance through faculty-level and international activities.

My goal is to leverage data and analytical thinking to create measurable impact for businesses, institutions, and society.`,
  roles: [
    "Data Analyst Enthusiast",
    "Business Intelligence Enthusiast",
    "Data Science Student",
  ],
};

export const stats = [
  { label: "GPA", value: 3.18, suffix: "", decimals: 2 },
  { label: "Organizations & Committees", value: 10, suffix: "+", decimals: 0 },
  { label: "Projects", value: 5, suffix: "+", decimals: 0 },
  { label: "Funds Managed", value: 170, suffix: "M+", prefix: "Rp", decimals: 0 },
  { label: "Members Coordinated", value: 500, suffix: "+", decimals: 0 },
  { label: "International Programs", value: 3, suffix: "+", decimals: 0 },
];

export const experiences = [
  {
    id: "bem-ftmm",
    role: "Minister of Finance",
    organization: "BEM FTMM — Faculty Student Executive Board",
    period: "2025 – 2026",
    type: "Leadership",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
    ],
    responsibilities: [
      "Managed organizational funds exceeding Rp80,000,000 across 49 work programs",
      "Published monthly financial reports",
      "Conducted financial evaluations and accountability screenings",
      "Implemented budgeting efficiency strategies",
    ],
    impact: "Reduced operational costs while maintaining high program quality.",
    color: "from-blue-500/20 to-indigo-500/20",
    accentColor: "bg-blue-500",
  },
  {
    id: "psua-kicc",
    role: "Treasurer",
    organization: "PSUA Goes to KICC 2025",
    period: "2025",
    type: "Finance",
    images: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
    ],
    responsibilities: [
      "Managed funds exceeding Rp90,000,000",
      "Prepared periodic financial reports",
      "Coordinated funding discussions with the university",
    ],
    impact: "Ensured transparent and sustainable financial management.",
    color: "from-emerald-500/20 to-teal-500/20",
    accentColor: "bg-emerald-500",
  },
  {
    id: "kombo-ftmm",
    role: "Treasurer",
    organization: "KOMBO FTMM",
    period: "2026 – Present",
    type: "Finance",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    ],
    responsibilities: [
      "Manage financial administration",
      "Monitor organizational cash flow",
      "Support operational and project financing",
    ],
    impact: "Maintaining financial transparency across all departments.",
    color: "from-violet-500/20 to-purple-500/20",
    accentColor: "bg-violet-500",
  },
  {
    id: "icatam",
    role: "Liaison Officer",
    organization: "I-CATAM International Conference",
    period: "2025",
    type: "International",
    images: [
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop"
    ],
    responsibilities: [
      "Assisted international speakers and participants",
      "Conducted communication entirely in English",
      "Coordinated with multiple international institutions",
    ],
    impact: "Bridged communication between 3+ international institutions.",
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
    year: "2025",
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
      "/projects/axa-dashboard/desktop/desktop-1.png",
      "/projects/axa-dashboard/mobile/mobile-1.png",
    ],
    deviceScreenshots: {
      desktop: [
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
    featured: true,
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
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    ],
    deviceScreenshots: {
      desktop: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      ],
      tablet: [],
      mobile: [],
    },
    description: "A comprehensive database architecture and data warehouse for 'Study Buddy', a private online tutoring platform. Features MySQL transactional database, Pentaho ETL pipeline, and OLAP analytics dashboard.",
    tech: ["MySQL", "Pentaho", "Laravel", "Data Warehouse", "OLAP"],
    techIcons: [
      { name: "MySQL", iconUrl: "https://cdn.simpleicons.org/mysql/4479A1", color: "#4479A1" },
      { name: "Laravel", iconUrl: "https://cdn.simpleicons.org/laravel/FF2D20", color: "#FF2D20" },
      { name: "PHP", iconUrl: "https://cdn.simpleicons.org/php/777BB4", color: "#777BB4" }
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
    github: null,
    demo: null,
    liveUrl: null,
    featured: true,
    gradient: "from-amber-600/20 via-orange-600/10 to-transparent",
    icon: "🗄️"
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
    topics: [
      "Data-Driven Decision Making",
      "Technical Problem Definition",
      "Model Design Strategy",
      "Model Evaluation",
    ],
    color: "from-blue-500/20 to-violet-500/20",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
];

export const awards = [
  {
    id: "kicc-2024",
    title: "Malaysian Choral Eisteddfod 2024",
    achievement: "Gold Medalist",
    year: "2024",
    emoji: "🥇",
    color: "from-yellow-500/20 to-amber-500/20",
    type: "International Competition",
  },
  {
    id: "choir-2024",
    title: "National Student Choir Competition 2024",
    achievement: "Finalist",
    year: "2024",
    emoji: "🏆",
    color: "from-slate-500/20 to-zinc-500/20",
    type: "National Competition",
  },
  {
    id: "fade-in-2025",
    title: "FADE-IN 2025",
    achievement: "International Delegate",
    year: "2025",
    emoji: "🌏",
    color: "from-emerald-500/20 to-teal-500/20",
    type: "International Program",
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
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
