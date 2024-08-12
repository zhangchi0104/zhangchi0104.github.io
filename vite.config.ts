import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteStaticCopy } from 'vite-plugin-static-copy';
import Terminal from "vite-plugin-terminal";
export default defineConfig({
  plugins: [react(), viteStaticCopy(
    {
      targets: [
        {
          src: 'static/**',
          dest: 'static'
        }
      ]
    }), Terminal()],
  assetsInclude: ["static/"],
  build: {
    outDir: "dist"
  },
  server: {
    hmr: {
      overlay: true
    }
  },
  resolve: {
    alias: [
      { find: "@langs", replacement: path.resolve(__dirname, "src/langs") },
      { find: "@", replacement: path.resolve(__dirname, "src") }
    ]
  }
});
