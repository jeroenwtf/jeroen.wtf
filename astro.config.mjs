import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://jeroen.wtf",
  integrations: [tailwind(), icon(), robotsTxt()],
  output: "static",
});
