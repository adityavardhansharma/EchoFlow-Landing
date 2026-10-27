import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

// EchoFlow landing page — static, zero-runtime-framework Astro site.
export default defineConfig({
  site:
    process.env.PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'https://echo-flow-landing.vercel.app'),
  server: { port: 4321, host: true },
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
