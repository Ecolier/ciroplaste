import path from "path";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { buildConfig } from "payload/config";
import Users from "./collections/Users";
import Articles from "./collections/Articles";
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
  editor: lexicalEditor({}),
  collections: [Users, Articles, Media],
  typescript,
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [cloudStorage],
  db,
  cors: ['https://ciroplaste.com']
});
