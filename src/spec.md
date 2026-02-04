# Specification

## Summary
**Goal:** Add a detailed “Service Areas” section to the landing page highlighting Ahmedabad and Gandhinagar coverage using the provided layout and content.

**Planned changes:**
- Implement a new “Service Areas” section in `frontend/src/components/LandingPage.tsx` matching the provided snippet’s structure and Tailwind styling (section wrapper, container, centered H2, responsive 2-column card grid).
- Populate the section with the exact Gujarati locality lists and headings from the snippet for Ahmedabad and Gandhinagar, including the concluding italic note line exactly as provided.
- Replace the snippet’s Font Awesome `<i class="fas ...">` icon usage with an existing project-friendly icon approach (e.g., lucide-react map/pin icon) placed inline before each city heading, without adding Font Awesome.

**User-visible outcome:** The landing page displays a new Service Areas section where visitors can see Ahmedabad and Gandhinagar localities served, with responsive card/grid layout and a map-marker icon next to each city heading.
