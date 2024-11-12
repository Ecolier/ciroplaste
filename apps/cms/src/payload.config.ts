import path from "path";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { buildConfig } from "payload/config";
import Users from "./collections/Users";
import Stories from "./collections/Stories";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import Media from "./collections/Media";
import webpack from "./webpack";
import cloudStorage from "./cloud-storage";
import db from "./database";
import typescript from "./typescript";
import routes from "./routes";

export default buildConfig({
  routes,
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    webpack
  },
  localization: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    fallback: true,
  },
  editor: lexicalEditor({}),
  collections: [Users, Stories, Media],
  typescript,
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [cloudStorage],
  db,
  cors: ['https://ciroplaste.com'],
});
