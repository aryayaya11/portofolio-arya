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
  resumeUrl: "https://drive.google.com/uc?export=download&id=1RAp2M9CzoBiIUnOSvQy1L6hWjhE7BPiX",
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
  { label: "Projects", value: 7, suffix: "+", decimals: 0 },
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
    id: "major-match",
    title: "Major & Match — AI-Powered Major Recommendation System",
    category: "AI / Web Application",
    categoryColor: "text-yellow-400",
    accentColor: "#facc15",
    year: "2026",
    projectType: "Course Project",
    teamType: "Group Project",
    roleInGroup: "Frontend Developer (Next.js) & Backend Developer (Flask API)",
    myImpact: "Built the Next.js interface featuring a two-phase swipe card mechanic (Neo-Brutalism + Framer Motion) and engineered the entire Flask REST API containing 10 secure endpoints connecting the ML models to the PostgreSQL database.",
    whatILearned: "Learned to build a full-stack AI platform: designing clean client-server architecture, integrating real-time ML computations (Cosine Similarity + Shannon Entropy) into a REST API, and modeling a PostgreSQL database schema to store granular beta testing research data.",
    images: [
      "/projects/major-match/desktop/desktop-1.png",
      "/projects/major-match/desktop/desktop-2.png",
      "/projects/major-match/desktop/desktop-3.png",
      "/projects/major-match/desktop/desktop-4.png",
    ],
    deviceScreenshots: {
      desktop: [
        "/projects/major-match/desktop/desktop-1.png",
        "/projects/major-match/desktop/desktop-2.png",
        "/projects/major-match/desktop/desktop-3.png",
        "/projects/major-match/desktop/desktop-4.png",
      ],
      tablet: [],
      mobile: [],
    },
    description: "An interactive AI platform that helps high school students discover college majors aligned with their interests. Replaces static questionnaires with a Tinder-style swipe card interface driven by Shannon Entropy Active Learning, maximizing Information Gain. Evaluated in an academic paper with a 236-major dataset and 15 simulated personas.",
    tech: ["Next.js", "TypeScript", "Python", "Flask", "Scikit-Learn", "PostgreSQL", "Framer Motion", "Pandas"],
    techIcons: [
      { name: "Next.js", iconUrl: "https://cdn.simpleicons.org/nextdotjs/ffffff", color: "#ffffff" },
      { name: "Python", iconUrl: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
      { name: "Flask", iconUrl: "https://cdn.simpleicons.org/flask/ffffff", color: "#ffffff" },
      { name: "PostgreSQL", iconUrl: "https://cdn.simpleicons.org/postgresql/4169E1", color: "#4169E1" },
      { name: "Scikit-Learn", iconUrl: "https://cdn.simpleicons.org/scikitlearn/F7931E", color: "#F7931E" },
    ],
    problem: "High school students face hundreds of unstructured major options with limited counsel, while existing tools — static questionnaires with dozens of fixed questions — fail to adapt to responses, leading to high abandonment rates. No system existed to adaptively learn user preferences in real-time to recommend majors based on genuine interests.",
    action: [
      "Built a **two-phase swipe card interface** in Next.js + Framer Motion with Neo-Brutalism styling: Phase 1 (20 RIASEC cards) → interest group distribution transition → Phase 2 (10 adaptive exploration cards)",
      "Developed **10 Flask REST API endpoints** (protected by Flask-Limiter & Marshmallow) connecting client UI to ML engine: `/api/next-card`, `/api/recommend`, `/api/question-response`, `/api/explore`, `/api/stats`, etc.",
      "Integrated **real-time ML computations** on the backend: Cosine Similarity over TF-IDF vectors, Rocchio feedback profiles, and Shannon Entropy Active Learning selection per card swipe",
      "Applied **Epsilon-Greedy exploration (15%)** in Flask to counter filter bubbles by forcing occasional recommendations from unexplored domains",
      "Designed a **5-table PostgreSQL database schema** for extensive Beta Testing: UserProfile, QuestionResponse (capturing `response_time_ms`), RecommendationResult, RecommendationFeedback, SessionEvaluation",
      "Created a **236-major exploration library**, career & salary detail pages, and a real-time admin metrics dashboard secured by `X-Admin-Key` header",
      "Assisted paper evaluation: tested system across **15 simulated persona scenarios** comparing TF-IDF, Hybrid, and Semantic (LSA) methods using Precision@3, Recall@3, and F1-Score@3 metrics",
    ],
    result: [
      "**Hybrid method** (TF-IDF 60% + explicit category profiles 40%) performed best: **Precision@3 = 1.000**, Recall@3 = 0.188, F1-Score = 0.293 — outperforming TF-IDF baseline (P@3=0.867) and LSA (P@3=0.889)",
      "Antarmuka **swipe card** successfully delivered Top 3 recommendations complete with match confidence, positive-response rationale, required skills, and career outlooks",
      "**Granular Beta Testing schema** captured milliseconds of user thinking time per question, stored and ready for export to CSV for academic thesis analyses",
      "EDA highlighted **cross-category lexical noise** in TF-IDF (generic phrases like 'communication skill' appearing across 86/236 majors), motivating the Hybrid category boost implementation",
      "Deployed system to Vercel (frontend) and Railway Cloud (PostgreSQL + Flask API), proving robust client-server concurrency during Beta Testing",
    ],
    keyResults: [
      "Hybrid Scoring Precision@3 = 1.000: Combining lexical matching with explicit category weights yielded perfect precision across simulated personas",
      "Active Learning via Shannon Entropy: Card selection dynamically optimizes for maximum Information Gain, resolving interest mapping in minimal interactions",
      "Full-Stack AI Platform: Next.js frontend + Flask API + PostgreSQL database schema fully integrated and deployed",
    ],
    github: "https://github.com/aryayaya11/major-match",
    demo: null,
    liveUrl: null,
    featured: true,
    gradient: "from-yellow-600/20 via-amber-600/10 to-transparent",
    icon: "🎓",
    codeSnippets: [
      {
        title: "Flask API — /api/next-card (Active Learning Endpoint)",
        language: "python",
        code: `@api_bp.route('/next-card', methods=['POST'])
@limiter.limit("60 per minute")
def get_next_card():
    """Main Active Learning endpoint: receives swipe history, returns optimal card."""
    payload = schema.load(request.json)  # Marshmallow validation
    history = payload['history']  # [{card_id, response: 'like'|'skip'}, ...]
    answered_ids = {h['card_id'] for h in history}

    # 1. Build user profile vector from swipe history via Rocchio
    user_vector = ml_service.build_user_vector(history)

    # 2. Active Learning: select card with highest Shannon Entropy
    candidates = [c for c in ALL_CARDS if c['id'] not in answered_ids]
    best_card = ml_service.select_next_card_entropy(
        user_vector, candidates, answered_ids
    )

    # 3. Epsilon-Greedy: 15% exploration probability to counter filter-bubble
    explored_rumpun = ml_service.get_explored_rumpun(history)
    if random.random() < EPSILON_EXPLORATION:
        unexplored = [c for c in candidates
                      if c['rumpun'] not in explored_rumpun]
        if unexplored:
            best_card = random.choice(unexplored)

    return jsonify({'card': best_card, 'session_id': payload['session_id']})`
      }
    ]
  },
  {
    id: "washtrack",
    title: "WashTrack — Smart Laundry Tracking Platform",
    category: "Web Application",
    categoryColor: "text-cyan-400",
    accentColor: "#06b6d4",
    year: "2026",
    projectType: "Course Project",
    teamType: "Group Project",
    roleInGroup: "Website Developer (Next.js)",
    myImpact: "Built the entire WashTrack platform in Next.js — from UI/UX design and cashier dashboard workflow to a custom jsQR-based QR Code scanner, automated WhatsApp notifications, interactive digital receipt, and real-time cross-tab status synchronization using the StorageEvent API.",
    whatILearned: "Learned to implement real-time state synchronization using the StorageEvent API, in-browser QR Code decoding with jsQR, and how to architect a two-sided workflow (cashier and customer) within a single Next.js App Router application.",
    images: [
      "/projects/washtrack/desktop/desktop-1.png",
      "/projects/washtrack/desktop/desktop-5.png",
      "/projects/washtrack/desktop/desktop-4.png",
      "/projects/washtrack/desktop/desktop-3.png",
    ],
    deviceScreenshots: {
      desktop: [
        "/projects/washtrack/desktop/desktop-1.png",
        "/projects/washtrack/desktop/desktop-2.png",
        "/projects/washtrack/desktop/desktop-5.png",
        "/projects/washtrack/desktop/desktop-4.png",
        "/projects/washtrack/desktop/desktop-3.png",
      ],
      tablet: [],
      mobile: [],
    },
    description: "A data-driven Smart Laundry platform built from social media mining of 554 clean tweets from X (Twitter). WashTrack provides real-time laundry status tracking, automated WhatsApp notifications, QR Code tracking, and an integrated cashier dashboard as a digital solution for UMKM-scale laundry businesses.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "jsQR", "qrcode.react", "LocalStorage API"],
    techIcons: [
      { name: "Next.js", iconUrl: "https://cdn.simpleicons.org/nextdotjs/ffffff", color: "#ffffff" },
      { name: "TypeScript", iconUrl: "https://cdn.simpleicons.org/typescript/3178C6", color: "#3178C6" },
      { name: "Tailwind CSS", iconUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "#06B6D4" },
      { name: "Framer Motion", iconUrl: "https://cdn.simpleicons.org/framer/0055FF", color: "#0055FF" },
      { name: "React", iconUrl: "https://cdn.simpleicons.org/react/61DAFB", color: "#61DAFB" },
    ],
    problem: "Data mining of **554 clean tweets from X (Twitter)** revealed that **173 tweets (31.6%)** contained complaints about conventional laundry services. The top complaints: **poor wash quality (25.73%)**, **late completion (21.05%)**, **lost/missing items (15.20%)**, high pricing (13.45%), and forgetting to pick up laundry (12.28%). Root cause: no digital system exists that integrates transaction recording, status tracking, and customer communication in one platform.",
    action: [
      "Designed the **WashTrack platform architecture with Next.js App Router** — 3 portals: Cashier Dashboard (`/dashboard`), Customer Self-Tracking Portal (`/track`), and Digital Receipt (`/pay/[id]`)",
      "Implemented a **dynamic laundry status workflow** that auto-adjusts stages based on service type (Wash & Iron → 5 stages, Iron Only → 3 stages, Wash/Fold → 4 stages)",
      "Built a **custom jsQR-based camera QR Code scanner** with smart frame downscaling for high performance on low-end devices, including a 1.5-second anti-double-firing cooldown",
      "Integrated **two-way automated WhatsApp notifications** via deep link API with emoji-safe formatting (`String.fromCodePoint`) — directly responding to the team's research findings on late completions & lack of status updates",
      "Implemented **real-time cross-tab status synchronization** using LocalStorage + StorageEvent API — no backend required — so customers can monitor laundry progress live from any device",
      "Developed an **interactive digital receipt** (`/pay/[id]`) with Framer Motion animated progress bars, QRIS payment simulation, and unique per-order QR Codes via qrcode.react",
      "Designed a **6-page Cashier Dashboard** (Dashboard, Orders, Scan QR, Customers, Notifications, Revenue) with automatic cost calculation and real-time input validation",
    ],
    result: [
      "Platform delivered a **complete cashier-side end-to-end workflow** — from order entry and step-by-step status updates to pickup confirmation via QR scan",
      "Customers can **monitor laundry status in real-time** from their phones without downloading an app or creating an account",
      "**Two-way automated WhatsApp notifications** were successfully implemented: on order entry (receipt + tracking link) and when laundry is ready for pickup (confirmation + QRIS)",
      "Custom QR scanner runs **without heavy libraries** — jsQR + frame downscaling maintains decode accuracy even on low-end devices",
      "Laundry status synchronizes **instantly across browser tabs** via StorageEvent API, proving a serverless architecture without WebSocket",
      "The website was built directly from **real user needs uncovered by the team's research** (mining 554 X/Twitter tweets), ensuring every feature addresses an identified complaint",
    ],
    keyResults: [
      "Custom QR Scanner Without Heavy Libraries: Built a jsQR-based camera decoder with smart downscaling for high performance on low-end devices",
      "Two-Way Automated WhatsApp Notifications: Integrated deep link API with emoji-safe message templates for order receipts & pickup confirmations",
      "Real-Time Cross-Tab Status Sync: Implemented live synchronization without WebSocket using StorageEvent API, letting customers track laundry remotely",
    ],
    github: "https://github.com/aryayaya11/washtrack",
    demo: null,
    liveUrl: null,
    featured: false,
    gradient: "from-cyan-600/20 via-sky-600/10 to-transparent",
    icon: "🧺",
    codeSnippets: [
      {
        title: "Real-Time Cross-Tab Status Sync (LocalStorage + StorageEvent)",
        language: "typescript",
        code: `// Cashier updates order status → auto-broadcasts to all customer tabs
const updateOrderStatus = (orderId: string, newStatus: string) => {
  const orders = getOrders();
  const updated = orders.map(o =>
    o.id === orderId ? { ...o, status: newStatus } : o
  );
  localStorage.setItem('washtrack_orders', JSON.stringify(updated));
  // StorageEvent broadcasts to all tabs with /pay/[id] open
};

// Customer receipt page (/pay/[id]) — listen for real-time updates
useEffect(() => {
  const handleStorageChange = (e: StorageEvent) => {
    if (e.key === 'washtrack_orders') {
      const orders = JSON.parse(e.newValue || '[]');
      const current = orders.find((o: Order) => o.id === orderId);
      if (current) setOrder(current); // Instantly update UI
    }
  };
  window.addEventListener('storage', handleStorageChange);
  return () => window.removeEventListener('storage', handleStorageChange);
}, [orderId]);`
      }
    ]
  },
  {
    id: "aceh-landwatch",
    title: "Aceh LandWatch Dashboard",
    category: "Geospatial Analytics",
    categoryColor: "text-emerald-400",
    accentColor: "#16a34a",
    year: "2026",
    projectType: "Class Assignment",
    teamType: "Group Project",
    roleInGroup: "UI/UX Designer & Quantitative Analyst",
    myImpact: "Designed the R Shiny UI/UX layouts, created the interactive user interface, and formulated the rule-based quartile statistical calculations (Q3 percentile thresholds) to classify district risk tiers.",
    whatILearned: "Learned how to implement interactive Leaflet maps, coordinate reactive data states in R Shiny, and apply Q3 percentile limits for geographic risk tiering.",
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
      "An interactive R Shiny dashboard designed to monitor, analyze, and visualize the relationships between land conversion (forest cover loss), agricultural activities, plantation sectors, and natural disaster intensity across 23 districts/cities in Aceh Province during the 2021–2025 period.",
    tech: ["R", "R Shiny", "Leaflet", "BPS Data", "Statistical Classification"],
    techIcons: [
      { name: "R", iconUrl: "https://cdn.simpleicons.org/r/276DC3", color: "#276DC3" },
      { name: "Shiny", iconUrl: "https://raw.githubusercontent.com/rstudio/shiny/main/man/figures/logo.png", color: "#75AADB" },
      { name: "Leaflet", iconUrl: "https://cdn.simpleicons.org/leaflet/199900", color: "#199900" },
      { name: "OpenStreetMap", iconUrl: "https://cdn.simpleicons.org/openstreetmap/7EBC6F", color: "#7EBC6F" },
    ],
    problem: "**Aceh province** faces accelerating deforestation — losing **39,683 Ha** of forest cover in 2025 alone — yet regional policymakers had no **unified, real-time tool** to correlate forest loss with disaster events. Data from BPS was fragmented across static PDF reports, making it impossible to identify which districts required **immediate intervention**.",
    action: [
      "Collected, cleaned, and integrated **multi-year (2021–2025) statistical data** from BPS Aceh concerning land use, agriculture, plantations, and natural disasters",
      "Designed a **rule-based statistical classification system** utilizing Q3 (75th percentile) thresholds to categorize districts into Red (Emergency Watch), Orange (Alert), and Green (Safe) risk tiers",
      "Built a modular **interactive Shiny web application** featuring dedicated analytical sections for Overview, Agriculture, Disasters, Plantations, and Correlation Analysis",
      "Integrated **interactive choropleth maps (GIS)** via Leaflet with click-to-sync features that dynamically update district filters when a region on the map is clicked",
      "Developed **dual-axis trend graphs** using Plotly to visualize the historical relationship between annual forest cover loss and natural disaster frequency",
      "Created **interactive bubble charts** mapping agricultural efficiency and region-level vulnerability scores",
      "Implemented a **fully responsive layout** with custom CSS to ensure seamless performance across desktop, tablet, and mobile devices",
    ],
    result: [
      "Identified **39,683 Ha** of total forest cover loss across Aceh province in 2025, directly impacting **1,136 villages**",
      "Classified all 23 districts/cities dynamically, flagging **Bener Meriah under Emergency Watch** (both forest loss and disasters >= Q3)",
      "Discovered that **forest/land fires** constitute the dominant natural hazard, accounting for **64.8%** of all relevant disaster events",
      "Highlighted food security risks in **Aceh Utara**, which ranked #1 in rice production despite its Alert status due to high disaster vulnerability",
      "Ensured fast spatial rendering performance with simplified GeoJSON boundaries and real-time multi-dimensional filtering",
      "Successfully verified layout responsiveness across desktop, tablet, and mobile viewports for field operations use",
    ],
    keyResults: [
      "Spatiotemporal Tracking of 39,683 Ha: Modeled forest cover loss dynamically to guide regional environmental protection policies",
      "Vulnerability Mapping for 1,136 Villages: Identified critical risk zones to optimize local disaster relief operations",
      "Data-Driven 3-Tier Risk Classification: Designed a rule-based statistical model using Q3 thresholds for high-risk mitigation",
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
    projectType: "Work Assignment",
    teamType: "Group Project",
    roleInGroup: "Streamlit Developer & Risk Analyst",
    myImpact: "Designed and built the Streamlit dashboard, performed multi-dimensional risk-reward matrix analysis (GWP vs. Claims), and mapped claim risk characteristics across different lines of business.",
    whatILearned: "Learned to apply actuarial modeling concepts to large datasets (156k+ policies) in Python, manage modular application states, and design executive-facing BI dashboards.",
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
      "Actuarial Modeling for 156,301 Policies: Optimized high-volume data visualization inside an interactive Streamlit application",
      "Risk Mapping of Rp 2.51T Gross Written Premium: Analyzed loss ratios, branch performance, and under-reserving risks",
      "7 Integrated Actuarial Case Studies: Engineered IQR claims outlier detection, vintage analytics, and reinsurance effectiveness",
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
    title: "Study Buddy: Private Tutoring Platform & Data Warehouse Architecture",
    category: "Business Intelligence",
    categoryColor: "text-amber-500",
    accentColor: "#f59e0b",
    year: "2025",
    projectType: "Class Assignment",
    teamType: "Group Project",
    roleInGroup: "UI/UX Designer & Workflow Architect",
    myImpact: "Designed the user experience (UI/UX) wireframes, structured platform interfaces, and defined the transactional user flows and class registration logic.",
    whatILearned: "Gained hands-on experience in Pentaho Data Integration, Star Schema optimization (Fact vs Dimension tables), and multi-role authorization in Laravel.",
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
    description: "A unified web application connecting students with private tutors built with Laravel & Tailwind CSS, complete with a MySQL transactional database, Pentaho ETL pipelines, and a Star Schema Data Warehouse for business intelligence.",
    tech: ["MySQL", "Pentaho", "Laravel", "Tailwind CSS", "Vite", "Data Warehouse", "OLAP"],
    techIcons: [
      { name: "MySQL", iconUrl: "https://cdn.simpleicons.org/mysql/4479A1", color: "#4479A1" },
      { name: "Laravel", iconUrl: "https://cdn.simpleicons.org/laravel/FF2D20", color: "#FF2D20" },
      { name: "PHP", iconUrl: "https://cdn.simpleicons.org/php/777BB4", color: "#777BB4" },
      { name: "Tailwind CSS", iconUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "#06B6D4" },
      { name: "Vite", iconUrl: "https://cdn.simpleicons.org/vite/646CFF", color: "#646CFF" }
    ],
    problem: "Elementary, junior, and high school students frequently face difficulties in finding competent online private tutors, while tutoring administration, class scheduling, and payment verification are managed manually and in silos. Furthermore, platform executives lacked a **centralized analytical dashboard** to identify student enrollment trends, tutor growth, and monthly revenue performance.",
    action: [
      "Designed a transactional **Entity Relationship Diagram (ERD)** on MySQL (OLTP), defining tables for users, students, tutors, subjects, registrations, transactions, and session schedules",
      "Developed a responsive **multi-role web platform** using Laravel (PHP) and Tailwind CSS, featuring specific access controls for Admin (payment/registration approvals), Tutors (material/schedule management), and Students (class catalog & QRIS upload)",
      "Designed an **OLAP Data Warehouse with a Star Schema**, consisting of 3 central Fact tables (`fact_pendapatan_sb`, `fact_pendaftaran_siswa_sb`, `fact_tutor_sb`) and 4 dimension tables (Student, Tutor, Subject, Time)",
      "Built an **ETL pipeline** via Pentaho Data Integration (Spoon), configuring Transformation files (`.ktr`) and orchestration Jobs (`.etl_dw_sb.kjb`) with relative paths to automate data extraction, cleaning, and surrogate key assignment",
    ],
    result: [
      "Successfully implemented a robust **MySQL relational database (OLTP)** to handle student class registration and payment transaction logging securely",
      "Established a dedicated Data Warehouse (`studybuddy_dw`) using a Star Schema layout as a **single source of truth** for business intelligence",
      "Provided structured historical datasets ready for analysis to track monthly revenue patterns, subject demand, and tutor growth trends",
      "Executed regular data transformations from OLTP to OLAP using Pentaho Data Integration automated ETL jobs",
      "Delivered an administrative dashboard that speeds up QRIS payment verification and class scheduling matching",
      "Created a standardized data pipeline from initial Laravel web forms up to executive business metric visualization",
    ],
    keyResults: [
      "Star Schema Data Warehouse Design: Architected an OLAP database with 3 facts and 4 dimensions for business KPI tracking",
      "Pentaho ETL Pipeline Automation: Built scheduled Jobs and Transformations to sync transactional data from OLTP to OLAP",
      "Laravel Multi-Role Web Platform: Developed an integrated portal for Tutors, Students, and Admins with QRIS payment logging",
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
    projectType: "Class Assignment",
    teamType: "Group Project",
    roleInGroup: "Data Scraper & Playwright Specialist",
    myImpact: "Built and optimized the asynchronous Playwright web scraping script to bypass lazy loading and dynamically extract listings of Surabaya hotels from Traveloka.",
    whatILearned: "Mastered async scraping with Playwright, handled cluster number selection using Silhouette scores, and resolved target leakage issues in regression models.",
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
    description: "An end-to-end data mining pipeline to scrape Traveloka accommodation records asynchronously, perform market segmentation using K-Means Clustering, and build an optimized Gradient Boosting Regressor price prediction model.",
    tech: ["Python", "Playwright", "Scikit-Learn", "Pandas", "Jupyter"],
    techIcons: [
      { name: "Python", iconUrl: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
      { name: "Playwright", iconUrl: "https://playwright.dev/img/playwright-logo.svg", color: "#2EAD33" },
      { name: "Scikit-Learn", iconUrl: "https://cdn.simpleicons.org/scikitlearn/F7931E", color: "#F7931E" },
      { name: "Pandas", iconUrl: "https://cdn.simpleicons.org/pandas/150458", color: "#150458" },
      { name: "Jupyter", iconUrl: "https://cdn.simpleicons.org/jupyter/F37626", color: "#F37626" },
    ],
    problem: "Tourists often struggle to find Surabaya hotel accommodations that fit their budget due to **information overload** and dynamic prices on OTA platforms like Traveloka. To solve this, an objective **market segmentation (clustering)** system and a **price prediction model** based on physical features are required to aid rational decisions.",
    action: [
      "Engineered an **asynchronous web scraper** using Playwright Python API to simulate real browser actions, extracting names, coordinates/districts, nightly prices, rating scores, review counts, stars, and amenities from 300+ hotels",
      "Performed robust **data preprocessing & feature engineering**, including review text cleaning, spatial filtering to Surabaya boundaries, Google Maps API driving distance calculation, and missing record handling",
      "Grouped hotels using the **K-Means Clustering (K=3)** algorithm based on 5 non-price attributes, evaluating the optimal number of clusters via the **Elbow Method** and **Silhouette Score**",
      "Built and trained a **Gradient Boosting Regressor** model to predict nightly prices, implementing **target leakage prevention** techniques like class brand extraction, amenities-to-star ratios, and log-transformed reviews",
    ],
    result: [
      "Successfully scraped and cleaned a dataset of **304 Surabaya hotels** after outlier removal and handling empty values",
      "Segmented Surabaya accommodations into **3 distinct market tiers**: Cheap (Cluster 0: ≤ Rp 182,993.25), Midscale (Cluster 1: Rp 182,993.25 - Rp 285,998.50), and Premium (Cluster 2: ≥ Rp 285,998.50)",
      "Significantly boosted prediction accuracy from a Random Forest baseline (R² 55.99%) to an optimized **Gradient Boosting Regressor achieving 80.11% R² score** and an RMSE of **Rp 100,719.52**",
      "Prevented target leakage effectively by separating price targets from hotel brand feature extractions (`is_budget`, `is_midscale`, `is_premium`) and feature interactions",
      "Revealed that the premium brand indicator (`is_premium`) and interaction features (`rating_x_log_review` and `facilities_x_rating`) are the top contributors to the model's feature importance",
      "Provided comprehensive performance evaluations comparing cluster prices, Elbow/Silhouette curves, feature importances, and actual vs. predicted price distributions",
    ],
    keyResults: [
      "Dynamic Scraping of 304 Surabaya Hotels: Developed a Playwright async scraper to bypass dynamic loading and collect OTA market data",
      "K-Means Market Segmentation (K=3): Classified accommodations into Cheap, Midscale, and Premium tiers using physical features",
      "80.11% R² Accuracy Gradient Boosting Model: Estimated nightly room prices accurately using leak-free feature engineering",
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
    projectType: "Individual Project",
    teamType: "Individual Project",
    myImpact: "Built the entire text clustering pipeline individually, optimized text preprocessing with Unique Word Stemming to speed up stemming by 8x, and integrated domain-specific vocabulary into Sastrawi.",
    whatILearned: "Learned Indonesian slang normalization, TF-IDF vectorizer configuration, text clustering metrics, and custom dictionary injection.",
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
      "An optimized NLP & Text Mining pipeline to analyze and cluster user reviews of BSI banking applications (BSI Mobile & BYOND) from the Google Play Store. It implements text cleaning, reduplication expansion, slang normalization, Sastrawi stemmer customization, and a Unique Word Stemming (dictionary lookup) method to cut large dataset processing time from hours down to around 30 minutes.",
    tech: ["Python", "Scikit-Learn", "Sastrawi", "NLTK", "Pandas", "Seaborn", "Jupyter"],
    techIcons: [
      { name: "Python", iconUrl: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
      { name: "Scikit-Learn", iconUrl: "https://cdn.simpleicons.org/scikitlearn/F7931E", color: "#F7931E" },
      { name: "Pandas", iconUrl: "https://cdn.simpleicons.org/pandas/150458", color: "#150458" },
      { name: "Jupyter", iconUrl: "https://cdn.simpleicons.org/jupyter/F37626", color: "#F37626" },
    ],
    problem: "BSI banking applications accumulated **128,607 raw reviews** on the Google Play Store (cleaned and filtered to **58,407 active reviews** from 2023 to present). Manually reading and analyzing tens of thousands of unstructured reviews to identify critical bugs, technical outages, or user satisfaction is impossible. A **systematic text clustering approach** was required to automatically surface actionable insights from noisy Indonesian slang and unstructured text.",
    action: [
      "Cleaned, deduplicated, and filtered the raw Google Play dataset to focus on reviews from January 2023 to 2025, producing **58,407 clean reviews**",
      "Designed a regex-based reduplication expansion to restore word repetitions ending in the number `2` (e.g., converting `tiba2` to `tiba tiba`) before digit removal",
      "Implemented a word merging prevention step by replacing non-alphabetic characters (e.g., `/` and `&`) with spaces to prevent accidental word compounding",
      "Built a custom slang normalization dictionary mapping conversational shortforms and typos (e.g., `gak` -> `tidak`, `yg` -> `yang`, `tf` -> `transfer`) to standard terms",
      "Injected modern technical and banking terms (e.g., `update`, `error`, `transfer`, `qris`, `byond`, `login`, `otp`, `pin`) into Sastrawi's internal dictionary to ensure correct morphological stemming",
      "Developed a high-performance **Unique Word Stemming (dictionary lookup)** pipeline, reducing Sastrawi stemming time from several hours to around 30 minutes for the full dataset",
      "Vectorized text features using **TF-IDF** with `max_features=1000, min_df=5, max_df=0.8` to transform reviews into a numerical feature matrix",
      "Trained a **K-Means Clustering** model (k=5, random_state=42) to group reviews into 5 distinct customer experience categories",
      "Conducted descriptive analysis on annual rating trends, monthly volume spikes, keyword frequency maps, and developer response rates",
    ],
    result: [
      "**K-Means Customer Segmentation (5 Clusters)**: Grouped reviews into 3 high-satisfaction clusters (Clusters 0, 1, 2, 4 with avg ratings >4.8★) and 1 massive technical issue cluster (Cluster 3 containing **33,035 reviews** with a low avg rating of **2.85★** focusing on error, update, login, and transfer issues)",
      "**Binary Sentiment Polarization**: Revealed a strong 'love-hate' pattern where **65.6%** of users rated the app **5★** (highly satisfied with general stability) and **22.2%** rated it **1★** (encountered critical blockers), showing a highly polarized user experience",
      "**Outage & Device-Specific Crash Detection**: Uncovered a monthly rating low of **2.01★** in May 2023 due to a national IT outage, and pinpointed persistent crash complaints throughout 2024 on specific devices (e.g., Samsung A13) triggered by version `6.22.1` and `6.22.3` updates",
      "**Granular Keyword Trouble Mapping**: Surfaced top user pain points including *Error & Crashes* in 7.8% of reviews (avg rating **1.92**), *Login & Access* in 5.3% (avg rating **2.12**), *SMS OTP delivery failures* with the lowest average score (2.4%, avg rating **1.66** due to balance charges without receiving codes), and resistance to migrating to the new *BYOND* app (0.8%, avg rating **2.66**)",
      "**Developer Support Performance Audit**: Audited developer responsiveness showing they replied to **99.86%** of all reviews, focusing heavily on critical issues by replying to **99.6%** of 1-star and **99.9%** of 2-star reviews (with an average response time of 2.36 days)",
    ],
    keyResults: [
      "Optimized Unique Word Stemming: Reduced Sastrawi stemming time from hours to around 30 minutes using dictionary lookup on 19,582 unique words",
      "Outage & Critical Bug Identification: Traced the May 2023 national IT outage, device-specific crashes on Samsung A13 post-update, and SMS OTP balance loss issues",
      "Customer Support Responsiveness Audit: Analyzed developer response rates showing a 99.86% reply rate with a priority on 1-star & 2-star reviews",
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
    projectType: "Class Assignment",
    teamType: "Group Project",
    roleInGroup: "Machine Learning Benchmarker",
    myImpact: "Benchmarked and compared the performance of multiple machine learning models (XGBoost, BERT, DistilBERT) on sequence classification metrics.",
    whatILearned: "Learned Hugging Face sequence classification APIs, fine-tuning deep learning models using PyTorch, and managing validation trade-offs between model sizes.",
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
      "99.12% Train Accuracy with XGBoost: Trained a binary classifier using TF-IDF text features to separate human vs AI writing",
      "Benchmarking of 3 ML/DL Models: Compared the performance metrics of XGBoost against transformer BERT and DistilBERT models",
      "Preprocessing & Evaluation of 4,051 Samples: Automated essay text cleaning, vocabulary EDA, and confusion matrix auditing",
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
    items: ["Python", "SQL", "TypeScript", "R"],
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
    items: ["Scikit-Learn", "Pandas", "Classification", "Regression", "Clustering", "Model Evaluation"],
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
    items: ["Next.js", "Flask", "Tailwind CSS", "Git", "GitHub", "Streamlit", "Excel", "Canva"],
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
      "Data Fundamentals",
      "Data Classification",
      "Data Usability for Organizations",
      "Inferential & Descriptive Statistics",
      "Data Collection & Analysis",
      "Data Preparation for Analysis",
      "Data Visualization & Presentation",
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
