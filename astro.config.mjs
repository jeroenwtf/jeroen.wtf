import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://jeroen.wtf',
  integrations: [react(), tailwind(), astroImageTools]
});
