import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'serve-models',
      configureServer(server) {
        server.middlewares.use('/models', (req, res, next) => {
          const pathname = new URL(req.url, 'http://localhost').pathname;
          const filePath = path.resolve(process.cwd(), 'models', decodeURI(pathname.slice(1)));
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            const ext = path.extname(filePath);
            if (ext === '.json') res.setHeader('Content-Type', 'application/json');
            fs.createReadStream(filePath).pipe(res);
          } else {
            next();
          }
        });
      }
    }
  ],
})