import { component, defineMarkdocConfig } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  tags: {
    smiley: {
      render: component("./src/components/Smiley.astro"),
      attributes: {
        emotion: { type: String, required: true },
      },
    },
  },
});
