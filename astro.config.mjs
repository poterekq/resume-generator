import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue()],
  vite: {
    ssr: {
      external: ["svgo"]
    },
    plugins: [Icons({
      autoInstall: true
    })]
  }
});