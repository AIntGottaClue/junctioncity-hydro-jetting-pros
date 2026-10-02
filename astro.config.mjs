import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://junctioncityhydrojetting.prosapp.site',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
