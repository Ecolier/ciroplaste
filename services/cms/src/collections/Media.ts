import { CollectionConfig } from "payload/types";
import path from "path";

const Media: CollectionConfig = {
  access: {
    read: () => true,
  },
  slug: "media",
  upload: {
    staticURL: "/media",
    staticDir: path.resolve(__dirname, "..", "..", "media"),
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
};

export default Media;
