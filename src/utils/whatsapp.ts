import { COMPANY_CONFIG } from '../config/rental';
import { Vehicle } from '../types/rental';

export interface BookingMessageParams {
  vehicle: Vehicle;
  serviceType?: 'lepas-kunci' | 'dengan-supir';
  startDate?: string;
  notes?: string;
}

/**
 * Generate a WhatsApp click-to-chat URL with pre-filled short message without price
 */
export function buildWhatsAppBookingUrl(params: BookingMessageParams): string {
  const { vehicle, serviceType, startDate, notes } = params;
  
  let message = `Halo Admin, boleh info tarif dan ketersediaan untuk mobil ${vehicle.name}?`;
  
  const extras: string[] = [];
  if (serviceType) {
    extras.push(`Opsi: ${serviceType === 'lepas-kunci' ? 'Lepas Kunci' : 'Dengan Supir'}`);
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

  return `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a general CS inquiry WhatsApp URL
 */
export function buildWhatsAppSupportUrl(topic = 'Informasi Umum'): string {
  const message = `Halo Admin, boleh info tarif dan ketersediaan untuk ${topic}? Terima kasih.`;
  return `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
