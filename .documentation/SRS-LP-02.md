# Opulance AI Landing Page - Software Requirements Specification

## System Design
- Landing page focused on brand showcase and client conversion.
- Includes interactive 3D visuals, AI chatbot, dynamic carousels, testimonials, and Calendly booking.
- Mobile-first, responsive design with accessibility and performance in mind.
- Key Components:
  - Hero Section with interactive 3D AI animation
  - Services carousel
  - Client inquiry form with Calendly
  - Case studies/testimonials section
  - Persistent floating CTA button
  - AI chatbot (real-time Q&A)
  - Footer with contact & social links

## Architecture pattern
- Component-based architecture using Next.js App Router.
- Serverless deployment on Vercel or Netlify.

## State management
- React Context API for global UI state (e.g. theme, chatbot).
- Local component state for forms and UI animations.

## Data flow
- Unidirectional data flow:
  - User inputs → local state → form submission → Calendly
  - Chatbot → user input → API response → UI update
  - Page interactions → analytics tracking

## Technical Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **3D & Visuals**: Three.js, WebGL
- **Animation**: Framer Motion
- **UI Components**: Shadcn, Radix UI, Heroicons, Lucide React
- **Chatbot**: Embedded real-time assistant
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel or Netlify

## Authentication Process
- No authentication required.

## Route Design
- `/` – Home
- `/products` – Dropdown placeholder
- `/portfolio` – Anchor scroll to Case Studies
- `/contact` – Scroll to footer
- 404 fallback page included

## API Design
- No custom API required.
- Calendly widget handles scheduling.
- Chatbot runs via embedded service.

## Database Design ERD
- No database required.

