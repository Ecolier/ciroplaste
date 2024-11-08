import { CollectionConfig } from "payload/types";

const Stories: CollectionConfig = {
  slug: "stories",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      localized: true,
    },
    {
      name: "subtitle",
      type: "text",
      localized: true,
    },
    {
      name: "callout",
      type: "relationship",
      relationTo: ["media"],
    },
    {
      name: "content",
      type: "richText",
      localized: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: ["users"],
    },
    {
      name: "availableLanguages",
      type: "select",
      hasMany: true,
      options: ["en", "fr"]
    }
  ],
};

export default Stories;
