import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://opti-saas-astro-static-demo.vercel.app',
	integrations: [sitemap()],
});
