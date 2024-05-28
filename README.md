# Optimizely SaaS CMS example site using [Astro](https://astro.build/)

This example site shows how Optimizely SaaS CMS can be used with Astro. To configure your own all you would need is to import the data into your CMS instance and plug in the relevant values in `.env` and the other configuration files.

## Static Site Version

[https://opti-saas-astro-static-demo.vercel.app](https://opti-saas-astro-static-demo.vercel.app)

See the `/src/static-site/cms-data/` folder for an export you can import to your headless CMS with sample content and models.

Stared with the Astro blog template.

---

```sh
npm create astro@latest -- --template blog
```

See `.env` for environment variable used to connect to the SaaS CMS Optimizely Graph instance.

## Dev Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

