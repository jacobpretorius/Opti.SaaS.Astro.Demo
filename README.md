# Optimizely SaaS CMS example site using [Astro](https://astro.build/)

This example site shows how Optimizely SaaS CMS can be used with Astro. To configure your own all you would need is to import the data into your CMS instance and plug in the relevant values in `.env` and the other configuration files.

## Guides

Follow the three part series that explains the static site in detail on World [Build a headless blog with Astro and Optimizely SaaS CMS](https://world.optimizely.com/blogs/jacob-pretorius/dates/2024/5/build-a-headless-blog-with-astro-and-optimizely-saas-cms/)

And the SSR version [Build a headless blog with Astro and Optimizely SaaS CMS Part 4 - SSR & Visual Builder Experiences ](https://world.optimizely.com/blogs/jacob-pretorius/dates/2025/7/build-a-headless-blog-with-astro-and-optimizely-saas-cms-part-4---ssr--visual-builder-experience/)

## Static Site Version

[https://opti-saas-astro-static-demo.vercel.app](https://opti-saas-astro-static-demo.vercel.app) AKA `/src/static-site`

See the `/src/static-site/cms-data/` folder for an export you can import to your headless CMS with sample content and models.

See `/src/static-site/.env` for environment variables used to connect to the SaaS CMS Optimizely Graph instance.

### Dev Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### Publish Content Changes

The easiest (and somewhat hacky) way to get new content onto the website once published in the CMS is to register a Vercel deployment webhook from Optimizely Graph for `on-published` page events. This process is [described in part 2 of my blog series](https://world.optimizely.com/blogs/jacob-pretorius/dates/2024/10/build-a-headless-blog-with-astro-and-optimizely-saas-cms-part-2/)

## Server Side Rendered Version

[https://opti-saas-astro-ssr-demo.vercel.app](https://opti-saas-astro-ssr-demo.vercel.app) AKA `/src/ssr`

Takes what we built in the Static Site Version and makes it fully dynamic and server rendered on page request. This version adds support for typescript codegen from Graph as well, and Visual Builder with Experiences with these three Experience Blocks:

1. ExperienceHero
  Content Type: Experience_Hero
  - Image: Background image URL
  - Heading: Rich text hero title
  - Description: Rich text description
  - Creates full-width hero banners with overlay text

2. ExperienceCarousel
  Content Type: Experience_Carousel
  - Carousel_Images: Array of images with metadata
  - Renders responsive image grids with hover effects
  - Auto-fits columns with 300px minimum width

3. ExperienceRTE
  Content Type: Experience_RTE
  - Text: Rich text HTML content
  - Displays formatted text with comprehensive styling
  - Supports headings, lists, blockquotes, and links

  These components are orchestrated by the BlankExperience layout through Optimizely's Visual Builder, allowing content editors to compose experience pages by
  dragging and dropping these reusable components.


### Dev Commands

Same as for static site, but we have typescript codegen as well with 

`npm run codegen`