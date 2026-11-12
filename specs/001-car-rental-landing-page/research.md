# Technical Research & Decisions: Car Rental Landing Page

## 1. Framework Selection: Vite + React + TypeScript
- **Decision**: Use Vite with React and TypeScript.
- **Rationale**: Landing pages require maximum speed, instant loads, and zero server hosting friction. Vite builds to pure static HTML/JS/CSS assets that can be hosted anywhere (Vercel, GitHub Pages, Netlify, Cloudflare Pages, Firebase Hosting).
- **TypeScript**: Enforces strict domain typing for vehicle rates, features, filters, and prevents runtime bugs.

## 2. Styling System: Tailwind CSS v3 / Modern PostCSS
- **Decision**: Tailwind CSS utility-first framework.
- **Rationale**:
  - Provides responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`) out of the box for Mobile-First styling.
  - Zero dead CSS in production build (purged unused styles).
  - High degree of design control for automotive aesthetic (deep slate dark accents, luxury gold/amber or cyan highlights, crisp typography).

## 3. WhatsApp Direct Booking Integration
- **Decision**: URL encoding with international format `https://wa.me/{PHONE_NUMBER}?text={ENCODED_MESSAGE}`.
- **Format**:
  ```text
  Halo Autorental, saya ingin reservasi unit:
  - Mobil: Toyota Innova Zenix 2.0 V CVT
  - Layanan: Lepas Kunci
  - Durasi: 3 Hari
  - Mulai Tanggal: 15 November 2026
  Mohon informasi ketersediaan unit dan prosedur reservasinya. Terima kasih!
  ```
- **Rationale**: Immediate conversion without requiring back-end databases or merchant account gateways. The user experience is familiar and trusted by Indonesian car rental customers.

## 4. Vehicle Data Schema & Indonesian Fleet Models
- Indonesian rental market core categories:
  - **City Car**: Honda Brio RS, Toyota Raize Turbo (Hemat bahan bakar, lincah perkotaan).
  - **Family MPV**: Toyota All New Avanza, Mitsubishi Xpander, Toyota Kijang Innova Reborn / Zenix.
  - **SUV / Offroad**: Toyota Fortuner GR Sport, Mitsubishi Pajero Sport.
  - **Premium Luxury**: Toyota Alphard 2.5G Transformer, Hyundai Staria.
  - **Minibus / Wisata**: Toyota HiAce Premio, Isuzu Elf Long.
