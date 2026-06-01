import { defineConfig } from 'astro/config';

// EchoFlow landing page — static, zero-runtime-framework Astro site.
export default defineConfig({
  site: 'https://echoflow.app',
  server: { port: 4321, host: true },
});
