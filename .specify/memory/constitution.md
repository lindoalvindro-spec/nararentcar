<!--
Sync Impact Report:
- Version change: [CONSTITUTION_VERSION] -> 1.0.0 (Initial Ratification)
- Principles defined:
  1. I. Mobile-First & Responsive Excellence
  2. II. Conversion & Intent-Driven UX (Direct WhatsApp Booking)
  3. III. Type-Safe Component Modularity
  4. IV. High-Performance & Core Web Vitals
  5. V. Accessibility & Semantic Markup
- Added sections: Technology Stack & Standards, Development Workflow & Quality Gates
- Deferred items: None
-->

# Rental Mobil Landing Page Constitution

## Core Principles

### I. Mobile-First & Responsive Excellence
The car rental landing page MUST provide an intuitive, high-performance experience on mobile devices first, scaling gracefully to tablet and desktop screens. Over 70% of rental inquiries originate from mobile users. Navigation, vehicle filtering, pricing cards, and booking CTAs MUST be easy to operate with one hand. Touch targets MUST meet minimum accessibility standards (at least 44x44px).

### II. Conversion & Intent-Driven UX (Direct WhatsApp Booking)
Every vehicle card, promotional banner, and quick-filter interaction MUST eliminate customer friction and guide users directly toward booking or inquiry. Click-to-WhatsApp integrations MUST generate pre-filled, contextual messages (including vehicle model, rental duration, and user inquiry details). No interaction path shall lead to dead ends or missing CTAs.

### III. Type-Safe Component Modularity
The codebase MUST maintain strict TypeScript typing across all entities (Vehicle models, pricing tiers, specifications, FAQs, and testimonials). UI elements (Hero, Search/Filter bar, Vehicle Card, Testimonials, FAQ Accordion, Footer) MUST be modular, self-contained components with clean prop contracts and zero circular dependencies.

### IV. High-Performance & Core Web Vitals
Automotive imagery MUST be optimized (responsive sizing, WebP/AVIF formats, explicit width/height dimensions) to eliminate Cumulative Layout Shift (CLS < 0.1) and ensure rapid Largest Contentful Paint (LCP < 2.5s). Assets must load lazily below the fold. Dependencies MUST be lean with zero bloated libraries.

### V. Accessibility & Semantic Markup
The landing page MUST strictly use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`). Modals, filter dropdowns, and FAQ accordions MUST implement appropriate WAI-ARIA roles, state attributes (`aria-expanded`), and full keyboard navigation support.

## Technology Stack & Architecture Standards

- **Core Framework**: React with TypeScript (via Vite or Next.js).
- **Styling**: Tailwind CSS with custom automotive design tokens (sleek dark/slate contrast, luxury/sport accents, high-contrast readable typography).
- **Icons**: Lucide React for consistent, lightweight UI iconography.
- **Data Architecture**: Structured JSON mock catalog for vehicles with realistic Indonesian automotive market models (Avanza, Xpander, Innova Zenix, Fortuner, Alphard, Brio, HiAce) with pricing, transmission, capacity, and features.

## Development Workflow & Quality Gates

1. **Spec-Driven Execution**: No feature or substantial UI refactor shall be implemented without an active specification in `specs/` adhering to the GitHub Spec Kit lifecycle (`spec.md` → `plan.md` → `tasks.md`).
2. **Acceptance Criteria Verification**: Each user story must define testable *Given-When-Then* scenarios verified prior to task completion.
3. **Commit Standards**: All repository commits MUST follow Conventional Commits format (`feat:`, `fix:`, `chore:`, `docs:`, `style:`).

## Governance

This Constitution supersedes all ad-hoc architectural decisions. Any modification to core principles, tech stack guidelines, or governance rules requires a formal constitution amendment and a semantic version bump:
- **MAJOR**: Breaking changes to architecture or removal/redefinition of core principles.
- **MINOR**: Addition of new principles, sections, or expanded technical standards.
- **PATCH**: Wording improvements, typos, and minor clarifications.

All pull requests and agent turns MUST verify compliance with these principles.

**Version**: 1.0.0 | **Ratified**: 2026-11-12 | **Last Amended**: 2026-11-12
