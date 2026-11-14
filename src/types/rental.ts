export type CarCategory = 'all' | 'city-car' | 'mpv' | 'suv' | 'luxury' | 'minibus' | 'commercial';

export type TransmissionType = 'all' | 'automatic' | 'manual';

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  category: Exclude<CarCategory, 'all'>;
  transmission: 'Automatic' | 'Manual';
  year: number;
  seats: number;
  luggage: number;
  fuelType: 'Bensin' | 'Diesel' | 'Hybrid';
  engineCapacity: string;
  pricePer12Hours: number; // IDR per 12 Jam All-In Dalam Kota (Mobil + Supir + BBM)
  priceWithoutDriver?: number;
  priceWithDriver?: number;
  rating: number; // 1-5
  reviewCount: number;
  featured: boolean;
  image: string;
  gallery: string[];
  features: string[];
  includedBenefits: string[];
  status: 'available' | 'booked';
}

export interface FilterState {
  category: CarCategory;
  transmission: TransmissionType;
  maxPrice?: number;
  minSeats?: number;
  searchQuery: string;
}

export interface RentalQuote {
  vehicleId: string;
  serviceType: 'lepas-kunci' | 'dengan-supir';
  durationDays: number;
  startDate: string;
  totalPrice: number;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  avatar?: string;
  rating: number;
  date: string;
  carRented: string;
  comment: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'terms' | 'payment' | 'emergency';
}

export interface RentalCompanyConfig {
  name: string;
  tagline: string;
  phone: string;
  whatsappNumber: string; // e.g. "6281234567890"
  email: string;
  address: string;
  city: string;
  operatingHours: string;
  instagram: string;
  facebook?: string;
}
