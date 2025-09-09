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

---

## Features

- **Campaign Management:** Create, view, and filter marketing campaigns.
- **Lead Tracking:** Associate leads with campaigns and view lead details.
- **User Authentication:** Login and signup flows.
- **Responsive UI:** Built with reusable components and utility-first CSS.
- **API Routes:** RESTful endpoints for campaigns and leads.
- **Database Integration:** Uses Drizzle ORM for type-safe database access.
- **Testing & Linting:** ESLint and TypeScript for code quality.

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
│   │   ├── dashboard/        # Dashboard pages
│   │   │   ├── campaigns/    # Campaigns list page
│   │   │   │   ├── page.tsx  # Campaigns dashboard
│   │   │   │   └── [id]/     # (To be developed) Campaign detail page
│   │   │   ├── leads/        # Leads dashboard
│   │   ├── api/              # API route handlers
│   │   ├── login/            # Login page
│   │   ├── signup/           # Signup page
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/           # UI and feature components
│   ├── context/              # React context providers
│   ├── db/                   # Database schema
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility libraries
│   ├── providers/            # React providers
│   ├── scripts/              # Seed scripts
│   ├── server/               # Server utilities
│   └── stores/               # State management
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

See `.env.example` for all required environment variables. Typical values include:

- `DATABASE_URL` – Database connection string
- `NEXTAUTH_SECRET` – Authentication secret
- `...` – Other service keys as needed

---

## Routing

- `/` – Home page
- `/dashboard` – Main dashboard
- `/dashboard/campaigns` – Campaigns list
- `/dashboard/campaigns/[id]` – **(To be developed)** Campaign detail page
- `/dashboard/leads` – Leads list
- `/login` – Login page
- `/signup` – Signup page
- `/api/campaigns` – Campaigns API
- `/api/leads` – Leads API

---

## Known Issues & Roadmap

- **Campaign Detail Page:**  
  The route `/dashboard/campaigns/[id]` is scaffolded but **not yet implemented**. This page will display detailed information about a single campaign, including status, associated leads, and actions.

- **Testing:**  
  Automated tests are not yet included.

- **Documentation:**  
  More detailed API and component documentation is planned.

---
