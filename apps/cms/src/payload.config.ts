import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import Articles from './collections/Articles'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import Media from './collections/Media'

const baseUrl = process.env.PAYLOAD_PUBLIC_BASE_URL;

export default buildConfig({
  routes: {
    admin: `${baseUrl}/admin`,
    api: `${baseUrl}/api`
  },
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: lexicalEditor({}),
  collections: [Users, Articles, Media],
  typescript: {
    declare: false,
    outputFile: process.env.CMS_TYPES_PATH ?? path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  cors: ['http://172.20.10.3', 'http://172.20.10.2', 'http://localhost', 'https://ciroplaste.com'],
})
