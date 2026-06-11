# config.py
# Constants and configurations for the AXA Dashboard

# ══════════════════════════════════════════════════════════════
# COLOR PALETTE
# ══════════════════════════════════════════════════════════════
BLUE   = "#00008F" # Primary AXA Brand Color
INDIGO = "#6366f1"
RED    = "#dc2626"
AMBER  = "#d97706"
TEAL   = "#0d9488"

QUAD_COLORS = {
    "Q1: Cash Cow": "#059669",
    "Q2: High Risk-Return": "#d97706",
    "Q3: Low Performer": "#2563eb",
    "Q4: Bleeding": "#dc2626"
}

BADGE_MAP = {
    "good": "badge-green",
    "red": "badge-red",
    "yellow": "badge-yellow"
}

# ══════════════════════════════════════════════════════════════
# PLOTLY THEME
# ══════════════════════════════════════════════════════════════
LAYOUT = dict(
    plot_bgcolor  = "#ffffff",
    paper_bgcolor = "#ffffff",
    font_color    = "#475569",
    font_family   = "Source Sans 3, sans-serif",
    font          = dict(size=12, color="#475569"),
    margin        = dict(t=44, b=44, l=14, r=14),
    title_font    = dict(size=15, color="#00008F", family="Playfair Display, serif"),
    hoverlabel    = dict(
        bgcolor="white", 
        font_size=13, 
        font_family="Source Sans 3, sans-serif",
        bordercolor="rgba(0,0,143,0.15)",
        font_color="#333333"
    ),
)

AXIS_STYLE = dict(
    gridcolor     = "#f1f5f9",
    linecolor     = "rgba(0,0,0,0)",
    tickfont      = dict(size=11, color="#64748b"),
    title_font    = dict(size=11, color="#94a3b8"),
    zerolinecolor = "#f1f5f9",
)
