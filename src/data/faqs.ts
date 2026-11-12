import { FAQItem } from '../types/rental';

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'terms',
    question: 'Apa saja syarat sewa mobil lepas kunci?',
    answer: 'Untuk warga lokal/domisili: E-KTP asli, SIM A aktif, NPWP, dan akun media sosial aktif. Untuk wisatawan/luar kota: E-KTP asli, SIM A, bukti tiket penerbangan PP, serta konfirmasi booking hotel tempat menginap.',
  },
  {
    id: 'faq-2',
    category: 'booking',
    question: 'Bagaimana cara pemesanan mobil di RentCar Nusantara?',
    answer: 'Sangat mudah! Pilih unit mobil yang Anda inginkan di halaman ini, lalu klik tombol "Pesan via WhatsApp". Anda akan langsung terhubung dengan Admin kami via WhatsApp dengan format pesan otomatis. Admin akan mengonfirmasi ketersediaan unit dan mengirimkan invoice/rincian pembayaran.',
  },
  {
    id: 'faq-3',
    category: 'terms',
    question: 'Apakah bisa diantar ke bandara, stasiun, atau hotel?',
    answer: 'Ya, tentu saja! Kami menyediakan layanan antar-jemput unit ke Bandara Soekarno-Hatta, Halim Perdanakusuma, Stasiun Kereta Api, serta hotel di area Jabodetabek. Layanan ini tersedia 24 jam dengan koordinasi sebelumnya.',
  },
  {
    id: 'faq-4',
    category: 'payment',
    question: 'Apakah ada sistem deposit (uang jaminan)?',
    answer: 'Untuk layanan lepas kunci terdapat deposit jaminan yang akan dikembalikan secara utuh (100% full refund) maksimal 1x24 jam setelah mobil kembali dalam kondisi baik dan bebas tilang elektronik (ETLE). Untuk layanan dengan supir tidak dikenakan deposit.',
  },
  {
    id: 'faq-5',
    category: 'emergency',
    question: 'Bagaimana jika mobil mengalami kendala teknis atau mogok di jalan?',
    answer: 'Seluruh armada kami tercover layanan Emergency Roadside Assistance 24 Jam. Jika terjadi kerusakan teknis mesin yang tidak dapat diperbaiki segera di lokasi, kami akan mengirimkan mobil pengganti setara tanpa biaya tambahan.',
  },
  {
    id: 'faq-6',
    category: 'terms',
    question: 'Bagaimana perhitungan overtime jika terlambat mengembalikan?',
    answer: 'Toleransi keterlambatan adalah 30 menit. Setelah itu, overtime dihitung sebesar 10% per jam dari tarif sewa harian. Jika keterlambatan melebihi 4 jam, maka dihitung tarif sewa 1 hari penuh.',
  },
];
