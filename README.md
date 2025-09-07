to start first type in the command npm i to install the dependencies
the app is a working copy of linkbird.ai with limited functionalities 
it uses nextjs as the framework and uses typescript throughout for the language
the database used is postgresql + drizzle orm

# Linkbird Assignment

This is an assignment for the Kandid internship application.

## Overview

This project is a working copy of [linkbird.ai](https://linkbird.ai) with limited functionalities. It is built using:

- **Next.js** (App Router, TypeScript)
- **shadcn/ui** for UI components
- **better-auth** for authentication
- **PostgreSQL** as the database, accessed via **Drizzle ORM**

## Project Structure

```
src/
  app/           # Next.js app directory (pages, layouts, API routes)
  components/    # Reusable UI and app components (shadcn/ui)
  db/            # Database schema (Drizzle ORM)
  hooks/         # Custom React hooks
  lib/           # Utility and auth logic
  server/        # Server-side logic
public/          # Static assets
drizzle/         # Database migration files
```

## Getting Started

1. **Install dependencies:**
	```
	npm install
	```

2. **Set up environment variables:**
	- Create a `.env` file with your database and auth credentials.

3. **Run the development server:**
	```
	npm run dev
	```
	The app will be available at `http://localhost:3000`.

4. **Build for production:**
	```
	npm run build
	npm start
	```

## Features

- User authentication (Google, email/password)
- Dashboard and user management
- Responsive UI with shadcn components

## Tech Stack

- Next.js 15 (App Router, TypeScript)
- React 19
- shadcn/ui
- better-auth
- Drizzle ORM
- PostgreSQL

## Notes

- Authentication is handled optimistically in middleware, but should be checked in each route for security.
- This is a demo/assignment and not intended for production use.