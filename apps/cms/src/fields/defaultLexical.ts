import { Config } from "payload";
import {
  BoldFeature,
  ItalicFeature,
  LinkFeature,
  ParagraphFeature,
  lexicalEditor,
  UnderlineFeature,
  UploadFeature,
} from "@payloadcms/richtext-lexical";

export const defaultLexical: Config["editor"] = lexicalEditor({
  features: ({ defaultFeatures }) => [
    ...defaultFeatures,
    LinkFeature({
      enabledCollections: ["stories"],
      fields({ defaultFields }) {
        const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
          if ("name" in field && field.name === "url") return false;
          return true;
        });
        return [
          ...defaultFieldsWithoutUrl,
          {
            name: "url",
            type: "text",
            admin: {
              condition: ({ linkType }) => linkType !== "internal",
            },
            label: ({ t }) => t("fields:enterURL"),
            required: true,
          },
        ];
      },
    }),
    UploadFeature({
      collections: {
        uploads: {
          // Example showing how to customize the built-in fields
          // of the Upload feature
          fields: [
            {
              name: 'caption',
              type: 'richText',
              editor: lexicalEditor(),
            },
          ],
        },
      },
    }),
  ],
});
