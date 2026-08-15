import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // Permite o domínio temporário usado para visualizar o site no navegador.
      allowedHosts: true as const,
      // O HMR pode ser desativado pelo ambiente por meio da variável DISABLE_HMR.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Desativa o monitoramento de arquivos quando o HMR está desligado para economizar CPU.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
