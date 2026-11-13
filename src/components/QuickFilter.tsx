import React from 'react';
import { Search, RotateCcw, SlidersHorizontal } from 'lucide-react';
import { CarCategory, FilterState, TransmissionType } from '../types/rental';

interface QuickFilterProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  totalResults: number;
}

const CATEGORIES: { label: string; value: CarCategory }[] = [
  { label: 'Semua Kategori', value: 'all' },
  { label: 'City Car', value: 'city-car' },
  { label: 'Family MPV', value: 'mpv' },
  { label: 'SUV Tangguh', value: 'suv' },
  { label: 'Luxury VIP', value: 'luxury' },
  { label: 'Minibus Rombongan', value: 'minibus' },
];

const TRANSMISSIONS: { label: string; value: TransmissionType }[] = [
  { label: 'Semua Transmisi', value: 'all' },
  { label: 'Automatic (A/T)', value: 'automatic' },
  { label: 'Manual (M/T)', value: 'manual' },
];

export const QuickFilter: React.FC<QuickFilterProps> = ({
  filters,
  onFilterChange,
  totalResults,
}) => {
  const handleCategoryClick = (category: CarCategory) => {
    onFilterChange({ ...filters, category });
  };

  const handleTransmissionClick = (transmission: TransmissionType) => {
    onFilterChange({ ...filters, transmission });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, searchQuery: e.target.value });
  };

  const handleReset = () => {
    onFilterChange({
      category: 'all',
      transmission: 'all',
      searchQuery: '',
    });
  };

  const isFiltered = filters.category !== 'all' || filters.transmission !== 'all' || filters.searchQuery !== '';

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-5">
      
      {/* Search Input & Counter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={filters.searchQuery}
            onChange={handleSearchChange}
            placeholder="Cari armada (contoh: Innova Zenix, Avanza, Xpander, Fortuner)..."
            className="w-full pl-10 pr-12 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all font-sans"
          />
          {filters.searchQuery && (
            <button
              type="button"
              onClick={() => onFilterChange({ ...filters, searchQuery: '' })}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs font-semibold text-slate-500 hover:text-slate-900"
            >
              Hapus
            </button>
          )}
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-xs text-slate-700 font-semibold border border-slate-200">
            <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-700" />
            <span>Tersedia: <strong className="text-slate-900">{totalResults} Unit Mobil</strong></span>
          </div>

          {isFiltered && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-semibold transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filter</span>
            </button>
          )}
        </div>

      </div>

      {/* Category Selection Tabs */}
      <div>
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
          Kategori Kendaraan
        </label>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = filters.category === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => handleCategoryClick(cat.value)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-600'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Transmission Selector */}
      <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider mr-2">
          Pilihan Transmisi:
        </span>
        {TRANSMISSIONS.map((t) => {
          const isActive = filters.transmission === t.value;
          return (
            <button
              key={t.value}
              type="button"
              onClick={() => handleTransmissionClick(t.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

    </div>
  );
};
