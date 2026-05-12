import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repositoryBase = '/upgraded-fun/';

export default defineConfig({
  base: repositoryBase,
  plugins: [react()]
});
