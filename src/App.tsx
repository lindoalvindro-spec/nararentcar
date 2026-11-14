import { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickFilter } from './components/QuickFilter';
import { FleetShowcase } from './components/FleetShowcase';
import { CarDetailModal } from './components/CarDetailModal';
import { RentalRequirements } from './components/RentalRequirements';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileStickyDock } from './components/MobileStickyDock';
import { Footer } from './components/Footer';

import { VEHICLES_DATA } from './data/cars';
import { FilterState, Vehicle } from './types/rental';

export function App() {
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    transmission: 'all',
    searchQuery: '',
  });

  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  // Reactive filtering
  const filteredVehicles = useMemo(() => {
    return VEHICLES_DATA.filter((car) => {
      // Category filter
      if (filters.category !== 'all' && car.category !== filters.category) {
        return false;
      }

      // Transmission filter
      if (filters.transmission !== 'all') {
        const requiredTransmission = filters.transmission === 'automatic' ? 'Automatic' : 'Manual';
        if (car.transmission !== requiredTransmission) {
          return false;
        }
      }

      // Search query filter (matches vehicle name or brand)
      if (filters.searchQuery.trim() !== '') {
        const q = filters.searchQuery.toLowerCase();
        const matchesName = car.name.toLowerCase().includes(q);
        const matchesBrand = car.brand.toLowerCase().includes(q);
        const matchesFeatures = car.features.some((f) => f.toLowerCase().includes(q));
        if (!matchesName && !matchesBrand && !matchesFeatures) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  const handleResetFilters = () => {
    setFilters({
      category: 'all',
      transmission: 'all',
      searchQuery: '',
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {/* Top Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Fleet & Filter Section with Spacing */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-16 sm:pt-20">
          <QuickFilter
            filters={filters}
            onFilterChange={setFilters}
            totalResults={filteredVehicles.length}
          />

          <FleetShowcase
            vehicles={filteredVehicles}
            onSelectDetail={(vehicle) => setSelectedVehicle(vehicle)}
            onResetFilter={handleResetFilters}
          />
        </div>

        {/* Jaminan Keamanan & Kerahasiaan Data (Customer Privacy & Zero Deposit) */}
        <RentalRequirements />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Bottom Quick-Action Dock */}
      <MobileStickyDock totalVehicles={filteredVehicles.length} />

      {/* Modal Dialog for Car Detail */}
      <CarDetailModal
        vehicle={selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
      />
    </div>
  );
}

export default App;
