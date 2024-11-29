import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import wikiLinkPlugin from "remark-wiki-link";
import { getNotesPermalinks, slugify } from "./src/helpers/notes";

// TODO: This is being applied in all collections, check about it

export default defineConfig({
  site: "https://jeroen.wtf",
  integrations: [tailwind(), icon(), robotsTxt()],
  output: "static",
  markdown: {
    remarkPlugins: [
      [
        wikiLinkPlugin,
        {
          permalinks: getNotesPermalinks(),
          pageResolver: (pageName) => {
            let slug = slugify(pageName);
            slug = slug.replace("02-areas/", "");
            return [slug];
          },
          aliasDivider: "|",
          hrefTemplate: (permalink) => `/notes/${permalink}`,
        },
      ],
    ],
  },
});
