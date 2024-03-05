import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// alias path
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@app": resolve(__dirname, "./src"),
      "@adapters": resolve(__dirname, "./src/adapters"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@components": resolve(__dirname, "./src/components"),
      "@context": resolve(__dirname, "./src/context"),
      "@guards": resolve(__dirname, "./src/guards"),
      "@helpers": resolve(__dirname, "./src/helpers"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@interceptors": resolve(__dirname, "./src/interceptors"),
      "@models": resolve(__dirname, "./src/models"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@store": resolve(__dirname, "./src/redux"),
      "@routes": resolve(__dirname, "./src/routes"),
      "@services": resolve(__dirname, "./src/services"),
      "@style-components": resolve(__dirname, "./src/style-components"),
    },
  },
  plugins: [react()],
});
