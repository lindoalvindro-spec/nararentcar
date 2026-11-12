# Feature Specification: Car Rental Landing Page (Landing Page Rental Mobil)

**Feature Branch**: `001-car-rental-landing-page`

**Created**: 2026-11-12

**Status**: Draft

**Input**: User description: "Membangun landing page rental mobil modern, responsif, dan interaktif dengan katalog armada, filter pencarian, rincian harga, testimoni, FAQ, dan pemesanan instan via WhatsApp."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Hero & Quick Vehicle Search/Filter (Priority: P1)

Pengunjung landing page dapat langsung melihat headline penawaran utama, rating kepuasan pelanggan, dan menggunakan bilah pencarian/filter cepat (kategori armada, jenis transmisi, kapasitas penumpang) untuk menyaring kendaraan secara instan tanpa reload halaman.

**Why this priority**: Filter cepat dan first impression hero section adalah pintu masuk utama konversi. Pengguna rental mobil butuh segera mengetahui apakah mobil yang mereka cari tersedia sesuai kapasitas dan budget mereka.

**Independent Test**: Dapat diuji secara mandiri dengan membuka landing page, memilih opsi filter (misalnya filter "MPV" atau transmisi "Automatic"), dan memastikan daftar armada langsung terfilter secara reaktif.

**Acceptance Scenarios**:

1. **Given** pengunjung mengakses landing page, **When** halaman termuat, **Then** hero section menampilkan headline yang kuat, badge garansi armada prima, dan filter bar interaktif di atas lipatan layar (*above the fold*).
2. **Given** pengunjung memilih kategori mobil tertentu (contoh: "SUV"), **When** kategori diklik, **Then** grid armada mobil hanya menampilkan unit kategori SUV dan menghitung jumlah unit yang cocok.
3. **Given** tidak ada mobil yang cocok dengan kombinasi filter, **When** hasil pencarian kosong, **Then** sistem menampilkan *empty state* yang informatif dengan tombol "Reset Filter".

---

### User Story 2 - Vehicle Fleet Showcase & Direct WhatsApp Booking (Priority: P1)

Pengunjung dapat menjelajahi kartu katalog mobil dengan visual foto menarik, spesifikasi utama (kapasitas penumpang, jumlah bagasi/koper, transmisi, jenis bahan bakar), label ketersediaan, perbandingan harga (Lepas Kunci vs Dengan Supir), serta tombol aksi langsung untuk booking via WhatsApp.

**Why this priority**: Merupakan inti transaksi bisnis rental mobil di Indonesia di mana 90%+ reservasi diselesaikan melalui percakapan WhatsApp.

**Independent Test**: Klik tombol "Pesan via WhatsApp" pada salah satu mobil (misal Toyota Innova Zenix), lalu pastikan URL WhatsApp yang terbuka memuat pesan template otomatis berisikan nama mobil, harga, dan format konfirmasi sewa.

**Acceptance Scenarios**:

1. **Given** pengunjung melihat katalog mobil, **When** meninjau kartu mobil, **Then** detail nama, foto, badge tahun armada, spesifikasi ikonik (kursi, bagasi, transmisi), dan harga per hari ditampilkan dengan jelas.
2. **Given** pengunjung mengklik "Pesan via WhatsApp" pada kartu mobil, **When** link terbuka, **Then** sistem mengarahkan ke `https://wa.me/{nomor}?text={pesan_terformat}` dengan teks terisi otomatis (contoh: *"Halo, saya ingin sewa unit Toyota Innova Zenix (Lepas Kunci) untuk tanggal..."*).

---

### User Story 3 - Interactive Car Detail & Price Estimator Modal (Priority: P2)

Pengunjung dapat membuka modal pop-up interaktif untuk melihat informasi mendalam sebuah kendaraan: galeri foto, fitur kelengkapan (Audio Bluetooth, Airbag, AC Double Blower, Kamera Mundur), syarat khusus unit, dan kalkulator estimasi total biaya sewa berdasarkan durasi hari dan pilihan opsi layanan (Lepas Kunci / Dengan Supir + BBM).

**Why this priority**: Membantu calon penyewa mendapatkan kepastian total biaya dan spesifikasi detail tanpa harus bolak-balik bertanya kepada admin.

**Independent Test**: Buka modal unit mobil, pilih durasi sewa 3 hari dengan opsi "Dengan Supir", pastikan kalkulator secara dinamis menampilkan rincian subtotal dan total biaya yang akurat.

**Acceptance Scenarios**:

1. **Given** pengunjung mengklik tombol "Detail Unit" pada kartu mobil, **When** diklik, **Then** modal detail terbuka dengan animasi halus, menampilkan galeri foto, spesifikasi lengkap, dan kalkulator durasi sewa.
2. **Given** modal sedang terbuka, **When** pengunjung menekan tombol ESC atau mengklik backdrop di luar modal, **Then** modal tertutup dengan mulus dan mengembalikan fokus interaksi.
3. **Given** pengunjung mengubah jumlah hari di kalkulator modal, **When** durasi berubah, **Then** total estimasi biaya otomatis terhitung secara real-time.

---

### User Story 4 - Services, Value Proposition & Rental Requirements (Priority: P2)

Pengunjung dapat mempelajari paket layanan (Sewa Harian, Bulanan, Sewa Pernikahan/Wedding Car, Drop-Off Bandara), keunggulan rental (Unit Bersih & Terawat, Bebas Asap Rokok, Layanan Darurat 24 Jam, Penggantian Unit jika Mogok), dan persyaratan sewa (Perorangan Domisili, Wisatawan Luar Kota, dan Perusahaan).

**Why this priority**: Membangun kredibilitas (*trust*) dan mengedukasi calon penyewa tentang dokumen apa saja yang perlu disiapkan sebelum memesan.

**Independent Test**: Scroll ke bagian "Syarat & Ketentuan Sewa", klik tab peminjam (misal: "Wisatawan"), dan pastikan poin-poin persyaratan muncul secara terstruktur dan mudah dipahami.

**Acceptance Scenarios**:

1. **Given** pengunjung membaca section layanan, **When** melihat opsi layanan, **Then** kelebihan masing-masing paket disajikan dalam card dengan ikon yang representatif.
2. **Given** pengunjung mengecek syarat sewa, **When** memilih kategori penyewa, **Then** daftar checklist dokumen (KTP, SIM A, Tiket Pesawat/Voucher Hotel untuk wisatawan) tampil ringkas dan jelas.

---

### User Story 5 - Testimonials, FAQ Accordion & Floating Contact Button (Priority: P3)

Pengunjung dapat membaca ulasan dan rating dari pelanggan sebelumnya, mengecek daftar pertanyaan umum (FAQ) seputar deposit, asuransi, denda overtime, dan pembatalan melalui accordion yang interaktif, serta memiliki akses ke tombol Floating WhatsApp di pojok kanan bawah setiap saat.

**Why this priority**: Menghilangkan keraguan akhir (*buyer friction*) sebelum melakukan reservasi.

**Independent Test**: Klik pertanyaan FAQ, pastikan accordion membuka jawaban dengan transisi mulus dan menutup pertanyaan lain (atau toggle mandiri). Klik Floating WhatsApp untuk menghubungi customer service.

**Acceptance Scenarios**:

1. **Given** pengunjung berada di section FAQ, **When** judul pertanyaan diklik, **Then** konten jawaban terbuka dengan indikator panah berputar dan atribut `aria-expanded` terupdate.
2. **Given** pengunjung sedang menjelajahi halaman di bagian mana pun, **When** melihat ke pojok kanan bawah, **Then** tombol mengambang WhatsApp selalu terlihat dengan tooltip bantuan ("Chat CS Kami").

---

### Edge Cases

- **Kombinasi Filter Tidak Menemukan Unit**: Jika user memfilter transmisi Manual untuk kategori Luxury yang tidak ada datanya, halaman tidak boleh kosong melompong. Tampilkan pesan ramah: *"Armada yang Anda cari tidak ditemukan dengan filter saat ini"* disertai tombol reset.
- **Layar Ultra-Kecil (<360px)**: Grid armada dan form pencarian cepat harus tetap rapi dengan stacking vertikal tanpa scrollbar horizontal liar (*zero horizontal overflow*).
- **Kalkulator Durasi Sewa**: Input durasi hari sewa dibatasi minimal 1 hari dan bernilai bilangan bulat positif.
- **Fallback Gambar**: Jika ada URL foto mobil yang gagal termuat atau lambat, harus ada skeleton loader dan fallback gambar placeholder netral berlogo rental.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Sistem HARUS menampilkan katalog armada mobil dengan minimal 8 pilihan unit populer di Indonesia (misal: Avanza, Xpander, Innova Zenix, Fortuner, Alphard, Brio, Raize, HiAce Premio).
- **FR-002**: Sistem HARUS menyediakan filter instan berdasarkan Kategori (All, City Car, Family MPV, Premium SUV, Luxury, Van/Bus).
- **FR-003**: Sistem HARUS menyediakan filter cepat berdasarkan jenis Transmisi (All, Automatic, Manual).
- **FR-004**: Sistem HARUS menyediakan tombol pemesanan WhatsApp yang secara dinamis menyusun teks format reservasi dengan detail unit terkait.
- **FR-005**: Sistem HARUS menyediakan modal kalkulator harga sewa interaktif per unit.
- **FR-006**: Sistem HARUS menyediakan section FAQ berbentuk accordion yang aksesibel secara keyboard dan screen reader.
- **FR-007**: Sistem HARUS menyediakan tombol Floating WhatsApp CTA yang persisten di seluruh halaman.

### Key Entities

- **Vehicle (Mobil)**: ID, Nama Model, Brand, Kategori (City Car / MPV / SUV / Luxury / Minibus), Transmisi (Matic / Manual), Tahun Rilis, Kapasitas Penumpang, Kapasitas Koper/Bagasi, Bahan Bakar, Harga Lepas Kunci (per hari), Harga Dengan Supir (per hari), Fitur Unggulan, Foto Utama, Galeri Foto, Status Ketersediaan (Tersedia / Tersewa).
- **Review (Ulasan Pelanggan)**: ID, Nama Penyewa, Asal Kota / Keterangan, Rating Bintang (1-5), Komentar, Mobil yang Disewa, Tanggal Sewa.
- **FAQItem**: ID, Pertanyaan, Jawaban, Kategori Pertanyaan (Pembayaran, Syarat, Pengambilan, Overtime).

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Nilai performa Google Lighthouse ≥ 90 pada mobile dan desktop untuk performa, aksesibilitas, dan best practices.
- **SC-002**: Transisi filter armada mobil terjadi secara instan (<50ms) tanpa adanya jeda loading yang mengganggu.
- **SC-003**: Pengunjung dapat menemukan mobil yang diinginkan dan meluncurkan chat pemesanan WhatsApp dalam kurang dari 3 kali klik sejak landing page terbuka.
- **SC-004**: Layout 100% responsif tanpa horizontal scroll pada semua resolusi dari 320px hingga 4K.

---

## Assumptions

- Transaksi akhir dan verifikasi dokumen penyewa ditangani melalui komunikasi WhatsApp resmi dengan Customer Service / Admin rental.
- Data armada mobil dikelola secara lokal melalui mock dataset TypeScript yang kaya dan realistis.
- Target nomor kontak WhatsApp dapat dikonfigurasi secara terpusat melalui satu file konstanta konfigurasi (`config/rental.ts`).
