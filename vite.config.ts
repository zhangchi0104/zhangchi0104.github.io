import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteStaticCopy } from 'vite-plugin-static-copy'
export default defineConfig({
  plugins: [react(), viteStaticCopy(
    {
      targets: [
        {
          src: 'static/**',
          dest: 'static'
        }
      ]
    })],
  assetsInclude: ["static/"],
  build: {
    outDir: "dist"
  },
  resolve: {
    alias: [
      { find: "@langs", replacement: path.resolve(__dirname, "src/langs") },
      { find: "@", replacement: path.resolve(__dirname, "src") }
    ]
  }
});
