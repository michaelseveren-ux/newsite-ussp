# Design: Initialize Astro + Tailwind Site

## Context

Starting from an empty project with only the OpenSpec CLI installed. Need to establish the full Astro + Tailwind foundation that will support blog, contact forms, aircraft listings, Clerk auth, and Neon DB in future changes.

## Goals / Non-Goals

**Goals:**
- Minimal but complete Astro project structure
- Tailwind CSS ready to use
- Vercel adapter configured
- Clean foundation for future features

**Non-Goals:**
- Clerk authentication setup (future change)
- Neon database integration (future change)
- Blog functionality (future change)
- Aircraft listings (future change)
- Production-ready homepage design (just a placeholder)

## Decisions

### Decision 1: Astro 5.x with strict TypeScript

Using latest Astro with TypeScript in strict mode for type safety. This catches errors early and provides better IDE support.

### Decision 2: @astrojs/tailwind integration

Using the official Astro Tailwind integration rather than manual setup. This handles purging, configuration, and HMR automatically.

### Decision 3: @astrojs/vercel adapter

Configuring the Vercel adapter from the start, even though we're not deploying yet. This ensures the build output is Vercel-compatible and enables serverless functions when needed for Clerk/Neon.

### Decision 4: Minimal initial layout

The Layout component will include only essential structure (html, head, body, slot). Styling and navigation come in future changes when we know more about the design.
