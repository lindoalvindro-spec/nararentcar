import { COMPANY_CONFIG } from '../config/rental';
import { Vehicle } from '../types/rental';

export interface BookingMessageParams {
  vehicle: Vehicle;
  serviceType?: 'lepas-kunci' | 'all-in-12jam' | 'dengan-supir';
  startDate?: string;
  notes?: string;
}

/**
 * Generate a WhatsApp click-to-chat URL tailored for Nara Rent Car Pekanbaru
 */
export function buildWhatsAppBookingUrl(params: BookingMessageParams): string {
  const { vehicle, serviceType, startDate, notes } = params;
  
  const packageLabel = serviceType === 'all-in-12jam' 
    ? 'Paket All-In 12 Jam (Mobil + Driver + BBM + Parkir)'
    : serviceType === 'dengan-supir'
    ? 'Dengan Supir'
    : 'Lepas Kunci (24 Jam)';

  let message = `Halo Admin Nara Rent Car Pekanbaru, saya ingin reservasi/tanya tarif untuk unit ${vehicle.name}.`;
  
  const extras: string[] = [];
  if (serviceType) {
    extras.push(`Skema: ${packageLabel}`);
  }
  if (startDate) {
    extras.push(`Tanggal: ${startDate}`);
  }
  if (notes && notes.trim() !== '') {
    extras.push(`Catatan: ${notes.trim()}`);
  }

  if (extras.length > 0) {
    message += ` (${extras.join(', ')})`;
  }

  message += '. Boleh info ketersediaan unit dan penawaran terbaiknya? Terima kasih!';

  return `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a general CS inquiry WhatsApp URL
 */
export function buildWhatsAppSupportUrl(topic = 'Konsultasi Sewa Mobil Pekanbaru'): string {
  const message = `Halo Admin Nara Rent Car Pekanbaru, saya ingin konsultasi mengenai ${topic}. Boleh dibantu informasinya? Terima kasih.`;
  return `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
