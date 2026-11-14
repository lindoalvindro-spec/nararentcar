/**
 * Format number to Indonesian Rupiah (IDR) currency string
 * Example: 350000 -> "Rp 350.000"
 */
export function formatCurrencyIDR(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatIDR(amount: number): string {
  return `Rp ${amount.toLocaleString('id-ID')}`;
}

/**
 * Format date string to localized Indonesian human readable format
 */
export function formatDateID(dateString: string): string {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  } catch {
    return dateString;
  }
}
