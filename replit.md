# Nookly Dating App Website

## Overview

This is a static marketing website for the "Nookly" dating app built with React and Vite. The website showcases the anonymous dating platform with AI-powered assistance, emphasizing personality-based connections over appearance. It features a complete marketing landing page with static forms for contact and newsletter signup, ready for deployment on any static hosting platform.

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

### Static Website Architecture
- **Build Tool**: Vite with React plugin
- **Asset Handling**: Real mobile app screenshots integrated
- **Form Handling**: Static forms using mailto and localStorage
- **Color Scheme**: Updated to match app's #2D4B8A blue color
- **Development**: Hot reloading with Vite dev server

## Key Components

### Frontend Components
- **Landing Page**: Complete marketing site with sections for hero, features, testimonials, FAQ
- **UI Components**: shadcn/ui based component library with custom theming
- **Forms**: Contact form and newsletter signup with validation
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Static Form Components
- **Contact Form**: Opens default email client with pre-filled message
- **Newsletter Signup**: Saves emails to browser localStorage for basic tracking
- **Error Handling**: Form validation with user-friendly error messages
- **User Experience**: Toast notifications and loading states

## Data Flow

1. **Static Assets**: Vite bundles all React components and assets
2. **Form Interactions**: Static forms handle user input without server
3. **Client-Side Storage**: Newsletter emails stored in localStorage
4. **Email Integration**: Contact form opens native email client
5. **UI Updates**: React state management for form interactions

## External Dependencies

### Core Technologies
- **@radix-ui/***: Accessible UI primitives
- **react-hook-form**: Form state management
- **zod**: Runtime type validation
- **wouter**: Lightweight client-side routing
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety for components
- **Tailwind CSS**: Utility-first styling with custom Nookly theme
- **PostCSS**: CSS processing and optimization

## Deployment Strategy

### Build Process
- **Development**: `npm run dev` starts Vite dev server
- **Production**: `npm run build` generates static files in `/dist`
- **Static Assets**: All components, styles, and images bundled together

### Environment Setup
- **Development**: `npm run dev` starts development server on port 5000
- **Production Build**: `npm run build` creates optimized static files
- **Deployment**: Upload `/dist` folder to any static hosting service

### Deployment Options
- **GitHub Pages**: Push to repository and enable Pages
- **Netlify**: Connect repo with build command `npm run build`
- **Vercel**: Import project with automatic React detection
- **Replit Static**: Use "Static" deployment option

### Project Structure
```
├── client/src/          # React frontend application
│   ├── components/      # UI components including static forms
│   ├── pages/           # Main landing page
│   └── index.css       # Custom Nookly theme with #2D4B8A colors
├── attached_assets/     # Real mobile app screenshots
├── dist/               # Production build output (generated)
└── static-build-instructions.md  # Deployment guide
```

The website is now a pure static application optimized for fast loading and easy deployment on any hosting platform, featuring the real Nookly app interface and matching color scheme.

## Recent Changes
- **January 30, 2025**: Converted from full-stack to static website
- **Color Update**: Updated theme to match app's #2D4B8A blue color scheme
- **Real Screenshots**: Integrated actual mobile app interface screenshots
- **Static Forms**: Contact form uses mailto, newsletter uses localStorage
- **Deployment Ready**: Prepared for static hosting deployment