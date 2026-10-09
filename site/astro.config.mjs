// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jnogxavier.com.br',
  build: { inlineStylesheets: 'always' },
  redirects: { '/sobre': '/#sobre', '/casos': '/#casos' },
});
