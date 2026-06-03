import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

// EchoFlow landing page — static, zero-runtime-framework Astro site.
export default defineConfig({
  site: 'https://echoflow.app',
  server: { port: 4321, host: true },
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
