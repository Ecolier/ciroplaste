import { CollectionConfig } from "payload";

const webBaseUrl = process.env.WEB_BASE_URL;

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
  ],
  hooks: {
    afterChange: [(args) => {
      fetch(`${webBaseUrl}/api/revalidate?path=/explore&locale=${args.req.locale}`)
    }],
  },
};

export default Stories;
