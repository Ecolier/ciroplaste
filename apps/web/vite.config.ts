import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    base: mode === "development" ? "/web/" : "/",
    plugins: [react()],
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
  })
};
