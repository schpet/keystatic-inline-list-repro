import { config, fields, collection } from "@keystatic/core";
import { inline } from "@keystatic/core/content-components";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "src/assets/images/posts",
              publicPath: "../../assets/images/posts/",
            },
          },
          components: {
            smiley: inline({
              label: "Smiley",
              schema: {
                emotion: fields.select({
                  label: "how are you?",
                  defaultValue: "☺",
                  options: [
                    { label: "Smiley", value: "☺" },
                    { label: "Frowny", value: "☹" },
                  ],
                }),
              },
            }),
          },
        }),
      },
    }),
  },
});
