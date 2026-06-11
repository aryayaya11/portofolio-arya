import os
import base64

def format_rupiah(value, decimals=2):
    sign = "-" if value < 0 else ""
    val_abs = abs(value)
    if val_abs >= 1e12:
        return f"{sign}Rp {val_abs/1e12:,.{decimals}f} Triliun".replace(".00", "")
    elif val_abs >= 1e9:
        return f"{sign}Rp {val_abs/1e9:,.{decimals}f} Miliar".replace(".00", "")
    elif val_abs >= 1e6:
        return f"{sign}Rp {val_abs/1e6:,.{decimals}f} Juta".replace(".00", "")
    else:
        return f"{sign}Rp {val_abs:,.0f}"

def get_hero_html():
    logo_html = ""
    if os.path.exists("logo_axa.png"):
        with open("logo_axa.png", "rb") as f:
            b64 = base64.b64encode(f.read()).decode()
        logo_html = f'<img src="data:image/png;base64,{b64}" class="hero-logo-img" />'

    return f'''
    <div class="hero">
      <div class="hero-inner">
        <div class="hero-top-row">
            {logo_html}
            <span class="hero-badge-text">Data Science Consulting - Group 5 - 2026</span>
        </div>
        <h1>AXA Insurance <br><span>Executive Portofolio Dashboard</span></h1>
        <p class="hero-sub">Strategic Portofolio Analytics · Universitas Airlangga X AXA Insurance</p>
      </div>
    </div>
    '''

def get_empty_state_html():
    return '''
    <div class="empty-state-wrapper">
        <div class="empty-state-icon">
            <span>📭</span>
        </div>
        <h2 class="empty-state-title">Tidak Ada Data</h2>
        <p class="empty-state-desc">
            Kombinasi filter yang Anda pilih tidak memiliki data klaim atau premi. Silakan sesuaikan pilihan Branch, Channel, atau COB di sidebar.
        </p>
    </div>
    '''

def get_footer_html():
    return '''
    <br><br>
    <div class="scroll-anim footer-wrapper">
        <div class="footer-divider-top"></div>
        <div class="footer-brand-row">
            <div class="footer-brand-line"></div>
            <span class="footer-brand-text">AXA Insurance</span>
            <div class="footer-brand-line"></div>
        </div>
        <p class="footer-text">
            Executive Portofolio Dashboard<br>
            <span class="footer-subtext">Universitas Airlangga - Data Science Consulting 2026</span>
        </p>
    </div>
    '''

def get_sidebar_header_html():
    logo_path = "Logo All .png"
    logo_html = ""
    if os.path.exists(logo_path):
        with open(logo_path, "rb") as f:
            b64 = base64.b64encode(f.read()).decode()
        logo_html = f"<img src='data:image/png;base64,{b64}' class='sidebar-logo-img' />"

    return f'''
    <div class="sidebar-header-wrapper">
        {logo_html}
        <div class="sidebar-brand-title">AXA Insurance</div>
        <div class="sidebar-brand-subtitle">Dashboard Filters</div>
        <div class="sidebar-divider-line"></div>
    </div>
    '''

def get_sidebar_info_html():
    return '''
    <div class="sidebar-info-box">
        <div class="sidebar-info-title">Study Case 2026</div>
        <div class="sidebar-info-desc">AXA Insurance × Universitas Airlangga<br>Data Science Consulting - GROUP 5</div>
    </div>
    '''

def get_tab_nav_html():
    return '''
    <div class="tab-nav">
        <a class="tab-link" onclick="document.getElementById('sec1').scrollIntoView({behavior:'smooth'});return false;" href="#sec1">
            <span class="tab-icon"></span><span class="tab-num">01</span> Portofolio Overview
        </a>
        <a class="tab-link" onclick="document.getElementById('sec2').scrollIntoView({behavior:'smooth'});return false;" href="#sec2">
            <span class="tab-icon"></span><span class="tab-num">02</span> Risk-Reward Matrix
        </a>
        <a class="tab-link" onclick="document.getElementById('sec3').scrollIntoView({behavior:'smooth'});return false;" href="#sec3">
            <span class="tab-icon"></span><span class="tab-num">03</span> Underwriting Margin
        </a>
        <a class="tab-link" onclick="document.getElementById('sec4').scrollIntoView({behavior:'smooth'});return false;" href="#sec4">
            <span class="tab-icon"></span><span class="tab-num">04</span> IQR &amp; Outliers
        </a>
        <a class="tab-link" onclick="document.getElementById('sec5').scrollIntoView({behavior:'smooth'});return false;" href="#sec5">
            <span class="tab-icon"></span><span class="tab-num">05</span> Reserving &amp; Duration
        </a>
        <a class="tab-link" onclick="document.getElementById('sec6').scrollIntoView({behavior:'smooth'});return false;" href="#sec6">
            <span class="tab-icon"></span><span class="tab-num">06</span> Recommendations
        </a>
        <a class="tab-link" onclick="document.getElementById('sec7').scrollIntoView({behavior:'smooth'});return false;" href="#sec7">
            <span class="tab-icon"></span><span class="tab-num">07</span> Executive Summary
        </a>
    </div>
    '''

def get_q1_cash_cow_card_html(q1_gwp, q1_claim, q1_policies, q1_proporsi):
    return f"""
    <div class="card-q1">
        <div class="card-q1-header">
            <span class="badge-q1">Q1</span>
            <span class="title-q1">CASH COW</span>
        </div>
        <div class="card-grid">
            <div class="card-stat">
                <div class="stat-label">Total GWP</div>
                <div class="stat-value text-green-light">{format_rupiah(q1_gwp, 0)}</div>
            </div>
            <div class="card-stat">
                <div class="stat-label">Total Klaim</div>
                <div class="stat-value">{format_rupiah(q1_claim, 0)}</div>
            </div>
            <div class="card-stat">
                <div class="stat-label">Polis Dilindungi</div>
                <div class="stat-value">{q1_policies:,}</div>
            </div>
            <div class="card-stat">
                <div class="stat-label">Proporsi Premi</div>
                <div class="stat-value text-green-light">{q1_proporsi:.1f}%</div>
            </div>
        </div>
    </div>
    """

def get_q4_bleeding_card_html(q4_gwp, q4_claim, q4_lr, q4_segmen):
    return f"""
    <div class="card-q4">
        <div class="card-q4-header">
            <span class="badge-q4">Q4</span>
            <span class="title-q4">BLEEDING</span>
        </div>
        <div class="card-grid">
            <div class="card-stat">
                <div class="stat-label">Total GWP</div>
                <div class="stat-value">{format_rupiah(q4_gwp, 2)}</div>
            </div>
            <div class="card-stat">
                <div class="stat-label">Total Klaim</div>
                <div class="stat-value text-red-light">{format_rupiah(q4_claim, 2)}</div>
            </div>
            <div class="card-stat">
                <div class="stat-label">Loss Ratio</div>
                <div class="stat-value text-red-light">{q4_lr:.1f}%</div>
            </div>
            <div class="card-stat">
                <div class="stat-label">Segmen</div>
                <div class="stat-value">{q4_segmen}</div>
            </div>
        </div>
    </div>
    """

def get_most_efficient_branch_html(eff_name, lr):
    return f"""
    <div class="kpi-header-box box-green">
        <div class="khi-label">🏆 Cabang Paling Efisien</div>
        <div class="khi-title">{eff_name}</div>
        <div class="khi-sub">Loss Ratio Terendah: <b>{lr:.2f}%</b></div>
    </div>
    """

def get_max_gwp_branch_html(big_name, gwp, lr):
    return f"""
    <div class="kpi-header-box box-amber">
        <div class="khi-label">⚠️ GWP Terbesar (Paradoks)</div>
        <div class="khi-title">{big_name}</div>
        <div class="khi-sub">GWP: {format_rupiah(gwp, 2)} | LR: {lr:.1f}%</div>
    </div>
    """

def get_worst_net_channel_html(loss_name, net_val, lr):
    net_str = f"+{format_rupiah(net_val, 2)}" if net_val >= 0 else format_rupiah(net_val, 2)
    return f"""
    <div class="kpi-header-box box-red">
        <div class="khi-label">🔴 Channel Net Result Terburuk</div>
        <div class="khi-title">{loss_name}</div>
        <div class="khi-sub">Net: {net_str} | LR: {lr:.2f}%</div>
    </div>
    """

def get_reinsurance_funnel_html(gross_lr, lr_reduction, net_lr):
    return f"""
    <div class="funnel-container">
        <div class="funnel-title">SEBELUM VS SESUDAH REASURANSI</div>
        <div class="funnel-sub">Gross Incurred Claim / GWP</div>
        <div class="funnel-box box-red-solid">
            <div class="funnel-box-label">Gross Loss Ratio</div>
            <div class="funnel-box-value">{gross_lr:.2f}%</div>
        </div>
        <div class="funnel-arrow">↓ <span class="funnel-arrow-text">turun {lr_reduction:.2f} percentage points</span></div>
        <div class="funnel-box box-amber-solid">
            <div class="funnel-box-label">Net Loss Ratio</div>
            <div class="funnel-box-value">{net_lr:.2f}%</div>
        </div>
        <div class="funnel-sub mt-10">Net Incurred Claim / GWP</div>
    </div>
    """

def get_reinsurance_impact_html(rwp_to_gwp, ri_rec_ratio, gross_uw_margin, net_uw_margin, margin_variance):
    var_class_bg = "var-bg-red" if margin_variance < 0 else "var-bg-green"
    var_class_text = "var-text-red" if margin_variance < 0 else "var-text-green"
    var_sign = "−" if margin_variance < 0 else "+"
    
    return f"""
    <div class="margin-impact-container">
        <div class="funnel-title">SEBELUM VS SESUDAH REASURANSI</div>
        <div class="impact-grid">
            <div class="impact-stat">
                <div class="impact-stat-label">RWP to GWP Ratio</div>
                <div class="impact-stat-value text-blue">{rwp_to_gwp:.2f}%</div>
                <div class="impact-stat-sub">RWP / GWP</div>
            </div>
            <div class="impact-stat">
                <div class="impact-stat-label">RI Recovery Ratio</div>
                <div class="impact-stat-value text-green">{ri_rec_ratio:.2f}%</div>
                <div class="impact-stat-sub">RI Recovery / Gross Incurred Claim</div>
            </div>
        </div>
        <div class="margin-title">MARGIN IMPACT</div>
        <div class="margin-flow">
            <div class="margin-flow-box">
                <div class="margin-flow-label">GROSS UNDERWRITING MARGIN</div>
                <div class="margin-flow-value">{format_rupiah(gross_uw_margin, 2)}</div>
            </div>
            <div class="margin-flow-arrow">→</div>
            <div class="margin-flow-box">
                <div class="margin-flow-label">NET UNDERWRITING MARGIN</div>
                <div class="margin-flow-value">{format_rupiah(net_uw_margin, 2)}</div>
            </div>
        </div>
        <div class="margin-variance-box {var_class_bg}">
            <div class="variance-label">MARGIN VARIANCE (After Reinsurance)</div>
            <div class="variance-value {var_class_text}">
                {var_sign}{format_rupiah(abs(margin_variance), 2)}
            </div>
        </div>
    </div>
    """
