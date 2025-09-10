# LinkBird

LinkBird is a modern web application for managing marketing campaigns and leads. Built with Next.js (App Router), TypeScript, Drizzle ORM, and a modular component architecture, it provides a dashboard for campaign management, lead tracking, and user authentication.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [Routing](#routing)
- [Known Issues & Roadmap](#known-issues--roadmap)
- [License](#license)

---

## Features

- **Campaign Management:** Create, view, and filter marketing campaigns.
- **Lead Tracking:** Associate leads with campaigns and view lead details.
- **User Authentication:** Login and signup flows.
- **Responsive UI:** Built with reusable components and utility-first CSS.
- **API Routes:** RESTful endpoints for campaigns and leads.
- **Database Integration:** Uses Drizzle ORM for type-safe database access.
- **Testing & Linting:** ESLint and TypeScript for code quality.
- **Data Fetching & Caching:** Uses TanStack Query for efficient data fetching and caching.

---

## Project Structure

```
linkbird/
├── .env                      # Environment variables
├── .gitignore
├── components.json           # Component registry
├── drizzle.config.ts         # Drizzle ORM config
├── middleware.ts             # Next.js middleware
├── next.config.ts            # Next.js config
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── public/                   # Static assets (SVGs, images)
├── src/
│   ├── app/                  # Next.js app directory (App Router)
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   ├── api/              # API route handlers
│   │   ├── dashboard/        # Dashboard pages
│   │   │   ├── campaigns/    # Campaigns list page
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/     # Campaign detail page
│   │   │   ├── leads/        # Leads dashboard
│   │   ├── login/            # Login page
│   │   ├── signup/           # Signup page
│   ├── components/           # UI and feature components
│   │   ├── campaigns/
│   │   ├── leads/
│   │   ├── linkedinaccounts/
│   │   ├── skeletons/
│   │   └── ui/
│   ├── context/              # React context providers
│   ├── db/                   # Database schema
│   │   └── schema/
│   ├── hooks/                # Custom React hooks (e.g., useCampaigns, useLeads)
│   ├── lib/                  # Utility libraries
│   ├── providers/            # React providers (e.g., QueryProvider for TanStack Query)
│   ├── scripts/              # Seed scripts
│   ├── server/               # Server utilities
│   └── stores/               # State management (e.g., leadStore)
├── dummydata/                # Example data
├── drizzle/                  # Drizzle ORM migrations
└── .next/                    # Next.js build output
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- A supported database (see Drizzle ORM docs)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd linkbird
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in the required values.

4. **Set up the database:**
   - Configure your database connection in `.env`.
   - Run migrations if needed.

---

## Development

### Running the Development Server

```sh
npm run dev
# or
yarn dev
```

- The app will be available at `http://localhost:3000`.

### Building for Production

```sh
npm run build
npm start
```

---

## Scripts

- `dev` – Start the development server.
- `build` – Build the app for production.
- `start` – Start the production server.
- `lint` – Run ESLint.
- `seed` – Seed the database with dummy data (see `src/scripts/`).

---

## Environment Variables

All the required environment variables include:

- `DATABASE_URL` – Database connection string
- `BETTER_AUTH_SECRET` – Better auth authentication secret
- `BETTER_AUTH_URL` – Address to your server
- `GOOGLE_CLIENT_ID` – Google client ID for authentication
- `GOOGLE_CLIENT_SECRET` – Google client secret for authentication

---

## Routing

- `/` – Home page
- `/dashboard` – Main dashboard
- `/dashboard/campaigns` – Campaigns list
- `/dashboard/campaigns/[id]` – Campaign detail page
- `/dashboard/leads` – Leads list
- `/login` – Login page
- `/signup` – Signup page
- `/api/campaigns` – Campaigns API
- `/api/leads` – Leads API

---

## Data Fetching & Optimization

- **TanStack Query** is used for all data fetching and caching, ensuring efficient network usage and deduplication of requests.
- For expensive computations on fetched data (such as filtering or sorting), use React's `useMemo` in your components to avoid unnecessary recalculations.
- Example:
  ```tsx
  import { useCampaigns } from "@/hooks/useCampaigns";
  import { useMemo } from "react";

  const { data: campaigns = [] } = useCampaigns();
  const activeCampaigns = useMemo(
    () => campaigns.filter(c => c.active),
    [campaigns]
  );
  ```

---

## Known Issues & Roadmap

- **Testing:**  
  Automated tests are not yet included.

- **Documentation:**  
  More detailed API and component documentation is planned.

---