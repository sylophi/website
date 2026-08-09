import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { loadEnv } from 'vite';

const env = loadEnv('', process.cwd(), '');
const port = env.PORT ? Number(env.PORT) : undefined;

export default defineConfig({
  output: 'static',
  server: port ? { port } : undefined,
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
