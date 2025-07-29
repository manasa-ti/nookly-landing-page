# Nookly Dating App Replit Configuration

## Overview

This is a full-stack dating application called "Nookly" built with React, Express.js, and PostgreSQL. The app focuses on anonymous dating with AI-powered assistance, emphasizing personality-based connections over appearance. It features a marketing landing page and API endpoints for contact forms and newsletter signups.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database ORM**: Drizzle ORM
- **API Design**: RESTful endpoints with JSON responses
- **Development**: Hot reloading with Vite middleware integration

### Database Architecture
- **Database**: PostgreSQL (configured via Drizzle)
- **Connection**: Neon Database serverless driver
- **Schema Management**: Drizzle migrations in `/migrations` directory
- **Storage Interface**: Abstracted storage layer with in-memory fallback

## Key Components

### Frontend Components
- **Landing Page**: Complete marketing site with sections for hero, features, testimonials, FAQ
- **UI Components**: shadcn/ui based component library with custom theming
- **Forms**: Contact form and newsletter signup with validation
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Backend Services
- **Contact API**: Handles contact form submissions with validation
- **Newsletter API**: Manages email subscriptions with duplicate checking
- **Storage Layer**: Interface-based design supporting multiple storage backends
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Submissions**: Stores contact form data with timestamps
- **Newsletter Signups**: Email subscription management with uniqueness constraints

## Data Flow

1. **Client Requests**: React components use TanStack Query to make API calls
2. **API Processing**: Express routes validate input using Zod schemas
3. **Database Operations**: Drizzle ORM handles database interactions
4. **Response Handling**: Structured JSON responses with error handling
5. **UI Updates**: React Query manages cache invalidation and UI updates

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: PostgreSQL connection driver
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **react-hook-form**: Form state management
- **zod**: Runtime type validation

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across the stack
- **Tailwind CSS**: Utility-first styling
- **ESBuild**: Production bundling for server code

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `/dist/public`
- **Backend**: ESBuild bundles server code to `/dist/index.js`
- **Database**: Drizzle migrations run via `npm run db:push`

### Environment Setup
- **Development**: `npm run dev` starts both Vite dev server and Express API
- **Production**: `npm run build` then `npm start` for production deployment
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Project Structure
```
├── client/          # React frontend application
├── server/          # Express.js backend API
├── shared/          # Shared types and schemas
├── dist/           # Production build output
└── migrations/     # Database migration files
```

The application uses a monorepo structure with clear separation between frontend, backend, and shared code, enabling efficient development and deployment workflows.