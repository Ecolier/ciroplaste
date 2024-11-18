import { CollectionConfig } from "payload";
import * as crypto from "crypto";
import secrets from "@/secrets";

const webBaseUrl = process.env.WEB_BASE_URL;
const { SECRET } = secrets;

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
    afterChange: [
      (args) => {
        const body = JSON.stringify({
          locale: args.req.locale,
          story: args.doc.id,
        });
        const key = Buffer.from(SECRET, "hex");
        const signature = crypto
          .createHmac("sha256", key)
          .update(body)
          .digest("hex");
        fetch(`${webBaseUrl}/api/revalidate`, {
          method: "POST",
          body,
          headers: {
            "x-hub-signature-256": `sha256=${signature}`,
          },
        }).then((res) => {
          console.log(res)
        });
      },
    ],
  },
};

export default Stories;
