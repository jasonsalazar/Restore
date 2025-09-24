import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mkcert from "vite-plugin-mkcert";

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "../Restore/wwwroot",
    chunkSizeWarningLimit: 1024,
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  },
  plugins: [react(), mkcert()],
});
