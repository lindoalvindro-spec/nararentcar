# Data Models & Entities: Car Rental Landing Page

## Domain TypeScript Interfaces

```typescript
export type CarCategory = 'all' | 'city-car' | 'mpv' | 'suv' | 'luxury' | 'minibus';

export type TransmissionType = 'all' | 'automatic' | 'manual';

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  category: CarCategory;
  transmission: 'Automatic' | 'Manual';
  year: number;
  seats: number;
  luggage: number;
  fuelType: 'Bensin' | 'Diesel' | 'Hybrid';
  engineCapacity: string; // e.g. "1.500 cc"
  priceWithoutDriver: number; // IDR per day (e.g. 350000)
  priceWithDriver: number; // IDR per day (e.g. 550000)
  rating: number; // 1-5 (e.g. 4.9)
  reviewCount: number;
  featured: boolean;
  image: string;
  gallery: string[];
  features: string[]; // e.g. ["AC Double Blower", "Bluetooth Audio", "Dual SRS Airbag", "Camera Parkir"]
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
  whatsappNumber: string; // international format e.g. "6281234567890"
  email: string;
  address: string;
  city: string;
  operatingHours: string;
}
```
