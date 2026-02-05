# Specification

## Summary
**Goal:** Update the landing page UI to match the provided MAGICAL SERVICE HTML layout, copy, and interactions.

**Planned changes:**
- Update `frontend/src/components/LandingPage.tsx` to render (in order) a sticky top navbar with text-only brand (“MAGICAL SERVICE” + “Ahmedabad & Gandhinagar”) and a phone CTA (`tel:+918000262644`), followed by a blue hero section with the specified headings and a “WhatsApp Inquiry” button linking to `https://wa.me/918000262644`.
- Implement the “Our Service Rates” section with an underlined title and four service-rate cards (Sofa/AC Jet/Mattress/Carpet-Chair) using matching Tailwind styling, rounded borders, and hover lift/transition behavior (`hover:-translate-y-2`).
- Add the 3-item benefits strip with the same responsive/mobile border-top behavior as the snippet.
- Add the UPI + review section including “Scan to Pay (UPI)”, the QR image loaded from the exact provided `api.qrserver.com` URL, the UPI ID text “UPI ID: jrg7311@okicici”, and the review link `https://share.google/CAZwztDsnRKHBaOAM`.
- Replace any FontAwesome `<i class="...">` icon usage implied by the HTML with the project’s existing icon approach (e.g., `lucide-react` / `react-icons`) while keeping the same visual intent (phone, WhatsApp, service icons, benefit icons), and keep the floating WhatsApp button linking to `https://wa.me/918000262644`.

**User-visible outcome:** The landing page matches the provided MAGICAL SERVICE layout and copy, with working phone/WhatsApp/review links, hover-lift service cards, the UPI QR payment block, and consistent icons without adding FontAwesome.
