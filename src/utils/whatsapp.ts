import { COMPANY_CONFIG } from '../config/rental';
import { Vehicle } from '../types/rental';
import { formatIDR } from './formatters';

export interface BookingMessageParams {
  vehicle: Vehicle;
  serviceType?: string;
  startDate?: string;
  notes?: string;
}

/**
 * Generate a WhatsApp click-to-chat URL tailored for Nara Rent Car Pekanbaru
 */
export function buildWhatsAppBookingUrl(params: BookingMessageParams): string {
  const { vehicle, startDate, notes } = params;
  
  const priceFormatted = formatIDR(vehicle.pricePer12Hours);

  let message = `Halo Admin Nara Rent Car Pekanbaru, saya ingin reservasi unit *${vehicle.name}* (Paket All-In 12 Jam Dalam Kota: ${priceFormatted}).`;
  
  const extras: string[] = [];
  extras.push('Include: Mobil + Supir + BBM');
  if (startDate) {
    extras.push(`Tanggal: ${startDate}`);
  }
  if (notes && notes.trim() !== '') {
    extras.push(`Catatan/Lokasi Jemput: ${notes.trim()}`);
  }

  if (extras.length > 0) {
    message += `\nDetail: ${extras.join(' | ')}`;
  }

  message += '\n\nBoleh konfirmasi ketersediaan unit untuk jadwal saya? Terima kasih!';

  return `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a general CS inquiry WhatsApp URL
 */
export function buildWhatsAppSupportUrl(topic = 'Konsultasi Sewa Mobil Pekanbaru'): string {
  const message = `Halo Admin Nara Rent Car Pekanbaru, saya ingin konsultasi mengenai ${topic}. Boleh dibantu informasinya? Terima kasih.`;
  return `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
