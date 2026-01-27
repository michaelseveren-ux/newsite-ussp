# Proposal: Initialize Astro + Tailwind Site

## Why

The US Sport Planes website needs a modern, performant foundation. Astro provides excellent static-site performance with islands architecture for interactive components, while Tailwind enables rapid UI development with consistent styling.

## What Changes

- Initialize Astro 5.x project structure
- Integrate Tailwind CSS for styling
- Configure for Vercel deployment
- Create base layout and homepage placeholder
- Set up TypeScript configuration

## Capabilities

### New Capabilities
- `astro-site`: Astro-based site structure with pages, layouts, and components
- `tailwind-styling`: Utility-first CSS framework configured and ready to use
- `vercel-deployment`: Adapter configured for Vercel hosting

## Impact

- `package.json`: Add Astro, Tailwind, and Vercel adapter dependencies
- `astro.config.mjs`: New - Astro configuration with integrations
- `tailwind.config.mjs`: New - Tailwind configuration
- `tsconfig.json`: New - TypeScript configuration
- `src/layouts/Layout.astro`: New - Base page layout
- `src/pages/index.astro`: New - Homepage
- `src/styles/global.css`: New - Global styles with Tailwind directives
