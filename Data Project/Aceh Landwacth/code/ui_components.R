# UI Components for Aceh LandWatch Dashboard
# Source this file in app.R

library(bslib)
library(htmltools)
library(plotly)
library(leaflet)

ui_sidebar <- function(df_gabung, peta_aceh) {
  kota_aceh <- sort(unique(peta_aceh$Kota_Map))
  sidebar(
    width = 300,
    h4("Filter Dashboard"),
    p(
      "Pilih tahun dan wilayah untuk mengeksplor kondisi hutan, pertanian, perkebunan, dan bencana.",
      class = "section-note"
    ),
    selectInput(
      "input_tahun", "Pilih Tahun",
      choices = sort(unique(df_gabung$Tahun)),
      selected = max(df_gabung$Tahun)
    ),
    selectInput(
      "input_kota", "Pilih Kabupaten/Kota",
      choices = c("Semua Wilayah", kota_aceh),
      selected = "Semua Wilayah"
    ),
    selectInput(
      "input_indikator", "Indikator pada Peta",
      choices = c(
        "Status Klasifikasi (Aman/Waspada/Darurat)" = "Status",
        "Kehilangan Hutan (Ha)" = "Hutan",
        "Total Bencana Relevan" = "Bencana",
        "Luas Panen Padi (Ha)" = "Padi"
      ),
      selected = "Status"
    ),
    hr(),
    div(
      class = "section-note",
      strong("Sumber data: "),
      "Provinsi Aceh Dalam Angka Tahun 2021-2026"
    )
  )
}

ui_overview_tab <- function() {
  nav_panel(
    title = "Overview",
    layout_columns(
      col_widths = c(4, 4, 4),
      div(
        class = "metric-box",
        div(class = "metric-icon hutan", icon("tree", lib = "font-awesome")),
        div(
          class = "metric-content",
          div(class = "metric-title", "Total Kehilangan Hutan"),
          div(class = "metric-value", textOutput("kpi_hutan", inline = TRUE))
        )
      ),
      div(
        class = "metric-box",
        div(class = "metric-icon bencana", icon("house-damage", lib = "font-awesome")),
        div(
          class = "metric-content",
          div(class = "metric-title", "Total Desa Terdampak"),
          div(class = "metric-value", textOutput("kpi_bencana", inline = TRUE))
        )
      ),
      div(
        class = "metric-box",
        div(class = "metric-icon padi", icon("seedling", lib = "font-awesome")),
        div(
          class = "metric-content",
          div(class = "metric-title", "Total Produksi Padi"),
          div(class = "metric-value", textOutput("kpi_padi", inline = TRUE))
        )
      )
    ),
    layout_columns(
      col_widths = c(12),
      card(
        card_header(icon("leaf", lib = "font-awesome"), " Ringkasan Wilayah Terpilih"),
        uiOutput("teks_narasi_ui")
      )
    ),
    layout_columns(
      col_widths = c(12),
      card(
        card_header("Peta Sebaran Wilayah Aceh"),
        leafletOutput("peta_dinamis", height = "550px")
      )
    ),
    layout_columns(
      col_widths = c(7, 5),
      card(
        full_screen = TRUE,
        card_header(textOutput("judul_grafik_daerah")),
        plotlyOutput("plot_tren_daerah", height = "420px")
      ),
      card(
        full_screen = TRUE,
        card_header(textOutput("judul_grafik_bencana")),
        plotlyOutput("plot_jenis_bencana", height = "420px")
      )
    )
  )
}

ui_pertanian_tab <- function(ada_sheet_sawit) {
  nav_panel(
    "Sektor Pertanian",
    layout_columns(
      col_widths = c(12),
      card(
        card_header("Insight Pertanian"),
        div(textOutput("insight_pertanian"), class = "insight-box")
      )
    ),
    layout_columns(
      col_widths = c(8, 4),
      card(
        full_screen = TRUE,
        card_header("Bubble Chart: Produksi, Luas Panen, dan Produktivitas"),
        plotlyOutput("plot_bubble_pertanian", height = "500px")
      ),
      card(
        card_header("Top 3 Penghasil Padi"),
        uiOutput("top3_padi_cards")
      )
    ),
    layout_columns(
      col_widths = c(12),
      card(
        card_header("Cara Membaca"),
        p(
          "Bubble chart ini menggunakan Luas Panen sebagai sumbu X, Produksi Padi sebagai sumbu Y, dan Produktivitas sebagai ukuran bubble. Visual ini membantu membedakan wilayah yang produksinya tinggi karena luasan panen besar dengan wilayah yang unggul karena efisiensi produktivitas.",
          class = "section-note"
        )
      )
    )
  )
}

ui_bencana_tab <- function() {
  nav_panel(
    "Sektor Bencana",
    layout_columns(
      col_widths = c(12),
      card(
        card_header("Catatan Metodologi"),
        div(
          "Dalam analisis ini, jenis bencana diseleksi untuk memastikan relevansi terhadap perubahan tutupan lahan. Jenis bencana yang tidak memiliki keterkaitan langsung dengan kondisi tutupan hutan, seperti gempa bumi, gelombang pasang/abrasi, dan cuaca ekstrem, tidak dimasukkan dalam analisis untuk menghindari bias. Analisis bencana difokuskan pada banjir, tanah longsor, serta kebakaran hutan dan lahan.",
          class = "insight-box"
        )
      )
    ),
    layout_columns(
      col_widths = c(12),
      card(
        card_header("Insight Bencana"),
        div(textOutput("insight_bencana"), class = "insight-box")
      )
    ),
    layout_columns(
      col_widths = c(8, 4),
      card(
        full_screen = TRUE,
        card_header("Bubble Chart: Kehilangan Hutan vs Bencana"),
        plotlyOutput("plot_bubble_bencana", height = "500px")
      ),
      card(
        card_header("Top 3 Wilayah Rawan"),
        uiOutput("top3_bencana_cards")
      )
    ),
    layout_columns(
      col_widths = c(12),
      card(
        card_header("Cara Membaca"),
        p(
          "Sumbu X menunjukkan kehilangan hutan, sumbu Y menunjukkan total kejadian bencana relevan, dan ukuran bubble menunjukkan jumlah desa terdampak. Wilayah yang berada di kanan-atas dengan bubble besar cenderung menjadi prioritas pengawasan.",
          class = "section-note"
        )
      )
    )
  )
}

ui_perkebunan_tab <- function(ada_sheet_sawit, df_sawit_kab) {
  nav_panel(
    "Sektor Perkebunan",
    layout_columns(
      col_widths = c(12),
      card(
        card_header("Insight Perkebunan"),
        div(textOutput("insight_perkebunan"), class = "insight-box")
      )
    ),
    layout_columns(
      col_widths = c(7, 5),
      card(
        full_screen = TRUE,
        card_header("Top 10 Komoditas Perkebunan Aceh"),
        plotlyOutput("plot_komoditas", height = "500px")
      ),
      card(
        card_header("Top Kabupaten Penghasil Sawit"),
        if (ada_sheet_sawit) {
          tagList(
            selectInput(
              "input_tahun_sawit",
              "Filter Tahun Sawit",
              choices = sort(unique(df_sawit_kab$Tahun)),
              selected = max(df_sawit_kab$Tahun)
            ),
            plotlyOutput("plot_sawit_kabupaten", height = "420px")
          )
        } else {
          div(
            class = "empty-card",
            strong("Data sawit kabupaten belum tersedia."), br(),
            "Tambahkan sheet bernama 'SawitKabupaten' dengan kolom Kabupaten/Kota, Tahun, dan Luas Sawit untuk mengaktifkan bagian ini."
          )
        }
      )
    ),
    layout_columns(
      col_widths = c(12),
      card(
        card_header("Catatan"),
        p(
          "Data komoditas perkebunan utama tersedia pada level provinsi. Jika data luas sawit kabupaten tersedia, dashboard ini juga dapat menampilkan ranking kabupaten berdasarkan tahun terpilih.",
          class = "section-note"
        )
      )
    )
  )
}

ui_analisis_tabs <- function(ada_sheet_sawit, df_sawit_kab) {
  navset_tab(
    ui_pertanian_tab(ada_sheet_sawit),
    ui_bencana_tab(),
    ui_perkebunan_tab(ada_sheet_sawit, df_sawit_kab)
  )
}

ui_about_tab <- function() {
  nav_panel(
    title = "Tentang Klasifikasi",
    card(
      card_header("Logika Klasifikasi Wilayah"),
      h4("Pendekatan yang digunakan"),
      p("Klasifikasi wilayah menggunakan pendekatan rule-based berbasis kuartil ketiga (persentil 75) pada kehilangan hutan dan total bencana relevan."),
      tags$ul(
        tags$li(tags$b("Darurat Pengawasan:"), " kehilangan hutan tinggi dan bencana tinggi."),
        tags$li(tags$b("Waspada:"), " salah satu indikator tinggi."),
        tags$li(tags$b("Aman:"), " kedua indikator relatif lebih rendah.")
      ),
      p("Tujuannya adalah membantu mengidentifikasi wilayah yang lebih perlu diprioritaskan dalam pengawasan dan mitigasi.")
    )
  )
}
