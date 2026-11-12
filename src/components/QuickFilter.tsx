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
  { label: 'SUV Gagah', value: 'suv' },
  { label: 'Luxury VIP', value: 'luxury' },
  { label: 'Minibus / Wisata', value: 'minibus' },
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
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl backdrop-blur-md space-y-5">
      
      {/* Top Bar: Search input & summary */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        
        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={filters.searchQuery}
            onChange={handleSearchChange}
            placeholder="Cari nama mobil (e.g. Zenix, Brio, Xpander)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onFilterChange({ ...filters, searchQuery: '' })}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-slate-400 hover:text-white"
            >
              Hapus
            </button>
          )}
        </div>

        {/* Counter & Reset */}
        <div className="flex items-center justify-between sm:justify-end gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-300 font-medium border border-slate-700/50">
            <SlidersHorizontal className="w-3.5 h-3.5 text-brand-400" />
            <span>Tersedia: <strong className="text-white font-bold">{totalResults} Unit</strong></span>
          </div>

          {isFiltered && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-semibold transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filter</span>
            </button>
          )}
        </div>

      </div>

      {/* Category Pills */}
      <div>
        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
          Kategori Mobil
        </label>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = filters.category === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => handleCategoryClick(cat.value)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-brand-500 text-slate-950 font-bold shadow-md shadow-brand-500/20 scale-102'
                    : 'bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Transmission Pills */}
      <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">
          Transmisi:
        </span>
        {TRANSMISSIONS.map((t) => {
          const isActive = filters.transmission === t.value;
          return (
            <button
              key={t.value}
              type="button"
              onClick={() => handleTransmissionClick(t.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                isActive
                  ? 'bg-slate-200 text-slate-950 font-bold'
                  : 'bg-slate-950 hover:bg-slate-800 text-slate-400 border border-slate-800'
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
