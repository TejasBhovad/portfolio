import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import { defineConfig } from 'waku/config';

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      mdx(),
      react({
        babel: {
          plugins: ['babel-plugin-react-compiler'],
        },
      }),
    ],
  },
});
