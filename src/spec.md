# Specification

## Summary
**Goal:** Simplify the landing page into a minimal rate-list + UPI payment layout in English, matching the provided HTML snippet, with a subtle fade-in on the UPI payment card.

**Planned changes:**
- Refactor `frontend/src/components/LandingPage.tsx` to render only: a sticky top navbar (logo + brand text + call button), a two-card services rate list (Cleaning, AC Service), a centered UPI payment section (QR + UPI ID + service area caption), and a simple footer; remove/hide existing extra marketing sections.
- Replace any non-English (Gujarati) headings/subheadings from the snippet with English equivalents while keeping phone number, UPI ID, and all prices unchanged.
- Add a subtle fade-in animation to the UPI payment card on initial render and/or when scrolled into view, without introducing new external libraries.
- Replace any Font Awesome `<i class="fas ...">` usage with existing icon tooling (e.g., a phone icon component) while preserving the call button intent and label.
- Use the provided external image URLs for the logo and UPI QR exactly as given, and implement a React-friendly logo fallback to the provided icons8 URL if the primary logo fails to load.

**User-visible outcome:** Visitors see a clean single-page layout with a sticky call-to-action navbar, clear service rate cards, and an online UPI payment box (with a subtle fade-in), plus a simple 2026 footer—entirely in English.
