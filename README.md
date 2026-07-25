# Netflix-Fa-Stream

A Persian-language video streaming platform similar to Netflix, featuring user authentication, subscription/payment (Stripe), video catalog, player, and admin dashboard for content management.

## Features
- User authentication (email/OTP, password reset)
- Subscription plans with Stripe integration
- Video browsing, search, and playback
- Admin panel for managing videos, genres, users, and analytics
- Fully RTL UI with Vazirmatn font, Tailwind CSS
- Deployed on Vercel

## Tech Stack
- **Framework**: Next.js 14 (App Router, Server Components)
- **Styling**: Tailwind CSS, Vazirmatn font (RTL)
- **Authentication**: NextAuth v5 (email/OTP)
- **Database**: Prisma ORM with Vercel Postgres
- **Caching**: Upstash Redis (sessions)
- **Payments**: Stripe
- **State Management**: React Query (server), Zustand (client)
- **Testing**: Jest + React Testing Library, Playwright (E2E)
- **Code Quality**: ESLint, Prettier, TypeScript strict
- **Deployment**: Vercel

## Getting Started
1. Clone the repository
2. Copy `.env.example` to `.env.local` and fill in required variables
3. Install dependencies: `npm install`
4. Run development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## License
MIT