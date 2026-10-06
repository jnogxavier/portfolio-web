// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jnogxavier.com.br',
  redirects: { '/sobre': '/#sobre', '/casos': '/#casos' },
});
