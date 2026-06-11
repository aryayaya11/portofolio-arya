# =========================================================================================
# DASHBOARD INTERAKTIF ALIH FUNGSI LAHAN, HUTAN, PERTANIAN, DAN BENCANA ACEH (2021-2025)
# =========================================================================================

library(shiny)
library(bslib)
library(leaflet)
library(dplyr)
library(sf)
library(plotly)
library(readxl)
library(stringr)
library(tidyr)
library(scales)
library(htmltools)

utils::globalVariables(c(
  "Tahun", "Kehilangan_Hutan", "Total_Bencana", "Kota",
  "Luas_Ribuan_Ha", "Komoditas_Indo", "Status",
  "Warna_Status", "ADM2_EN", "Jenis_Bencana",
  "Persen_Hutan", "Luas_Hutan_Total", "Produktivitas", "Produksi",
  "Total_Desa_Terdampak", "Kejadian_Bencana", "Desa_Terdampak",
  "Luas_Panen", "Kota_Map", "Kommoditas", "Luas_Sawit", "Skor_Rawan"
))

# ==============================================================================
# FUNGSI BANTU
# ==============================================================================
bersihkan_angka <- function(x) {
  txt <- str_squish(as.character(x))
  txt <- str_replace_all(txt, ",", ".")
  txt <- ifelse(txt == "-" | txt == "", "0", txt)
  suppressWarnings(as.numeric(txt))
}

fmt_num <- function(x, digit = 0) {
  ifelse(is.na(x), "-", comma(round(x, digit)))
}

buat_top3_cards <- function(df, nama_kolom_nilai, icon_name = "medal", suffix = "") {
  if (nrow(df) == 0) {
    return(div(class = "empty-card", "Data tidak tersedia"))
  }

  items <- lapply(seq_len(min(3, nrow(df))), function(i) {
    row <- df[i, ]
    medal_class <- c("gold", "silver", "bronze")[i]

    div(
      class = paste("mini-rank-card", medal_class),
      div(class = "mini-rank-badge", paste0("#", i)),
      div(class = "mini-rank-icon", icon(icon_name, lib = "font-awesome")),
      div(
        class = "mini-rank-content",
        div(class = "mini-rank-title", as.character(row$Kota)),
        div(class = "mini-rank-value", paste0(fmt_num(row[[nama_kolom_nilai]], 2), suffix))
      )
    )
  })

  do.call(tagList, items)
}

# ==============================================================================
# PATH DATA
# ==============================================================================
excel_path <- "Data BPS Aceh 2021-2025.xlsx"
geojson_path <- "Peta/sumatra_simple.geojson"

# ==============================================================================
# BACA DATA
# ==============================================================================

# -------------------
# Var1 - Hutan
# -------------------
df_hutan <- read_excel(excel_path, sheet = "Var1") %>%
  rename(
    Kota = `Kabupaten/Kota`,
    Kehilangan_Hutan = `Kehilangan Tutupan Hutan (Ha)`,
    Persen_Hutan = `Persentase Tutupan Hutan (%)`,
    Luas_Hutan_Total = `Luas Tutupan Hutan (Ha)`
  ) %>%
  mutate(
    Kota = str_squish(Kota),
    Tahun = as.numeric(Tahun),
    Kehilangan_Hutan = bersihkan_angka(Kehilangan_Hutan),
    Persen_Hutan = bersihkan_angka(Persen_Hutan),
    Luas_Hutan_Total = bersihkan_angka(Luas_Hutan_Total)
  )

# -------------------
# Var3 - Padi
# -------------------
df_padi <- read_excel(excel_path, sheet = "Var3")
names(df_padi)[2] <- "Tahun"

df_padi <- df_padi %>%
  rename(
    Luas_Panen = `Luas Panen`,
    Produksi = `Produksi Padi`,
    Produktivitas = `Produktivitas`
  ) %>%
  mutate(
    Kota = str_squish(Kota),
    Tahun = as.numeric(Tahun),
    Produksi = bersihkan_angka(Produksi),
    Luas_Panen = bersihkan_angka(Luas_Panen),
    Produktivitas = bersihkan_angka(Produktivitas)
  )

# -------------------
# Var5 - Kejadian Bencana
# -------------------
df_bencana_kejadian_raw <- read_excel(excel_path, sheet = "Var5") %>%
  rename(
    Kota = `Kabupaten/Kota`,
    Kejadian_Bencana = `Jumlah Bencana`,
    Jenis_Bencana = `Jenis Bencana`
  ) %>%
  mutate(
    Kota = str_squish(Kota),
    Tahun = as.numeric(Tahun),
    Kejadian_Bencana = bersihkan_angka(Kejadian_Bencana),
    Jenis_Bencana = str_squish(Jenis_Bencana)
  ) %>%
  mutate(Kota = str_replace(Kota, "^Kota\\s+", ""))

# -------------------
# Var6 - Desa Terdampak
# -------------------
df_bencana_desa_raw <- read_excel(excel_path, sheet = "Var6") %>%
  rename(
    Kota = `Kabupaten/Kota`,
    Desa_Terdampak = `Jumlah Desa/Kelurahan yang Mengalami Bencana`,
    Jenis_Bencana = `Jenis Bencana`
  ) %>%
  mutate(
    Kota = str_squish(Kota),
    Tahun = as.numeric(Tahun),
    Desa_Terdampak = bersihkan_angka(Desa_Terdampak),
    Jenis_Bencana = str_squish(Jenis_Bencana)
  ) %>%
  mutate(Kota = str_replace(Kota, "^Kota\\s+", ""))

# -------------------
# Seleksi bencana relevan
# -------------------
jenis_bencana_relevan <- c(
  "Banjir",
  "Tanah Longsor",
  "Kebakaran Hutan dan Lahan",
  "Kebakaran Hutan",
  "Kebakaran Lahan"
)

df_bencana_kejadian <- df_bencana_kejadian_raw %>%
  filter(Jenis_Bencana %in% jenis_bencana_relevan)

df_bencana_desa <- df_bencana_desa_raw %>%
  filter(Jenis_Bencana %in% jenis_bencana_relevan)

# -------------------
# Var2 - Perkebunan provinsi
# -------------------
df_kebun <- read_excel(excel_path, sheet = "Var2")
names(df_kebun)[3] <- "Luas_Ribuan_Ha"

df_kebun <- df_kebun %>%
  mutate(
    Tahun = as.numeric(Tahun),
    Luas_Ribuan_Ha = bersihkan_angka(Luas_Ribuan_Ha)
  ) %>%
  mutate(Luas_Ribuan_Ha = replace_na(Luas_Ribuan_Ha, 0))

# -------------------
# Sawit kabupaten (opsional)
# Sheet yang dicek: SawitKabupaten
# Kolom yang diharapkan:
# - Kabupaten/Kota
# - Tahun
# - Luas Sawit
# -------------------
sheet_names <- excel_sheets(excel_path)

ada_sheet_sawit <- "SawitKabupaten" %in% sheet_names

if (ada_sheet_sawit) {
  df_sawit_kab <- read_excel(excel_path, sheet = "SawitKabupaten") %>%
    rename(
      Kota = `Kabupaten/Kota`,
      Luas_Sawit = `Luas Sawit`
    ) %>%
    mutate(
      Kota = str_squish(Kota),
      Tahun = as.numeric(Tahun),
      Luas_Sawit = bersihkan_angka(Luas_Sawit)
    ) %>%
    filter(!is.na(Tahun), !is.na(Luas_Sawit))
} else {
  df_sawit_kab <- tibble(
    Kota = character(),
    Tahun = numeric(),
    Luas_Sawit = numeric()
  )
}

# -------------------
# Agregasi bencana
# -------------------
df_bencana <- df_bencana_kejadian %>%
  group_by(Kota, Tahun) %>%
  summarise(Total_Bencana = sum(Kejadian_Bencana, na.rm = TRUE), .groups = "drop") %>%
  left_join(
    df_bencana_desa %>%
      group_by(Kota, Tahun) %>%
      summarise(Total_Desa_Terdampak = sum(Desa_Terdampak, na.rm = TRUE), .groups = "drop"),
    by = c("Kota", "Tahun")
  )

# -------------------
# Master table
# -------------------
df_gabung <- df_hutan %>%
  left_join(df_padi, by = c("Kota", "Tahun")) %>%
  left_join(df_bencana, by = c("Kota", "Tahun")) %>%
  mutate(across(where(is.numeric), ~ replace_na(.x, 0)))

# ==============================================================================
# PETA
# ==============================================================================
peta_sumatra <- st_read(geojson_path, quiet = TRUE)

peta_sumatra <- peta_sumatra %>%
  mutate(
    Kota_Map = str_replace_all(ADM2_EN, "Kabupaten |Kota ", ""),
    Kota_Map = str_squish(Kota_Map)
  )

peta_aceh <- peta_sumatra %>%
  filter(grepl("Aceh", ADM1_EN, ignore.case = TRUE)) %>%
  group_by(ADM2_EN) %>%
  summarise(geometry = st_union(geometry), .groups = "drop") %>%
  mutate(
    Kota_Map = str_replace_all(ADM2_EN, "Kabupaten |Kota ", ""),
    Kota_Map = str_squish(Kota_Map)
  ) %>%
  filter(Kota_Map %in% df_gabung$Kota)

# ==============================================================================
# THEME DASHBOARD
# ==============================================================================
tema_dashboard <- bs_theme(
  version = 5,
  bootswatch = "minty",
  primary = "#165b33",
  secondary = "#64748b",
  success = "#22c55e",
  info = "#0ea5e9",
  warning = "#f59e0b",
  danger = "#ef4444",
  bg = "#f8fff9",
  fg = "#0f172a",
  base_font = font_google("Inter", local = FALSE),
  heading_font = font_google("Poppins", local = FALSE)
)

# ==============================================================================
# UI
# ==============================================================================
source("ui_components.R")

ui <- page_navbar(
  theme = tema_dashboard,
  includeCSS("styles.css"),
  title = "Aceh LandWatch",
  fillable = FALSE,
  sidebar = ui_sidebar(df_gabung, peta_aceh),
  ui_overview_tab(),
  nav_panel(
    title = "Analisis Eksploratif",
    ui_analisis_tabs(ada_sheet_sawit, df_sawit_kab)
  ),
  ui_about_tab()
)

# ==============================================================================
# SERVER
# ==============================================================================
server <- function(input, output, session) {
  # ----------------------------------------------------------------------------
  # Data tahun terpilih
  # ----------------------------------------------------------------------------
  data_tahun_ini <- reactive({
    data_filter <- df_gabung %>% filter(Tahun == input$input_tahun)

    batas_hutan <- quantile(data_filter$Kehilangan_Hutan, 0.75, na.rm = TRUE)
    batas_bencana <- quantile(data_filter$Total_Bencana, 0.75, na.rm = TRUE)

    data_filter %>%
      mutate(
        Hutan_Tinggi = Kehilangan_Hutan >= batas_hutan,
        Bencana_Tinggi = Total_Bencana >= batas_bencana,
        Status = case_when(
          Hutan_Tinggi & Bencana_Tinggi ~ "Darurat Pengawasan",
          Hutan_Tinggi | Bencana_Tinggi ~ "Waspada",
          TRUE ~ "Aman"
        ),
        Warna_Status = case_when(
          Status == "Darurat Pengawasan" ~ "#c0392b", # Merah
          Status == "Waspada" ~ "#f39c12", # Oranye
          Status == "Aman" ~ "#27ae60" # Hijau
        )
      )
  })

  # ----------------------------------------------------------------------------
  # KPI
  # ----------------------------------------------------------------------------
  output$kpi_hutan <- renderText({
    paste0(fmt_num(sum(data_tahun_ini()$Kehilangan_Hutan, na.rm = TRUE)), " Ha")
  })

  output$kpi_bencana <- renderText({
    fmt_num(sum(data_tahun_ini()$Total_Desa_Terdampak, na.rm = TRUE))
  })

  output$kpi_padi <- renderText({
    paste0(fmt_num(sum(data_tahun_ini()$Produksi, na.rm = TRUE)), " ton")
  })

  # ----------------------------------------------------------------------------  
  # Peta reaktif
  # ----------------------------------------------------------------------------  
  peta_reaktif <- reactive({
    df <- data_tahun_ini()

    # Join data statistik ke geometri peta Aceh menggunakan kunci 'Kota_Map' (nama kabupaten sudah dibersihkan dari prefix 'Kabupaten/Kota')
    peta <- peta_aceh %>%
      left_join(df, by = c("Kota_Map" = "Kota"))

    return(peta)
  })

  # ----------------------------------------------------------------------------  
  # Selected Kota from map click
  # ----------------------------------------------------------------------------  
  selected_kota <- reactiveVal("Semua Wilayah")

  # Event handler klik polygon peta: update selected_kota dan sinkronkan dropdown input_kota
  observeEvent(input$peta_dinamis_shape_click, {
    click <- input$peta_dinamis_shape_click
    if (!is.null(click$id)) {
      kota_selected <- click$id
      selected_kota(kota_selected)
      updateSelectInput(session, "input_kota", selected = kota_selected)
    }
  })

# Selected Kota sync between dropdown and map
  selected_kota_map <- reactiveVal(NULL)
  
  # Map click → dropdown + highlight
  observeEvent(input$peta_dinamis_shape_click, {
    click <- input$peta_dinamis_shape_click
    if (!is.null(click$id)) {
      selected_kota_map(click$id)
      updateSelectInput(session, "input_kota", selected = click$id)
      leafletProxy("peta_dinamis") %>%
        clearGroup("selected") %>%
        addPolygons(
          data = peta_aceh %>% filter(ADM2_EN == click$id),
          group = "selected",
          fillColor = "#fbbf24",
          weight = 5,
          color = "#f59e0b",
          fillOpacity = 0.7,
          stroke = TRUE
        )
    }
  })
  
  # Dropdown → map highlight (bidirectional sync)
  observeEvent(input$input_kota, {
    req(input$input_kota)
    proxy <- leafletProxy("peta_dinamis")
    proxy %>% clearGroup("selected")
    
    if (input$input_kota != "Semua Wilayah") {
      selected_poly <- peta_aceh %>% filter(Kota_Map == input$input_kota)
      proxy %>%
        addPolygons(
          data = selected_poly,
          group = "selected",
          fillColor = "#fbbf24",
          weight = 5,
          color = "#f59e0b",
          fillOpacity = 0.7,
          stroke = TRUE,
          layerId = ~ADM2_EN
        )
      selected_kota_map(input$input_kota)
    } else {
      selected_kota_map(NULL)
    }
  }, ignoreInit = TRUE)
  
  # kota_terpilih for other logic
  kota_terpilih <- reactive({
    if (!is.null(selected_kota_map()) && selected_kota_map() != "Semua Wilayah") {
      selected_kota_map()
    } else {
      req(input$input_kota)
      input$input_kota
    }
  })

  # ----------------------------------------------------------------------------
  # Narasi overview
  # ----------------------------------------------------------------------------
  output$teks_narasi_ui <- renderUI({
    req(input$input_tahun)

    df <- data_tahun_ini()

    if (kota_terpilih() == "Semua Wilayah") {
      div(
        class = "insight-box",
        paste0(
          "Pada tahun ", input$input_tahun, ", Provinsi Aceh secara keseluruhan ",
          "mengalami kehilangan tutupan hutan sebesar ", fmt_num(sum(df$Kehilangan_Hutan, na.rm = TRUE)),
          " Ha. Pada saat yang sama, tercatat ", fmt_num(sum(df$Total_Bencana, na.rm = TRUE)),
          " kejadian bencana relevan yang berdampak pada ", fmt_num(sum(df$Total_Desa_Terdampak, na.rm = TRUE)),
          " desa/kelurahan. Di sektor pertanian, luas panen mencapai ",
          fmt_num(sum(df$Luas_Panen, na.rm = TRUE)), " Ha, dengan produksi padi ",
          fmt_num(sum(df$Produksi, na.rm = TRUE), 2), " ton."
        )
      )
    } else {
      data_kota <- df %>% filter(Kota == kota_terpilih())

      if (nrow(data_kota) == 0) {
        div("Data tidak ditemukan untuk wilayah dan tahun yang dipilih.", class = "insight-box")
      } else {
        narasi_base <- paste0(
          "Pada tahun ", input$input_tahun, ", wilayah ", kota_terpilih(),
          " mengalami kehilangan tutupan hutan sebesar ", fmt_num(data_kota$Kehilangan_Hutan),
          " Ha dengan sisa tutupan hutan ", data_kota$Persen_Hutan, "% (",
          fmt_num(data_kota$Luas_Hutan_Total), " Ha). ",
          "Pada saat yang sama, tercatat ", fmt_num(data_kota$Total_Bencana),
          " kejadian bencana relevan yang berdampak pada ", fmt_num(data_kota$Total_Desa_Terdampak),
          " desa/kelurahan. Di sektor pertanian, luas panen mencapai ",
          fmt_num(data_kota$Luas_Panen), " Ha, produksi padi ",
          fmt_num(data_kota$Produksi, 2), " ton, dan produktivitas ",
          round(data_kota$Produktivitas, 2), " kuintal/ha."
        )
        
        status_explain <- switch(data_kota$Status,
          "Darurat Pengawasan" = "Kombinasi degradasi hutan ekstrem + frekuensi bencana tinggi. Risiko ekosistem & pangan kritis.",
          "Waspada" = "Salah satu indikator (hutan/bencana) melebihi threshold Q3. Potensi eskalasi jika tidak ditangani.",
          "Aman" = "Kedua indikator di bawah threshold. Tetap lakukan pemantauan rutin."
        )
        
        div(
          class = paste("insight-box", tolower(gsub(" ", "-", data_kota$Status))),
          HTML(narasi_base), br(), br(),
          strong("Status: "), span(strong(data_kota$Status), style = paste0("color: ", data_kota$Warna_Status, ";")), br(),
          status_explain
        )
      }
    }
  })

  # ----------------------------------------------------------------------------
  # Insight pertanian
  # ----------------------------------------------------------------------------
  output$insight_pertanian <- renderText({
    df <- data_tahun_ini()

    kandidat <- df %>%
      filter(
        Produksi >= quantile(Produksi, 0.75, na.rm = TRUE),
        Luas_Panen >= quantile(Luas_Panen, 0.75, na.rm = TRUE)
      ) %>%
      arrange(desc(Produksi))

    if (nrow(kandidat) == 0) {
      return("Belum terlihat wilayah yang sangat menonjol pada kombinasi produksi padi dan luas panen pada tahun terpilih.")
    }

    wilayah <- paste(head(kandidat$Kota, 3), collapse = ", ")

    paste0(
      "Wilayah yang paling menonjol di sektor pertanian pada tahun ini adalah ",
      wilayah,
      ". Fokus pembacaan utama ada pada apakah produksi tinggi dicapai karena luas panen yang besar, atau karena produktivitas yang lebih efisien."
    )
  })

  # ----------------------------------------------------------------------------
  # Insight bencana
  # ----------------------------------------------------------------------------
  output$insight_bencana <- renderText({
    df_filtered <- if (kota_terpilih() == "Semua Wilayah") {
      data_tahun_ini()
    } else {
      data_tahun_ini() %>% filter(Kota == kota_terpilih())
    }
    
    df <- df_filtered %>%
      mutate(
        Skor_Rawan = as.numeric(scale(Kehilangan_Hutan)) +
          as.numeric(scale(Total_Bencana)) +
          as.numeric(scale(Total_Desa_Terdampak))
      ) %>%
      arrange(desc(Skor_Rawan))

    kandidat <- df %>% filter(Total_Bencana > 0 | Total_Desa_Terdampak > 0)

    if (nrow(kandidat) == 0) {
      return("Belum ada wilayah yang menunjukkan tekanan bencana relevan yang menonjol pada tahun terpilih.")
    }

    wilayah <- paste(head(kandidat$Kota, 3), collapse = ", ")

    paste0(
      "Wilayah dengan tekanan bencana paling menonjol adalah ", wilayah,
      ". Penentuan ini mempertimbangkan kombinasi kehilangan hutan, total bencana relevan, dan desa terdampak pada tahun terpilih."
    )
  })

  # ----------------------------------------------------------------------------
  # Insight perkebunan
  # ----------------------------------------------------------------------------
  output$insight_perkebunan <- renderText({
    df_now <- df_kebun %>%
      filter(Tahun == input$input_tahun) %>%
      mutate(Komoditas_Indo = sapply(strsplit(as.character(Kommoditas), "/"), `[`, 1)) %>%
      arrange(desc(Luas_Ribuan_Ha))

    if (nrow(df_now) == 0) {
      return("Data perkebunan tidak tersedia pada tahun terpilih.")
    }

    top1 <- df_now$Komoditas_Indo[1]
    top1_val <- df_now$Luas_Ribuan_Ha[1]

    paste0(
      "Komoditas perkebunan terluas di Aceh pada tahun ", input$input_tahun,
      " adalah ", str_trim(top1), " dengan luas sekitar ", fmt_num(top1_val),
      " ribu ha. Visual ini digunakan sebagai konteks sektor perkebunan di tingkat provinsi."
    )
  })

  # ----------------------------------------------------------------------------
  # Top 3 penghasil padi cards
  # ----------------------------------------------------------------------------
  output$top3_padi_cards <- renderUI({
    df <- data_tahun_ini() %>%
      arrange(desc(Produksi)) %>%
      slice_head(n = 3)

    buat_top3_cards(df, "Produksi", icon_name = "seedling", suffix = " ton")
  })

  # ----------------------------------------------------------------------------
  # Top 3 wilayah rawan cards
  # ----------------------------------------------------------------------------
  output$top3_bencana_cards <- renderUI({
    df <- data_tahun_ini() %>%
      mutate(
        Skor_Rawan = as.numeric(scale(Kehilangan_Hutan)) +
          as.numeric(scale(Total_Bencana)) +
          as.numeric(scale(Total_Desa_Terdampak))
      ) %>%
      arrange(desc(Skor_Rawan)) %>%
      slice_head(n = 3)

    if (nrow(df) == 0) {
      return(div(class = "empty-card", "Data bencana tidak tersedia"))
    }

    items <- lapply(seq_len(min(3, nrow(df))), function(i) {
      row <- df[i, ]
      medal_class <- c("gold", "silver", "bronze")[i]

      div(
        class = paste("mini-rank-card", medal_class),
        div(class = "mini-rank-badge", paste0("#", i)),
        div(class = "mini-rank-icon", icon("triangle-exclamation", lib = "font-awesome")),
        div(
          class = "mini-rank-content",
          div(class = "mini-rank-title", as.character(row$Kota)),
          div(
            class = "mini-rank-value",
            paste0(
              "Bencana: ", fmt_num(row$Total_Bencana),
              " | Desa terdampak: ", fmt_num(row$Total_Desa_Terdampak)
            )
          )
        )
      )
    })

    do.call(tagList, items)
  })

  # ----------------------------------------------------------------------------
  # Peta
  # ----------------------------------------------------------------------------
  output$peta_dinamis <- renderLeaflet({
    pata <- peta_reaktif()

    # Mendapatkan bounding box dari peta Aceh untuk mengunci view
    bbox <- st_bbox(peta_aceh)

    p <- leaflet(pata) %>%
      addProviderTiles(providers$CartoDB.Positron) %>%
      # Mengunci ruang gerak peta persis pada wilayah Aceh saja (tidak global)
      fitBounds(
        lng1 = as.numeric(bbox$xmin), lat1 = as.numeric(bbox$ymin),
        lng2 = as.numeric(bbox$xmax), lat2 = as.numeric(bbox$ymax)
      ) %>%
      setMaxBounds(
        lng1 = as.numeric(bbox$xmin) - 1, lat1 = as.numeric(bbox$ymin) - 1,
        lng2 = as.numeric(bbox$xmax) + 1, lat2 = as.numeric(bbox$ymax) + 1
      )

    kota_terpilih_val <- req(kota_terpilih())
    
    is_selected <- pata$Kota_Map == kota_terpilih_val
    
    # Base style for all polygons
    base_style <- list(
      stroke = TRUE,
      weight = 1,
      opacity = 1,
      color = "white",
      dashArray = "",
      fillOpacity = 0.8,
      smoothFactor = 0.5
    )
    
    # Selected style override
    selected_style <- list(
      stroke = TRUE,
      weight = 5,
      opacity = 1,
      color = "#fbbf24",
      dashArray = "",
      fillOpacity = 0.95,
      smoothFactor = 0.5
    )
    
    # Highlight options
    highlight_opts <- highlightOptions(
      weight = ifelse(is_selected, 7, 4),
      color = ifelse(is_selected, "#f59e0b", "#666"),
      opacity = 1,
      fillOpacity = 1,
      bringToFront = TRUE
    )
    
    # Menentukan mode warna
    if (input$input_indikator == "Status") {
      info_popup <- ~ paste0(
        "<b>", ADM2_EN, "</b><br/>",
        ifelse(Kota_Map == kota_terpilih_val, "<span style='color: #fbbf24; font-weight: bold;'>★ TERPILIH</span><br/>", ""),
        "Status: <b>", Status, "</b><br/>",
        "Kehilangan Hutan: ", Kehilangan_Hutan, " Ha<br/>",
        "Kejadian Bencana: ", Total_Bencana, " Kejadian (Berimbas pada ", Total_Desa_Terdampak, " Desa)"
      )

      p %>%
        addPolygons(
          data = pata,
          fillColor = ~Warna_Status,
          weight = ifelse(pata$Kota_Map == kota_terpilih_val, 5, 1),
          color = ifelse(pata$Kota_Map == kota_terpilih_val, "#fbbf24", "white"),
          fillOpacity = ifelse(pata$Kota_Map == kota_terpilih_val, 0.95, 0.8),
          stroke = TRUE,
          layerId = ~ADM2_EN,
          highlightOptions = highlightOptions(
            weight = ifelse(pata$Kota_Map == kota_terpilih_val, 7, 4), 
            color = ifelse(pata$Kota_Map == kota_terpilih_val, "#f59e0b", "#666"), 
            fillOpacity = 1,
            bringToFront = TRUE
          ),
          popup = info_popup
        ) %>%
        addLegend("bottomright",
          colors = c("#c0392b", "#f39c12", "#27ae60"),
          labels = c("Darurat Pengawasan", "Waspada", "Aman"),
          title = "Status Lahan"
        )
    } else {
      val_numeric <- switch(input$input_indikator,
        "Hutan" = pata$Kehilangan_Hutan,
        "Bencana" = pata$Total_Bencana,
        "Padi" = pata$Luas_Panen,
        0
      )
      val_numeric[is.na(val_numeric)] <- 0

      warna_pal_num <- colorNumeric("YlOrRd", domain = val_numeric)

      info_popup <- ~ paste0(
        "<b>", ADM2_EN, "</b><br/>",
        ifelse(Kota_Map == kota_terpilih_val, "<span style='color: #fbbf24; font-weight: bold;'>★ TERPILIH</span><br/>", ""),
        input$input_indikator, ": ", round(val_numeric, 1)
      )

      p %>%
        addPolygons(
          data = pata,
          fillColor = ~warna_pal_num(val_numeric),
          weight = ifelse(pata$Kota_Map == kota_terpilih_val, 5, 1),
          color = ifelse(pata$Kota_Map == kota_terpilih_val, "#fbbf24", "white"),
          fillOpacity = ifelse(pata$Kota_Map == kota_terpilih_val, 0.95, 0.8),
          stroke = TRUE,
          layerId = ~ADM2_EN,
          highlightOptions = highlightOptions(
            weight = ifelse(pata$Kota_Map == kota_terpilih_val, 7, 4), 
            color = ifelse(pata$Kota_Map == kota_terpilih_val, "#f59e0b", "#666"), 
            fillOpacity = 1,
            bringToFront = TRUE
          ),
          popup = info_popup
        ) %>%
        addLegend("bottomright",
          pal = warna_pal_num, values = ~val_numeric,
          title = input$input_indikator
        )
    }
  })

  # ----------------------------------------------------------------------------
  # Plot komoditas perkebunan
  # ----------------------------------------------------------------------------
  output$plot_komoditas <- renderPlotly({
    df_k <- df_kebun %>%
      filter(Tahun == input$input_tahun) %>%
      arrange(desc(Luas_Ribuan_Ha)) %>%
      head(10)

    df_k$Komoditas_Indo <- sapply(strsplit(as.character(df_k$Kommoditas), "/"), `[`, 1)
    df_k <- df_k %>% arrange(Luas_Ribuan_Ha)
    df_k$Komoditas_Indo <- factor(df_k$Komoditas_Indo, levels = df_k$Komoditas_Indo)

    plot_ly(
      df_k,
      x = ~Luas_Ribuan_Ha,
      y = ~Komoditas_Indo,
      type = "bar",
      orientation = "h",
      marker = list(
        color = "#22c55e",
        opacity = 0.88,
        line = list(color = "transparent")
      ),
      text = ~ paste0("Komoditas: ", Komoditas_Indo, "<br>Luas: ", fmt_num(Luas_Ribuan_Ha), " ribu ha"),
      hoverinfo = "text"
    ) %>%
      layout(
        title = list(text = paste("Top 10 Komoditas Perkebunan Aceh (", input$input_tahun, ")")),
        xaxis = list(title = "Luas Perkebunan (Ribu Hektar)"),
        yaxis = list(title = ""),
        margin = list(l = 130, r = 20, t = 50, b = 40),
        plot_bgcolor = "rgba(0,0,0,0)",
        paper_bgcolor = "rgba(0,0,0,0)"
      )
  })

  # ----------------------------------------------------------------------------
  # Plot sawit kabupaten (opsional)
  # ----------------------------------------------------------------------------
  if (ada_sheet_sawit) {
    output$plot_sawit_kabupaten <- renderPlotly({
      req(input$input_tahun_sawit)

      df_top <- df_sawit_kab %>%
        filter(Tahun == input$input_tahun_sawit) %>%
        arrange(desc(Luas_Sawit)) %>%
        slice_head(n = 10) %>%
        arrange(Luas_Sawit)

      if (nrow(df_top) == 0) {
        plot_ly(type = "scatter", mode = "markers") %>% 
          layout(title = "Data sawit tidak tersedia untuk tahun ini")
      } else {
        df_top$Kota <- factor(df_top$Kota, levels = df_top$Kota)

        plot_ly(
          df_top,
          x = ~Luas_Sawit,
          y = ~Kota,
          type = "bar",
          orientation = "h",
          marker = list(color = "#14532d"),
          text = ~ paste0(
            "Kabupaten/Kota: ", Kota,
            "<br>Luas Sawit: ", fmt_num(Luas_Sawit), " Ha"
          ),
          hoverinfo = "text"
        ) %>%
          layout(
            title = paste("Top Kabupaten Sawit - Tahun", input$input_tahun_sawit),
            xaxis = list(title = "Luas Sawit (Ha)"),
            yaxis = list(title = ""),
            margin = list(l = 120, r = 20, t = 50, b = 40),
            plot_bgcolor = "rgba(0,0,0,0)",
            paper_bgcolor = "rgba(0,0,0,0)"
          )
      }
    })
  }

  # ----------------------------------------------------------------------------
  # Judul grafik wilayah
  # ----------------------------------------------------------------------------
  output$judul_grafik_daerah <- renderText({
    paste("Tren Hutan dan Bencana -", kota_terpilih())
  })

  # ----------------------------------------------------------------------------
  # Tren wilayah
  # ----------------------------------------------------------------------------
  output$plot_tren_daerah <- renderPlotly({
    req(input$input_tahun)
    if (kota_terpilih() == "Semua Wilayah") {
      df_kota <- df_gabung %>%
        group_by(Tahun) %>%
        summarise(
          Kehilangan_Hutan = sum(Kehilangan_Hutan, na.rm = TRUE),
          Total_Bencana = sum(Total_Bencana, na.rm = TRUE),
          .groups = "drop"
        )
    } else {
      df_kota <- df_gabung %>% filter(Kota == kota_terpilih())
    }

    plot_ly(df_kota, x = ~Tahun) %>%
      add_lines(
        y = ~Kehilangan_Hutan,
        name = "Kehilangan Hutan (Ha)",
        line = list(color = "#f97316", width = 3),
        text = ~ paste("Tahun:", Tahun, "<br>Kehilangan Hutan:", fmt_num(Kehilangan_Hutan), " Ha"),
        hoverinfo = "text"
      ) %>%
      add_lines(
        y = ~Total_Bencana,
        name = "Total Bencana Relevan",
        yaxis = "y2",
        line = list(color = "#16a34a", width = 3, dash = "dot"),
        text = ~ paste("Tahun:", Tahun, "<br>Total Bencana:", fmt_num(Total_Bencana)),
        hoverinfo = "text"
      ) %>%
      layout(
        title = "Perubahan Kehilangan Hutan dan Bencana Relevan",
        xaxis = list(title = "Tahun", dtick = 1),
        yaxis = list(title = "Kehilangan Hutan (Ha)", side = "left", color = "#f97316"),
        yaxis2 = list(title = "Total Bencana Relevan", side = "right", overlaying = "y", color = "#16a34a"),
        legend = list(orientation = "h", x = 0.5, xanchor = "center", y = -0.2),
        margin = list(r = 55),
        plot_bgcolor = "rgba(0,0,0,0)",
        paper_bgcolor = "rgba(0,0,0,0)"
      )
  })

  # ----------------------------------------------------------------------------
  # Judul proporsi bencana
  # ----------------------------------------------------------------------------
  output$judul_grafik_bencana <- renderText({
    paste("Proporsi Jenis Bencana Relevan (", kota_terpilih(), "-", input$input_tahun, ")", sep = "")
  })

  # ----------------------------------------------------------------------------
  # Pie bencana
  # ----------------------------------------------------------------------------
  output$plot_jenis_bencana <- renderPlotly({
    req(input$input_tahun)

    if (kota_terpilih() == "Semua Wilayah") {
      df_bd <- df_bencana_kejadian %>%
        filter(Tahun == input$input_tahun, Kejadian_Bencana > 0) %>%
        group_by(Jenis_Bencana) %>%
        summarise(Kejadian_Bencana = sum(Kejadian_Bencana, na.rm = TRUE), .groups = "drop")
    } else {
      df_bd <- df_bencana_kejadian %>%
        filter(Kota == kota_terpilih(), Tahun == input$input_tahun, Kejadian_Bencana > 0)
    }

    if (nrow(df_bd) == 0) {
      plot_ly(type = "scatter", mode = "markers") %>%
        layout(
          title = list(text = "Tidak ada kejadian bencana relevan tercatat"),
          plot_bgcolor = "rgba(0,0,0,0)",
          paper_bgcolor = "rgba(0,0,0,0)",
          xaxis = list(visible = FALSE),
          yaxis = list(visible = FALSE)
        )
    } else {
      warna_bencana <- c("#16a34a", "#22c55e", "#84cc16", "#f59e0b", "#ef4444")

      plot_ly(
        df_bd,
        labels = ~Jenis_Bencana,
        values = ~Kejadian_Bencana,
        type = "pie",
        textinfo = "label+percent",
        hoverinfo = "text",
        text = ~ paste0(Jenis_Bencana, "<br>", fmt_num(Kejadian_Bencana), " kejadian"),
        hole = 0.45,
        marker = list(colors = warna_bencana, line = list(color = "#ffffff", width = 2))
      ) %>%
        layout(
          showlegend = TRUE,
          legend = list(orientation = "h", x = 0.5, xanchor = "center", y = -0.2),
          margin = list(t = 20, b = 20, l = 20, r = 20),
          plot_bgcolor = "rgba(0,0,0,0)",
          paper_bgcolor = "rgba(0,0,0,0)"
        )
    }
  })

  # ----------------------------------------------------------------------------
  # Bubble chart pertanian
  # X = Luas_Panen
  # Y = Produksi
  # Size = Produktivitas
  # ----------------------------------------------------------------------------
  output$plot_bubble_pertanian <- renderPlotly({
    df <- data_tahun_ini()

    plot_ly(
      df,
      x = ~Luas_Panen,
      y = ~Produksi,
      type = "scatter",
      mode = "markers",
      size = ~Produktivitas,
      sizes = c(12, 60),
      color = ~Status,
      colors = c(
        "Aman" = "#22c55e",
        "Waspada" = "#f59e0b",
        "Darurat Pengawasan" = "#ef4444"
      ),
      text = ~ paste0(
        "<b>", Kota, "</b><br>",
        "Luas Panen: ", fmt_num(Luas_Panen), " Ha<br>",
        "Produksi Padi: ", fmt_num(Produksi, 2), " ton<br>",
        "Produktivitas: ", round(Produktivitas, 2), " kuintal/ha<br>",
        "Status: ", Status
      ),
      hoverinfo = "text",
      marker = list(opacity = 0.82, line = list(color = "white", width = 1))
    ) %>%
      layout(
        title = "Produksi Padi, Luas Panen, dan Produktivitas",
        xaxis = list(title = "Luas Panen (Ha)"),
        yaxis = list(title = "Produksi Padi"),
        legend = list(title = list(text = "Status Wilayah")),
        plot_bgcolor = "rgba(0,0,0,0)",
        paper_bgcolor = "rgba(0,0,0,0)"
      )
  })

  # ----------------------------------------------------------------------------
  # Bubble chart bencana
  # ----------------------------------------------------------------------------
  output$plot_bubble_bencana <- renderPlotly({
    df <- data_tahun_ini() %>%
      mutate(
        Skor_Rawan = as.numeric(scale(Kehilangan_Hutan)) +
          as.numeric(scale(Total_Bencana)) +
          as.numeric(scale(Total_Desa_Terdampak))
      )

    plot_ly(
      df,
      x = ~Kehilangan_Hutan,
      y = ~Total_Bencana,
      type = "scatter",
      mode = "markers",
      size = ~Total_Desa_Terdampak,
      sizes = c(12, 62),
      color = ~Status,
      colors = c(
        "Aman" = "#22c55e",
        "Waspada" = "#f59e0b",
        "Darurat Pengawasan" = "#ef4444"
      ),
      text = ~ paste0(
        "<b>", Kota, "</b><br>",
        "Kehilangan Hutan: ", fmt_num(Kehilangan_Hutan), " Ha<br>",
        "Total Bencana Relevan: ", fmt_num(Total_Bencana), "<br>",
        "Desa Terdampak: ", fmt_num(Total_Desa_Terdampak), "<br>",
        "Skor Kerawanan: ", round(Skor_Rawan, 2), "<br>",
        "Status: ", Status
      ),
      hoverinfo = "text",
      marker = list(opacity = 0.82, line = list(color = "white", width = 1))
    ) %>%
      layout(
        title = "Kehilangan Hutan, Bencana Relevan, dan Desa Terdampak",
        xaxis = list(title = "Kehilangan Hutan (Ha)"),
        yaxis = list(title = "Total Bencana Relevan"),
        legend = list(title = list(text = "Status Wilayah")),
        plot_bgcolor = "rgba(0,0,0,0)",
        paper_bgcolor = "rgba(0,0,0,0)"
      )
  })
}

# ==============================================================================
# RUN APP
# ==============================================================================
shinyApp(ui, server)
