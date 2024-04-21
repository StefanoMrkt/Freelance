import { defineConfig } from 'vite'
import { viteSSRPlugin } from "vite-plugin-ssr/plugin";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSSRPlugin()],
});


