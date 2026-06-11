import streamlit as st
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
import numpy as np
import os
import base64

from config import BLUE, INDIGO, RED, AMBER, TEAL, QUAD_COLORS, BADGE_MAP, LAYOUT, AXIS_STYLE
from components import (
    get_hero_html, get_empty_state_html, get_footer_html, 
    get_sidebar_header_html, get_sidebar_info_html, get_tab_nav_html,
    get_q1_cash_cow_card_html, get_q4_bleeding_card_html,
    get_most_efficient_branch_html, get_max_gwp_branch_html, get_worst_net_channel_html,
    get_reinsurance_funnel_html, get_reinsurance_impact_html, format_rupiah
)

st.set_page_config(
    page_title="AXA — Executive Portofolio Dashboard",
    page_icon="🔷",
    layout="wide",
    initial_sidebar_state="expanded",
)

# ══════════════════════════════════════════════════════════════
# GLOBAL STYLES
# ══════════════════════════════════════════════════════════════
with open("style.css", "r", encoding="utf-8") as f:
    st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

# ══════════════════════════════════════════════════════════════
# LOAD DATA
# ══════════════════════════════════════════════════════════════
FILE = "Study Case for Univ Airlangga 2026 _Actuarial AXA .xlsx"

@st.cache_data
def load_data():
    df_p = pd.read_excel(FILE, sheet_name="Raw Premium")
    df_c = pd.read_excel(FILE, sheet_name="Raw Claim")
    df_p["DT_INC"] = pd.to_datetime(df_p["DT_INC"])
    df_p["DT_END"] = pd.to_datetime(df_p["DT_END"])
    df_c["DT_CLM"] = pd.to_datetime(df_c["DT_CLM"])
    df_p["COB"] = df_p["COB"].astype(str)
    df_c["COB"] = df_c["COB"].astype(str)
    return df_p, df_c

try:
    df_prem, df_clm = load_data()
except Exception as e:
    st.error(f"❌ File Excel tidak ditemukan.\n\n`{e}`")
    st.stop()

# ══════════════════════════════════════════════════════════════
# SIDEBAR FILTERS
# ══════════════════════════════════════════════════════════════
with st.sidebar:
    st.markdown(get_sidebar_header_html(), unsafe_allow_html=True)

    all_branches = sorted(df_prem["BRANCH_"].dropna().unique())
    sel_branches = st.multiselect("🏢  Branch", options=all_branches, default=all_branches)

    all_channels = sorted(df_prem["CHANNEL_"].dropna().unique())
    sel_channels = st.multiselect("📡  Channel", options=all_channels, default=all_channels)

    all_cobs = sorted(df_prem["COB"].dropna().unique())
    sel_cobs = st.multiselect("📋  Class of Business", options=all_cobs, default=all_cobs)

    st.markdown(get_sidebar_info_html(), unsafe_allow_html=True)

# Filter data
fp = df_prem[
    df_prem["BRANCH_"].isin(sel_branches) &
    df_prem["CHANNEL_"].isin(sel_channels) &
    df_prem["COB"].isin(sel_cobs)
]
fc = df_clm[
    df_clm["BRANCH_"].isin(sel_branches) &
    df_clm["CHANNEL_"].isin(sel_channels) &
    df_clm["COB"].isin(sel_cobs)
]

if fp.empty or fc.empty:
    st.markdown(get_empty_state_html(), unsafe_allow_html=True)
    st.stop()

# ══════════════════════════════════════════════════════════════
# METRICS
# ══════════════════════════════════════════════════════════════
total_policies = fp["POLICY_NO"].nunique()
gwp_total      = fp["GWP_IDR"].sum()
total_exposure = fp["SUM_INSURED"].sum()
total_loss     = fc["GRS_ST_IDR"].sum() + fc["GRS_OS_IDR"].sum()
loss_ratio     = (total_loss / gwp_total * 100) if gwp_total > 0 else 0

# Pre-compute for summary / insight boxes
grs         = fc[fc["GRS_ST_IDR"] > 0]["GRS_ST_IDR"]
q1_v, q3_v  = grs.quantile(0.25), grs.quantile(0.75)
iqr_val     = q3_v - q1_v
upper_fence = q3_v + 1.5 * iqr_val
n_outliers  = int((grs > upper_fence).sum())
pct_outliers= (n_outliers / len(grs) * 100) if len(grs) > 0 else 0

mdt = pd.merge(
    fc[["POLICY_NO","DT_CLM"]],
    fp[["POLICY_NO","DT_INC"]].drop_duplicates("POLICY_NO"),
    on="POLICY_NO", how="inner"
)
mdt["Days_to_Claim"] = (mdt["DT_CLM"] - mdt["DT_INC"]).dt.days
mdt = mdt[mdt["Days_to_Claim"] >= 0]
early     = int((mdt["Days_to_Claim"] <= 30).sum())
pct_early = early / len(mdt) * 100 if len(mdt) else 0

# ══════════════════════════════════════════════════════════════
# PLOTLY THEME (light)
# ══════════════════════════════════════════════════════════════
# ══════════════════════════════════════════════════════════════
# HERO
# ══════════════════════════════════════════════════════════════
st.markdown(get_hero_html(), unsafe_allow_html=True)

# ══════════════════════════════════════════════════════════════
# KPI CARDS
# ══════════════════════════════════════════════════════════════
lr_cls = "bad" if loss_ratio > 70 else ("warn" if loss_ratio >= 40 else "good")
k1, k2, k3, k4 = st.columns(4)
k1.markdown(f'<div class="kpi-card scroll-anim"><div class="kpi-label">Active Policies</div><div class="kpi-value">{total_policies:,}</div></div>', unsafe_allow_html=True)
k2.markdown(f'<div class="kpi-card scroll-anim"><div class="kpi-label">Gross Written Premium</div><div class="kpi-value">Rp {gwp_total/1e12:.2f} T</div></div>', unsafe_allow_html=True)
k3.markdown(f'<div class="kpi-card scroll-anim"><div class="kpi-label">Total Sum Insured</div><div class="kpi-value">Rp {total_exposure/1e15:.1f} Q</div></div>', unsafe_allow_html=True)
k4.markdown(f'<div class="kpi-card scroll-anim"><div class="kpi-label">Blended Loss Ratio</div><div class="kpi-value {lr_cls}">{loss_ratio:.1f}%</div></div>', unsafe_allow_html=True)

st.markdown("<div style='height:10px'></div>", unsafe_allow_html=True)

# ══════════════════════════════════════════════════════════════
# PREMIUM TAB NAVIGATION
# ══════════════════════════════════════════════════════════════
st.markdown(get_tab_nav_html(), unsafe_allow_html=True)

# ══════════════════════════════════════════════════════════════
# SECTION 1 — PORTOFOLIO OVERVIEW
# ══════════════════════════════════════════════════════════════
st.markdown('<div id="sec1"></div>', unsafe_allow_html=True)
st.markdown("""
<div class="sec-card scroll-anim">
  <div class="sec-header">
    <span class="sec-num-badge">01</span>
    <div>
      <div class="sec-title-sub">Case 1 · Portofolio Overview</div>
      <div class="sec-title">Revenue Distribution &amp; Portofolio Composition</div>
    </div>
  </div>
  <div class="sec-body">
    Gambaran besar <strong>dari mana premi AXA berasal</strong> — dipetakan berdasarkan jalur distribusi (channel) dan kantor cabang regional.
    Bagian ini menjawab pertanyaan kunci: <em>dari mana uang premi AXA datang?</em>
  </div>
  <div class="insight-box">
    Channel D &amp; C mendominasi pendapatan nasional. <strong>Branch K menyumbang ~47% premi nasional</strong> — konsentrasi ekstrem ini merupakan risiko operasional yang perlu segera disebarkan ke cabang-cabang lain.
  </div>
</div>
""", unsafe_allow_html=True)

c1, c2 = st.columns(2)
with c1:
    ch_df = fp.groupby("CHANNEL_")["GWP_IDR"].sum().reset_index().sort_values("GWP_IDR")
    fig = px.bar(ch_df, x="GWP_IDR", y="CHANNEL_", orientation="h",
                 title="Revenue per Distribution Channel",
                 color_discrete_sequence=[BLUE], height=340)
    fig.update_layout(**LAYOUT)
    fig.update_traces(
        texttemplate="%{x:,.0f}", textposition="outside",
        textfont=dict(size=10, color="#475569"), cliponaxis=False,
        hovertemplate="<b>%{y}</b><br>Rp %{x:,.0f}<extra></extra>",
        marker=dict(line=dict(width=0)),
    )
    fig.update_xaxes(title="Gross Written Premium (IDR)", **AXIS_STYLE)
    fig.update_yaxes(title="", **AXIS_STYLE)
    st.plotly_chart(fig, use_container_width=True)

with c2:
    br_df = fp.groupby("BRANCH_")["GWP_IDR"].sum().reset_index().sort_values("GWP_IDR", ascending=False).head(10)
    fig2 = px.bar(br_df, x="BRANCH_", y="GWP_IDR",
                  title="Branch Revenue Contribution (Top 10)",
                  color_discrete_sequence=[INDIGO], height=340)
    fig2.update_layout(**LAYOUT)
    fig2.update_traces(
        texttemplate="%{y:,.0f}", textposition="outside",
        textfont=dict(size=10, color="#475569"), cliponaxis=False,
        hovertemplate="<b>%{x}</b><br>Rp %{y:,.0f}<extra></extra>",
        marker=dict(line=dict(width=0)),
    )
    fig2.update_xaxes(title="Branch", tickangle=-30, **AXIS_STYLE)
    fig2.update_yaxes(title="Premium (IDR)", **AXIS_STYLE)
    st.plotly_chart(fig2, use_container_width=True)

st.markdown('<div class="gradient-divider"></div>', unsafe_allow_html=True)

# ══════════════════════════════════════════════════════════════
# SECTION 2 — RISK-REWARD MATRIX
# ══════════════════════════════════════════════════════════════
st.markdown('<div id="sec2"></div>', unsafe_allow_html=True)
st.markdown("""
<div class="sec-wrapper">
<div class="sec-card scroll-anim">
  <div class="sec-header">
    <span class="sec-num-badge">02</span>
    <div>
      <div class="sec-title-sub">Case 2 · Risk-Reward Matrix &amp; Multi-Dimensional Aggregation</div>
      <div class="sec-title">Peta Untung-Rugi Setiap Produk &amp; Segmen Bisnis</div>
    </div>
  </div>
  <div class="sec-body">
    <strong>Apa yang dianalisis?</strong> Analisis ini adalah "peta untung-rugi" untuk setiap jenis produk asuransi. Setiap titik di grafik mewakili satu produk atau segmen bisnis.<br><br>
    <strong>Cara membaca grafik:</strong> Sumbu kanan = premi besar masuk. Sumbu atas = klaim besar keluar. Titik di <em>zona hijau (Cash Cow)</em> = premi besar, klaim kecil (ideal). Titik di <em>zona merah (Bleeding)</em> = premi kecil tapi klaim besar. Ukuran titik = jumlah polis aktif.
  </div>
  <div class="insight-box">
    <strong>COB 4, 6, dan 7</strong> berada di zona kritis — klaim jauh melampaui premi yang diterima. <strong>COB 9</strong> adalah bintang portofolio: volume premi terbesar dengan klaim yang masih terkendali.
  </div>
</div>
""", unsafe_allow_html=True)

_fc_for_matrix = fc.copy()
if "CLM_REF" in _fc_for_matrix.columns:
    cob_matrix = _fc_for_matrix.groupby("COB").agg(
        Frequency=("CLM_REF","count"), Average_Severity=("GRS_ST_IDR","mean"),
    ).reset_index()
else:
    cob_matrix = _fc_for_matrix.groupby("COB").agg(
        Frequency=("GRS_ST_IDR","count"), Average_Severity=("GRS_ST_IDR","mean"),
    ).reset_index()
cob_matrix["Average_Severity_Million"] = cob_matrix["Average_Severity"] / 1_000_000
median_freq = cob_matrix["Frequency"].median() if len(cob_matrix) else 0
median_sev  = cob_matrix["Average_Severity_Million"].median() if len(cob_matrix) else 0

fig3 = px.scatter(
    cob_matrix, x="Frequency", y="Average_Severity_Million",
    size="Frequency", color="COB",
    title="Peta Frekuensi vs Keparahan Klaim per Jenis Produk",
    height=440,
    color_discrete_sequence=["#00008F","#dc2626","#059669","#d97706","#0d9488","#7c3aed","#ea580c","#0284c7","#db2777"],
)
fig3.add_vline(x=median_freq, line_dash="dash", line_color="#dc2626",
               annotation_text=f"Median Frekuensi ({int(median_freq)})",
               annotation_font_size=10, annotation_font_color="#dc2626", annotation_position="top left")
fig3.add_hline(y=median_sev, line_dash="dash", line_color="#00008F",
               annotation_text=f"Median Keparahan (Rp {median_sev:.1f} Juta)",
               annotation_font_size=10, annotation_font_color="#00008F", annotation_position="top right")
fig3.update_traces(textposition="top center")
fig3.update_layout(**LAYOUT, showlegend=False)
fig3.update_xaxes(title="Frekuensi (Jumlah Kejadian Klaim)", **AXIS_STYLE)
fig3.update_yaxes(title="Rata-rata Keparahan (Juta Rp)", **AXIS_STYLE)
st.plotly_chart(fig3, use_container_width=True)

# Multi-dimensional scatter
df_prem_seg = fp.groupby(["BRANCH_","CHANNEL_","PRODUCT_NAME"], as_index=False).agg(
    GWP_IDR=("GWP_IDR","sum"), POLICY_COUNT=("POLICY_NO","nunique"),
)
if "PRODUCT_NAME" in fc.columns:
    _fc_seg = fc.copy()
else:
    policy_product_map = fp[["POLICY_NO","PRODUCT_NAME"]].drop_duplicates("POLICY_NO")
    _fc_seg = fc.merge(policy_product_map, on="POLICY_NO", how="left")

_df_claim_seg = _fc_seg.groupby(["BRANCH_","CHANNEL_","PRODUCT_NAME"], as_index=False).agg(
    PAID_CLAIM_IDR=("GRS_ST_IDR","sum"), OS_CLAIM_IDR=("GRS_OS_IDR","sum"),
    TOTAL_CLAIM_IDR=("GRS_ST_IDR","sum"),
)
_df_claim_seg["TOTAL_CLAIM_IDR"] = _df_claim_seg["PAID_CLAIM_IDR"] + _df_claim_seg["OS_CLAIM_IDR"]
seg = df_prem_seg.merge(_df_claim_seg, on=["BRANCH_","CHANNEL_","PRODUCT_NAME"], how="outer").fillna(0)
seg["LOSS_RATIO"]    = np.where(seg["GWP_IDR"]>0, seg["TOTAL_CLAIM_IDR"]/seg["GWP_IDR"], 0)
seg["NET_RESULT_IDR"] = seg["GWP_IDR"] - seg["TOTAL_CLAIM_IDR"]

threshold_gwp   = seg["GWP_IDR"].median() if len(seg) else 0
threshold_claim = seg["TOTAL_CLAIM_IDR"].median() if len(seg) else 0

def assign_quadrant(row):
    hg = row["GWP_IDR"] >= threshold_gwp
    hc = row["TOTAL_CLAIM_IDR"] > threshold_claim
    if hg and not hc:       return "Q1: Cash Cow"
    elif hg and hc:         return "Q2: High Risk-Return"
    elif not hg and not hc: return "Q3: Low Performer"
    else:                   return "Q4: Bleeding"

seg["QUADRANT"]      = seg.apply(assign_quadrant, axis=1)
seg["SEGMENT_LABEL"] = seg["BRANCH_"].astype(str)+" | "+seg["CHANNEL_"].astype(str)+" | "+seg["PRODUCT_NAME"].astype(str)

if len(seg):
    size_min, size_max = 12, 50
    policy_range = seg["POLICY_COUNT"].max() - seg["POLICY_COUNT"].min() + 1
    seg["_dot_size"] = ((seg["POLICY_COUNT"]-seg["POLICY_COUNT"].min())/policy_range)*(size_max-size_min)+size_min
else:
    seg["_dot_size"] = 15

fig3b = go.Figure()
for quad, color in QUAD_COLORS.items():
    m = seg["QUADRANT"] == quad
    fig3b.add_trace(go.Scatter(
        x=seg.loc[m,"GWP_IDR"], y=seg.loc[m,"TOTAL_CLAIM_IDR"],
        mode="markers",
        marker=dict(size=seg.loc[m,"_dot_size"], color=color, opacity=0.72, line=dict(width=1.5,color="white")),
        text=seg.loc[m,"SEGMENT_LABEL"].str[:38],
        name=f"{quad} ({m.sum()})",
        hovertemplate="<b>%{text}</b><br>GWP: %{x:,.0f}<br>Total Claim: %{y:,.0f}<extra></extra>",
    ))
fig3b.add_vline(x=threshold_gwp,   line_dash="dash", line_color="#94a3b8", line_width=1.5)
fig3b.add_hline(y=threshold_claim, line_dash="dash", line_color="#94a3b8", line_width=1.5)
fig3b.update_layout(**LAYOUT, height=500, showlegend=True,
    title="Risk-Reward Matrix (Cabang × Channel × Produk)",
    legend=dict(orientation="h", y=-0.18, x=0, font=dict(color="#64748b",size=11)),
)
fig3b.update_xaxes(title="Gross Written Premium (Premi Bruto)", **AXIS_STYLE)
fig3b.update_yaxes(title="Total Klaim (Terbayar + Belum Terbayar)", **AXIS_STYLE)
st.plotly_chart(fig3b, use_container_width=True)

# ── Kartu Detail Q1 vs Q4 (Sesuai Slide 6 PPT) ──────────────────────────
q1_data = seg[seg["QUADRANT"] == "Q1: Cash Cow"]
q4_data = seg[seg["QUADRANT"] == "Q4: Bleeding"]
total_gwp_all = seg["GWP_IDR"].sum()

q1_gwp       = q1_data["GWP_IDR"].sum()
q1_claim     = q1_data["TOTAL_CLAIM_IDR"].sum()
q1_policies  = int(q1_data["POLICY_COUNT"].sum())
q1_proporsi  = (q1_gwp / total_gwp_all * 100) if total_gwp_all > 0 else 0

q4_gwp       = q4_data["GWP_IDR"].sum()
q4_claim     = q4_data["TOTAL_CLAIM_IDR"].sum()
q4_lr        = (q4_claim / q4_gwp * 100) if q4_gwp > 0 else 0
q4_segmen    = len(q4_data)

qc1, qc4 = st.columns(2)
with qc1:
    st.markdown(get_q1_cash_cow_card_html(q1_gwp, q1_claim, q1_policies, q1_proporsi), unsafe_allow_html=True)
with qc4:
    st.markdown(get_q4_bleeding_card_html(q4_gwp, q4_claim, q4_lr, q4_segmen), unsafe_allow_html=True)

st.markdown("<div style='height:16px'></div>", unsafe_allow_html=True)

# Tambahan Tabel Detail: Top 5 Cash Cow & Top 5 Bleeding (Sesuai PPT)
seg["NET_RESULT_IDR"] = seg["GWP_IDR"] - seg["TOTAL_CLAIM_IDR"]
# Sesuai PPT: Top 5 Cash Cow diambil dari Net Result paling positif di seluruh data
top5_cow = seg.sort_values("NET_RESULT_IDR", ascending=False).head(5)
# Sesuai PPT: Top 5 Bleeding Terparah diambil dari Net Result paling negatif di seluruh data
top5_bleed = seg.sort_values("NET_RESULT_IDR", ascending=True).head(5)

def format_table(df, is_bleeding=False):
    disp = df[["BRANCH_", "CHANNEL_", "PRODUCT_NAME", "GWP_IDR", "NET_RESULT_IDR", "LOSS_RATIO"]].copy()
    disp.columns = ["Branch", "Channel", "Product", "Premi GWP (Rp)", "Net Result (Rp)", "Loss Ratio"]
    
    def color_net(val):
        if is_bleeding: return "background-color: #fef2f2; color: #dc2626; font-weight: bold;"
        return "background-color: #ecfdf5; color: #059669; font-weight: bold;"
        
    try:
        styled = disp.style.map(lambda x: "background-color: white; color: #111111;")
        styled = styled.map(color_net, subset=["Net Result (Rp)"])
    except AttributeError:
        styled = disp.style.applymap(lambda x: "background-color: white; color: #111111;")
        styled = styled.applymap(color_net, subset=["Net Result (Rp)"])
        
    styled = styled.format({
        "Premi GWP (Rp)": "{:,.0f}",
        "Net Result (Rp)": "{:,.0f}", 
        "Loss Ratio": "{:.1%}"
    }).set_properties(**{'text-align': 'center'})
    
    styled = styled.set_table_styles([dict(selector='th', props=[('text-align', 'center')])])
    return styled

c_tb1, c_tb2 = st.columns(2)
with c_tb1:
    st.markdown("<div style='margin-top:10px; font-weight:600; font-size:14px; color:#059669; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px;'>🌟 Top 5 Segmen Cash Cow</div>", unsafe_allow_html=True)
    st.dataframe(format_table(top5_cow, False), use_container_width=True, height=230)
with c_tb2:
    st.markdown("<div style='margin-top:10px; font-weight:600; font-size:14px; color:#dc2626; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px;'>🚨 Top 5 Segmen Bleeding</div>", unsafe_allow_html=True)
    st.dataframe(format_table(top5_bleed, True), use_container_width=True, height=230)

st.markdown("</div>", unsafe_allow_html=True)
st.markdown('<div class="gradient-divider"></div>', unsafe_allow_html=True)

# ══════════════════════════════════════════════════════════════
# SECTION 2.5 — PEMETAAN KARAKTERISTIK RISIKO PER LINI BISNIS (Slide 7)
# ══════════════════════════════════════════════════════════════
st.markdown('<div id="sec25"></div>', unsafe_allow_html=True)

# ── Audit Fix: Pakai TOTAL INCURRED (Paid + OS), bukan hanya Paid ─────────
# Menyamakan perhitungan dengan PPT yang menggunakan gross incurred claim
br_agg       = fp.groupby("BRANCH_").agg(GWP=("GWP_IDR","sum"), POLICIES=("POLICY_NO","nunique")).reset_index()
br_claim_agg = fc.groupby("BRANCH_").agg(PAID=("GRS_ST_IDR","sum"), OS=("GRS_OS_IDR","sum")).reset_index()
br_claim_agg["CLAIM"] = br_claim_agg["PAID"] + br_claim_agg["OS"]
br_full = br_agg.merge(br_claim_agg[["BRANCH_","CLAIM"]], on="BRANCH_", how="left").fillna(0)
br_full["LR"]  = np.where(br_full["GWP"]>0, br_full["CLAIM"]/br_full["GWP"]*100, 0)
br_full["NET"] = br_full["GWP"] - br_full["CLAIM"]

ch_agg  = fp.groupby("CHANNEL_").agg(GWP=("GWP_IDR","sum")).reset_index()
ch_clm  = fc.groupby("CHANNEL_").agg(PAID=("GRS_ST_IDR","sum"), OS=("GRS_OS_IDR","sum")).reset_index()
ch_clm["CLAIM"] = ch_clm["PAID"] + ch_clm["OS"]
ch_full = ch_agg.merge(ch_clm[["CHANNEL_","CLAIM"]], on="CHANNEL_", how="left").fillna(0)
ch_full["NET"] = ch_full["GWP"] - ch_full["CLAIM"]
ch_full["LR"]  = np.where(ch_full["GWP"]>0, ch_full["CLAIM"]/ch_full["GWP"]*100, 0)

# ── Dynamic KPI: selalu ambil performer terbaik/terburuk dari data filter ──
br_with_gwp  = br_full[br_full["GWP"] > 0]
br_most_eff  = br_with_gwp.loc[br_with_gwp["LR"].idxmin()]  if len(br_with_gwp) > 0 else None  # LR terendah
br_max_gwp   = br_with_gwp.loc[br_with_gwp["GWP"].idxmax()] if len(br_with_gwp) > 0 else None  # GWP terbesar
ch_with_gwp  = ch_full[ch_full["GWP"] > 0]
ch_worst_net = ch_with_gwp.loc[ch_with_gwp["NET"].idxmin()] if len(ch_with_gwp) > 0 else None  # Net paling buruk

_eff_name  = br_most_eff["BRANCH_"]  if br_most_eff  is not None else "—"
_big_name  = br_max_gwp["BRANCH_"]   if br_max_gwp   is not None else "—"
_loss_name = ch_worst_net["CHANNEL_"] if ch_worst_net is not None else "—"

st.markdown(f"""
<div class="sec-wrapper">
<div class="sec-card scroll-anim">
  <div class="sec-header">
    <span class="sec-num-badge">04</span>
    <div>
      <div class="sec-title-sub">Case 4 · Pemetaan Karakteristik Risiko per Lini Bisnis</div>
      <div class="sec-title">Efisiensi {_eff_name}, Paradoks {_big_name} &amp; {_loss_name} yang Merugi</div>
    </div>
  </div>
  <div class="sec-body">
    Analisis memetakan kinerja <strong>Branch dan Channel</strong> dari data aktif saat ini.
    <strong>{_big_name}</strong> memiliki GWP terbesar namun loss ratio paling tinggi.
    <strong>{_eff_name}</strong> adalah cabang paling efisien. <strong>{_loss_name}</strong> adalah
    saluran distribusi dengan net result paling rendah dalam portofolio ini.
    <br><br><em>💡 Kartu di bawah otomatis menyesuaikan mengikuti filter aktif — tidak akan hilang.</em>
  </div>
</div>
""", unsafe_allow_html=True)

# 3 Header KPI — selalu terisi dari data aktual
kh1, kh2, kh3 = st.columns(3)
if br_most_eff is not None:
    kh1.markdown(get_most_efficient_branch_html(_eff_name, br_most_eff['LR']), unsafe_allow_html=True)
if br_max_gwp is not None:
    kh2.markdown(get_max_gwp_branch_html(_big_name, br_max_gwp['GWP'], br_max_gwp['LR']), unsafe_allow_html=True)
if ch_worst_net is not None:
    net_val = ch_worst_net['NET']
    kh3.markdown(get_worst_net_channel_html(_loss_name, net_val, ch_worst_net['LR']), unsafe_allow_html=True)

st.markdown("<div style='height:16px'></div>", unsafe_allow_html=True)

sc1, sc2 = st.columns(2)
with sc1:
    # Branch comparison bar chart
    br_sorted = br_full.sort_values("LR", ascending=True).head(10)
    fig_br = go.Figure()
    colors_br = ["#dc2626" if r["LR"]>50 else ("#d97706" if r["LR"]>20 else "#059669") for _, r in br_sorted.iterrows()]
    fig_br.add_trace(go.Bar(
        y=br_sorted["BRANCH_"], x=br_sorted["LR"],
        orientation="h",
        marker_color=colors_br,
        text=br_sorted["LR"].map(lambda v: f"{v:.1f}%"),
        textposition="outside",
        textfont=dict(size=10, color="#475569"),
        cliponaxis=False,
        hovertemplate="<b>%{y}</b><br>Loss Ratio: %{x:.1f}%<extra></extra>",
        marker_line_width=0,
    ))
    fig_br.add_vline(x=70, line_dash="dot", line_color="#94a3b8", line_width=1.5,
                     annotation_text="Batas 70%", annotation_font_size=9, annotation_font_color="#64748b")
    fig_br.update_layout(**LAYOUT, height=380, title="Perbandingan Loss Ratio per Branch")
    fig_br.update_xaxes(title="Loss Ratio (%)", **AXIS_STYLE)
    fig_br.update_yaxes(title="", **AXIS_STYLE)
    st.plotly_chart(fig_br, use_container_width=True)

with sc2:
    # Channel Net Result bar chart
    ch_sorted = ch_full.sort_values("NET", ascending=True)
    colors_ch = ["#dc2626" if v < 0 else "#059669" for v in ch_sorted["NET"]]
    fig_ch = go.Figure(go.Bar(
        x=ch_sorted["CHANNEL_"], y=ch_sorted["NET"]/1e6,
        marker_color=colors_ch,
        text=ch_sorted["NET"].map(lambda v: f"+{format_rupiah(v, 1)}" if v >= 0 else format_rupiah(v, 1)),
        textposition="outside",
        textfont=dict(size=11, color="#475569"),
        cliponaxis=False,
        hovertemplate="<b>%{x}</b><br>Net Result: %{text}<extra></extra>",
        marker_line_width=0,
    ))
    fig_ch.add_hline(y=0, line_color="#1e293b", line_width=1.5)
    fig_ch.update_layout(**LAYOUT, height=380, title="Net Result per Channel (GWP − Klaim)")
    fig_ch.update_xaxes(title="Channel", **AXIS_STYLE)
    fig_ch.update_yaxes(title="Net Result (Juta Rp)", **AXIS_STYLE)
    st.plotly_chart(fig_ch, use_container_width=True)


st.markdown("</div>", unsafe_allow_html=True)
st.markdown('<div class="gradient-divider"></div>', unsafe_allow_html=True)

# ══════════════════════════════════════════════════════════════
# SECTION 3 — DAMPAK REASURANSI TERHADAP RASIO DAN MARGIN (Slide 8)
# ══════════════════════════════════════════════════════════════
st.markdown('<div id="sec3"></div>', unsafe_allow_html=True)

# ── Hitung metrik dengan formula SAMA PERSIS seperti notebook ──────────────
# GROSS_INCURRED_CLAIM = GRS_ST_IDR + GRS_OS_IDR  (total incurred)
# RI_RECOVERY          = RI_ST_IDR  + RI_OS_IDR   (total RI recovery)
# NET_INCURRED_CLAIM   = GROSS - RI_RECOVERY
# GROSS_UNDERWRITING_MARGIN = GWP - GROSS_INCURRED_CLAIM
# NET_UNDERWRITING_MARGIN   = NET_WRITTEN_PREMIUM - NET_INCURRED_CLAIM
#   dimana NET_WRITTEN_PREMIUM = GWP - RWP

gwp_total_ri   = fp["GWP_IDR"].sum()
rwp_total_ri   = fp["RWP_IDR"].sum()
nwp_total_ri   = gwp_total_ri - rwp_total_ri          # Net Written Premium

gwc_total_ri   = fp["GWC_IDR"].sum()
rwc_total_ri   = fp["RWC_IDR"].sum()
net_commission = gwc_total_ri - rwc_total_ri

g_st_total     = fc["GRS_ST_IDR"].sum()
g_os_total     = fc["GRS_OS_IDR"].sum()
gross_incurred = g_st_total + g_os_total               # Gross Incurred Claim

ri_st_total    = fc["RI_ST_IDR"].sum()
ri_os_total    = fc["RI_OS_IDR"].sum()
ri_recovery    = ri_st_total + ri_os_total             # RI Recovery

net_incurred   = gross_incurred - ri_recovery          # Net Incurred Claim

gross_lr       = (gross_incurred / gwp_total_ri * 100) if gwp_total_ri > 0 else 0
net_lr         = (net_incurred   / gwp_total_ri * 100) if gwp_total_ri > 0 else 0   # vs GWP (sama seperti notebook)
lr_reduction   = gross_lr - net_lr

rwp_to_gwp     = (rwp_total_ri   / gwp_total_ri * 100) if gwp_total_ri > 0 else 0
ri_rec_ratio   = (ri_recovery    / gross_incurred * 100) if gross_incurred > 0 else 0

gross_uw_margin = gwp_total_ri - gwc_total_ri - gross_incurred        # Gross Underwriting Margin
net_uw_margin   = nwp_total_ri - net_commission - net_incurred        # Net Underwriting Margin
margin_variance = net_uw_margin - gross_uw_margin      # Margin Variance (biasanya negatif)

st.markdown(f"""
<div class="sec-wrapper">
<div class="sec-card scroll-anim">
  <div class="sec-header">
    <span class="sec-num-badge">05</span>
    <div>
      <div class="sec-title-sub">Case 5 · Dampak Reasuransi terhadap Rasio dan Margin</div>
      <div class="sec-title">Analisis Efektivitas Reasuransi — Sebelum &amp; Sesudah Perlindungan</div>
    </div>
  </div>
  <div class="sec-body">
    Analisis ini mengevaluasi seberapa efektif reasuransi menurunkan beban klaim dan menjaga margin underwriting.
    Pertanyaan kunci: apakah <strong>biaya premi reasuransi (RWP)</strong> yang dibayarkan sebanding dengan
    <strong>manfaat pemulihan klaim (RI Recovery)</strong> yang diterima?
  </div>
  <div class="insight-box">
    Reasuransi berhasil menurunkan Gross LR <strong>{gross_lr:.2f}%</strong> menjadi Net LR <strong>{net_lr:.2f}%</strong>
    (turun <strong>{lr_reduction:.2f} pp</strong>). Namun biaya reasuransi memotong margin underwriting sebesar
    <strong>{format_rupiah(abs(margin_variance), 2)}</strong>.
  </div>
</div>
""", unsafe_allow_html=True)

# ── Blok 1: Funnel Loss Ratio + KPI Kanan (sesuai layout Slide 8) ─────────
left_col, right_col = st.columns([1, 1])
with left_col:
    # Funnel: Gross LR → Net LR
    st.markdown(get_reinsurance_funnel_html(gross_lr, lr_reduction, net_lr), unsafe_allow_html=True)

with right_col:
    # RWP vs RI Recovery ratio + Margin Impact
    st.markdown(get_reinsurance_impact_html(rwp_to_gwp, ri_rec_ratio, gross_uw_margin, net_uw_margin, margin_variance), unsafe_allow_html=True)

st.markdown("<div style='height:16px'></div>", unsafe_allow_html=True)

# ── Blok 2: Chart Gross vs Net LR per COB (tetap ada) ─────────────────────
p_full = fp.groupby("COB").agg(GWP=("GWP_IDR","sum"), RWP=("RWP_IDR","sum")).reset_index()
c_full = fc.groupby("COB").agg(
    G_ST=("GRS_ST_IDR","sum"), G_OS=("GRS_OS_IDR","sum"),
    R_ST=("RI_ST_IDR","sum"),  R_OS=("RI_OS_IDR","sum")
).reset_index()
m_df = pd.merge(p_full, c_full, on="COB", how="left").fillna(0)
m_df["Gross_Incurred"] = m_df["G_ST"] + m_df["G_OS"]
m_df["RI_Recovery"]    = m_df["R_ST"] + m_df["R_OS"]
m_df["Net_Incurred"]   = m_df["Gross_Incurred"] - m_df["RI_Recovery"]
m_df["Gross_LR"]       = np.where(m_df["GWP"]>0, m_df["Gross_Incurred"]/m_df["GWP"]*100, 0)
m_df["Net_LR"]         = np.where(m_df["GWP"]>0, m_df["Net_Incurred"]/m_df["GWP"]*100, 0)

fig4 = go.Figure()
fig4.add_trace(go.Bar(
    name="Gross Loss Ratio — sebelum reasuransi", x=m_df["COB"], y=m_df["Gross_LR"],
    marker_color=RED, opacity=0.85,
    text=m_df["Gross_LR"].map(lambda v: f"{v:.1f}%"),
    textposition="outside", textfont=dict(size=11, color="#475569"), cliponaxis=False,
    hovertemplate="<b>%{x}</b><br>Gross LR: %{y:.1f}%<extra></extra>",
    marker=dict(line=dict(width=0)),
))
fig4.add_trace(go.Bar(
    name="Net Loss Ratio — sesudah reasuransi", x=m_df["COB"], y=m_df["Net_LR"],
    marker_color=BLUE, opacity=0.85,
    text=m_df["Net_LR"].map(lambda v: f"{v:.1f}%"),
    textposition="outside", textfont=dict(size=11, color="#475569"), cliponaxis=False,
    hovertemplate="<b>%{x}</b><br>Net LR: %{y:.1f}%<extra></extra>",
    marker=dict(line=dict(width=0)),
))
fig4.add_hline(y=70, line_dash="dot", line_color="#94a3b8", line_width=1.5,
               annotation_text="Batas Aman 70%", annotation_font_color="#64748b", annotation_font_size=10)
fig4.update_layout(**LAYOUT, barmode="group", height=440,
    legend=dict(orientation="h", y=-0.18, x=0, font=dict(color="#64748b",size=11)),
    title="Rasio Kerugian Bruto vs Neto per Lini Bisnis (COB)",
)
fig4.update_xaxes(title="Jenis Produk (COB)", **AXIS_STYLE)
fig4.update_yaxes(title="Rasio Kerugian (%)", **AXIS_STYLE)
st.plotly_chart(fig4, use_container_width=True)
st.markdown("</div>", unsafe_allow_html=True)
st.markdown('<div class="gradient-divider"></div>', unsafe_allow_html=True)


# ══════════════════════════════════════════════════════════════
# SECTION 4 — IQR
# ══════════════════════════════════════════════════════════════
st.markdown('<div id="sec4"></div>', unsafe_allow_html=True)

# Pre-compute outlier metrics for Slide 9 KPI cards
grs_settled = fc[fc["GRS_ST_IDR"] > 0]["GRS_ST_IDR"]
total_gross_settled = grs_settled.sum()
total_outlier_val   = fc[fc["GRS_ST_IDR"] > upper_fence]["GRS_ST_IDR"].sum()
pct_outlier_value   = (total_outlier_val / total_gross_settled * 100) if total_gross_settled > 0 else 0
max_single_claim    = grs_settled.max() if len(grs_settled) > 0 else 0

st.markdown(f"""
<div class="sec-wrapper">
<div class="sec-card scroll-anim">
  <div class="sec-header">
    <span class="sec-num-badge">06</span>
    <div>
      <div class="sec-title-sub">Case 6 · Analisis Konsentrasi Risiko &amp; Deteksi Outlier Klaim</div>
      <div class="sec-title">Deteksi Klaim Raksasa — Jangkauan Kuartil</div>
    </div>
  </div>
  <div class="sec-body">
    <strong>Apa yang dianalisis?</strong> Tidak semua klaim bernilai "normal". Analisis ini mendeteksi klaim-klaim raksasa menggunakan metode statistik:<br><br>
    &nbsp;&nbsp;📐 <strong>IQR (Jangkauan Kuartil)</strong> — Membagi nilai klaim menjadi 4 kelompok dan menetapkan "zona normal". Klaim yang melampaui batas atas disebut <em>outlier</em> dan butuh cadangan modal khusus.<br><br>
    <strong>Mengapa penting?</strong> Klaim ekstrem yang tidak diantisipasi bisa mengancam kesehatan keuangan perusahaan.
  </div>
  <div class="insight-box">
    Batas klaim "wajar" = <strong>Rp {upper_fence:,.0f}</strong> &nbsp;·&nbsp;
    <strong>{n_outliers:,} klaim ekstrem</strong> ({pct_outliers:.1f}% dari total) melampaui batas ini dan membutuhkan cadangan modal khusus.
  </div>
</div>
""", unsafe_allow_html=True)

# 4 KPI Cards (sesuai Slide 9 PPT)
io1, io2, io3, io4 = st.columns(4)
io1.markdown(f'<div class="kpi-card scroll-anim"><div class="kpi-label">Total Gross Settled Claims</div><div class="kpi-value">Rp {total_gross_settled/1e12:.3f} T</div></div>', unsafe_allow_html=True)
io2.markdown(f'<div class="kpi-card scroll-anim"><div class="kpi-label">Outlier Klaim (IQR&gt;Rp{upper_fence/1e6:.1f}jt)</div><div class="kpi-value {"bad" if pct_outliers > 10 else "warn"}">{pct_outliers:.1f}%</div></div>', unsafe_allow_html=True)
io3.markdown(f'<div class="kpi-card scroll-anim"><div class="kpi-label">Kontribusi Nilai Outlier</div><div class="kpi-value bad">{pct_outlier_value:.1f}%</div></div>', unsafe_allow_html=True)
io4.markdown(f'<div class="kpi-card scroll-anim"><div class="kpi-label">Nilai Klaim Terbesar Individual</div><div class="kpi-value">Rp {max_single_claim/1e9:.2f} M</div></div>', unsafe_allow_html=True)

st.markdown("<div style='height:10px'></div>", unsafe_allow_html=True)

col_a, col_b = st.columns(2)
with col_a:
    fig5 = go.Figure()
    fig5.add_trace(go.Box(
        y=grs[grs <= upper_fence*3],
        name="Paid claims", marker_color=BLUE, line_color=BLUE,
        boxpoints="outliers", jitter=0.3,
        marker=dict(opacity=0.3, size=3, color=RED),
    ))
    fig5.update_layout(**LAYOUT, height=420, title="Distribusi Nilai Klaim — Box Plot IQR")
    fig5.update_xaxes(**AXIS_STYLE)
    fig5.update_yaxes(title="Nilai Klaim (IDR)", **AXIS_STYLE)
    st.plotly_chart(fig5, use_container_width=True)

with col_b:
    cob_out = fc[fc["GRS_ST_IDR"]>upper_fence].groupby("COB").size().reset_index(name="Outliers")
    fig6 = px.bar(
        cob_out.sort_values("Outliers",ascending=False),
        x="COB", y="Outliers",
        title="Jumlah Klaim Ekstrem per Jenis Produk",
        color="Outliers",
        color_continuous_scale=[[0,TEAL],[0.5,AMBER],[1,RED]],
        height=420,
    )
    fig6.update_layout(**LAYOUT)
    fig6.update_coloraxes(showscale=False)
    fig6.update_traces(
        texttemplate="%{y}", textposition="outside",
        textfont=dict(size=11, color="#475569"), cliponaxis=False,
        hovertemplate="<b>%{x}</b><br>Outliers: %{y}<extra></extra>",
        marker=dict(line=dict(width=0)),
    )
    fig6.update_xaxes(title="Jenis Produk (COB)", **AXIS_STYLE)
    fig6.update_yaxes(title="Jumlah Klaim Ekstrem", **AXIS_STYLE)
    st.plotly_chart(fig6, use_container_width=True)

st.markdown("</div>", unsafe_allow_html=True)
st.markdown('<div class="gradient-divider"></div>', unsafe_allow_html=True)

# ══════════════════════════════════════════════════════════════
# SECTION 5 — RESERVING + DURATION
# ══════════════════════════════════════════════════════════════
st.markdown('<div id="sec5"></div>', unsafe_allow_html=True)

# Pre-compute vintage & under-reserving analysis for Channel B
_prem_info = fp[["POLICY_NO", "DT_INC"]].drop_duplicates("POLICY_NO")
df_merged = pd.merge(fc, _prem_info, on="POLICY_NO", how="inner")
df_merged["Days_to_Claim"] = (df_merged["DT_CLM"] - df_merged["DT_INC"]).dt.days

# Fokus ke Channel B
df_b = df_merged[df_merged["CHANNEL_"] == "CHANNEL B"] if "CHANNEL_" in df_merged.columns else df_merged

# Vintage Analysis
super_cepat = df_b[df_b["Days_to_Claim"] <= 30]
cepat       = df_b[(df_b["Days_to_Claim"] > 30) & (df_b["Days_to_Claim"] <= 90)]
normal      = df_b[df_b["Days_to_Claim"] > 90]

# Under-reserving Channel B
total_paid_b_v = df_b["GRS_ST_IDR"].sum()
total_os_b_v   = df_b["GRS_OS_IDR"].sum()
os_ratio_b_v   = (total_os_b_v / total_paid_b_v * 100) if total_paid_b_v > 0 else 0

st.markdown(f"""
<div class="sec-wrapper">
<div class="sec-card scroll-anim">
  <div class="sec-header">
    <span class="sec-num-badge">07</span>
    <div>
      <div class="sec-title-sub">Case 7 · Indikasi Anti-Seleksi, Fraud &amp; Under-Reserving</div>
      <div class="sec-title">Cadangan Klaim &amp; Pelacakan Klaim Dini — Antisipasi Tekanan Keuangan</div>
    </div>
  </div>
  <div class="sec-body">
    <strong>Apa yang dianalisis?</strong> Dua analisis krusial dalam satu bagian:<br><br>
    &nbsp;&nbsp;💰 <strong>① Indikasi Anti-Seleksi dan Fraud (Channel B)</strong><br>
    Seluruh klaim Channel B terkonsentrasi di Branch K. Pola Hari ke-0 dan rata-rata durasi pendek menandakan celah <em>underwriting</em> yang dapat diisolasi.<br><br>
    &nbsp;&nbsp;⏱ <strong>② Indikasi Under-Reserving Sistemik</strong><br>
    Channel B mencatat hampir Rp562 miliar klaim terbayarkan namun <strong>nol cadangan tertunggak</strong>, menandai potensi <em>liability gap</em> akut.
  </div>
  <div class="insight-box">
    <strong>{pct_early:.1f}% klaim ({early:,} kasus)</strong> muncul dalam 30 hari pertama — jauh di atas normal, perlu investigasi segera.
    &nbsp;·&nbsp; Rasio Outstanding Channel B: <strong>{os_ratio_b_v:.2f}%</strong>
  </div>
</div>
""", unsafe_allow_html=True)

# Vintage 3 Cards (Slide 10)
vc1, vc2, vc3 = st.columns(3)
vc1.markdown(f"""
<div style="background:linear-gradient(135deg,#7f1d1d,#dc2626);border-radius:14px;padding:20px;color:white;text-align:center;margin-bottom:16px;">
    <div style="font-size:11px;font-weight:600;opacity:0.85;margin-bottom:6px;">SUPER CEPAT — ≤ 30 hari sejak polis aktif</div>
    <div style="font-size:13px;opacity:0.7;margin-bottom:4px;">JUMLAH KLAIM</div>
    <div style="font-size:42px;font-weight:900;">{len(super_cepat):,}</div>
    <div style="font-size:13px;opacity:0.7;margin-top:8px;">NILAI</div>
    <div style="font-size:22px;font-weight:800;">{format_rupiah(super_cepat['GRS_ST_IDR'].sum(), 1)}</div>
    <div style="font-size:11px;opacity:0.7;margin-top:4px;">Rata-rata durasi {super_cepat['Days_to_Claim'].mean():.1f} hari</div>
</div>
""", unsafe_allow_html=True)
vc2.markdown(f"""
<div style="background:linear-gradient(135deg,#78350f,#d97706);border-radius:14px;padding:20px;color:white;text-align:center;margin-bottom:16px;">
    <div style="font-size:11px;font-weight:600;opacity:0.85;margin-bottom:6px;">CEPAT — 31–90 hari sejak polis aktif</div>
    <div style="font-size:13px;opacity:0.7;margin-bottom:4px;">JUMLAH KLAIM</div>
    <div style="font-size:42px;font-weight:900;">{len(cepat):,}</div>
    <div style="font-size:13px;opacity:0.7;margin-top:8px;">NILAI</div>
    <div style="font-size:22px;font-weight:800;">{format_rupiah(cepat['GRS_ST_IDR'].sum(), 1)}</div>
    <div style="font-size:11px;opacity:0.7;margin-top:4px;">Rata-rata durasi {cepat['Days_to_Claim'].mean():.1f} hari</div>
</div>
""", unsafe_allow_html=True)
vc3.markdown(f"""
<div style="background:linear-gradient(135deg,#1e3a5f,#00008F);border-radius:14px;padding:20px;color:white;text-align:center;margin-bottom:16px;">
    <div style="font-size:11px;font-weight:600;opacity:0.85;margin-bottom:6px;">NORMAL — &gt; 90 hari sejak polis aktif</div>
    <div style="font-size:13px;opacity:0.7;margin-bottom:4px;">JUMLAH KLAIM</div>
    <div style="font-size:42px;font-weight:900;">{len(normal):,}</div>
    <div style="font-size:13px;opacity:0.7;margin-top:8px;">NILAI</div>
    <div style="font-size:22px;font-weight:800;color:#fbbf24;">{format_rupiah(normal['GRS_ST_IDR'].sum(), 1)}</div>
    <div style="font-size:11px;opacity:0.7;margin-top:4px;">Rata-rata durasi {normal['Days_to_Claim'].mean():.1f} hari</div>
</div>
""", unsafe_allow_html=True)

st.markdown("<div style='height:16px'></div>", unsafe_allow_html=True)

# Under-reserving highlight (Slide 11)
us1, us2 = st.columns([1, 2])
with us1:
    st.markdown(f"""
    <div style="background:linear-gradient(135deg,#0f172a,#1e3a5f);border-radius:14px;padding:24px;color:white;text-align:center;height:100%;margin-bottom:16px;">
        <div style="font-size:13px;font-weight:600;opacity:0.7;margin-bottom:8px;">RATIO OUTSTANDING-TO-PAID</div>
        <div style="font-size:12px;opacity:0.6;margin-bottom:4px;">Channel B (Total Portofolio)</div>
        <div style="font-size:56px;font-weight:900;color:#fbbf24;">{os_ratio_b_v:.2f}%</div>
        <div style="font-size:11px;opacity:0.7;margin-top:12px;">Tidak ada cadangan tertunggak yang dibukukan untuk klaim Channel B — mengindikasikan praktik pencadangan yang <strong>tidak memadai</strong> (under-reserving).</div>
        <div style="margin-top:16px;display:flex;justify-content:space-around;">
            <div><div style="font-size:10px;opacity:0.6;">KLAIM TERBAYARKAN</div><div style="font-size:16px;font-weight:700;">{format_rupiah(total_paid_b_v, 1)}</div></div>
            <div><div style="font-size:10px;opacity:0.6;">CADANGAN TERTUNGGAK</div><div style="font-size:16px;font-weight:700;color:#fbbf24;">{format_rupiah(total_os_b_v, 0)}</div></div>
        </div>
    </div>
    """, unsafe_allow_html=True)
with us2:
    res_cob = df_b.groupby("COB").agg(Kasus=("GRS_ST_IDR","count"), Paid=("GRS_ST_IDR","sum"), OS=("GRS_OS_IDR","sum")).reset_index()
    res_cob["Rasio OS"] = (res_cob["OS"] / res_cob["Paid"].replace(0,np.nan) * 100).fillna(0)
    res_cob = res_cob.sort_values("Paid", ascending=False)
    res_disp = res_cob.copy()
    res_disp.columns = ["COB","Kasus","Paid (Rp)","OS (Rp)","Rasio OS %"]
    styled_base = res_disp.style.format({"Paid (Rp)":"{:,.0f}","OS (Rp)":"{:,.0f}","Rasio OS %":"{:.2f}%"})
    
    def style_zero(v):
        return "color:#fbbf24;font-weight:700;" if isinstance(v,(int,float)) and v==0 else ""
        
    try:
        res_styled = styled_base.map(style_zero, subset=["OS (Rp)"])
    except AttributeError:
        res_styled = styled_base.applymap(style_zero, subset=["OS (Rp)"])
        
    res_styled = res_styled.set_properties(**{"text-align":"center"})
    st.markdown("<div style='font-weight:700;font-size:13px;color:#00008F;margin-bottom:8px;'>Per-COB Channel B — Semua COB menunjukkan OS = 0%</div>", unsafe_allow_html=True)
    st.dataframe(res_styled, use_container_width=True, height=270)

c5a, c5b = st.columns(2)
with c5a:
    os_df = fc.groupby("COB").agg(GRS_ST=("GRS_ST_IDR","sum"), GRS_OS=("GRS_OS_IDR","sum")).reset_index()
    os_df["OS_ratio"] = os_df["GRS_OS"] / os_df["GRS_ST"].replace(0,np.nan) * 100
    os_df = os_df.dropna(subset=["OS_ratio"]).sort_values("OS_ratio",ascending=False)
    colors_os = [RED if v>80 else (AMBER if v>20 else TEAL) for v in os_df["OS_ratio"]]
    fig7 = go.Figure(go.Bar(
        x=os_df["COB"], y=os_df["OS_ratio"],
        marker_color=colors_os,
        text=os_df["OS_ratio"].map(lambda x: f"{x:.0f}%"),
        textposition="outside",
        textfont=dict(size=12, color="#475569"), cliponaxis=False,
        hovertemplate="<b>%{x}</b><br>Rasio Belum Terbayar: %{y:.1f}%<extra></extra>",
        marker_line_width=0,
    ))
    fig7.update_layout(**LAYOUT, height=420, title="Rasio Klaim Belum Terbayar vs Sudah Terbayar per Produk")
    fig7.update_xaxes(title="Jenis Produk (COB)", **AXIS_STYLE)
    fig7.update_yaxes(title="Outstanding / Paid (%)", **AXIS_STYLE)
    st.plotly_chart(fig7, use_container_width=True)

with c5b:
    fig8 = px.histogram(mdt, x="Days_to_Claim", nbins=60,
                        title="Distribusi Hari Munculnya Klaim Sejak Polis Aktif",
                        color_discrete_sequence=[INDIGO], height=420)
    fig8.add_vline(x=30, line_dash="dash", line_color=RED, line_width=1.5,
                   annotation_text=f"Batas 30 hari ({pct_early:.1f}% klaim dini)",
                   annotation_font_size=10, annotation_font_color=RED,
                   annotation_position="top right")
    fig8.update_layout(**LAYOUT)
    fig8.update_xaxes(title="Hari Sejak Polis Aktif", **AXIS_STYLE)
    fig8.update_yaxes(title="Jumlah Klaim", **AXIS_STYLE)
    st.plotly_chart(fig8, use_container_width=True)

st.markdown("</div>", unsafe_allow_html=True)
st.markdown('<div class="gradient-divider"></div>', unsafe_allow_html=True)

# ══════════════════════════════════════════════════════════════
# SECTION 6 — STRATEGIC RECOMMENDATIONS
# ══════════════════════════════════════════════════════════════
st.markdown('<div id="sec6"></div>', unsafe_allow_html=True)
st.markdown("""
<div class="sec-card scroll-anim">
  <div class="sec-header">
    <span class="sec-num-badge">08</span>
    <div>
      <div class="sec-title-sub">Strategic Recommendations</div>
      <div class="sec-title">STRATEGIC RECOMMENDATIONS (REKOMENDASI STRATEGIS)</div>
    </div>
  </div>
</div>
""", unsafe_allow_html=True)

# Rekomendasi Jangka Pendek & Panjang
r1, r2 = st.columns(2)
with r1:
    st.markdown("""
    <div class="act-box danger scroll-anim-left">
        <div class="act-title" style="color:#dc2626">A. Jangka Pendek (Immediate Actions: Mitigasi Risiko & Investigasi)</div>
        <div style="font-size:13px;font-weight:bold;color:#7f1d1d;margin-bottom:6px;">AKSI SEGERA (0-12 BULAN)</div>
        <div style="font-size:12px;color:#64748b;margin-bottom:10px;">Fokus utama pada penghentian kebocoran (leakage control), kepatuhan akuntansi pencadangan klaim, dan penapisan hulu.</div>
        <div class="act-item"><strong>Audit Klaim Hari ke-0 dan Large Loss:</strong> Investigasi terfokus pada performa portofolio Channel B di Branch K untuk membongkar indikasi kecurangan.</div>
        <div class="act-item"><strong>Koreksi Outstanding Reserve 0%:</strong> Penyesuaian wajib estimasi cadangan pada segmen klaim tertunda menggunakan kaidah aktuaria teruji.</div>
        <div class="act-item"><strong>Sistem Deteksi Klaim Dini:</strong> Integrasikan Red Flag Trigger Track otomatis untuk mendeteksi klaim prematur dalam rentang 0-30 hari sejak terbit.</div>
    </div>
    """, unsafe_allow_html=True)
with r2:
    st.markdown("""
    <div class="act-box success scroll-anim-right">
        <div class="act-title" style="color:#059669">B. Jangka Panjang (Strategic Transformation: Optimasi Reasuransi & Diversifikasi)</div>
        <div style="font-size:13px;font-weight:bold;color:#064e3b;margin-bottom:6px;">AKSI jangka panjang (> 1 tahun)</div>
        <div style="font-size:12px;color:#64748b;margin-bottom:10px;">Fokus utama jangka panjang adalah transformasi bisnis total, pertumbuhan berkelanjutan (sustainability), dan inovasi menyeluruh untuk masa depan organisasi.</div>
        <div class="act-item"><strong>Restrukturisasi Strategi Reasuransi:</strong> Meninjau kembali kontrak reasuransi, mengurangi porsi premi yang diserahkan ke reasuradur, dan memilih skema perlindungan yang lebih efisien untuk meningkatkan keuntungan tanpa mengurangi keamanan perusahaan.</div>
        <div class="act-item"><strong>Penguatan Manajemen Risiko dan Profitabilitas:</strong> Memperketat pedoman underwriting melalui pembatasan risiko dan penyesuaian tarif premi, serta menerapkan komisi berbasis kinerja yang dikaitkan dengan tingkat klaim untuk mendorong seleksi risiko yang lebih berkualitas.</div>
        <div class="act-item"><strong>Diversifikasi Portofolio Risiko Rendah:</strong> Menambah produk asuransi dengan risiko klaim yang lebih kecil dan stabil agar perusahaan tidak terlalu bergantung pada bisnis yang berpotensi menimbulkan klaim besar.</div>
        <div class="act-item"><strong>Implementasi Early Warning System (EWS):</strong> Menerapkan sistem deteksi dini untuk menandai klaim yang diajukan dalam 0–30 hari setelah polis aktif agar dapat melalui pemeriksaan khusus sebelum disetujui.</div>
    </div>
    """, unsafe_allow_html=True)

st.markdown(get_footer_html(), unsafe_allow_html=True)
