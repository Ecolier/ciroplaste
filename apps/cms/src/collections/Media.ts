import { CollectionConfig } from "payload/types";
import path from "path";

const assetsBaseUrl = process.env.ASSETS_BASE_URL;

const Media: CollectionConfig = {
  access: {
    read: () => true,
  },
  slug: "media",
  upload: {
    staticURL: assetsBaseUrl,
    staticDir: path.resolve(__dirname, "..", "..", "media"),
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
  hooks: {
    beforeChange: [(args) => {
      console.log(args)
    }]
  }
};

export default Media;
