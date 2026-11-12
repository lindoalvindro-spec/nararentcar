import { COMPANY_CONFIG } from '../config/rental';
import { Vehicle } from '../types/rental';
import { formatCurrencyIDR } from './formatters';

export interface BookingMessageParams {
  vehicle: Vehicle;
  serviceType: 'lepas-kunci' | 'dengan-supir';
  durationDays?: number;
  startDate?: string;
  notes?: string;
}

/**
 * Generate a WhatsApp click-to-chat URL with pre-filled Indonesian booking message
 */
export function buildWhatsAppBookingUrl(params: BookingMessageParams): string {
  const { vehicle, serviceType, durationDays = 1, startDate = '', notes = '' } = params;
  const serviceLabel = serviceType === 'lepas-kunci' ? 'Lepas Kunci (Self-Drive)' : 'Dengan Supir (With Driver)';
  const dailyRate = serviceType === 'lepas-kunci' ? vehicle.priceWithoutDriver : vehicle.priceWithDriver;
  const estimatedTotal = dailyRate * durationDays;

  const lines = [
    `Halo *${COMPANY_CONFIG.name}*, saya ingin melakukan pemesanan rental mobil:`,
    '',
    `🚗 *Unit Mobil*: ${vehicle.name} (${vehicle.year})`,
    `⚙️ *Transmisi*: ${vehicle.transmission}`,
    `📋 *Paket Layanan*: ${serviceLabel}`,
    `⏱️ *Durasi Sewa*: ${durationDays} Hari`,
    startDate ? `📅 *Tanggal Mulai*: ${startDate}` : '',
    `💰 *Tarif Per Hari*: ${formatCurrencyIDR(dailyRate)}`,
    durationDays > 1 ? `💵 *Estimasi Total*: ${formatCurrencyIDR(estimatedTotal)}` : '',
    notes ? `📝 *Catatan Khusus*: ${notes}` : '',
    '',
    'Mohon konfirmasi ketersediaan unit dan persyaratan pemesanannya. Terima kasih!',
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${text}`;
}

/**
 * Generate a general CS inquiry WhatsApp URL
 */
export function buildWhatsAppSupportUrl(topic = 'Informasi Umum'): string {
  const message = `Halo *${COMPANY_CONFIG.name}*, saya ingin konsultasi terkait ${topic}. Mohon dibantu informasinya. Terima kasih!`;
  return `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
