# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with environment variables loaded
- `npm run build` - Build for production (runs Astro check then build)
- `npm run preview` - Preview production build locally
- `npm run codegen` - Generate TypeScript types from GraphQL schema
- `npm run start` - Alternative dev command (same as dev)

## Architecture Overview

This is an Astro SSR application using Optimizely Content Graph as the headless CMS backend. The application fetches content dynamically at request time rather than at build time.

### Key Components

**SSR Configuration**: 
- `astro.config.mjs` sets `output: 'server'` with Vercel adapter
- Enables on-demand rendering for live content updates

**GraphQL Integration**:
- Apollo Client configured in `src/api/apollo-client.ts`
- GraphQL schema introspection and code generation via `codegen.ts`
- Generated types in `src/gql/` directory provide full TypeScript support
- Content queries use fragments for reusable field selections

**Content Resolution**:
- `src/pages/[...slug].astro` handles all dynamic routes
- `src/components/TemplateResolver.astro` maps content types to layout components
- Layout components in `src/layouts/` render specific page types (StartPage, ArticlePage, etc.)

**Environment Setup**:
- `.env` file required with `PUBLIC_APP_GRAPHQL_API` endpoint
- `dotenv` loads environment variables for codegen process

### Content Architecture

The CMS provides several content types:
- `StartPage` - Home page with company info and banner images
- `ArticlePage` - Blog articles with heading, body, and featured image
- `BlogPage` - Blog listing pages
- `StandardPage` - Basic content pages
- `ImageRightContentPage` - Pages with image/text layout

Content is fetched using GraphQL queries that leverage the `ContentItemFields` fragment for consistent typing across all content types.

### Development Workflow

1. Run `npm run codegen` after schema changes to regenerate types
2. Content changes appear immediately due to SSR (no rebuild required)
3. Preview functionality available via preview tokens in Apollo Client setup

## Type Safety

All GraphQL operations are fully typed using generated types from the schema. Import types from `src/gql/graphql.ts` for component props and data handling.