# Frimarc Sport - Fitness Website

## Overview

This is a modern fitness website built for Frimarc Sport, a gym/fitness center. The application is a full-stack solution featuring a React frontend with a Node.js/Express backend, designed to showcase gym services, handle contact forms, and manage class bookings.

## System Architecture

The application follows a monorepo structure with clear separation between frontend, backend, and shared code:

- **Frontend**: React SPA with TypeScript, built using Vite
- **Backend**: Express.js REST API with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Deployment**: Built for production with ESBuild

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom configuration

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Connection**: Neon Database serverless driver
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **API Design**: RESTful endpoints for contacts and bookings
- **Development**: Hot reload with Vite middleware integration

### Database Schema
- **Users**: Basic user authentication (username, password)
- **Contacts**: Contact form submissions with personal details and interests
- **Class Bookings**: Class reservation system with customer information
- **Timestamps**: Automatic created_at tracking for submissions

## Data Flow

1. **Contact Submissions**: Form validation → API endpoint → Database storage → Success feedback
2. **Class Bookings**: Class selection → Modal form → Validation → Database storage → Confirmation
3. **Admin Access**: API endpoints for retrieving all contacts and bookings
4. **Real-time Updates**: TanStack Query manages cache invalidation and updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless connection
- **drizzle-orm**: Type-safe database queries and migrations
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **react-hook-form**: Form state management
- **zod**: Schema validation
- **wouter**: Lightweight React router

### Development Tools
- **Vite**: Fast development server and build tool
- **TypeScript**: Type safety across the stack
- **Tailwind CSS**: Utility-first styling
- **ESBuild**: Production bundling for server
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Development
- Vite dev server with HMR for frontend
- tsx for running TypeScript server with hot reload
- Integrated development with Vite middleware serving React app
- Database migrations with Drizzle Kit

### Production
- Frontend: Vite build to static assets
- Backend: ESBuild bundling with external packages
- Database: PostgreSQL with connection pooling
- Environment: NODE_ENV-based configuration

### Build Process
1. `npm run build`: Builds both frontend (Vite) and backend (ESBuild)
2. `npm start`: Runs production server with built assets
3. `npm run db:push`: Applies database schema changes

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 28, 2025. Initial setup
- June 28, 2025. Added checkout page for membership purchases with complete payment flow
- June 28, 2025. Enhanced SEO with comprehensive meta tags, structured data, and Open Graph
- June 28, 2025. Implemented professional design improvements:
  - Advanced animations and scroll reveal effects
  - Enhanced hero section with trust indicators and stats
  - Improved course cards with ratings, pricing, and trainer info
  - Professional loading states and enhanced UI components
  - Gradient text effects and hover animations
  - Mobile-responsive design optimization