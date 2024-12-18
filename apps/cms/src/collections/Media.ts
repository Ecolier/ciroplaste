import { CollectionConfig } from "payload";
import path from "path";

const Media: CollectionConfig = {
  access: {
    read: () => true,
  },
  slug: "media",
  upload: {},
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
};

export default Media;
