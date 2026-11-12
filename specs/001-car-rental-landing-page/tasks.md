# Tasks: Car Rental Landing Page (001-car-rental-landing-page)

**Input**: Design documents from `specs/001-car-rental-landing-page/` (`spec.md`, `plan.md`, `research.md`, `data-model.md`)

**Organization**: Tasks are grouped by phase and user story to ensure incremental implementation and testability.

## Format: `[ID] [P?] [Story] Description`
- **[P]**: Can run in parallel
- **[Story]**: Mapped user story (US1 - US5)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and styling setup

- [x] T001 Initialize Vite React TypeScript project scaffolding and config files
- [x] T002 Install project dependencies (`lucide-react`, `tailwindcss`, `postcss`, `autoprefixer`)
- [x] T003 [P] Configure `tailwind.config.js` with automotive theme colors and `index.css` with smooth scrolling

---

## Phase 2: Foundational (Data Contracts & Core Utilities)

**Purpose**: Core types, configurations, mock data, and utilities needed across all user stories

- [x] T004 [P] Create TypeScript domain interfaces in `src/types/rental.ts`
- [x] T005 [P] Create company configuration in `src/config/rental.ts`
- [x] T006 [P] Create rich vehicle fleet mock dataset in `src/data/cars.ts`
- [x] T007 [P] Create Indonesian currency & date formatters in `src/utils/formatters.ts`
- [x] T008 [P] Create WhatsApp dynamic message builder in `src/utils/whatsapp.ts`
- [x] T009 [P] Create mock FAQ and review datasets in `src/data/faqs.ts` and `src/data/reviews.ts`

**Checkpoint**: Foundation complete. All user story components can now be built.

---

## Phase 3: User Story 1 (P1) - Hero & Quick Vehicle Search/Filter 🎯 MVP

**Goal**: Deliver the primary value proposition and instant vehicle filtering without page reloads.

- [x] T010 [P] [US1] Create Navbar component in `src/components/Navbar.tsx`
- [x] T011 [P] [US1] Create Hero section component in `src/components/Hero.tsx`
- [x] T012 [US1] Create QuickFilter component in `src/components/QuickFilter.tsx` (category tabs, transmission toggle, search query)

**Checkpoint**: Header, Hero, and Filter UI ready and functional.

---

## Phase 4: User Story 2 (P1) - Fleet Showcase & Direct WhatsApp Booking 🎯 MVP

**Goal**: Browse vehicle cards, compare daily prices, and initiate WhatsApp booking with pre-filled messages.

- [x] T013 [P] [US2] Create CarCard component in `src/components/CarCard.tsx` (specs badges, daily rate, WhatsApp CTA)
- [x] T014 [US2] Create FleetShowcase component in `src/components/FleetShowcase.tsx` (responsive grid, empty filter state)

**Checkpoint**: MVP Complete! Users can browse cars, filter options, and book directly via WhatsApp.

---

## Phase 5: User Story 3 (P2) - Car Detail Modal & Price Estimator

**Goal**: Deep-dive vehicle details, feature lists, and dynamic total price calculation by rental duration.

- [x] T015 [US3] Create CarDetailModal component in `src/components/CarDetailModal.tsx` with dynamic price calculator and backdrop escape handlers

---

## Phase 6: User Story 4 (P2) - Services & Rental Requirements

**Goal**: Educate users on service packages and document checklists for seamless booking confidence.

- [x] T016 [P] [US4] Create Services component in `src/components/Services.tsx`
- [x] T017 [P] [US4] Create RentalRequirements component in `src/components/RentalRequirements.tsx` (tabbed guidelines)

---

## Phase 7: User Story 5 (P3) - Testimonials, FAQ Accordion & Floating CTA

**Goal**: Remove final friction with real social proof, accessible FAQ accordion, and persistent support CTA.

- [x] T018 [P] [US5] Create Testimonials component in `src/components/Testimonials.tsx`
- [x] T019 [P] [US5] Create FAQ component in `src/components/FAQ.tsx` (accessible ARIA accordion)
- [x] T020 [P] [US5] Create FloatingWhatsApp component in `src/components/FloatingWhatsApp.tsx`
- [x] T021 [P] [US5] Create Footer component in `src/components/Footer.tsx`

---

## Phase 8: Assembly & Verification

**Purpose**: Assemble all components into `src/App.tsx`, build verification, and compliance checks.

- [x] T022 Assemble all sections in `src/App.tsx` with state management for active filters and modal
- [x] T023 Run TypeScript verification (`npx tsc --noEmit`)
- [x] T024 Run production build verification (`npm run build`)
- [x] T025 Verify responsive layout, touch target sizes, and WhatsApp link formatting
