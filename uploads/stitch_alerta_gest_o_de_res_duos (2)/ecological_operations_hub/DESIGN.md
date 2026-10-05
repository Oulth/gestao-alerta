---
name: Ecological Operations Hub
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#3e4947'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#6e7977'
  outline-variant: '#bdc9c6'
  surface-tint: '#006a64'
  primary: '#005953'
  on-primary: '#ffffff'
  primary-container: '#08736c'
  on-primary-container: '#9ff5ec'
  inverse-primary: '#80d5cc'
  secondary: '#466800'
  on-secondary: '#ffffff'
  secondary-container: '#c4f279'
  on-secondary-container: '#4b6f00'
  tertiary: '#6f4600'
  on-tertiary: '#ffffff'
  tertiary-container: '#8f5c00'
  on-tertiary-container: '#ffe1c0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9cf2e9'
  primary-fixed-dim: '#80d5cc'
  on-primary-fixed: '#00201e'
  on-primary-fixed-variant: '#00504b'
  secondary-fixed: '#c4f279'
  secondary-fixed-dim: '#a8d560'
  on-secondary-fixed: '#121f00'
  on-secondary-fixed-variant: '#344e00'
  tertiary-fixed: '#ffddb6'
  tertiary-fixed-dim: '#ffb958'
  on-tertiary-fixed: '#2a1800'
  on-tertiary-fixed-variant: '#643f00'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
  surface-canvas: '#F4F6F8'
  surface-card: '#FFFFFF'
  border-subtle: '#E2E8F0'
  text-body: '#475569'
  text-muted: '#94A3B8'
  danger-carmine: '#D9383A'
  accent-light-tint: '#E2F7C1'
  status-whatsapp: '#25D366'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Outfit
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  title-md:
    fontFamily: Outfit
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Outfit
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Outfit
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Outfit
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Outfit
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-md:
    fontFamily: Outfit
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Outfit
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.05em
  metric-display:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

The design system establishes a high-performance, modern operational platform designed for waste management, sanitation engineering, fleet logistics, and commercial oversight. The visual character conveys technical precision, environmental hygiene, absolute reliability, and institutional authority.

The aesthetic fuses **Corporate / Modern** dashboard efficiency with crisp **clean-tech utilitarianism**. Surfaces are engineered for high-density data legibility—enabling dispatchers, environmental compliance officers, and field managers to assess fleet routes, suction pump capacities, and compliance certifications at a glance. Visual rhythm balances authoritative deep-sea pine greens with distinct operational status alerts, avoiding visual fatigue during prolonged operational shifts.

## Colors

The palette is anchored by deep Fir Green (`#08736C`), representing institutional strength, environmental sanitation, and core system navigation. Functional hierarchy relies on precise semantic mappings:

- **Primary (`#08736C`)**: Dominates structural navigation, top app bars, primary interactive buttons, and high-level KPI card headers.
- **Secondary (`#A3CF5B`)**: Used selectively for positive operational states, completed waste treatment manifests, validated environmental approvals, and active operational telemetry.
- **Tertiary / Warning (`#EB9C18`)**: Communicates pending maintenance, impending certification expirations, low chemical inventories, and delayed fleet dispatches.
- **Critical / Danger (`#D9383A`)**: Reserved strictly for hazardous overflows, overdue regulatory manifests, suction pump mechanical failures, and SLA breaches.
- **Surface & Canvas Structure**: Default mode is clean light. The background uses a balanced off-white slate (`#F4F6F8`) to eliminate screen glare while maintaining crisp separation against pure white (`#FFFFFF`) card surfaces. Text hierarchy strictly uses Slate-800 (`#1E293B`) for primary titles, Slate-600 (`#475569`) for operational body, and Slate-400 (`#94A3B8`) for secondary metrics and non-critical metadata.

## Typography

The type scale is powered comprehensively by **Outfit**, capitalizing on its geometric clarity, wide aperture, and modern industrial legibility.

- **Headlines & KPI Metrics**: Utilize medium to bold weights (`600` and `700`) with subtle negative tracking (`-0.01em` to `-0.02em`) to command attention without feeling crowded.
- **Data Tables & Operational Lists**: Standardized on `body-md` (14px) and `body-sm` (12px) to optimize vertical scanning across hundreds of service orders and truck telemetry logs.
- **Labels & Badges**: Set in `label-md` and `label-sm` with slight positive tracking (`+0.02em` to `+0.05em`) and uppercase transformation where critical operational categories (e.g., `RESÍDUO CLASSE I`, `FROTA EM TRANSITO`) demand rapid differentiation.

## Layout & Spacing

The layout is built upon a **12-column fluid grid** system optimized for high information density desktop workstations, scaling seamlessly down to tablet and mobile field inspector devices.

- **Desktop (>= 1280px)**: 12 columns, 24px (`1.5rem`) gutters, and 32px (`2rem`) outer margins. Supports persistent left-hand navigation rail (collapsible between 80px and 260px) and multi-panel operational monitoring grids.
- **Tablet (768px - 1279px)**: 8 columns, 16px (`1rem`) gutters, and 24px margins. Navigation shifts to an off-canvas drawer or top toolbar.
- **Mobile (< 768px)**: 4 columns, 16px gutters, and 16px margins. Cards reflow vertically into single-column streams with full-width action drawers.

Spacing rhythm follows an 8px base rhythm with 4px sub-increments (`space-xs: 4px`, `space-sm: 8px`, `space-md: 12px`, `space-lg: 20px`, `space-xl: 32px`) to enforce dense, disciplined alignment across data grids and form fields.

## Elevation & Depth

Visual hierarchy employs a refined combination of **low-contrast structural outlines** and **subtle ambient shadows**, maintaining clarity without visual clutter:

- **Level 0 (Canvas Base)**: `#F4F6F8` flat fill. No elevation.
- **Level 1 (Card & Section Containers)**: `#FFFFFF` fill with a `1px` solid border in `#E2E8F0` and `shadow-sm` (`0 1px 2px 0 rgba(15, 23, 42, 0.05)`). Used for standard operational cards, analytical charts, and data tables.
- **Level 2 (Hovered Cards & Dropdowns)**: `#FFFFFF` fill with `shadow-md` (`0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04)`). Applied during card hover states, filter dropdowns, and date-range pickers.
- **Level 3 (Modals & Critical Sheets)**: Centered or slide-over overlays with `shadow-xl` (`0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.06)`), layered over a backdrop scrim tinted with `#0F172A` at 40% opacity.
- **Focus Rings**: Strict 2px offset ring in `#08736C` at 30% alpha for non-intrusive accessibility compliance.

## Shapes

The geometric framework balances clean precision with approachable industrial durability using **Level 2 (Rounded)** curvature:

- **Standard Components**: Buttons, text inputs, table wrappers, and operational cards use `8px` (`0.5rem`) corner radii, conveying stability and technical efficiency.
- **Containers & Sheet Surfaces**: Modal windows, slide-out fleet monitors, and overview metric panels use `rounded-lg` (`16px` / `1rem`).
- **Tags, Status Badges & Pills**: Feature fully rounded boundaries (`rounded-full`) to immediately differentiate categorical tags and operational statuses from interactive actionable rectangular buttons.

## Components

### Buttons
- **Primary**: Background `#08736C`, text `#FFFFFF`, border none, height 40px, padding `0 16px`, font weight 600. On hover: darken to `#065853`. On active: press scale (0.98).
- **Secondary / Outline**: Background transparent, border 1px solid `#08736C`, text `#08736C`. On hover: surface `#08736C` at 6% tint.
- **Ghost / Neutral**: Background transparent, text `#475569`. On hover: `#F1F5F9`.
- **Destructive**: Background `#D9383A`, text `#FFFFFF`. On hover: `#B91C1C`.
- **WhatsApp Action**: Background `#25D366`, text `#FFFFFF`, font weight 600, with integrated brand messaging icon.

### Form Inputs & Selects
- Height 40px (compact 34px for dense table edit rows).
- Surface: `#FFFFFF`, border: `1px solid #E2E8F0`, corner radius: `8px`.
- Typography: Outfit `14px` (`#1E293B`), placeholder in `#94A3B8`.
- Focus state: border `#08736C`, box-shadow `0 0 0 3px rgba(8, 115, 108, 0.15)`.
- Error state: border `#D9383A`, focus ring in `#D9383A` at 20% alpha with subordinate helper error text.

### Status Badges & Chips
- **Concluído / Regularizado**: Background `#E2F7C1`, text `#2E5A1C`, 1px border `#A3CF5B`.
- **Pendente / Alerta Técnico**: Background `#FEF3C7`, text `#92400E`, 1px border `#EB9C18`.
- **Crítico / Atrasado**: Background `#FEE2E2`, text `#991B1B`, 1px border `#D9383A`.
- **Em Trânsito / Operação**: Background `#E0F2FE`, text `#075985`, 1px border `#38BDF8`.
- Badges feature an optional leading 6px pulsing dot indicator for live telemetry updates.

### Data Tables (Operational Grid)
- Header: `#F8FAFC`, height 44px, text `label-md` `#475569`, border-bottom `1px solid #E2E8F0`.
- Row: `#FFFFFF`, height 52px (standard) or 42px (compact density). Border-bottom `1px solid #F1F5F9`.
- Zebra striping is avoided; hover state applies `#F8FAFC` row highlight with immediate visual response.

### Cards & Metric Panels
- Base `#FFFFFF`, border `1px solid #E2E8F0`, padding 20px (`space-lg`), shadow-sm.
- Header row hosts the metric label, right-aligned utility icon or trend indicator, followed by `metric-display` (32px bold) and comparative period context.

### Checkboxes & Radios
- Size: 18px x 18px. Border: 1.5px solid `#CBD5E1`.
- Checked: `#08736C` fill with white checkmark glyph. Checkbox uses 4px border-radius; Radio uses circular geometry.