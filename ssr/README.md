# SSR / On Demand Rendering with Optimizely Content Graph & Astro

[Read the blog on Optimizely World about this version here](https://world.optimizely.com/blogs/jacob-pretorius/dates/2025/7/build-a-headless-blog-with-astro-and-optimizely-saas-cms-part-4---ssr--visual-builder-experience/)

This version of the Opti.SaaS.Astro.Demo has been configured to use Server-Side Rendering (SSR) or On-Demand Rendering with Astro and Vercel. This allows content changes from Optimizely Content Graph to be reflected live without requiring a new build and deployment for each content update.

Additionally, this setup includes GraphQL code generation to provide TypeScript types for your GraphQL schema and operations, enhancing developer experience and type safety.

## Key Changes and Features

1.  **Astro Configuration (`astro.config.mjs`)**:
    *   Set to `output: 'server'` to enable SSR capabilities.
    *   Uses `@astrojs/vercel` adapter configured for serverless functions (default for SSR mode).

2.  **GraphQL Code Generation**:
    *   **Dependencies**:
        *   `@graphql-codegen/cli`: Core CLI for running codegen.
        *   `@graphql-codegen/typescript`: Generates base TypeScript types from your schema.
        *   `@graphql-codegen/typescript-operations`: Generates types for your GraphQL queries, mutations, and fragments.
        *   `dotenv`: Used to load environment variables (like your GraphQL endpoint) for the codegen process.
    *   **Configuration (`codegen.ts`)**:
        *   Connects to your Optimizely Content Graph endpoint specified in the `PUBLIC_APP_GRAPHQL_API` environment variable (loaded from an `.env` file).
        *   Scans `src/**/*.ts` and `src/**/*.astro` files for `gql` tagged GraphQL operations.
        *   Generates types into the `src/gql/` directory.
        *   Uses the `client` preset, suitable for Apollo Client and similar setups.
        *   `skipTypename` is set to `false` to include `__typename` in generated types, which is useful for Apollo cache and conditional rendering.
    *   **NPM Script (`package.json`)**:
        *   `npm run codegen`: Executes the GraphQL code generation process.

3.  **Typed GraphQL Queries (`src/api/apollo-client.ts`)**:
    *   Functions like `resolveContent`, `getArticles`, etc., are set up to fetch data from Optimizely Content Graph.
    *   Queries are defined using Apollo Client's `gql` tag.
    *   Refactored to use GraphQL variables for dynamic parts of queries, making them compatible with the codegen process.
    *   Utilizes a `ContentItemFieldsFragment` for common content fields, typed using the generated `_IContent` interface from your schema.

4.  **Astro Component Typing**:
    *   Layouts (e.g., `src/layouts/ArticlePage.astro`, `src/layouts/BlogPage.astro`) and components (e.g., `src/components/TemplateResolver.astro`) have been updated to import and use the generated GraphQL types for their props.
    *   This provides type safety and autocompletion when working with content fetched from GraphQL.

5.  **Environment Variables**:
    *   An `.env` file in the `ssr` directory is used to store the `PUBLIC_APP_GRAPHQL_API` endpoint URL.
    *   `dotenv` is used to load this variable during the `codegen` script execution.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
    (If you are in the root of the monorepo, you might run this from the `ssr` directory or ensure your workspace setup handles it).

2.  **Set Up Environment Variables**:
    *   Create a `.env` file in the `ssr` directory: `ssr/.env`
    *   Add your Optimizely Content Graph API endpoint:
        ```
        PUBLIC_APP_GRAPHQL_API=YOUR_GRAPHQL_ENDPOINT_HERE
        ```

3.  **Generate GraphQL Types**:
    ```bash
    npm run codegen 
    ```
    (Run this from the `ssr` directory if `package.json` is there, or adjust path if run from root e.g. `npm run codegen -w ssr`)

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    (Again, context-dependent on where you run npm commands).

## SSR and On-Demand Rendering Benefits

*   **Fresh Content**: Pages are rendered on demand or at request time, ensuring that the latest content from the CMS is always served.
*   **No Full Rebuilds for Content Changes**: Unlike static site generation for every content update, SSR allows content to be fetched live, reducing build times and deployment frequency for content-only changes.
*   **SEO**: Astro's SSR capabilities ensure that search engines can effectively crawl and index dynamically rendered pages.

This setup provides a robust foundation for building dynamic, content-rich websites with Astro and Optimizely Content Graph, leveraging the benefits of SSR and type-safe GraphQL operations.

